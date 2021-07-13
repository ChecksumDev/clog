import dayjs from 'dayjs';

export function getTime(): string {
    return dayjs().format("HH:MM:ss");
}