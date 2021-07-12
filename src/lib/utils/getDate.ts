export function getDate() {
    const d = new Date(Date.now());
    const options: any = {hour: "2-digit", minute: "2-digit", second: "2-digit"}
    return `${d.toLocaleDateString(undefined, options).split(",")[1].trim()}`;
}