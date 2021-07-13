import dayjs from 'dayjs';

export function getDate() {
    return dayjs().format("HH:MM:ss");
}