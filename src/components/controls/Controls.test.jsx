import { render, screen } from '@testing-library/react';
import Controls from './Controls';

it('should render Controls elements on page', () => {
  const { container } = render(<Controls />);

  const headSelector = screen.getByLabelText(/Head Options/);
  const torsoSelector = screen.getByLabelText(/Torso Options/);
  const pantSelector = screen.getByLabelText(/Pant Options/);

  expect(headSelector).toBeInTheDocument();
  expect(torsoSelector).toBeInTheDocument();
  expect(pantSelector).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
