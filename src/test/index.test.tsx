import Buttons from '@/app/home/Buttons';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';

describe('Todo App', () => {
  it('renders the todo app', () => {
    const dom = render(<Buttons />);
    const label = dom.container.querySelector('#label');
    label?.innerHTML;
    expect(label?.innerHTML).toBe('Button');
  });
});
