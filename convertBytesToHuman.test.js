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

test('The correct value', () => {
  expect(convertBytesToHuman(5)).toBe("5 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(0)).toBe("0 B")
  expect(convertBytesToHuman(1)).toBe("1 B")
  expect(convertBytesToHuman(1023)).toBe("1023 B")
  expect(convertBytesToHuman(1024*1024*1024)).toBe("1 GB")
});
