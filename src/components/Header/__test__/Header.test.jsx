import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render the correct heading based in text', () => {
    render(<Header title={'A header'} />);
    let headingElement = screen.getByText(/a header/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render the correct heading based on role', () => {
    render(<Header title={'A header'} />);
    let headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render the correct heading using findByRole', async () => {
    render(<Header title={'A header'} />);
    let headingElement = await screen.findByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
  
  
  it('should render the correct heading using queryByRole', () => {
    render(<Header title={'A header'} />);
    let headingElement = screen.queryByText(/cats/i);
    expect(headingElement).not.toBeInTheDocument();
  });
  
  it('should render the correct heading using getAllByRole', () => {
    render(<Header title={'A header'} />);
    let headingElement = screen.getAllByRole('heading');
    expect(headingElement.length).toBe(1);
  });
  
});