package main

import (
	"fmt"
	"math"
)

type Shape interface{
	area() float64
}

type Circle struct{
	r float64
}

type Cube struct {
	a float64
}

func (shape *Circle) area() float64 {
	return math.Pi * shape.r * shape.r
}

func (shape *Cube) area() float64 {
	return shape.a * shape.a
}

func measureArea(val Shape){
	fmt.Println(val.area())
}


func main(){
	var circle Circle
	var cube Cube

	circle.r = 20.3;
	cube.a = 33

	measureArea(&circle)
	measureArea(&cube)

}



