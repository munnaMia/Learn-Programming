package main

import (
	"fmt"
	"io/ioutil"
)

func main(){

	data := []byte("hello world")
	err := ioutil.WriteFile("file.txt",data, 0644) //The 0644 file mode specifies that the file is readable and writable by the owner, and readable by everyone else.

	if err != nil{
		fmt.Println(err)
		return
	}
	fmt.Println("Data successfully written to file")

}