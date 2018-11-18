package main

import (
	"fmt"
)

func main() {
	planCapacitites := []float64{30, 30, 30, 60, 60, 100}

	activePlants := []int{0, 1}

	gridLoad := 75.

	fmt.Println("1) Generate Power Plan Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please chose an option: ")

	var option string

	//& pass memory address of variable to Scanln func
	fmt.Scanln(&option)

	switch option {
	case "1":
		for idx, cap := range planCapacitites {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}

	case "2":
		capacity := 0.
		for _, plantId := range activePlants {
			capacity += planCapacitites[plantId]
		}
		fmt.Printf("%-20s%.0f\n", "Capacity", capacity)
		fmt.Printf("%-20s%.0f\n", "Load", gridLoad)
		fmt.Printf("%-20s%.1f%%\n", "Util", gridLoad/capacity*100)

	default:
		fmt.Println("Unknow command")
	}
}
