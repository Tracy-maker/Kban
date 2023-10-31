"use client";

import getUrl from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";
import { TTodo, TTypedColumn } from "@/typings";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: TTodo;
  index: number;
  id: TTypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      (async () => {
        const url = await getUrl(todo.image!);
        if (url) setImageUrl(url.toString());
      })();
    }
  }, [todo]);
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-3">
        <p>{todo.title}</p>
        <div>
          <button onClick={() => deleteTask(index, todo, id)}>
            <XCircleIcon className=" h-8 w-8 text-red-300 hover:text-red-500" />
          </button>
          <button>
            <PencilSquareIcon className="ml-2 h-8 w-8 text-purple-300 hover:text-purple-600" />
          </button>
        </div>
      </div>

      {imageUrl && (
        <div className="relative h-full w-full rounded-b-md">
          <Image
            src={imageUrl}
            alt="Task image"
            className="w-full object-contain rounded-b-md"
            height={200}
            width={400}
          />
        </div>
      )}
    </div>
  );
}

export default TodoCard;
