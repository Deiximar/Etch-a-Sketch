const container = document.querySelector('.container');

function createGrid(rows, cels) {
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
      row.appendChild(cel);
    });
  }
}

createGrid(5, 5);
