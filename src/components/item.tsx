import { Task } from '../types/task.ts'
import styled from 'styled-components'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

const ItemWrapper = styled.li`
  background-color: #4d4d4d;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009f;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #d0d0d0;
  }

  &.selectedItem {
    background-color: #292929;
    box-shadow: 2px 4px 4px #0000009f inset;
  }

  &.completedItem {
    background-color: #566f42;
    cursor: auto;

    .completed {
      display: block;
      background-image: url('/src/assets/check-mark.svg');
      background-repeat: no-repeat;
      background-size: 38px 38px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 42px;
      height: 43px;
    }
  }
`

const Item = ({
  task,
  time,
  selected,
  completed,
  id,
  selectTask
}: ItemProps) => {
  return (
    <ItemWrapper
      className={`${selected ? 'selectedItem' : ''} ${
        completed ? 'completedItem' : ''
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className="completed" aria-label="task completed"></span>
      )}
    </ItemWrapper>
  )
}

export default Item
