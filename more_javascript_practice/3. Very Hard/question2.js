const initial_positions = (maze, valueToLookfor) => {
    const positions = []
    maze.forEach((row, row_index) => {
        // Sets the starting point: [row, column]      
        if (row.includes("S") && valueToLookfor === "S") {
            console.log("Initializing the starting point")
            positions.push([row_index, row.indexOf(valueToLookfor)]);
        }

        // Sets the goal: [row, column]
        else if (row.includes("F") && valueToLookfor === "F") {
            console.log("Initializing the goal")
            positions.push([row_index, row.indexOf(valueToLookfor)]);
        };

        // Establishes a wall that can't be passed through.
        if (valueToLookfor === "#") {
            row.split("").forEach((column, column_index) => {
                if (column === "#") {
                    positions.push([row_index, column_index]);
                };
            });
        };
    }, []);

    return positions;
};

const isPositionInWall = (current_position, walls) => {
    return walls.some((wall_position) => current_position[0] === wall_position[0] && current_position[1] === wall_position[1]);
};

const canTraverseMaze = (maze, directions) => {

    if (maze.length < 1) {
        console.log("The maze is empty. Any direction you go in causes you to go out of bounds. You Died.");
        return false;
    };

    const starting_point = initial_positions(maze, "S");
    let current_position = starting_point[0];
    const goal = initial_positions(maze, "F");
    const walls = initial_positions(maze, "#");

    if (starting_point.length > 1 || goal.length > 1) {
        console.log("You have more than 1 starting point or goal, causing a rift in time and space. You Died.");
        return false;
    };

    for (const direction of directions.split("")) {
        // Movement
        switch (direction) {
            case "N": current_position = [current_position[0] - 1, current_position[1]]; break;
            case "E": current_position = [current_position[0], current_position[1] + 1]; break;
            case "S": current_position = [current_position[0] + 1, current_position[1]]; break;
            case "W": current_position = [current_position[0], current_position[1] - 1]; break;
        }

        // Sets lose conditions due to wall collisions or going out of bounds
        if ((current_position[0] < 0 || current_position[0] > maze.length - 1) ||
            (current_position[1] < 0 || current_position[1] > maze[0].length - 1) ||
            (isPositionInWall(current_position, walls))) {
            console.log("Hit a wall or went out of bounds. You Died.")
            return false;
        } else if (goal[0][0] === current_position[0] && goal[0][1] === current_position[1]) {
            console.log("You made it to the end! Congratulations! You Lived!")
            return true; // True if at any point the directions reach the goal.
        };
    };

    // Didn't reach the goal but also didn't go out of bounds or hit a wall
    console.log("Didn't reach your goal and health went to zero. You Died.")
    return false;
};

// Test cases, expected results in the comments
console.log("Test Case 1");
const maze1 = [
    "S.#",
    "...",
    "..F"
];
const directions1 = "SEES";
console.log(canTraverseMaze(maze1, directions1)); // true

console.log("Test Case 2");
const maze2 = [
    "S.#",
    "...",
    "..F"
];
const directions2 = "SSS";
console.log(canTraverseMaze(maze2, directions2)) // false

console.log("Test Case 3");
const maze3 = [
    "S...",
    "####",
    "...F"
];
const directions3 = "EEES";
console.log(canTraverseMaze(maze3, directions3)); // false

console.log("Test Case 4");
const maze4 = [
    "S.#F",
    "....",
    "...."
];
const directions4 = "ESEEN";
console.log(canTraverseMaze(maze4, directions4)); // true

console.log("Test Case 5");
const maze5 = [
    "...",
    ".S#",
    "..F"
];
const directions5 = "SSW";
console.log(canTraverseMaze(maze5, directions5)); // false

console.log("Test Case 6");
const maze6 = [
    "S.F"
];
const directions6 = "";
console.log(canTraverseMaze(maze6, directions6)); // false

console.log("Test Case 7");
const maze7 = [
    "S...",
    ".#.#",
    ".#.#",
    "...F"
];
const directions7 = "EESSSWWNNNEESSSE";
console.log(canTraverseMaze(maze7, directions7)); // true

console.log("Test Case 8");
const maze8 = [
    "SF..",
    "....",
    "...."
];
const directions8 = "ESWNENWESEWENSWESN";
console.log(canTraverseMaze(maze8, directions8)); // true