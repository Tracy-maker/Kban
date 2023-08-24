import {useBoardStore} from '@/store/BoardStore'
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
    const getBoard = useBoardStore((state) => state.getBoard);
  return (

<h1
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div></div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
