import style from 'Item.module.scss';
import {Task} from "../types/task.ts";

interface ItemProps extends Task {
    selectTask: (selectedTask: Task) => void;
}

const Item = ({
                  task,
                  time,
                  selected,
                  completed,
                  id,
                  selectTask,
              }: ItemProps) => {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
            onClick={() => !completed && selectTask(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="task completed"></span>}
        </li>
    )
}

export default Item;