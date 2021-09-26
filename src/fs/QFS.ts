const fs = require("fs");
const path = require("path");

const getDirFilesRecursivelyPrivate = (dirPath: string, filesResult?: string[], root?: string): string[] => {
  const p = path.resolve(dirPath);
  const files = fs.readdirSync(p);

  root = root || dirPath;
  filesResult = filesResult || [];

  files.map((file: string) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      filesResult = getDirFilesRecursivelyPrivate(path.join(dirPath, file).replace(/\\/g, "/"), filesResult, root);
    } else {
      filesResult?.push(`./${path.relative(root, path.join(dirPath, file)).replace(/\\/g, "/")}`);
    }
  });

  return filesResult;
};

export const getDirFilesRecursively = (dirPath: string): string[] => getDirFilesRecursivelyPrivate(dirPath);
