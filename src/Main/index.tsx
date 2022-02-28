import { Fragment, useEffect, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { checkWin, getColor } from "../utils/grid";
import defaultGrid from "./grid";
import { Square } from "./types";
const Main = () => {
  const PLAYER = "player";
  const CPU = "cpu";
  const START = "start"
  const END = "end"
  const [gameState,setGameState] = useState({
    grid: defaultGrid,
    turn: PLAYER,
    status: START
  })
  const handleOnclick = (value: any) => {
    const {turn,grid} = gameState
    if (value !== "") return;
    if (turn === PLAYER) {
      value = "o";
      setGameState({...gameState,turn: CPU});
    }
    if (turn === CPU) {
      value = "x";
      setGameState({...gameState,turn: PLAYER});
    }
    if(checkWin(grid)){
      turn === PLAYER ? console.log(PLAYER + "win") : console.log(CPU + "win")
    }
  };

  const handleResetGame = () => {
    setGameState({...gameState,grid: defaultGrid})
  }

  return (
    <Stage width={500} height={500}>
      <Layer>
        {gameState.grid.map(({x,y,value}:Square) => {
          return (
            <Rect
              x={x * 32}
              y={y * 32}
              width={32}
              height={32}
              fill={getColor(value)}
              stroke="black"
              strokeWidth={1}
              onClick={() => handleOnclick(value)}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Main;
