import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions";
import todoListReducer from "./../TodoList/todoListSlice";

const priorityColorMapping = {
    High: "red",
    Medium: "blue",
    Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(completed);

    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(todoListReducer.actions.toggleTodo(id));
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
        </Row>
    );
}
