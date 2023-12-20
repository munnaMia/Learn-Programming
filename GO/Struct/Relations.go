package main

import "fmt"

type Person struct {
	Name string
}

type Android struct{
	// Person Person // Android has a person type relation so we can do that 
	Person
	Model string
}

func (p *Person) Talk() {
	fmt.Println("Hello, my name is ", p.Name)
}

func main() {
	p := Person{Name: "mr x"}
	p.Talk()

	a := new(Android)
	a.Name = "mr y"
	a.Talk()
}

