import fs from 'fs';
export default async function logDataToFile(data: string) {
    // This function will log the function data to a file named after the current date.
    // Example: MM-DD-YYYY.log

    // Get the current date
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month}-${day}-${year}`;
    const logFile = `${formattedDate}.log`;
    const logPath = `./logs/${logFile}`;
    const logDir = `./logs`;

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    fs.appendFileSync(logPath, `${data}\n`, 'utf8');
    return true;
}