const suma = require('./suma');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma 2 + 2 NO debe ser 5', () => {
  expect(suma(2, 2)).not.toBe(5);
});
