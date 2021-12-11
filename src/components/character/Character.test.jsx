import { render, screen } from '@testing-library/react';
import Character from './Character';

it('should render Controls elements on page', () => {
  const { container } = render(
    <Character head="duck" torso="pink" pant="white" />
  );

  const head = screen.getByLabelText(/head/);
  const torso = screen.getByLabelText(/torso/);
  const pant = screen.getByLabelText(/pant/);

  expect(head).toBeInTheDocument();
  expect(torso).toBeInTheDocument();
  expect(pant).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
