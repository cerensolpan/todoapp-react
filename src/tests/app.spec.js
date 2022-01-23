import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from "../App";
import { act } from "react-dom/test-utils";

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
    it('should add todo when click to button',async() => {
        const mockOnSubmit = jest.fn();
        const {getByTestId} = render(
            <App testSubmit = {mockOnSubmit} />
        );
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async() => {
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const submitButton = getByTestId("todo-button")
            fireEvent.click(submitButton);
        })
        expect(mockOnSubmit).toHaveBeenCalled();
    })
})