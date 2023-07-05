export function timeToSeconds(time: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const hoursInSeconds = Number(hours) * 3600;
    const MinutesInSeconds = Number(minutes) * 60;
    return hoursInSeconds + MinutesInSeconds + Number(seconds);
}