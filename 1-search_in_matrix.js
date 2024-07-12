function searchMatrix(matrix, targetItem) {
    // Check if the matrix is empty
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let columns = matrix[0].length;
    let rows = matrix.length;
    let left = 0;
    let right = rows * columns - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / columns)][mid % columns];

        if (midValue === targetItem) {
            return true;
        } else if (midValue < targetItem) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

const matrix = [
    [1, 3, 5],
    [7, 8, 10],
    [12, 15, 18]
];
const targetItem = 8;
console.log(searchMatrix(matrix, targetItem)); 