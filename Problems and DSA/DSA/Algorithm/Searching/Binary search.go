// Binary search programe

package main

import "fmt"

func main() {
	var array = [20]int{1, 3, 4, 5, 6, 7, 9, 11, 22, 33, 55, 77, 78, 89, 122, 134, 145, 167, 189, 199}

	result := binarySearch(array[:], 0, len(array)-1, 6)
	fmt.Println(result)
}

func binarySearch(arr []int, low int, hi int, find int) bool {
	if low <= hi {
		mid := low + (hi-low)/2
		if arr[mid] == find {
			fmt.Println(mid)
			return true
		} else if find < arr[mid] { // mark 03 condition mistake
			return binarySearch(arr, low, mid-1, find) //mark 01 return mistake
		} else {
			return binarySearch(arr, mid+1, hi, find) //mark 02 return mistake
		}
	}

	return false
}

