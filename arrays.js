//Map
const nums = ['one', 'two', 'three'];
const numsHTML = nums.map(function (nums) {
    return `<li>${nums}</li>`;
});
document.getElementById('myList').innerHTML = numsHTML.join();

//Map
const grades = ['A', 'B', 'A'];
function gpa(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;

    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}
let gpaPoints = grades.map(gpa);

//Reduce
let pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
let gpa = pointsTotal / gpaPoints.length;

//Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruitsReduced = fruits.filter(function (fruit) {
    return fruit.length < 6;
});

// Alternatively after reading solution:
// const fruitsReduced = fruits.filter((fruit) => fruit.length < 6);
// Same thing

//Index of
const luckArray = [12, 34, 21, 54];
let luckyNumber = 21;
let luckyIndex = luckArray.indexOf(luckyNumber);
