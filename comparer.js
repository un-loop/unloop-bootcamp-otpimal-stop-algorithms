const arr = [3,2323,3, 1, -12, 75, 0];
const comparer = (first, second) => first - second;

arr.sort(comparer);

console.log(arr);