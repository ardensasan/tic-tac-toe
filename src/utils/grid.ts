export const getColor = (value: string) => {
  if (value === "o") {
    return "red";
  }
  if (value === "x") {
    return "blue";
  }
  return "white";
};

export const checkWin = (grid: Array<any>) => {
  let result = Object.values(
    grid.filter((box) => box.x === 0 && box.value !== "")
  );

  result = Object.values(grid.filter((box) => box.x === 1 && box.value !== ""));
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(grid.filter((box) => box.x === 2 && box.value !== ""));
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(grid.filter((box) => box.y === 0 && box.value !== ""));
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(grid.filter((box) => box.y === 1 && box.value !== ""));
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(grid.filter((box) => box.y === 2 && box.value !== ""));
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(
    grid.filter(
      (box) =>
        (box.x === 1 && box.y === 1) ||
        (box.x === 0 && box.y === 0) ||
        (box.x === 2 && box.y === 2)
    )
  );
  if(checkPattern(result)){
    return result[0].value
  }
  result = Object.values(
    grid.filter(
      (box) =>
        (box.x === 1 && box.y === 1) ||
        (box.x === 0 && box.y === 2) ||
        (box.x === 2 && box.y === 0)
    )
  );
  if(checkPattern(result)){
    return result[0].value
  }
  return "";
};

const checkPattern = (result: Array<any>) => {
  return (
    result.length >= 3 &&
    result[0].value === result[1].value &&
    result[1].value === result[2].value
  )
};

export const resetGrid = (grid:Array<any>) =>{
  return grid.map((square)=>{
    return {...square,value: ""}
  })
}