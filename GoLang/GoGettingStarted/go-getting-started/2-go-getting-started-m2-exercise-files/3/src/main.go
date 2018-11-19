package main

import "fmt"

func main() {
	myMap := make(map[int]string)

	fmt.Println(myMap)

	myMap[42] = "Foo"
	myMap[12] = "Bar"

	fmt.Println(myMap)

}

/* basic array
package main

import "fmt"

func main() {
	myArray := [3]int{}
	myArray[0] = 42
	myArray[1] = 27
	myArray[2] = 99

	fmt.Println(myArray)
}
*/

/*array with automatic size
package main

import "fmt"

func main() {
	myArray := [...]int{42, 27, 99}

	fmt.Println(myArray)
}
*/

/* exceeding array bound
package main

import "fmt"

func main() {
	myArray := [...]int{42, 27, 99}

	myArray[4] = 19

	fmt.Println(myArray)
}
*/

/* creating a slice from an array
package main

import "fmt"

func main() {
	myArray := [...]int{42, 27, 99}

	mySlice := myArray[:]

	fmt.Println(mySlice)
}
*/

/* appending to a slice
package main

import "fmt"

func main() {
	myArray := [...]int{42, 27, 99}

	mySlice := myArray[:]

	fmt.Println(myArray)
	mySlice = append(mySlice, 100)

	fmt.Println(mySlice)
	fmt.Println(myArray)
}
*/

/* creating a slice
package main

import "fmt"

func main() {
	myArray := [...]int{42, 27, 99}

	mySlice := myArray[:]

	fmt.Println(myArray)
	mySlice = append(mySlice, 100)

	fmt.Println(mySlice)
	fmt.Println(myArray)
}
*/

/* intro to maps
package main

import "fmt"

func main() {
	myMap := make(map[int]string)

	fmt.Println(myMap)

	myMap[42] = "Foo"
	myMap[12] = "Bar"

	fmt.Println(myMap)

}
*/
