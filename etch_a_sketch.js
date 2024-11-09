/**
 * Etch-A-Sketch
 * By Aaron J. Aben
 * 
 * Generates an nxn grid of squares in which the squares change color
 * when hovered on.
 */

const grid = document.querySelector('.grid');
const grid_px = grid.style.width;

// Represent grid as column flexbox of row flexboxes

/**
 * Generates a single square div based on the grid dimensions and the number of
 * squares required
 * @param {number} n 
 */
function genSquare(n) {
    const square = document.createElement('div');
    square.classList.add('square');

    return square;
}

/**
 * Generates a row of n squares
 * @param {number} n 
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
 */
function genGrid(canvas, n) {
    for (let i = 0; i < n; i++) {
        canvas.appendChild(rowOfSquares(n));
    }

    return canvas;
}