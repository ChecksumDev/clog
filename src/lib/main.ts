import getTime from "./utils/getTime";
import logDataToFile from "./utils/logDataToFile";

export default class Clog {

    /** Clog Instance */
    constructor() {
        this.clear();
        return this;
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    log(data: string): boolean {
        return this.info(data);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    info(data: string): boolean {
        logDataToFile(`(${getTime()}) [INFO] ${data}`);
        return process.stdout.write(`\x1b[32m(${getTime()}) [INFO] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    warn(data: string): boolean {
        logDataToFile(`(${getTime()}) [WARN] ${data}`);
        return process.stdout.write(`\x1b[33m(${getTime()}) [WARN] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    error(data: string): boolean {
        logDataToFile(`(${getTime()}) [ERROR] ${data}`);
        return process.stdout.write(`\x1b[31m(${getTime()}) [ERROR] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    trace(data: string): boolean {
        logDataToFile(`(${getTime()}) [TRACE] ${data}`);
        return process.stdout.write(`\x1b[36m(${getTime()}) [TRACE] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    fatal(data: string): boolean {
        logDataToFile(`(${getTime()}) [FATAL] ${data}`);
        return process.stdout.write(`\x1b[31m(${getTime()}) [FATAL] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    debug(data: string): boolean {
        logDataToFile(`(${getTime()}) [DEBUG] ${data}`);
        return process.stdout.write(`\x1b[35m(${getTime()}) [DEBUG] ${data}\x1b[0m\n`);
    }

    /**
     * This function clears the console
     * @returns { void }
     */
    clear(): boolean {
        return process.stdout.write(`\x1b[2J\x1b[0f`);
    }
}