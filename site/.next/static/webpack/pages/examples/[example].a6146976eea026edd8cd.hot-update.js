webpackHotUpdate_N_E("pages/examples/[example]",{

/***/ "../src/onKeyDown.ts":
/*!***************************!*\
  !*** ../src/onKeyDown.ts ***!
  \***************************/
/*! exports provided: onKeyDown, onTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyDown\", function() { return onKeyDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onTab\", function() { return onTab; });\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ \"../node_modules/slate/dist/index.es.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"../src/util.ts\");\n\n\nvar onKeyDown = function onKeyDown() {\n  return function (e, editor) {\n    var selection = editor.selection;\n    if (!selection) return;\n\n    if (e.key === 'Tab') {\n      e.preventDefault();\n      onTab(editor); // Editor.insertText(editor,'\\t')\n    }\n  };\n};\nvar onTab = function onTab(editor) {\n  slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].withoutNormalizing(editor, function () {\n    var selection = editor.selection;\n    var entry = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].above(editor, {\n      match: function match(n) {\n        return slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].isBlock(editor, n);\n      }\n    });\n\n    if (!entry) {\n      return;\n    }\n\n    if (entry[0].type == 'list-item') {\n      if (slate__WEBPACK_IMPORTED_MODULE_0__[\"Range\"].isCollapsed(selection)) {\n        var path = entry[1];\n        var start = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].start(editor, path);\n        var range = {\n          anchor: selection.anchor,\n          focus: start\n        };\n        var beforeText = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].string(editor, range);\n\n        if (beforeText.length) {\n          slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].insertText(editor, '    ');\n          return;\n        }\n      } // // move down with tab\n      // const tab = !e.shiftKey;\n      // if (tab) {\n\n\n      moveListItemDown(editor, entry[1]);\n      Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"fixList\"])(editor); // }\n    } else {\n      var p = selection.anchor;\n\n      if (slate__WEBPACK_IMPORTED_MODULE_0__[\"Range\"].isExpanded(selection)) {\n        p = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].start(editor, p.path);\n      }\n\n      var ref = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].rangeRef(editor, selection);\n      slate__WEBPACK_IMPORTED_MODULE_0__[\"Transforms\"].select(editor, p);\n      slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].insertText(editor, '    ');\n      slate__WEBPACK_IMPORTED_MODULE_0__[\"Transforms\"].select(editor, ref.unref());\n    }\n  });\n};\n\nfunction moveListItemDown(editor, path) {\n  var entry = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].parent(editor, path);\n  var node = entry[0];\n\n  if (!node.type.endsWith('-list')) {\n    throw new Error(\"moveListItemDown, not a list at: \".concat(entry[1]));\n  }\n\n  var ref = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].pathRef(editor, path);\n  var pre = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].previous(editor, {\n    at: path\n  });\n  var next = slate__WEBPACK_IMPORTED_MODULE_0__[\"Editor\"].next(editor, {\n    at: path\n  });\n\n  if (pre) {\n    slate__WEBPACK_IMPORTED_MODULE_0__[\"Transforms\"].splitNodes(editor, {\n      at: path\n    });\n  }\n\n  if (next) {\n    slate__WEBPACK_IMPORTED_MODULE_0__[\"Transforms\"].splitNodes(editor, {\n      at: slate__WEBPACK_IMPORTED_MODULE_0__[\"Path\"].next(ref.current)\n    });\n  }\n\n  path = ref.unref();\n  var indent = node.indent ? node.indent + 1 : 1;\n  slate__WEBPACK_IMPORTED_MODULE_0__[\"Transforms\"].setNodes(editor, {\n    indent: indent\n  }, {\n    at: slate__WEBPACK_IMPORTED_MODULE_0__[\"Path\"].parent(path)\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3NyYy9vbktleURvd24udHM/MGVlNSJdLCJuYW1lcyI6WyJvbktleURvd24iLCJlIiwiZWRpdG9yIiwic2VsZWN0aW9uIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvblRhYiIsIkVkaXRvciIsIndpdGhvdXROb3JtYWxpemluZyIsImVudHJ5IiwiYWJvdmUiLCJtYXRjaCIsIm4iLCJpc0Jsb2NrIiwidHlwZSIsIlJhbmdlIiwiaXNDb2xsYXBzZWQiLCJwYXRoIiwic3RhcnQiLCJyYW5nZSIsImFuY2hvciIsImZvY3VzIiwiYmVmb3JlVGV4dCIsInN0cmluZyIsImxlbmd0aCIsImluc2VydFRleHQiLCJtb3ZlTGlzdEl0ZW1Eb3duIiwiZml4TGlzdCIsInAiLCJpc0V4cGFuZGVkIiwicmVmIiwicmFuZ2VSZWYiLCJUcmFuc2Zvcm1zIiwic2VsZWN0IiwidW5yZWYiLCJwYXJlbnQiLCJub2RlIiwiZW5kc1dpdGgiLCJFcnJvciIsInBhdGhSZWYiLCJwcmUiLCJwcmV2aW91cyIsImF0IiwibmV4dCIsInNwbGl0Tm9kZXMiLCJQYXRoIiwiY3VycmVudCIsImluZGVudCIsInNldE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTSxVQUMzQkMsQ0FEMkIsRUFFM0JDLE1BRjJCLEVBRzFCO0FBQUEsUUFDSUMsU0FESixHQUNpQkQsTUFEakIsQ0FDSUMsU0FESjtBQUVELFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjs7QUFDaEIsUUFBSUYsQ0FBQyxDQUFDRyxHQUFGLEtBQVUsS0FBZCxFQUFxQjtBQUNqQkgsT0FBQyxDQUFDSSxjQUFGO0FBQ0FDLFdBQUssQ0FBQ0osTUFBRCxDQUFMLENBRmlCLENBR2pCO0FBQ0g7QUFDSixHQVh3QjtBQUFBLENBQWxCO0FBWUEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FB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Q0FBZ0J2QyxNQUFoQixFQUF3QjtBQUFDd0MsTUFBRSxFQUFFekI7QUFBTCxHQUF4QixDQUFWO0FBQ0EsTUFBSTBCLElBQUksR0FBR3BDLDRDQUFNLENBQUNvQyxJQUFQLENBQVl6QyxNQUFaLEVBQW9CO0FBQUN3QyxNQUFFLEVBQUV6QjtBQUFMLEdBQXBCLENBQVg7O0FBQ0EsTUFBSXVCLEdBQUosRUFBUztBQUNMUixvREFBVSxDQUFDWSxVQUFYLENBQXNCMUMsTUFBdEIsRUFBOEI7QUFBQ3dDLFFBQUUsRUFBRXpCO0FBQUwsS0FBOUI7QUFDSDs7QUFDRCxNQUFJMEIsSUFBSixFQUFVO0FBQ05YLG9EQUFVLENBQUNZLFVBQVgsQ0FBc0IxQyxNQUF0QixFQUE4QjtBQUFDd0MsUUFBRSxFQUFFRywwQ0FBSSxDQUFDRixJQUFMLENBQVViLEdBQUcsQ0FBQ2dCLE9BQWQ7QUFBTCxLQUE5QjtBQUNIOztBQUNEN0IsTUFBSSxHQUFHYSxHQUFHLENBQUNJLEtBQUosRUFBUDtBQUNBLE1BQU1hLE1BQU0sR0FBR1gsSUFBSSxDQUFDVyxNQUFMLEdBQWNYLElBQUksQ0FBQ1csTUFBTCxHQUFjLENBQTVCLEdBQWdDLENBQS9DO0FBQ0FmLGtEQUFVLENBQUNnQixRQUFYLENBQW9COUMsTUFBcEIsRUFBNEI7QUFBQzZDLFVBQU0sRUFBTkE7QUFBRCxHQUE1QixFQUFzQztBQUFDTCxNQUFFLEVBQUVHLDBDQUFJLENBQUNWLE1BQUwsQ0FBWWxCLElBQVo7QUFBTCxHQUF0QztBQUdIIiwiZmlsZSI6Ii4uL3NyYy9vbktleURvd24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvciwgUmFuZ2UsIFBhdGgsIExvY2F0aW9uLCBUcmFuc2Zvcm1zfSBmcm9tICdzbGF0ZSdcbmltcG9ydCB7TGlzdE5vZGV9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQge2ZpeExpc3R9IGZyb20gXCIuL3V0aWxcIjtcblxuXG5leHBvcnQgY29uc3Qgb25LZXlEb3duID0gKCkgPT4gKFxuICAgIGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICAgIGVkaXRvcjogRWRpdG9yXG4pID0+IHtcbiAgICBsZXQge3NlbGVjdGlvbn0gPSBlZGl0b3JcbiAgICBpZiAoIXNlbGVjdGlvbikgcmV0dXJuXG4gICAgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgb25UYWIoZWRpdG9yKVxuICAgICAgICAvLyBFZGl0b3IuaW5zZXJ0VGV4dChlZGl0b3IsJ1xcdCcpXG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBvblRhYiA9IChlZGl0b3I6IEVkaXRvcik6IHZvaWQgPT4ge1xuICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5zZWxlY3Rpb24hXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5WzBdLnR5cGUgPT0gJ2xpc3QtaXRlbScpIHtcbiAgICAgICAgICAgIGlmIChSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGVudHJ5WzFdXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBwYXRoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0ge2FuY2hvcjogc2VsZWN0aW9uLmFuY2hvciwgZm9jdXM6IHN0YXJ0fVxuICAgICAgICAgICAgICAgIGxldCBiZWZvcmVUZXh0ID0gRWRpdG9yLnN0cmluZyhlZGl0b3IsIHJhbmdlKVxuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBFZGl0b3IuaW5zZXJ0VGV4dChlZGl0b3IsICcgICAgJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLy8gbW92ZSBkb3duIHdpdGggdGFiXG4gICAgICAgICAgICAvLyBjb25zdCB0YWIgPSAhZS5zaGlmdEtleTtcbiAgICAgICAgICAgIC8vIGlmICh0YWIpIHtcbiAgICAgICAgICAgIG1vdmVMaXN0SXRlbURvd24oZWRpdG9yLCBlbnRyeVsxXSk7XG4gICAgICAgICAgICBmaXhMaXN0KGVkaXRvcilcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwOiBMb2NhdGlvbiA9IHNlbGVjdGlvbi5hbmNob3JcbiAgICAgICAgICAgIGlmIChSYW5nZS5pc0V4cGFuZGVkKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICBwID0gRWRpdG9yLnN0YXJ0KGVkaXRvciwgcC5wYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmID0gRWRpdG9yLnJhbmdlUmVmKGVkaXRvciwgc2VsZWN0aW9uKVxuICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCBwKVxuICAgICAgICAgICAgRWRpdG9yLmluc2VydFRleHQoZWRpdG9yLCAnICAgICcpXG4gICAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHJlZi51bnJlZigpISlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG1vdmVMaXN0SXRlbURvd24oZWRpdG9yOiBFZGl0b3IsIHBhdGg6IFBhdGgpIHtcbiAgICBsZXQgZW50cnkgPSBFZGl0b3IucGFyZW50KGVkaXRvciwgcGF0aCkgYXMgW0xpc3ROb2RlLCBQYXRoXVxuICAgIGxldCBub2RlID0gZW50cnlbMF1cbiAgICBpZiAoIW5vZGUudHlwZS5lbmRzV2l0aCgnLWxpc3QnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG1vdmVMaXN0SXRlbURvd24sIG5vdCBhIGxpc3QgYXQ6ICR7ZW50cnlbMV19YClcbiAgICB9XG4gICAgbGV0IHJlZiA9IEVkaXRvci5wYXRoUmVmKGVkaXRvciwgcGF0aClcbiAgICBsZXQgcHJlID0gRWRpdG9yLnByZXZpb3VzKGVkaXRvciwge2F0OiBwYXRofSlcbiAgICBsZXQgbmV4dCA9IEVkaXRvci5uZXh0KGVkaXRvciwge2F0OiBwYXRofSlcbiAgICBpZiAocHJlKSB7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHthdDogcGF0aH0pXG4gICAgfVxuICAgIGlmIChuZXh0KSB7XG4gICAgICAgIFRyYW5zZm9ybXMuc3BsaXROb2RlcyhlZGl0b3IsIHthdDogUGF0aC5uZXh0KHJlZi5jdXJyZW50ISl9KVxuICAgIH1cbiAgICBwYXRoID0gcmVmLnVucmVmKCkhXG4gICAgY29uc3QgaW5kZW50ID0gbm9kZS5pbmRlbnQgPyBub2RlLmluZGVudCArIDEgOiAxXG4gICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHtpbmRlbnR9LCB7YXQ6IFBhdGgucGFyZW50KHBhdGgpfSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../src/onKeyDown.ts\n");

/***/ })

})