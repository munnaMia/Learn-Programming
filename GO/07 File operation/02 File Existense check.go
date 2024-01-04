package main

import (
	"fmt"
	"os"
)

func main(){
	_, err := os.Stat("../file.txt") // os.create will return file and err object

	if os.IsNotExist(err) { // Check for errors
		fmt.Println(err) // Output : stat ../file.txt: no such file or directory
		return
	}else{
		fmt.Println("file exist")
	}

}