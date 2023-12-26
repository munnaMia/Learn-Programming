package main

import "fmt"


func first() {
	fmt.Println("first")
}
func secound() {
	fmt.Println("secound")
}
func third() {
	fmt.Println("third")
}

func main() {
	defer first()
	secound()
	third()
}
/*
secound
third
first*/