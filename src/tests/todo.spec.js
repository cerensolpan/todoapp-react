import { render, screen, cleanup } from '@testing-library/react';
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
})