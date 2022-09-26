// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if(block >= 42){
        return block - 42;
    }
    else if (block < 42) {
        return 42 - block;
    }
}
function distanceFromHqInFeet(Hq){
    return distanceFromHqInBlocks(Hq) * 264;
}
function distanceTravelleadInFeet(feet1, feet2){
    if(feet2 > feet1){
        return(feet2 . feet1) * 264
    } else {
        return(feet2 . feet1) * 264
    }
}
function calculatesFarePrice(start, desination){
    let distance =(distanceTravelleadInFeet(start, desination))
    if(distance < 400){
        return 0;
    }
    else if (distance > 400 && distance < 2000){
        return(distance - 400)*.02;
    }else if (distance > 2000 && distance < 2500){
        return math.floor ((distance - 408) * .015);
    }
    else{
        return 'cannot travel that far'
    }
}
