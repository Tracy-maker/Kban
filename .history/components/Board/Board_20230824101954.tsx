import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
function Board() {
    const getBoard = useBoardStore((state) => state.getboard);
  return (


    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div></div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
