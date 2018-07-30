const bubbleSort = arr => {
  let end = arr.length;
  while(end > 1) {
    for(let i = 0; i < (end - 1); i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    end--;
  }
  return arr;
};
