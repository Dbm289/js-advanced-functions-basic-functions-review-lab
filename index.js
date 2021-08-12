// Your code here
function saturdayFun(activity='roller-skate') {
    return`This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function (param='*') {
    return function (innerParam='special') {
        return (`You are ${param}${innerParam}${param}!`)
    }
    
}

let Calculator = {
    add: () => 1+3,
    subtract: () => 1-3,
    multiply: () => 1*3,
    divide: () => 10/5
}

function actionApplyer(startingInteger, arrayOfFunctions) {
    let x = startingInteger

    for (let y of arrayOfFunctions) {
        x = y(x)
    }
    return x
}