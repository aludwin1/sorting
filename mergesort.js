const merge = (left, right, arr) => {
  let index = 0;
  while(left.length && right.length) {
    if(left[0] > right[0]) arr[index] = right.shift();
    else arr[index] = left.shift();
    index++;
  }
  while(left.length) {
    arr[index] = left.shift();
    index++;
  }
  while(right.length) {
    arr[index] = right.shift();
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
