import {toNumber, invertNumber} from '../../../src/helper/number';

describe('.toNumber()', () => {
  it('should correctly convert passed value into number', () => {
    expect(toNumber(-100)).toBe(-100);
    expect(toNumber(-1)).toBe(-1);
    expect(toNumber(19)).toBe(19);
    expect(toNumber(19.9)).toBe(19.9);
    expect(toNumber(0.9)).toBe(0.9);
    expect(toNumber('0.9')).toBe(0.9);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('-10')).toBe(-10);
    expect(toNumber(' -10 ')).toBe(-10);
    expect(isNaN(toNumber('foo'))).toBe(true);
    expect(toNumber(new Date('1/1/1950'))).toBe(18264);
    expect(toNumber(new Date('1/1/1970'))).toBe(25569);
    expect(toNumber(new Date('7/5/2011'))).toBe(40729);
    expect(toNumber(new Date('7/5/2011 4:20:00'))).toBe(40729.1805555556);
    expect(toNumber(new Date('10/28/2021'))).toBe(44497);
    expect(toNumber(new Date('10/28/2021 06:00:00'))).toBe(44497.25);
    expect(toNumber(new Date('1/1/1900'))).toBe(1);
    expect(toNumber(new Date('3/1/1900'))).toBe(61);
    expect(toNumber(new Date('1/1/1945'))).toBe(16438);
  });
});

describe('.invertNumber()', () => {
  it('should correctly invert number', () => {
    expect(invertNumber(-100)).toBe(100);
    expect(invertNumber(-1)).toBe(1);
    expect(invertNumber(19)).toBe(-19);
    expect(invertNumber(19.9)).toBe(-19.9);
    expect(invertNumber(0.9)).toBe(-0.9);
    expect(invertNumber('0.9')).toBe(-0.9);
    expect(invertNumber('0')).toBe(-0);
    expect(invertNumber('-10')).toBe(10);
    expect(invertNumber(' -10 ')).toBe(10);
    expect(isNaN(invertNumber('foo'))).toBe(true);
  });
});
