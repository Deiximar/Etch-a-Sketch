const container = document.querySelector('.container');
let color = "#000";

function createGrid(rows, cels) {
  removeDOMELement();
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  }

  for (let i = 0; i < cels; i++) {

    const rows = document.querySelectorAll('.row')
    rows.forEach(row => {
      const cel = document.createElement('div');
      cel.classList.add('cel');
      addEventListenerCel(cel);
      row.appendChild(cel);
    });
  }
}

createGrid(5, 5);

function addEventListenerCel(cel) {
  cel.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = setBg(cel);
  })
}


function setGrid() {
  let number = 0;
  do {
    number = prompt("Select a number between 5 and 100 to make a sketch");
  } while (number > 100 || number < 5);
  createGrid(number, number);

}

function removeDOMELement() {
  const rows = document.querySelectorAll(".row");
  rows.forEach(row => {
    row.remove();
  });
}

const setBg = (cel) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  color === "rainbow" ? cel.style.backgroundColor = "#" + randomColor : cel.style.backgroundColor = color;
}

function choiceColor(choiceColor) {
  color = choiceColor;
  cels = document.querySelectorAll(".cel");

  cels.forEach(cel => {
    addEventListenerCel(cel);
  })
}


function reset() {
  cels = document.querySelectorAll(".cel");
  cels.forEach(cel => {
    cel.style.backgroundColor = "#e0e0e0";
  })
}