package main

import "fmt"

func main() {
	var num int

	fmt.Print("Enter a number: ")
	fmt.Scan(&num)

}

func GDCv1(num1 int, num2 int) {
	if num1 < num2 {
		for i := num1; i > 0; i-- {
			if num1%i == 0 && num2%i == 0 {
				fmt.Println("GDC: ", i)
				break
			}
		}
	} else {
		for i := num2; i > 0; i-- {
			if num1%i == 0 && num2%i == 0 {
				fmt.Println("GDC: ", i)
				break
			}
		}
	}
}

func GDCv2(num1 int, num2 int) int {
	if num1%num2 == 0 {
		return num2 
	}
	return GDCv2(num2, num1%num2)
}
