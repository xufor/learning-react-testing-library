import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodoComponent = (props) => (
  <BrowserRouter>
    <Todo {...props} />
  </BrowserRouter>
);

const addTask = (inp, btn, value) => {
  fireEvent.change(inp, { target: { value } });
  fireEvent.click(btn);
};

describe('Todo', () => {
  it('should be able to add new tasks in the todo list', () => {
    render(<MockTodoComponent />);
    let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    let btnElement = screen.getByRole('button');
    addTask(inputElement, btnElement, 'Do Eat!');
    let divElement = screen.getByText(/Do Eat!/);
    expect(divElement).toBeInTheDocument();
  });

  it('should be able to add multiple new tasks in the todo list', () => {
    render(<MockTodoComponent />);
    let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    let btnElement = screen.getByRole('button');
    addTask(inputElement, btnElement, 'Do Code!');
    addTask(inputElement, btnElement, 'Do Sleep!');
    addTask(inputElement, btnElement, 'Do Repeat!');
    let divElements = screen.getAllByTestId('unit-todo');
    expect(divElements.length).toBe(3);
  });

  it('should render todos which are not completed initially', () => {
    render(<MockTodoComponent />);
    let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    let btnElement = screen.getByRole('button');
    addTask(inputElement, btnElement, 'Do Eat!');
    let divElement = screen.getByText(/Do Eat!/);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('should render completed todos which are completed by clicking', () => {
    render(<MockTodoComponent />);
    let inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    let btnElement = screen.getByRole('button');
    addTask(inputElement, btnElement, 'Do Eat!');
    let divElement = screen.getByText(/Do Eat!/);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
