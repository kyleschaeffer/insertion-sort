import { insertionSort } from './insertion-sort';

test('[3,2,1] to equal [1,2,3]', () => {
  expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test('[8,19,0,-4,25,3] to equal [-4,0,3,8,19,25]', () => {
  expect(insertionSort([8, 19, 0, -4, 25, 3])).toEqual([-4, 0, 3, 8, 19, 25]);
});

test('[1,2,3] to equal [1,2,3]', () => {
  expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('[1] to equal [1]', () => {
  expect(insertionSort([1])).toEqual([1]);
});

test('[] to equal []', () => {
  expect(insertionSort([])).toEqual([]);
});
