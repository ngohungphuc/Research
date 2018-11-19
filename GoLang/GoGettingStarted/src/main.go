package main

import (
	"strings"
	"fmt"
	"errors"
)

func main() {
	plnats := []PowerPlant {
		PowerPlant{hydro, 300, active},
		PowerPlant{wind, 30, active},
		PowerPlant{wind, 25, inactive},
		PowerPlant{wind, 35, active},
		PowerPlant{solar, 45, unavailable},
		PowerPlant{solar, 40, inactive},
	}

	grid := PowerGrid{300, plants}
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

type PlantType string

const (
	hydro PlantType = "Hydro"
	wind  PlantType = "Wind"
	solar PlantType = "Solar"
)

type PlantStatus string

const (
	active      PlantStatus = "Active"
	inactive    PlantStatus = "InActive"
	unavailable PlantStatus = "Unavailable"
)

type PowerPlant struct {
	plantType PlantType
	capacity  float64
	status    PlantStatus
}

type PowerGrid struct {
	load   float64
	plants []PowerPlant
}

func (pg *PowerGrid) generatePlantReport() {
	for idx, p := range pg.plants {
		label := fmt.Sprintf("%s%d", "Plant #", idx)
		fmt.Println(label)
		fmt.Println(strings.Repeat("-"), len(label)))
		fmt.Printf("%-20s%.1f%%\n", "Type", p.plantType)
		fmt.Printf("%-20s%.0f\n", "Capacity", p.capacity)
		fmt.Printf("%-20s%s\n", "Status", p.status)
		fmt.Println("")
	}
}
