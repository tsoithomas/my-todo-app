import { useState } from "react";

const TodoList = () => {
    const [selected, setSelected] = useState(0);

    const todos = ["Buy groceries", "Clean the house", "Walk the dog"]

    const formatted = todos.map((item) => {
        return <li key={item}>{item}</li>
    });

    

    return (
        <div>
            <ol className="todolist">
                {formatted}
            </ol>
        </div>
    )
}
export default TodoList