package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.OpenFile("file.txt", os.O_APPEND|os.O_WRONLY, 0644)

	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	file.Write([]byte("hello kfalkdfo aof jldfasfadsfdsa"))

	fmt.Fprintln(file, "\nThe earth can be flat but the sky is always blue.") //to write

	fmt.Println("done")

}
