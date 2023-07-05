import styled from "styled-components";

const WatchNumber = styled.span`
  background-color: #5D677C;
  box-shadow: 2px 2px 4px #2B2B2B inset;
  height: 3.6rem;
  width: 3rem;
  padding: 8px 4px;
  border-radius: 10px;

  @media screen and (min-width: 1280px) {
    height: 10.8rem;
    width: 9rem;
  }
`;

const WatchDivision = styled.span`
  height: 4.2rem;

  @media screen and (min-width: 1280px) {
    height: 12.6rem;
  }
`;

interface WatchProps {
    time: number | undefined
}

const Watch = ({time = 0}: WatchProps) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');
    return (
        <>
            <WatchNumber>{minuteTen}</WatchNumber>
            <WatchNumber>{minuteUnit}</WatchNumber>
            <WatchDivision>:</WatchDivision>
            <WatchNumber>{secondTen}</WatchNumber>
            <WatchNumber>{secondUnit}</WatchNumber>
        </>
    )
}

export default Watch;