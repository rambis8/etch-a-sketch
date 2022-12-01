const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");
const clearBtn = document.getElementById("clearBtn");

gridButton.addEventListener('click', (e) => {
    const numbOfSquares = prompt('Number of squares per side in the new grid?');
    if (numbOfSquares > 100) {
        alert('The maximum number of squares per side is 100.');
        return;
    }
    createGrid(numbOfSquares, numbOfSquares)
})

clearBtn.addEventListener('click', (e) => {
    squares = document.getElementsByClassName("grid-item");
    for (let square of squares) {
        square.style.setProperty('background-color', 'lightgray');
    }
})

function createGrid(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let square = document.createElement('div');
        square.addEventListener('mousedown', (e) => {
            square.style.setProperty('background-color', 'black')
        })
        square.addEventListener('mouseenter', (e) => {
            if (e.buttons == 1) {
                square.style.setProperty('background-color', 'black');
            }
        })
        container.appendChild(square).className = "grid-item";
    };
}

createGrid(4, 4);

