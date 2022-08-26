const solution = require('./reverseInParentheses.js');

test('test 1', () => {
    expect(solution("(bar)")).toBe("rab");
});

test('test 2', () => {
    expect(solution("foo(bar)baz")).toBe("foorabbaz");
});

test('test 3', () => {
    expect(solution("foo(bar)baz(blim)")).toBe("foorabbazmilb");
});

test('test 4', () => {
    expect(solution("foo(bar(baz))blim")).toBe("foobazrabblim");
});

test('test 5', () => {
    expect(solution("")).toBe("");
});

test('test 6', () => {
    expect(solution("()")).toBe("");
});

test('test 7', () => {
    expect(solution("(abc)d(efg)")).toBe("cbadgfe");
});
