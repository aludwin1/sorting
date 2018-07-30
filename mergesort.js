const merge = (left, right, arr) => {
  let index = 0;
  while(index < arr.length) {
    let smallest = left[0] > right[0] ? right : left;
    if(left.length && right.length) arr[index] = smallest.shift();
    else if (left.length) arr[index] = left.shift();
    else arr[index] = right.shift();
    index++;
  }
  return arr;
};

const mergeSort = arr => {
  if(arr.length <= 1) return arr;
  let midpoint = Math.ceil(arr.length / 2);;
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right, arr);
};
