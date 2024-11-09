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
    square.style.flex = '1 1 0';
    square.style.backgroundColor = 'antiquewhite';

    return square;
}

/**
 * Generates a row of n squares
 * @param {number} n 
 */
function genRow(n) {
    const rowOfSquares = document.createElement('div');
    rowOfSquares.style.display = 'flex';
    rowOfSquares.style.flex = '1 1 0';

    return rowOfSquares;
}

function genGrid(n) {

}