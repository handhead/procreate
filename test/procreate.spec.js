var mocha = require("mocha"),
    describe = mocha.describe,
    it = mocha.it;
var chai = require("chai"),
    expect = chai.expect;
var procreate = require("../lib");

describe("procreate", function () {
    describe("new", function () {
        it("empty project", function () {
            expect(procreate.create()).to.be.an("boolean").and.equal(false);
        });
        it("inconsistent project", function () {
            expect(procreate.create("foo")).to.be.a("boolean").and.equal(false);
        });
        it("foo project", function () {
            expect(procreate.create("foo", "express")).to.be.a("boolean").and.equal(true);
        });
    });
});