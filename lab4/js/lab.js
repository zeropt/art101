// Description. This file holds the Elevator operation pseudocode
// @author Raymond Wong, Riley Mann

//If ready to target, destination floor = nearest requested floor
//If the destination floor is above:
	//Move upwards
	//Up arrow lights up
//If the destination floor is below
	//Move downwards
	//Down arrow lights up
//If at the destination floor:
	//Wait 3s then open the door for 20s
	//If the sensor is tripped, reset the timer to 20s
	//If the “open door” button is pushed, reset the timer to 20s
	//If the “close door” button is pushed, nothing happens
	//If the timer finishes
    //close the door
    //ready to target again
//If an external floor button is pressed request this floor
//If an inside floor button is pressed request that floor
