package main

import "fmt"

func main() {
	var number int

	fmt.Print("Enter a number: ")
	fmt.Scan(&number)

	PrimeV1(number)
	PrimeV2(number)
	PrimeV3(number)
	PrimeV4(number)
	
}



func PrimeV1(num int){
	if num > 1 {
		for i := num - 1; i > 1; i-- {
			if num%i == 0 {
				fmt.Println("This is not a Prime number")
				return 
			}
		}
	}
	fmt.Printf("The %v Prime Number \n", num)
}

func PrimeV2(num int){
	if num == 1 ||  num==0{
		fmt.Printf("%v is not a prime number \n",num)
		return
	}else if num<0{
		fmt.Printf("%v is a negative number \n",num)
		return
	}else{
		for i := num - 1; i > 1; i-- {
			if num%i == 0 {
				fmt.Println("This is not a Prime number")
				return 
			}
		}
	}
	fmt.Printf("The %v Prime Number \n", num)
}

func PrimeV3(num int){
	if num == 1 ||  num==0 || num %2==0{
		fmt.Printf("%v is not a prime number \n",num)
		return
	}else if num<0{
		fmt.Printf("%v is a negative number \n",num)
		return
	}else{
		for i := num - 1; i > 1; i-=2 {
			if num%i == 0 {
				fmt.Println("This is not a Prime number")
				return 
			}
		}
	}
	fmt.Printf("The %v Prime Number \n", num)
}

func PrimeV4(num int){
	if num == 1 ||  num==0 || num %2==0{
		fmt.Printf("%v is not a prime number \n",num)
		return
	}else if num<0{
		fmt.Printf("%v is a negative number \n",num)
		return
	}else{
		for i := 2; i*i <= num; i++{
			if num%i == 0 {
				fmt.Println("This is not a Prime number")
				return 
			}
		}
	}
	fmt.Printf("The %v Prime Number \n", num)
}


func PrimeSeive(num int){
	 primeArray := make([]int, num)

	for i:=2;i<num;i++{
		if primeArray[i] == 0{
			for j:=i*i;j<num;j+=i{
				primeArray[j] =1
			}
		}
	}

	for indx, v:= range primeArray{
		if v==0{
			fmt.Printf("Prime num: %v \n", indx)
		}
	}

}
