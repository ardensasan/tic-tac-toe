import { Fragment, useEffect, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { checkWin, getColor } from "../utils/grid";
import defaultGrid from "./grid";
const Main = () => {
  const [grid, setGrid] = useState(defaultGrid);
  const [turn, setTurn] = useState("p");
  const handleOnclick = (square: any) => {
    if (square.value !== "") return;
    if (turn === "p") {
      square.value = "o";
      setTurn("cpu");
    }
    if (turn === "cpu") {
      square.value = "x";
      setTurn("p");
    }
    checkWin(grid)
    console.log('%c 🍨     checkWin(grid): ', 'font-size:20px;background-color: #B03734;color:#fff;',     checkWin(grid));
  };

  useEffect(()=>{

  })
  return (
    <Stage width={500} height={500}>
      <Layer>
        {grid.map((square) => {
          return (
            <Rect
              x={square.x * 32}
              y={square.y * 32}
              width={32}
              height={32}
              fill={getColor(square.value)}
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
