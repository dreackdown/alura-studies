import {useState} from 'react'
import {Task} from "../types/task.ts";
import Form from "../components/form.tsx";
import List from "../components/list.tsx";
import StopWatch from "../components/stopwatch.tsx";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: min-content min-content auto;
  grid-template-areas: 
    "new-task"
    "stopwatch"
    "tasks";
  row-gap: 24px;
  min-width: 320px;
  min-height: calc(100vh - 32px);
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #171717;

  @media screen and (min-width: 1280px) {
    grid-template-areas: 
      "new-task tasks"
      "stopwatch tasks";
    column-gap: 64px;
    grid-template-rows: min-content min-content;
    grid-template-columns: 750px 300px;
    justify-content: center;
    align-content: center;
    padding: 64px;
  }
`;

function App() {

    const [task, setTasks] = useState<Task[]>([]);
    const [selected, setSelected] = useState<Task>();

    function selectTask(selectedTask: Task) {
        setSelected(selectedTask);
        setTasks(previousTasks => previousTasks.map(task => ({
            ...task,
            selected: task.id === selectedTask.id ? true : false
        })))
    }

    function fisishTask() {
        if (selected) {
            setSelected(undefined);
            setTasks(previousTasks => previousTasks.map(task => {
                if (task.id === selected.id) {
                    return {
                        ...task,
                        selected: false,
                        completed: true
                    }
                }
                return task;
            }))
        }
    }

    return (
        <StyledApp>
            <Form setTasks={setTasks}/>
            <List
                tasks={task}
                selectTask={selectTask}
            />
            <StopWatch
                selected={selected}
                fisishTask={fisishTask}
            />
        </StyledApp>
    );
}

export default App