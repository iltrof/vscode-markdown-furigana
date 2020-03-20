"use strict";

function activate(_context) {
  return {
    extendMarkdownIt(md) {
      return md.use(require("furigana-markdown-it")());
    }
  };
}
exports.activate = activate;
