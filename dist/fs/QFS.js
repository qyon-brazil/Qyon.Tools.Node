"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirFilesRecursively = void 0;
var fs = require("fs");
var path = require("path");
var getDirFilesRecursivelyPrivate = function (dirPath, filesResult, root) {
    var p = path.resolve(dirPath);
    var files = fs.readdirSync(p);
    root = root || dirPath;
    filesResult = filesResult || [];
    files.map(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            filesResult = getDirFilesRecursivelyPrivate(path.join(dirPath, file).replace(/\\/g, "/"), filesResult, root);
        }
        else {
            filesResult === null || filesResult === void 0 ? void 0 : filesResult.push("./" + path.relative(root, path.join(dirPath, file)).replace(/\\/g, "/"));
        }
    });
    return filesResult;
};
var getDirFilesRecursively = function (dirPath) { return getDirFilesRecursivelyPrivate(dirPath); };
exports.getDirFilesRecursively = getDirFilesRecursively;
