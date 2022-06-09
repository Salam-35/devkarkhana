let number = 10;
const result = number.toString(2);
console.log('Binary:' + ' ' + result);


var binary = "1101"
var digit = parseInt(binary, 2);
console.log(digit);


let arr = [2, 3, [5, 6, [7, 8], 9]];
arr = arr.flat(Infinity);
let mx = Math.max(...arr);


console.log(arr);
console.log("max number: " + mx);


let input = "lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"

const puncuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let Input = input.replace(puncuation, '');
Input = Input.toLowerCase();
let frequency = [];
Input = Input.split(' ');
Input.forEach((i) => {
    if (!frequency[i]) {
        frequency[i] = 0;
    }

    frequency[i]++;
});

console.table(frequency);