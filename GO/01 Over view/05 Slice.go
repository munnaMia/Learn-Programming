package main

import "fmt"

func main() {
	mySlice := []int{}
	mySlice = append(mySlice, 34, 23, 123, 324, 23)

	fmt.Println(len(mySlice))
	fmt.Println(cap(mySlice))
	fmt.Printf("%T \n", mySlice)

	mySlice1 := []string{"name", "name", "name"}
	fmt.Println(len(mySlice1))
	fmt.Println(cap(mySlice1))
	fmt.Printf("%T \n", mySlice1)

	// var myarray = [length]datatype{values} // An array
	// myslice := myarray[start:end]          // A slice made from the array
	var array = [5]int{3, 4, 5, 2, 3}
	mySlice3 := array[1:3]
	fmt.Println(len(mySlice3))
	fmt.Println(cap(mySlice3))
	fmt.Printf("%T \n", mySlice3)
	mySlice = append(mySlice, mySlice3...)
	// create slice using make function
	new_slice := make([]int, 5)
	new_slice[4] = 334
	fmt.Println(new_slice)

	fmt.Println(mySlice)

	//Copy

	myslice9 := []int{23, 23, 12, 34, 12, 54, 56, 2, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 34}

	neededNumbers := myslice9[:len(mySlice)-10]
	numberCopy := make([]int, len(neededNumbers))

	copy(numberCopy, neededNumbers)
	fmt.Println(numberCopy)
}
