import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const TodoList = () => {
    const [selected, setSelected] = useState(0);
    const todos = ["Buy groceries", "Clean the house", "Walk the dog"]
    const handleClick = (e: any, index: number) => {
        setSelected(index);
        document.querySelectorAll(".active").forEach((p) => {p.classList.remove("active")})
        document.querySelector(".list-group-item:nth-child(" + (index+1) + ")")?.classList.add("active");
    };


    const formatted = todos.map((item, index) => {
                return <li className="list-group-item" onClick={(e) => {handleClick(e, index)}} data-index={index} key={item}>{item}</li>
            });

    return (
        todos.length > 0 
        ?   <ul className="list-group">
                {formatted}
            </ul>
        : <>There are no items.</>
    )
}
export default TodoList