"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var userClickOutside = function (elementRef) {
    var isClickOutsid = vue_1.ref(false);
    var handler = function (e) {
        var _a;
        if ((_a = elementRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
            isClickOutsid.value = false;
        }
        else {
            isClickOutsid.value = true;
        }
    };
    vue_1.onMounted(function () {
        document.addEventListener('click', handler);
    });
    vue_1.onUnmounted(function () {
        document.removeEventListener('click', handler);
    });
    return isClickOutsid;
};
exports["default"] = userClickOutside;
