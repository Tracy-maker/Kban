"use client";

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggleProps,
} from "react-beautiful-dnd";
type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggleProps;
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
  return <div>TodoCard</div>;
}

export default TodoCard;
