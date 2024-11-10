/**
 * Etch-A-Sketch
 * By Aaron J. Aben
 * 
 * Generates an nxn grid of squares in which the squares change color
 * when hovered on.
 */

const grid = document.querySelector('.grid');
const resizeBtn = document.querySelector('#resize');

genGrid(grid);

resizeBtn.addEventListener('click', () => {
    let newSize = prompt('How many squares do you want per side?');
    newSize = parseInt(newSize.trim());
    if (newSize) {
        if (newSize < 0) {
            alert("Please input a positive integer");
            return;
        } else if (newSize > 100) {
            alert("The size limit is 100 squares per side");
            return;
        }

        deleteGrid(grid);
        genGrid(grid, newSize);
    }
});

// Represent grid as column flexbox of row flexboxes

/**
 * Generates a single square div based on the grid dimensions and the number of
 * squares required
 * @param {number} n 
 * 
 * @returns {object} square
 */
function genSquare(n) {
    const square = document.createElement('div');
    square.classList.add('square');

    return square;
}

/**
 * Generates a row of n squares
 * @param {number} n 
 * 
 * @returns {object} rowOfSquares
 */
function genRow(n) {
    const rowOfSquares = document.createElement('div');
    rowOfSquares.classList.add('rowOfSquares');

    for (let i = 0; i < n; i++) {
        rowOfSquares.appendChild(genSquare(n));
    }

    return rowOfSquares;
}

/**
 * Generate a grid of n quadrilaterals in element canvas
 * @param {object} canvas 
 * @param {number} n 
 * 
 * @returns {object} canvas
 */
function genGrid(canvas, n=16) {
    for (let i = 0; i < n; i++) {
        canvas.appendChild(genRow(n));
    }

    canvas.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = genRgbString();
        }
    });

    return canvas;
}

/**
 * Removes all squares from the the grid specified by canvas
 * 
 * @param {object} canvas 
 */
function deleteGrid(canvas) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    return canvas;
}

/**
 * Return a string representing a randomized RGB color
 * 
 */
function genRgbString() {
    const rgbVals = new Array(3);

    for (let i = 0; i < 3; i++) {
        rgbVals[i] = Math.floor(Math.random() * 256);
    }

    const rgbString = `rgb(${rgbVals[0]}, ${rgbVals[1]}, ${rgbVals[2]})`;
    return rgbString;
}

/**
 * Makes all squares return to their starting color
 * @param {object} canvas 
 */
function clearCanvas(canvas){
}