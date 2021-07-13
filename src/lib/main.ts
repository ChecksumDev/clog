import { getDate } from "./utils/getDate";

export default class Clog {

    /** Clog Instance */
    constructor() { return }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     */
    log(data: string) {
        process.stdout.write(`\x1b[32m[${getDate()}] [INFO] ${data}\x1b[0m\n`)
    }

    /**
     * This function logs data to the console
     * @param data String to output to the console
     */
    info(data: string) { return this.log(data) };

    /**
     * This function logs warning data to the console 
     * @param data String to output to the console
     */

    warn(data: string) {
        process.stdout.write(`\x1b[33m[${getDate()}] [WARN] ${data}\x1b[0m\n`)
    }

    /**
     * This function logs error data to the console
     * @param data String to output to the console
     */

    error(data: string) {
        process.stdout.write(`\x1b[31m[${getDate()}] [ERROR] ${data}\x1b[0m\n`)
    }

    /**
     * This function logs debug data to the console
     * @param data String to output to the console
     */
    debug(data: string) {
        process.stdout.write(`\x1b[35m[${getDate()}] [DEBUG] ${data}\x1b[0m\n`)
    }
}
