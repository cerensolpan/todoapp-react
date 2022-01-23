import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Todo from "../Todo";

afterEach(cleanup);

describe('Todo Component',() => {
    it('should have completed button',() => {
        render(<Todo todo={{status:true}} />);
        const completedButton = screen.getByTestId("todo-completed");
        expect(completedButton).toBeInTheDocument();
    })
    it('should have deleted button',() => {
        render(<Todo todo={{status:true}} />);
        const deletedButton = screen.getByTestId("todo-deleted");
        expect(deletedButton).toBeInTheDocument();
    })
    it('should deleted when click delete button',async()=> {
        const mockOnSubmit = jest.fn();
        const {getByTestId} = render(
            <Todo testSubmit={mockOnSubmit} todo={{status:true}}/>);
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async()=>{
            // eslint-disable-next-line testing-library/prefer-screen-queries
            fireEvent.click(getByTestId("todo-deleted"));
        })
        expect(mockOnSubmit).toHaveBeenCalled();
    })
    it('should completed when click complete button',async()=> {
        const mockOnSubmit = jest.fn();
        const {getByTestId} = render(
            <Todo testSubmit={mockOnSubmit} todo={{status:true}}/>);
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async()=>{
            // eslint-disable-next-line testing-library/prefer-screen-queries
            fireEvent.click(getByTestId("todo-completed"));
        })
        expect(mockOnSubmit).toHaveBeenCalled();
    })
})