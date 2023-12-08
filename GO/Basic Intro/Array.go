package main

import "fmt"


func main() {
	var arr = [7]int{23, 12, 34, 123, 3, 34,3}
	fmt.Println(arr)

	var arr2= [...]int{23, 12, 34, 123, 3, 34,3,34,34,23,34}
	arr2[8] = 90
	fmt.Println(arr2[8])


	arr3 := [7]int{23, 12, 34, 123, 3, 34,3}
	fmt.Println(arr3)

	arr4 := [...]int{23, 12, 34, 123, 3, 34,3,34,34,23,34}
	fmt.Println(arr4)


	arr5 := [5]int{1:45, 4:34}
	fmt.Println(arr5) //[0 45 0 0 34]
	fmt.Println(len(arr5))




}
