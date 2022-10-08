import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoComponent = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe('TodoFooter', () => {
  it('should render the correct no. of incomplete tasks', () => {
    render(<MockTodoComponent numberOfIncompleteTasks={5} />);
    let paraElement = screen.getByText(/5 tasks left/i);
    expect(paraElement).toBeInTheDocument();
  });

  it('should render the correct no. of incomplete tasks #1', () => {
    render(<MockTodoComponent numberOfIncompleteTasks={1} />);
    let paraElement = screen.getByText(/1 task left/i);
    expect(paraElement).toBeInTheDocument();
  });

  it('should render the correct no. of incomplete tasks #0', () => {
    render(<MockTodoComponent numberOfIncompleteTasks={0} />);
    let paraElement = screen.getByTestId('footer-task-left-count');
    expect(paraElement).toBeInTheDocument();
    expect(paraElement).toHaveTextContent('0 tasks left');
    expect(paraElement.textContent).toBe('0 tasks left');
    expect(paraElement).toBeVisible();
    expect(paraElement).toContainHTML('p');
  });
});
