//Assignment 01 : feetToMile Conversion

function feetToMile(feet) {
    const mile=feet/5280;
    return mile;
}
const finalResult= feetToMile(2);
console.log(finalResult)

// Assignment 02: wood Calculator

function woodCalculator(chairQuantity,tableQuantity,bedQuantity) {
    const woodForOneChair=2;
    const woodForOneTable=4;
    const woodForOneBed=7;
    if (chairQuantity<0 || tableQuantity<0 || bedQuantity<0) {
        return "wood quantity can not be negative";
    }
    
    const totalWood= woodForOneChair*chairQuantity+woodForOneTable*tableQuantity+woodForOneBed*bedQuantity;
    return totalWood;  
    console.log(totalWood);
}
    // const chairQuantity=10;
    // const tableQuantity=5;
    // const bedQuantity=3; 
    // const totalWood=chairQuantity+tableQuantity+bedQuantity;
     
