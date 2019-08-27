//set toggle variables for dice
let dice = document.getElementsByClassName("dice");
for(let i=0;i<dice.length;i++){
    dice[i].dataset.customVariable = "stick";
    dice[i].dataset.customVariable = "number";
    dice[i].dataset.stick = "false";
    dice[i].dataset.number = "0";
}

let button = document.getElementById("rollButton");

let db = false;
let canRoll = true

let rollsLeft = 3;

let round = 1;

let info = document.getElementById("info");

const RandomDice = () => {
    return (Math.floor(Math.random()*6)) + 1;
}

button.addEventListener("click",function(){
    if(canRoll && round <=13 && rollsLeft > 0){
        db = true;
        rollsLeft--;
        let diceArr = [];

        updateUI();

        for(let i = 0;i<dice.length;i++){
            if(dice[i].dataset.stick == "true"){
                diceArr[i] = Number(dice[i].dataset.number);
            }else{
                diceArr[i] = RandomDice();
                dice[i].dataset.number = diceArr[i];
            }
        }

        //get dice image elements
        let images = document.getElementsByClassName("dice");
        let imageArr = [];

        for(let i = 0;i<diceArr.length;i++){
                imageArr.push(imageDecide(diceArr[i]));
        }


        //set each element to corresponding image
         for(let i=0;i<images.length;i++){

            images[i].src = imageArr[i];

        }
        
        if(rollsLeft <= 0){
            canRoll = false;
        }
    }
});


//function which returns image depending on dice roll
function imageDecide(diceNum){
    if(diceNum == 1){
        return "images/one.png";
    }else if(diceNum == 2){
        return "images/two.png";
    }else if(diceNum == 3){
        return "images/three.png";
    }else if(diceNum == 4){
        return "images/four.png";
    }else if(diceNum == 5){
        return "images/five.png";
    }else if(diceNum == 6){
        return "images/six.png";
    }
}



//event to toggle dice
for(let i=0;i<dice.length;i++){
dice[i].addEventListener("click",function(){
    if(db){
        let tempBool = false;
        if(dice[i].dataset.stick == "true"){tempBool = true;}

        dice[i].dataset.stick = !tempBool;

        if(!tempBool){
            dice[i].style.border = "solid 3px blue";
        }else{
            dice[i].style.border = "";
        }
        

    }
})
}



//start again button
let startAgainButton = document.getElementById("startAgain");
startAgainButton.addEventListener("click",function(){

    location.reload();

});




//YAHZTEE SHEET CODE
//UPPER
let ones = document.getElementById("ones");
let twos = document.getElementById("twos");
let threes = document.getElementById("threes");
let fours = document.getElementById("fours");
let fives = document.getElementById("fives");
let sixes = document.getElementById("sixes");
let upperTotalText = document.getElementById("totalText");

let upperArr = document.getElementsByClassName("upperBox");

ones.addEventListener("click", upperOnes);
twos.addEventListener("click", upperTwos);
threes.addEventListener("click", upperThrees);
fours.addEventListener("click", upperFours);
fives.addEventListener("click", upperFives);
sixes.addEventListener("click", upperSixes);


for(let i=0;i<upperArr.length;i++){
    upperArr[i].dataset.customVariable = "enabled";
    upperArr[i].dataset.enabled = "false";
}


//functions

function upperOnes(){
    if(ones.dataset.enabled == "false" && db){
        ones.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "1"){
                diceSum++;
            }
        }

        ones.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}

function upperTwos(){
    if(twos.dataset.enabled == "false" && db){
        twos.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "2"){
                diceSum += 2;
            }
        }

        twos.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}

function upperThrees(){
    if(threes.dataset.enabled == "false" && db){
        threes.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "3"){
                diceSum += 3;
            }
        }

        threes.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}

function upperFours(){
    if(fours.dataset.enabled == "false" && db){
        fours.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "4"){
                diceSum += 4;
            }
        }

        fours.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}

function upperFives(){
    if(fives.dataset.enabled == "false" && db){
        fives.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "5"){
                diceSum += 5;
            }
        }

        fives.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}

function upperSixes(){
    if(sixes.dataset.enabled == "false" && db){
        sixes.dataset.enabled = "true";

        let diceSum = 0;
        for(let i=0;i<dice.length;i++){
            if(dice[i].dataset.number == "6"){
                diceSum += 6;
            }
        }

        sixes.insertAdjacentHTML('beforeend', diceSum);

        upperTotalText.innerHTML = Number(upperTotalText.innerHTML) + diceSum;

        nextRound();
    }
}






function nextRound(){
    if(round < 13){
        db = false;
        round++;
        rollsLeft = 3;
        canRoll = true;
        updateGrandTotal();
        unStick();
        updateUI();
    }else{

    }
}

function updateUI(){
    info.innerHTML = `ROUND:${round}/13<br>rolls left:${rollsLeft}`;
}


function unStick(){
    for(let i=0;i<dice.length;i++){
        dice[i].dataset.stick = "false";
        dice[i].style.border = "";
    }
}

function updateGrandTotal(){
    let grandTotal = document.getElementById("grandTotal");
    let a = document.getElementById("totalText");
    let b = document.getElementById("lowerTotalText");

    grandTotal.innerHTML = Number(b.innerHTML) + Number(a.innerHTML);
}



//LOWER

let threeKind = document.getElementById("threeOfAKind");
let fourKind = document.getElementById("fourOfAKind");
let fullHouse = document.getElementById("fullHouse");
let lowStraight = document.getElementById("lowStraight");
let highStraight = document.getElementById("highStraight");
let yahtzee = document.getElementById("yahtzee");
let chance = document.getElementById("chance");

let lowerTotalText = document.getElementById("lowerTotalText");

let lowerArr = document.getElementsByClassName("lowerBox");

threeKind.addEventListener("click", threeOfAKind);
fourKind.addEventListener("click", fourOfAKind);
fullHouse.addEventListener("click", fHouse);
lowStraight.addEventListener("click", lowStraightFunc);
highStraight.addEventListener("click", highStraightFunc);
yahtzee.addEventListener("click", yahtzeeFunc);
chance.addEventListener("click",chanceFunc);

for(let i=0;i<lowerArr.length;i++){
    lowerArr[i].dataset.customVariable = "enabled";
    lowerArr[i].dataset.enabled = "false";
}


function threeOfAKind(){
    if(threeKind.dataset.enabled == "false" && db){
        threeKind.dataset.enabled = "true";

        let threeKindTotal = 0;

        for(let i=1;i<=6;i++){
            let counter=0;
            for(let x=0;x<dice.length;x++){
                if(Number(dice[x].dataset.number) == i.toString()){
                    counter++;
                }
            }
            if(counter == 3){
                threeKindTotal = i*3;
            }
        }
        

        threeKind.insertAdjacentHTML('beforeend', threeKindTotal);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + threeKindTotal;

        nextRound();
    }
}


function fourOfAKind(){
    if(fourKind.dataset.enabled == "false" && db){
        fourKind.dataset.enabled = "true";

        let fourKindTotal = 0;

        for(let i=1;i<=6;i++){
            let counter=0;
            for(let x=0;x<dice.length;x++){
                if(Number(dice[x].dataset.number) == i.toString()){
                    counter++;
                }
            }
            if(counter == 4){
                fourKindTotal = i*4;
            }
        }
        

        fourKind.insertAdjacentHTML('beforeend', fourKindTotal);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + fourKindTotal;

        nextRound();
    }
}


function fHouse(){
    if(fullHouse.dataset.enabled == "false" && db){
        fullHouse.dataset.enabled = "true";
        let fHousePoints = 25;
        let ignore = false;
        let numToIgnore = 0;
        let win=false;

        for(let i=0;i<2;i++){
        for(let i=1;i<=6;i++){
            let counter=0;
            for(let x=0;x<dice.length;x++){
                if(i != numToIgnore){
                    if(Number(dice[x].dataset.number) == i.toString() ){
                        counter++;
                    }
                }
                
            }
            if(counter == 3){
                ignore = true;
                numToIgnore = i;
            }else if(counter == 2 && ignore){
                win = true;
            }
        }
        }
        if(!win){
            fHousePoints = 0;
        }
        fullHouse.insertAdjacentHTML('beforeend', fHousePoints);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + fHousePoints;

        nextRound();
    }
}


function lowStraightFunc(){
    if(lowStraight.dataset.enabled == "false" && db){
        lowStraight.dataset.enabled = "true";

        let lowStraightPoints = 30;
        let diceNums = [];


        for(let i=0;i<dice.length;i++){
            diceNums.push(Number(dice[i].dataset.number));
        }
        diceNums = diceNums.sort(function(a,b){return a-b})
        
        let counter = 0;
        let tempVal = 0;
        for(let i=0;i<=diceNums.length;i++){
            if(i != 0){
                if (diceNums[i-1] == diceNums[i] - 1){
                    counter++;
                }
            }
        }

        if(counter != 3){
            lowStraightPoints = 0;
        }
        lowStraight.insertAdjacentHTML('beforeend', lowStraightPoints);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + lowStraightPoints;

        nextRound();
    }
}

function highStraightFunc(){
    if(highStraight.dataset.enabled == "false" && db){
        highStraight.dataset.enabled = "true";

        let highStraightPoints = 40;
        let diceNums = [];


        for(let i=0;i<dice.length;i++){
            diceNums.push(Number(dice[i].dataset.number));
        }
        diceNums = diceNums.sort(function(a,b){return a-b})
        
        let counter = 0;
        let tempVal = 0;
        let straight = true;
        for(let i=0;i<diceNums.length;i++){
            if(i != 0){
                if (diceNums[i-1] == diceNums[i] - 1 ){
                    
                }else{
                    straight = false;
                }
            }
        }

        if(!straight){
            highStraightPoints = 0;
        }

        highStraight.insertAdjacentHTML('beforeend', highStraightPoints);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + highStraightPoints;

        nextRound();
    }
}

function yahtzeeFunc(){
    if(yahtzee.dataset.enabled == "false" && db){
        yahtzee.dataset.enabled = "true";

        let yahtzeePoints = 50;


        let isYahtzee = false;

        for(let i=1;i<=6;i++){
            let counter=0;
            for(let x=0;x<dice.length;x++){
                if(Number(dice[x].dataset.number) == i.toString()){
                    counter++;
                }
            }
            if(counter == 5){
                isYahtzee = true;
            }
        }
        
        if(!isYahtzee){
            yahtzeePoints = 0;
        }


        yahtzee.insertAdjacentHTML('beforeend', yahtzeePoints);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + yahtzeePoints;

        nextRound();
    }
}


function chanceFunc(){
    if(chance.dataset.enabled == "false" && db){
        chance.dataset.enabled = "true";

        let chancePoints = 0;

        for(let i =0;i<dice.length;i++){
            chancePoints += Number(dice[i].dataset.number);
        }


        chance.insertAdjacentHTML('beforeend', chancePoints);

        lowerTotalText.innerHTML = Number(lowerTotalText.innerHTML) + chancePoints;

        nextRound();
    }
}