package main 
import (
	"time"
	"fmt"
)

func say(s string) {
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(time.Millisecond*100)
	}
}

func main() {
	go say("Hey")
	say("There")
}