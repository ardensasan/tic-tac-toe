import { Fragment, useState } from "react";
import { Layer, Rect, Stage, Text } from "react-konva";
import { checkWin, getColor, resetGrid } from "../utils/grid";
import defaultGrid from "./grid";
import { Square } from "./types";
const Main = () => {
  const PLAYER = "PLAYER";
  const CPU = "CPU";
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

  const handleResetGame = () =>{
    setGameState({status: START,turn: PLAYER, grid:resetGrid(defaultGrid)})
  }

  return (
    <Fragment>
      <button onClick={handleResetGame}>Reset</button>
      <Stage width={500} height={500}>
        <Layer>
        {gameState.status === END ? <Text text={`${gameState.turn} wins`} x={20} y={20} fontSize={20} fontFamily="Calibri" fill="green"/>:
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
    </Fragment>
  );
};

export default Main;
