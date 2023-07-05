import styled from "styled-components";
import {useEffect, useState} from "react";
import Watch from "./watch.tsx";
import {Task} from "../types/task.ts";
import Button from "./button.tsx";
import {timeToSeconds} from "../common/time.ts";

const StopWatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: stopwatch;

  .WatchWrapper {
    align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;
  }

  .title {
    font-size: 2rem;
  }

  button {
    background-color: #88bcd1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    color: #272626;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;

    &:active {
      background-color: #7CA6B7;
      box-shadow: 2px 2px 4px #0000009F inset;
      cursor: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    .watchWrapper {
      font-size: 15rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }
`;

interface StopWatchProps {
    selected: Task | undefined;
    fisishTask: () => void;
}

const StopWatch = ({selected, fisishTask}: StopWatchProps) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function regressive(counter = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            fisishTask();
        }, 1000);
    }

    return (
        <StopWatchWrapper>
            <p className="title">Choose a card and start the Stopwatch</p>
            <div className="watchWrapper">
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>Start!</Button>
        </StopWatchWrapper>
    );
}

export default StopWatch;