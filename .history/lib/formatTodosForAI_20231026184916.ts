import { TBoard, TTodo, TTypedColumn } from "@/typings";

const formatTodosForAI = (board: TBoard) => {
  const todos = Array.from(board.columns.entries());

  const flatArray = todos.reduce((map, [key, value]) => {
    map[key] = value.todos;
    return map;
  }, {} as { [key in TTypedColumn]: TTodo[] });

  const flatArrayCounted = Object.entries(flatArray).reduce(
    (map, [key, value]) => {
      map[key as TTypedColumn] = value.length;
      return map;
    },
    {} as { [key in TTypedColumn]: number }
  );

  return flatArrayCounted;
};
export default formatTodosForAI;
