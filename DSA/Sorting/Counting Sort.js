const array = [
  2, 4, 1, 64, 2, 43, 1, 4, 34, 34, 2, 5, 3, 2, 1, 6, 23, 6, 12, 7, 34,
];




function countingSort(arr) {
  const maxValue = Math.max(...arr);                // finding the max value and create a count array in the length of maxValue of input array.

  const countArr = new Array(maxValue + 1).fill(0); // countArr length is maxValue +1 and fill 0 in each element.

  for (let i = 0; i < arr.length; i++) {
                                                    // countArr[arr[i]] = countArr[arr[i]] + 1
    countArr[arr[i]]++;                             //these two lines are same;
  }

  //New countArr is :
  //   [
  //     0, 3, 4, 1, 2, 1, 2, 1, 0, 0, 0, 0,
  //     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,
  //     0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  //     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //     0, 0, 0, 0, 1
  //   ]

  let sortIndex = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arr[sortIndex] = i;
      sortIndex++;
      countArr[i]--;
    }
  }

  console.log(arr)                                  //Final output
}

countingSort(array);








// Counting Sort is a non-comparative integer sorting algorithm that operates based on counting the number of occurrences of each unique element in the input data. Here's a step-by-step description of the algorithm:

// Find the Range:
/*
Identify the minimum and maximum values in the input array to determine the range of values.
Initialize Count Array:

Create a count array to store the count of occurrences for each unique element in the input array. The count array is typically of size max - min + 1 to cover the entire range of values.
Count Occurrences:

Iterate through the input array and, for each element, increment the corresponding count in the count array.
Accumulate Counts:

Modify the count array to store the cumulative count of elements. This step helps in determining the correct position of each element in the sorted output.
Reconstruct Sorted Array:

Iterate through the original array. For each element, use the count array to determine its sorted position and place it in the correct position in the output array.
Output Sorted Array:

The sorted array is now reconstructed based on the count array.
Example:
Let's say we have an input array [4, 2, 8, 3, 1, 7, 6, 5].

Find the range: Minimum value is 1, maximum value is 8.
Initialize count array of size 8 - 1 + 1 = 8.
Count occurrences: [1, 1, 1, 1, 1, 1, 1, 1].
Accumulate counts: [1, 2, 3, 4, 5, 6, 7, 8].
Reconstruct sorted array: [1, 2, 3, 4, 5, 6, 7, 8].
Time Complexity:
Counting Sort has a time complexity of O(n + k), where n is the number of elements in the input array and k is the range of input values. The algorithm is efficient for sorting integers with a relatively small range.

Space Complexity:
Counting Sort has a space complexity of O(k), where k is the range of input values. The space required is proportional to the range, making it more memory-efficient than some other sorting algorithms.
*/
