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
