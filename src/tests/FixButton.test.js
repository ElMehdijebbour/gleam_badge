import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FixImageButton from '../componants/buttons/FixImageButton';

describe('FixImageButton', () => {
  test('renders with correct text', () => {
    const buttonText = 'Fix Image';
    const { getByText } = render(<FixImageButton text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('executes callback function on button click', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<FixImageButton text="Fix Image" onButtonClick={mockOnClick} />);
    const buttonElement = getByText('Fix Image');
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
