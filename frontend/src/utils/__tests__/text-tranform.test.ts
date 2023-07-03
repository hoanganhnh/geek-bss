import { uppercaseFirstLetter } from '../text-tranform'

describe('test tranform uppercase first letter', () => {
  it('Upper case first letter', () => {
    expect(uppercaseFirstLetter('a')).toBe('A')
    expect(uppercaseFirstLetter('1')).toBe('1')
    expect(uppercaseFirstLetter('nguyen hoang')).toBe('Nguyen hoang')
  })
})
