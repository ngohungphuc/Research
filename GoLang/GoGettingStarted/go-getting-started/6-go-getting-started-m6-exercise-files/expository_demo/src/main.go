package main

import "runtime"

func main() {
	runtime.GOMAXPROCS(8)

	ch := make(chan string)
	doneCh := make(chan bool)

	go abcGen(ch)
	go printer(ch, doneCh)

	println("this comes first!")

	<-doneCh
}

func abcGen(ch chan string) {
	for l := byte('a'); l <= byte('z'); l++ {
		ch <- string(l)
	}
	close(ch)
}

func printer(ch chan string, doneCh chan bool) {
	for l := range ch {
		println(l)
	}

	doneCh <- true
}

/* basic goroutines
package main

import "time"

func main() {
	go abcGen()

	println("this comes first!")

	time.Sleep(100 * time.Millisecond)
}

func abcGen() {
	for l := byte('a'); l <= byte('z'); l++ {
		println(string(l))
	}
}
*/

/*parallelism with goroutines
package main

import "time"
import "runtime"

func main() {
	runtime.GOMAXPROCS(8)
	go abcGen()

	println("this comes first!")

	time.Sleep(100 * time.Millisecond)
}

func abcGen() {
	for l := byte('a'); l <= byte('z'); l++ {
		go println(string(l))
	}
}
*/

/* basic channels
package main

import "time"
import "runtime"

func main() {
	runtime.GOMAXPROCS(8)

	ch := make(chan string)

	go abcGen(ch)
	go printer(ch)

	println("this comes first!")

	time.Sleep(100 * time.Millisecond)
}

func abcGen(ch chan string) {
	for l := byte('a'); l <= byte('z'); l++ {
		ch <- string(l)
	}
}

func printer(ch chan string) {
	for {
		println(<-ch)
	}
}
*/

/*looping over a channel
package main

import "runtime"

func main() {
	runtime.GOMAXPROCS(8)

	ch := make(chan string)
	doneCh := make(chan bool)

	go abcGen(ch)
	go printer(ch, doneCh)

	println("this comes first!")

	<-doneCh
}

func abcGen(ch chan string) {
	for l := byte('a'); l <= byte('z'); l++ {
		ch <- string(l)
	}
	close(ch)
}

func printer(ch chan string, doneCh chan bool) {
	for l := range ch {
		println(l)
	}

	doneCh <- true
}
*/
