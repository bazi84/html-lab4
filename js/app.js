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

getTime();