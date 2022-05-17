import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
// import { addTodo } from "../../redux/actions.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../../redux/selectors.js";
import todoListReducer from "./todoListSlice";

export default function TodoList() {
    const [nameTodo, setNameTodo] = useState("");
    const [priority, setPriority] = useState("Medium");
    const dispatch = useDispatch();
    const todoList = useSelector(todoRemainingSelector);
    const handleAddTodo = (e) => {
        dispatch(
            todoListReducer.actions.addTodo({
                id: uuidv4(),
                name: nameTodo,
                priority: priority,
                completed: false,
            })
        );
        setNameTodo("");
        setPriority("Medium");
    };
    const handleTypeTodo = (e) => {
        setNameTodo(e.target.value);
    };
    const handleChangePriority = (value) => {
        setPriority(value);
    };
    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input value={nameTodo} onChange={handleTypeTodo} />
                    <Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
