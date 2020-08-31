import { getEnumKeyByEnumValue } from './enum';

describe('#getEnumKeyByEnumValue', () => {
  it('should get enum key by enum value', () => {
    enum Test {
      a = 1,
      b = 2,
    }
    const actual = getEnumKeyByEnumValue(Test, 1);
    expect(actual).toEqual('a');
  });
});
