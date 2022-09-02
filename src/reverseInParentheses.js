function solution(inputString) {
    while (true) {
        let c = inputString.indexOf(')');
        if (c === -1) break;
        let o = inputString.substring(0, c).lastIndexOf('(');
        let start = inputString.substring(0, o);
        let middle = inputString
            .substring(o + 1, c)
            .split('')
            .reverse()
            .join('');
        let end = inputString.substring(c + 1, inputString.length);
        inputString = start + middle + end;
    }
    return inputString;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test reverseInParentheses

// alternative solution
// function solution(inputString) {
//     while (inputString.includes('(')) {
//         inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
//     }
//     return inputString;
// }

// alternative solution
// function solution(s) {
//     while (true) {
//         let c = s.indexOf(')');
//         if (c === -1) {
//             break;
//         }
//         let o = s.substring(0, c).lastIndexOf('(');
//         let start = s.substring(0, o);
//         let middle = s
//             .substring(o + 1, c)
//             .split('')
//             .reverse()
//             .join('');
//         let end = s.substring(c + 1, s.length);
//         s = start + middle + end;
//     }
//     return s;
// }
