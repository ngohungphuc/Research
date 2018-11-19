package main

import "fmt"

func main() {

	plantCapacities := []float64{30, 30, 30, 60, 60, 100}

	activePlants := []int{0, 1}

	var gridLoad = 75.

	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	fmt.Println("")

	switch option {
	case "1":
		for idx, cap := range plantCapacities {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}
	case "2":
		capacity := 0.
		for _, plantId := range activePlants {
			capacity += plantCapacities[plantId]
		}
		fmt.Printf("%-20s%.0f\n", "Capacity: ", capacity)
		fmt.Printf("%-20s%.0f\n", "Load: ", gridLoad)
		fmt.Printf("%-20s%.1f%%\n", "Utilization: ", gridLoad/capacity*100)
	default:
		fmt.Println("Unknown option, no action taken")
	}
}

/* end with a test run
package main

import "fmt"

func main() {
	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	println(option)
}
*/

/* finish option 1
package main

import "fmt"

func main() {

	plantCapacities := []float64{30, 30, 30, 60, 60, 100}

	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	fmt.Println("")

	switch option {
	case "1":
		for idx, cap := range plantCapacities {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}
	}
}
*/

/* finish option 2
package main

import "fmt"

func main() {

	plantCapacities := []float64{30, 30, 30, 60, 60, 100}

	activePlants := []int{0, 1}

	var gridLoad = 75.

	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	fmt.Println("")

	switch option {
	case "1":
		for idx, cap := range plantCapacities {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}
	case "2":
		capacity := 0.
		for _, plantId := range activePlants {
			capacity += plantCapacities[plantId]
		}
		fmt.Printf("%-20s%.0f\n", "Capacity: ", capacity)
		fmt.Printf("%-20s%.0f\n", "Load: ", gridLoad)
		fmt.Printf("%-20s%.1f%%\n", "Utilization: ", gridLoad/capacity*100)

	}
}
*/

/* add default case
package main

import "fmt"

func main() {

	plantCapacities := []float64{30, 30, 30, 60, 60, 100}

	activePlants := []int{0, 1}

	var gridLoad = 75.

	fmt.Println("1) Generate Power Plant Report")
	fmt.Println("2) Generate Power Grid Report")
	fmt.Print("Please choose an option: ")

	var option string

	fmt.Scanln(&option)

	fmt.Println("")

	switch option {
	case "1":
		for idx, cap := range plantCapacities {
			fmt.Printf("Plant %d capacity: %.0f\n", idx, cap)
		}
	case "2":
		capacity := 0.
		for _, plantId := range activePlants {
			capacity += plantCapacities[plantId]
		}
		fmt.Printf("%-20s%.0f\n", "Capacity: ", capacity)
		fmt.Printf("%-20s%.0f\n", "Load: ", gridLoad)
		fmt.Printf("%-20s%.1f%%\n", "Utilization: ", gridLoad/capacity*100)
	default:
		fmt.Println("Unknown option, no action taken")
	}
}
*/
