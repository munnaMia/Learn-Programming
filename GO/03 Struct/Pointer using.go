package main

import (
	"fmt"
	"math"
)

type Circle struct {
	x float64
	y float64
	r float64
}

func main() {
	circle := Circle{0, 0, 20}

	fmt.Println(areaCircle(&circle))
}

func areaCircle(cir *Circle) float64 {
	return math.Pi * cir.r * cir.r
}
