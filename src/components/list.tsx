import {Task} from "../types/task.ts";
import Item from "./item.tsx";
import styled from "styled-components";

const StyledList = styled.aside`
  grid-area: tasks;
  height: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
    scrollbar-width: thin;
  }

  @media screen and (min-width: 1280px) {
    h2 {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }

    ul {
      overflow: auto;
      max-height: 500px;
    }
  }
`;

interface ListProps {
    tasks: Task[],
    selectTask: (selectedTask: Task) => void
}

const List = ({tasks, selectTask}: ListProps) => {
    return (
        <StyledList>
            <h2> Daily tasks </h2>
            <ul>
                {tasks.map(item => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </StyledList>
    )
}

export default List;