

(function () {
    let form = document.getElementById('masterPoints');
    let stdMasterScore = 0;
    let jwwMasterScore = 0;
    let stdQs = 0;
    let jwwQs = 0;
    let stdTotalQs = 20;
    let jwwTotalQs = 20;
    let totalQs = 0;

    let ellieJww = [];
    let ellieJwwTotal = 0;
    let ellieStd = [];
    let ellieStdTotal = 0;
    let ellieTotalMasterPoints = 0;
    let ellieTotalQs = 0;

    let jackJww = [];
    let jackJwwTotal = 0;
    let jackStd = [];
    let jackStdTotal = 0;
    let jackTotalMasterPoints = 0;
    let jackTotalQs = 0;

    let margeeJww = [];
    let margeeJwwTotal = 0;
    let margeeStd = [];
    let margeeStdTotal = 0;
    let margeeTotalMasterPoints = 0;
    let margeeTotalQs = 0;


    addEvent(form, 'submit', function (e) {
        e.preventDefault();
        let elements = this.elements;
        let dogName = (elements.dogName.value);

        let stdPoints = Math.floor(elements.stdPoints.value);
        stdTotalQs++;
        stdQs += 1;

        let jwwPoints = Math.floor(elements.jwwPoints.value);
        jwwTotalQs++;
        jwwQs += 1;


        ///////////////////STANDARD RACE ////////////////////////////
        if (dogName === "Ellie") {
            ellieStd.push(stdPoints);
            console.log(ellieStd);
        } else if (dogName === "Margee") {
            margeeStd.push(stdPoints);
            console.log(margeeStd);
        } else if (dogName === "Jack") {
            jackStd.push(stdPoints);
            console.log(jackStd);
        }

        if (dogName === "Ellie") {
            ellieStdTotal = ellieStd.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(ellieStdTotal);

        } else if (dogName === "Margee") {
            margeeStdTotal = margeeStd.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(margeeStdTotal);

        } else if (dogName === "Jack") {
            jackStdTotal = jackStd.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(jackStdTotal);
        }

        ///////////////////JUMPERS RACE ////////////////////////////

        if (dogName === "Ellie") {
            ellieJww.push(jwwPoints);
            console.log(ellieJww);
        } else if (dogName === "Margee") {
            margeeJww.push(jwwPoints);
            console.log(margeeJww);
        } else if (dogName === "Jack") {
            jackJww.push(jwwPoints);
            console.log(jackJww);
        }

        if (dogName === "Ellie") {
            ellieJwwTotal = ellieJww.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(ellieJwwTotal);

        } else if (dogName === "Margee") {
            margeeJwwTotal = margeeJww.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(margeeJwwTotal);

        } else if (dogName === "Jack") {
            jackJwwTotal = jackJww.reduce(function (a, b) {

                return a + b;
            }, 0);
            console.log(jackJwwTotal);
        }

        ///////////////////////// Total Master Points
        //totalMasterPoints = stdMasterScore + jwwMasterScore;
        //totalQs = stdQs + jwwQs;
        if (dogName === "Ellie") {
            ellieTotalMasterPoints = ellieStdTotal + ellieJwwTotal;
        } else if (dogName === "Margee") {
            margeeTotalMasterPoints = margeeStdTotal + margeeJwwTotal;
        } else if (dogName === "Jack") {
            margeeTotalMasterPoints = margeeStdTotal + margeeJwwTotal;
        }

        let sPoints = document.getElementById('totalStdPoints');
        let jPoints = document.getElementById('totalJwwPoints');
        let tmPoints = document.getElementById('totalMasterPoints');
        //let dq = document.getElementById('totalDoubleQs');
        let tq = document.getElementById('totalQs');

        if (dogName === "Ellie") {

            sPoints.innerHTML = '<p> Ellie\'s standard points: ' + ellieStdTotal + '</p>';
            jPoints.innerHTML = '<p> Ellie\'s jumper points: ' + ellieJwwTotal + '</p>';
            tmPoints.innerHTML = '<p> Ellie\'s total points: ' + ellieTotalMasterPoints + '</p>';
            tq.innerHTML = '<p> total Qs: ' + totalQs + '</p>';
            //dq.innerHTML = '<p> double Qs: ' + doubleQ + '</p>';

        } else if (dogName === "Margee") {

            sPoints.innerHTML = '<p> Margee\'s standard points: ' + margeeStdTotal + '</p>';
            jPoints.innerHTML = '<p> Margee\'s jumper points: ' + margeeJwwTotal + '</p>';
            tmPoints.innerHTML = '<p> Margee\'s total points: ' + margeeTotalMasterPoints + '</p>';
            tq.innerHTML = '<p> total Qs: ' + totalQs + '</p>';
            //dq.innerHTML = '<p> double Qs: ' + doubleQ + '</p>';
        }

    });
}());
