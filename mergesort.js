const merge = (left, right, arr) => {
  let index = 0;
  while(index < arr.length) {
    let smallest = left[0] > right[0] ? right : left;
    if(left.length && right.length) arr[index++] = smallest.shift();
    else if (left.length) arr[index++] = left.shift();
    else arr[index++] = right.shift();
  }
  return arr;
};

const mergeSort = arr => {
  if(arr.length <= 1) return arr;
  const midpoint = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, midpoint));
  const right = mergeSort(arr.slice(midpoint));
  return merge(left, right, arr);
};
