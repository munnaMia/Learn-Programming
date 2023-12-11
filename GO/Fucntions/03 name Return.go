package main

import "fmt"

func main() {
	fmt.Println(f1(12))
}

func f1(n int) (r int) {
	r = n
	return
}

// returning multiple value
func f2(n int, x int, y int) (int, int, int) {
	return n, x, y
}

// taking multiple args
func f4(args ...int) {
	for _, vl := range args {
		fmt.Println(vl)
	}
}
