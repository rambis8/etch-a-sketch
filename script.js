const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");

gridButton.addEventListener('click', (e) => {
    const numbOfSquares = prompt('Number of squares per side in the new grid?');
    if (numbOfSquares > 100) {
        alert('The maximum number of squares per side is 100.');
        return;
    }
    createGrid(numbOfSquares, numbOfSquares)
})

function createGrid(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let square = document.createElement('div');
        square.addEventListener('mouseenter', (e) => {
            square.style.setProperty('background-color', 'black')
        })
        square.addEventListener('mouseleave', (e) => {
            square.style.setProperty('background-color', 'lightgray');
            square.style.setProperty('transition', 'background-color 1s ease' )
        })
        container.appendChild(square).className = "grid-item";
    };
}

createGrid(4, 4);

