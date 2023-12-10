package main

import "fmt"

func main() {
	array := []int{23, 1, 4, 89, 45, 25, 85, 54, 33, 90}
	fmt.Println(array)
	countingSort(array, len(array))
	fmt.Println(array)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func countingSort(arr []int, n int) {
	if n <= 1 {
		return // Already sorted
	}

	k := arr[0]
	for i := 1; i < n; i++ {
		k = max(arr[i], k)
	}

	count := make([]int, k+1) // Count array size should be k+1
	for i := 0; i < n; i++ {
		count[arr[i]]++
	}

	for i := 1; i <= k; i++ {
		count[i] += count[i-1]
	}

	output := make([]int, n)

	for i := n - 1; i >= 0; i-- {
		output[count[arr[i]]-1] = arr[i]
		count[arr[i]]--
	}

	for i := 0; i < n; i++ {
		arr[i] = output[i]
	}
}
