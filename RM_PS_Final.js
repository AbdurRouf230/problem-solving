/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function(a, b) {
    return a + b;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function(a, b) {
    return a * b;
};

/**
 * @param {number} number
 * @return {string}
 */
var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

/**
 * @param {number} number
 * @return {number}
 */
var makeNegative = function(number) {
    return -Math.abs(number);
};

/**
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return -number;
};

/**
 * @param {number[]} ar
 * @return {number}
 */
var simpleArraySum = function(ar) {
    return ar.reduce(function(s, x) { return s + x; }, 0);
};

/**
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

/**
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};

/**
 * @param {number} n
 * @return {number}
 */
var diff21 = function(n) {
    return n > 21 ? (n - 21) * 2 : 21 - n;
};

/**
 * @param {boolean} talking
 * @param {number} hour
 * @return {boolean}
 */
var parrotTrouble = function(talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

/**
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
var makes10 = function(a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var nearHundred = function(n) {
    return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
};

/**
 * @param {number} a
 * @param {number} b
 * @param {boolean} negative
 * @return {boolean}
 */
var posNeg = function(a, b, negative) {
    if (negative) return a < 0 && b < 0;
    return (a < 0 && b > 0) || (a > 0 && b < 0);
};

/**
 * @param {string} str
 * @return {string}
 */
var notString = function(str) {
    if (str === "not" || str.indexOf("not ") === 0) return str;
    return "not " + str;
};

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number[]}
 */
var compareTriplets = function(a, b) {
    var alice = 0, bob = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) alice++;
        else if (a[i] < b[i]) bob++;
    }
    return [alice, bob];
};

/**
 * @param {number[]} ar
 * @return {number}
 */
var aVeryBigSum = function(ar) {
    return ar.reduce(function(s, x) { return s + x; }, 0);
};

/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
    var rows = [];
    for (var i = 1; i <= n; i++) {
        rows.push(" ".repeat(n - i) + "#".repeat(i));
    }
    return rows.join("\n");
};

/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
    return grades.map(function(g) {
        if (g < 38) return g;
        var next = Math.ceil(g / 5) * 5;
        return next - g < 3 ? next : g;
    });
};

/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
    var period = s.slice(-2);
    var parts = s.slice(0, -2).split(":");
    var h = parseInt(parts[0], 10) % 12;
    if (period === "PM") h += 12;
    return (h < 10 ? "0" + h : "" + h) + ":" + parts[1] + ":" + parts[2];
};

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
    return s.repeat(n);
};

/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
    return str.split("").reverse().join("");
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
    return arr.reduce(function(s, x) { return x > 0 ? s + x : s; }, 0);
};

/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
    return (num * (num + 1)) / 2;
};

/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
    return b ? "true" : "false";
};
