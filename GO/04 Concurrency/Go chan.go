package main

import (
	"fmt"
	"time"
)


func ping(c chan string){
	for i := 0; i < 11; i++ {
		c <- "ping"
	}
}

func printer(c chan string){
	for {
		msg := <-c
		fmt.Println(msg)
		time.Sleep(time.Second * 1)
	}
}

func ponger(c chan string) {
	for i := 0; i<11; i++ {
	  c <- "pong"
	}
  }


func main(){
	var c chan string = make(chan string)

	go ping(c)
	go ponger(c)
	go printer(c)

	var input string
	fmt.Scanln(&input)
}