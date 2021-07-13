import { getTime } from "./utils/getTime";

export default class Clog {

    /** Clog Instance */
    constructor() { return }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     * @returns { void }
     */
    log(data: string): boolean {
        return process.stdout.write(`\x1b[32m[${getTime()}] [INFO] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     */
    info(data: string): boolean { return this.log(data) }

    /**
     * This function logs warning data to the console 
     * @param data String to output to the console
     */
    warn(data: string): boolean {
        return process.stdout.write(`\x1b[33m[${getTime()}] [WARN] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs error data to the console
     * @param data String to output to the console
     */
    error(data: string): boolean {
        return process.stdout.write(`\x1b[31m[${getTime()}] [ERROR] ${data}\x1b[0m\n`);
    }

    /**
     * This function logs debug data to the console
     * @param data String to output to the console
     */
    debug(data: string): boolean {
        return process.stdout.write(`\x1b[35m[${getTime()}] [DEBUG] ${data}\x1b[0m\n`);
    }
}
