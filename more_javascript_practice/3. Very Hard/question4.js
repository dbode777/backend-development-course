/**
 * Returns the number of islands found on the map. An island is defined as a group of adjacent lands, where "land" is represented by 1 and "water" is represented by 0. Two pieces of land are considered part of the same island if they are adjacent horizontally or vertically (but not diagonally). Assumes the edges of the map contains water.
 * @param {Array .<Array.<Number>>} map 2D map containing 0s for water and 1s for islands
 * @returns {Number} Number of islands found on the map.
 */
const findIslands = (map) => {
    const exploreArea = (x, y) => {
        if (x < 0 ||
            x >= map.length ||
            y < 0 ||
            y >= map[x].length ||
            map[x][y] === 0
        ) {
            return;
        }

        // If there's land nearby, set the current position to zero.
        map[x][y] = 0;

        // Explore all adjacent lands (up, down, left, right)
        exploreArea(x - 1, y); // up
        exploreArea(x + 1, y); // down
        exploreArea(x, y - 1); // left
        exploreArea(x, y + 1); // right
    }

    let islandCount = 0;
    if (map.length === 0) {
        return islandCount;
    }

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                exploreArea(i, j);
                islandCount++;
            };
        };
    };

    return islandCount;
};

// Test Cases, expected results in comments

const map = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
];
console.log(findIslands(map)); // 6

const map2 = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
console.log(findIslands(map2)); // 1

const map3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
console.log(findIslands(map3)); // 0

const map4 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
console.log(findIslands(map4)); // 1

const map5 = [
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 1]
];
console.log(findIslands(map5)); // 4

const map6 = [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
];
console.log(findIslands(map6)); // 9