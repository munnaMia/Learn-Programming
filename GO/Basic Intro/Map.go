package main

import "fmt"

func main() {
	var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}
	fmt.Println(a)

	var b = make(map[int]int)
	b[23] = 2343
	b[24] = 23432
	b[25] = 2343345
	b[26] = 234345

	fmt.Println(b)

	var da = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}

	var db = make(map[int]int)
	b[23] = 2343
	b[24] = 23432
	b[25] = 2343345
	b[26] = 234345

	fmt.Println(db)
	delete(da, "brand")
	fmt.Println(da)

	var mapOne = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964", "day": ""}

	val1, ok1 := mapOne["brand"] // Checking for existing key and its value
	val2, ok2 := mapOne["color"] // Checking for non-existing key and its value
	val3, ok3 := mapOne["day"]   // Checking for existing key and its value
	val4, ok4 := mapOne["model"] // Only checking for existing key and not its value

	fmt.Println(val1, ok1)
	fmt.Println(val2, ok2)
	fmt.Println(val3, ok3)
	fmt.Println(val4, ok4)


	newMap := map[string]int{"one": 1, "two": 2, "three": 3, "four": 4}

	var copyMap []string // defining the order
	copyMap = append(copyMap, "one", "two", "three", "four")

	for k, v := range newMap { // loop with no order
		fmt.Printf("%v : %v, ", k, v)
	}

	fmt.Println()

	for _, ele := range copyMap { // loop with the defined order
		fmt.Printf("%v : %v, ", ele, newMap[ele])
	}

}
