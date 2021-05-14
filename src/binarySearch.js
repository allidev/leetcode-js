function binarySearch(array, target) {
    let left = 0, right = array.length-1;
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        const foundVal = array[mid];
        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return -1;
}

export default binarySearch;