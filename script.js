//image is from https://laughingsquid.com/know-your-cephalopods/

function buildAppendages(numArms){
    //we store how many we are building
    return function(hasSuckers){
        let suckerState="with no suckers";
        if(hasSuckers==true){
            //if they have suckers they could still be tentacles or arms
            return function(suckerLocation){
                //if the sucker location is at the ends, tentacles
                if(suckerLocation=="ends"){
                    suckerState="with suckers at the ends"
                    return `${numArms} tentacles ${suckerState}`;
                }else{
                    //otherwise arms
                    return `${numArms} arms`;
                }
            }
        }else{
            //if no suckers, they are tentacles
            return `${numArms} tentacles ${suckerState}`;
        }
    }
}

let tentacles = buildAppendages(10)(true)("ends");
console.log(tentacles);
let arms = buildAppendages(8)(true)();
console.log(arms);

function buildCephalopod(speciesName){
    return function(hasShell){
        return function(){
            let output = {};
            output.name = speciesName;
            output.hasShell = hasShell;
            output.arms = arguments[0];
            output.tentacles = arguments[1];
            return output;
        }
    }
}
let spirulida = buildCephalopod("Spirulida")(true)(buildAppendages(2)(true)(),buildAppendages(8)(true)("ends"));
console.log(spirulida);
let octopoda = buildCephalopod("Octopoda")(false)(buildAppendages(8)(true)(),"");
console.log(octopoda);

/*
Q1. update the buildCephalopod function to take in a description
(2 marks)
*/

/*
Q2.  update the buildCephalopod function to take in a mood in the form of a number from 0 to 1
(2 marks)
*/

/*
Q3.  Build 2 cephalopods from the image in the project using the functions listed above
(10 marks)
*/

/*
Q4. Invent 2 cephalopods and make instances of them from the functions above
(10 marks)
*/

/*
Q5.  Make a function called petCephalopod, which will use the mood value of an instantiated cephalopod and math.random().  

petCephalopod must:
a.  return a phrase to be console logged
b.  if mood is equal to or greater than the math.random() use template literals to show the name of the cephalopod, its mood, and that it liked being petted
c.  if the mood is less than math.random(), return a phrase with the name of the cephalopod, showing the animal biting and being mad
(5 marks)
*/

/*
Q6. run the petCephalopod function on each cephalopod using apply, call and bind. Be sure to console log each result.
(20 marks)
*/