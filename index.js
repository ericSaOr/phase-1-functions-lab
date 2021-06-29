// Code your solution in this file!

const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks (num){

    if (num > 42){
    return num - headquarters;
    }else if (num < 42){
        return headquarters - num;
    }

}

function distanceFromHqInFeet (num){
    return distanceFromHqInBlocks(num) * feet;
    
}

function distanceTravelledInFeet (headquarters, num2){
    if (num2 > headquarters){
        return (num2 - headquarters)*feet;

    }else{
    return (headquarters - num2)*feet;
    }
}

function calculatesFarePrice (headquarters, num2){
    if (distanceTravelledInFeet(headquarters, num2) < 401){
        return 0;
    }else if(distanceTravelledInFeet(headquarters, num2) <= 2000){
        return (distanceTravelledInFeet(headquarters, num2) - 400) * 0.02;
    }else if (distanceTravelledInFeet(headquarters, num2) > 2500){
        return "cannot travel that far"

    }else if (distanceTravelledInFeet(headquarters, num2) > 2000){
        return 25;
    }

}