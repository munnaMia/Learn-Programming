package main

import (
	"fmt"
	"os"
)

func main(){
	file, err := os.OpenFile("file.txt", os.O_WRONLY, 0644)

	if err != nil {
		fmt.Println(err)
		return
	}

	defer file.Close()

	file.Write([]byte("hello kfalkdfo aof jla"))

	fmt.Println("done")

}