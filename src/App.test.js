import { render, screen } from '@testing-library/react';
import SamurajJSApp from './App';

test('renders learn react link', () => {
  render(<SamurajJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<SamurajJSApp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
