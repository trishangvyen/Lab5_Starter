// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// test isPhoneNumber function
test('Valid phone number format 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Valid phone number format 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Invalid phone number format 1', () => {
  expect(isPhoneNumber('11234567890')).toBe(false);
});
test('Invalid phone number format 2', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

// test isEmail function
test('Valid email format 1', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});
test('Valid email format 2', () => {
  expect(isEmail('hi@blank.edu')).toBe(true);
});
test('Invalid email format 1', () => {
  expect(isEmail('abc@gmail')).toBe(false);
});
test('Invalid email format 2', () => {
  expect(isEmail('abcgmailcom')).toBe(false);
});

// test isStrongPassword function
test('Valid strong password format 1', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});
test('Valid strong password format 2', () => {
  expect(isStrongPassword('Abc_123')).toBe(true);
});
test('Invalid strong password format 1', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});
test('Invalid strong password format 2', () => {
  expect(isStrongPassword('abc!')).toBe(false);
});

// test isDate function
test('Valid date format 1', () => {
  expect(isDate('5/6/2025')).toBe(true);
});
test('Valid date format 2', () => {
  expect(isDate('05/06/2025')).toBe(true);
});
test('Invalid date format 1', () => {
  expect(isDate('5/6/25')).toBe(false);
});
test('Invalid date format 2', () => {
  expect(isDate('5-6-2025')).toBe(false);
});

// test isHexColor function
test('Valid hex color format 1', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});
test('Valid hex color format 2', () => {
  expect(isHexColor('#ff1')).toBe(true);
});
test('Invalid hex color format 1', () => {
  expect(isHexColor('#1234')).toBe(false);
});
test('Invalid hex color format 2', () => {
  expect(isHexColor('zz')).toBe(false);
});