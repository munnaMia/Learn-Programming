package main

import "fmt"

func main() {
	i := 234
	// txt := "the;adsfk, asdf"

	fmt.Printf("%v \n", i)
	fmt.Printf("%T \n", i)
	fmt.Printf("%% \n")
	fmt.Printf("%#v \n", i)

	fmt.Println("===============================")
	fmt.Println("===============================")
	fmt.Println("============Int Verv===========")

	fmt.Printf("%b Base 2 %v \n", i, i)
	fmt.Printf("%d Base 10 %v \n", i, i)
	fmt.Printf("%+d Base 10 With Sign %v \n", i, i)
	fmt.Printf("%o Base 8 %v \n", i, i)
	fmt.Printf("%O Base 8, with leading 0o %v \n", i, i)
	fmt.Printf("%x Base 16, lowercase %v \n", i, i)
	fmt.Printf("%X Base 16, uppercase %v \n", i, i)
	fmt.Printf("%#x Base 16, with leading 0x %v \n", i, i)
	fmt.Printf("%4d\n", i)
	fmt.Printf("%-4d\n", i)
	fmt.Printf("%04d\n", i)

	fmt.Println("===============================")
	fmt.Println("===============================")
	fmt.Println("============Str Verv===========")
	var txt string = "therlsdjfla"
	fmt.Printf("%s \n", txt)
	fmt.Printf("%q \n", txt)
	fmt.Printf("adf %8s\n asdf", txt)
	fmt.Printf("asdf  %-8s\n asdf", txt)
	fmt.Printf("%x \n", txt)
	fmt.Printf("% x \n", txt)


	fmt.Println("===============================")
	fmt.Println("===============================")
	fmt.Println("============float Verv===========")
	var md = 3.141

	fmt.Printf("%e\n", md)
	fmt.Printf("%f\n", md)
	fmt.Printf("%.2f\n", md)
	fmt.Printf("%6.2f\n", md)
	fmt.Printf("%g\n", md)

	fmt.Println("===============================")
	fmt.Println("===============================")
	fmt.Println("============bool Verv===========")

	var m = true
	fmt.Printf("%t", m)

}
