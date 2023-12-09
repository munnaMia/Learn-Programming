package main

import "fmt"

func main() {
	var array = [10]int{3, 65, 2, 7, 5, 90, 67, 34, 21, 45}
	fmt.Println(selectionSort(array))
}

func selectionSort(arr [10]int) [10]int {
	for i := 0; i < len(arr)-1; i++ {
		for j := 0; j < len(arr)-1; j++ {
			if arr[j] > arr[j+1]{
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
	return arr
}

