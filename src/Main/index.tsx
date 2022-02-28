import { useState } from "react";
import { Layer, Rect, Stage, Text } from "react-konva";
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
  const handleOnclick = (square: any) => {
    const {turn,grid} = gameState
    const {value} = square
    if (value !== "") return;
    if (turn === PLAYER) {
      square.value = "o";
      setGameState({...gameState,turn: CPU});
    }
    if (turn === CPU) {
      square.value = "x";
      setGameState({...gameState,turn: PLAYER});
    }
    if(checkWin(grid)){
      setGameState({...gameState,status: END})
    }
  };

  return (
    <Stage width={500} height={500}>
      <Layer>
      {gameState.status === END ? <Text text={`${gameState.turn} win`} x={20} y={20} fontSize={20} fontFamily="Calibri" fill="green"/>:
      gameState.grid.map((square:Square) => {
        const {x,y,value} = square
        return (
          <Rect
            x={x * 32}
            y={y * 32}
            width={32}
            height={32}
            fill={getColor(value)}
            stroke="black"
            strokeWidth={1}
            onClick={() => handleOnclick(square)}
          />
        );
      })}
      </Layer>
    </Stage>
  );
};

export default Main;
