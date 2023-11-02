// Merge sort is a popular and efficient comparison-based sorting algorithm that follows the divide and conquer paradigm. It's known for its stable sorting behavior and consistent O(n log n) time complexity, making it suitable for sorting large datasets. Here are the details of how the merge sort algorithm works:

// Divide: The first step is to divide the unsorted array into smaller sub-arrays. This is done recursively until each sub-array contains only one element. In essence, this process continues until we have a set of sub-arrays that are all sorted because a single element is always considered sorted.

// Conquer (Merge): Once we have divided the array into these one-element sub-arrays, we start merging them back together. We compare the elements of the sub-arrays and merge them into larger, sorted sub-arrays. This is done in a way that the elements from the sub-arrays are combined to create a new, sorted array. This process continues recursively, merging sub-arrays to form larger, sorted sub-arrays until the entire array is sorted.

// Here's a step-by-step explanation of the merge operation:

// Create two pointers, one for each sub-array to be merged.
// Compare the elements pointed to by each pointer.
// Take the smaller element and place it in the new array.
// Move the pointer of the array from which you took the element forward.
// Repeat these steps until you have merged all the elements from both sub-arrays into the new, sorted array.
// Combine: The process of merging and combining continues until we have a single, sorted array.
// The key insight of merge sort is that it's efficient because it divides the problem into smaller, more manageable sub-problems and then combines their solutions to produce a sorted array. The time complexity of merge sort is O(n log n) in the worst, best, and average cases, and it's a stable sorting algorithm, meaning it preserves the relative order of equal elements in the sorted array.

// Merge sort does, however, require additional space to hold the temporary sub-arrays during the merging process. This space complexity is O(n), which can be a disadvantage when working with limited memory. There are in-place variations of merge sort, such as the Bottom-up merge sort, that reduce this space complexity, but they may be more complex to implement.
function mergeSort() {
    const array = [3, 5, 2, 34, 2, 1, 4, 56];
    const arrayLength = array.length;
    divide(array, 0, arrayLength - 1);
  }
  
  function divide(array, startIndex, endIndex) {
    if (startIndex === endIndex) return;
  
    let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2); // Calculate the mid index of the array.
  
    divide(array, startIndex, midIndex);
    divide(array, midIndex + 1, endIndex);
  
    conquer(array, startIndex, midIndex, endIndex);
  }
  
  function conquer(array, startIndex, midIndex, endIndex) {
    const mergeArray = [];
  
    let indx1 = startIndex; // Track array one
    let indx2 = midIndex + 1; // Track array two
    let index = 0; // Track the merged array
  
    while (indx1 <= midIndex && indx2 <= endIndex) {
      if (array[indx1] <= array[indx2]) {
        mergeArray[index] = array[indx1];
        index++;
        indx1++;
      } else {
        mergeArray[index] = array[indx2];
        index++;
        indx2++;
      }
    }
  
    while (indx1 <= midIndex) {
      mergeArray[index] = array[indx1];
      index++;
      indx1++;
    }
  
    while (indx2 <= endIndex) {
      mergeArray[index] = array[indx2];
      index++;
      indx2++;
    }
  
    // Copy the merged values back to the original array
    for (let i = 0, j = startIndex; i < mergeArray.length; i++, j++) {
      array[j] = mergeArray[i];
    }
  }
  
  mergeSort();
  