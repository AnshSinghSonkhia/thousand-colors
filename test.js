"use strict";

var { colors, rgbToHex } = require("./index");
var assert = require("assert");

assert.deepEqual(colors.red, [255, 0, 0]);
assert.deepEqual(colors.magenta, [255, 0, 255]);

assert.deepEqual(rgbToHex(colors.aliceblue), "#f0f8ff");
assert.deepEqual(rgbToHex(colors.black), "#000000");
