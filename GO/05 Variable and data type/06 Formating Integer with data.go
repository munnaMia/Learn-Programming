package main

import "fmt"

func main() {
	// Use for all data types

	// 01. %v      - Print the value in it's defalut formate.
	// 02. %T      - Print the type of a value.
	// 03. %%      - Use to print % sign.
	// 04. %#v     - Print the value in golang formate

	var name string = "munna"
	var number int = 20
	var status bool = true
	var points float64 = 34.34

	fmt.Printf("Name : %v and Type: %T and Name: %#v \n", name, name, name)
	fmt.Printf("Number : %v and Type: %T and Number: %#v \n", number, number, number)
	fmt.Printf("Status : %v and Type: %T and Status: %#v \n", status, status, status)
	fmt.Printf("Point : %v and Type: %T and Point: %#v %% \n", points, points, points)
	/*
		Name : munna and Type: string and Name: "munna"
		Number : 20 and Type: int and Number: 20
		Status : true and Type: bool and Status: true
		Point : 34.34 and Type: float64 and Point: 34.34 %
	*/



	

	//Integer formating
	var integerValue = 90

	// %b - To output Base 2
	fmt.Printf("Base 2 output: %b \n", integerValue)

	// %d - To output Base 10
	fmt.Printf("Base 10 output: %d \n", integerValue)

	// %+d - To output Base 10 with sign
	fmt.Printf("Base 10 with sign output: %+d \n", integerValue)

	// %o - To output Base 8
	fmt.Printf("Base 8 output: %o \n", integerValue)

	// %O - To output Base 8 with leading Oo
	fmt.Printf("Base 8 with leading O output: %O \n", integerValue)

	// %x - To output Base 16 lowercase
	fmt.Printf("Base 16 Lowercase output: %x \n", integerValue)

	// %X - To output Base 16 uppercase
	fmt.Printf("Base 16 Uppercase output: %X \n", integerValue)

	// %#x     - To output Base 16 with leading 0x
	fmt.Printf("Base 16 with leading 0x output: %#x	\n", integerValue)

	// %4d     - To output Pad with spaces 4 mean 4 spaces right side
	fmt.Printf("Pad with 4 spaces right side output: %4d \n", integerValue)

	// %-4d    - To output Pad with spaces 4 mean 4 spaces left side
	fmt.Printf("Pad with 4 spaces left side output: %-4d \n", integerValue)

	// %04d    - To output Pad with zero 4 mean 4 spaces
	fmt.Printf("Pad with 4 spaces with 0 output: %04d \n", integerValue)
	/*
		Base 2 output: 1011010
		Base 10 output: 90
		Base 10 with sign output: +90
		Base 8 output: 132
		Base 8 with leading O output: 0o132
		Base 16 Lowercase output: 5a
		Base 16 Uppercase output: 5A
		Base 16 with leading 0x output: 0x5a
		Pad with 4 spaces right side output:   90
		Pad with 4 spaces left side output: 90
		Pad with 4 spaces with 0 output: 0090
	*/
}
