const grid = [
    [0, 0, 0, 0],
    [0, 0, 2, 0],
    [4, 0, 0, 0],
    [0, 0, 0, 0],
];

const updateBoard = function() {
    for (x = 0; x < 4; x++) {
        for (y = 0; y < 4; y++) {
            document
                .getElementById('square-' + x + '-' + y)
                .innerHTML = grid[x][y];
        }
    }
}

updateBoard();

window.onkeydown = function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 37) {
        // Left
        window.alert('left');
    }
    if (event.keyCode === 38) {
        // Up
        window.alert('up');
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
                    console.log(grid[0][0]);
                    console.log(grid[currentXOfSquare + 1][y]);
                    console.log(grid[x][y]);

                    let valueOfSquareToCheckMergeInto =
                        grid[currentXOfSquare + 1][y];

                    if (valueOfSquareToCheckMergeInto === 0) {

                        grid[currentXOfSquare + 1][y] =
                            grid[currentXOfSquare][y];
                        grid[currentXOfSquare][y] = 0;
                    }

                    else if (valueOfSquareToCheckMergeInto === grid[x][y]) {
                        grid[currentXOfSquare + 1][y] *= 2;
                        grid[currentXOfSquare][y] = 0;
                        break;
                    }

                    else {
                        break;
                    }
                }
            }
        }
        updateBoard();
    }
    if (event.keyCode === 40) {
        // Down
        window.alert('down');
    }
}
