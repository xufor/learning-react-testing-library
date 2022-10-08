import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersListComponent = (props) => (
  <BrowserRouter>
    <FollowersList {...props} />
  </BrowserRouter>
);

describe('FollowersList', () => {
  beforeEach(() => console.log('running before each test'));
  beforeAll(() => console.log('running once before all tests'));
  afterEach(() => console.log('running after each test'));
  afterAll(() => console.log('running once after all tests'));

  it('should render one follower', async () => {
    render(<MockFollowersListComponent />);
    let divElement = await screen.findByTestId(/follower-item-0/);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple followers', async () => {
    render(<MockFollowersListComponent />);
    let divElements = await screen.findAllByTestId(/follower-item/);
    expect(divElements.length).toBe(5);
  });
});
