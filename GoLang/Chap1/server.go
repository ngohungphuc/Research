package main

import (
	"fmt"
	"net/http"
)

//The term handler is often used for callback functions triggered by an event
func handler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Hello World, %s!", request.URL.Path[1:])
}

//must have function
func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
