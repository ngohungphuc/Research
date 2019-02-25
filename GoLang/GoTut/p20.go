package main 
import (
	"fmt"
)

func foo() {
	defer fmt.Println("Done")
	fmt.Println("Something")
}

func main() {
	foo()
}