const parser = require('../src/parser');
const path = require('path');


test('Set and confirm watched', () => {
    parser.setWatched(path.join(__dirname, '../inbound'));
    expect(parser.getWatched()).toBe(path.join(__dirname, '../inbound'))
});

test('Set and confirm output', () => {
    parser.setOutput(path.join(__dirname, '../inbound'));
    expect(parser.getOutput()).toBe(path.join(__dirname, '../inbound'))
});

test('Set and confirm processed', () => {
    parser.setProcessed(path.join(__dirname, '../processed'));
    expect(parser.getProcessed()).toBe(path.join(__dirname, '../processed'))
});