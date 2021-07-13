import Clog from "../lib/main"
import { describe, it } from "mocha";
const clog = new Clog();

describe('Log Functions', function () {
    describe('Log', function () {
        it("should not fail", async function (done) {
            try {
                clog.log("0");
                return done();
            } catch (error) {
                done(error)
            }
        })
    })

    describe('Warn', function () {
        it("should not fail", async function (done) {
            try {
                clog.warn("0");
                return done();
            } catch (error) {
                done(error)
            }
        })
    })

    describe('Error', function () {
        it("should not fail", async function (done) {
            try {
                clog.error("0");
                return done();
            } catch (error) {
                done(error)
            }
        })
    })

    describe('Debug', function () {
        it("should not fail", async function (done) {
            try {
                clog.debug("0");
                return done();
            } catch (error) {
                done(error)
            }
        })
    })
})
