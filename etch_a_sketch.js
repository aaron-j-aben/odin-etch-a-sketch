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
    square.style.flex = '1 1 auto';
    square.style.backgroundColor = 'antiquewhite';
}

function genRow(n) {

}

function genGrid(n) {

}