/* basic instantiation
package main

func main() {
	foo := myStruct{"bar"}

	println(foo.myField)
}

type myStruct struct {
	myField string
}
*/

/*instantiation with new
package main

func main() {
	foo := new(myStruct)

	foo.myField = "bar"

	println(foo.myField)
}

type myStruct struct {
	myField string
}
*/

/*instantiation by reference
package main

func main() {
	foo := &myStruct{"bar"}

	println(foo.myField)
}

type myStruct struct {
	myField string
}
*/

/*try to work with struct with uninitialized map
package main

func main() {
	foo := &myStruct{"bar"}

	println(foo.myField)
}

type myStruct struct {
	myField string
}
*/

/*object creation with constructor function
package main

import "fmt"

func main() {
	foo := NewMyStruct()
	foo.myMap["bar"] = "baz"

	fmt.Println(foo)
}

type myStruct struct {
	myMap map[string]string
}

func newMyStruct() *myStruct {
	result := myStruct{}
	result.myMap = map[string]string{}

	return &result
}
*/

/* creating methods
package main

func main() {
	foo := messagePrinter{"Hello Go"}

	foo.printMessage()
}

type messagePrinter struct {
	message string
}

func (mp *messagePrinter) printMessage() {
	println(mp.message)
}
*/

/* composing stucts
package main

func main() {
	foo := enhancedMessagePrinter{}
	foo.message = "Hello Go"

	foo.printMessage()
}

type messagePrinter struct {
	message string
}

func (mp *messagePrinter) printMessage() {
	println(mp.message)
}

type enhancedMessagePrinter struct {
	messagePrinter
}
*/
