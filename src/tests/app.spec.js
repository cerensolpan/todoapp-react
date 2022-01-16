import { render, screen, cleanup } from '@testing-library/react';
import App from "../App";

afterEach(cleanup);

describe('Layout',() => {
    it('should have todo header',() => {
        render(<App />);
        const header = screen.getByText("Todo List");
        expect(header).toBeInTheDocument();
    })
    it('should have add button',() => {
        render(<App />);
        const button = screen.getByTestId("todo-button");
        expect(button).toBeInTheDocument();
    })
    it('should have todo list',() => {
        render(<App />);
        const list = screen.getByTestId("todo-list");
        expect(list).toBeInTheDocument();
    })
})