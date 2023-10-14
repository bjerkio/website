import { describe, it, expect } from 'vitest';
import { parseMetaText } from '$lib/parse-meta-text';

describe('parseMetaText', () => {
  it('should remove HTML tags and newlines from text', () => {
    const input = '<h1>Hello, world!</h1>\n<p>This is some text.</p>';
    const expectedOutput = 'Hello, world! This is some text.';
    expect(parseMetaText(input)).toEqual(expectedOutput);
  });

  it('should replace consecutive whitespace characters with a single space', () => {
    const input = '   This    is   some   text.  ';
    const expectedOutput = 'This is some text.';
    expect(parseMetaText(input)).toEqual(expectedOutput);
  });

  it('should trim leading and trailing whitespace', () => {
    const input = '   This is some text.   ';
    const expectedOutput = 'This is some text.';
    expect(parseMetaText(input)).toEqual(expectedOutput);
  });

  it('should return an empty string if input is empty', () => {
    const input = '';
    const expectedOutput = '';
    expect(parseMetaText(input)).toEqual(expectedOutput);
  });

  it('should return multiline text as a single line', () => {
    const input = `
      This is some text.
      
      This is some more text!
    
    `;

    const expectedOutput = 'This is some text. This is some more text!';
    expect(parseMetaText(input)).toEqual(expectedOutput);
  });
});
