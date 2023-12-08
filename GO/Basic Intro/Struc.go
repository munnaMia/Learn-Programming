package main

import "fmt"

type Person struct {
	name   string
	age    int
	job    string
	salary float32
}

func main() {
	var Per1 Person

	Per1.name = "munna"
	Per1.age = 32
	Per1.job = "Backend Developer"
	Per1.salary = 2332.324

	printPerson(Per1)
}

func printPerson(pers Person) {
	fmt.Println("Name: ", pers.name)
	fmt.Println("Age: ", pers.age)
	fmt.Println("Job: ", pers.job)
	fmt.Println("Salary: ", pers.salary)
}
