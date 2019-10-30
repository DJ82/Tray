//Set the FileServer as a variable
var fs = require('fs');
//Create an array for the data from file
var array = fs.readFileSync('input.txt').toString().split("\n");

//Set the first value in the array as a Variable for the Room Position 
var roomDimensions = array[0]
	//Set the X and Y axis room dimensions as individual variables or Minimum and Maximum coordinate values
	maxDimensions_X = roomDimensions.charAt(0) - 1;
	maxDimensions_Y = roomDimensions.charAt(2) - 1;
	minDimensions_X = 0;
	minDimensions_Y = 0;


//Set the second value in the array as a Variable for the current Hoover position 
var hooverPosition = array[1]
	//Set the X and Y axis as indidivual variables
	hooverPos_X = hooverPosition.charAt(0)
	hooverPos_Y = hooverPosition.charAt(2)

//Set the array for dirt patch locations
var dirtPatchLoc = array.slice(2, array.length - 1)

//Set the final item in the array as the directions
var directions = array[array.length - 1]

//Set to zero to initialize Count of DirtPatches as variable
var dirtPatchNum = 0

//Create and set a temporary array to store which hoover position coordinate match dirt patch locations
var cleanArray = []

//Loop through each value in directions
for (i = 0; i < directions.length; i++) {
	//This compares the next letter in the array to: N,S,E,W and compares the max/min room dimensions to directions to ensure space for roomba to move 
	if (directions[i] === "N" & hooverPos_Y < maxDimensions_Y) {		
		//This adds 1 to the hooverPositions on Y-Axis
		var hooverPos_Y = parseInt(hooverPos_Y) + 1;
		// console.log("The hoover moves North")
	} else {
		if (directions[i] == "S" & hooverPos_Y > minDimensions_Y) {
			//This subtracts 1 from the hooverPositions on Y-Axis
			var hooverPos_Y = parseInt(hooverPos_Y) - 1;
			// console.log("The hoover moves South")
		} else {
			if (directions[i] == "E" & hooverPos_X < maxDimensions_X) {
				//This adds 1 to the hooverPositions on X-Axis
				var hooverPos_X = parseInt(hooverPos_X) + 1;
				// console.log("The hoover moves East")
				} else {
					if (directions[i] == "W" & hooverPos_X > minDimensions_X) {
					//This adds 1 to the hooverPositions on X-Axis
					var hooverPos_X = parseInt(hooverPos_X) - 1;
					// console.log("The hoover moves West")
					} else {
						// console.log("The hoover wants to move: " + directions[i] + " ...but has reached the wall of the room.") 
					}
				}
			}
		}
		//Create coordinates varibale as concatination of PosX and PosY
		var coordinates = hooverPos_X + " " + hooverPos_Y
		// Check if Current Coordinates are included in intial Dirt Patch Location array
		var mySet = new Set(dirtPatchLoc);
		var isPresent = mySet.has(coordinates);
		// Check if Current Coordinates are included in cleaned Dirt Patch Location array (these are already cleaned)
		var mySet1 = new Set(cleanArray);
		var isPresent1 = mySet1.has(coordinates);
		//If the coordinate is a dirtpatch AND it has not been cleaned yet, then store coordinates to new array (if not existing in array yet)
		if (isPresent !== isPresent1){
			//Add the coordinates to the Set
			cleanArray.push(coordinates)
			//Set Patch Number to length of Cleaned locations array
			dirtPatchNum = cleanArray.length
		}
	// console.log("The hoover is at: " + coordinates)
}

console.log(coordinates + "\n" + dirtPatchNum)

// console.log("Room Dimensions:   " + roomDimensions)
// console.log("Maximum Dimensions:   " + maxDimensions_X + " " + maxDimensions_Y)
// console.log("Directions: " + directions)
// console.log("Initial Hoover Position:   " + hooverPosition)
// console.log("List of original Dirt Patch Coordinates: ")
// console.log(dirtPatchLoc)
// console.log("Coordinates which got Cleaned:   ")
// console.log(cleanArray)
// console.log("Final Coordinates:   " + coordinates)
