import Character from '../character';

test('Incorrect character type', () => {
  expect(() => new Character('Name', 'Elf', 0, 0, 0, 0)).toThrow('Type not allowed');
});
