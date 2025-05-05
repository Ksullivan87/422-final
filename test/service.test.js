const fs = require('fs');
const path = require('path');


test('Does inbound exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../inbound'))).toBeTruthy();
});

test('Does outbound exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../outbound'))).toBeTruthy();
});

test('Does processed exist', () => {
    expect(fs.existsSync(path.join(__dirname, '../processed'))).toBeTruthy();
});


