import "./style.css";
let Columns = 4;
let Rows = 4;
window.onload = function () {
  SetGame();
};
const Board = document.querySelector("#board") as HTMLDivElement;
let GameTable = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
function SetGame() {
  for (let col = 0; col < Columns; col++) {
    for (let row = 0; row < Rows; row++) {
      let NewTile = document.createElement("div");
      NewTile.id = col.toString() + "-" + row.toString();
      let num: number = GameTable[col][row];
      SetTiles(NewTile, num);
      Board.appendChild(NewTile);
    }
  }
  createNewTile();
  createNewTile();
}

function SetTiles(NewTile: HTMLDivElement, num: number) {
  NewTile.className = "x0";
  NewTile.innerHTML = "";
  if (num > 0) {
    NewTile.innerText = num.toString();
    NewTile.className = "x" + NewTile.innerText;
  }
}
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    createNewTile();
  } else if (e.code == "ArrowRight") {
    slideRight();
    createNewTile();
  } else if (e.code == "ArrowUp") {
    slideUp();
    createNewTile();
  } else if (e.code == "ArrowDown") {
    SlideDown();
    createNewTile();
  }
});
function createNewTile() {
  if (!isAnyTileFree()) {
    return;
  }

  let filed = false;
  while (!filed) {
    let r = Math.floor(Math.random() * Rows);
    let c = Math.floor(Math.random() * Columns);
    if (GameTable[r][c] === 0) {
      GameTable[r][c] = 2;
      let tile = document.getElementById(`${r}-${c}`) as HTMLDivElement;
      let randomTile = Math.ceil(Math.random() * 10);
      tile.innerText = randomTile > 9 ? "4" : "2";
      tile.className = randomTile > 9 ? "x4" : "x2";
      filed = true;
    }
  }
}
function isAnyTileFree() {
  return GameTable.some((row) => row.includes(0));
}

function slideRight() {
  for (let r = 0; r < Rows; r++) {
    let row = GameTable[r]; // [2,2,0,0]
    row.reverse(); //[0,0,0,4]
    row = slide(row); //[4,0,0,0]
    GameTable[r] = row.reverse(); //[0,0,0,4]
    for (let c = 0; c < Columns; c++) {
      let tile = document.getElementById(
        r.toString() + "-" + c.toString()
      ) as HTMLDivElement;
      let num: number = GameTable[r][c];
      SetTiles(tile, num);
    }
  }
}
function slide(row: number[]) {
  row = RemoveZeros(row);
  for (let r = 0; r < row.length - 1; r++) {
    if (row[r] == row[r + 1]) {
      row[r] += row[r];
      points = CountPoints(row[r]);
      let PointsId = document.querySelector("#PointsId") as HTMLHeadingElement;
      PointsId.innerHTML = "Points: " + points;
      row[r + 1] = 0;
    }
  }
  row = RemoveZeros(row);
  while (row.length < Columns) {
    row.push(0);
  }
  return row;
}
function RemoveZeros(row: number[]) {
  return row.filter((num) => num !== 0);
}
function slideUp() {
  for (let c = 0; c < Columns; c++) {
    let row = [
      GameTable[0][c],
      GameTable[1][c],
      GameTable[2][c],
      GameTable[3][c],
    ];
    row = slide(row);

    GameTable[0][c] = row[0];
    GameTable[1][c] = row[1];
    GameTable[2][c] = row[2];
    GameTable[3][c] = row[3];
    for (let r = 0; r < Columns; r++) {
      let tile = document.getElementById(
        r.toString() + "-" + c.toString()
      ) as HTMLDivElement;
      let num: number = GameTable[r][c];
      SetTiles(tile, num);
    }
  }
}
function SlideDown() {
  for (let c = 0; c < Columns; c++) {
    let row = [
      GameTable[3][c],
      GameTable[2][c],
      GameTable[1][c],
      GameTable[0][c],
    ];
    row = slide(row);

    GameTable[3][c] = row[0];
    GameTable[2][c] = row[1];
    GameTable[1][c] = row[2];
    GameTable[0][c] = row[3];
    for (let r = 0; r < Columns; r++) {
      let tile = document.getElementById(
        r.toString() + "-" + c.toString()
      ) as HTMLDivElement;
      let num: number = GameTable[r][c];
      SetTiles(tile, num);
    }
  }
}

function slideLeft() {
  for (let r = 0; r < Rows; r++) {
    let row = GameTable[r];
    row = slide(row);
    GameTable[r] = row;
    for (let c = 0; c < Columns; c++) {
      let tile = document.getElementById(
        r.toString() + "-" + c.toString()
      ) as HTMLDivElement;
      let num: number = GameTable[r][c];
      SetTiles(tile, num);
    }
  }
}
let points = 0;

function CountPoints(row: number) {
  return (points += row);
}
//dodac instrukcje sterowania i styl na kafalek mniej kodu
//dodac responsywnosc