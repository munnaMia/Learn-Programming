package main

import "fmt"

func main() {
	array := []int{23, 1, 4, 89, 45, 25, 85, 54, 33, 90}
	arrayLen := len(array)
	divide(array, 0, arrayLen-1)
	fmt.Println(array)

}

func divide(arr []int, low int, hi int) {
	if hi <= low {
		return
	}
	mid := low + (hi-low)/2
	divide(arr, low, mid)
	divide(arr, mid+1, hi)

	conqure(arr, low, mid, hi)

}

func conqure(arr []int, low int, mid int, hi int) {
	merged := make([]int, hi-low+1)

	x := 0
	indx := low
	indy := mid + 1

	for indx <= mid && indy <= hi {
		if arr[indx] <= arr[indy] {
			merged[x] = arr[indx]
			x++
			indx++
		} else {
			merged[x] = arr[indy]
			x++
			indy++
		}
	}

	for indx <= mid {
		merged[x] = arr[indx]
		x++
		indx++
	}

	for indy <= hi {
		merged[x] = arr[indy]
		x++
		indy++
	}

	// Copy elements from merged back to original array
	for i := 0; i < len(merged); i++ {
		arr[low+i] = merged[i]
	}
}
