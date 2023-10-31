import { ID, databases, storage } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupByColumn";
import uploadImage from "@/lib/uploadImage";
import { TBoard, TColumn, TImage, TTodo, TTypedColumn } from "@/typings";
import { create } from "zustand";

interface BoardState {
  board: TBoard;
  getBoard: () => void;
  setBoardState: (board: TBoard) => void;

  searchString: string;
  setSearchString: (searchString: string) => void;

  newTaskInput: string;
  setNewTaskInput: (newTaskInput: string) => void;

  newTaskType: TTypedColumn;
  setNewTaskType: (columnId: TTypedColumn) => void;

  image: File | null;
  setImage: (image: File | null) => void;

  addTask: (todo: string, columnId: TTypedColumn, image?: File | null) => void;
  updateTask: (todo: TTodo, columnId: string) => void;
  deleteTask: (todoIndex: number, todo: TTodo, id: TTypedColumn) => void;
  editTask: (
    todo: TTodo,
    newTitle: string,
    newStatus: TTypedColumn,
    newImage?: File | null
  ) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TTypedColumn, TColumn>(),
  },

  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  searchString: "",
  setSearchString: (searchString) => set({ searchString }),

  newTaskInput: "",
  setNewTaskInput: (newTaskInput) => set({ newTaskInput }),

  newTaskType: "todo",
  setNewTaskType: (columnId) => set({ newTaskType: columnId }),

  image: null,
  setImage: (image) => set({ image }),

  addTask: async (todo, columnId, image) => {
    let file: TImage | undefined;

    if (image) {
      const fileUploaded = await uploadImage(image);
      if (fileUploaded) {
        file = {
          bucketId: fileUploaded.bucketId,
          filedId: fileUploaded.$id,
        };
      }
    }

    const { $id } = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      ID.unique(),
      {
        title: todo,
        status: columnId,
        // include img if exists
        ...(file && { image: JSON.stringify(file) }),
      }
    );

    set({ newTaskInput: "" });

    set((state) => {
      const newColumns = new Map<TTypedColumn, TColumn>(state.board.columns);
      const newTodo: TTodo = {
        $id,
        $createdAt: new Date().toISOString(),
        title: todo,
        status: columnId,
        // include img if exists
        ...(file && { image: file }),
      };
      const column = newColumns.get(columnId);
      if (!column) {
        newColumns.set(columnId, {
          id: columnId,
          todos: [newTodo],
        });
      } else {
        newColumns.get(columnId)?.todos.push(newTodo);
      }
      return { board: { columns: newColumns } };
    });
  },

  updateTask: async (todo, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },

  deleteTask: async (todoIndex, todo, id) => {
    const newColumns = new Map(get().board.columns);
    // delete todoId from newColumns
    newColumns.get(id)?.todos.splice(todoIndex, 1);
    set({ board: { columns: newColumns } });

    if (todo.image) {
      await storage.deleteFile(todo.image.bucketId, todo.image.filedId);
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    );
  },
  editTask: async (todo, newTitle, newStatus, newImage) => {
    let updatedFile: TImage | undefined;

    if (newImage) {
      const fileUploaded = await uploadImage(newImage);
      if (fileUploaded) {
        updatedFile = {
          bucketId: fileUploaded.bucketId,
          filedId: fileUploaded.$id,
        };
      }
    }

    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: newTitle,
        status: newStatus,

        ...(updatedFile && {image:JSON.stringify(updatedFile)}),
      }
    );
  },
}));
