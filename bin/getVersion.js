"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
var fs = require("fs");
var Path = require("path");
var getVersion = function () {
    var packageJSONPath = Path.resolve(__dirname, "../package.json");
    var content = fs.readFileSync(packageJSONPath, { encoding: "utf8" });
    var config = JSON.parse(content);
    return config.version;
};
exports.getVersion = getVersion;
//# sourceMappingURL=getVersion.js.map