import { Models } from "appwrite";
interface TBoard {
  columns: Map<TTypedColumn, TColumn>;
}

type TTypedColumn = "todo" | "inprogress" | "done";

interface TColumn {
  id: TTypedColumn;
  todos: TTodo[];
}

interface TTodo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TTypedColumn;
  image?: string;
}

interface TImage {
  bucketId: string;
  filedId: string;
}
