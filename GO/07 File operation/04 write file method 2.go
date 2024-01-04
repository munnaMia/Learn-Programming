package main

import (
	"bufio"
	"fmt"
	"os"
)

func main(){
	file, err := os.Create("file.txt")

	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()


	// create a object of bufio
	writer := bufio.NewWriter(file) // give file as parameter
	writer.Write([]byte("here hello")) 
	writer.Flush() // to write data to the file

	fmt.Println("done")

}