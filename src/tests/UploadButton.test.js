// File: src/tests/UploadButton.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UploadButton from '../componants/buttons/UploadButton';

describe('UploadButton', () => {
  it('renders with the provided text', () => {
    const buttonText = 'Upload Image';
    const { getByText } = render(<UploadButton text={buttonText} />);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('calls the onClick callback when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<UploadButton text="Upload Image" onButtonClick={handleClick} />);
    fireEvent.click(getByText('Upload Image'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
