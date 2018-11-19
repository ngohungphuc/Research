package main

/* simple function
func main() {
	sayHello()
}

func sayHello() {
	println("Hello")
}
*/

/* pass parameter by value
package main

func main() {
	message := "Hello"

	sayHello(message)

	println(message)
}

func sayHello(message string) {
	println(message)

	message = "Hello Go"
}
*/

/* pass parameter by reference
package main

func main() {
	message := "Hello"

	sayHello(&message)

	println(message)
}

func sayHello(message *string) {
	println(*message)

	*message = "Hello Go"
}
*/

/*variadic function
package main

func main() {
	sayHello("Hello", "Go", "from", "Pluralsight")
}

func sayHello(messages ...string) {
	for _, message := range messages {
		println(message)
	}
}
*/

/*single return value
package main

func main() {
	result := add(1, 3)
	println(result)
}

func add(terms ...int) int {
	result := 0
	for _, term := range terms {
		result += term
	}

	return result
}
*/

/* multiple return values
package main

func main() {
	numTerms, sum := add(1, 3)
	println("Added:", numTerms, "terms for a total of", sum)
}

func add(terms ...int) (int, int) {
	result := 0
	for _, term := range terms {
		result += term
	}

	return len(terms), result
}

*/

/* named returned values
package main

func main() {
	numTerms, sum := add(1, 3)
	println("Added:", numTerms,"terms for a total of", sum)
}

func add(terms ...int) (numTerms int, sum int) {

	for _, term := range terms {
		sum += term
	}

	numTerms = len(terms)

	return
}
*/

/* anonymous function
package main

func main() {
	addFunc := func(terms ...int) (numTerms int, sum int) {

		for _, term := range terms {
			sum += term
		}

		numTerms = len(terms)

		return
	}

	numTerms, sum := addFunc(1, 3)
	println("Added:", numTerms, "terms for a total of", sum)
}
*/
