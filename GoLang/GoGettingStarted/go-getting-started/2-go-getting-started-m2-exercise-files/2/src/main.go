package main

const (
	first = 1 << (10 * iota)
	second
	third
)

func main() {
	println(first)
	println(second)
	println(third)
}

/* traditional constants
package main

const (
	first  = "the first"
	second = "the second"
	third  = "the third"
)

func main() {
	println(first)
	println(second)
	println(third)
}
*/

/* intro to iota
package main

const (
	first = iota
	second
	third
)

func main() {
	println(first)
	println(second)
	println(third)
}
*/

/* iota resets per const block
package main

const (
	first = iota
	second
)

const (
	third = iota
)

func main() {
	println(first)
	println(second)
	println(third)
}

*/
