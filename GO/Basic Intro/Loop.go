package main
import "fmt"
func main(){
	for i:=0;i<10;i++{
		fmt.Println(i)
	}

	for i:=0;i<10;i++{
		if i==5 {
			continue
		}
		fmt.Println(i)
	}

	for i:=0;i<10;i++{
		if i==5 {
			break
		}
		fmt.Println(i)
	}

	mySlice := []int{3, 3, 4, 2, 4, 56,3}

	for indx, val := range mySlice{
		fmt.Printf("%v \t %v \n", indx, val)
	}
}