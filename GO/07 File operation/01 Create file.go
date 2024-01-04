package main

import (
	"fmt"
	"os"
)

func main(){
	file, err := os.Create("file.txt") // os.create will return file and err object

	if err != nil { // Check for errors
		fmt.Println(err)
		return
	}

	defer file.Close() // close the file at the last using defer

	fmt.Println("File create succesfully")
}