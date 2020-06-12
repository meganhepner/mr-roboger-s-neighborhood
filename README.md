# _Mr Roboger's Neighborhood_

#### _Working With Loops, 6.12.20_

#### By _**Megan Hepner**_

## Description
  This webpage is an overview of lessons learned in Week 3 of Epicodus. A form takes user input as a whole number between 1 and 100. It then tests whether the number contains a 1, 2, or 3 and presents Mr Roboger's unique reply to each of those numbers. If the input number does not contain a 1, 2, or 3 the program returns an array of all numbers up to and including the inputted number, with Mr. Roboger's replies replacing the values at 1, 2, and 3.

## Setup/Installation Requirements

* use the terminal to clone this repository 
* to clone this content, copy the url provided by the 'clone or download' button in GitHub
* in terminal use the command 'git clone (GitHub url)'
* open the content in a web browser

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **If input number contains a 3 output "Won't you be my neighbor?"** | 13 | Won't you be my neighbor? |
| **If input number contains a 2 but not a 3 output "Boop!"** | 21 | Boop! |
| **If input number contains a 1 but not a 2 or 3 output "Beep!** | 15 | Beep! |
| **If input number does not contain a 1, 2, or 3, the program returns an array of numbers from 0 to the users inputted number** | 4 | "0, 1, 2, 3, 4" |
| **Replace 3 in array with "Won't you be my neighbor** | [0,1,2,3] | 0, 1, 2, Won't you be my neighbor |
| **Replace 2 in array with "Boop!** | [0,1,2,3] | 0, 1, Boop!, 3 |
| **Replace 1 in array with "Beep!!** | [0,1,2,3] | 0, Beep! , 2, 3 |

## Support and contact details

_For question, concerns, or if you would like to make contributions to this work, please contact Megan Hepner_

## Technologies Used

Html, CSS, Bootstrap, JavaScript, JQuery

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Megan Hepner_**