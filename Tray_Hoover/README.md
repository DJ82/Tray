The following text outlines instructions related to the Tray Technical Assessment:
==================================


NOTES:
1. The program is named: "tray-hoover.js" 
2. The program runs on NodeJS v4.4.1 and later
3. There are no external libraries used
4. There are 3 folders in the directory used for testing. Each test folder contains 2 files:
	1. Source code file ("tray-hoover.js")
	2. Data input file ("input.txt")

	Each input file contains a different set of data for locations of dirt patches as well as directions for the hoover to move within the imaginary room.

	To run a test, please change the directory within Terminal to the specific Test folder (e.g.: Tray_Hoover/Test2), then run the following command in Terminal:   
		node tray-hoover.js


TO RUN THE PROGRAM:
1. Open Terminal on MacOSX
2. Change the directory to the folder named: "Tray_Hoover"
3. Enter the following command to Terminal:
	node tray-hoover.js


OTHER NOTES: 

• The source code file includes comments which describe what each line of code accomplishes 

• There are extra 'console.log' statements which have been commented out within the if-statement block. If you wish to view this additional information, please un-comment these then rerun the program, and the console will log output information for how the hoover is processing the instructions. (The logs have been commented-out in order to preserve the stdout expected output)


EXPECTED OUTPUT:  
The Expected Output in the console will display 2 lines of data: 

	• Line1: X and Y coordinates marking the final position of the hoover after following all navigational commands 
	
	• Line2: Number count of patches of dirt which were cleaned


TEST RESULTS: 

	Expected OUTPUT for Test1:
		1 3
		1

	Expected OUTPUT for Test2:
		1 0
		6

	Expected OUTPUT for Test3:
		2 4
		6


ORIGINAL ASSESSMENT PROMPT DOCUMENT:
https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5#https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5


Please email any questions to: DanielJohnsonSF@gmail.com
