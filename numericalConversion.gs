//I would simply add this code to the autoFillIPSTemplateGoogleDoc(e) function in code.gs
//I wasn't sure about some specific information, and have e-mailed James about it. 
//If I finish this before he gets back to me, I'll submit this; and amend it later if he tells me something I haven't already figured out.

//OPTION 1: If I'm meant to convert strings that do not contain numbers to numbers, I would create a map like this: 

numConvertMap = new Map();
//Then I would assign all expected values a number; so for instance:
numConvertMap.set("Very risk-averse", 1);
numConvertMap.set("Relatively risk-averse", 2);
numConvertMap.set("Moderately risk-averse", 3);
numConvertMap.set("Not very risk-averse", 4);
numConvertMap.set("Not risk-averse", 5);

/*That only works for one of the three columns, but I would simply add the expected answers from the other columns to the hashmap, as well. 
Then I would, create three variables that would hold the numerical values. For instance, if columns 5, 6, and 7 were meant to be converted 
From text to a number:*/
let column5 = e.values[6]; // Following the convention seen in the autoFillIPSTemplateGoogleDoc function, where values from column 3 were found in e.values[4]
let numericalRepresentationOfColumn5 = numConvertMap.get(column5);
let column6 = e.values[7];
let numericalRepresentationOfColumn6 = numConvertMap.get(column6);
let column7 = e.values[8];
let numericalRepresentationOfColumn7 = numConvertMap.get(column7);


//OPTION 2: If I'm meant to convert strings of numbers to numbers, I would simply use the parseInt or parseFloat method
//If the expected value of a cell be an integer, I would use parseInt; but if the expected value is a number with a decimal point, I would use parseFloat.
//For instance, 

let column5 = e.values[6];
//If we expect an integer value:
let column5int = parseInt(column5);
//OR
//If we expect a float value:
let column5float = parseFloat(column5);
//I would just repeat the above process with columns 6 and 7
