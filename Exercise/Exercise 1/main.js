

let language = "JavaScript";
let message = `Let's learn $(language)`;
console.log(message);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof (nrToStr));

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof (strToNr));

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof (strToBool));

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof (nullToNr));

let str2ToNr = "";
str2ToNr = Number(str2ToNr);
console.log(str2ToNr, typeof (str2ToNr));
