Voltage Calculator Tool
About the Project
The Voltage Calculator Tool is an interactive web-based application designed for electrical engineers, students, and anyone working with transmission lines and voltage drop calculations. This tool allows users to calculate the voltage drop along a transmission line based on the input parameters such as supply voltage, impedance per unit length, and load points.

The tool allows users to enter various values for supply voltage, impedance, and load points, and it uses the standard formulas for voltage drop calculations in electrical transmission lines. This helps in visualizing the voltage variations along the line and understanding the effects of load distribution on voltage levels.

Key Features
Supply Voltage Input: Users can enter the supply voltage at the starting point of the transmission line.

Impedance per Unit Length: Allows users to input the line's impedance (in the format of R+jX).

Load Points: Multiple load points can be added, with each point specifying its location along the transmission line, and its real and reactive power (P and Q) values.

Voltage Calculation: Once all parameters are provided, users can calculate the voltage at each load point along the transmission line.

The result will show:

Voltage at each load point (in volts)

The angle (in degrees) of the voltage at each load point

The design uses dark mode for better readability, with a glassmorphism effect that makes the UI visually appealing and user-friendly.

Technologies Used
HTML: To structure the webpage and inputs.

CSS: For styling the webpage and implementing a glassmorphism effect for an aesthetic and modern look.

JavaScript: For handling calculations, input handling, and dynamic interactions such as adding/removing load points and updating the results.

Math.js Library: Used to handle complex number calculations needed for voltage drop and power calculations.

Concept of the Project
Electrical Concept
The primary concept behind this project is the calculation of voltage drops across a transmission line due to impedance and load. When electricity travels along a transmission line, the line's impedance (resistance and reactance) causes a voltage drop depending on the load at various points.

Supply Voltage (Vs): This is the voltage supplied at the starting point of the line.

Impedance per Unit Length (Z): Impedance is the opposition the transmission line offers to the flow of alternating current (AC). It is typically represented as a complex number (R + jX), where R is resistance and X is reactance.

Load Points: These are points where the load is connected along the line. Each load consumes real power (P) and reactive power (Q), which influences the total current and subsequently, the voltage at each point along the transmission line.

The tool calculates the voltage at each load point by considering the cumulative voltage drops due to the line's impedance and the current caused by the load. The current is calculated based on the real and reactive power values provided for each load.

Key Calculations:
Current Calculation: For each load point, we calculate the current (I) using the formula:

𝐼 = S/V

​
 
where S is the apparent power (P + jQ), and V is the voltage at the load point.

Voltage Drop Calculation: The voltage drop across each segment of the line is calculated using:


V_drop=Z×I

where Z is the impedance per unit length, and I is the current through the segment.

Voltage at Each Load Point: The voltage at each point along the transmission line is then calculated, taking into account the cumulative voltage drop.

How to Use
Input the Supply Voltage: Enter the supply voltage at the starting point of the line.

Enter Impedance per Unit Length: Specify the impedance (in the format R+jX) for the transmission line.

Add Load Points: Click on the "➕ Add Load Point" button to add multiple load points along the transmission line. For each load point, input:

Location (distance along the line)

Real Power (P)

Reactive Power (Q)

Calculate Voltages: Click on the "🔍 Calculate Voltages" button to compute the voltages at each load point.

View Results: The calculated voltage at each load point will be displayed, along with the angle of the voltage.

Future Enhancements
Graphical Visualization: Add a graphical representation of voltage variation along the transmission line.

Load Flow Analysis: Integrate more advanced calculations like load flow analysis and stability.

Export Functionality: Allow users to export the results in PDF or CSV format.

Real-time Calculation: Add real-time calculation for dynamic input changes without needing to click the "Calculate" button.

License
This project is open-source and available for use and modification under the MIT License.

