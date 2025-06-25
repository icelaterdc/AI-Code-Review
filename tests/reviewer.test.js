import { parseCode } from '../src/core/parser.js';
test('parseCode returns object with text and metadata', () => {
  const res = parseCode('const a = 1;', 'js');
  expect(res).toHaveProperty('text', 'const a = 1;');
  expect(res).toHaveProperty('metadata');
});
