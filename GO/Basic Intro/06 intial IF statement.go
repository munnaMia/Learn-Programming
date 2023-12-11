package main

func main(){
	length := getLength(email)
	if length < 1 {
	    fmt.Println("Email is invalid")
	}




	//We can do:

	if length := getLength(email); length < 1 {
	    fmt.Println("Email is invalid")
	}
}
