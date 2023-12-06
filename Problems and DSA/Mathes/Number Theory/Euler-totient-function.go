package main
import "fmt"

func main() {
	fmt.Print("Euler's Totient Function \n \n")
	var number int
	fmt.Print("Enter a number: ")
	fmt.Scan(&number)

	fmt.Println(EulerTotient(number))
}

func EulerTotient(num int) int {
	count := 0
	for i := num - 1; i > 0; i-- {
		if primeNumberCheck(GCD(num, i)) {count++}
	}
	return count
}

func GCD(numInput int, iInput int) int {
	for i := numInput; i > 0; i-- {
		if numInput%i == 0 && iInput%i == 0 {return i}
	}
	return 1
}

func primeNumberCheck(n int) bool {
	if n < 1 || n%2 == 0 || n%3 == 0 {
		return false
	}else {
		for i := 2; i*i <= n; i++ {
			if n%i == 0 {return false}
		}
	}
	return true
}
