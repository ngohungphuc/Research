package main

func main() {

	m := make(map[string]string)

	m["first"] = "foo"
	m["second"] = "bar"
	m["third"] = "buz"

	for k, v := range m {
		println(k, v)
	}

}

/* for loop
package main

func main() {

	for i := 0; i < 5; i++ {
		println(i)
	}

}

*/

/* for without a test
package main

func main() {

	i := 0

	for {
		i++
		println(i)

		if i > 10 {
			break
		}
	}

}
*/

/* for range with slice
package main

func main() {

	arr := []string{"foo", "bar", "baz"}

	for idx, value := range arr {
		println(idx, value)
	}

}
*/
