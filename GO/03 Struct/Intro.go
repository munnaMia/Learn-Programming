package main

import "fmt"


type Person struct {
	Name  string
	Age   int16
	Email string
	Phone string
}

func main() {
	//Declare type 1
	var person1 Person
	person1.Name = "Mr x"
	person1.Age = 12
	person1.Email = "Email.com"
	person1.Phone = "78987986"
	printFunc(person1)

	//Declare type 2
	var person2 = Person{Name: "Mr y", Age: 32, Email: "email.com", Phone: "34234"}
	printFunc(person2)

	//Declare type 3
	person3 := Person{"Mr z", 21, "emasail.com", "34sd234"}
	printFunc(person3)

}

func printFunc(pers Person){
	fmt.Println("============ \n ============")
	fmt.Println(pers.Name)
	fmt.Println(pers.Age)
	fmt.Println(pers.Email)
	fmt.Println(pers.Phone)
}