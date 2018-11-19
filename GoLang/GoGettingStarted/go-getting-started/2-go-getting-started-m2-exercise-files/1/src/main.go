package main

func main() {
	var myInt int
	myInt = 42

	var myFloat32 float32 = 42.

	myString := "Hello Go"

	myComplex := complex(2, 3)

	println(myInt)
	println(myFloat32)
	println(myString)
	println(myComplex)
	println(real(myComplex))
	println(imag(myComplex))

}
