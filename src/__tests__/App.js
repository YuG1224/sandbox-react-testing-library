import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Appのテスト', () => {
  test('Hello, World!の文言が存在すること', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  test('Hello, World!の文字列が黒であること', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, World!')).toHaveStyle(`
      color: #000
    `);
  });

  test('赤ボタン押下後、Hello, World!の文字列が赤であること', async () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('赤'));
    expect(getByText('Hello, World!')).toHaveStyle(`
      color: #f00
    `);
  });

  test('青ボタン押下後、Hello, World!の文字列が青であること', async () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('青'));
    expect(getByText('Hello, World!')).toHaveStyle(`
      color: #00f
    `);
  });
});
