// jww - Jumper with Weaves Qaulify (type of race)
// std - Standard Quality (type of race)
// doubleQ - earned a Jumper and Standard at same show

//Illustrate object and instances of the Dog object
let Dog = function (name, age, jwwQs, stdQs, doubleQs, totalPts) {
    this.name = name;
    this.age = age;
    this.jwwQs = jwwQs;
    this.stdQs = stdQs;
    this.doubleQs = doubleQs;
    this.totalPts = totalPts;
};
console.log(Dog);

let ellie = new Dog("Ellie", 12, 50, 50, 40, 750);
let margee = new Dog("Margee", 12, 65, 50, 40, 750);
let jack = new Dog("Jack", 4, 0, 0, 0, 0);
let billy = new Dog("Billy", 13, 25, 30, 3, 250);
let pete = new Dog("Pete", 10, 33, 42, 35, 800);
let kate = new Dog("Kate", 9, 65, 50, 35, 940);


/// Margee
let dataMargee = document.getElementById("margeePoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

//Illustrate template literal
function printMargee() {
    let paragraph = document.getElementById('outputMargee');
    paragraph.innerHTML = `<li>Jumper Qs: ${margee.jwwQs}</li><li> Std Qs: ${margee.stdQs}</li><li>Double Qs: ${margee.doubleQs}</li><li>Total Points: ${margee.totalPts}</li>`;
}

$(document).ready(function () {
    $(".btnMargee").click(function (e) {
        $(".btnMargee").hide();
        e.preventDefault();
    });
});

dataMargee.addEventListener('click', printMargee);


//// Ellie
let dataEllie = document.getElementById("elliePoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

function printEllie() {
    let paragraph = document.getElementById('outputEllie');
    paragraph.innerHTML = `<li>Jumper Qs: ${ellie.jwwQs}</li><li> Std Qs: ${ellie.stdQs}</li><li>Double Qs: ${ellie.doubleQs}</li><li>Total Points: ${ellie.totalPts}</li>`;
}

$(document).ready(function () {
    $(".btnEllie").click(function (e) {
        $(".btnEllie").hide();
        e.preventDefault();
    });
});

dataEllie.addEventListener('click', printEllie);

//// Jack
let dataJack = document.getElementById("jackPoints");

//let points = `<p> My name is ${ellie.name} ${ellie.age} </p>`;
//print(points);

function printJack() {
    let paragraph = document.getElementById('outputJack');
    paragraph.innerHTML = `<ul>Jumper Qs: ${jack.jwwQs}</ul> <ul>Std Qs: ${jack.stdQs}</ul><ul>Double Qs: ${jack.doubleQs}</ul> <ul>Total Points: ${jack.totalPts}</ul>`;
}

$(document).ready(function () {
    $(".btnJack").click(function (e) {
        $(".btnJack").hide();
        e.preventDefault();
    });
});

dataJack.addEventListener('click', printJack);

let dataBilly = document.getElementById("billyPoints");

function printBilly() {
    let paragraph = document.getElementById('outputBilly');
    paragraph.innerHTML = `<ul>Jumper Qs: ${billy.jwwQs}</ul> <ul>Std Qs: ${billy.stdQs}</ul><ul>Double Qs: ${billy.doubleQs}</ul> <ul>Total Points: ${billy.totalPts}</ul>`;
}

$(document).ready(function () {
    $(".btnBilly").click(function (e) {
        $(".btnBilly").hide();
        e.preventDefault();
    });
});

dataBilly.addEventListener('click', printBilly);

let dataPete = document.getElementById("petePoints");

function printPete() {
    let paragraph = document.getElementById('outputPete');
    paragraph.innerHTML = `<ul>Jumper Qs: ${pete.jwwQs}</ul> <ul>Std Qs: ${pete.stdQs}</ul><ul>Double Qs: ${pete.doubleQs}</ul> <ul>Total Points: ${pete.totalPts}</ul>`;
}

$(document).ready(function () {
    $(".btnPete").click(function (e) {
        $(".btnPete").hide();
        e.preventDefault();
    });
});

dataPete.addEventListener('click', printPete);

let dataKate = document.getElementById("katePoints");

function printKate() {
    let paragraph = document.getElementById('outputKate');
    paragraph.innerHTML = `<ul>Jumper Qs: ${kate.jwwQs}</ul> <ul>Std Qs: ${kate.stdQs}</ul><ul>Double Qs: ${kate.doubleQs}</ul> <ul>Total Points: ${kate.totalPts}</ul>`;
}

$(document).ready(function () {
    $(".btnKate").click(function (e) {
        $(".btnKate").hide();
        e.preventDefault();
    });
});

dataKate.addEventListener('click', printKate);


/*
for (const key in ellie) {
    console.log(key, ellie[key]);
}
*/

/*
const keys = Object.values(ellie);
console.log(keys);

const data = Object.entries(ellie);
console.log(data);
*/