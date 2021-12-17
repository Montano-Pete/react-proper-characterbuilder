import { render } from '@testing-library/react';
import Catchphrase from './Catchphrase';

it('should render Catchphrase elements on the page', () => {
  const { container } = render(
    <Catchphrase catchphrases={['woah!', 'hello.', 'far out!!']} />
  );

  expect(container).toMatchSnapshot();
});
