package main

import "fmt"

var number1 int //var can be used in any where
// numberX := 34; // this not allow

func main() {
	var number2 int = 20
	numberX := number2 //This is allow under a function only
	number1 = 19

	fmt.Println("Number 1 : ", number1) // Println function print the value into a new line.
	fmt.Println("Number 2 : ", number2) // Println function print the value into a new line.
	fmt.Println("Number x : ", numberX) // Println function print the value into a new line.

	/*
	Number 1 :  19
	Number 2 :  20
	Number x :  20
	*/

	

	//Some other print funcitons
	fmt.Print("Number 1 : ", number1) // Print funciton print the value into current line.
	fmt.Print("Number 2 : ", number2) // Print funciton print the value into current line.
	fmt.Print("Number x : ", numberX) // Print funciton print the value into current line.

 	//Number 1 : 19Number 2 : 20Number x : 20



	fmt.Printf("Number 1 : %v and %T \n", number1, number1) // This function Printf is like c programming language printf here %v mean value, %T mean Type
	fmt.Printf("Number 2 : %v and %T \n", number2, number2) // This function Printf is like c programming language printf here %v mean value, %T mean Type
	fmt.Printf("Number x : %v and %T \n", numberX, numberX) // This function Printf is like c programming language printf here %v mean value, %T mean Type

	/*
	Number 1 : 19 and int 
	Number 2 : 20 and int 
	Number x : 20 and int 
	*/
}
