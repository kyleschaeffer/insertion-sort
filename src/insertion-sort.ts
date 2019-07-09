/**
 * Sort given numbers array using insertion sorting algorithm
 *  - Not peformant, but could be good with almost-sorted arrays: O(n^2)
 */
export function insertionSort(numbers: number[]): number[] {
  // Outer loop (unsorted portion of array)
  for (let i = 1; i < numbers.length; i++) {
    // Inner loop (sorted portion of array)
    for (let j = 0; j < i; j++) {
      // Insert into sorted portion of array?
      if (numbers[i] < numbers[j]) {
        // Remove numbers[i]
        const num: number = numbers.splice(i, 1)[0];

        // Insert numbers[i] at [j]
        numbers.splice(j, 0, num);
      }
    }
  }

  return numbers;
}
