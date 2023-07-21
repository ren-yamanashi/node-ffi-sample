"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffi_napi_1 = require("ffi-napi");
const LIBRARY_FILE = "lib/target/binding";
const dll = (0, ffi_napi_1.Library)(LIBRARY_FILE, {
    add: ["int", ["int", "int"]],
});
const ret = dll.add(1, 2);
console.log(ret);
