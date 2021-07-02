function getTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow>18) {greeting = 'Good Evening';}
    else if (hourNow > 11) {greeting = 'Good Afternoon';}
    else if (hourNow >=0) {greeting = 'Good Morning';}
    else {greeting = 'Welcome';}

    document.write('<h2>' + greeting + '!</h2>')
}


function doYouLikeDragonBallz(){
    let LikeDragonBallz = prompt('Do you like Dragonball Z?')
if(LikeDragonBallz == 'yes'){
document.write('I like Dragonball Z')
} else {document.write("I am sorry to hear that, Go back to spongy land")}

}


function getUserName(){
    let user_name = prompt('Please Enter Your Name');
    document.write(user_name + '!')
}

getUserName();
getTime();
doYouLikeDragonBallz();

function guessingGamel(){
    let correctAnswer = "Green";
    let guessCount = 0;
    let guessLimit = 3; 
    let outOfGuesses = false
    let win = false;

    while(guessCount != 3 || win != true){
        let userAnswer = prompt("Please guess what's my favorite color")
        if(userAnswer == correctAnswer){
            alert("Hooray you guessed correct")
            win = true;
            break;
        } else {
            alert("incorrect. Please guess again")
            guessCount++
            if(guessCount == guessLimit)
            {alert('nice try!!! correct answer is Green')
            break;}
        }
    }
}
guessingGamel()

function myFunction( ) {var elmnt = document.getElementById("content"); elmnt.scrollIntoView();}