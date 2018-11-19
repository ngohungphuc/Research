package main

import (
	"fmt"
)

func main() {
	plantCapacitites := []float64{30, 30, 30, 60, 60, 100}

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
		generatePlantCapacityReport(plantCapacitites...)
	case "2":
		generatePowerGridReport(activePlants, plantCapacitites, gridLoad)

	default:
		fmt.Println("Unknow command")
	}
}

func generatePlantCapacityReport(plantCapacitites ...float64) {
	for idx, cap := range plantCapacitites {
		fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
	}
}

func generatePowerGridReport(activePlants []int, plantCapacitites []float64, gridLoad float64) {
	capacity := 0.
	for _, plantId := range activePlants {
		capacity += plantCapacitites[plantId]
	}
	fmt.Printf("%-20s%.0f\n", "Capacity", capacity)
	fmt.Printf("%-20s%.0f\n", "Load", gridLoad)
	fmt.Printf("%-20s%.1f%%\n", "Util", gridLoad/capacity*100)
}
