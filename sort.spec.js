describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles negative numbers', function() {
    expect( bubbleSort([3, -5, 6, -10, 11, 50]) ).toEqual( [-10, -5, 3, 6, 11, 50] );
  });
  it('handles arrays with one number', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles arrays made up of all the same values', function() {
    expect( bubbleSort([1,1,1,1,1,1,1]) ).toEqual( [1,1,1,1,1,1,1] );
  });
  it('handles arrays in reverse order', function() {
    expect( bubbleSort([5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles negative numbers', function() {
    expect( mergeSort([3, -5, 6, -10, 11, 50]) ).toEqual( [-10, -5, 3, 6, 11, 50] );
  });
  it('handles arrays with one number', function() {
    expect( mergeSort([1]) ).toEqual( [1] );
  });
  it('handles arrays made up of all the same values', function() {
    expect( mergeSort([1,1,1,1,1,1,1]) ).toEqual( [1,1,1,1,1,1,1] );
  });
  it('handles arrays in reverse order', function() {
    expect( mergeSort([5, 4, 3, 2, 2, 1]) ).toEqual( [1, 2, 2, 3, 4, 5] );
  });
});

