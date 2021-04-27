'use strict';
window.value = 0;
let learn = prompt('do you think that Im learning programming language right now  ( yes , no , n , y )');
while (learn !== 'yes' && learn !== 'no' && learn !== 'y' && learn !== 'n') {
    learn = prompt('do you think that Im learning programming language right now  ( yes , no , n , y )');
}

if (learn == 'yes' || learn == 'y') {
    console.log('that is correct');
    alert('that is correct');
    value++;
}
else if (learn == 'no' || learn == 'n') {
    console.log('that is wrong');
    alert('that is wrong');
}

let college = prompt('do you think I was studied in engineering college  ( yes , no , n , y )');
while (college !== 'yes' && college !== 'no' && college !== 'y' && college !== 'n') {
    college = prompt('do you think I was studied in engineering college   ( yes , no , n , y )');
}
if (college == 'no' || college == 'n') {
    console.log('that is correct');
    alert('that is correct');
    value++;
}
else if (college == 'yes' || college == 'y') {
    console.log('that is wrong');
    alert('that is wrong');
}
let status = prompt('do you think I\'m single  ( yes , no , n , y )');
while (status !== 'yes' && status !== 'no' && status !== 'y' && status !== 'n') {
    status = prompt('do you think I\'m single  ( yes , no , n , y )');
}
if (status == 'yes' || status == 'y') {
    console.log('that is correct');
    alert('that is correct');
    value++;
}
else if (status == 'no' || status == 'n') {
    console.log('that is wrong');
    alert('that is wrong');
}
let live = prompt('do you think  I\'m living in jordan  ( yes , no , n , y )');
while (live !== 'yes' && live !== 'no' && live !== 'y' && live !== 'n') {
    live = prompt('do you think  I\'m living in jordan  ( yes , no , n , y )');
}
if (live == 'yes' || live == 'y') {
    console.log('that is correct');
    alert('that is correct');
    value++;

}
else if (live == 'no' || live == 'n') {
    console.log('that is wrong');
    alert('that is wrong');
}
let coffee = prompt('do you think I drink  coffee  ( yes , no , n , y )');
while (coffee !== 'yes' && coffee !== 'no' && coffee !== 'y' && coffee !== 'n') {
    coffee = prompt('do you think I drink  coffee  ( yes , no , n , y )');
}
if (coffee == 'no' || coffee == 'n') {
    console.log('that is correct');
    alert('that is correct');
    value++;

}
else if (coffee == 'yes' || coffee == 'y') {
    console.log('that is wrong');
    alert('that is wrong');
}

for (let i = 1; i <= 4; i++) {
    let userTried = prompt('guess what is the number?');
    console.log(userTried);
    let num1 = 100;
    let num2 = 101;
    let num3 = 102;
    let num4 = 103;
    if (userTried >= 150) {
        alert('too high');
    }
    else if (userTried <= 50) {
        alert('too low');
    }
    if (userTried == 100 || userTried == 101 || userTried == 102 || userTried == 103) {
        value++;
    }
}

for (let x = 100; x <= 103; x++) {

    alert("the correct answer is " + x)
}


for (let i = 1; i <= 6; i++) {
    let userAnswer = prompt('what is my fav food?');
    let food = ['kabab', 'sushi', 'pizza', 'burger'];
    let flag = false;
    for (let v = 0; v < food.length; v++) {
        if (userAnswer === food[v]) {
            console.log('yes that\'s one of them');
            value++;
            flag = true;

            break;

        }

    }
    if (flag === false) {
        console.log('sorry it is not one of them');

    }
}
alert(" you answered from 7 questions " + value + " welldone ");

