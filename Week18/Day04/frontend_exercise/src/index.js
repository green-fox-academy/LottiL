const express = require('express');
const services = require('./service');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/doubling', (req, res) => {
    let input = req.query.input;
    let result = input * 2;
    if (!input) {
        res.json({
            "error": "Please provide an input!"
        })
    } else {
        res.json({
            "received": input,
            "result": result
        })
    }
})

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    if (!name && !title) {
        res.json({
            "error": "Please provide a name and a title!"
        })
    } else if (!name) {
        res.json({
            "error": "Please provide a name!"
        })
    } else if (!title) {
        res.json({
            "error": "Please provide a title!"
        })
    } else {
        res.json({
            "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
        })
    }
})

app.get('/appenda/:appendable', (req, res) => {
    let appendAble = req.params.appendable;
    if (!appendAble) {
        res.status(404).send("Page not found");
    } else {
        res.json({
            "appended": `${appendAble}a`
        })
    }
})

app.post('/dountil/:operation', (req, res) => {
    let operation = req.params.operation;
    const number = req.body.until;

    if (!number) {
        res.json({
            "error": "Please provide a number!"
        })
    } else if (operation === "sum") {
        let result = services.calculateSum(number)
        res.json({
            "result": result
        })
    } else if (operation === "factor") {
        let result = services.calculateFactorial(number)
        res.json({
            "result": result
        })
    }
})

//Array handler

app.post('/arrays', (req, res) => {
    const array = req.body.numbers;
    const what = req.body.what;

    if (!array && !what) {
        res.json({
            "error": "Please provide what to do with the numbers!"
        })
    } else if (what === "sum") {
        let result = services.calculateSumFromArray(array);
        res.json({
            "result": result
        })
    } else if (what === "multiply") {
        console.log(what);
        let result = services.calculateMultiplyFromArray(array);
        res.json({
            "result": result
        })
    } else if (what === "double") {
        console.log(what);
        let result = services.calculateDoubleFromArray(array);
        res.json({
            "result": result
        })
    }
})

//The Reverser of the Sith

app.post('/arrays', (req, res) => {
    const text = req.body.text;

    if (!text) {
        res.json({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        })
    } else {
        let result = services.yodaSpeak(text);
        res.json({
            "sith_text": result
        })
    }
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})