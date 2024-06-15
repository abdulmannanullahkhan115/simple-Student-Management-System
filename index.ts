import inquirer from "inquirer";
const balance:number=0;
const randomNumber=Math.floor(10000+Math.random()*90000);
console.log(randomNumber)

const answer=await inquirer.prompt([{
    name:"student",
    type:"input",
    message:"please enter your name:",
    choices:["EasyPaisa","JazzCash","BankTransfer"],
    validate:function(value){
        if(value.trim()!==""){
            return true;{
return "please enter the non empty value"}
        }
    }
},
{
name:"courses",
type:"list",
message:"please enter the course you want to apply:",
choices:["Python","Javascript","MsOffice","adobePhotoshop"],
}]
)
const tutionfee:{[keyword:string]:number}={
    "Python":5000,
    "Javascript":4000,
    "MsOffice":3000,
    "adobePhotoshop":6000
}
console.log(`TutionFee:${tutionfee[answer.courses]}`);
console.log(`Balance:${balance}`)

let paymentType=await inquirer.prompt([{
    name:"payment",
    type:"list",
    choices:["Bank Transfer","EassyPaisa","JazzCash"]
},
{name:"amount",
    type:"input",
    message:"Transfer Money:",
    validate:function(value){
        if(value.trim()!==""){
    return true
        }
    return "please enter a nonempty place"
    }

}
])


const tutionfees=tutionfee[answer.courses]
const paymentamount=parseFloat(paymentType.amount);
if(tutionfees==paymentamount){
    console.log('Congragulation you sucessfully apart of course')
} 
else {
console.log('Invalid amount due to course')
}

let conclusion=await inquirer.prompt(
    [
        {
         name:"option",
         type:"list",
         message:"doyou like to see detail info:",
         choices:["viewSource","cancel"]  
        }
    ]  )
if(conclusion.option=="viewSource"){
console.log(`CandidateName:${answer.student}`);
console.log(`Student Roll Number:${randomNumber}`);
console.log(`Course:${answer.courses}`);
console.log(`Tutionfees:${tutionfee[answer.courses]}`)
console.log(`Payment:${paymentType.payment}`)
console.log('****___________________________****')
}
else{
    console.log('invalid amount due to course')
    
}
