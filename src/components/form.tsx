import {Task} from "../types/task.ts";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import Button from "./button.tsx";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  grid-area: new-task;
  background-color: #7687A1;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 12px;

  .inputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

    label {
      margin-bottom: 8px;
      font-size: 1.25rem;
    }

    input {
      width: 100%;
      padding: 8px 12px 4px;
      box-sizing: border-box;
      border: unset;
      border-radius: 5px;
      background-color: #5D677C;
      box-shadow: 0px 2px 4px #2D2B2B9F inset;

      &::placeholder {
        color: #BFBFBF;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 2.25rem;
    padding: 24px;
    box-sizing: border-box;

    .inputContainer {
      width: calc(60% - 12px);

      &:last-of-type {
        width: 40%;
      }

      label {
        font-size: 2rem;
      }

      input {
        height: 100%;
        font-size: 1.75rem;
      }
    }
  }
`;

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Form = ({setTasks}: FormProps) => {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(previousTasks =>
            [
                ...previousTasks,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        setTask("");
        setTime("00:00");
    }

    return (
        <StyledForm onSubmit={addTask}>
            <div className="inputContainer">
                <label htmlFor="task">
                    Add a new Task
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="What do you want to do"
                    required
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </StyledForm>
    )
}

export default Form;