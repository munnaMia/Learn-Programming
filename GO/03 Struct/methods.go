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

	fmt.Println(circle.areaCircle())
}

func (cir *Circle) areaCircle() float64 {
	return math.Pi * cir.r * cir.r
}
