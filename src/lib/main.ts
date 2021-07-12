import { getDate } from "./utils/getDate";
let clog;

/**
 * This function logs data to the console
 * @param data String to output to the console
 */
function log(data: string) {
    process.stdout.write(`\x1b[1m\x1b[32m(${getDate()}) [INFO] ${data}\x1b[0m\n`)
}

/**
 * This function logs data to the console
 * @param data String to output to the console
 */
function info(data: string) { return log(data) };

/**
 * This function logs warning data to the console 
 * @param data String to output to the console
 */

function warn(data: string) {
    process.stdout.write(`\x1b[1m\x1b[33m(${getDate()}) [WARN] ${data}\x1b[0m\n`)
}

/**
 * This function logs error data to the console
 * @param data String to output to the console
 */

function error(data: string) {
    process.stdout.write(`\x1b[1m\x1b[31m(${getDate()}) [ERROR] ${data}\x1b[0m\n`)
}

/**
 * This function logs debug data to the console
 * @param data String to output to the console
 */

function debug(data: string) {
    process.stdout.write(`\x1b[1m\x1b[35m(${getDate()}) [DEBUG] ${data}\x1b[0m\n`)
}

export default clog = { log, info, warn, error, debug };