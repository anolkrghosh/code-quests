
let birds = [5,5,20,20,3,7,9,4,4] ;
let cb = countbirds(birds);
console.log(cb);
function countbirds(arr) {
    //create new arrayof type of birds and how many times they been seen
    let birds = new Object();
    for (let i = 0; i < arr.length; i++) {
        if (birds[arr[i]] != null) {
            birds[arr[i]] += 1;
        } else {
            birds[arr[i]] = 1;
        }
    }
    //conver the object to nested array
    birds = Object.entries(birds);
    //sort array in descending order
    let sortedbirds = birds.sort(([a, b], [c, d]) => c - a || b - d);
    //extract max sighted bird array from nested array
    let max = sortedbirds.reduce((a, c) => c[1] >= a[1] ? c : a, [0, -Infinity]);
    //extract least sighted bird array from nested array
    let min = sortedbirds.reduce((a, c) => c[1] <= a[1] ? c : a, [0, +Infinity]);
    let result = [];
    result.min = {birdType:min[0],sighted:min[1]}
    result.max = {birdType:max[0],sighted:max[1]}
    return result

}

