let number = 10;
const result = number.toString(2);
console.log('Binary:' + ' ' + result);

let bin = "1010";
var binary = "1101"
var digit = parseInt(binary, 2);
console.log(digit);



let input = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let Input = input.replace(regex, '');
let frequency = [];
Input = Input.split(' ');
Input.forEach((i) => {
    if (!frequency[i]) {
        frequency[i] = 0;
    }
    frequency[i] = frequency[i] + 1;
});

console.table(frequency);



let arr = [2, 3, [5, 6, [7, 8], 9]];
arr = arr.flat(2);
let mx = Math.max(...arr);
let mn = Math.min(...arr);

console.log(arr);
console.log("min is " + mn + " and max " + mx);