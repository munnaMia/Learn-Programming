package main

import "fmt"

var age int = 23

func main() {
	const PI_value float32 = 3.1415

	//comment in single line
	fmt.Print("hello world \n")
	fmt.Println("hello 2")

	// variable decalre
	var name string = "munna mia"
	var city = "cumilla"
	age := 21

	var a int
	var b bool

	a = 34
	b = true

	fmt.Println(name, city, age, a, b)

	fmt.Println(3+4.23)


	var x, y, z int= 12, 34, 123
	fmt.Println(x, y, z)


	//i can check value and type of a variable using %T and %v
	fmt.Printf("The value of X is = %v and Type = %T \n",x,x)
}
