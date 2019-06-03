import { LetterToUpperCasePipe } from './letter-to-upper-case.pipe';

describe('LetterToUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new LetterToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
