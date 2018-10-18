package main

import (
	"net/http"
)

func main() {
	// The net/http standard library provides a default multiplexer that can be created
	// by calling the NewServeMux function
	mux := http.NewServeMux()

	// strip off the string /static/ from the URL, and then look for a file with the name
	// starting at the public directory
	files := http.FileServer(http.Dir("/public"))
	mux.Handle("/static/", http.StripPrefix("/static/", files))

	// To redirect the root URL to a handler function
	mux.HandleFunc("/", index)
	server := &http.Server{
		Addr:    "0.0.0.0:8080",
		Handler: mux,
	}
	server.ListenAndServe()
}
