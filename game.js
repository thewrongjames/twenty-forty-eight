const grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

const addNumberToGrid = function() {
    xCoordinate = Math.floor(Math.random() * 4);
    yCoordinate = Math.floor(Math.random() * 4);

    while (grid[xCoordinate][yCoordinate] != 0) {
        xCoordinate = Math.floor(Math.random() * 4);
        yCoordinate = Math.floor(Math.random() * 4);
    }

    grid[xCoordinate][yCoordinate] = 7;
}

const updateBoard = function() {
    for (x = 0; x < 4; x++) {
        for (y = 0; y < 4; y++) {
            let square = document.getElementById('square-' + x + '-' + y);
                square.innerHTML = grid[x][y];
            let colour = Math.atan(grid[x][y] * 0.04) * 510 / Math.PI;
            let colorString = '' + colour
            let backgroundColour = 255 - colour
            let backgroundColourString = '' + backgroundColour;
            console.log(backgroundColour);
            console.log(backgroundColourString);
            console.log(square.style.backgroundColor);
            square.style.backgroundColor = 'rgb(' + backgroundColourString +
                ', ' + backgroundColourString + ', ' + backgroundColourString +
                ')';
            square.style.color = 'rgb(' + colour + ', ' + colour + ', ' +
                colour + ')';
        }
    }

    addNumberToGrid();
}

addNumberToGrid();
updateBoard();

const shiftSquare = function(currentX, currentY, nextX, nextY) {
    // Returns a boolean, true if it should keep moving, false otherwise.

    let valueOfSquareToCheckMergeInto = grid[nextX][nextY];
    let valueOfCurrentSquare = grid[currentX][currentY];

    console.log(valueOfSquareToCheckMergeInto);
    console.log(valueOfCurrentSquare);

    if (valueOfSquareToCheckMergeInto === 0) {
        grid[nextX][nextY] = valueOfCurrentSquare;
        grid[currentX][currentY] = 0;
        return true;
    }

    else if (valueOfCurrentSquare === valueOfSquareToCheckMergeInto) {
        grid[nextX][nextY] *= 2;
        grid[currentX][currentY] = 0;
    }

    return false;
}

window.onkeydown = function(event) {
    if (event.keyCode === 37) {
        // Left
        for (x = 0; x < 4; x++) {
            for (y = 0; y < 4; y++) {
                for (
                        currentXOfSquare = x;
                        currentXOfSquare > 0;
                        currentXOfSquare--
                ) {
                    if (
                            !shiftSquare(
                                currentXOfSquare,
                                y,
                                currentXOfSquare - 1,
                                y
                            )
                    ) {
                        break;
                    }
                }
            }
        }
        updateBoard();
    }
    if (event.keyCode === 38) {
        // Up
        for (x = 0; x < 4; x++) {
            for (y = 0; y < 4; y++) {
                for (
                        currentYOfSquare = y;
                        currentYOfSquare >= 0;
                        currentYOfSquare--
                ) {
                    if (
                            !shiftSquare(
                                x,
                                currentYOfSquare,
                                x,
                                currentYOfSquare - 1
                            )
                    ) {
                        break;
                    }
                }
            }
        }
        updateBoard();
    }
    if (event.keyCode === 39) {
        // Right
        for (x = 3; x >= 0; x--) {
            for (y = 0; y < 4; y++) {
                for (
                        currentXOfSquare = x;
                        currentXOfSquare < 3;
                        currentXOfSquare++
                ) {
                    if (
                            !shiftSquare(
                                currentXOfSquare,
                                y,
                                currentXOfSquare + 1,
                                y
                            )
                    ) {
                        break;
                    }
                }
            }
        }
        updateBoard();
    }
    if (event.keyCode === 40) {
        // Down
        for (x = 0; x < 4; x++) {
            for (y = 3; y >= 0; y--) {
                for (
                        currentYOfSquare = y;
                        currentYOfSquare < 3;
                        currentYOfSquare++
                ) {
                    if (
                            !shiftSquare(
                                x,
                                currentYOfSquare,
                                x,
                                currentYOfSquare + 1
                            )
                    ) {
                        break;
                    }
                }
            }
        }
        updateBoard();
    }
}
