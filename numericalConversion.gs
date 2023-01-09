//I would simply add this code to the autoFillIPSTemplateGoogleDoc(e) function in code.gs
//I wasn't sure about some specific information, and have e-mailed James about it. 
//If I finish this before he gets back to me, I'll submit this; and amend it later if he tells me something I haven't already figured out.

//I would create a hash map like this: 

numConvertMap = new Map();
//Then I would assign all expected values a number; so for instance:
numConvertMap.set("Very risk-averse", 1);
numConvertMap.set("Relatively risk-averse", 2);
numConvertMap.set("Moderately risk-averse", 3);
numConvertMap.set("Not very risk-averse", 4);
numConvertMap.set("Not risk-averse", 5);

/*That only works for one of the three columns, but I would simply add the expected answers from the other columns to the hash map, as well. 
Then I would, create three variables that would hold the numerical values. For instance, if columns 5, 6, and 7 were meant to be converted 
From text to a number:*/
let column5 = e.values[6]; // Following the convention seen in the autoFillIPSTemplateGoogleDoc function, where values from column 3 were found in e.values[4]
let numericalRepresentationOfColumn5 = numConvertMap.get(column5);
let column6 = e.values[7];
let numericalRepresentationOfColumn6 = numConvertMap.get(column6);
let column7 = e.values[8];
let numericalRepresentationOfColumn7 = numConvertMap.get(column7);
