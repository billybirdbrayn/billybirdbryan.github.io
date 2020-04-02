//Illustrate the use of multidimentional arrays

//The first row: Ellie, second row: Margee, third row: Jack
let stdScores = [
    [30, 20, 30],
    [30, 50, 40, 20],
    [30, 10, 15, 10, 5]
];

//The first row: Ellie, second row: Margee, third row: Jack
let jwwScores = [
    [10, 12, 9, 10],
    [11, 15, 12],
    [12, 10, 15]
];

//The first column - Standard  The second column - Jumpers
//The first row: Ellie, second row: Margee, third row: Jack
let numberOfQs = [
    [3, 4],
    [4, 3],
    [5, 3]
];

let ellieStdQ;
let margeeStdQ;
let jackStdQ;
let ellieJwwQ;
let margeeJwwQ;
let jackJwwQ;

let ellieQQ = 0;
let margeeQQ = 0;
let jackQQ = 0;

(function () {

    let form = document.getElementById('masterPoints');

    addEvent(form, 'submit', function (e) {
        e.preventDefault();
        let elements = this.elements;

        let dogName = (elements.dogName.value);
        let stdPoints = Math.floor(elements.stdPoints.value);

        let jwwPoints = Math.floor(elements.jwwPoints.value);

        // Illustrates js logic 
        // Illustrates array methods
        // Illustrates how to create a sum total of an array
        // Each dog is indexed in the array
        
        // STANDARD Dog Scores
        if (dogName === "Ellie" && stdPoints > 0) {
            stdScores[0].push(stdPoints);

            ellieStdQ = numberOfQs[0][0];
            ellieStdQ++;
            console.log("Ellie number stdQs" + ellieStdQ);

        } else if (dogName === "Margee" && stdPoints > 0) {
            stdScores[1].push(stdPoints);

            margeeStdQ = numberOfQs[1][0];
            margeeStdQ++;
            console.log("Margee number stdQs" + margeeStdQ);


        } else if (dogName === "Jack" && stdPoints > 0) {
            stdScores[2].push(stdPoints);
            jackStdQ = numberOfQs[2][0];
            jackStdQ++;
            console.log("Jack number stdQs" + jackStdQ);
        }
        // takes the array for each dog and totals the sum of std points
        function flatten(stdScore) {
            return stdScore.reduce(function (flat, stdScore) {
                return flat.concat(Array.isArray(stdScore) ? flatten(stdScore) : stdScore);
            }, []);
        };
        var sumsStd = stdScores.map(function (stdScore) {
            return flatten(stdScore).reduce(function (sumStd, item) {
                return sumStd + item;
            });

        });

        console.log(sumsStd);

        // JUMPERS Dog Scores
        if (dogName === "Ellie" && jwwPoints > 0) {
            jwwScores[0].push(jwwPoints);
            console.log("Ellie's Points" + jwwScores[0]);

            ellieJwwQ = numberOfQs[0][1];
            ellieJwwQ++;
            console.log("Ellie number jwwQs" + ellieJwwQ);

        } else if (dogName === "Margee" && jwwPoints > 0) {
            jwwScores[1].push(jwwPoints);

            margeeJwwQ = numberOfQs[1][1];
            margeeJwwQ++;
            console.log("Margee number jwwQs" + margeeJwwQ);

        } else if (dogName === "Jack" && jwwPoints > 0) {
            jwwScores[2].push(jwwPoints);

            jackJwwQ = numberOfQs[2][1];
            jackJwwQ++;
            console.log("Jack number jwwQs" + jackJwwQ);
        }

        //// finds the sum total for each individual array (dog) for Jumpers
        function flatten(jwwScore) {
            return jwwScore.reduce(function (flat, jwwScore) {
                return flat.concat(Array.isArray(jwwScore) ? flatten(jwwScore) : jwwScore);
            }, []);
        };
        var sumsJww = jwwScores.map(function (jwwScore) {
            return flatten(jwwScore).reduce(function (sumJww, item) {
                return sumJww + item;
            });

        });
        console.log(sumsJww);



        //DoubleQ
        // more js logig
        if (dogName === "Ellie" && jwwPoints > 0 && stdPoints > 0) {
            ellieQQ++;
        } else if (dogName === "Margee" && jwwPoints > 0 && stdPoints > 0) {
            margeeQQ++;
        } else if (dogName === "Jack" && jwwPoints > 0 && stdPoints > 0) {
            jackQQ++;
        }


        ///Determine totals 
        //Illustrates index position in arrays
        let ellieSTD = sumsStd[0];
        let margeeSTD = sumsStd[1];
        let jackSTD = sumsStd[2];

        let ellieJWW = sumsJww[0];
        let margeeJWW = sumsJww[1];
        let jackJWW = sumsJww[2];

        let ellieMasterTotal = ellieSTD + ellieJWW;
        console.log("Ellie's total " + ellieMasterTotal);

        let margeeMasterTotal = margeeSTD + margeeJWW;
        console.log("Margee's total " + margeeMasterTotal);

        let jackMasterTotal = jackSTD + jackJWW;
        console.log("Jack's total " + jackMasterTotal);

//Display totals to the screen
        let sPoints = document.getElementById('totalStdPoints');
        let jPoints = document.getElementById('totalJwwPoints');
        let tmPoints = document.getElementById('totalMasterPoints');
        let stdQ = document.getElementById('totalStdQs');
        let jwwQ = document.getElementById('totalJwwQs');
        let dq = document.getElementById('doubleQ');

        if (dogName === "Ellie") {

            sPoints.innerHTML = '<p> Ellie\'s standard points: ' + ellieSTD + '</p>';
            jPoints.innerHTML = '<p> Ellie\'s jumper points: ' + ellieJWW + '</p>';
            tmPoints.innerHTML = '<p> Ellie\'s total points: ' + ellieMasterTotal + '</p>';
            stdQ.innerHTML = '<p> Ellie\'s total standard Qs: ' + ellieStdQ + '</p>';
            jwwQ.innerHTML = '<p> Ellie\'s total jumper Qs: ' + ellieJwwQ + '</p>';
            dq.innerHTML = '<p> Ellie\'s total double Qs: ' + ellieQQ + '</p>';

        } else if (dogName === "Margee") {

            sPoints.innerHTML = '<p> Margee\'s standard points: ' + margeeSTD + '</p>';
            jPoints.innerHTML = '<p> Margee\'s jumper points: ' + margeeJWW + '</p>';
            tmPoints.innerHTML = '<p> Margee\'s total points: ' + margeeMasterTotal + '</p>';
            stdQ.innerHTML = '<p> Margee\'s total standard Qs: ' + margeeStdQ + '</p>';
            jwwQ.innerHTML = '<p> Margee\'s total jumper Qs: ' + margeeJwwQ + '</p>';
            dq.innerHTML = '<p> Margee\'s total double Qs: ' + margeeQQ + '</p>';


        } else if (dogName === "Jack") {

            sPoints.innerHTML = '<p> Jack\'s standard points: ' + jackSTD + '</p>';
            jPoints.innerHTML = '<p> Jack\'s jumper points: ' + jackJWW + '</p>';
            tmPoints.innerHTML = '<p> Jack\'s total points: ' + jackMasterTotal + '</p>';
            stdQ.innerHTML = '<p> Jack\'s total standard Qs: ' + jackStdQ + '</p>';
            jwwQ.innerHTML = '<p> Jack\'s total jumper Qs: ' + jackJwwQ + '</p>';
            dq.innerHTML = '<p> Jack\'s total double Qs: ' + jackQQ + '</p>';

        }

        // clear the screen
        document.querySelector('#dogName').value = '';
        document.querySelector('#stdPoints').value = '';
        document.querySelector('#jwwPoints').value = '';



        /*
                dogName.value = "";
                stdPoints.value = "";
                jwwPoints.value = "";
        */



    });

}());




