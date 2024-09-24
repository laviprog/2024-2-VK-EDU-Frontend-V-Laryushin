import convertBytesToHuman from './convertBytesToHuman';

test('Throws a TypeError exception if a non-number is passed', () => {
  expect(() => convertBytesToHuman("string")).toThrow(TypeError);
  expect(() => convertBytesToHuman(true)).toThrow(TypeError);
  expect(() => convertBytesToHuman(NaN)).toThrow(TypeError);
  expect(() => convertBytesToHuman(undefined)).toThrow(TypeError);
  expect(() => convertBytesToHuman(null)).toThrow(TypeError);
  expect(() => convertBytesToHuman(Infinity)).toThrow(TypeError);
  expect(() => convertBytesToHuman({})).toThrow(TypeError);
  expect(() => convertBytesToHuman([])).toThrow(TypeError);
  expect(() => convertBytesToHuman(() => {})).toThrow(TypeError);
  expect(() => convertBytesToHuman(new Date())).toThrow(TypeError);
});

test('Throws a RangeError exception if a negative number is passed', () => {
  expect(() => convertBytesToHuman(-1)).toThrow(RangeError);
  expect(() => convertBytesToHuman(-10192)).toThrow(RangeError);
});

const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

test('The correct value', () => {
  let num = 1

  for (const unit of units) {
    expect(convertBytesToHuman(num)).toBe(`1 ${unit}`);
    num *= 1024;
}

  expect(convertBytesToHuman(5)).toBe("5 B")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(0)).toBe("0 B")
  expect(convertBytesToHuman(1023)).toBe("1023 B")
});
