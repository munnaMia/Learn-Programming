package main

import "fmt"

var x = 0

func main() {
	add := func(x int, y int) int {
		return x + y
	}

	fmt.Println(add(3, 4))

	// one kind of genarator.
	increment := func() int {
		x++
		return x
	}

	fmt.Println(increment())
	fmt.Println(increment())
	fmt.Println(increment())
	fmt.Println(increment())
	fmt.Println(increment())

	//lets make a evenGenaretor
	makeEvenGenarator := func() func() uint {
		i := uint(0) //conversion

		return func() (ret uint) {
			ret = i
			i += 2
			return
		}
	}

	nextEven := makeEvenGenarator()

	fmt.Println(nextEven())
	fmt.Println(nextEven())
	fmt.Println(nextEven())
	fmt.Println(nextEven())
	fmt.Println(nextEven())
	fmt.Println(nextEven())
}
