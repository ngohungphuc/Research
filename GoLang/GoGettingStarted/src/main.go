package main

import (
	"fmt"
)

func main() {
	var planCapacitites []float64

	planCapacitites = []float64{30, 30, 30, 60, 60, 100}

	var capacity float64 = planCapacitites[0] + planCapacitites[1] +
		planCapacitites[2] + planCapacitites[3] + planCapacitites[4] + planCapacitites[5]

	var gridLoad = 75.

	utilization := gridLoad / capacity

	fmt.Printf("%-20s%.0f\n", "Capacity", capacity)
	fmt.Printf("%-20s%.0f\n", "Load", gridLoad)
	fmt.Printf("%-20s%.1f%%\n", "Util", utilization*100)
}
