package main

import "fmt"

func main() {
	const name = "Saul Goodman"
	const openRate = 30.5
	
	s := fmt.Sprintf("I am %v years old", 10)
	// I am 10 years old

	s := fmt.Sprintf("I am %v years old", "way too many")
	// I am way too many years old

	msg := fmt.Sprintf("Hi %s, your open rate is %v percent",name, openRate)
	// ?

	// don't edit below this line

	fmt.Println(msg)
}

