// Insertion sort
package main

import "fmt"

func main() {
	var array = [10]int{5, 6, 2, 8, 1, 7, 1, 4, 3, 8}
	fmt.Println(insertionSort(array))
}

func insertionSort(inputArray [10]int) [10]int {
	arrayLength := len(inputArray)

	for i := 1; i < arrayLength; i++ {
		initialValue := inputArray[i] //this is a initial value that is selected.
		j := i - 1                    // Select the previous index of initial value.

		for j >= 0 && inputArray[j] > initialValue {
			inputArray[j+1] = inputArray[j]
			j--
		}
		inputArray[j+1] = initialValue

	}

	return inputArray
}

