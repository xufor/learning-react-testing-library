import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  it('should be able to type into input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    let inputElement = screen.getByPlaceholderText(
      /add a new task here.../i
    );
    fireEvent.change(inputElement, { target: { value: 'Do Exercise!' } });
    expect(inputElement.value).toBe('Do Exercise!');
  });

  it('should clear the input when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    let inputElement = screen.getByPlaceholderText(
      /add a new task here.../i
    );
    let btnElement = screen.getByRole('button');
    fireEvent.change(inputElement, { target: { value: 'Do Exercise!' } });
    expect(inputElement.value).toBe('Do Exercise!');
    fireEvent.click(btnElement);
    expect(inputElement.value).toBe('');
  });
});
