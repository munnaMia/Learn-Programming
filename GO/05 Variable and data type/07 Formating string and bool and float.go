package main

import "fmt"

func main() {

	/*
			01. %s	    - To ouput the value in plain string
		    02. %q	    - To ouput the value in a double-quoted string
		    03. %8s	    - To ouput the value in plain string spaces 8 mean 8 spaces right side
		    04. %-8s    - To ouput the value in plain string spaces 8 mean 8 spaces left side
		    05. %x	    - To ouput the value in hex of byte values
		    06. %x	    - To ouput the value in hex with spaces
	*/

	// String Formatting
	var name = "munna"

	fmt.Printf("String plain ouput: %s\n", name)
	fmt.Printf("String double-quoted ouput: %q\n", name)
	fmt.Printf("String plain string spaces 8 right ouput: %8s\n", name)
	fmt.Printf("String plain string spaces 8 left ouput: %-8s\n", name)
	fmt.Printf("String hex of byte ouput: %x\n", name)
	fmt.Printf("String hex with spaces ouput: % x\n", name)

	/*
		String plain ouput: munna
		String double-quoted ouput: "munna"
		String plain string spaces 8 right ouput:    munna
		String plain string spaces 8 left ouput: munna
		String hex of byte ouput: 6d756e6e61
		String hex with spaces ouput: 6d 75 6e 6e 61
	*/








	// 01 %t 		- To output boolean
	var status = true
	fmt.Printf("Status ouput: %t", status) // ouput: Status ouput: true








	/*
			01. %e	    - To output the value as or with Scientific notation with 'e' as exponent
		    02. %f	    - To output the value as or with Decimal point, no exponent
		    03. %.2f	- To output the value as or with Default width, precision 2
		    04. %6.2f	- To output the value as or with Width 6, precision 2
		    05. %g	    - To output the value as or with Exponent as needed, only necessary digits
	*/
	var numberValue = 3.141

	fmt.Printf("Float with Scientific notation with 'e' as exponent output%e\n", numberValue)
	fmt.Printf("Float  Decimal point, no exponent output%f\n", numberValue)
	fmt.Printf("Float Default width, precision 2 output%.2f\n", numberValue)
	fmt.Printf("Float Width 6, precision 2 output%6.2f\n", numberValue)
	fmt.Printf("Float Exponent as needed, only necessary digits output%g\n", numberValue)

	/*
		Float with Scientific notation with 'e' as exponent output3.141000e+00
		Float  Decimal point, no exponent output3.141000
		Float Default width, precision 2 output3.14
		Float Width 6, precision 2 output  3.14
		Float Exponent as needed, only necessary digits output3.141
	*/

}
