package main

import "fmt"

func main() {
	var array = [10]int{3, 65, 2, 7, 5, 90, 67, 34, 21, 45}
	fmt.Println(selectionSort(array))
}

func selectionSort(arr [10]int) [10]int {
	for indx, _ := range arr {
		for j := indx; j < len(arr); j++ {
			if arr[indx] > arr[j] {
				temp := arr[indx]
				arr[indx] = arr[j]
				arr[j] = temp
			}
		}
	}

	return arr
}

