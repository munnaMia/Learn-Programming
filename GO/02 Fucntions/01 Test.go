package main

func main(){
	arr := []int{23, 23, 23, 23}
	sumOfArray(arr)
}

func sumOfArray(arr []int) int{
	total:=0
	for _, value := range arr{
		total += value
	}
	return total
}