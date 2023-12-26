package main

import "fmt"

func main() {
	x := 23

	fmt.Println(x)
	changeValue(&x)
	fmt.Println(x)
}

func changeValue(n *int) {
	fmt.Println(*n)
	*n = 100
}
