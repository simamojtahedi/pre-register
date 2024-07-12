function mergeIntervals(intervals) {
    // Check if its empty
    if (intervals.length === 0) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
        } else {
            merged.push(currentInterval);
            currentInterval = intervals[i];
        }
    }

    merged.push(currentInterval);
    return merged;
}

const intervals = [[1, 3], [2, 6], [8, 10]];
const result = mergeIntervals(intervals);
console.log(result);