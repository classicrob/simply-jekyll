'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/*
 * Generated by script. DO NOT EDIT!
 *
 * This part is derived from Unicode Data Files and provided under Unicode, Inc. License Agreement.
 */

/* BEGIN */
const defs = [
  { start: 0, end: 31, prop: "N" },
  { start: 32, end: 126, prop: "Na" },
  { start: 127, end: 160, prop: "N" },
  { start: 161, end: 161, prop: "A" },
  { start: 162, end: 163, prop: "Na" },
  { start: 164, end: 164, prop: "A" },
  { start: 165, end: 166, prop: "Na" },
  { start: 167, end: 168, prop: "A" },
  { start: 169, end: 169, prop: "N" },
  { start: 170, end: 170, prop: "A" },
  { start: 171, end: 171, prop: "N" },
  { start: 172, end: 172, prop: "Na" },
  { start: 173, end: 174, prop: "A" },
  { start: 175, end: 175, prop: "Na" },
  { start: 176, end: 180, prop: "A" },
  { start: 181, end: 181, prop: "N" },
  { start: 182, end: 186, prop: "A" },
  { start: 187, end: 187, prop: "N" },
  { start: 188, end: 191, prop: "A" },
  { start: 192, end: 197, prop: "N" },
  { start: 198, end: 198, prop: "A" },
  { start: 199, end: 207, prop: "N" },
  { start: 208, end: 208, prop: "A" },
  { start: 209, end: 214, prop: "N" },
  { start: 215, end: 216, prop: "A" },
  { start: 217, end: 221, prop: "N" },
  { start: 222, end: 225, prop: "A" },
  { start: 226, end: 229, prop: "N" },
  { start: 230, end: 230, prop: "A" },
  { start: 231, end: 231, prop: "N" },
  { start: 232, end: 234, prop: "A" },
  { start: 235, end: 235, prop: "N" },
  { start: 236, end: 237, prop: "A" },
  { start: 238, end: 239, prop: "N" },
  { start: 240, end: 240, prop: "A" },
  { start: 241, end: 241, prop: "N" },
  { start: 242, end: 243, prop: "A" },
  { start: 244, end: 246, prop: "N" },
  { start: 247, end: 250, prop: "A" },
  { start: 251, end: 251, prop: "N" },
  { start: 252, end: 252, prop: "A" },
  { start: 253, end: 253, prop: "N" },
  { start: 254, end: 254, prop: "A" },
  { start: 255, end: 256, prop: "N" },
  { start: 257, end: 257, prop: "A" },
  { start: 258, end: 272, prop: "N" },
  { start: 273, end: 273, prop: "A" },
  { start: 274, end: 274, prop: "N" },
  { start: 275, end: 275, prop: "A" },
  { start: 276, end: 282, prop: "N" },
  { start: 283, end: 283, prop: "A" },
  { start: 284, end: 293, prop: "N" },
  { start: 294, end: 295, prop: "A" },
  { start: 296, end: 298, prop: "N" },
  { start: 299, end: 299, prop: "A" },
  { start: 300, end: 304, prop: "N" },
  { start: 305, end: 307, prop: "A" },
  { start: 308, end: 311, prop: "N" },
  { start: 312, end: 312, prop: "A" },
  { start: 313, end: 318, prop: "N" },
  { start: 319, end: 322, prop: "A" },
  { start: 323, end: 323, prop: "N" },
  { start: 324, end: 324, prop: "A" },
  { start: 325, end: 327, prop: "N" },
  { start: 328, end: 331, prop: "A" },
  { start: 332, end: 332, prop: "N" },
  { start: 333, end: 333, prop: "A" },
  { start: 334, end: 337, prop: "N" },
  { start: 338, end: 339, prop: "A" },
  { start: 340, end: 357, prop: "N" },
  { start: 358, end: 359, prop: "A" },
  { start: 360, end: 362, prop: "N" },
  { start: 363, end: 363, prop: "A" },
  { start: 364, end: 461, prop: "N" },
  { start: 462, end: 462, prop: "A" },
  { start: 463, end: 463, prop: "N" },
  { start: 464, end: 464, prop: "A" },
  { start: 465, end: 465, prop: "N" },
  { start: 466, end: 466, prop: "A" },
  { start: 467, end: 467, prop: "N" },
  { start: 468, end: 468, prop: "A" },
  { start: 469, end: 469, prop: "N" },
  { start: 470, end: 470, prop: "A" },
  { start: 471, end: 471, prop: "N" },
  { start: 472, end: 472, prop: "A" },
  { start: 473, end: 473, prop: "N" },
  { start: 474, end: 474, prop: "A" },
  { start: 475, end: 475, prop: "N" },
  { start: 476, end: 476, prop: "A" },
  { start: 477, end: 592, prop: "N" },
  { start: 593, end: 593, prop: "A" },
  { start: 594, end: 608, prop: "N" },
  { start: 609, end: 609, prop: "A" },
  { start: 610, end: 707, prop: "N" },
  { start: 708, end: 708, prop: "A" },
  { start: 709, end: 710, prop: "N" },
  { start: 711, end: 711, prop: "A" },
  { start: 712, end: 712, prop: "N" },
  { start: 713, end: 715, prop: "A" },
  { start: 716, end: 716, prop: "N" },
  { start: 717, end: 717, prop: "A" },
  { start: 718, end: 719, prop: "N" },
  { start: 720, end: 720, prop: "A" },
  { start: 721, end: 727, prop: "N" },
  { start: 728, end: 731, prop: "A" },
  { start: 732, end: 732, prop: "N" },
  { start: 733, end: 733, prop: "A" },
  { start: 734, end: 734, prop: "N" },
  { start: 735, end: 735, prop: "A" },
  { start: 736, end: 767, prop: "N" },
  { start: 768, end: 879, prop: "A" },
  { start: 880, end: 912, prop: "N" },
  { start: 913, end: 929, prop: "A" },
  { start: 930, end: 930, prop: "N" },
  { start: 931, end: 937, prop: "A" },
  { start: 938, end: 944, prop: "N" },
  { start: 945, end: 961, prop: "A" },
  { start: 962, end: 962, prop: "N" },
  { start: 963, end: 969, prop: "A" },
  { start: 970, end: 1024, prop: "N" },
  { start: 1025, end: 1025, prop: "A" },
  { start: 1026, end: 1039, prop: "N" },
  { start: 1040, end: 1103, prop: "A" },
  { start: 1104, end: 1104, prop: "N" },
  { start: 1105, end: 1105, prop: "A" },
  { start: 1106, end: 4351, prop: "N" },
  { start: 4352, end: 4447, prop: "W" },
  { start: 4448, end: 8207, prop: "N" },
  { start: 8208, end: 8208, prop: "A" },
  { start: 8209, end: 8210, prop: "N" },
  { start: 8211, end: 8214, prop: "A" },
  { start: 8215, end: 8215, prop: "N" },
  { start: 8216, end: 8217, prop: "A" },
  { start: 8218, end: 8219, prop: "N" },
  { start: 8220, end: 8221, prop: "A" },
  { start: 8222, end: 8223, prop: "N" },
  { start: 8224, end: 8226, prop: "A" },
  { start: 8227, end: 8227, prop: "N" },
  { start: 8228, end: 8231, prop: "A" },
  { start: 8232, end: 8239, prop: "N" },
  { start: 8240, end: 8240, prop: "A" },
  { start: 8241, end: 8241, prop: "N" },
  { start: 8242, end: 8243, prop: "A" },
  { start: 8244, end: 8244, prop: "N" },
  { start: 8245, end: 8245, prop: "A" },
  { start: 8246, end: 8250, prop: "N" },
  { start: 8251, end: 8251, prop: "A" },
  { start: 8252, end: 8253, prop: "N" },
  { start: 8254, end: 8254, prop: "A" },
  { start: 8255, end: 8307, prop: "N" },
  { start: 8308, end: 8308, prop: "A" },
  { start: 8309, end: 8318, prop: "N" },
  { start: 8319, end: 8319, prop: "A" },
  { start: 8320, end: 8320, prop: "N" },
  { start: 8321, end: 8324, prop: "A" },
  { start: 8325, end: 8360, prop: "N" },
  { start: 8361, end: 8361, prop: "H" },
  { start: 8362, end: 8363, prop: "N" },
  { start: 8364, end: 8364, prop: "A" },
  { start: 8365, end: 8450, prop: "N" },
  { start: 8451, end: 8451, prop: "A" },
  { start: 8452, end: 8452, prop: "N" },
  { start: 8453, end: 8453, prop: "A" },
  { start: 8454, end: 8456, prop: "N" },
  { start: 8457, end: 8457, prop: "A" },
  { start: 8458, end: 8466, prop: "N" },
  { start: 8467, end: 8467, prop: "A" },
  { start: 8468, end: 8469, prop: "N" },
  { start: 8470, end: 8470, prop: "A" },
  { start: 8471, end: 8480, prop: "N" },
  { start: 8481, end: 8482, prop: "A" },
  { start: 8483, end: 8485, prop: "N" },
  { start: 8486, end: 8486, prop: "A" },
  { start: 8487, end: 8490, prop: "N" },
  { start: 8491, end: 8491, prop: "A" },
  { start: 8492, end: 8530, prop: "N" },
  { start: 8531, end: 8532, prop: "A" },
  { start: 8533, end: 8538, prop: "N" },
  { start: 8539, end: 8542, prop: "A" },
  { start: 8543, end: 8543, prop: "N" },
  { start: 8544, end: 8555, prop: "A" },
  { start: 8556, end: 8559, prop: "N" },
  { start: 8560, end: 8569, prop: "A" },
  { start: 8570, end: 8584, prop: "N" },
  { start: 8585, end: 8585, prop: "A" },
  { start: 8586, end: 8591, prop: "N" },
  { start: 8592, end: 8601, prop: "A" },
  { start: 8602, end: 8631, prop: "N" },
  { start: 8632, end: 8633, prop: "A" },
  { start: 8634, end: 8657, prop: "N" },
  { start: 8658, end: 8658, prop: "A" },
  { start: 8659, end: 8659, prop: "N" },
  { start: 8660, end: 8660, prop: "A" },
  { start: 8661, end: 8678, prop: "N" },
  { start: 8679, end: 8679, prop: "A" },
  { start: 8680, end: 8703, prop: "N" },
  { start: 8704, end: 8704, prop: "A" },
  { start: 8705, end: 8705, prop: "N" },
  { start: 8706, end: 8707, prop: "A" },
  { start: 8708, end: 8710, prop: "N" },
  { start: 8711, end: 8712, prop: "A" },
  { start: 8713, end: 8714, prop: "N" },
  { start: 8715, end: 8715, prop: "A" },
  { start: 8716, end: 8718, prop: "N" },
  { start: 8719, end: 8719, prop: "A" },
  { start: 8720, end: 8720, prop: "N" },
  { start: 8721, end: 8721, prop: "A" },
  { start: 8722, end: 8724, prop: "N" },
  { start: 8725, end: 8725, prop: "A" },
  { start: 8726, end: 8729, prop: "N" },
  { start: 8730, end: 8730, prop: "A" },
  { start: 8731, end: 8732, prop: "N" },
  { start: 8733, end: 8736, prop: "A" },
  { start: 8737, end: 8738, prop: "N" },
  { start: 8739, end: 8739, prop: "A" },
  { start: 8740, end: 8740, prop: "N" },
  { start: 8741, end: 8741, prop: "A" },
  { start: 8742, end: 8742, prop: "N" },
  { start: 8743, end: 8748, prop: "A" },
  { start: 8749, end: 8749, prop: "N" },
  { start: 8750, end: 8750, prop: "A" },
  { start: 8751, end: 8755, prop: "N" },
  { start: 8756, end: 8759, prop: "A" },
  { start: 8760, end: 8763, prop: "N" },
  { start: 8764, end: 8765, prop: "A" },
  { start: 8766, end: 8775, prop: "N" },
  { start: 8776, end: 8776, prop: "A" },
  { start: 8777, end: 8779, prop: "N" },
  { start: 8780, end: 8780, prop: "A" },
  { start: 8781, end: 8785, prop: "N" },
  { start: 8786, end: 8786, prop: "A" },
  { start: 8787, end: 8799, prop: "N" },
  { start: 8800, end: 8801, prop: "A" },
  { start: 8802, end: 8803, prop: "N" },
  { start: 8804, end: 8807, prop: "A" },
  { start: 8808, end: 8809, prop: "N" },
  { start: 8810, end: 8811, prop: "A" },
  { start: 8812, end: 8813, prop: "N" },
  { start: 8814, end: 8815, prop: "A" },
  { start: 8816, end: 8833, prop: "N" },
  { start: 8834, end: 8835, prop: "A" },
  { start: 8836, end: 8837, prop: "N" },
  { start: 8838, end: 8839, prop: "A" },
  { start: 8840, end: 8852, prop: "N" },
  { start: 8853, end: 8853, prop: "A" },
  { start: 8854, end: 8856, prop: "N" },
  { start: 8857, end: 8857, prop: "A" },
  { start: 8858, end: 8868, prop: "N" },
  { start: 8869, end: 8869, prop: "A" },
  { start: 8870, end: 8894, prop: "N" },
  { start: 8895, end: 8895, prop: "A" },
  { start: 8896, end: 8977, prop: "N" },
  { start: 8978, end: 8978, prop: "A" },
  { start: 8979, end: 8985, prop: "N" },
  { start: 8986, end: 8987, prop: "W" },
  { start: 8988, end: 9000, prop: "N" },
  { start: 9001, end: 9002, prop: "W" },
  { start: 9003, end: 9192, prop: "N" },
  { start: 9193, end: 9196, prop: "W" },
  { start: 9197, end: 9199, prop: "N" },
  { start: 9200, end: 9200, prop: "W" },
  { start: 9201, end: 9202, prop: "N" },
  { start: 9203, end: 9203, prop: "W" },
  { start: 9204, end: 9311, prop: "N" },
  { start: 9312, end: 9449, prop: "A" },
  { start: 9450, end: 9450, prop: "N" },
  { start: 9451, end: 9547, prop: "A" },
  { start: 9548, end: 9551, prop: "N" },
  { start: 9552, end: 9587, prop: "A" },
  { start: 9588, end: 9599, prop: "N" },
  { start: 9600, end: 9615, prop: "A" },
  { start: 9616, end: 9617, prop: "N" },
  { start: 9618, end: 9621, prop: "A" },
  { start: 9622, end: 9631, prop: "N" },
  { start: 9632, end: 9633, prop: "A" },
  { start: 9634, end: 9634, prop: "N" },
  { start: 9635, end: 9641, prop: "A" },
  { start: 9642, end: 9649, prop: "N" },
  { start: 9650, end: 9651, prop: "A" },
  { start: 9652, end: 9653, prop: "N" },
  { start: 9654, end: 9655, prop: "A" },
  { start: 9656, end: 9659, prop: "N" },
  { start: 9660, end: 9661, prop: "A" },
  { start: 9662, end: 9663, prop: "N" },
  { start: 9664, end: 9665, prop: "A" },
  { start: 9666, end: 9669, prop: "N" },
  { start: 9670, end: 9672, prop: "A" },
  { start: 9673, end: 9674, prop: "N" },
  { start: 9675, end: 9675, prop: "A" },
  { start: 9676, end: 9677, prop: "N" },
  { start: 9678, end: 9681, prop: "A" },
  { start: 9682, end: 9697, prop: "N" },
  { start: 9698, end: 9701, prop: "A" },
  { start: 9702, end: 9710, prop: "N" },
  { start: 9711, end: 9711, prop: "A" },
  { start: 9712, end: 9724, prop: "N" },
  { start: 9725, end: 9726, prop: "W" },
  { start: 9727, end: 9732, prop: "N" },
  { start: 9733, end: 9734, prop: "A" },
  { start: 9735, end: 9736, prop: "N" },
  { start: 9737, end: 9737, prop: "A" },
  { start: 9738, end: 9741, prop: "N" },
  { start: 9742, end: 9743, prop: "A" },
  { start: 9744, end: 9747, prop: "N" },
  { start: 9748, end: 9749, prop: "W" },
  { start: 9750, end: 9755, prop: "N" },
  { start: 9756, end: 9756, prop: "A" },
  { start: 9757, end: 9757, prop: "N" },
  { start: 9758, end: 9758, prop: "A" },
  { start: 9759, end: 9791, prop: "N" },
  { start: 9792, end: 9792, prop: "A" },
  { start: 9793, end: 9793, prop: "N" },
  { start: 9794, end: 9794, prop: "A" },
  { start: 9795, end: 9799, prop: "N" },
  { start: 9800, end: 9811, prop: "W" },
  { start: 9812, end: 9823, prop: "N" },
  { start: 9824, end: 9825, prop: "A" },
  { start: 9826, end: 9826, prop: "N" },
  { start: 9827, end: 9829, prop: "A" },
  { start: 9830, end: 9830, prop: "N" },
  { start: 9831, end: 9834, prop: "A" },
  { start: 9835, end: 9835, prop: "N" },
  { start: 9836, end: 9837, prop: "A" },
  { start: 9838, end: 9838, prop: "N" },
  { start: 9839, end: 9839, prop: "A" },
  { start: 9840, end: 9854, prop: "N" },
  { start: 9855, end: 9855, prop: "W" },
  { start: 9856, end: 9874, prop: "N" },
  { start: 9875, end: 9875, prop: "W" },
  { start: 9876, end: 9885, prop: "N" },
  { start: 9886, end: 9887, prop: "A" },
  { start: 9888, end: 9888, prop: "N" },
  { start: 9889, end: 9889, prop: "W" },
  { start: 9890, end: 9897, prop: "N" },
  { start: 9898, end: 9899, prop: "W" },
  { start: 9900, end: 9916, prop: "N" },
  { start: 9917, end: 9918, prop: "W" },
  { start: 9919, end: 9919, prop: "A" },
  { start: 9920, end: 9923, prop: "N" },
  { start: 9924, end: 9925, prop: "W" },
  { start: 9926, end: 9933, prop: "A" },
  { start: 9934, end: 9934, prop: "W" },
  { start: 9935, end: 9939, prop: "A" },
  { start: 9940, end: 9940, prop: "W" },
  { start: 9941, end: 9953, prop: "A" },
  { start: 9954, end: 9954, prop: "N" },
  { start: 9955, end: 9955, prop: "A" },
  { start: 9956, end: 9959, prop: "N" },
  { start: 9960, end: 9961, prop: "A" },
  { start: 9962, end: 9962, prop: "W" },
  { start: 9963, end: 9969, prop: "A" },
  { start: 9970, end: 9971, prop: "W" },
  { start: 9972, end: 9972, prop: "A" },
  { start: 9973, end: 9973, prop: "W" },
  { start: 9974, end: 9977, prop: "A" },
  { start: 9978, end: 9978, prop: "W" },
  { start: 9979, end: 9980, prop: "A" },
  { start: 9981, end: 9981, prop: "W" },
  { start: 9982, end: 9983, prop: "A" },
  { start: 9984, end: 9988, prop: "N" },
  { start: 9989, end: 9989, prop: "W" },
  { start: 9990, end: 9993, prop: "N" },
  { start: 9994, end: 9995, prop: "W" },
  { start: 9996, end: 10023, prop: "N" },
  { start: 10024, end: 10024, prop: "W" },
  { start: 10025, end: 10044, prop: "N" },
  { start: 10045, end: 10045, prop: "A" },
  { start: 10046, end: 10059, prop: "N" },
  { start: 10060, end: 10060, prop: "W" },
  { start: 10061, end: 10061, prop: "N" },
  { start: 10062, end: 10062, prop: "W" },
  { start: 10063, end: 10066, prop: "N" },
  { start: 10067, end: 10069, prop: "W" },
  { start: 10070, end: 10070, prop: "N" },
  { start: 10071, end: 10071, prop: "W" },
  { start: 10072, end: 10101, prop: "N" },
  { start: 10102, end: 10111, prop: "A" },
  { start: 10112, end: 10132, prop: "N" },
  { start: 10133, end: 10135, prop: "W" },
  { start: 10136, end: 10159, prop: "N" },
  { start: 10160, end: 10160, prop: "W" },
  { start: 10161, end: 10174, prop: "N" },
  { start: 10175, end: 10175, prop: "W" },
  { start: 10176, end: 10213, prop: "N" },
  { start: 10214, end: 10221, prop: "Na" },
  { start: 10222, end: 10628, prop: "N" },
  { start: 10629, end: 10630, prop: "Na" },
  { start: 10631, end: 11034, prop: "N" },
  { start: 11035, end: 11036, prop: "W" },
  { start: 11037, end: 11087, prop: "N" },
  { start: 11088, end: 11088, prop: "W" },
  { start: 11089, end: 11092, prop: "N" },
  { start: 11093, end: 11093, prop: "W" },
  { start: 11094, end: 11097, prop: "A" },
  { start: 11098, end: 11903, prop: "N" },
  { start: 11904, end: 11929, prop: "W" },
  { start: 11930, end: 11930, prop: "N" },
  { start: 11931, end: 12019, prop: "W" },
  { start: 12020, end: 12031, prop: "N" },
  { start: 12032, end: 12245, prop: "W" },
  { start: 12246, end: 12271, prop: "N" },
  { start: 12272, end: 12283, prop: "W" },
  { start: 12284, end: 12287, prop: "N" },
  { start: 12288, end: 12288, prop: "F" },
  { start: 12289, end: 12350, prop: "W" },
  { start: 12351, end: 12352, prop: "N" },
  { start: 12353, end: 12438, prop: "W" },
  { start: 12439, end: 12440, prop: "N" },
  { start: 12441, end: 12543, prop: "W" },
  { start: 12544, end: 12548, prop: "N" },
  { start: 12549, end: 12591, prop: "W" },
  { start: 12592, end: 12592, prop: "N" },
  { start: 12593, end: 12686, prop: "W" },
  { start: 12687, end: 12687, prop: "N" },
  { start: 12688, end: 12730, prop: "W" },
  { start: 12731, end: 12735, prop: "N" },
  { start: 12736, end: 12771, prop: "W" },
  { start: 12772, end: 12783, prop: "N" },
  { start: 12784, end: 12830, prop: "W" },
  { start: 12831, end: 12831, prop: "N" },
  { start: 12832, end: 12871, prop: "W" },
  { start: 12872, end: 12879, prop: "A" },
  { start: 12880, end: 19903, prop: "W" },
  { start: 19904, end: 19967, prop: "N" },
  { start: 19968, end: 42124, prop: "W" },
  { start: 42125, end: 42127, prop: "N" },
  { start: 42128, end: 42182, prop: "W" },
  { start: 42183, end: 43359, prop: "N" },
  { start: 43360, end: 43388, prop: "W" },
  { start: 43389, end: 44031, prop: "N" },
  { start: 44032, end: 55203, prop: "W" },
  { start: 55204, end: 57343, prop: "N" },
  { start: 57344, end: 63743, prop: "A" },
  { start: 63744, end: 64255, prop: "W" },
  { start: 64256, end: 65023, prop: "N" },
  { start: 65024, end: 65039, prop: "A" },
  { start: 65040, end: 65049, prop: "W" },
  { start: 65050, end: 65071, prop: "N" },
  { start: 65072, end: 65106, prop: "W" },
  { start: 65107, end: 65107, prop: "N" },
  { start: 65108, end: 65126, prop: "W" },
  { start: 65127, end: 65127, prop: "N" },
  { start: 65128, end: 65131, prop: "W" },
  { start: 65132, end: 65280, prop: "N" },
  { start: 65281, end: 65376, prop: "F" },
  { start: 65377, end: 65470, prop: "H" },
  { start: 65471, end: 65473, prop: "N" },
  { start: 65474, end: 65479, prop: "H" },
  { start: 65480, end: 65481, prop: "N" },
  { start: 65482, end: 65487, prop: "H" },
  { start: 65488, end: 65489, prop: "N" },
  { start: 65490, end: 65495, prop: "H" },
  { start: 65496, end: 65497, prop: "N" },
  { start: 65498, end: 65500, prop: "H" },
  { start: 65501, end: 65503, prop: "N" },
  { start: 65504, end: 65510, prop: "F" },
  { start: 65511, end: 65511, prop: "N" },
  { start: 65512, end: 65518, prop: "H" },
  { start: 65519, end: 65532, prop: "N" },
  { start: 65533, end: 65533, prop: "A" },
  { start: 65534, end: 94175, prop: "N" },
  { start: 94176, end: 94179, prop: "W" },
  { start: 94180, end: 94207, prop: "N" },
  { start: 94208, end: 100343, prop: "W" },
  { start: 100344, end: 100351, prop: "N" },
  { start: 100352, end: 101106, prop: "W" },
  { start: 101107, end: 110591, prop: "N" },
  { start: 110592, end: 110878, prop: "W" },
  { start: 110879, end: 110927, prop: "N" },
  { start: 110928, end: 110930, prop: "W" },
  { start: 110931, end: 110947, prop: "N" },
  { start: 110948, end: 110951, prop: "W" },
  { start: 110952, end: 110959, prop: "N" },
  { start: 110960, end: 111355, prop: "W" },
  { start: 111356, end: 126979, prop: "N" },
  { start: 126980, end: 126980, prop: "W" },
  { start: 126981, end: 127182, prop: "N" },
  { start: 127183, end: 127183, prop: "W" },
  { start: 127184, end: 127231, prop: "N" },
  { start: 127232, end: 127242, prop: "A" },
  { start: 127243, end: 127247, prop: "N" },
  { start: 127248, end: 127277, prop: "A" },
  { start: 127278, end: 127279, prop: "N" },
  { start: 127280, end: 127337, prop: "A" },
  { start: 127338, end: 127343, prop: "N" },
  { start: 127344, end: 127373, prop: "A" },
  { start: 127374, end: 127374, prop: "W" },
  { start: 127375, end: 127376, prop: "A" },
  { start: 127377, end: 127386, prop: "W" },
  { start: 127387, end: 127404, prop: "A" },
  { start: 127405, end: 127487, prop: "N" },
  { start: 127488, end: 127490, prop: "W" },
  { start: 127491, end: 127503, prop: "N" },
  { start: 127504, end: 127547, prop: "W" },
  { start: 127548, end: 127551, prop: "N" },
  { start: 127552, end: 127560, prop: "W" },
  { start: 127561, end: 127567, prop: "N" },
  { start: 127568, end: 127569, prop: "W" },
  { start: 127570, end: 127583, prop: "N" },
  { start: 127584, end: 127589, prop: "W" },
  { start: 127590, end: 127743, prop: "N" },
  { start: 127744, end: 127776, prop: "W" },
  { start: 127777, end: 127788, prop: "N" },
  { start: 127789, end: 127797, prop: "W" },
  { start: 127798, end: 127798, prop: "N" },
  { start: 127799, end: 127868, prop: "W" },
  { start: 127869, end: 127869, prop: "N" },
  { start: 127870, end: 127891, prop: "W" },
  { start: 127892, end: 127903, prop: "N" },
  { start: 127904, end: 127946, prop: "W" },
  { start: 127947, end: 127950, prop: "N" },
  { start: 127951, end: 127955, prop: "W" },
  { start: 127956, end: 127967, prop: "N" },
  { start: 127968, end: 127984, prop: "W" },
  { start: 127985, end: 127987, prop: "N" },
  { start: 127988, end: 127988, prop: "W" },
  { start: 127989, end: 127991, prop: "N" },
  { start: 127992, end: 128062, prop: "W" },
  { start: 128063, end: 128063, prop: "N" },
  { start: 128064, end: 128064, prop: "W" },
  { start: 128065, end: 128065, prop: "N" },
  { start: 128066, end: 128252, prop: "W" },
  { start: 128253, end: 128254, prop: "N" },
  { start: 128255, end: 128317, prop: "W" },
  { start: 128318, end: 128330, prop: "N" },
  { start: 128331, end: 128334, prop: "W" },
  { start: 128335, end: 128335, prop: "N" },
  { start: 128336, end: 128359, prop: "W" },
  { start: 128360, end: 128377, prop: "N" },
  { start: 128378, end: 128378, prop: "W" },
  { start: 128379, end: 128404, prop: "N" },
  { start: 128405, end: 128406, prop: "W" },
  { start: 128407, end: 128419, prop: "N" },
  { start: 128420, end: 128420, prop: "W" },
  { start: 128421, end: 128506, prop: "N" },
  { start: 128507, end: 128591, prop: "W" },
  { start: 128592, end: 128639, prop: "N" },
  { start: 128640, end: 128709, prop: "W" },
  { start: 128710, end: 128715, prop: "N" },
  { start: 128716, end: 128716, prop: "W" },
  { start: 128717, end: 128719, prop: "N" },
  { start: 128720, end: 128722, prop: "W" },
  { start: 128723, end: 128724, prop: "N" },
  { start: 128725, end: 128725, prop: "W" },
  { start: 128726, end: 128746, prop: "N" },
  { start: 128747, end: 128748, prop: "W" },
  { start: 128749, end: 128755, prop: "N" },
  { start: 128756, end: 128762, prop: "W" },
  { start: 128763, end: 128991, prop: "N" },
  { start: 128992, end: 129003, prop: "W" },
  { start: 129004, end: 129292, prop: "N" },
  { start: 129293, end: 129393, prop: "W" },
  { start: 129394, end: 129394, prop: "N" },
  { start: 129395, end: 129398, prop: "W" },
  { start: 129399, end: 129401, prop: "N" },
  { start: 129402, end: 129442, prop: "W" },
  { start: 129443, end: 129444, prop: "N" },
  { start: 129445, end: 129450, prop: "W" },
  { start: 129451, end: 129453, prop: "N" },
  { start: 129454, end: 129482, prop: "W" },
  { start: 129483, end: 129484, prop: "N" },
  { start: 129485, end: 129535, prop: "W" },
  { start: 129536, end: 129647, prop: "N" },
  { start: 129648, end: 129651, prop: "W" },
  { start: 129652, end: 129655, prop: "N" },
  { start: 129656, end: 129658, prop: "W" },
  { start: 129659, end: 129663, prop: "N" },
  { start: 129664, end: 129666, prop: "W" },
  { start: 129667, end: 129679, prop: "N" },
  { start: 129680, end: 129685, prop: "W" },
  { start: 129686, end: 131071, prop: "N" },
  { start: 131072, end: 196605, prop: "W" },
  { start: 196606, end: 196607, prop: "N" },
  { start: 196608, end: 262141, prop: "W" },
  { start: 262142, end: 917759, prop: "N" },
  { start: 917760, end: 917999, prop: "A" },
  { start: 918000, end: 983039, prop: "N" },
  { start: 983040, end: 1048573, prop: "A" },
  { start: 1048574, end: 1048575, prop: "N" },
  { start: 1048576, end: 1114109, prop: "A" },
  { start: 1114110, end: 1114111, prop: "N" },
];
/* END */

const version = "12.1.0";

/**
 * Returns The EAW property of a code point.
 * @private
 * @param {string} codePoint A code point
 * @return {string} The EAW property of the specified code point
 */
function _getEAWOfCodePoint(codePoint) {
  let min = 0;
  let max = defs.length - 1;
  while (min !== max) {
    const i   = min + ((max - min) >> 1);
    const def = defs[i];
    if (codePoint < def.start) {
      max = i - 1;
    } else if (codePoint > def.end) {
      min = i + 1;
    } else {
      return def.prop;
    }
  }
  return defs[min].prop;
}

/**
 * Returns the EAW property of a character.
 * @param {string} str A string in which the character is contained
 * @param {number} [at = 0] The position (in code unit) of the character in the string
 * @return {string} The EAW property of the specified character
 * @example
 * import { getEAW } from "meaw";
 *
 * // Narrow
 * assert(getEAW("A") === "Na");
 * // Wide
 * assert(getEAW("あ") === "W");
 * assert(getEAW("安") === "W");
 * assert(getEAW("🍣") === "W");
 * // Fullwidth
 * assert(getEAW("Ａ") === "F");
 * // Halfwidth
 * assert(getEAW("ｱ") === "H");
 * // Ambiguous
 * assert(getEAW("∀") === "A");
 * assert(getEAW("→") === "A");
 * assert(getEAW("Ω") === "A");
 * assert(getEAW("Я") === "A");
 * // Neutral
 * assert(getEAW("ℵ") === "N");
 *
 * // a position (in code unit) can be specified
 * assert(getEAW("ℵAあＡｱ∀", 2) === "W");
 */
function getEAW(str, at) {
  const codePoint = str.codePointAt(at || 0);
  return codePoint === undefined
    ? undefined
    : _getEAWOfCodePoint(codePoint);
}

const defaultWidthMap = {
  "N" : 1,
  "Na": 1,
  "W" : 2,
  "F" : 2,
  "H" : 1,
  "A" : 1,
};

/**
 * Computes width of a string based on the EAW properties of its characters.
 * By default characters with property Wide (W) or Fullwidth (F) are treated as wide (= 2)
 * and the others are as narrow (= 1)
 * @param {string} str A string to compute width
 * @param {Object<string, number> | undefined} [widthMap = undefined]
 *   An object which represents a map from an EAW property to a character width
 * @return {number} The computed width
 * @example
 * import { computeWidth } from "meaw";
 *
 * assert(computeWidth("Aあ🍣Ω") === 6);
 * // custom widths can be specified by an object
 * assert(computeWidth("Aあ🍣Ω", { "A": 2 }) === 7);
 */
function computeWidth(str, widthMap) {
  const map = widthMap
    ? Object.assign({}, defaultWidthMap, widthMap)
    : defaultWidthMap;
  let width = 0;
  for (const char of str) {
    width += map[getEAW(char)];
  }
  return width;
}

var meaw_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    computeWidth: computeWidth,
    eawVersion: version,
    getEAW: getEAW
});

var meaw = /*@__PURE__*/getAugmentedNamespace(meaw_es);

var mteKernel = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });



/**
 * A `Point` represents a point in the text editor.
 */
class Point {
  /**
   * Creates a new `Point` object.
   *
   * @param {number} row - Row of the point, starts from 0.
   * @param {number} column - Column of the point, starts from 0.
   */
  constructor(row, column) {
    /** @private */
    this._row = row;
    /** @private */
    this._column = column;
  }

  /**
   * Row of the point.
   *
   * @type {number}
   */
  get row() {
    return this._row;
  }

  /**
   * Column of the point.
   *
   * @type {number}
   */
  get column() {
    return this._column;
  }

  /**
   * Checks if the point is equal to another point.
   *
   * @param {Point} point - A point object.
   * @returns {boolean} `true` if two points are equal.
   */
  equals(point) {
    return this.row === point.row && this.column === point.column;
  }
}

/**
 * A `Range` object represents a range in the text editor.
 */
class Range {
  /**
   * Creates a new `Range` object.
   *
   * @param {Point} start - The start point of the range.
   * @param {Point} end - The end point of the range.
   */
  constructor(start, end) {
    /** @private */
    this._start = start;
    /** @private */
    this._end = end;
  }

  /**
   * The start point of the range.
   *
   * @type {Point}
   */
  get start() {
    return this._start;
  }

  /**
   * The end point of the range.
   *
   * @type {Point}
   */
  get end() {
    return this._end;
  }
}

/**
 * A `Focus` object represents which cell is focused in the table.
 *
 * Note that `row` and `column` properties specifiy a cell's position in the table, not the cursor's
 * position in the text editor as {@link Point} class.
 *
 * @private
 */
class Focus {
  /**
   * Creates a new `Focus` object.
   *
   * @param {number} row - Row of the focused cell.
   * @param {number} column - Column of the focused cell.
   * @param {number} offset - Raw offset in the cell.
   */
  constructor(row, column, offset) {
    /** @private */
    this._row = row;
    /** @private */
    this._column = column;
    /** @private */
    this._offset = offset;
  }

  /**
   * Row of the focused cell.
   *
   * @type {number}
   */
  get row() {
    return this._row;
  }

  /**
   * Column of the focused cell.
   *
   * @type {number}
   */
  get column() {
    return this._column;
  }

  /**
   * Raw offset in the cell.
   *
   * @type {number}
   */
  get offset() {
    return this._offset;
  }

  /**
   * Checks if two focuses point the same cell.
   * Offsets are ignored.
   *
   * @param {Focus} focus - A focus object.
   * @returns {boolean}
   */
  posEquals(focus) {
    return this.row === focus.row && this.column === focus.column;
  }

  /**
   * Creates a copy of the focus object by setting its row to the specified value.
   *
   * @param {number} row - Row of the focused cell.
   * @returns {Focus} A new focus object with the specified row.
   */
  setRow(row) {
    return new Focus(row, this.column, this.offset);
  }

  /**
   * Creates a copy of the focus object by setting its column to the specified value.
   *
   * @param {number} column - Column of the focused cell.
   * @returns {Focus} A new focus object with the specified column.
   */
  setColumn(column) {
    return new Focus(this.row, column, this.offset);
  }

  /**
   * Creates a copy of the focus object by setting its offset to the specified value.
   *
   * @param {number} offset - Offset in the focused cell.
   * @returns {Focus} A new focus object with the specified offset.
   */
  setOffset(offset) {
    return new Focus(this.row, this.column, offset);
  }
}

/**
 * Represents column alignment.
 *
 * - `Alignment.NONE` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 * @type {Object}
 */
const Alignment = Object.freeze({
  NONE  : "none",
  LEFT  : "left",
  RIGHT : "right",
  CENTER: "center"
});

/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 * @type {Object}
 */
const DefaultAlignment = Object.freeze({
  LEFT  : Alignment.LEFT,
  RIGHT : Alignment.RIGHT,
  CENTER: Alignment.CENTER
});

/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 * @type {Object}
 */
const HeaderAlignment = Object.freeze({
  FOLLOW: "follow",
  LEFT  : Alignment.LEFT,
  RIGHT : Alignment.RIGHT,
  CENTER: Alignment.CENTER
});

/**
 * A `TableCell` object represents a table cell.
 *
 * @private
 */
class TableCell {
  /**
   * Creates a new `TableCell` object.
   *
   * @param {string} rawContent - Raw content of the cell.
   */
  constructor(rawContent) {
    /** @private */
    this._rawContent = rawContent;
    /** @private */
    this._content = rawContent.trim();
    /** @private */
    this._paddingLeft = this._content === ""
      ? (this._rawContent === "" ? 0 : 1)
      : this._rawContent.length - this._rawContent.trimLeft().length;
    /** @private */
    this._paddingRight = this._rawContent.length - this._content.length - this._paddingLeft;
  }

  /**
   * Raw content of the cell.
   *
   * @type {string}
   */
  get rawContent() {
    return this._rawContent;
  }

  /**
   * Trimmed content of the cell.
   *
   * @type {string}
   */
  get content() {
    return this._content;
  }

  /**
   * Width of the left padding of the cell.
   *
   * @type {number}
   */
  get paddingLeft() {
    return this._paddingLeft;
  }

  /**
   * Width of the right padding of the cell.
   *
   * @type {number}
   */
  get paddingRight() {
    return this._paddingRight;
  }

  /**
   * Convers the cell to a text representation.
   *
   * @returns {string} The raw content of the cell.
   */
  toText() {
    return this.rawContent;
  }

  /**
   * Checks if the cell is a delimiter i.e. it only contains hyphens `-` with optional one
   * leading and trailing colons `:`.
   *
   * @returns {boolean} `true` if the cell is a delimiter.
   */
  isDelimiter() {
    return /^\s*:?-+:?\s*$/.test(this.rawContent);
  }

  /**
   * Returns the alignment the cell represents.
   *
   * @returns {Alignment|undefined} The alignment the cell represents;
   * `undefined` if the cell is not a delimiter.
   */
  getAlignment() {
    if (!this.isDelimiter()) {
      return undefined;
    }
    if (this.content[0] === ":") {
      if (this.content[this.content.length - 1] === ":") {
        return Alignment.CENTER;
      }
      else {
        return Alignment.LEFT;
      }
    }
    else {
      if (this.content[this.content.length - 1] === ":") {
        return Alignment.RIGHT;
      }
      else {
        return Alignment.NONE;
      }
    }
  }

  /**
   * Computes a relative position in the trimmed content from that in the raw content.
   *
   * @param {number} rawOffset - Relative position in the raw content.
   * @returns {number} - Relative position in the trimmed content.
   */
  computeContentOffset(rawOffset) {
    if (this.content === "") {
      return 0;
    }
    if (rawOffset < this.paddingLeft) {
      return 0;
    }
    if (rawOffset < this.paddingLeft + this.content.length) {
      return rawOffset - this.paddingLeft;
    }
    else {
      return this.content.length;
    }
  }

  /**
   * Computes a relative position in the raw content from that in the trimmed content.
   *
   * @param {number} contentOffset - Relative position in the trimmed content.
   * @returns {number} - Relative position in the raw content.
   */
  computeRawOffset(contentOffset) {
    return contentOffset + this.paddingLeft;
  }
}

/**
 * A `TableRow` object represents a table row.
 *
 * @private
 */
class TableRow {
  /**
   * Creates a new `TableRow` objec.
   *
   * @param {Array<TableCell>} cells - Cells that the row contains.
   * @param {string} marginLeft - Margin string at the left of the row.
   * @param {string} marginRight - Margin string at the right of the row.
   */
  constructor(cells, marginLeft, marginRight) {
    /** @private */
    this._cells = cells.slice();
    /** @private */
    this._marginLeft = marginLeft;
    /** @private */
    this._marginRight = marginRight;
  }

  /**
   * Margin string at the left of the row.
   *
   * @type {string}
   */
  get marginLeft() {
    return this._marginLeft;
  }

  /**
   * Margin string at the right of the row.
   *
   * @type {string}
   */
  get marginRight() {
    return this._marginRight;
  }

  /**
   * Gets the number of the cells in the row.
   *
   * @returns {number} Number of the cells.
   */
  getWidth() {
    return this._cells.length;
  }

  /**
   * Returns the cells that the row contains.
   *
   * @returns {Array<TableCell>} An array of cells that the row contains.
   */
  getCells() {
    return this._cells.slice();
  }

  /**
   * Gets a cell at the specified index.
   *
   * @param {number} index - Index.
   * @returns {TableCell|undefined} The cell at the specified index if exists;
   * `undefined` if no cell is found.
   */
  getCellAt(index) {
    return this._cells[index];
  }

  /**
   * Convers the row to a text representation.
   *
   * @returns {string} A text representation of the row.
   */
  toText() {
    if (this._cells.length === 0) {
      return this.marginLeft;
    }
    else {
      const cells = this._cells.map(cell => cell.toText()).join("|");
      return `${this.marginLeft}|${cells}|${this.marginRight}`;
    }
  }

  /**
   * Checks if the row is a delimiter or not.
   *
   * @returns {boolean} `true` if the row is a delimiter i.e. all the cells contained are delimiters.
   */
  isDelimiter() {
    return this._cells.every(cell => cell.isDelimiter());
  }
}

/**
 * A `Table` object represents a table.
 *
 * @private
 */
class Table {
  /**
   * Creates a new `Table` object.
   *
   * @param {Array<TableRow>} rows - An array of rows that the table contains.
   */
  constructor(rows) {
    /** @private */
    this._rows = rows.slice();
  }

  /**
   * Gets the number of rows in the table.
   *
   * @returns {number} The number of rows.
   */
  getHeight() {
    return this._rows.length;
  }

  /**
   * Gets the maximum width of the rows in the table.
   *
   * @returns {number} The maximum width of the rows.
   */
  getWidth() {
    return this._rows.map(row => row.getWidth())
      .reduce((x, y) => Math.max(x, y), 0);
  }

  /**
   * Gets the width of the header row.
   *
   * @returns {number|undefined} The width of the header row;
   * `undefined` if there is no header row.
   */
  getHeaderWidth() {
    if (this._rows.length === 0) {
      return undefined;
    }
    return this._rows[0].getWidth();
  }

  /**
   * Gets the rows that the table contains.
   *
   * @returns {Array<TableRow>} An array of the rows.
   */
  getRows() {
    return this._rows.slice();
  }

  /**
   * Gets a row at the specified index.
   *
   * @param {number} index - Row index.
   * @returns {TableRow|undefined} The row at the specified index;
   * `undefined` if not found.
   */
  getRowAt(index) {
    return this._rows[index];
  }

  /**
   * Gets the delimiter row of the table.
   *
   * @returns {TableRow|undefined} The delimiter row;
   * `undefined` if there is not delimiter row.
   */
  getDelimiterRow() {
    const row = this._rows[1];
    if (row === undefined) {
      return undefined;
    }
    if (row.isDelimiter()) {
      return row;
    }
    else {
      return undefined;
    }
  }

  /**
   * Gets a cell at the specified index.
   *
   * @param {number} rowIndex - Row index of the cell.
   * @param {number} columnIndex - Column index of the cell.
   * @returns {TableCell|undefined} The cell at the specified index;
   * `undefined` if not found.
   */
  getCellAt(rowIndex, columnIndex) {
    const row = this._rows[rowIndex];
    if (row === undefined) {
      return undefined;
    }
    return row.getCellAt(columnIndex);
  }

  /**
   * Gets the cell at the focus.
   *
   * @param {Focus} focus - Focus object.
   * @returns {TableCell|undefined} The cell at the focus;
   * `undefined` if not found.
   */
  getFocusedCell(focus) {
    return this.getCellAt(focus.row, focus.column);
  }

  /**
   * Converts the table to an array of text representations of the rows.
   *
   * @returns {Array<string>} An array of text representations of the rows.
   */
  toLines() {
    return this._rows.map(row => row.toText());
  }

  /**
   * Computes a focus from a point in the text editor.
   *
   * @param {Point} pos - A point in the text editor.
   * @param {number} rowOffset - The row index where the table starts in the text editor.
   * @returns {Focus|undefined} A focus object that corresponds to the specified point;
   * `undefined` if the row index is out of bounds.
   */
  focusOfPosition(pos, rowOffset) {
    const rowIndex = pos.row - rowOffset;
    const row = this._rows[rowIndex];
    if (row === undefined) {
      return undefined;
    }
    if (pos.column < row.marginLeft.length + 1) {
      return new Focus(rowIndex, -1, pos.column);
    }
    else {
      const cellWidths = row.getCells().map(cell => cell.rawContent.length);
      let columnPos = row.marginLeft.length + 1; // left margin + a pipe
      let columnIndex = 0;
      for (; columnIndex < cellWidths.length; columnIndex++) {
        if (columnPos + cellWidths[columnIndex] + 1 > pos.column) {
          break;
        }
        columnPos += cellWidths[columnIndex] + 1;
      }
      const offset = pos.column - columnPos;
      return new Focus(rowIndex, columnIndex, offset);
    }
  }

  /**
   * Computes a position in the text editor from a focus.
   *
   * @param {Focus} focus - A focus object.
   * @param {number} rowOffset - The row index where the table starts in the text editor.
   * @returns {Point|undefined} A position in the text editor that corresponds to the focus;
   * `undefined` if the focused row  is out of the table.
   */
  positionOfFocus(focus, rowOffset) {
    const row = this._rows[focus.row];
    if (row === undefined) {
      return undefined;
    }
    const rowPos = focus.row + rowOffset;
    if (focus.column < 0) {
      return new Point(rowPos, focus.offset);
    }
    const cellWidths = row.getCells().map(cell => cell.rawContent.length);
    const maxIndex = Math.min(focus.column, cellWidths.length);
    let columnPos = row.marginLeft.length + 1;
    for (let columnIndex = 0; columnIndex < maxIndex; columnIndex++) {
      columnPos += cellWidths[columnIndex] + 1;
    }
    return new Point(rowPos, columnPos + focus.offset);
  }

  /**
   * Computes a selection range from a focus.
   *
   * @param {Focus} focus - A focus object.
   * @param {number} rowOffset - The row index where the table starts in the text editor.
   * @returns {Range|undefined} A range to be selected that corresponds to the focus;
   * `undefined` if the focus does not specify any cell or the specified cell is empty.
   */
  selectionRangeOfFocus(focus, rowOffset) {
    const row = this._rows[focus.row];
    if (row === undefined) {
      return undefined;
    }
    const cell = row.getCellAt(focus.column);
    if (cell === undefined) {
      return undefined;
    }
    if (cell.content === "") {
      return undefined;
    }
    const rowPos = focus.row + rowOffset;
    const cellWidths = row.getCells().map(cell => cell.rawContent.length);
    let columnPos = row.marginLeft.length + 1;
    for (let columnIndex = 0; columnIndex < focus.column; columnIndex++) {
      columnPos += cellWidths[columnIndex] + 1;
    }
    columnPos += cell.paddingLeft;
    return new Range(
      new Point(rowPos, columnPos),
      new Point(rowPos, columnPos + cell.content.length)
    );
  }
}

/**
 * Splits a text into cells.
 *
 * @private
 * @param {string} text
 * @returns {Array<string>}
 */
function _splitCells(text) {
  const cells = [];
  let buf = "";
  let rest = text;
  while (rest !== "") {
    switch (rest[0]) {
    case "`":
      // read code span
      {
        const start = rest.match(/^`*/)[0];
        let buf1 = start;
        let rest1 = rest.substr(start.length);
        let closed = false;
        while (rest1 !== "") {
          if (rest1[0] === "`") {
            const end = rest1.match(/^`*/)[0];
            buf1 += end;
            rest1 = rest1.substr(end.length);
            if (end.length === start.length) {
              closed = true;
              break;
            }
          }
          else {
            buf1 += rest1[0];
            rest1 = rest1.substr(1);
          }
        }
        if (closed) {
          buf += buf1;
          rest = rest1;
        }
        else {
          buf += "`";
          rest = rest.substr(1);
        }
      }
      break;
    case "\\":
      // escape next character
      if (rest.length >= 2) {
        buf += rest.substr(0, 2);
        rest = rest.substr(2);
      }
      else {
        buf += "\\";
        rest = rest.substr(1);
      }
      break;
    case "|":
      // flush buffer
      cells.push(buf);
      buf = "";
      rest = rest.substr(1);
      break;
    default:
      buf += rest[0];
      rest = rest.substr(1);
    }
  }
  cells.push(buf);
  return cells;
}

/**
 * Reads a table row.
 *
 * @private
 * @param {string} text - A text.
 * @param {RegExp} [leftMarginRegex=/^\s*$/] - A regular expression object that matches left margin.
 * @returns {TableRow}
 */
function _readRow(text, leftMarginRegex = /^\s*$/) {
  let cells = _splitCells(text);
  let marginLeft;
  if (cells.length > 0 && leftMarginRegex.test(cells[0])) {
    marginLeft = cells[0];
    cells = cells.slice(1);
  }
  else {
    marginLeft = "";
  }
  let marginRight;
  if (cells.length > 1 && /^\s*$/.test(cells[cells.length - 1])) {
    marginRight = cells[cells.length - 1];
    cells = cells.slice(0, cells.length - 1);
  }
  else {
    marginRight = "";
  }
  return new TableRow(cells.map(cell => new TableCell(cell)), marginLeft, marginRight);
}

/**
 * Creates a regex source string of margin character class.
 *
 * @private
 * @param {Set<string>} chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return {string} A regex source string.
 */
function marginRegexSrc(chars) {
  let cs = "";
  for (const c of chars) {
    if (c !== "|" && c !== "\\" && c !== "`") {
      cs += `\\u{${c.codePointAt(0).toString(16)}}`;
    }
  }
  return `[\\s${cs}]*`;
}

/**
 * Creates a regular expression object that matches margin of tables.
 *
 * @private
 * @param {Set<string>} chars - A set of additional margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @return {RegExp} An regular expression object that matches margin of tables.
 */
function _marginRegex(chars) {
  return new RegExp(`^${marginRegexSrc(chars)}$`, "u");
}

/**
 * Reads a table from lines.
 *
 * @private
 * @param {Array<string>} lines - An array of texts, each text represents a row.
 * @param {Object} options - An object containing options for parsing.
 *
 * | property name     | type                              | description                                 |
 * | ----------------- | --------------------------------- | ------------------------------------------- |
 * | `leftMarginChars` | {@link Set}&lt;{@link string}&gt; | A set of additional left margin characters. |
 *
 * @returns {Table} The table red from the lines.
 */
function readTable(lines, options) {
  const leftMarginRegex = _marginRegex(options.leftMarginChars);
  return new Table(lines.map(line => _readRow(line, leftMarginRegex)));
}

/**
 * Creates a delimiter text.
 *
 * @private
 * @param {Alignment} alignment
 * @param {number} width - Width of the horizontal bar of delimiter.
 * @returns {string}
 * @throws {Error} Unknown alignment.
 */
function _delimiterText(alignment, width) {
  const bar = "-".repeat(width);
  switch (alignment) {
  case Alignment.NONE:
    return ` ${bar} `;
  case Alignment.LEFT:
    return `:${bar} `;
  case Alignment.RIGHT:
    return ` ${bar}:`;
  case Alignment.CENTER:
    return `:${bar}:`;
  default:
    throw new Error("Unknown alignment: " + alignment);
  }
}

/**
 * Extends array size.
 *
 * @private
 * @param {Array} arr
 * @param {number} size
 * @param {Function} callback - Callback function to fill newly created cells.
 * @returns {Array} Extended array.
 */
function _extendArray(arr, size, callback) {
  const extended = arr.slice();
  for (let i = arr.length; i < size; i++) {
    extended.push(callback(i, arr));
  }
  return extended;
}

/**
 * Completes a table by adding missing delimiter and cells.
 * After completion, all rows in the table have the same width.
 *
 * @private
 * @param {Table} table - A table object.
 * @param {Object} options - An object containing options for completion.
 *
 * | property name       | type           | description                                               |
 * | ------------------- | -------------- | --------------------------------------------------------- |
 * | `minDelimiterWidth` | {@link number} | Width of delimiters used when completing delimiter cells. |
 *
 * @returns {Object} An object that represents the result of the completion.
 *
 * | property name       | type            | description                            |
 * | ------------------- | --------------- | -------------------------------------- |
 * | `table`             | {@link Table}   | A completed table object.              |
 * | `delimiterInserted` | {@link boolean} | `true` if a delimiter row is inserted. |
 *
 * @throws {Error} Empty table.
 */
function completeTable(table, options) {
  const tableHeight = table.getHeight();
  const tableWidth = table.getWidth();
  if (tableHeight === 0) {
    throw new Error("Empty table");
  }
  const rows = table.getRows();
  const newRows = [];
  // header
  const headerRow = rows[0];
  const headerCells = headerRow.getCells();
  newRows.push(new TableRow(
    _extendArray(headerCells, tableWidth, j => new TableCell(
      j === headerCells.length ? headerRow.marginRight : ""
    )),
    headerRow.marginLeft,
    headerCells.length < tableWidth ? "" : headerRow.marginRight
  ));
  // delimiter
  const delimiterRow = table.getDelimiterRow();
  if (delimiterRow !== undefined) {
    const delimiterCells = delimiterRow.getCells();
    newRows.push(new TableRow(
      _extendArray(delimiterCells, tableWidth, j => new TableCell(
        _delimiterText(
          Alignment.NONE,
          j === delimiterCells.length
            ? Math.max(options.minDelimiterWidth, delimiterRow.marginRight.length - 2)
            : options.minDelimiterWidth
        )
      )),
      delimiterRow.marginLeft,
      delimiterCells.length < tableWidth ? "" : delimiterRow.marginRight
    ));
  }
  else {
    newRows.push(new TableRow(
      _extendArray([], tableWidth, () => new TableCell(
        _delimiterText(Alignment.NONE, options.minDelimiterWidth)
      )),
      "",
      ""
    ));
  }
  // body
  for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
    const row = rows[i];
    const cells = row.getCells();
    newRows.push(new TableRow(
      _extendArray(cells, tableWidth, j => new TableCell(
        j === cells.length ? row.marginRight : ""
      )),
      row.marginLeft,
      cells.length < tableWidth ? "" : row.marginRight
    ));
  }
  return {
    table            : new Table(newRows),
    delimiterInserted: delimiterRow === undefined
  };
}

/**
 * Calculates the width of a text based on characters' EAW properties.
 *
 * @private
 * @param {string} text
 * @param {Object} options -
 *
 * | property name     | type                               |
 * | ----------------- | ---------------------------------- |
 * | `normalize`       | {@link boolean}                    |
 * | `wideChars`       | {@link Set}&lt;{@link string} &gt; |
 * | `narrowChars`     | {@link Set}&lt;{@link string} &gt; |
 * | `ambiguousAsWide` | {@link boolean}                    |
 *
 * @returns {number} Calculated width of the text.
 */
function _computeTextWidth(text, options) {
  const normalized = options.normalize ? text.normalize("NFC") : text;
  let w = 0;
  for (const char of normalized) {
    if (options.wideChars.has(char)) {
      w += 2;
      continue;
    }
    if (options.narrowChars.has(char)) {
      w += 1;
      continue;
    }
    switch (meaw.getEAW(char)) {
    case "F":
    case "W":
      w += 2;
      break;
    case "A":
      w += options.ambiguousAsWide ? 2 : 1;
      break;
    default:
      w += 1;
    }
  }
  return w;
}

/**
 * Returns a aligned cell content.
 *
 * @private
 * @param {string} text
 * @param {number} width
 * @param {Alignment} alignment
 * @param {Object} options - Options for computing text width.
 * @returns {string}
 * @throws {Error} Unknown alignment.
 * @throws {Error} Unexpected default alignment.
 */
function _alignText(text, width, alignment, options) {
  const space = width - _computeTextWidth(text, options);
  if (space < 0) {
    return text;
  }
  switch (alignment) {
  case Alignment.NONE:
    throw new Error("Unexpected default alignment");
  case Alignment.LEFT:
    return text + " ".repeat(space);
  case Alignment.RIGHT:
    return " ".repeat(space) + text;
  case Alignment.CENTER:
    return " ".repeat(Math.floor(space / 2))
      + text
      + " ".repeat(Math.ceil(space / 2));
  default:
    throw new Error("Unknown alignment: " + alignment);
  }
}

/**
 * Just adds one space paddings to both sides of a text.
 *
 * @private
 * @param {string} text
 * @returns {string}
 */
function _padText(text) {
  return ` ${text} `;
}

/**
 * Formats a table.
 *
 * @private
 * @param {Table} table - A table object.
 * @param {Object} options - An object containing options for formatting.
 *
 * | property name       | type                     | description                                             |
 * | ------------------- | ------------------------ | ------------------------------------------------------- |
 * | `minDelimiterWidth` | {@link number}           | Minimum width of delimiters.                            |
 * | `defaultAlignment`  | {@link DefaultAlignment} | Default alignment of columns.                           |
 * | `headerAlignment`   | {@link HeaderAlignment}  | Alignment of header cells.                              |
 * | `textWidthOptions`  | {@link Object}           | An object containing options for computing text widths. |
 *
 * `options.textWidthOptions` must contain the following options.
 *
 * | property name     | type                              | description                                         |
 * | ----------------- | --------------------------------- | --------------------------------------------------- |
 * | `normalize`       | {@link boolean}                   | Normalize texts before computing text widths.       |
 * | `wideChars`       | {@link Set}&lt;{@link string}&gt; | Set of characters that should be treated as wide.   |
 * | `narrowChars`     | {@link Set}&lt;{@link string}&gt; | Set of characters that should be treated as narrow. |
 * | `ambiguousAsWide` | {@link boolean}                   | Treat East Asian Ambiguous characters as wide.      |
 *
 * @returns {Object} An object that represents the result of formatting.
 *
 * | property name   | type           | description                                    |
 * | --------------- | -------------- | ---------------------------------------------- |
 * | `table`         | {@link Table}  | A formatted table object.                      |
 * | `marginLeft`    | {@link string} | The common left margin of the formatted table. |
 */
function _formatTable(table, options) {
  const tableHeight = table.getHeight();
  const tableWidth = table.getWidth();
  if (tableHeight === 0) {
    return {
      table,
      marginLeft: ""
    };
  }
  const marginLeft = table.getRowAt(0).marginLeft;
  if (tableWidth === 0) {
    const rows = new Array(tableHeight).fill()
      .map(() => new TableRow([], marginLeft, ""));
    return {
      table: new Table(rows),
      marginLeft
    };
  }
  // compute column widths
  const delimiterRow = table.getDelimiterRow();
  const columnWidths = new Array(tableWidth).fill(0);
  if (delimiterRow !== undefined) {
    const delimiterRowWidth = delimiterRow.getWidth();
    for (let j = 0; j < delimiterRowWidth; j++) {
      columnWidths[j] = options.minDelimiterWidth;
    }
  }
  for (let i = 0; i < tableHeight; i++) {
    if (delimiterRow !== undefined && i === 1) {
      continue;
    }
    const row = table.getRowAt(i);
    const rowWidth = row.getWidth();
    for (let j = 0; j < rowWidth; j++) {
      columnWidths[j] = Math.max(
        columnWidths[j],
        _computeTextWidth(row.getCellAt(j).content, options.textWidthOptions)
      );
    }
  }
  // get column alignments
  const alignments = delimiterRow !== undefined
    ? _extendArray(
      delimiterRow.getCells().map(cell => cell.getAlignment()),
      tableWidth,
      () => options.defaultAlignment
    )
    : new Array(tableWidth).fill(options.defaultAlignment);
  // format
  const rows = [];
  // header
  const headerRow = table.getRowAt(0);
  rows.push(new TableRow(
    headerRow.getCells().map((cell, j) =>
      new TableCell(_padText(_alignText(
        cell.content,
        columnWidths[j],
        options.headerAlignment === HeaderAlignment.FOLLOW
          ? (alignments[j] === Alignment.NONE ? options.defaultAlignment : alignments[j])
          : options.headerAlignment,
        options.textWidthOptions
      )))
    ),
    marginLeft,
    ""
  ));
  // delimiter
  if (delimiterRow !== undefined) {
    rows.push(new TableRow(
      delimiterRow.getCells().map((cell, j) =>
        new TableCell(_delimiterText(alignments[j], columnWidths[j]))
      ),
      marginLeft,
      ""
    ));
  }
  // body
  for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
    const row = table.getRowAt(i);
    rows.push(new TableRow(
      row.getCells().map((cell, j) =>
        new TableCell(_padText(_alignText(
          cell.content,
          columnWidths[j],
          alignments[j] === Alignment.NONE ? options.defaultAlignment : alignments[j],
          options.textWidthOptions
        )))
      ),
      marginLeft,
      ""
    ));
  }
  return {
    table: new Table(rows),
    marginLeft
  };
}

/**
 * Formats a table weakly.
 * Rows are formatted independently to each other, cell contents are just trimmed and not aligned.
 * This is useful when using a non-monospaced font or dealing with wide tables.
 *
 * @private
 * @param {Table} table - A table object.
 * @param {Object} options - An object containing options for formatting.
 * The function accepts the same option object for {@link formatTable}, but properties not listed
 * here are just ignored.
 *
 * | property name       | type           | description          |
 * | ------------------- | -------------- | -------------------- |
 * | `minDelimiterWidth` | {@link number} | Width of delimiters. |
 *
 * @returns {Object} An object that represents the result of formatting.
 *
 * | property name   | type           | description                                    |
 * | --------------- | -------------- | ---------------------------------------------- |
 * | `table`         | {@link Table}  | A formatted table object.                      |
 * | `marginLeft`    | {@link string} | The common left margin of the formatted table. |
 */
function _weakFormatTable(table, options) {
  const tableHeight = table.getHeight();
  const tableWidth = table.getWidth();
  if (tableHeight === 0) {
    return {
      table,
      marginLeft: ""
    };
  }
  const marginLeft = table.getRowAt(0).marginLeft;
  if (tableWidth === 0) {
    const rows = new Array(tableHeight).fill()
      .map(() => new TableRow([], marginLeft, ""));
    return {
      table: new Table(rows),
      marginLeft
    };
  }
  const delimiterRow = table.getDelimiterRow();
  // format
  const rows = [];
  // header
  const headerRow = table.getRowAt(0);
  rows.push(new TableRow(
    headerRow.getCells().map(cell =>
      new TableCell(_padText(cell.content))
    ),
    marginLeft,
    ""
  ));
  // delimiter
  if (delimiterRow !== undefined) {
    rows.push(new TableRow(
      delimiterRow.getCells().map(cell =>
        new TableCell(_delimiterText(cell.getAlignment(), options.minDelimiterWidth))
      ),
      marginLeft,
      ""
    ));
  }
  // body
  for (let i = delimiterRow !== undefined ? 2 : 1; i < tableHeight; i++) {
    const row = table.getRowAt(i);
    rows.push(new TableRow(
      row.getCells().map(cell =>
        new TableCell(_padText(cell.content))
      ),
      marginLeft,
      ""
    ));
  }
  return {
    table: new Table(rows),
    marginLeft
  };
}

/**
 * Represents table format type.
 *
 * - `FormatType.NORMAL` - Formats table normally.
 * - `FormatType.WEAK` - Formats table weakly, rows are formatted independently to each other, cell
 *   contents are just trimmed and not aligned.
 *
 * @type {Object}
 */
const FormatType = Object.freeze({
  NORMAL: "normal",
  WEAK  : "weak"
});


/**
 * Formats a table.
 *
 * @private
 * @param {Table} table - A table object.
 * @param {Object} options - An object containing options for formatting.
 *
 * | property name       | type                     | description                                             |
 * | ------------------- | ------------------------ | ------------------------------------------------------- |
 * | `formatType`        | {@link FormatType}       | Format type, normal or weak.                            |
 * | `minDelimiterWidth` | {@link number}           | Minimum width of delimiters.                            |
 * | `defaultAlignment`  | {@link DefaultAlignment} | Default alignment of columns.                           |
 * | `headerAlignment`   | {@link HeaderAlignment}  | Alignment of header cells.                              |
 * | `textWidthOptions`  | {@link Object}           | An object containing options for computing text widths. |
 *
 * `options.textWidthOptions` must contain the following options.
 *
 * | property name     | type                              | description                                         |
 * | ----------------- | --------------------------------- | --------------------------------------------------- |
 * | `normalize`       | {@link boolean}                   | Normalize texts before computing text widths.       |
 * | `wideChars`       | {@link Set}&lt;{@link string}&gt; | Set of characters that should be treated as wide.   |
 * | `narrowChars`     | {@link Set}&lt;{@link string}&gt; | Set of characters that should be treated as narrow. |
 * | `ambiguousAsWide` | {@link boolean}                   | Treat East Asian Ambiguous characters as wide.      |
 *
 * @returns {Object} An object that represents the result of formatting.
 *
 * | property name   | type           | description                                    |
 * | --------------- | -------------- | ---------------------------------------------- |
 * | `table`         | {@link Table}  | A formatted table object.                      |
 * | `marginLeft`    | {@link string} | The common left margin of the formatted table. |
 *
 * @throws {Error} Unknown format type.
 */
function formatTable(table, options) {
  switch (options.formatType) {
  case FormatType.NORMAL:
    return _formatTable(table, options);
  case FormatType.WEAK:
    return _weakFormatTable(table, options);
  default:
    throw new Error("Unknown format type: " + options.formatType);
  }
}

/**
 * Alters a column's alignment of a table.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} columnIndex - An index of the column.
 * @param {Alignment} alignment - A new alignment of the column.
 * @param {Object} options - An object containing options for completion.
 *
 * | property name       | type           | description          |
 * | ------------------- | -------------- | -------------------- |
 * | `minDelimiterWidth` | {@link number} | Width of delimiters. |
 *
 * @returns {Table} An altered table object.
 * If the column index is out of range, returns the original table.
 */
function alterAlignment(table, columnIndex, alignment, options) {
  const delimiterRow = table.getRowAt(1);
  if (columnIndex < 0 || delimiterRow.getWidth() - 1 < columnIndex) {
    return table;
  }
  const delimiterCells = delimiterRow.getCells();
  delimiterCells[columnIndex] = new TableCell(_delimiterText(alignment, options.minDelimiterWidth));
  const rows = table.getRows();
  rows[1] = new TableRow(delimiterCells, delimiterRow.marginLeft, delimiterRow.marginRight);
  return new Table(rows);
}

/**
 * Inserts a row to a table.
 * The row is always inserted after the header and the delimiter rows, even if the index specifies
 * the header or the delimiter.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} rowIndex - An row index at which a new row will be inserted.
 * @param {TableRow} row - A table row to be inserted.
 * @returns {Table} An altered table obejct.
 */
function insertRow(table, rowIndex, row) {
  const rows = table.getRows();
  rows.splice(Math.max(rowIndex, 2), 0, row);
  return new Table(rows);
}

/**
 * Deletes a row in a table.
 * If the index specifies the header row, the cells are emptied but the row will not be removed.
 * If the index specifies the delimiter row, it does nothing.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} rowIndex - An index of the row to be deleted.
 * @returns {Table} An altered table obejct.
 */
function deleteRow(table, rowIndex) {
  if (rowIndex === 1) {
    return table;
  }
  const rows = table.getRows();
  if (rowIndex === 0) {
    const headerRow = rows[0];
    rows[0] = new TableRow(
      new Array(headerRow.getWidth()).fill(new TableCell("")),
      headerRow.marginLeft,
      headerRow.marginRight
    );
  }
  else {
    rows.splice(rowIndex, 1);
  }
  return new Table(rows);
}

/**
 * Moves a row at the index to the specified destination.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} rowIndex - Index of the row to be moved.
 * @param {number} destIndex - Index of the destination.
 * @returns {Table} An altered table object.
 */
function moveRow(table, rowIndex, destIndex) {
  if (rowIndex <= 1 || destIndex <= 1 || rowIndex === destIndex) {
    return table;
  }
  const rows = table.getRows();
  const row = rows[rowIndex];
  rows.splice(rowIndex, 1);
  rows.splice(destIndex, 0, row);
  return new Table(rows);
}

/**
 * Inserts a column to a table.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} columnIndex - An column index at which the new column will be inserted.
 * @param {Array<TableCell>} column - An array of cells.
 * @param {Object} options - An object containing options for completion.
 *
 * | property name       | type           | description             |
 * | ------------------- | -------------- | ----------------------- |
 * | `minDelimiterWidth` | {@link number} | Width of the delimiter. |
 *
 * @returns {Table} An altered table obejct.
 */
function insertColumn(table, columnIndex, column, options) {
  const rows = table.getRows();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = rows[i].getCells();
    const cell = i === 1
      ? new TableCell(_delimiterText(Alignment.NONE, options.minDelimiterWidth))
      : column[i > 1 ? i - 1 : i];
    cells.splice(columnIndex, 0, cell);
    rows[i] = new TableRow(cells, row.marginLeft, row.marginRight);
  }
  return new Table(rows);
}

/**
 * Deletes a column in a table.
 * If there will be no columns after the deletion, the cells are emptied but the column will not be
 * removed.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} columnIndex - An index of the column to be deleted.
 * @param {Object} options - An object containing options for completion.
 *
 * | property name       | type           | description             |
 * | ------------------- | -------------- | ----------------------- |
 * | `minDelimiterWidth` | {@link number} | Width of the delimiter. |
 *
 * @returns {Table} An altered table object.
 */
function deleteColumn(table, columnIndex, options) {
  const rows = table.getRows();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let cells = row.getCells();
    if (cells.length <= 1) {
      cells = [new TableCell(i === 1
        ? _delimiterText(Alignment.NONE, options.minDelimiterWidth)
        : ""
      )];
    }
    else {
      cells.splice(columnIndex, 1);
    }
    rows[i] = new TableRow(cells, row.marginLeft, row.marginRight);
  }
  return new Table(rows);
}

/**
 * Moves a column at the index to the specified destination.
 *
 * @private
 * @param {Table} table - A completed non-empty table.
 * @param {number} columnIndex - Index of the column to be moved.
 * @param {number} destIndex - Index of the destination.
 * @returns {Table} An altered table object.
 */
function moveColumn(table, columnIndex, destIndex) {
  if (columnIndex === destIndex) {
    return table;
  }
  const rows = table.getRows();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getCells();
    const cell = cells[columnIndex];
    cells.splice(columnIndex, 1);
    cells.splice(destIndex, 0, cell);
    rows[i] = new TableRow(cells, row.marginLeft, row.marginRight);
  }
  return new Table(rows);
}

/**
 * The `Insert` class represents an insertion of a line.
 *
 * @private
 */
class Insert {
  /**
   * Creats a new `Insert` object.
   *
   * @param {number} row - Row index, starts from `0`.
   * @param {string} line - A string to be inserted at the row.
   */
  constructor(row, line) {
    /** @private */
    this._row = row;
    /** @private */
    this._line = line;
  }

  /**
   * Row index, starts from `0`.
   *
   * @type {number}
   */
  get row() {
    return this._row;
  }

  /**
   * A string to be inserted.
   *
   * @type {string}
   */
  get line() {
    return this._line;
  }
}

/**
 * The `Delete` class represents a deletion of a line.
 *
 * @private
 */
class Delete {
  /**
   * Creates a new `Delete` object.
   *
   * @param {number} row - Row index, starts from `0`.
   */
  constructor(row) {
    /** @private */
    this._row = row;
  }

  /**
   * Row index, starts from `0`.
   *
   * @type {number}
   */
  get row() {
    return this._row;
  }
}

/**
 * Applies a command to the text editor.
 *
 * @private
 * @param {ITextEditor} textEditor - An interface to the text editor.
 * @param {Insert|Delete} command - A command.
 * @param {number} rowOffset - Offset to the row index of the command.
 * @returns {undefined}
 */
function _applyCommand(textEditor, command, rowOffset) {
  if (command instanceof Insert) {
    textEditor.insertLine(rowOffset + command.row, command.line);
  }
  else if (command instanceof Delete) {
    textEditor.deleteLine(rowOffset + command.row);
  }
  else {
    throw new Error("Unknown command");
  }
}

/**
 * Apply an edit script (array of commands) to the text editor.
 *
 * @private
 * @param {ITextEditor} textEditor - An interface to the text editor.
 * @param {Array<Insert|Delete>} script - An array of commands.
 * The commands are applied sequentially in the order of the array.
 * @param {number} rowOffset - Offset to the row index of the commands.
 * @returns {undefined}
 */
function applyEditScript(textEditor, script, rowOffset) {
  for (const command of script) {
    _applyCommand(textEditor, command, rowOffset);
  }
}


/**
 * Linked list used to remember edit script.
 *
 * @private
 */
class IList {
  get car() {
    throw new Error("Not implemented");
  }

  get cdr() {
    throw new Error("Not implemented");
  }

  isEmpty() {
    throw new Error("Not implemented");
  }

  unshift(value) {
    return new Cons(value, this);
  }

  toArray() {
    const arr = [];
    let rest = this;
    while (!rest.isEmpty()) {
      arr.push(rest.car);
      rest = rest.cdr;
    }
    return arr;
  }
}

/**
 * @private
 */
class Nil extends IList {
  constructor() {
    super();
  }

  get car() {
    throw new Error("Empty list");
  }

  get cdr() {
    throw new Error("Empty list");
  }

  isEmpty() {
    return true;
  }
}

/**
 * @private
 */
class Cons extends IList {
  constructor(car, cdr) {
    super();
    this._car = car;
    this._cdr = cdr;
  }

  get car() {
    return this._car;
  }

  get cdr() {
    return this._cdr;
  }

  isEmpty() {
    return false;
  }
}

const nil = new Nil();


/**
 * Computes the shortest edit script between two arrays of strings.
 *
 * @private
 * @param {Array<string>} from - An array of string the edit starts from.
 * @param {Array<string>} to - An array of string the edit goes to.
 * @param {number} [limit=-1] - Upper limit of edit distance to be searched.
 * If negative, there is no limit.
 * @returns {Array<Insert|Delete>|undefined} The shortest edit script that turns `from` into `to`;
 * `undefined` if no edit script is found in the given range.
 */
function shortestEditScript(from, to, limit = -1) {
  const fromLen = from.length;
  const toLen = to.length;
  const maxd = limit >= 0 ? Math.min(limit, fromLen + toLen) : fromLen + toLen;
  const mem = new Array(Math.min(maxd, fromLen) + Math.min(maxd, toLen) + 1);
  const offset = Math.min(maxd, fromLen);
  for (let d = 0; d <= maxd; d++) {
    const mink = d <= fromLen ? -d :  d - 2 * fromLen;
    const maxk = d <= toLen   ?  d : -d + 2 * toLen;
    for (let k = mink; k <= maxk; k += 2) {
      let i;
      let script;
      if (d === 0) {
        i = 0;
        script = nil;
      }
      else if (k === -d) {
        i = mem[offset + k + 1].i + 1;
        script = mem[offset + k + 1].script.unshift(new Delete(i + k));
      }
      else if (k === d) {
        i = mem[offset + k - 1].i;
        script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
      }
      else {
        const vi = mem[offset + k + 1].i + 1;
        const hi = mem[offset + k - 1].i;
        if (vi > hi) {
          i = vi;
          script = mem[offset + k + 1].script.unshift(new Delete(i + k));
        }
        else {
          i = hi;
          script = mem[offset + k - 1].script.unshift(new Insert(i + k - 1, to[i + k - 1]));
        }
      }
      while (i < fromLen && i + k < toLen && from[i] === to[i + k]) {
        i += 1;
      }
      if (k === toLen - fromLen && i === fromLen) {
        return script.toArray().reverse();
      }
      mem[offset + k] = { i, script };
    }
  }
  return undefined;
}

/**
 * The `ITextEditor` represents an interface to a text editor.
 *
 * @interface
 */
class ITextEditor {
  /**
   * Gets the current cursor position.
   *
   * @returns {Point} A point object that represents the cursor position.
   */
  getCursorPosition() {
    throw new Error("Not implemented: getCursorPosition");
  }

  /**
   * Sets the cursor position to a specified one.
   *
   * @param {Point} pos - A point object which the cursor position is set to.
   * @returns {undefined}
   */
  setCursorPosition(pos) {
    throw new Error("Not implemented: setCursorPosition");
  }

  /**
   * Sets the selection range.
   * This method also expects the cursor position to be moved as the end of the selection range.
   *
   * @param {Range} range - A range object that describes a selection range.
   * @returns {undefined}
   */
  setSelectionRange(range) {
    throw new Error("Not implemented: setSelectionRange");
  }

  /**
   * Gets the last row index of the text editor.
   *
   * @returns {number} The last row index.
   */
  getLastRow() {
    throw new Error("Not implemented: getLastRow");
  }

  /**
   * Checks if the editor accepts a table at a row to be editted.
   * It should return `false` if, for example, the row is in a code block (not Markdown).
   *
   * @param {number} row - A row index in the text editor.
   * @returns {boolean} `true` if the table at the row can be editted.
   */
  acceptsTableEdit(row) {
    throw new Error("Not implemented: acceptsTableEdit");
  }

  /**
   * Gets a line string at a row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @returns {string} The line at the specified row.
   * The line must not contain an EOL like `"\n"` or `"\r"`.
   */
  getLine(row) {
    throw new Error("Not implemented: getLine");
  }

  /**
   * Inserts a line at a specified row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @param {string} line - A string to be inserted.
   * This must not contain an EOL like `"\n"` or `"\r"`.
   * @return {undefined}
   */
  insertLine(row, line) {
    throw new Error("Not implemented: insertLine");
  }

  /**
   * Deletes a line at a specified row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @returns {undefined}
   */
  deleteLine(row) {
    throw new Error("Not implemented: deleteLine");
  }

  /**
   * Replace lines in a specified range.
   *
   * @param {number} startRow - Start row index, starts from `0`.
   * @param {number} endRow - End row index.
   * Lines from `startRow` to `endRow - 1` is replaced.
   * @param {Array<string>} lines - An array of string.
   * Each strings must not contain an EOL like `"\n"` or `"\r"`.
   * @returns {undefined}
   */
  replaceLines(startRow, endRow, lines) {
    throw new Error("Not implemented: replaceLines");
  }

  /**
   * Batches multiple operations as a single undo/redo step.
   *
   * @param {Function} func - A callback function that executes some operations on the text editor.
   * @returns {undefined}
   */
  transact(func) {
    throw new Error("Not implemented: transact");
  }
}

/**
 * Reads a property of an object if exists; otherwise uses a default value.
 *
 * @private
 * @param {*} obj - An object. If a non-object value is specified, the default value is used.
 * @param {string} key - A key (or property name).
 * @param {*} defaultVal - A default value that is used when a value does not exist.
 * @returns {*} A read value or the default value.
 */
function _value(obj, key, defaultVal) {
  return (typeof obj === "object" && obj !== null && obj[key] !== undefined)
    ? obj[key]
    : defaultVal;
}

/**
 * Reads multiple properties of an object if exists; otherwise uses default values.
 *
 * @private
 * @param {*} obj - An object. If a non-object value is specified, the default value is used.
 * @param {Object} keys - An object that consists of pairs of a key and a default value.
 * @returns {Object} A new object that contains read values.
 */
function _values(obj, keys) {
  const res = {};
  for (const [key, defaultVal] of Object.entries(keys)) {
    res[key] = _value(obj, key, defaultVal);
  }
  return res;
}

/**
 * Reads options for the formatter from an object.
 * The default values are used for options that are not specified.
 *
 * @param {Object} obj - An object containing options.
 * The available options and default values are listed below.
 *
 * | property name       | type                              | description                                             | default value            |
 * | ------------------- | --------------------------------- | ------------------------------------------------------- | ------------------------ |
 * | `leftMarginChars`   | {@link Set}&lt;{@link string}&gt; | A set of additional left margin characters.             | `new Set()`              |
 * | `formatType`        | {@link FormatType}                | Format type, normal or weak.                            | `FormatType.NORMAL`      |
 * | `minDelimiterWidth` | {@link number}                    | Minimum width of delimiters.                            | `3`                      |
 * | `defaultAlignment`  | {@link DefaultAlignment}          | Default alignment of columns.                           | `DefaultAlignment.LEFT`  |
 * | `headerAlignment`   | {@link HeaderAlignment}           | Alignment of header cells.                              | `HeaderAlignment.FOLLOW` |
 * | `textWidthOptions`  | {@link Object}                    | An object containing options for computing text widths. |                          |
 * | `smartCursor`       | {@link boolean}                   | Enables "Smart Cursor" feature.                         | `false`                  |
 *
 * The available options for `obj.textWidthOptions` are the following ones.
 *
 * | property name     | type                              | description                                           | default value |
 * | ----------------- | --------------------------------- | ----------------------------------------------------- | ------------- |
 * | `normalize`       | {@link boolean}                   | Normalizes texts before computing text widths.        | `true`        |
 * | `wideChars`       | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as wide.   | `new Set()`   |
 * | `narrowChars`     | {@link Set}&lt;{@link string}&gt; | A set of characters that should be treated as narrow. | `new Set()`   |
 * | `ambiguousAsWide` | {@link boolean}                   | Treats East Asian Ambiguous characters as wide.       | `false`       |
 *
 * @returns {Object} - An object that contains complete options.
 */
function options(obj) {
  const res = _values(obj, {
    leftMarginChars  : new Set(),
    formatType       : FormatType.NORMAL,
    minDelimiterWidth: 3,
    defaultAlignment : DefaultAlignment.LEFT,
    headerAlignment  : HeaderAlignment.FOLLOW,
    smartCursor      : false
  });
  res.textWidthOptions = _values(obj.textWidthOptions, {
    normalize      : true,
    wideChars      : new Set(),
    narrowChars    : new Set(),
    ambiguousAsWide: false
  });
  return res;
}

/**
 * Creates a regular expression object that matches a table row.
 *
 * @param {Set<string>} leftMarginChars - A set of additional left margin characters.
 * A pipe `|`, a backslash `\`, and a backquote will be ignored.
 * @returns {RegExp} A regular expression object that matches a table row.
 */
function _createIsTableRowRegex(leftMarginChars) {
  return new RegExp(`^${marginRegexSrc(leftMarginChars)}\\|`, "u");
}

/**
 * Computes new focus offset from information of completed and formatted tables.
 *
 * @private
 * @param {Focus} focus - A focus.
 * @param {Table} table - A completed but not formatted table with original cell contents.
 * @param {Object} formatted - Information of the formatted table.
 * @param {boolean} moved - Indicates whether the focus position is moved by a command or not.
 * @returns {number}
 */
function _computeNewOffset(focus, table, formatted, moved) {
  if (moved) {
    const formattedFocusedCell = formatted.table.getFocusedCell(focus);
    if (formattedFocusedCell !== undefined) {
      return formattedFocusedCell.computeRawOffset(0);
    }
    else {
      return focus.column < 0 ? formatted.marginLeft.length : 0;
    }
  }
  else {
    const focusedCell = table.getFocusedCell(focus);
    const formattedFocusedCell = formatted.table.getFocusedCell(focus);
    if (focusedCell !== undefined && formattedFocusedCell !== undefined) {
      const contentOffset = Math.min(
        focusedCell.computeContentOffset(focus.offset),
        formattedFocusedCell.content.length
      );
      return formattedFocusedCell.computeRawOffset(contentOffset);
    }
    else {
      return focus.column < 0 ? formatted.marginLeft.length : 0;
    }
  }
}

/**
 * The `TableEditor` class is at the center of the markdown-table-editor.
 * When a command is executed, it reads a table from the text editor, does some operation on the
 * table, and then apply the result to the text editor.
 *
 * To use this class, the text editor (or an interface to it) must implement {@link ITextEditor}.
 */
class TableEditor {
  /**
   * Creates a new table editor instance.
   *
   * @param {ITextEditor} textEditor - A text editor interface.
   */
  constructor(textEditor) {
    /** @private */
    this._textEditor = textEditor;
    // smart cursor
    /** @private */
    this._scActive = false;
    /** @private */
    this._scTablePos = null;
    /** @private */
    this._scStartFocus = null;
    /** @private */
    this._scLastFocus = null;
  }

  /**
   * Resets the smart cursor.
   * Call this method when the table editor is inactivated.
   *
   * @returns {undefined}
   */
  resetSmartCursor() {
    this._scActive = false;
  }

  /**
   * Checks if the cursor is in a table row.
   * This is useful to check whether the table editor should be activated or not.
   *
   * @param {Object} options - See {@link options}.
   * @returns {boolean} `true` if the cursor is in a table row.
   */
  cursorIsInTable(options) {
    const re = _createIsTableRowRegex(options.leftMarginChars);
    const pos = this._textEditor.getCursorPosition();
    return this._textEditor.acceptsTableEdit(pos.row)
      && re.test(this._textEditor.getLine(pos.row));
  }

  /**
   * Finds a table under the current cursor position.
   *
   * @private
   * @param {Object} options - See {@link options}.
   * @returns {Object|undefined} An object that contains information about the table;
   * `undefined` if there is no table.
   * The return object contains the properties listed in the table.
   *
   * | property name   | type                                | description                                                              |
   * | --------------- | ----------------------------------- | ------------------------------------------------------------------------ |
   * | `range`         | {@link Range}                       | The range of the table.                                                  |
   * | `lines`         | {@link Array}&lt;{@link string}&gt; | An array of the lines in the range.                                      |
   * | `table`         | {@link Table}                       | A table object read from the text editor.                                |
   * | `focus`         | {@link Focus}                       | A focus object that represents the current cursor position in the table. |
   */
  _findTable(options) {
    const re = _createIsTableRowRegex(options.leftMarginChars);
    const pos = this._textEditor.getCursorPosition();
    const lastRow = this._textEditor.getLastRow();
    const lines = [];
    let startRow = pos.row;
    let endRow = pos.row;
    // current line
    {
      const line = this._textEditor.getLine(pos.row);
      if (!this._textEditor.acceptsTableEdit(pos.row) || !re.test(line)) {
        return undefined;
      }
      lines.push(line);
    }
    // previous lines
    for (let row = pos.row - 1; row >= 0; row--) {
      const line = this._textEditor.getLine(row);
      if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
        break;
      }
      lines.unshift(line);
      startRow = row;
    }
    // next lines
    for (let row = pos.row + 1; row <= lastRow; row++) {
      const line = this._textEditor.getLine(row);
      if (!this._textEditor.acceptsTableEdit(row) || !re.test(line)) {
        break;
      }
      lines.push(line);
      endRow = row;
    }
    const range = new Range(
      new Point(startRow, 0),
      new Point(endRow, lines[lines.length - 1].length)
    );
    const table = readTable(lines, options);
    const focus = table.focusOfPosition(pos, startRow);
    return { range, lines, table, focus };
  }

  /**
   * Finds a table and does an operation with it.
   *
   * @private
   * @param {Object} options - See {@link options}.
   * @param {Function} func - A function that does some operation on table information obtained by
   * {@link TableEditor#_findTable}.
   * @returns {undefined}
   */
  _withTable(options, func) {
    const info = this._findTable(options);
    if (info === undefined) {
      return;
    }
    func(info);
  }

  /**
   * Updates lines in a given range in the text editor.
   *
   * @private
   * @param {number} startRow - Start row index, starts from `0`.
   * @param {number} endRow - End row index.
   * Lines from `startRow` to `endRow - 1` are replaced.
   * @param {Array<string>} newLines - New lines.
   * @param {Array<string>} [oldLines=undefined] - Old lines to be replaced.
   * @returns {undefined}
   */
  _updateLines(startRow, endRow, newLines, oldLines = undefined) {
    if (oldLines !== undefined) {
      // apply the shortest edit script
      // if a table is edited in a normal manner, the edit distance never exceeds 3
      const ses = shortestEditScript(oldLines, newLines, 3);
      if (ses !== undefined) {
        applyEditScript(this._textEditor, ses, startRow);
        return;
      }
    }
    this._textEditor.replaceLines(startRow, endRow, newLines);
  }

  /**
   * Moves the cursor position to the focused cell,
   *
   * @private
   * @param {number} startRow - Row index where the table starts in the text editor.
   * @param {Table} table - A table.
   * @param {Focus} focus - A focus to which the cursor will be moved.
   * @returns {undefined}
   */
  _moveToFocus(startRow, table, focus) {
    const pos = table.positionOfFocus(focus, startRow);
    if (pos !== undefined) {
      this._textEditor.setCursorPosition(pos);
    }
  }

  /**
   * Selects the focused cell.
   * If the cell has no content to be selected, then just moves the cursor position.
   *
   * @private
   * @param {number} startRow - Row index where the table starts in the text editor.
   * @param {Table} table - A table.
   * @param {Focus} focus - A focus to be selected.
   * @returns {undefined}
   */
  _selectFocus(startRow, table, focus) {
    const range = table.selectionRangeOfFocus(focus, startRow);
    if (range !== undefined) {
      this._textEditor.setSelectionRange(range);
    }
    else {
      this._moveToFocus(startRow, table, focus);
    }
  }

  /**
   * Formats the table under the cursor.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  format(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // format
      const formatted = formatTable(completed.table, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, completed.table, formatted, false));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
    });
  }

  /**
   * Formats and escapes from the table.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  escape(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      // complete
      const completed = completeTable(table, options);
      // format
      const formatted = formatTable(completed.table, options);
      // apply
      const newRow = range.end.row + (completed.delimiterInserted ? 2 : 1);
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        let newPos;
        if (newRow > this._textEditor.getLastRow()) {
          this._textEditor.insertLine(newRow, "");
          newPos = new Point(newRow, 0);
        }
        else {
          const re = new RegExp(`^${marginRegexSrc(options.leftMarginChars)}`, "u");
          const nextLine = this._textEditor.getLine(newRow);
          const margin = re.exec(nextLine)[0];
          newPos = new Point(newRow, margin.length);
        }
        this._textEditor.setCursorPosition(newPos);
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Alters the alignment of the focused column.
   *
   * @param {Alignment} alignment - New alignment.
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  alignColumn(alignment, options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // alter alignment
      let altered = completed.table;
      if (0 <= newFocus.column && newFocus.column <= altered.getHeaderWidth() - 1) {
        altered = alterAlignment(completed.table, newFocus.column, alignment, options);
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, completed.table, formatted, false));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
    });
  }

  /**
   * Selects the focused cell content.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  selectCell(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // format
      const formatted = formatTable(completed.table, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, completed.table, formatted, false));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._selectFocus(range.start.row, formatted.table, newFocus);
      });
    });
  }

  /**
   * Moves the focus to another cell.
   *
   * @param {number} rowOffset - Offset in row.
   * @param {number} columnOffset - Offset in column.
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  moveFocus(rowOffset, columnOffset, options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      const startFocus = newFocus;
      // move focus
      if (rowOffset !== 0) {
        const height = completed.table.getHeight();
        // skip delimiter row
        const skip =
            newFocus.row < 1 && newFocus.row + rowOffset >= 1 ? 1
          : newFocus.row > 1 && newFocus.row + rowOffset <= 1 ? -1
          : 0;
        newFocus = newFocus.setRow(
          Math.min(Math.max(newFocus.row + rowOffset + skip, 0), height <= 2 ? 0 : height - 1)
        );
      }
      if (columnOffset !== 0) {
        const width = completed.table.getHeaderWidth();
        if (!(newFocus.column < 0 && columnOffset < 0)
          && !(newFocus.column > width - 1 && columnOffset > 0)) {
          newFocus = newFocus.setColumn(
            Math.min(Math.max(newFocus.column + columnOffset, 0), width - 1)
          );
        }
      }
      const moved = !newFocus.posEquals(startFocus);
      // format
      const formatted = formatTable(completed.table, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, completed.table, formatted, moved));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        if (moved) {
          this._selectFocus(range.start.row, formatted.table, newFocus);
        }
        else {
          this._moveToFocus(range.start.row, formatted.table, newFocus);
        }
      });
      if (moved) {
        this.resetSmartCursor();
      }
    });
  }

  /**
   * Moves the focus to the next cell.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  nextCell(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      // reset smart cursor if moved
      const focusMoved = (this._scTablePos !== null && !range.start.equals(this._scTablePos))
        || (this._scLastFocus !== null && !focus.posEquals(this._scLastFocus));
      if (this._scActive && focusMoved) {
        this.resetSmartCursor();
      }
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      const startFocus = newFocus;
      let altered = completed.table;
      // move focus
      if (newFocus.row === 1) {
        // move to next row
        newFocus = newFocus.setRow(2);
        if (options.smartCursor) {
          if (newFocus.column < 0 || altered.getHeaderWidth() - 1 < newFocus.column) {
            newFocus = newFocus.setColumn(0);
          }
        }
        else {
          newFocus = newFocus.setColumn(0);
        }
        // insert an empty row if needed
        if (newFocus.row > altered.getHeight() - 1) {
          const row = new Array(altered.getHeaderWidth()).fill(new TableCell(""));
          altered = insertRow(altered, altered.getHeight(), new TableRow(row, "", ""));
        }
      }
      else {
        // insert an empty column if needed
        if (newFocus.column > altered.getHeaderWidth() - 1) {
          const column = new Array(altered.getHeight() - 1).fill(new TableCell(""));
          altered = insertColumn(altered, altered.getHeaderWidth(), column, options);
        }
        // move to next column
        newFocus = newFocus.setColumn(newFocus.column + 1);
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, true));
      // apply
      const newLines = formatted.table.toLines();
      if (newFocus.column > formatted.table.getHeaderWidth() - 1) {
        // add margin
        newLines[newFocus.row] += " ";
        newFocus = newFocus.setOffset(1);
      }
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, newLines, lines);
        this._selectFocus(range.start.row, formatted.table, newFocus);
      });
      if (options.smartCursor) {
        if (!this._scActive) {
          // activate smart cursor
          this._scActive = true;
          this._scTablePos = range.start;
          if (startFocus.column < 0 || formatted.table.getHeaderWidth() - 1 < startFocus.column) {
            this._scStartFocus = new Focus(startFocus.row, 0, 0);
          }
          else {
            this._scStartFocus = startFocus;
          }
        }
        this._scLastFocus = newFocus;
      }
    });
  }

  /**
   * Moves the focus to the previous cell.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  previousCell(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      const startFocus = newFocus;
      // move focus
      if (newFocus.row === 0) {
        if (newFocus.column > 0) {
          newFocus = newFocus.setColumn(newFocus.column - 1);
        }
      }
      else if (newFocus.row === 1) {
        newFocus = new Focus(0, completed.table.getHeaderWidth() - 1, newFocus.offset);
      }
      else {
        if (newFocus.column > 0) {
          newFocus = newFocus.setColumn(newFocus.column - 1);
        }
        else {
          newFocus = new Focus(
            newFocus.row === 2 ? 0 : newFocus.row - 1,
            completed.table.getHeaderWidth() - 1,
            newFocus.offset
          );
        }
      }
      const moved = !newFocus.posEquals(startFocus);
      // format
      const formatted = formatTable(completed.table, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, completed.table, formatted, moved));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        if (moved) {
          this._selectFocus(range.start.row, formatted.table, newFocus);
        }
        else {
          this._moveToFocus(range.start.row, formatted.table, newFocus);
        }
      });
      if (moved) {
        this.resetSmartCursor();
      }
    });
  }

  /**
   * Moves the focus to the next row.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  nextRow(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      // reset smart cursor if moved
      const focusMoved = (this._scTablePos !== null && !range.start.equals(this._scTablePos))
        || (this._scLastFocus !== null && !focus.posEquals(this._scLastFocus));
      if (this._scActive && focusMoved) {
        this.resetSmartCursor();
      }
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      const startFocus = newFocus;
      let altered = completed.table;
      // move focus
      if (newFocus.row === 0) {
        newFocus = newFocus.setRow(2);
      }
      else {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      if (options.smartCursor) {
        if (this._scActive) {
          newFocus = newFocus.setColumn(this._scStartFocus.column);
        }
        else if (newFocus.column < 0 || altered.getHeaderWidth() - 1 < newFocus.column) {
          newFocus = newFocus.setColumn(0);
        }
      }
      else {
        newFocus = newFocus.setColumn(0);
      }
      // insert empty row if needed
      if (newFocus.row > altered.getHeight() - 1) {
        const row = new Array(altered.getHeaderWidth()).fill(new TableCell(""));
        altered = insertRow(altered, altered.getHeight(), new TableRow(row, "", ""));
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, true));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._selectFocus(range.start.row, formatted.table, newFocus);
      });
      if (options.smartCursor) {
        if (!this._scActive) {
          // activate smart cursor
          this._scActive = true;
          this._scTablePos = range.start;
          if (startFocus.column < 0 || formatted.table.getHeaderWidth() - 1 < startFocus.column) {
            this._scStartFocus = new Focus(startFocus.row, 0, 0);
          }
          else {
            this._scStartFocus = startFocus;
          }
        }
        this._scLastFocus = newFocus;
      }
    });
  }

  /**
   * Inserts an empty row at the current focus.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  insertRow(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // move focus
      if (newFocus.row <= 1) {
        newFocus = newFocus.setRow(2);
      }
      newFocus = newFocus.setColumn(0);
      // insert an empty row
      const row = new Array(completed.table.getHeaderWidth()).fill(new TableCell(""));
      const altered = insertRow(completed.table, newFocus.row, new TableRow(row, "", ""));
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, true));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Deletes a row at the current focus.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  deleteRow(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // delete a row
      let altered = completed.table;
      let moved = false;
      if (newFocus.row !== 1) {
        altered = deleteRow(altered, newFocus.row);
        moved = true;
        if (newFocus.row > altered.getHeight() - 1) {
          newFocus = newFocus.setRow(newFocus.row === 2 ? 0 : newFocus.row - 1);
        }
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, moved));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        if (moved) {
          this._selectFocus(range.start.row, formatted.table, newFocus);
        }
        else {
          this._moveToFocus(range.start.row, formatted.table, newFocus);
        }
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Moves the focused row by the specified offset.
   *
   * @param {number} offset - An offset the row is moved by.
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  moveRow(offset, options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // move row
      let altered = completed.table;
      if (newFocus.row > 1) {
        const dest = Math.min(Math.max(newFocus.row + offset, 2), altered.getHeight() - 1);
        altered = moveRow(altered, newFocus.row, dest);
        newFocus = newFocus.setRow(dest);
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, false));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Inserts an empty column at the current focus.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  insertColumn(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // move focus
      if (newFocus.row === 1) {
        newFocus = newFocus.setRow(0);
      }
      if (newFocus.column < 0) {
        newFocus = newFocus.setColumn(0);
      }
      // insert an empty column
      const column = new Array(completed.table.getHeight() - 1).fill(new TableCell(""));
      const altered = insertColumn(completed.table, newFocus.column, column, options);
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, true));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Deletes a column at the current focus.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  deleteColumn(options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // move focus
      if (newFocus.row === 1) {
        newFocus = newFocus.setRow(0);
      }
      // delete a column
      let altered = completed.table;
      let moved = false;
      if (0 <= newFocus.column && newFocus.column <= altered.getHeaderWidth() - 1) {
        altered = deleteColumn(completed.table, newFocus.column, options);
        moved = true;
        if (newFocus.column > altered.getHeaderWidth() - 1) {
          newFocus = newFocus.setColumn(altered.getHeaderWidth() - 1);
        }
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, moved));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        if (moved) {
          this._selectFocus(range.start.row, formatted.table, newFocus);
        }
        else {
          this._moveToFocus(range.start.row, formatted.table, newFocus);
        }
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Moves the focused column by the specified offset.
   *
   * @param {number} offset - An offset the column is moved by.
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  moveColumn(offset, options) {
    this._withTable(options, ({ range, lines, table, focus }) => {
      let newFocus = focus;
      // complete
      const completed = completeTable(table, options);
      if (completed.delimiterInserted && newFocus.row > 0) {
        newFocus = newFocus.setRow(newFocus.row + 1);
      }
      // move column
      let altered = completed.table;
      if (0 <= newFocus.column && newFocus.column <= altered.getHeaderWidth() - 1) {
        const dest = Math.min(Math.max(newFocus.column + offset, 0), altered.getHeaderWidth() - 1);
        altered = moveColumn(altered, newFocus.column, dest);
        newFocus = newFocus.setColumn(dest);
      }
      // format
      const formatted = formatTable(altered, options);
      newFocus = newFocus.setOffset(_computeNewOffset(newFocus, altered, formatted, false));
      // apply
      this._textEditor.transact(() => {
        this._updateLines(range.start.row, range.end.row + 1, formatted.table.toLines(), lines);
        this._moveToFocus(range.start.row, formatted.table, newFocus);
      });
      this.resetSmartCursor();
    });
  }

  /**
   * Formats all the tables in the text editor.
   *
   * @param {Object} options - See {@link options}.
   * @returns {undefined}
   */
  formatAll(options) {
    this._textEditor.transact(() => {
      const re = _createIsTableRowRegex(options.leftMarginChars);
      let pos = this._textEditor.getCursorPosition();
      let lines = [];
      let startRow = undefined;
      let lastRow = this._textEditor.getLastRow();
      // find tables
      for (let row = 0; row <= lastRow; row++) {
        const line = this._textEditor.getLine(row);
        if (this._textEditor.acceptsTableEdit(row) && re.test(line)) {
          lines.push(line);
          if (startRow === undefined) {
            startRow = row;
          }
        }
        else if (startRow !== undefined) {
          // get table info
          const endRow = row - 1;
          const range = new Range(
            new Point(startRow, 0),
            new Point(endRow, lines[lines.length - 1].length)
          );
          const table = readTable(lines, options);
          const focus = table.focusOfPosition(pos, startRow);
          const focused = focus !== undefined;
          // format
          let newFocus = focus;
          const completed = completeTable(table, options);
          if (focused && completed.delimiterInserted && newFocus.row > 0) {
            newFocus = newFocus.setRow(newFocus.row + 1);
          }
          const formatted = formatTable(completed.table, options);
          if (focused) {
            newFocus = newFocus.setOffset(
              _computeNewOffset(newFocus, completed.table, formatted, false)
            );
          }
          // apply
          const newLines = formatted.table.toLines();
          this._updateLines(range.start.row, range.end.row + 1, newLines, lines);
          // update cursor position
          const diff = newLines.length - lines.length;
          if (focused) {
            pos = formatted.table.positionOfFocus(newFocus, startRow);
          }
          else if (pos.row > endRow) {
            pos = new Point(pos.row + diff, pos.column);
          }
          // reset
          lines = [];
          startRow = undefined;
          // update
          lastRow += diff;
          row += diff;
        }
      }
      if (startRow !== undefined) {
        // get table info
        const endRow = lastRow;
        const range = new Range(
          new Point(startRow, 0),
          new Point(endRow, lines[lines.length - 1].length)
        );
        const table = readTable(lines, options);
        const focus = table.focusOfPosition(pos, startRow);
        // format
        let newFocus = focus;
        const completed = completeTable(table, options);
        if (completed.delimiterInserted && newFocus.row > 0) {
          newFocus = newFocus.setRow(newFocus.row + 1);
        }
        const formatted = formatTable(completed.table, options);
        newFocus = newFocus.setOffset(
          _computeNewOffset(newFocus, completed.table, formatted, false)
        );
        // apply
        const newLines = formatted.table.toLines();
        this._updateLines(range.start.row, range.end.row + 1, newLines, lines);
        pos = formatted.table.positionOfFocus(newFocus, startRow);
      }
      this._textEditor.setCursorPosition(pos);
    });
  }
}

exports.Point = Point;
exports.Range = Range;
exports.Focus = Focus;
exports.Alignment = Alignment;
exports.DefaultAlignment = DefaultAlignment;
exports.HeaderAlignment = HeaderAlignment;
exports.TableCell = TableCell;
exports.TableRow = TableRow;
exports.Table = Table;
exports.readTable = readTable;
exports.FormatType = FormatType;
exports.completeTable = completeTable;
exports.formatTable = formatTable;
exports.alterAlignment = alterAlignment;
exports.insertRow = insertRow;
exports.deleteRow = deleteRow;
exports.moveRow = moveRow;
exports.insertColumn = insertColumn;
exports.deleteColumn = deleteColumn;
exports.moveColumn = moveColumn;
exports.Insert = Insert;
exports.Delete = Delete;
exports.applyEditScript = applyEditScript;
exports.shortestEditScript = shortestEditScript;
exports.ITextEditor = ITextEditor;
exports.options = options;
exports.TableEditor = TableEditor;

});

var DEFAULT_TEXT_WIDTH_OPTIONS = {
    normalize: true,
    wideChars: new Set(),
    narrowChars: new Set(),
    ambiguousAsWide: false,
};
var DEFAULT_OPTIONS = {
    leftMarginChars: new Set(),
    formatType: mteKernel.FormatType.NORMAL,
    minDelimiterWidth: 3,
    defaultAlignment: mteKernel.DefaultAlignment.LEFT,
    headerAlignment: mteKernel.HeaderAlignment.FOLLOW,
    smartCursor: false,
};
var optionsWithDefaults = function (options) { return (__assign(__assign(__assign({}, DEFAULT_OPTIONS), options), { textWidthOptions: options.textWidthOptions
        ? __assign(__assign({}, DEFAULT_TEXT_WIDTH_OPTIONS), options.textWidthOptions) : DEFAULT_TEXT_WIDTH_OPTIONS })); };
var defaultOptions = optionsWithDefaults({});

var ObsidianTextEditor = /** @class */ (function () {
    function ObsidianTextEditor(obj) {
        var _this = this;
        this.getCursorPosition = function () {
            console.log('getCursorPosition was called');
            var position = _this.editor.getCursor();
            return new mteKernel.Point(position.line, position.ch);
        };
        this.setCursorPosition = function (pos) {
            console.log('setCursorPosition was called');
            _this.editor.setCursor({ line: pos.row, ch: pos.column });
        };
        this.setSelectionRange = function (range) {
            console.log('setSelectionRange was called');
            _this.editor.setSelection({ line: range.start.row, ch: range.start.column }, { line: range.end.row, ch: range.end.column });
        };
        this.getLastRow = function () {
            console.log('getLastRow was called');
            return _this.editor.lastLine();
        };
        this.acceptsTableEdit = function (row) {
            console.log("acceptsTableEdit was called on row " + row);
            // TODO: What does this function want?
            return true;
        };
        this.getLine = function (row) {
            console.log("getLine was called on line " + row);
            return _this.editor.getLine(row);
        };
        this.insertLine = function (row, line) {
            console.log("insertLine was called at line " + row);
            console.log("New line: " + line);
            if (row > _this.getLastRow()) {
                _this.editor.replaceRange('\n' + line, { line: row, ch: 0 });
            }
            else {
                _this.editor.replaceRange(line + '\n', { line: row, ch: 0 });
            }
        };
        this.deleteLine = function (row) {
            console.log("deleteLine was called on line " + row);
            _this.editor.replaceRange('', { line: row, ch: 0 }, { line: row + 1, ch: 0 });
        };
        this.replaceLines = function (startRow, endRow, lines) {
            console.log('replaceLines was called');
            console.log("start " + startRow + ", end: " + endRow);
            console.log(lines);
            // Take one off the endRow and instead go to the end of that line
            var realEndRow = endRow - 1;
            var endRowContents = _this.editor.getLine(realEndRow);
            var endRowFinalIndex = endRowContents.length;
            _this.editor.replaceRange(lines, { line: startRow, ch: 0 }, { line: realEndRow, ch: endRowFinalIndex });
        };
        this.transact = function (func) {
            console.log('transact was called');
            _this.editor.operation(function () {
                func();
            });
        };
        console.log('constructor called');
        if ('sourceMode' in obj) {
            this.editor = obj.sourceMode.cmEditor;
        }
        else {
            this.editor = obj;
        }
    }
    return ObsidianTextEditor;
}());

var TableEditorPlugin = /** @class */ (function (_super) {
    __extends(TableEditorPlugin, _super);
    function TableEditorPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inTableWrapper = function (fn) {
            var activeLeaf = _this.app.workspace.activeLeaf;
            if (activeLeaf.view instanceof obsidian.MarkdownView) {
                var ote = new ObsidianTextEditor(activeLeaf.view);
                var te = new mteKernel.TableEditor(ote);
                if (te.cursorIsInTable(defaultOptions)) {
                    fn(te);
                }
            }
        };
        _this.nextCell = function (te) {
            te.nextCell(_this.settings.asOptions());
        };
        _this.previousCell = function (te) {
            te.previousCell(_this.settings.asOptions());
        };
        _this.nextRow = function (te) {
            te.nextRow(_this.settings.asOptions());
        };
        _this.formatTable = function (te) {
            te.format(_this.settings.asOptions());
        };
        _this.insertColumn = function (te) {
            te.insertColumn(_this.settings.asOptions());
        };
        _this.leftAlignColumn = function (te) {
            te.alignColumn(mteKernel.Alignment.LEFT, _this.settings.asOptions());
        };
        _this.centerAlignColumn = function (te) {
            te.alignColumn(mteKernel.Alignment.CENTER, _this.settings.asOptions());
        };
        _this.rightAlignColumn = function (te) {
            te.alignColumn(mteKernel.Alignment.RIGHT, _this.settings.asOptions());
        };
        return _this;
    }
    TableEditorPlugin.prototype.onInit = function () { };
    TableEditorPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('loading markdown-table-editor plugin');
                this.loadSettings();
                this.addCommand({
                    id: 'format-table',
                    name: 'Format table at the cursor',
                    callback: function () {
                        _this.inTableWrapper(_this.formatTable);
                    },
                });
                this.addCommand({
                    id: 'next-cell',
                    name: 'Navigate to Next Cell',
                    hotkeys: [
                        {
                            modifiers: ['Mod'],
                            key: 'tab',
                        },
                    ],
                    callback: function () {
                        _this.inTableWrapper(_this.nextCell);
                    },
                });
                this.addCommand({
                    id: 'previous-cell',
                    name: 'Navigate to Previous Cell',
                    hotkeys: [
                        {
                            modifiers: ['Mod', 'Shift'],
                            key: 'tab',
                        },
                    ],
                    callback: function () {
                        _this.inTableWrapper(_this.previousCell);
                    },
                });
                this.addCommand({
                    id: 'next-row',
                    name: 'Navigate to Next Row',
                    hotkeys: [
                        {
                            modifiers: ['Mod'],
                            key: 'enter',
                        },
                    ],
                    callback: function () {
                        _this.inTableWrapper(_this.nextRow);
                    },
                });
                this.addCommand({
                    id: 'insert-column',
                    name: 'Insert column before current',
                    callback: function () {
                        _this.inTableWrapper(_this.insertColumn);
                    },
                });
                this.addCommand({
                    id: 'left-align-column',
                    name: 'Left align column',
                    callback: function () {
                        _this.inTableWrapper(_this.leftAlignColumn);
                    },
                });
                this.addCommand({
                    id: 'center-align-column',
                    name: 'Center align column',
                    callback: function () {
                        _this.inTableWrapper(_this.centerAlignColumn);
                    },
                });
                this.addCommand({
                    id: 'right-align-column',
                    name: 'Right align column',
                    callback: function () {
                        _this.inTableWrapper(_this.rightAlignColumn);
                    },
                });
                this.addSettingTab(new TableEditorSettingsTab(this.app, this));
                return [2 /*return*/];
            });
        });
    };
    TableEditorPlugin.prototype.onunload = function () {
        console.log('unloading markdown-table-editor plugin');
    };
    TableEditorPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.settings = new TableEditorPluginSettings();
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var loadedSettings;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadData()];
                            case 1:
                                loadedSettings = _a.sent();
                                if (loadedSettings) {
                                    console.log('Found existing settings file');
                                    this.settings.formatType = loadedSettings.formatType;
                                }
                                else {
                                    console.log('No settings file found, saving...');
                                    this.saveData(this.settings);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); })();
                return [2 /*return*/];
            });
        });
    };
    return TableEditorPlugin;
}(obsidian.Plugin));
var TableEditorPluginSettings = /** @class */ (function () {
    function TableEditorPluginSettings() {
        console.log('Constructing a new settings object');
        this.formatType = mteKernel.FormatType.NORMAL;
    }
    TableEditorPluginSettings.prototype.asOptions = function () {
        return optionsWithDefaults({ formatType: this.formatType });
    };
    return TableEditorPluginSettings;
}());
var TableEditorSettingsTab = /** @class */ (function (_super) {
    __extends(TableEditorSettingsTab, _super);
    function TableEditorSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    TableEditorSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Table Plugin Editor - Settings' });
        new obsidian.Setting(containerEl)
            .setName('Pad cell width using spaces')
            .setDesc('If enabled, table cells will have spaces added to match the with of the ' +
            'longest cell in the column. Only useful when using a monospace font during editing.')
            .addToggle(function (toggle) {
            return toggle
                .setValue(_this.plugin.settings.formatType === mteKernel.FormatType.NORMAL)
                .onChange(function (value) {
                _this.plugin.settings.formatType = value
                    ? mteKernel.FormatType.NORMAL
                    : mteKernel.FormatType.WEAK;
                _this.plugin.saveData(_this.plugin.settings);
                _this.display();
            });
        });
    };
    return TableEditorSettingsTab;
}(obsidian.PluginSettingTab));

module.exports = TableEditorPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9tZWF3L2xpYi9tZWF3LmVzLmpzIiwibm9kZV9tb2R1bGVzL0BzdXNpc3UvbXRlLWtlcm5lbC9kaXN0L210ZS1rZXJuZWwuanMiLCJzcmMvbXRlLW9wdGlvbnMudHMiLCJzcmMvdGV4dC1lZGl0b3ItaW50ZXJmYWNlLnRzIiwic3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLypcbiAqIEdlbmVyYXRlZCBieSBzY3JpcHQuIERPIE5PVCBFRElUIVxuICpcbiAqIFRoaXMgcGFydCBpcyBkZXJpdmVkIGZyb20gVW5pY29kZSBEYXRhIEZpbGVzIGFuZCBwcm92aWRlZCB1bmRlciBVbmljb2RlLCBJbmMuIExpY2Vuc2UgQWdyZWVtZW50LlxuICovXG5cbi8qIEJFR0lOICovXG5jb25zdCBkZWZzID0gW1xuICB7IHN0YXJ0OiAwLCBlbmQ6IDMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAzMiwgZW5kOiAxMjYsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxMjcsIGVuZDogMTYwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxNjEsIGVuZDogMTYxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxNjIsIGVuZDogMTYzLCBwcm9wOiBcIk5hXCIgfSxcbiAgeyBzdGFydDogMTY0LCBlbmQ6IDE2NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTY1LCBlbmQ6IDE2NiwgcHJvcDogXCJOYVwiIH0sXG4gIHsgc3RhcnQ6IDE2NywgZW5kOiAxNjgsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDE2OSwgZW5kOiAxNjksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDE3MCwgZW5kOiAxNzAsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDE3MSwgZW5kOiAxNzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDE3MiwgZW5kOiAxNzIsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxNzMsIGVuZDogMTc0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxNzUsIGVuZDogMTc1LCBwcm9wOiBcIk5hXCIgfSxcbiAgeyBzdGFydDogMTc2LCBlbmQ6IDE4MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTgxLCBlbmQ6IDE4MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTgyLCBlbmQ6IDE4NiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTg3LCBlbmQ6IDE4NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTg4LCBlbmQ6IDE5MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTkyLCBlbmQ6IDE5NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTk4LCBlbmQ6IDE5OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTk5LCBlbmQ6IDIwNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjA4LCBlbmQ6IDIwOCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjA5LCBlbmQ6IDIxNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjE1LCBlbmQ6IDIxNiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjE3LCBlbmQ6IDIyMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjIyLCBlbmQ6IDIyNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjI2LCBlbmQ6IDIyOSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjMwLCBlbmQ6IDIzMCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjMxLCBlbmQ6IDIzMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjMyLCBlbmQ6IDIzNCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjM1LCBlbmQ6IDIzNSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjM2LCBlbmQ6IDIzNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjM4LCBlbmQ6IDIzOSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjQwLCBlbmQ6IDI0MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjQxLCBlbmQ6IDI0MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjQyLCBlbmQ6IDI0MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjQ0LCBlbmQ6IDI0NiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjQ3LCBlbmQ6IDI1MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjUxLCBlbmQ6IDI1MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjUyLCBlbmQ6IDI1MiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjUzLCBlbmQ6IDI1MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjU0LCBlbmQ6IDI1NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjU1LCBlbmQ6IDI1NiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjU3LCBlbmQ6IDI1NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjU4LCBlbmQ6IDI3MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjczLCBlbmQ6IDI3MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjc0LCBlbmQ6IDI3NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjc1LCBlbmQ6IDI3NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjc2LCBlbmQ6IDI4MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjgzLCBlbmQ6IDI4MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjg0LCBlbmQ6IDI5MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjk0LCBlbmQ6IDI5NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMjk2LCBlbmQ6IDI5OCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMjk5LCBlbmQ6IDI5OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzAwLCBlbmQ6IDMwNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzA1LCBlbmQ6IDMwNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzA4LCBlbmQ6IDMxMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzEyLCBlbmQ6IDMxMiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzEzLCBlbmQ6IDMxOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzE5LCBlbmQ6IDMyMiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzIzLCBlbmQ6IDMyMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzI0LCBlbmQ6IDMyNCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzI1LCBlbmQ6IDMyNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzI4LCBlbmQ6IDMzMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzMyLCBlbmQ6IDMzMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzMzLCBlbmQ6IDMzMywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzM0LCBlbmQ6IDMzNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzM4LCBlbmQ6IDMzOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzQwLCBlbmQ6IDM1NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzU4LCBlbmQ6IDM1OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzYwLCBlbmQ6IDM2MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMzYzLCBlbmQ6IDM2MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMzY0LCBlbmQ6IDQ2MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDYyLCBlbmQ6IDQ2MiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDYzLCBlbmQ6IDQ2MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDY0LCBlbmQ6IDQ2NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDY1LCBlbmQ6IDQ2NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDY2LCBlbmQ6IDQ2NiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDY3LCBlbmQ6IDQ2NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDY4LCBlbmQ6IDQ2OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDY5LCBlbmQ6IDQ2OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDcwLCBlbmQ6IDQ3MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDcxLCBlbmQ6IDQ3MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDcyLCBlbmQ6IDQ3MiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDczLCBlbmQ6IDQ3MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDc0LCBlbmQ6IDQ3NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDc1LCBlbmQ6IDQ3NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDc2LCBlbmQ6IDQ3NiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNDc3LCBlbmQ6IDU5MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNTkzLCBlbmQ6IDU5MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNTk0LCBlbmQ6IDYwOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjA5LCBlbmQ6IDYwOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNjEwLCBlbmQ6IDcwNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzA4LCBlbmQ6IDcwOCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzA5LCBlbmQ6IDcxMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzExLCBlbmQ6IDcxMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzEyLCBlbmQ6IDcxMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzEzLCBlbmQ6IDcxNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzE2LCBlbmQ6IDcxNiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzE3LCBlbmQ6IDcxNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzE4LCBlbmQ6IDcxOSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzIwLCBlbmQ6IDcyMCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzIxLCBlbmQ6IDcyNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzI4LCBlbmQ6IDczMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzMyLCBlbmQ6IDczMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzMzLCBlbmQ6IDczMywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzM0LCBlbmQ6IDczNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzM1LCBlbmQ6IDczNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNzM2LCBlbmQ6IDc2NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNzY4LCBlbmQ6IDg3OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODgwLCBlbmQ6IDkxMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTEzLCBlbmQ6IDkyOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTMwLCBlbmQ6IDkzMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTMxLCBlbmQ6IDkzNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTM4LCBlbmQ6IDk0NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTQ1LCBlbmQ6IDk2MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTYyLCBlbmQ6IDk2MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTYzLCBlbmQ6IDk2OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTcwLCBlbmQ6IDEwMjQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMjUsIGVuZDogMTAyNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTAyNiwgZW5kOiAxMDM5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDQwLCBlbmQ6IDExMDMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDExMDQsIGVuZDogMTEwNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTEwNSwgZW5kOiAxMTA1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMTA2LCBlbmQ6IDQzNTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDQzNTIsIGVuZDogNDQ0NywgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNDQ0OCwgZW5kOiA4MjA3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjA4LCBlbmQ6IDgyMDgsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyMDksIGVuZDogODIxMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODIxMSwgZW5kOiA4MjE0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjE1LCBlbmQ6IDgyMTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyMTYsIGVuZDogODIxNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODIxOCwgZW5kOiA4MjE5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjIwLCBlbmQ6IDgyMjEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyMjIsIGVuZDogODIyMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODIyNCwgZW5kOiA4MjI2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjI3LCBlbmQ6IDgyMjcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyMjgsIGVuZDogODIzMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODIzMiwgZW5kOiA4MjM5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjQwLCBlbmQ6IDgyNDAsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyNDEsIGVuZDogODI0MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODI0MiwgZW5kOiA4MjQzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjQ0LCBlbmQ6IDgyNDQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgyNDUsIGVuZDogODI0NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODI0NiwgZW5kOiA4MjUwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MjUxLCBlbmQ6IDgyNTEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgyNTIsIGVuZDogODI1MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODI1NCwgZW5kOiA4MjU0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MjU1LCBlbmQ6IDgzMDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgzMDgsIGVuZDogODMwOCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODMwOSwgZW5kOiA4MzE4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MzE5LCBlbmQ6IDgzMTksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgzMjAsIGVuZDogODMyMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODMyMSwgZW5kOiA4MzI0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4MzI1LCBlbmQ6IDgzNjAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDgzNjEsIGVuZDogODM2MSwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogODM2MiwgZW5kOiA4MzYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4MzY0LCBlbmQ6IDgzNjQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDgzNjUsIGVuZDogODQ1MCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ1MSwgZW5kOiA4NDUxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDUyLCBlbmQ6IDg0NTIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg0NTMsIGVuZDogODQ1MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODQ1NCwgZW5kOiA4NDU2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NDU3LCBlbmQ6IDg0NTcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg0NTgsIGVuZDogODQ2NiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ2NywgZW5kOiA4NDY3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDY4LCBlbmQ6IDg0NjksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg0NzAsIGVuZDogODQ3MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODQ3MSwgZW5kOiA4NDgwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NDgxLCBlbmQ6IDg0ODIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg0ODMsIGVuZDogODQ4NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODQ4NiwgZW5kOiA4NDg2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NDg3LCBlbmQ6IDg0OTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg0OTEsIGVuZDogODQ5MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODQ5MiwgZW5kOiA4NTMwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NTMxLCBlbmQ6IDg1MzIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg1MzMsIGVuZDogODUzOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODUzOSwgZW5kOiA4NTQyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NTQzLCBlbmQ6IDg1NDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg1NDQsIGVuZDogODU1NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODU1NiwgZW5kOiA4NTU5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NTYwLCBlbmQ6IDg1NjksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg1NzAsIGVuZDogODU4NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODU4NSwgZW5kOiA4NTg1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NTg2LCBlbmQ6IDg1OTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg1OTIsIGVuZDogODYwMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODYwMiwgZW5kOiA4NjMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NjMyLCBlbmQ6IDg2MzMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg2MzQsIGVuZDogODY1NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODY1OCwgZW5kOiA4NjU4LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NjU5LCBlbmQ6IDg2NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg2NjAsIGVuZDogODY2MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODY2MSwgZW5kOiA4Njc4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4Njc5LCBlbmQ6IDg2NzksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg2ODAsIGVuZDogODcwMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODcwNCwgZW5kOiA4NzA0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzA1LCBlbmQ6IDg3MDUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MDYsIGVuZDogODcwNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODcwOCwgZW5kOiA4NzEwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzExLCBlbmQ6IDg3MTIsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MTMsIGVuZDogODcxNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODcxNSwgZW5kOiA4NzE1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzE2LCBlbmQ6IDg3MTgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MTksIGVuZDogODcxOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODcyMCwgZW5kOiA4NzIwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzIxLCBlbmQ6IDg3MjEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MjIsIGVuZDogODcyNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODcyNSwgZW5kOiA4NzI1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzI2LCBlbmQ6IDg3MjksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3MzAsIGVuZDogODczMCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODczMSwgZW5kOiA4NzMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzMzLCBlbmQ6IDg3MzYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3MzcsIGVuZDogODczOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODczOSwgZW5kOiA4NzM5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzQwLCBlbmQ6IDg3NDAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3NDEsIGVuZDogODc0MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc0MiwgZW5kOiA4NzQyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzQzLCBlbmQ6IDg3NDgsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3NDksIGVuZDogODc0OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODc1MCwgZW5kOiA4NzUwLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4NzUxLCBlbmQ6IDg3NTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3NTYsIGVuZDogODc1OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc2MCwgZW5kOiA4NzYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4NzY0LCBlbmQ6IDg3NjUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3NjYsIGVuZDogODc3NSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODc3NiwgZW5kOiA4Nzc2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4Nzc3LCBlbmQ6IDg3NzksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg3ODAsIGVuZDogODc4MCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODc4MSwgZW5kOiA4Nzg1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4Nzg2LCBlbmQ6IDg3ODYsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg3ODcsIGVuZDogODc5OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODgwMCwgZW5kOiA4ODAxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODAyLCBlbmQ6IDg4MDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4MDQsIGVuZDogODgwNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODgwOCwgZW5kOiA4ODA5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODEwLCBlbmQ6IDg4MTEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4MTIsIGVuZDogODgxMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODgxNCwgZW5kOiA4ODE1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODE2LCBlbmQ6IDg4MzMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4MzQsIGVuZDogODgzNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODgzNiwgZW5kOiA4ODM3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODM4LCBlbmQ6IDg4MzksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4NDAsIGVuZDogODg1MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODg1MywgZW5kOiA4ODUzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODU0LCBlbmQ6IDg4NTYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg4NTcsIGVuZDogODg1NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODg1OCwgZW5kOiA4ODY4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4ODY5LCBlbmQ6IDg4NjksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDg4NzAsIGVuZDogODg5NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogODg5NSwgZW5kOiA4ODk1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA4ODk2LCBlbmQ6IDg5NzcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDg5NzgsIGVuZDogODk3OCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogODk3OSwgZW5kOiA4OTg1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA4OTg2LCBlbmQ6IDg5ODcsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDg5ODgsIGVuZDogOTAwMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTAwMSwgZW5kOiA5MDAyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5MDAzLCBlbmQ6IDkxOTIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDkxOTMsIGVuZDogOTE5NiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTE5NywgZW5kOiA5MTk5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MjAwLCBlbmQ6IDkyMDAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDkyMDEsIGVuZDogOTIwMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTIwMywgZW5kOiA5MjAzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5MjA0LCBlbmQ6IDkzMTEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDkzMTIsIGVuZDogOTQ0OSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTQ1MCwgZW5kOiA5NDUwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NDUxLCBlbmQ6IDk1NDcsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk1NDgsIGVuZDogOTU1MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTU1MiwgZW5kOiA5NTg3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NTg4LCBlbmQ6IDk1OTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2MDAsIGVuZDogOTYxNSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTYxNiwgZW5kOiA5NjE3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjE4LCBlbmQ6IDk2MjEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2MjIsIGVuZDogOTYzMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTYzMiwgZW5kOiA5NjMzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjM0LCBlbmQ6IDk2MzQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2MzUsIGVuZDogOTY0MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY0MiwgZW5kOiA5NjQ5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjUwLCBlbmQ6IDk2NTEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2NTIsIGVuZDogOTY1MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTY1NCwgZW5kOiA5NjU1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjU2LCBlbmQ6IDk2NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2NjAsIGVuZDogOTY2MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY2MiwgZW5kOiA5NjYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NjY0LCBlbmQ6IDk2NjUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2NjYsIGVuZDogOTY2OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTY3MCwgZW5kOiA5NjcyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NjczLCBlbmQ6IDk2NzQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk2NzUsIGVuZDogOTY3NSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTY3NiwgZW5kOiA5Njc3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5Njc4LCBlbmQ6IDk2ODEsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk2ODIsIGVuZDogOTY5NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTY5OCwgZW5kOiA5NzAxLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzAyLCBlbmQ6IDk3MTAsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3MTEsIGVuZDogOTcxMSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTcxMiwgZW5kOiA5NzI0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzI1LCBlbmQ6IDk3MjYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk3MjcsIGVuZDogOTczMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTczMywgZW5kOiA5NzM0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzM1LCBlbmQ6IDk3MzYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3MzcsIGVuZDogOTczNywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTczOCwgZW5kOiA5NzQxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzQyLCBlbmQ6IDk3NDMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk3NDQsIGVuZDogOTc0NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTc0OCwgZW5kOiA5NzQ5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5NzUwLCBlbmQ6IDk3NTUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3NTYsIGVuZDogOTc1NiwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTc1NywgZW5kOiA5NzU3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5NzU4LCBlbmQ6IDk3NTgsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk3NTksIGVuZDogOTc5MSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTc5MiwgZW5kOiA5NzkyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5NzkzLCBlbmQ6IDk3OTMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk3OTQsIGVuZDogOTc5NCwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTc5NSwgZW5kOiA5Nzk5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODAwLCBlbmQ6IDk4MTEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk4MTIsIGVuZDogOTgyMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTgyNCwgZW5kOiA5ODI1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5ODI2LCBlbmQ6IDk4MjYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4MjcsIGVuZDogOTgyOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTgzMCwgZW5kOiA5ODMwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODMxLCBlbmQ6IDk4MzQsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk4MzUsIGVuZDogOTgzNSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTgzNiwgZW5kOiA5ODM3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5ODM4LCBlbmQ6IDk4MzgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4MzksIGVuZDogOTgzOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTg0MCwgZW5kOiA5ODU0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODU1LCBlbmQ6IDk4NTUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk4NTYsIGVuZDogOTg3NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTg3NSwgZW5kOiA5ODc1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5ODc2LCBlbmQ6IDk4ODUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk4ODYsIGVuZDogOTg4NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTg4OCwgZW5kOiA5ODg4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODg5LCBlbmQ6IDk4ODksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk4OTAsIGVuZDogOTg5NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTg5OCwgZW5kOiA5ODk5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTAwLCBlbmQ6IDk5MTYsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk5MTcsIGVuZDogOTkxOCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTkxOSwgZW5kOiA5OTE5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTIwLCBlbmQ6IDk5MjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk5MjQsIGVuZDogOTkyNSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTkyNiwgZW5kOiA5OTMzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTM0LCBlbmQ6IDk5MzQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5MzUsIGVuZDogOTkzOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk0MCwgZW5kOiA5OTQwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTQxLCBlbmQ6IDk5NTMsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5NTQsIGVuZDogOTk1NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTk1NSwgZW5kOiA5OTU1LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTU2LCBlbmQ6IDk5NTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk5NjAsIGVuZDogOTk2MSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk2MiwgZW5kOiA5OTYyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTYzLCBlbmQ6IDk5NjksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5NzAsIGVuZDogOTk3MSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTk3MiwgZW5kOiA5OTcyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTczLCBlbmQ6IDk5NzMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5NzQsIGVuZDogOTk3NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogOTk3OCwgZW5kOiA5OTc4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5OTc5LCBlbmQ6IDk5ODAsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDk5ODEsIGVuZDogOTk4MSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTk4MiwgZW5kOiA5OTgzLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5OTg0LCBlbmQ6IDk5ODgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk5ODksIGVuZDogOTk4OSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogOTk5MCwgZW5kOiA5OTkzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5OTk0LCBlbmQ6IDk5OTUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDk5OTYsIGVuZDogMTAwMjMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMDI0LCBlbmQ6IDEwMDI0LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDAyNSwgZW5kOiAxMDA0NCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAwNDUsIGVuZDogMTAwNDUsIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEwMDQ2LCBlbmQ6IDEwMDU5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDA2MCwgZW5kOiAxMDA2MCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTAwNjEsIGVuZDogMTAwNjEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMDYyLCBlbmQ6IDEwMDYyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDA2MywgZW5kOiAxMDA2NiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAwNjcsIGVuZDogMTAwNjksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMDcwLCBlbmQ6IDEwMDcwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDA3MSwgZW5kOiAxMDA3MSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTAwNzIsIGVuZDogMTAxMDEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMTAyLCBlbmQ6IDEwMTExLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMDExMiwgZW5kOiAxMDEzMiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAxMzMsIGVuZDogMTAxMzUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEwMTM2LCBlbmQ6IDEwMTU5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDE2MCwgZW5kOiAxMDE2MCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTAxNjEsIGVuZDogMTAxNzQsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEwMTc1LCBlbmQ6IDEwMTc1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDE3NiwgZW5kOiAxMDIxMywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTAyMTQsIGVuZDogMTAyMjEsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxMDIyMiwgZW5kOiAxMDYyOCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTA2MjksIGVuZDogMTA2MzAsIHByb3A6IFwiTmFcIiB9LFxuICB7IHN0YXJ0OiAxMDYzMSwgZW5kOiAxMTAzNCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTEwMzUsIGVuZDogMTEwMzYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDExMDM3LCBlbmQ6IDExMDg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA4OCwgZW5kOiAxMTA4OCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTEwODksIGVuZDogMTEwOTIsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExMDkzLCBlbmQ6IDExMDkzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTA5NCwgZW5kOiAxMTA5NywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTEwOTgsIGVuZDogMTE5MDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDExOTA0LCBlbmQ6IDExOTI5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTkzMCwgZW5kOiAxMTkzMCwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTE5MzEsIGVuZDogMTIwMTksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyMDIwLCBlbmQ6IDEyMDMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjAzMiwgZW5kOiAxMjI0NSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTIyNDYsIGVuZDogMTIyNzEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyMjcyLCBlbmQ6IDEyMjgzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjI4NCwgZW5kOiAxMjI4NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTIyODgsIGVuZDogMTIyODgsIHByb3A6IFwiRlwiIH0sXG4gIHsgc3RhcnQ6IDEyMjg5LCBlbmQ6IDEyMzUwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjM1MSwgZW5kOiAxMjM1MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTIzNTMsIGVuZDogMTI0MzgsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNDM5LCBlbmQ6IDEyNDQwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjQ0MSwgZW5kOiAxMjU0MywgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI1NDQsIGVuZDogMTI1NDgsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNTQ5LCBlbmQ6IDEyNTkxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjU5MiwgZW5kOiAxMjU5MiwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTI1OTMsIGVuZDogMTI2ODYsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyNjg3LCBlbmQ6IDEyNjg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjY4OCwgZW5kOiAxMjczMCwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI3MzEsIGVuZDogMTI3MzUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDEyNzM2LCBlbmQ6IDEyNzcxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc3MiwgZW5kOiAxMjc4MywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTI3ODQsIGVuZDogMTI4MzAsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDEyODMxLCBlbmQ6IDEyODMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgzMiwgZW5kOiAxMjg3MSwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogMTI4NzIsIGVuZDogMTI4NzksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDEyODgwLCBlbmQ6IDE5OTAzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxOTkwNCwgZW5kOiAxOTk2NywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogMTk5NjgsIGVuZDogNDIxMjQsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDQyMTI1LCBlbmQ6IDQyMTI3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA0MjEyOCwgZW5kOiA0MjE4MiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNDIxODMsIGVuZDogNDMzNTksIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDQzMzYwLCBlbmQ6IDQzMzg4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA0MzM4OSwgZW5kOiA0NDAzMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNDQwMzIsIGVuZDogNTUyMDMsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDU1MjA0LCBlbmQ6IDU3MzQzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA1NzM0NCwgZW5kOiA2Mzc0MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNjM3NDQsIGVuZDogNjQyNTUsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDY0MjU2LCBlbmQ6IDY1MDIzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTAyNCwgZW5kOiA2NTAzOSwgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNjUwNDAsIGVuZDogNjUwNDksIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDY1MDUwLCBlbmQ6IDY1MDcxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTA3MiwgZW5kOiA2NTEwNiwgcHJvcDogXCJXXCIgfSxcbiAgeyBzdGFydDogNjUxMDcsIGVuZDogNjUxMDcsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1MTA4LCBlbmQ6IDY1MTI2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA2NTEyNywgZW5kOiA2NTEyNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjUxMjgsIGVuZDogNjUxMzEsIHByb3A6IFwiV1wiIH0sXG4gIHsgc3RhcnQ6IDY1MTMyLCBlbmQ6IDY1MjgwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTI4MSwgZW5kOiA2NTM3NiwgcHJvcDogXCJGXCIgfSxcbiAgeyBzdGFydDogNjUzNzcsIGVuZDogNjU0NzAsIHByb3A6IFwiSFwiIH0sXG4gIHsgc3RhcnQ6IDY1NDcxLCBlbmQ6IDY1NDczLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTQ3NCwgZW5kOiA2NTQ3OSwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogNjU0ODAsIGVuZDogNjU0ODEsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1NDgyLCBlbmQ6IDY1NDg3LCBwcm9wOiBcIkhcIiB9LFxuICB7IHN0YXJ0OiA2NTQ4OCwgZW5kOiA2NTQ4OSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjU0OTAsIGVuZDogNjU0OTUsIHByb3A6IFwiSFwiIH0sXG4gIHsgc3RhcnQ6IDY1NDk2LCBlbmQ6IDY1NDk3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTQ5OCwgZW5kOiA2NTUwMCwgcHJvcDogXCJIXCIgfSxcbiAgeyBzdGFydDogNjU1MDEsIGVuZDogNjU1MDMsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDY1NTA0LCBlbmQ6IDY1NTEwLCBwcm9wOiBcIkZcIiB9LFxuICB7IHN0YXJ0OiA2NTUxMSwgZW5kOiA2NTUxMSwgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogNjU1MTIsIGVuZDogNjU1MTgsIHByb3A6IFwiSFwiIH0sXG4gIHsgc3RhcnQ6IDY1NTE5LCBlbmQ6IDY1NTMyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA2NTUzMywgZW5kOiA2NTUzMywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogNjU1MzQsIGVuZDogOTQxNzUsIHByb3A6IFwiTlwiIH0sXG4gIHsgc3RhcnQ6IDk0MTc2LCBlbmQ6IDk0MTc5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiA5NDE4MCwgZW5kOiA5NDIwNywgcHJvcDogXCJOXCIgfSxcbiAgeyBzdGFydDogOTQyMDgsIGVuZDogMTAwMzQzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDAzNDQsIGVuZDogMTAwMzUxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDAzNTIsIGVuZDogMTAxMTA2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMDExMDcsIGVuZDogMTEwNTkxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA1OTIsIGVuZDogMTEwODc4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTA4NzksIGVuZDogMTEwOTI3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA5MjgsIGVuZDogMTEwOTMwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTA5MzEsIGVuZDogMTEwOTQ3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA5NDgsIGVuZDogMTEwOTUxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTA5NTIsIGVuZDogMTEwOTU5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMTA5NjAsIGVuZDogMTExMzU1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMTEzNTYsIGVuZDogMTI2OTc5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjY5ODAsIGVuZDogMTI2OTgwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjY5ODEsIGVuZDogMTI3MTgyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjcxODMsIGVuZDogMTI3MTgzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjcxODQsIGVuZDogMTI3MjMxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjcyMzIsIGVuZDogMTI3MjQyLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjcyNDMsIGVuZDogMTI3MjQ3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjcyNDgsIGVuZDogMTI3Mjc3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjcyNzgsIGVuZDogMTI3Mjc5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjcyODAsIGVuZDogMTI3MzM3LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjczMzgsIGVuZDogMTI3MzQzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjczNDQsIGVuZDogMTI3MzczLCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjczNzQsIGVuZDogMTI3Mzc0LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjczNzUsIGVuZDogMTI3Mzc2LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjczNzcsIGVuZDogMTI3Mzg2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjczODcsIGVuZDogMTI3NDA0LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiAxMjc0MDUsIGVuZDogMTI3NDg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc0ODgsIGVuZDogMTI3NDkwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc0OTEsIGVuZDogMTI3NTAzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc1MDQsIGVuZDogMTI3NTQ3LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc1NDgsIGVuZDogMTI3NTUxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc1NTIsIGVuZDogMTI3NTYwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc1NjEsIGVuZDogMTI3NTY3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc1NjgsIGVuZDogMTI3NTY5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc1NzAsIGVuZDogMTI3NTgzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc1ODQsIGVuZDogMTI3NTg5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc1OTAsIGVuZDogMTI3NzQzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc3NDQsIGVuZDogMTI3Nzc2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc3NzcsIGVuZDogMTI3Nzg4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc3ODksIGVuZDogMTI3Nzk3LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc3OTgsIGVuZDogMTI3Nzk4LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc3OTksIGVuZDogMTI3ODY4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc4NjksIGVuZDogMTI3ODY5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc4NzAsIGVuZDogMTI3ODkxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc4OTIsIGVuZDogMTI3OTAzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc5MDQsIGVuZDogMTI3OTQ2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc5NDcsIGVuZDogMTI3OTUwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc5NTEsIGVuZDogMTI3OTU1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc5NTYsIGVuZDogMTI3OTY3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc5NjgsIGVuZDogMTI3OTg0LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc5ODUsIGVuZDogMTI3OTg3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc5ODgsIGVuZDogMTI3OTg4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjc5ODksIGVuZDogMTI3OTkxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjc5OTIsIGVuZDogMTI4MDYyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgwNjMsIGVuZDogMTI4MDYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgwNjQsIGVuZDogMTI4MDY0LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgwNjUsIGVuZDogMTI4MDY1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgwNjYsIGVuZDogMTI4MjUyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgyNTMsIGVuZDogMTI4MjU0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgyNTUsIGVuZDogMTI4MzE3LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgzMTgsIGVuZDogMTI4MzMwLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgzMzEsIGVuZDogMTI4MzM0LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgzMzUsIGVuZDogMTI4MzM1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgzMzYsIGVuZDogMTI4MzU5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgzNjAsIGVuZDogMTI4Mzc3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjgzNzgsIGVuZDogMTI4Mzc4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjgzNzksIGVuZDogMTI4NDA0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg0MDUsIGVuZDogMTI4NDA2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg0MDcsIGVuZDogMTI4NDE5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg0MjAsIGVuZDogMTI4NDIwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg0MjEsIGVuZDogMTI4NTA2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg1MDcsIGVuZDogMTI4NTkxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg1OTIsIGVuZDogMTI4NjM5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg2NDAsIGVuZDogMTI4NzA5LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3MTAsIGVuZDogMTI4NzE1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg3MTYsIGVuZDogMTI4NzE2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3MTcsIGVuZDogMTI4NzE5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg3MjAsIGVuZDogMTI4NzIyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3MjMsIGVuZDogMTI4NzI0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg3MjUsIGVuZDogMTI4NzI1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3MjYsIGVuZDogMTI4NzQ2LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg3NDcsIGVuZDogMTI4NzQ4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3NDksIGVuZDogMTI4NzU1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg3NTYsIGVuZDogMTI4NzYyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjg3NjMsIGVuZDogMTI4OTkxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjg5OTIsIGVuZDogMTI5MDAzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjkwMDQsIGVuZDogMTI5MjkyLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjkyOTMsIGVuZDogMTI5MzkzLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjkzOTQsIGVuZDogMTI5Mzk0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjkzOTUsIGVuZDogMTI5Mzk4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjkzOTksIGVuZDogMTI5NDAxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk0MDIsIGVuZDogMTI5NDQyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk0NDMsIGVuZDogMTI5NDQ0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk0NDUsIGVuZDogMTI5NDUwLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk0NTEsIGVuZDogMTI5NDUzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk0NTQsIGVuZDogMTI5NDgyLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk0ODMsIGVuZDogMTI5NDg0LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk0ODUsIGVuZDogMTI5NTM1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk1MzYsIGVuZDogMTI5NjQ3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk2NDgsIGVuZDogMTI5NjUxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk2NTIsIGVuZDogMTI5NjU1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk2NTYsIGVuZDogMTI5NjU4LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk2NTksIGVuZDogMTI5NjYzLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk2NjQsIGVuZDogMTI5NjY2LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk2NjcsIGVuZDogMTI5Njc5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMjk2ODAsIGVuZDogMTI5Njg1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxMjk2ODYsIGVuZDogMTMxMDcxLCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMzEwNzIsIGVuZDogMTk2NjA1LCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAxOTY2MDYsIGVuZDogMTk2NjA3LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxOTY2MDgsIGVuZDogMjYyMTQxLCBwcm9wOiBcIldcIiB9LFxuICB7IHN0YXJ0OiAyNjIxNDIsIGVuZDogOTE3NzU5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5MTc3NjAsIGVuZDogOTE3OTk5LCBwcm9wOiBcIkFcIiB9LFxuICB7IHN0YXJ0OiA5MTgwMDAsIGVuZDogOTgzMDM5LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiA5ODMwNDAsIGVuZDogMTA0ODU3MywgcHJvcDogXCJBXCIgfSxcbiAgeyBzdGFydDogMTA0ODU3NCwgZW5kOiAxMDQ4NTc1LCBwcm9wOiBcIk5cIiB9LFxuICB7IHN0YXJ0OiAxMDQ4NTc2LCBlbmQ6IDExMTQxMDksIHByb3A6IFwiQVwiIH0sXG4gIHsgc3RhcnQ6IDExMTQxMTAsIGVuZDogMTExNDExMSwgcHJvcDogXCJOXCIgfSxcbl07XG4vKiBFTkQgKi9cblxuY29uc3QgdmVyc2lvbiA9IFwiMTIuMS4wXCI7XG5cbi8qKlxuICogUmV0dXJucyBUaGUgRUFXIHByb3BlcnR5IG9mIGEgY29kZSBwb2ludC5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZVBvaW50IEEgY29kZSBwb2ludFxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgRUFXIHByb3BlcnR5IG9mIHRoZSBzcGVjaWZpZWQgY29kZSBwb2ludFxuICovXG5mdW5jdGlvbiBfZ2V0RUFXT2ZDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gIGxldCBtaW4gPSAwO1xuICBsZXQgbWF4ID0gZGVmcy5sZW5ndGggLSAxO1xuICB3aGlsZSAobWluICE9PSBtYXgpIHtcbiAgICBjb25zdCBpICAgPSBtaW4gKyAoKG1heCAtIG1pbikgPj4gMSk7XG4gICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICBpZiAoY29kZVBvaW50IDwgZGVmLnN0YXJ0KSB7XG4gICAgICBtYXggPSBpIC0gMTtcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IGRlZi5lbmQpIHtcbiAgICAgIG1pbiA9IGkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVmLnByb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZzW21pbl0ucHJvcDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBFQVcgcHJvcGVydHkgb2YgYSBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIEEgc3RyaW5nIGluIHdoaWNoIHRoZSBjaGFyYWN0ZXIgaXMgY29udGFpbmVkXG4gKiBAcGFyYW0ge251bWJlcn0gW2F0ID0gMF0gVGhlIHBvc2l0aW9uIChpbiBjb2RlIHVuaXQpIG9mIHRoZSBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBUaGUgRUFXIHByb3BlcnR5IG9mIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZ2V0RUFXIH0gZnJvbSBcIm1lYXdcIjtcbiAqXG4gKiAvLyBOYXJyb3dcbiAqIGFzc2VydChnZXRFQVcoXCJBXCIpID09PSBcIk5hXCIpO1xuICogLy8gV2lkZVxuICogYXNzZXJ0KGdldEVBVyhcIuOBglwiKSA9PT0gXCJXXCIpO1xuICogYXNzZXJ0KGdldEVBVyhcIuWuiVwiKSA9PT0gXCJXXCIpO1xuICogYXNzZXJ0KGdldEVBVyhcIvCfjaNcIikgPT09IFwiV1wiKTtcbiAqIC8vIEZ1bGx3aWR0aFxuICogYXNzZXJ0KGdldEVBVyhcIu+8oVwiKSA9PT0gXCJGXCIpO1xuICogLy8gSGFsZndpZHRoXG4gKiBhc3NlcnQoZ2V0RUFXKFwi772xXCIpID09PSBcIkhcIik7XG4gKiAvLyBBbWJpZ3VvdXNcbiAqIGFzc2VydChnZXRFQVcoXCLiiIBcIikgPT09IFwiQVwiKTtcbiAqIGFzc2VydChnZXRFQVcoXCLihpJcIikgPT09IFwiQVwiKTtcbiAqIGFzc2VydChnZXRFQVcoXCLOqVwiKSA9PT0gXCJBXCIpO1xuICogYXNzZXJ0KGdldEVBVyhcItCvXCIpID09PSBcIkFcIik7XG4gKiAvLyBOZXV0cmFsXG4gKiBhc3NlcnQoZ2V0RUFXKFwi4oS1XCIpID09PSBcIk5cIik7XG4gKlxuICogLy8gYSBwb3NpdGlvbiAoaW4gY29kZSB1bml0KSBjYW4gYmUgc3BlY2lmaWVkXG4gKiBhc3NlcnQoZ2V0RUFXKFwi4oS1QeOBgu+8oe+9seKIgFwiLCAyKSA9PT0gXCJXXCIpO1xuICovXG5mdW5jdGlvbiBnZXRFQVcoc3RyLCBhdCkge1xuICBjb25zdCBjb2RlUG9pbnQgPSBzdHIuY29kZVBvaW50QXQoYXQgfHwgMCk7XG4gIHJldHVybiBjb2RlUG9pbnQgPT09IHVuZGVmaW5lZFxuICAgID8gdW5kZWZpbmVkXG4gICAgOiBfZ2V0RUFXT2ZDb2RlUG9pbnQoY29kZVBvaW50KTtcbn1cblxuY29uc3QgZGVmYXVsdFdpZHRoTWFwID0ge1xuICBcIk5cIiA6IDEsXG4gIFwiTmFcIjogMSxcbiAgXCJXXCIgOiAyLFxuICBcIkZcIiA6IDIsXG4gIFwiSFwiIDogMSxcbiAgXCJBXCIgOiAxLFxufTtcblxuLyoqXG4gKiBDb21wdXRlcyB3aWR0aCBvZiBhIHN0cmluZyBiYXNlZCBvbiB0aGUgRUFXIHByb3BlcnRpZXMgb2YgaXRzIGNoYXJhY3RlcnMuXG4gKiBCeSBkZWZhdWx0IGNoYXJhY3RlcnMgd2l0aCBwcm9wZXJ0eSBXaWRlIChXKSBvciBGdWxsd2lkdGggKEYpIGFyZSB0cmVhdGVkIGFzIHdpZGUgKD0gMilcbiAqIGFuZCB0aGUgb3RoZXJzIGFyZSBhcyBuYXJyb3cgKD0gMSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgdG8gY29tcHV0ZSB3aWR0aFxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBudW1iZXI+IHwgdW5kZWZpbmVkfSBbd2lkdGhNYXAgPSB1bmRlZmluZWRdXG4gKiAgIEFuIG9iamVjdCB3aGljaCByZXByZXNlbnRzIGEgbWFwIGZyb20gYW4gRUFXIHByb3BlcnR5IHRvIGEgY2hhcmFjdGVyIHdpZHRoXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjb21wdXRlZCB3aWR0aFxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbXB1dGVXaWR0aCB9IGZyb20gXCJtZWF3XCI7XG4gKlxuICogYXNzZXJ0KGNvbXB1dGVXaWR0aChcIkHjgYLwn42jzqlcIikgPT09IDYpO1xuICogLy8gY3VzdG9tIHdpZHRocyBjYW4gYmUgc3BlY2lmaWVkIGJ5IGFuIG9iamVjdFxuICogYXNzZXJ0KGNvbXB1dGVXaWR0aChcIkHjgYLwn42jzqlcIiwgeyBcIkFcIjogMiB9KSA9PT0gNyk7XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVXaWR0aChzdHIsIHdpZHRoTWFwKSB7XG4gIGNvbnN0IG1hcCA9IHdpZHRoTWFwXG4gICAgPyBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0V2lkdGhNYXAsIHdpZHRoTWFwKVxuICAgIDogZGVmYXVsdFdpZHRoTWFwO1xuICBsZXQgd2lkdGggPSAwO1xuICBmb3IgKGNvbnN0IGNoYXIgb2Ygc3RyKSB7XG4gICAgd2lkdGggKz0gbWFwW2dldEVBVyhjaGFyKV07XG4gIH1cbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5leHBvcnQgeyBjb21wdXRlV2lkdGgsIHZlcnNpb24gYXMgZWF3VmVyc2lvbiwgZ2V0RUFXIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZWF3LmVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbWVhdyA9IHJlcXVpcmUoJ21lYXcnKTtcblxuLyoqXG4gKiBBIGBQb2ludGAgcmVwcmVzZW50cyBhIHBvaW50IGluIHRoZSB0ZXh0IGVkaXRvci5cbiAqL1xuY2xhc3MgUG9pbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgUG9pbnRgIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBvZiB0aGUgcG9pbnQsIHN0YXJ0cyBmcm9tIDAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gb2YgdGhlIHBvaW50LCBzdGFydHMgZnJvbSAwLlxuICAgKi9cbiAgY29uc3RydWN0b3Iocm93LCBjb2x1bW4pIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9yb3cgPSByb3c7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdyBvZiB0aGUgcG9pbnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcm93KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3c7XG4gIH1cblxuICAvKipcbiAgICogQ29sdW1uIG9mIHRoZSBwb2ludC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBjb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHBvaW50IGlzIGVxdWFsIHRvIGFub3RoZXIgcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50IC0gQSBwb2ludCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdHdvIHBvaW50cyBhcmUgZXF1YWwuXG4gICAqL1xuICBlcXVhbHMocG9pbnQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3cgPT09IHBvaW50LnJvdyAmJiB0aGlzLmNvbHVtbiA9PT0gcG9pbnQuY29sdW1uO1xuICB9XG59XG5cbi8qKlxuICogQSBgUmFuZ2VgIG9iamVjdCByZXByZXNlbnRzIGEgcmFuZ2UgaW4gdGhlIHRleHQgZWRpdG9yLlxuICovXG5jbGFzcyBSYW5nZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBSYW5nZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1BvaW50fSBzdGFydCAtIFRoZSBzdGFydCBwb2ludCBvZiB0aGUgcmFuZ2UuXG4gICAqIEBwYXJhbSB7UG9pbnR9IGVuZCAtIFRoZSBlbmQgcG9pbnQgb2YgdGhlIHJhbmdlLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnQ7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fZW5kID0gZW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzdGFydCBwb2ludCBvZiB0aGUgcmFuZ2UuXG4gICAqXG4gICAqIEB0eXBlIHtQb2ludH1cbiAgICovXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVuZCBwb2ludCBvZiB0aGUgcmFuZ2UuXG4gICAqXG4gICAqIEB0eXBlIHtQb2ludH1cbiAgICovXG4gIGdldCBlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZDtcbiAgfVxufVxuXG4vKipcbiAqIEEgYEZvY3VzYCBvYmplY3QgcmVwcmVzZW50cyB3aGljaCBjZWxsIGlzIGZvY3VzZWQgaW4gdGhlIHRhYmxlLlxuICpcbiAqIE5vdGUgdGhhdCBgcm93YCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyBzcGVjaWZpeSBhIGNlbGwncyBwb3NpdGlvbiBpbiB0aGUgdGFibGUsIG5vdCB0aGUgY3Vyc29yJ3NcbiAqIHBvc2l0aW9uIGluIHRoZSB0ZXh0IGVkaXRvciBhcyB7QGxpbmsgUG9pbnR9IGNsYXNzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEZvY3VzIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvY3VzYCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBvZiB0aGUgZm9jdXNlZCBjZWxsLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gUmF3IG9mZnNldCBpbiB0aGUgY2VsbC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvdywgY29sdW1uLCBvZmZzZXQpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9yb3cgPSByb3c7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCByb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2x1bW4gb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBjb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYXcgb2Zmc2V0IGluIHRoZSBjZWxsLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0d28gZm9jdXNlcyBwb2ludCB0aGUgc2FtZSBjZWxsLlxuICAgKiBPZmZzZXRzIGFyZSBpZ25vcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZvY3VzfSBmb2N1cyAtIEEgZm9jdXMgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHBvc0VxdWFscyhmb2N1cykge1xuICAgIHJldHVybiB0aGlzLnJvdyA9PT0gZm9jdXMucm93ICYmIHRoaXMuY29sdW1uID09PSBmb2N1cy5jb2x1bW47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGZvY3VzIG9iamVjdCBieSBzZXR0aW5nIGl0cyByb3cgdG8gdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBvZiB0aGUgZm9jdXNlZCBjZWxsLlxuICAgKiBAcmV0dXJucyB7Rm9jdXN9IEEgbmV3IGZvY3VzIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgcm93LlxuICAgKi9cbiAgc2V0Um93KHJvdykge1xuICAgIHJldHVybiBuZXcgRm9jdXMocm93LCB0aGlzLmNvbHVtbiwgdGhpcy5vZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBmb2N1cyBvYmplY3QgYnkgc2V0dGluZyBpdHMgY29sdW1uIHRvIHRoZSBzcGVjaWZpZWQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4gLSBDb2x1bW4gb2YgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICogQHJldHVybnMge0ZvY3VzfSBBIG5ldyBmb2N1cyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbHVtbi5cbiAgICovXG4gIHNldENvbHVtbihjb2x1bW4pIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzKHRoaXMucm93LCBjb2x1bW4sIHRoaXMub2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgZm9jdXMgb2JqZWN0IGJ5IHNldHRpbmcgaXRzIG9mZnNldCB0byB0aGUgc3BlY2lmaWVkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gT2Zmc2V0IGluIHRoZSBmb2N1c2VkIGNlbGwuXG4gICAqIEByZXR1cm5zIHtGb2N1c30gQSBuZXcgZm9jdXMgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBvZmZzZXQuXG4gICAqL1xuICBzZXRPZmZzZXQob2Zmc2V0KSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1cyh0aGlzLnJvdywgdGhpcy5jb2x1bW4sIG9mZnNldCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGNvbHVtbiBhbGlnbm1lbnQuXG4gKlxuICogLSBgQWxpZ25tZW50Lk5PTkVgIC0gVXNlIGRlZmF1bHQgYWxpZ25tZW50LlxuICogLSBgQWxpZ25tZW50LkxFRlRgIC0gQWxpZ24gbGVmdC5cbiAqIC0gYEFsaWdubWVudC5SSUdIVGAgLSBBbGlnbiByaWdodC5cbiAqIC0gYEFsaWdubWVudC5DRU5URVJgIC0gQWxpZ24gY2VudGVyLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IEFsaWdubWVudCA9IE9iamVjdC5mcmVlemUoe1xuICBOT05FICA6IFwibm9uZVwiLFxuICBMRUZUICA6IFwibGVmdFwiLFxuICBSSUdIVCA6IFwicmlnaHRcIixcbiAgQ0VOVEVSOiBcImNlbnRlclwiXG59KTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGRlZmF1bHQgY29sdW1uIGFsaWdubWVudFxuICpcbiAqIC0gYERlZmF1bHRBbGlnbm1lbnQuTEVGVGAgLSBBbGlnbiBsZWZ0LlxuICogLSBgRGVmYXVsdEFsaWdubWVudC5SSUdIVGAgLSBBbGlnbiByaWdodC5cbiAqIC0gYERlZmF1bHRBbGlnbm1lbnQuQ0VOVEVSYCAtIEFsaWduIGNlbnRlci5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBEZWZhdWx0QWxpZ25tZW50ID0gT2JqZWN0LmZyZWV6ZSh7XG4gIExFRlQgIDogQWxpZ25tZW50LkxFRlQsXG4gIFJJR0hUIDogQWxpZ25tZW50LlJJR0hULFxuICBDRU5URVI6IEFsaWdubWVudC5DRU5URVJcbn0pO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYWxpZ25tZW50IG9mIGhlYWRlciBjZWxscy5cbiAqXG4gKiAtIGBIZWFkZXJBbGlnbm1lbnQuRk9MTE9XYCAtIEZvbGxvdyBjb2x1bW4ncyBhbGlnbm1lbnQuXG4gKiAtIGBIZWFkZXJBbGlnbm1lbnQuTEVGVGAgLSBBbGlnbiBsZWZ0LlxuICogLSBgSGVhZGVyQWxpZ25tZW50LlJJR0hUYCAtIEFsaWduIHJpZ2h0LlxuICogLSBgSGVhZGVyQWxpZ25tZW50LkNFTlRFUmAgLSBBbGlnbiBjZW50ZXIuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgSGVhZGVyQWxpZ25tZW50ID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEZPTExPVzogXCJmb2xsb3dcIixcbiAgTEVGVCAgOiBBbGlnbm1lbnQuTEVGVCxcbiAgUklHSFQgOiBBbGlnbm1lbnQuUklHSFQsXG4gIENFTlRFUjogQWxpZ25tZW50LkNFTlRFUlxufSk7XG5cbi8qKlxuICogQSBgVGFibGVDZWxsYCBvYmplY3QgcmVwcmVzZW50cyBhIHRhYmxlIGNlbGwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgVGFibGVDZWxsIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYFRhYmxlQ2VsbGAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmF3Q29udGVudCAtIFJhdyBjb250ZW50IG9mIHRoZSBjZWxsLlxuICAgKi9cbiAgY29uc3RydWN0b3IocmF3Q29udGVudCkge1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3Jhd0NvbnRlbnQgPSByYXdDb250ZW50O1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX2NvbnRlbnQgPSByYXdDb250ZW50LnRyaW0oKTtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9wYWRkaW5nTGVmdCA9IHRoaXMuX2NvbnRlbnQgPT09IFwiXCJcbiAgICAgID8gKHRoaXMuX3Jhd0NvbnRlbnQgPT09IFwiXCIgPyAwIDogMSlcbiAgICAgIDogdGhpcy5fcmF3Q29udGVudC5sZW5ndGggLSB0aGlzLl9yYXdDb250ZW50LnRyaW1MZWZ0KCkubGVuZ3RoO1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3BhZGRpbmdSaWdodCA9IHRoaXMuX3Jhd0NvbnRlbnQubGVuZ3RoIC0gdGhpcy5fY29udGVudC5sZW5ndGggLSB0aGlzLl9wYWRkaW5nTGVmdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYXcgY29udGVudCBvZiB0aGUgY2VsbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCByYXdDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yYXdDb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaW1tZWQgY29udGVudCBvZiB0aGUgY2VsbC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBsZWZ0IHBhZGRpbmcgb2YgdGhlIGNlbGwuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcGFkZGluZ0xlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZGRpbmdMZWZ0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSByaWdodCBwYWRkaW5nIG9mIHRoZSBjZWxsLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHBhZGRpbmdSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZ1JpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnMgdGhlIGNlbGwgdG8gYSB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmF3IGNvbnRlbnQgb2YgdGhlIGNlbGwuXG4gICAqL1xuICB0b1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmF3Q29udGVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGNlbGwgaXMgYSBkZWxpbWl0ZXIgaS5lLiBpdCBvbmx5IGNvbnRhaW5zIGh5cGhlbnMgYC1gIHdpdGggb3B0aW9uYWwgb25lXG4gICAqIGxlYWRpbmcgYW5kIHRyYWlsaW5nIGNvbG9ucyBgOmAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGNlbGwgaXMgYSBkZWxpbWl0ZXIuXG4gICAqL1xuICBpc0RlbGltaXRlcigpIHtcbiAgICByZXR1cm4gL15cXHMqOj8tKzo/XFxzKiQvLnRlc3QodGhpcy5yYXdDb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhbGlnbm1lbnQgdGhlIGNlbGwgcmVwcmVzZW50cy5cbiAgICpcbiAgICogQHJldHVybnMge0FsaWdubWVudHx1bmRlZmluZWR9IFRoZSBhbGlnbm1lbnQgdGhlIGNlbGwgcmVwcmVzZW50cztcbiAgICogYHVuZGVmaW5lZGAgaWYgdGhlIGNlbGwgaXMgbm90IGEgZGVsaW1pdGVyLlxuICAgKi9cbiAgZ2V0QWxpZ25tZW50KCkge1xuICAgIGlmICghdGhpcy5pc0RlbGltaXRlcigpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50WzBdID09PSBcIjpcIikge1xuICAgICAgaWYgKHRoaXMuY29udGVudFt0aGlzLmNvbnRlbnQubGVuZ3RoIC0gMV0gPT09IFwiOlwiKSB7XG4gICAgICAgIHJldHVybiBBbGlnbm1lbnQuQ0VOVEVSO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBBbGlnbm1lbnQuTEVGVDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50W3RoaXMuY29udGVudC5sZW5ndGggLSAxXSA9PT0gXCI6XCIpIHtcbiAgICAgICAgcmV0dXJuIEFsaWdubWVudC5SSUdIVDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gQWxpZ25tZW50Lk5PTkU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgcmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIHRyaW1tZWQgY29udGVudCBmcm9tIHRoYXQgaW4gdGhlIHJhdyBjb250ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmF3T2Zmc2V0IC0gUmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIHJhdyBjb250ZW50LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSB0cmltbWVkIGNvbnRlbnQuXG4gICAqL1xuICBjb21wdXRlQ29udGVudE9mZnNldChyYXdPZmZzZXQpIHtcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHJhd09mZnNldCA8IHRoaXMucGFkZGluZ0xlZnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAocmF3T2Zmc2V0IDwgdGhpcy5wYWRkaW5nTGVmdCArIHRoaXMuY29udGVudC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByYXdPZmZzZXQgLSB0aGlzLnBhZGRpbmdMZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIHJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSByYXcgY29udGVudCBmcm9tIHRoYXQgaW4gdGhlIHRyaW1tZWQgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRPZmZzZXQgLSBSZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgdHJpbW1lZCBjb250ZW50LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSAtIFJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSByYXcgY29udGVudC5cbiAgICovXG4gIGNvbXB1dGVSYXdPZmZzZXQoY29udGVudE9mZnNldCkge1xuICAgIHJldHVybiBjb250ZW50T2Zmc2V0ICsgdGhpcy5wYWRkaW5nTGVmdDtcbiAgfVxufVxuXG4vKipcbiAqIEEgYFRhYmxlUm93YCBvYmplY3QgcmVwcmVzZW50cyBhIHRhYmxlIHJvdy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBUYWJsZVJvdyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBUYWJsZVJvd2Agb2JqZWMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8VGFibGVDZWxsPn0gY2VsbHMgLSBDZWxscyB0aGF0IHRoZSByb3cgY29udGFpbnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJnaW5MZWZ0IC0gTWFyZ2luIHN0cmluZyBhdCB0aGUgbGVmdCBvZiB0aGUgcm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFyZ2luUmlnaHQgLSBNYXJnaW4gc3RyaW5nIGF0IHRoZSByaWdodCBvZiB0aGUgcm93LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY2VsbHMsIG1hcmdpbkxlZnQsIG1hcmdpblJpZ2h0KSB7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fY2VsbHMgPSBjZWxscy5zbGljZSgpO1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX21hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX21hcmdpblJpZ2h0ID0gbWFyZ2luUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogTWFyZ2luIHN0cmluZyBhdCB0aGUgbGVmdCBvZiB0aGUgcm93LlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1hcmdpbkxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmdpbkxlZnQ7XG4gIH1cblxuICAvKipcbiAgICogTWFyZ2luIHN0cmluZyBhdCB0aGUgcmlnaHQgb2YgdGhlIHJvdy5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtYXJnaW5SaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFyZ2luUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHRoZSBjZWxscyBpbiB0aGUgcm93LlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBOdW1iZXIgb2YgdGhlIGNlbGxzLlxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbGxzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjZWxscyB0aGF0IHRoZSByb3cgY29udGFpbnMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheTxUYWJsZUNlbGw+fSBBbiBhcnJheSBvZiBjZWxscyB0aGF0IHRoZSByb3cgY29udGFpbnMuXG4gICAqL1xuICBnZXRDZWxscygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VsbHMuc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgY2VsbCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBJbmRleC5cbiAgICogQHJldHVybnMge1RhYmxlQ2VsbHx1bmRlZmluZWR9IFRoZSBjZWxsIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggaWYgZXhpc3RzO1xuICAgKiBgdW5kZWZpbmVkYCBpZiBubyBjZWxsIGlzIGZvdW5kLlxuICAgKi9cbiAgZ2V0Q2VsbEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlbGxzW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJzIHRoZSByb3cgdG8gYSB0ZXh0IHJlcHJlc2VudGF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHRleHQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJvdy5cbiAgICovXG4gIHRvVGV4dCgpIHtcbiAgICBpZiAodGhpcy5fY2VsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXJnaW5MZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5fY2VsbHMubWFwKGNlbGwgPT4gY2VsbC50b1RleHQoKSkuam9pbihcInxcIik7XG4gICAgICByZXR1cm4gYCR7dGhpcy5tYXJnaW5MZWZ0fXwke2NlbGxzfXwke3RoaXMubWFyZ2luUmlnaHR9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSByb3cgaXMgYSBkZWxpbWl0ZXIgb3Igbm90LlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSByb3cgaXMgYSBkZWxpbWl0ZXIgaS5lLiBhbGwgdGhlIGNlbGxzIGNvbnRhaW5lZCBhcmUgZGVsaW1pdGVycy5cbiAgICovXG4gIGlzRGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jZWxscy5ldmVyeShjZWxsID0+IGNlbGwuaXNEZWxpbWl0ZXIoKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGBUYWJsZWAgb2JqZWN0IHJlcHJlc2VudHMgYSB0YWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBUYWJsZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGBUYWJsZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PFRhYmxlUm93Pn0gcm93cyAtIEFuIGFycmF5IG9mIHJvd3MgdGhhdCB0aGUgdGFibGUgY29udGFpbnMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb3dzKSB7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fcm93cyA9IHJvd3Muc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgdGFibGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBudW1iZXIgb2Ygcm93cy5cbiAgICovXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgcm93cyBpbiB0aGUgdGFibGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSByb3dzLlxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3MubWFwKHJvdyA9PiByb3cuZ2V0V2lkdGgoKSlcbiAgICAgIC5yZWR1Y2UoKHgsIHkpID0+IE1hdGgubWF4KHgsIHkpLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgaGVhZGVyIHJvdy5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlcnx1bmRlZmluZWR9IFRoZSB3aWR0aCBvZiB0aGUgaGVhZGVyIHJvdztcbiAgICogYHVuZGVmaW5lZGAgaWYgdGhlcmUgaXMgbm8gaGVhZGVyIHJvdy5cbiAgICovXG4gIGdldEhlYWRlcldpZHRoKCkge1xuICAgIGlmICh0aGlzLl9yb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3NbMF0uZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb3dzIHRoYXQgdGhlIHRhYmxlIGNvbnRhaW5zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8VGFibGVSb3c+fSBBbiBhcnJheSBvZiB0aGUgcm93cy5cbiAgICovXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3Muc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgcm93IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFJvdyBpbmRleC5cbiAgICogQHJldHVybnMge1RhYmxlUm93fHVuZGVmaW5lZH0gVGhlIHJvdyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4O1xuICAgKiBgdW5kZWZpbmVkYCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBnZXRSb3dBdChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkZWxpbWl0ZXIgcm93IG9mIHRoZSB0YWJsZS5cbiAgICpcbiAgICogQHJldHVybnMge1RhYmxlUm93fHVuZGVmaW5lZH0gVGhlIGRlbGltaXRlciByb3c7XG4gICAqIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vdCBkZWxpbWl0ZXIgcm93LlxuICAgKi9cbiAgZ2V0RGVsaW1pdGVyUm93KCkge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuX3Jvd3NbMV07XG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocm93LmlzRGVsaW1pdGVyKCkpIHtcbiAgICAgIHJldHVybiByb3c7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGNlbGwgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0luZGV4IC0gUm93IGluZGV4IG9mIHRoZSBjZWxsLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uSW5kZXggLSBDb2x1bW4gaW5kZXggb2YgdGhlIGNlbGwuXG4gICAqIEByZXR1cm5zIHtUYWJsZUNlbGx8dW5kZWZpbmVkfSBUaGUgY2VsbCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4O1xuICAgKiBgdW5kZWZpbmVkYCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBnZXRDZWxsQXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgY29uc3Qgcm93ID0gdGhpcy5fcm93c1tyb3dJbmRleF07XG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcm93LmdldENlbGxBdChjb2x1bW5JbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY2VsbCBhdCB0aGUgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9jdXN9IGZvY3VzIC0gRm9jdXMgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7VGFibGVDZWxsfHVuZGVmaW5lZH0gVGhlIGNlbGwgYXQgdGhlIGZvY3VzO1xuICAgKiBgdW5kZWZpbmVkYCBpZiBub3QgZm91bmQuXG4gICAqL1xuICBnZXRGb2N1c2VkQ2VsbChmb2N1cykge1xuICAgIHJldHVybiB0aGlzLmdldENlbGxBdChmb2N1cy5yb3csIGZvY3VzLmNvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHRhYmxlIHRvIGFuIGFycmF5IG9mIHRleHQgcmVwcmVzZW50YXRpb25zIG9mIHRoZSByb3dzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn0gQW4gYXJyYXkgb2YgdGV4dCByZXByZXNlbnRhdGlvbnMgb2YgdGhlIHJvd3MuXG4gICAqL1xuICB0b0xpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzLm1hcChyb3cgPT4gcm93LnRvVGV4dCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyBhIGZvY3VzIGZyb20gYSBwb2ludCBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7UG9pbnR9IHBvcyAtIEEgcG9pbnQgaW4gdGhlIHRleHQgZWRpdG9yLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93T2Zmc2V0IC0gVGhlIHJvdyBpbmRleCB3aGVyZSB0aGUgdGFibGUgc3RhcnRzIGluIHRoZSB0ZXh0IGVkaXRvci5cbiAgICogQHJldHVybnMge0ZvY3VzfHVuZGVmaW5lZH0gQSBmb2N1cyBvYmplY3QgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgc3BlY2lmaWVkIHBvaW50O1xuICAgKiBgdW5kZWZpbmVkYCBpZiB0aGUgcm93IGluZGV4IGlzIG91dCBvZiBib3VuZHMuXG4gICAqL1xuICBmb2N1c09mUG9zaXRpb24ocG9zLCByb3dPZmZzZXQpIHtcbiAgICBjb25zdCByb3dJbmRleCA9IHBvcy5yb3cgLSByb3dPZmZzZXQ7XG4gICAgY29uc3Qgcm93ID0gdGhpcy5fcm93c1tyb3dJbmRleF07XG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocG9zLmNvbHVtbiA8IHJvdy5tYXJnaW5MZWZ0Lmxlbmd0aCArIDEpIHtcbiAgICAgIHJldHVybiBuZXcgRm9jdXMocm93SW5kZXgsIC0xLCBwb3MuY29sdW1uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjZWxsV2lkdGhzID0gcm93LmdldENlbGxzKCkubWFwKGNlbGwgPT4gY2VsbC5yYXdDb250ZW50Lmxlbmd0aCk7XG4gICAgICBsZXQgY29sdW1uUG9zID0gcm93Lm1hcmdpbkxlZnQubGVuZ3RoICsgMTsgLy8gbGVmdCBtYXJnaW4gKyBhIHBpcGVcbiAgICAgIGxldCBjb2x1bW5JbmRleCA9IDA7XG4gICAgICBmb3IgKDsgY29sdW1uSW5kZXggPCBjZWxsV2lkdGhzLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICBpZiAoY29sdW1uUG9zICsgY2VsbFdpZHRoc1tjb2x1bW5JbmRleF0gKyAxID4gcG9zLmNvbHVtbikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtblBvcyArPSBjZWxsV2lkdGhzW2NvbHVtbkluZGV4XSArIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBvZmZzZXQgPSBwb3MuY29sdW1uIC0gY29sdW1uUG9zO1xuICAgICAgcmV0dXJuIG5ldyBGb2N1cyhyb3dJbmRleCwgY29sdW1uSW5kZXgsIG9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGEgcG9zaXRpb24gaW4gdGhlIHRleHQgZWRpdG9yIGZyb20gYSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtGb2N1c30gZm9jdXMgLSBBIGZvY3VzIG9iamVjdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvd09mZnNldCAtIFRoZSByb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqIEByZXR1cm5zIHtQb2ludHx1bmRlZmluZWR9IEEgcG9zaXRpb24gaW4gdGhlIHRleHQgZWRpdG9yIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGZvY3VzO1xuICAgKiBgdW5kZWZpbmVkYCBpZiB0aGUgZm9jdXNlZCByb3cgIGlzIG91dCBvZiB0aGUgdGFibGUuXG4gICAqL1xuICBwb3NpdGlvbk9mRm9jdXMoZm9jdXMsIHJvd09mZnNldCkge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuX3Jvd3NbZm9jdXMucm93XTtcbiAgICBpZiAocm93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHJvd1BvcyA9IGZvY3VzLnJvdyArIHJvd09mZnNldDtcbiAgICBpZiAoZm9jdXMuY29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChyb3dQb3MsIGZvY3VzLm9mZnNldCk7XG4gICAgfVxuICAgIGNvbnN0IGNlbGxXaWR0aHMgPSByb3cuZ2V0Q2VsbHMoKS5tYXAoY2VsbCA9PiBjZWxsLnJhd0NvbnRlbnQubGVuZ3RoKTtcbiAgICBjb25zdCBtYXhJbmRleCA9IE1hdGgubWluKGZvY3VzLmNvbHVtbiwgY2VsbFdpZHRocy5sZW5ndGgpO1xuICAgIGxldCBjb2x1bW5Qb3MgPSByb3cubWFyZ2luTGVmdC5sZW5ndGggKyAxO1xuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBtYXhJbmRleDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgY29sdW1uUG9zICs9IGNlbGxXaWR0aHNbY29sdW1uSW5kZXhdICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludChyb3dQb3MsIGNvbHVtblBvcyArIGZvY3VzLm9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYSBzZWxlY3Rpb24gcmFuZ2UgZnJvbSBhIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZvY3VzfSBmb2N1cyAtIEEgZm9jdXMgb2JqZWN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93T2Zmc2V0IC0gVGhlIHJvdyBpbmRleCB3aGVyZSB0aGUgdGFibGUgc3RhcnRzIGluIHRoZSB0ZXh0IGVkaXRvci5cbiAgICogQHJldHVybnMge1JhbmdlfHVuZGVmaW5lZH0gQSByYW5nZSB0byBiZSBzZWxlY3RlZCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBmb2N1cztcbiAgICogYHVuZGVmaW5lZGAgaWYgdGhlIGZvY3VzIGRvZXMgbm90IHNwZWNpZnkgYW55IGNlbGwgb3IgdGhlIHNwZWNpZmllZCBjZWxsIGlzIGVtcHR5LlxuICAgKi9cbiAgc2VsZWN0aW9uUmFuZ2VPZkZvY3VzKGZvY3VzLCByb3dPZmZzZXQpIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLl9yb3dzW2ZvY3VzLnJvd107XG4gICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBjZWxsID0gcm93LmdldENlbGxBdChmb2N1cy5jb2x1bW4pO1xuICAgIGlmIChjZWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChjZWxsLmNvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHJvd1BvcyA9IGZvY3VzLnJvdyArIHJvd09mZnNldDtcbiAgICBjb25zdCBjZWxsV2lkdGhzID0gcm93LmdldENlbGxzKCkubWFwKGNlbGwgPT4gY2VsbC5yYXdDb250ZW50Lmxlbmd0aCk7XG4gICAgbGV0IGNvbHVtblBvcyA9IHJvdy5tYXJnaW5MZWZ0Lmxlbmd0aCArIDE7XG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGZvY3VzLmNvbHVtbjsgY29sdW1uSW5kZXgrKykge1xuICAgICAgY29sdW1uUG9zICs9IGNlbGxXaWR0aHNbY29sdW1uSW5kZXhdICsgMTtcbiAgICB9XG4gICAgY29sdW1uUG9zICs9IGNlbGwucGFkZGluZ0xlZnQ7XG4gICAgcmV0dXJuIG5ldyBSYW5nZShcbiAgICAgIG5ldyBQb2ludChyb3dQb3MsIGNvbHVtblBvcyksXG4gICAgICBuZXcgUG9pbnQocm93UG9zLCBjb2x1bW5Qb3MgKyBjZWxsLmNvbnRlbnQubGVuZ3RoKVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBTcGxpdHMgYSB0ZXh0IGludG8gY2VsbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqL1xuZnVuY3Rpb24gX3NwbGl0Q2VsbHModGV4dCkge1xuICBjb25zdCBjZWxscyA9IFtdO1xuICBsZXQgYnVmID0gXCJcIjtcbiAgbGV0IHJlc3QgPSB0ZXh0O1xuICB3aGlsZSAocmVzdCAhPT0gXCJcIikge1xuICAgIHN3aXRjaCAocmVzdFswXSkge1xuICAgIGNhc2UgXCJgXCI6XG4gICAgICAvLyByZWFkIGNvZGUgc3BhblxuICAgICAge1xuICAgICAgICBjb25zdCBzdGFydCA9IHJlc3QubWF0Y2goL15gKi8pWzBdO1xuICAgICAgICBsZXQgYnVmMSA9IHN0YXJ0O1xuICAgICAgICBsZXQgcmVzdDEgPSByZXN0LnN1YnN0cihzdGFydC5sZW5ndGgpO1xuICAgICAgICBsZXQgY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChyZXN0MSAhPT0gXCJcIikge1xuICAgICAgICAgIGlmIChyZXN0MVswXSA9PT0gXCJgXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHJlc3QxLm1hdGNoKC9eYCovKVswXTtcbiAgICAgICAgICAgIGJ1ZjEgKz0gZW5kO1xuICAgICAgICAgICAgcmVzdDEgPSByZXN0MS5zdWJzdHIoZW5kLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoZW5kLmxlbmd0aCA9PT0gc3RhcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZjEgKz0gcmVzdDFbMF07XG4gICAgICAgICAgICByZXN0MSA9IHJlc3QxLnN1YnN0cigxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3NlZCkge1xuICAgICAgICAgIGJ1ZiArPSBidWYxO1xuICAgICAgICAgIHJlc3QgPSByZXN0MTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBidWYgKz0gXCJgXCI7XG4gICAgICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiXFxcXFwiOlxuICAgICAgLy8gZXNjYXBlIG5leHQgY2hhcmFjdGVyXG4gICAgICBpZiAocmVzdC5sZW5ndGggPj0gMikge1xuICAgICAgICBidWYgKz0gcmVzdC5zdWJzdHIoMCwgMik7XG4gICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBidWYgKz0gXCJcXFxcXCI7XG4gICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cigxKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ8XCI6XG4gICAgICAvLyBmbHVzaCBidWZmZXJcbiAgICAgIGNlbGxzLnB1c2goYnVmKTtcbiAgICAgIGJ1ZiA9IFwiXCI7XG4gICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnVmICs9IHJlc3RbMF07XG4gICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMSk7XG4gICAgfVxuICB9XG4gIGNlbGxzLnB1c2goYnVmKTtcbiAgcmV0dXJuIGNlbGxzO1xufVxuXG4vKipcbiAqIFJlYWRzIGEgdGFibGUgcm93LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEEgdGV4dC5cbiAqIEBwYXJhbSB7UmVnRXhwfSBbbGVmdE1hcmdpblJlZ2V4PS9eXFxzKiQvXSAtIEEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCB0aGF0IG1hdGNoZXMgbGVmdCBtYXJnaW4uXG4gKiBAcmV0dXJucyB7VGFibGVSb3d9XG4gKi9cbmZ1bmN0aW9uIF9yZWFkUm93KHRleHQsIGxlZnRNYXJnaW5SZWdleCA9IC9eXFxzKiQvKSB7XG4gIGxldCBjZWxscyA9IF9zcGxpdENlbGxzKHRleHQpO1xuICBsZXQgbWFyZ2luTGVmdDtcbiAgaWYgKGNlbGxzLmxlbmd0aCA+IDAgJiYgbGVmdE1hcmdpblJlZ2V4LnRlc3QoY2VsbHNbMF0pKSB7XG4gICAgbWFyZ2luTGVmdCA9IGNlbGxzWzBdO1xuICAgIGNlbGxzID0gY2VsbHMuc2xpY2UoMSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbWFyZ2luTGVmdCA9IFwiXCI7XG4gIH1cbiAgbGV0IG1hcmdpblJpZ2h0O1xuICBpZiAoY2VsbHMubGVuZ3RoID4gMSAmJiAvXlxccyokLy50ZXN0KGNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdKSkge1xuICAgIG1hcmdpblJpZ2h0ID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgY2VsbHMgPSBjZWxscy5zbGljZSgwLCBjZWxscy5sZW5ndGggLSAxKTtcbiAgfVxuICBlbHNlIHtcbiAgICBtYXJnaW5SaWdodCA9IFwiXCI7XG4gIH1cbiAgcmV0dXJuIG5ldyBUYWJsZVJvdyhjZWxscy5tYXAoY2VsbCA9PiBuZXcgVGFibGVDZWxsKGNlbGwpKSwgbWFyZ2luTGVmdCwgbWFyZ2luUmlnaHQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWdleCBzb3VyY2Ugc3RyaW5nIG9mIG1hcmdpbiBjaGFyYWN0ZXIgY2xhc3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U2V0PHN0cmluZz59IGNoYXJzIC0gQSBzZXQgb2YgYWRkaXRpb25hbCBtYXJnaW4gY2hhcmFjdGVycy5cbiAqIEEgcGlwZSBgfGAsIGEgYmFja3NsYXNoIGBcXGAsIGFuZCBhIGJhY2txdW90ZSB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgcmVnZXggc291cmNlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbWFyZ2luUmVnZXhTcmMoY2hhcnMpIHtcbiAgbGV0IGNzID0gXCJcIjtcbiAgZm9yIChjb25zdCBjIG9mIGNoYXJzKSB7XG4gICAgaWYgKGMgIT09IFwifFwiICYmIGMgIT09IFwiXFxcXFwiICYmIGMgIT09IFwiYFwiKSB7XG4gICAgICBjcyArPSBgXFxcXHV7JHtjLmNvZGVQb2ludEF0KDApLnRvU3RyaW5nKDE2KX19YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGBbXFxcXHMke2NzfV0qYDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCB0aGF0IG1hdGNoZXMgbWFyZ2luIG9mIHRhYmxlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTZXQ8c3RyaW5nPn0gY2hhcnMgLSBBIHNldCBvZiBhZGRpdGlvbmFsIG1hcmdpbiBjaGFyYWN0ZXJzLlxuICogQSBwaXBlIGB8YCwgYSBiYWNrc2xhc2ggYFxcYCwgYW5kIGEgYmFja3F1b3RlIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm4ge1JlZ0V4cH0gQW4gcmVndWxhciBleHByZXNzaW9uIG9iamVjdCB0aGF0IG1hdGNoZXMgbWFyZ2luIG9mIHRhYmxlcy5cbiAqL1xuZnVuY3Rpb24gX21hcmdpblJlZ2V4KGNoYXJzKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKGBeJHttYXJnaW5SZWdleFNyYyhjaGFycyl9JGAsIFwidVwiKTtcbn1cblxuLyoqXG4gKiBSZWFkcyBhIHRhYmxlIGZyb20gbGluZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbGluZXMgLSBBbiBhcnJheSBvZiB0ZXh0cywgZWFjaCB0ZXh0IHJlcHJlc2VudHMgYSByb3cuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbnMgZm9yIHBhcnNpbmcuXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICB8IHR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBgbGVmdE1hcmdpbkNoYXJzYCB8IHtAbGluayBTZXR9Jmx0O3tAbGluayBzdHJpbmd9Jmd0OyB8IEEgc2V0IG9mIGFkZGl0aW9uYWwgbGVmdCBtYXJnaW4gY2hhcmFjdGVycy4gfFxuICpcbiAqIEByZXR1cm5zIHtUYWJsZX0gVGhlIHRhYmxlIHJlZCBmcm9tIHRoZSBsaW5lcy5cbiAqL1xuZnVuY3Rpb24gcmVhZFRhYmxlKGxpbmVzLCBvcHRpb25zKSB7XG4gIGNvbnN0IGxlZnRNYXJnaW5SZWdleCA9IF9tYXJnaW5SZWdleChvcHRpb25zLmxlZnRNYXJnaW5DaGFycyk7XG4gIHJldHVybiBuZXcgVGFibGUobGluZXMubWFwKGxpbmUgPT4gX3JlYWRSb3cobGluZSwgbGVmdE1hcmdpblJlZ2V4KSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWxpbWl0ZXIgdGV4dC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBbGlnbm1lbnR9IGFsaWdubWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gV2lkdGggb2YgdGhlIGhvcml6b250YWwgYmFyIG9mIGRlbGltaXRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiBAdGhyb3dzIHtFcnJvcn0gVW5rbm93biBhbGlnbm1lbnQuXG4gKi9cbmZ1bmN0aW9uIF9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudCwgd2lkdGgpIHtcbiAgY29uc3QgYmFyID0gXCItXCIucmVwZWF0KHdpZHRoKTtcbiAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgY2FzZSBBbGlnbm1lbnQuTk9ORTpcbiAgICByZXR1cm4gYCAke2Jhcn0gYDtcbiAgY2FzZSBBbGlnbm1lbnQuTEVGVDpcbiAgICByZXR1cm4gYDoke2Jhcn0gYDtcbiAgY2FzZSBBbGlnbm1lbnQuUklHSFQ6XG4gICAgcmV0dXJuIGAgJHtiYXJ9OmA7XG4gIGNhc2UgQWxpZ25tZW50LkNFTlRFUjpcbiAgICByZXR1cm4gYDoke2Jhcn06YDtcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGFsaWdubWVudDogXCIgKyBhbGlnbm1lbnQpO1xuICB9XG59XG5cbi8qKlxuICogRXh0ZW5kcyBhcnJheSBzaXplLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpbGwgbmV3bHkgY3JlYXRlZCBjZWxscy5cbiAqIEByZXR1cm5zIHtBcnJheX0gRXh0ZW5kZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRBcnJheShhcnIsIHNpemUsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGV4dGVuZGVkID0gYXJyLnNsaWNlKCk7XG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgZXh0ZW5kZWQucHVzaChjYWxsYmFjayhpLCBhcnIpKTtcbiAgfVxuICByZXR1cm4gZXh0ZW5kZWQ7XG59XG5cbi8qKlxuICogQ29tcGxldGVzIGEgdGFibGUgYnkgYWRkaW5nIG1pc3NpbmcgZGVsaW1pdGVyIGFuZCBjZWxscy5cbiAqIEFmdGVyIGNvbXBsZXRpb24sIGFsbCByb3dzIGluIHRoZSB0YWJsZSBoYXZlIHRoZSBzYW1lIHdpZHRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgdGFibGUgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBjb21wbGV0aW9uLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgICB8IHR5cGUgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYG1pbkRlbGltaXRlcldpZHRoYCB8IHtAbGluayBudW1iZXJ9IHwgV2lkdGggb2YgZGVsaW1pdGVycyB1c2VkIHdoZW4gY29tcGxldGluZyBkZWxpbWl0ZXIgY2VsbHMuIHxcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgdGhlIGNvbXBsZXRpb24uXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICAgIHwgdHlwZSAgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBgdGFibGVgICAgICAgICAgICAgIHwge0BsaW5rIFRhYmxlfSAgIHwgQSBjb21wbGV0ZWQgdGFibGUgb2JqZWN0LiAgICAgICAgICAgICAgfFxuICogfCBgZGVsaW1pdGVySW5zZXJ0ZWRgIHwge0BsaW5rIGJvb2xlYW59IHwgYHRydWVgIGlmIGEgZGVsaW1pdGVyIHJvdyBpcyBpbnNlcnRlZC4gfFxuICpcbiAqIEB0aHJvd3Mge0Vycm9yfSBFbXB0eSB0YWJsZS5cbiAqL1xuZnVuY3Rpb24gY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucykge1xuICBjb25zdCB0YWJsZUhlaWdodCA9IHRhYmxlLmdldEhlaWdodCgpO1xuICBjb25zdCB0YWJsZVdpZHRoID0gdGFibGUuZ2V0V2lkdGgoKTtcbiAgaWYgKHRhYmxlSGVpZ2h0ID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgdGFibGVcIik7XG4gIH1cbiAgY29uc3Qgcm93cyA9IHRhYmxlLmdldFJvd3MoKTtcbiAgY29uc3QgbmV3Um93cyA9IFtdO1xuICAvLyBoZWFkZXJcbiAgY29uc3QgaGVhZGVyUm93ID0gcm93c1swXTtcbiAgY29uc3QgaGVhZGVyQ2VsbHMgPSBoZWFkZXJSb3cuZ2V0Q2VsbHMoKTtcbiAgbmV3Um93cy5wdXNoKG5ldyBUYWJsZVJvdyhcbiAgICBfZXh0ZW5kQXJyYXkoaGVhZGVyQ2VsbHMsIHRhYmxlV2lkdGgsIGogPT4gbmV3IFRhYmxlQ2VsbChcbiAgICAgIGogPT09IGhlYWRlckNlbGxzLmxlbmd0aCA/IGhlYWRlclJvdy5tYXJnaW5SaWdodCA6IFwiXCJcbiAgICApKSxcbiAgICBoZWFkZXJSb3cubWFyZ2luTGVmdCxcbiAgICBoZWFkZXJDZWxscy5sZW5ndGggPCB0YWJsZVdpZHRoID8gXCJcIiA6IGhlYWRlclJvdy5tYXJnaW5SaWdodFxuICApKTtcbiAgLy8gZGVsaW1pdGVyXG4gIGNvbnN0IGRlbGltaXRlclJvdyA9IHRhYmxlLmdldERlbGltaXRlclJvdygpO1xuICBpZiAoZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkZWxpbWl0ZXJDZWxscyA9IGRlbGltaXRlclJvdy5nZXRDZWxscygpO1xuICAgIG5ld1Jvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgICBfZXh0ZW5kQXJyYXkoZGVsaW1pdGVyQ2VsbHMsIHRhYmxlV2lkdGgsIGogPT4gbmV3IFRhYmxlQ2VsbChcbiAgICAgICAgX2RlbGltaXRlclRleHQoXG4gICAgICAgICAgQWxpZ25tZW50Lk5PTkUsXG4gICAgICAgICAgaiA9PT0gZGVsaW1pdGVyQ2VsbHMubGVuZ3RoXG4gICAgICAgICAgICA/IE1hdGgubWF4KG9wdGlvbnMubWluRGVsaW1pdGVyV2lkdGgsIGRlbGltaXRlclJvdy5tYXJnaW5SaWdodC5sZW5ndGggLSAyKVxuICAgICAgICAgICAgOiBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoXG4gICAgICAgIClcbiAgICAgICkpLFxuICAgICAgZGVsaW1pdGVyUm93Lm1hcmdpbkxlZnQsXG4gICAgICBkZWxpbWl0ZXJDZWxscy5sZW5ndGggPCB0YWJsZVdpZHRoID8gXCJcIiA6IGRlbGltaXRlclJvdy5tYXJnaW5SaWdodFxuICAgICkpO1xuICB9XG4gIGVsc2Uge1xuICAgIG5ld1Jvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgICBfZXh0ZW5kQXJyYXkoW10sIHRhYmxlV2lkdGgsICgpID0+IG5ldyBUYWJsZUNlbGwoXG4gICAgICAgIF9kZWxpbWl0ZXJUZXh0KEFsaWdubWVudC5OT05FLCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKVxuICAgICAgKSksXG4gICAgICBcIlwiLFxuICAgICAgXCJcIlxuICAgICkpO1xuICB9XG4gIC8vIGJvZHlcbiAgZm9yIChsZXQgaSA9IGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkID8gMiA6IDE7IGkgPCB0YWJsZUhlaWdodDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICBjb25zdCBjZWxscyA9IHJvdy5nZXRDZWxscygpO1xuICAgIG5ld1Jvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgICBfZXh0ZW5kQXJyYXkoY2VsbHMsIHRhYmxlV2lkdGgsIGogPT4gbmV3IFRhYmxlQ2VsbChcbiAgICAgICAgaiA9PT0gY2VsbHMubGVuZ3RoID8gcm93Lm1hcmdpblJpZ2h0IDogXCJcIlxuICAgICAgKSksXG4gICAgICByb3cubWFyZ2luTGVmdCxcbiAgICAgIGNlbGxzLmxlbmd0aCA8IHRhYmxlV2lkdGggPyBcIlwiIDogcm93Lm1hcmdpblJpZ2h0XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZSAgICAgICAgICAgIDogbmV3IFRhYmxlKG5ld1Jvd3MpLFxuICAgIGRlbGltaXRlckluc2VydGVkOiBkZWxpbWl0ZXJSb3cgPT09IHVuZGVmaW5lZFxuICB9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHdpZHRoIG9mIGEgdGV4dCBiYXNlZCBvbiBjaGFyYWN0ZXJzJyBFQVcgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC1cbiAqXG4gKiB8IHByb3BlcnR5IG5hbWUgICAgIHwgdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBub3JtYWxpemVgICAgICAgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGB3aWRlQ2hhcnNgICAgICAgIHwge0BsaW5rIFNldH0mbHQ7e0BsaW5rIHN0cmluZ30gJmd0OyB8XG4gKiB8IGBuYXJyb3dDaGFyc2AgICAgIHwge0BsaW5rIFNldH0mbHQ7e0BsaW5rIHN0cmluZ30gJmd0OyB8XG4gKiB8IGBhbWJpZ3VvdXNBc1dpZGVgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogQHJldHVybnMge251bWJlcn0gQ2FsY3VsYXRlZCB3aWR0aCBvZiB0aGUgdGV4dC5cbiAqL1xuZnVuY3Rpb24gX2NvbXB1dGVUZXh0V2lkdGgodGV4dCwgb3B0aW9ucykge1xuICBjb25zdCBub3JtYWxpemVkID0gb3B0aW9ucy5ub3JtYWxpemUgPyB0ZXh0Lm5vcm1hbGl6ZShcIk5GQ1wiKSA6IHRleHQ7XG4gIGxldCB3ID0gMDtcbiAgZm9yIChjb25zdCBjaGFyIG9mIG5vcm1hbGl6ZWQpIHtcbiAgICBpZiAob3B0aW9ucy53aWRlQ2hhcnMuaGFzKGNoYXIpKSB7XG4gICAgICB3ICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubmFycm93Q2hhcnMuaGFzKGNoYXIpKSB7XG4gICAgICB3ICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgc3dpdGNoIChtZWF3LmdldEVBVyhjaGFyKSkge1xuICAgIGNhc2UgXCJGXCI6XG4gICAgY2FzZSBcIldcIjpcbiAgICAgIHcgKz0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBXCI6XG4gICAgICB3ICs9IG9wdGlvbnMuYW1iaWd1b3VzQXNXaWRlID8gMiA6IDE7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdyArPSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgYWxpZ25lZCBjZWxsIGNvbnRlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7QWxpZ25tZW50fSBhbGlnbm1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgY29tcHV0aW5nIHRleHQgd2lkdGguXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHRocm93cyB7RXJyb3J9IFVua25vd24gYWxpZ25tZW50LlxuICogQHRocm93cyB7RXJyb3J9IFVuZXhwZWN0ZWQgZGVmYXVsdCBhbGlnbm1lbnQuXG4gKi9cbmZ1bmN0aW9uIF9hbGlnblRleHQodGV4dCwgd2lkdGgsIGFsaWdubWVudCwgb3B0aW9ucykge1xuICBjb25zdCBzcGFjZSA9IHdpZHRoIC0gX2NvbXB1dGVUZXh0V2lkdGgodGV4dCwgb3B0aW9ucyk7XG4gIGlmIChzcGFjZSA8IDApIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICBjYXNlIEFsaWdubWVudC5OT05FOlxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZGVmYXVsdCBhbGlnbm1lbnRcIik7XG4gIGNhc2UgQWxpZ25tZW50LkxFRlQ6XG4gICAgcmV0dXJuIHRleHQgKyBcIiBcIi5yZXBlYXQoc3BhY2UpO1xuICBjYXNlIEFsaWdubWVudC5SSUdIVDpcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KHNwYWNlKSArIHRleHQ7XG4gIGNhc2UgQWxpZ25tZW50LkNFTlRFUjpcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KE1hdGguZmxvb3Ioc3BhY2UgLyAyKSlcbiAgICAgICsgdGV4dFxuICAgICAgKyBcIiBcIi5yZXBlYXQoTWF0aC5jZWlsKHNwYWNlIC8gMikpO1xuICBkZWZhdWx0OlxuICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYWxpZ25tZW50OiBcIiArIGFsaWdubWVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBKdXN0IGFkZHMgb25lIHNwYWNlIHBhZGRpbmdzIHRvIGJvdGggc2lkZXMgb2YgYSB0ZXh0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gX3BhZFRleHQodGV4dCkge1xuICByZXR1cm4gYCAke3RleHR9IGA7XG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgdGFibGUgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBmb3JtYXR0aW5nLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgICB8IHR5cGUgICAgICAgICAgICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBtaW5EZWxpbWl0ZXJXaWR0aGAgfCB7QGxpbmsgbnVtYmVyfSAgICAgICAgICAgfCBNaW5pbXVtIHdpZHRoIG9mIGRlbGltaXRlcnMuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYGRlZmF1bHRBbGlnbm1lbnRgICB8IHtAbGluayBEZWZhdWx0QWxpZ25tZW50fSB8IERlZmF1bHQgYWxpZ25tZW50IG9mIGNvbHVtbnMuICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBgaGVhZGVyQWxpZ25tZW50YCAgIHwge0BsaW5rIEhlYWRlckFsaWdubWVudH0gIHwgQWxpZ25tZW50IG9mIGhlYWRlciBjZWxscy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGB0ZXh0V2lkdGhPcHRpb25zYCAgfCB7QGxpbmsgT2JqZWN0fSAgICAgICAgICAgfCBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBjb21wdXRpbmcgdGV4dCB3aWR0aHMuIHxcbiAqXG4gKiBgb3B0aW9ucy50ZXh0V2lkdGhPcHRpb25zYCBtdXN0IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBvcHRpb25zLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgfCB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBub3JtYWxpemVgICAgICAgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgIHwgTm9ybWFsaXplIHRleHRzIGJlZm9yZSBjb21wdXRpbmcgdGV4dCB3aWR0aHMuICAgICAgIHxcbiAqIHwgYHdpZGVDaGFyc2AgICAgICAgfCB7QGxpbmsgU2V0fSZsdDt7QGxpbmsgc3RyaW5nfSZndDsgfCBTZXQgb2YgY2hhcmFjdGVycyB0aGF0IHNob3VsZCBiZSB0cmVhdGVkIGFzIHdpZGUuICAgfFxuICogfCBgbmFycm93Q2hhcnNgICAgICB8IHtAbGluayBTZXR9Jmx0O3tAbGluayBzdHJpbmd9Jmd0OyB8IFNldCBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgbmFycm93LiB8XG4gKiB8IGBhbWJpZ3VvdXNBc1dpZGVgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgIHwgVHJlYXQgRWFzdCBBc2lhbiBBbWJpZ3VvdXMgY2hhcmFjdGVycyBhcyB3aWRlLiAgICAgIHxcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgZm9ybWF0dGluZy5cbiAqXG4gKiB8IHByb3BlcnR5IG5hbWUgICB8IHR5cGUgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGB0YWJsZWAgICAgICAgICB8IHtAbGluayBUYWJsZX0gIHwgQSBmb3JtYXR0ZWQgdGFibGUgb2JqZWN0LiAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGBtYXJnaW5MZWZ0YCAgICB8IHtAbGluayBzdHJpbmd9IHwgVGhlIGNvbW1vbiBsZWZ0IG1hcmdpbiBvZiB0aGUgZm9ybWF0dGVkIHRhYmxlLiB8XG4gKi9cbmZ1bmN0aW9uIF9mb3JtYXRUYWJsZSh0YWJsZSwgb3B0aW9ucykge1xuICBjb25zdCB0YWJsZUhlaWdodCA9IHRhYmxlLmdldEhlaWdodCgpO1xuICBjb25zdCB0YWJsZVdpZHRoID0gdGFibGUuZ2V0V2lkdGgoKTtcbiAgaWYgKHRhYmxlSGVpZ2h0ID09PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYmxlLFxuICAgICAgbWFyZ2luTGVmdDogXCJcIlxuICAgIH07XG4gIH1cbiAgY29uc3QgbWFyZ2luTGVmdCA9IHRhYmxlLmdldFJvd0F0KDApLm1hcmdpbkxlZnQ7XG4gIGlmICh0YWJsZVdpZHRoID09PSAwKSB7XG4gICAgY29uc3Qgcm93cyA9IG5ldyBBcnJheSh0YWJsZUhlaWdodCkuZmlsbCgpXG4gICAgICAubWFwKCgpID0+IG5ldyBUYWJsZVJvdyhbXSwgbWFyZ2luTGVmdCwgXCJcIikpO1xuICAgIHJldHVybiB7XG4gICAgICB0YWJsZTogbmV3IFRhYmxlKHJvd3MpLFxuICAgICAgbWFyZ2luTGVmdFxuICAgIH07XG4gIH1cbiAgLy8gY29tcHV0ZSBjb2x1bW4gd2lkdGhzXG4gIGNvbnN0IGRlbGltaXRlclJvdyA9IHRhYmxlLmdldERlbGltaXRlclJvdygpO1xuICBjb25zdCBjb2x1bW5XaWR0aHMgPSBuZXcgQXJyYXkodGFibGVXaWR0aCkuZmlsbCgwKTtcbiAgaWYgKGRlbGltaXRlclJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZGVsaW1pdGVyUm93V2lkdGggPSBkZWxpbWl0ZXJSb3cuZ2V0V2lkdGgoKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRlbGltaXRlclJvd1dpZHRoOyBqKyspIHtcbiAgICAgIGNvbHVtbldpZHRoc1tqXSA9IG9wdGlvbnMubWluRGVsaW1pdGVyV2lkdGg7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVIZWlnaHQ7IGkrKykge1xuICAgIGlmIChkZWxpbWl0ZXJSb3cgIT09IHVuZGVmaW5lZCAmJiBpID09PSAxKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3Qgcm93ID0gdGFibGUuZ2V0Um93QXQoaSk7XG4gICAgY29uc3Qgcm93V2lkdGggPSByb3cuZ2V0V2lkdGgoKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd1dpZHRoOyBqKyspIHtcbiAgICAgIGNvbHVtbldpZHRoc1tqXSA9IE1hdGgubWF4KFxuICAgICAgICBjb2x1bW5XaWR0aHNbal0sXG4gICAgICAgIF9jb21wdXRlVGV4dFdpZHRoKHJvdy5nZXRDZWxsQXQoaikuY29udGVudCwgb3B0aW9ucy50ZXh0V2lkdGhPcHRpb25zKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IGNvbHVtbiBhbGlnbm1lbnRzXG4gIGNvbnN0IGFsaWdubWVudHMgPSBkZWxpbWl0ZXJSb3cgIT09IHVuZGVmaW5lZFxuICAgID8gX2V4dGVuZEFycmF5KFxuICAgICAgZGVsaW1pdGVyUm93LmdldENlbGxzKCkubWFwKGNlbGwgPT4gY2VsbC5nZXRBbGlnbm1lbnQoKSksXG4gICAgICB0YWJsZVdpZHRoLFxuICAgICAgKCkgPT4gb3B0aW9ucy5kZWZhdWx0QWxpZ25tZW50XG4gICAgKVxuICAgIDogbmV3IEFycmF5KHRhYmxlV2lkdGgpLmZpbGwob3B0aW9ucy5kZWZhdWx0QWxpZ25tZW50KTtcbiAgLy8gZm9ybWF0XG4gIGNvbnN0IHJvd3MgPSBbXTtcbiAgLy8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlclJvdyA9IHRhYmxlLmdldFJvd0F0KDApO1xuICByb3dzLnB1c2gobmV3IFRhYmxlUm93KFxuICAgIGhlYWRlclJvdy5nZXRDZWxscygpLm1hcCgoY2VsbCwgaikgPT5cbiAgICAgIG5ldyBUYWJsZUNlbGwoX3BhZFRleHQoX2FsaWduVGV4dChcbiAgICAgICAgY2VsbC5jb250ZW50LFxuICAgICAgICBjb2x1bW5XaWR0aHNbal0sXG4gICAgICAgIG9wdGlvbnMuaGVhZGVyQWxpZ25tZW50ID09PSBIZWFkZXJBbGlnbm1lbnQuRk9MTE9XXG4gICAgICAgICAgPyAoYWxpZ25tZW50c1tqXSA9PT0gQWxpZ25tZW50Lk5PTkUgPyBvcHRpb25zLmRlZmF1bHRBbGlnbm1lbnQgOiBhbGlnbm1lbnRzW2pdKVxuICAgICAgICAgIDogb3B0aW9ucy5oZWFkZXJBbGlnbm1lbnQsXG4gICAgICAgIG9wdGlvbnMudGV4dFdpZHRoT3B0aW9uc1xuICAgICAgKSkpXG4gICAgKSxcbiAgICBtYXJnaW5MZWZ0LFxuICAgIFwiXCJcbiAgKSk7XG4gIC8vIGRlbGltaXRlclxuICBpZiAoZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQpIHtcbiAgICByb3dzLnB1c2gobmV3IFRhYmxlUm93KFxuICAgICAgZGVsaW1pdGVyUm93LmdldENlbGxzKCkubWFwKChjZWxsLCBqKSA9PlxuICAgICAgICBuZXcgVGFibGVDZWxsKF9kZWxpbWl0ZXJUZXh0KGFsaWdubWVudHNbal0sIGNvbHVtbldpZHRoc1tqXSkpXG4gICAgICApLFxuICAgICAgbWFyZ2luTGVmdCxcbiAgICAgIFwiXCJcbiAgICApKTtcbiAgfVxuICAvLyBib2R5XG4gIGZvciAobGV0IGkgPSBkZWxpbWl0ZXJSb3cgIT09IHVuZGVmaW5lZCA/IDIgOiAxOyBpIDwgdGFibGVIZWlnaHQ7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlLmdldFJvd0F0KGkpO1xuICAgIHJvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgICByb3cuZ2V0Q2VsbHMoKS5tYXAoKGNlbGwsIGopID0+XG4gICAgICAgIG5ldyBUYWJsZUNlbGwoX3BhZFRleHQoX2FsaWduVGV4dChcbiAgICAgICAgICBjZWxsLmNvbnRlbnQsXG4gICAgICAgICAgY29sdW1uV2lkdGhzW2pdLFxuICAgICAgICAgIGFsaWdubWVudHNbal0gPT09IEFsaWdubWVudC5OT05FID8gb3B0aW9ucy5kZWZhdWx0QWxpZ25tZW50IDogYWxpZ25tZW50c1tqXSxcbiAgICAgICAgICBvcHRpb25zLnRleHRXaWR0aE9wdGlvbnNcbiAgICAgICAgKSkpXG4gICAgICApLFxuICAgICAgbWFyZ2luTGVmdCxcbiAgICAgIFwiXCJcbiAgICApKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlOiBuZXcgVGFibGUocm93cyksXG4gICAgbWFyZ2luTGVmdFxuICB9O1xufVxuXG4vKipcbiAqIEZvcm1hdHMgYSB0YWJsZSB3ZWFrbHkuXG4gKiBSb3dzIGFyZSBmb3JtYXR0ZWQgaW5kZXBlbmRlbnRseSB0byBlYWNoIG90aGVyLCBjZWxsIGNvbnRlbnRzIGFyZSBqdXN0IHRyaW1tZWQgYW5kIG5vdCBhbGlnbmVkLlxuICogVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyBhIG5vbi1tb25vc3BhY2VkIGZvbnQgb3IgZGVhbGluZyB3aXRoIHdpZGUgdGFibGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgdGFibGUgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBmb3JtYXR0aW5nLlxuICogVGhlIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIHNhbWUgb3B0aW9uIG9iamVjdCBmb3Ige0BsaW5rIGZvcm1hdFRhYmxlfSwgYnV0IHByb3BlcnRpZXMgbm90IGxpc3RlZFxuICogaGVyZSBhcmUganVzdCBpZ25vcmVkLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgICB8IHR5cGUgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBtaW5EZWxpbWl0ZXJXaWR0aGAgfCB7QGxpbmsgbnVtYmVyfSB8IFdpZHRoIG9mIGRlbGltaXRlcnMuIHxcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSByZXN1bHQgb2YgZm9ybWF0dGluZy5cbiAqXG4gKiB8IHByb3BlcnR5IG5hbWUgICB8IHR5cGUgICAgICAgICAgIHwgZGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGB0YWJsZWAgICAgICAgICB8IHtAbGluayBUYWJsZX0gIHwgQSBmb3JtYXR0ZWQgdGFibGUgb2JqZWN0LiAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGBtYXJnaW5MZWZ0YCAgICB8IHtAbGluayBzdHJpbmd9IHwgVGhlIGNvbW1vbiBsZWZ0IG1hcmdpbiBvZiB0aGUgZm9ybWF0dGVkIHRhYmxlLiB8XG4gKi9cbmZ1bmN0aW9uIF93ZWFrRm9ybWF0VGFibGUodGFibGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgdGFibGVIZWlnaHQgPSB0YWJsZS5nZXRIZWlnaHQoKTtcbiAgY29uc3QgdGFibGVXaWR0aCA9IHRhYmxlLmdldFdpZHRoKCk7XG4gIGlmICh0YWJsZUhlaWdodCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJsZSxcbiAgICAgIG1hcmdpbkxlZnQ6IFwiXCJcbiAgICB9O1xuICB9XG4gIGNvbnN0IG1hcmdpbkxlZnQgPSB0YWJsZS5nZXRSb3dBdCgwKS5tYXJnaW5MZWZ0O1xuICBpZiAodGFibGVXaWR0aCA9PT0gMCkge1xuICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkodGFibGVIZWlnaHQpLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiBuZXcgVGFibGVSb3coW10sIG1hcmdpbkxlZnQsIFwiXCIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFibGU6IG5ldyBUYWJsZShyb3dzKSxcbiAgICAgIG1hcmdpbkxlZnRcbiAgICB9O1xuICB9XG4gIGNvbnN0IGRlbGltaXRlclJvdyA9IHRhYmxlLmdldERlbGltaXRlclJvdygpO1xuICAvLyBmb3JtYXRcbiAgY29uc3Qgcm93cyA9IFtdO1xuICAvLyBoZWFkZXJcbiAgY29uc3QgaGVhZGVyUm93ID0gdGFibGUuZ2V0Um93QXQoMCk7XG4gIHJvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgaGVhZGVyUm93LmdldENlbGxzKCkubWFwKGNlbGwgPT5cbiAgICAgIG5ldyBUYWJsZUNlbGwoX3BhZFRleHQoY2VsbC5jb250ZW50KSlcbiAgICApLFxuICAgIG1hcmdpbkxlZnQsXG4gICAgXCJcIlxuICApKTtcbiAgLy8gZGVsaW1pdGVyXG4gIGlmIChkZWxpbWl0ZXJSb3cgIT09IHVuZGVmaW5lZCkge1xuICAgIHJvd3MucHVzaChuZXcgVGFibGVSb3coXG4gICAgICBkZWxpbWl0ZXJSb3cuZ2V0Q2VsbHMoKS5tYXAoY2VsbCA9PlxuICAgICAgICBuZXcgVGFibGVDZWxsKF9kZWxpbWl0ZXJUZXh0KGNlbGwuZ2V0QWxpZ25tZW50KCksIG9wdGlvbnMubWluRGVsaW1pdGVyV2lkdGgpKVxuICAgICAgKSxcbiAgICAgIG1hcmdpbkxlZnQsXG4gICAgICBcIlwiXG4gICAgKSk7XG4gIH1cbiAgLy8gYm9keVxuICBmb3IgKGxldCBpID0gZGVsaW1pdGVyUm93ICE9PSB1bmRlZmluZWQgPyAyIDogMTsgaSA8IHRhYmxlSGVpZ2h0OyBpKyspIHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5nZXRSb3dBdChpKTtcbiAgICByb3dzLnB1c2gobmV3IFRhYmxlUm93KFxuICAgICAgcm93LmdldENlbGxzKCkubWFwKGNlbGwgPT5cbiAgICAgICAgbmV3IFRhYmxlQ2VsbChfcGFkVGV4dChjZWxsLmNvbnRlbnQpKVxuICAgICAgKSxcbiAgICAgIG1hcmdpbkxlZnQsXG4gICAgICBcIlwiXG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZTogbmV3IFRhYmxlKHJvd3MpLFxuICAgIG1hcmdpbkxlZnRcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRhYmxlIGZvcm1hdCB0eXBlLlxuICpcbiAqIC0gYEZvcm1hdFR5cGUuTk9STUFMYCAtIEZvcm1hdHMgdGFibGUgbm9ybWFsbHkuXG4gKiAtIGBGb3JtYXRUeXBlLldFQUtgIC0gRm9ybWF0cyB0YWJsZSB3ZWFrbHksIHJvd3MgYXJlIGZvcm1hdHRlZCBpbmRlcGVuZGVudGx5IHRvIGVhY2ggb3RoZXIsIGNlbGxcbiAqICAgY29udGVudHMgYXJlIGp1c3QgdHJpbW1lZCBhbmQgbm90IGFsaWduZWQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgRm9ybWF0VHlwZSA9IE9iamVjdC5mcmVlemUoe1xuICBOT1JNQUw6IFwibm9ybWFsXCIsXG4gIFdFQUsgIDogXCJ3ZWFrXCJcbn0pO1xuXG5cbi8qKlxuICogRm9ybWF0cyBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgdGFibGUgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zIGZvciBmb3JtYXR0aW5nLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgICB8IHR5cGUgICAgICAgICAgICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBmb3JtYXRUeXBlYCAgICAgICAgfCB7QGxpbmsgRm9ybWF0VHlwZX0gICAgICAgfCBGb3JtYXQgdHlwZSwgbm9ybWFsIG9yIHdlYWsuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYG1pbkRlbGltaXRlcldpZHRoYCB8IHtAbGluayBudW1iZXJ9ICAgICAgICAgICB8IE1pbmltdW0gd2lkdGggb2YgZGVsaW1pdGVycy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBgZGVmYXVsdEFsaWdubWVudGAgIHwge0BsaW5rIERlZmF1bHRBbGlnbm1lbnR9IHwgRGVmYXVsdCBhbGlnbm1lbnQgb2YgY29sdW1ucy4gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGBoZWFkZXJBbGlnbm1lbnRgICAgfCB7QGxpbmsgSGVhZGVyQWxpZ25tZW50fSAgfCBBbGlnbm1lbnQgb2YgaGVhZGVyIGNlbGxzLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYHRleHRXaWR0aE9wdGlvbnNgICB8IHtAbGluayBPYmplY3R9ICAgICAgICAgICB8IEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbXB1dGluZyB0ZXh0IHdpZHRocy4gfFxuICpcbiAqIGBvcHRpb25zLnRleHRXaWR0aE9wdGlvbnNgIG11c3QgY29udGFpbiB0aGUgZm9sbG93aW5nIG9wdGlvbnMuXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICB8IHR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYG5vcm1hbGl6ZWAgICAgICAgfCB7QGxpbmsgYm9vbGVhbn0gICAgICAgICAgICAgICAgICAgfCBOb3JtYWxpemUgdGV4dHMgYmVmb3JlIGNvbXB1dGluZyB0ZXh0IHdpZHRocy4gICAgICAgfFxuICogfCBgd2lkZUNoYXJzYCAgICAgICB8IHtAbGluayBTZXR9Jmx0O3tAbGluayBzdHJpbmd9Jmd0OyB8IFNldCBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgd2lkZS4gICB8XG4gKiB8IGBuYXJyb3dDaGFyc2AgICAgIHwge0BsaW5rIFNldH0mbHQ7e0BsaW5rIHN0cmluZ30mZ3Q7IHwgU2V0IG9mIGNoYXJhY3RlcnMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyBuYXJyb3cuIHxcbiAqIHwgYGFtYmlndW91c0FzV2lkZWAgfCB7QGxpbmsgYm9vbGVhbn0gICAgICAgICAgICAgICAgICAgfCBUcmVhdCBFYXN0IEFzaWFuIEFtYmlndW91cyBjaGFyYWN0ZXJzIGFzIHdpZGUuICAgICAgfFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBmb3JtYXR0aW5nLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgIHwgdHlwZSAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYHRhYmxlYCAgICAgICAgIHwge0BsaW5rIFRhYmxlfSAgfCBBIGZvcm1hdHRlZCB0YWJsZSBvYmplY3QuICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgYG1hcmdpbkxlZnRgICAgIHwge0BsaW5rIHN0cmluZ30gfCBUaGUgY29tbW9uIGxlZnQgbWFyZ2luIG9mIHRoZSBmb3JtYXR0ZWQgdGFibGUuIHxcbiAqXG4gKiBAdGhyb3dzIHtFcnJvcn0gVW5rbm93biBmb3JtYXQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0VGFibGUodGFibGUsIG9wdGlvbnMpIHtcbiAgc3dpdGNoIChvcHRpb25zLmZvcm1hdFR5cGUpIHtcbiAgY2FzZSBGb3JtYXRUeXBlLk5PUk1BTDpcbiAgICByZXR1cm4gX2Zvcm1hdFRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgY2FzZSBGb3JtYXRUeXBlLldFQUs6XG4gICAgcmV0dXJuIF93ZWFrRm9ybWF0VGFibGUodGFibGUsIG9wdGlvbnMpO1xuICBkZWZhdWx0OlxuICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZm9ybWF0IHR5cGU6IFwiICsgb3B0aW9ucy5mb3JtYXRUeXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFsdGVycyBhIGNvbHVtbidzIGFsaWdubWVudCBvZiBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEFuIGluZGV4IG9mIHRoZSBjb2x1bW4uXG4gKiBAcGFyYW0ge0FsaWdubWVudH0gYWxpZ25tZW50IC0gQSBuZXcgYWxpZ25tZW50IG9mIHRoZSBjb2x1bW4uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbXBsZXRpb24uXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICAgIHwgdHlwZSAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYG1pbkRlbGltaXRlcldpZHRoYCB8IHtAbGluayBudW1iZXJ9IHwgV2lkdGggb2YgZGVsaW1pdGVycy4gfFxuICpcbiAqIEByZXR1cm5zIHtUYWJsZX0gQW4gYWx0ZXJlZCB0YWJsZSBvYmplY3QuXG4gKiBJZiB0aGUgY29sdW1uIGluZGV4IGlzIG91dCBvZiByYW5nZSwgcmV0dXJucyB0aGUgb3JpZ2luYWwgdGFibGUuXG4gKi9cbmZ1bmN0aW9uIGFsdGVyQWxpZ25tZW50KHRhYmxlLCBjb2x1bW5JbmRleCwgYWxpZ25tZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlbGltaXRlclJvdyA9IHRhYmxlLmdldFJvd0F0KDEpO1xuICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGRlbGltaXRlclJvdy5nZXRXaWR0aCgpIC0gMSA8IGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG4gIGNvbnN0IGRlbGltaXRlckNlbGxzID0gZGVsaW1pdGVyUm93LmdldENlbGxzKCk7XG4gIGRlbGltaXRlckNlbGxzW2NvbHVtbkluZGV4XSA9IG5ldyBUYWJsZUNlbGwoX2RlbGltaXRlclRleHQoYWxpZ25tZW50LCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKSk7XG4gIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gIHJvd3NbMV0gPSBuZXcgVGFibGVSb3coZGVsaW1pdGVyQ2VsbHMsIGRlbGltaXRlclJvdy5tYXJnaW5MZWZ0LCBkZWxpbWl0ZXJSb3cubWFyZ2luUmlnaHQpO1xuICByZXR1cm4gbmV3IFRhYmxlKHJvd3MpO1xufVxuXG4vKipcbiAqIEluc2VydHMgYSByb3cgdG8gYSB0YWJsZS5cbiAqIFRoZSByb3cgaXMgYWx3YXlzIGluc2VydGVkIGFmdGVyIHRoZSBoZWFkZXIgYW5kIHRoZSBkZWxpbWl0ZXIgcm93cywgZXZlbiBpZiB0aGUgaW5kZXggc3BlY2lmaWVzXG4gKiB0aGUgaGVhZGVyIG9yIHRoZSBkZWxpbWl0ZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7VGFibGV9IHRhYmxlIC0gQSBjb21wbGV0ZWQgbm9uLWVtcHR5IHRhYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJvd0luZGV4IC0gQW4gcm93IGluZGV4IGF0IHdoaWNoIGEgbmV3IHJvdyB3aWxsIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtUYWJsZVJvd30gcm93IC0gQSB0YWJsZSByb3cgdG8gYmUgaW5zZXJ0ZWQuXG4gKiBAcmV0dXJucyB7VGFibGV9IEFuIGFsdGVyZWQgdGFibGUgb2JlamN0LlxuICovXG5mdW5jdGlvbiBpbnNlcnRSb3codGFibGUsIHJvd0luZGV4LCByb3cpIHtcbiAgY29uc3Qgcm93cyA9IHRhYmxlLmdldFJvd3MoKTtcbiAgcm93cy5zcGxpY2UoTWF0aC5tYXgocm93SW5kZXgsIDIpLCAwLCByb3cpO1xuICByZXR1cm4gbmV3IFRhYmxlKHJvd3MpO1xufVxuXG4vKipcbiAqIERlbGV0ZXMgYSByb3cgaW4gYSB0YWJsZS5cbiAqIElmIHRoZSBpbmRleCBzcGVjaWZpZXMgdGhlIGhlYWRlciByb3csIHRoZSBjZWxscyBhcmUgZW1wdGllZCBidXQgdGhlIHJvdyB3aWxsIG5vdCBiZSByZW1vdmVkLlxuICogSWYgdGhlIGluZGV4IHNwZWNpZmllcyB0aGUgZGVsaW1pdGVyIHJvdywgaXQgZG9lcyBub3RoaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3dJbmRleCAtIEFuIGluZGV4IG9mIHRoZSByb3cgdG8gYmUgZGVsZXRlZC5cbiAqIEByZXR1cm5zIHtUYWJsZX0gQW4gYWx0ZXJlZCB0YWJsZSBvYmVqY3QuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZVJvdyh0YWJsZSwgcm93SW5kZXgpIHtcbiAgaWYgKHJvd0luZGV4ID09PSAxKSB7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG4gIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgIGNvbnN0IGhlYWRlclJvdyA9IHJvd3NbMF07XG4gICAgcm93c1swXSA9IG5ldyBUYWJsZVJvdyhcbiAgICAgIG5ldyBBcnJheShoZWFkZXJSb3cuZ2V0V2lkdGgoKSkuZmlsbChuZXcgVGFibGVDZWxsKFwiXCIpKSxcbiAgICAgIGhlYWRlclJvdy5tYXJnaW5MZWZ0LFxuICAgICAgaGVhZGVyUm93Lm1hcmdpblJpZ2h0XG4gICAgKTtcbiAgfVxuICBlbHNlIHtcbiAgICByb3dzLnNwbGljZShyb3dJbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBUYWJsZShyb3dzKTtcbn1cblxuLyoqXG4gKiBNb3ZlcyBhIHJvdyBhdCB0aGUgaW5kZXggdG8gdGhlIHNwZWNpZmllZCBkZXN0aW5hdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtUYWJsZX0gdGFibGUgLSBBIGNvbXBsZXRlZCBub24tZW1wdHkgdGFibGUuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93SW5kZXggLSBJbmRleCBvZiB0aGUgcm93IHRvIGJlIG1vdmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlc3RJbmRleCAtIEluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbi5cbiAqIEByZXR1cm5zIHtUYWJsZX0gQW4gYWx0ZXJlZCB0YWJsZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIG1vdmVSb3codGFibGUsIHJvd0luZGV4LCBkZXN0SW5kZXgpIHtcbiAgaWYgKHJvd0luZGV4IDw9IDEgfHwgZGVzdEluZGV4IDw9IDEgfHwgcm93SW5kZXggPT09IGRlc3RJbmRleCkge1xuICAgIHJldHVybiB0YWJsZTtcbiAgfVxuICBjb25zdCByb3dzID0gdGFibGUuZ2V0Um93cygpO1xuICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcbiAgcm93cy5zcGxpY2Uocm93SW5kZXgsIDEpO1xuICByb3dzLnNwbGljZShkZXN0SW5kZXgsIDAsIHJvdyk7XG4gIHJldHVybiBuZXcgVGFibGUocm93cyk7XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhIGNvbHVtbiB0byBhIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1RhYmxlfSB0YWJsZSAtIEEgY29tcGxldGVkIG5vbi1lbXB0eSB0YWJsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5JbmRleCAtIEFuIGNvbHVtbiBpbmRleCBhdCB3aGljaCB0aGUgbmV3IGNvbHVtbiB3aWxsIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtBcnJheTxUYWJsZUNlbGw+fSBjb2x1bW4gLSBBbiBhcnJheSBvZiBjZWxscy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgY29tcGxldGlvbi5cbiAqXG4gKiB8IHByb3BlcnR5IG5hbWUgICAgICAgfCB0eXBlICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBgbWluRGVsaW1pdGVyV2lkdGhgIHwge0BsaW5rIG51bWJlcn0gfCBXaWR0aCBvZiB0aGUgZGVsaW1pdGVyLiB8XG4gKlxuICogQHJldHVybnMge1RhYmxlfSBBbiBhbHRlcmVkIHRhYmxlIG9iZWpjdC5cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0Q29sdW1uKHRhYmxlLCBjb2x1bW5JbmRleCwgY29sdW1uLCBvcHRpb25zKSB7XG4gIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgY29uc3QgY2VsbHMgPSByb3dzW2ldLmdldENlbGxzKCk7XG4gICAgY29uc3QgY2VsbCA9IGkgPT09IDFcbiAgICAgID8gbmV3IFRhYmxlQ2VsbChfZGVsaW1pdGVyVGV4dChBbGlnbm1lbnQuTk9ORSwgb3B0aW9ucy5taW5EZWxpbWl0ZXJXaWR0aCkpXG4gICAgICA6IGNvbHVtbltpID4gMSA/IGkgLSAxIDogaV07XG4gICAgY2VsbHMuc3BsaWNlKGNvbHVtbkluZGV4LCAwLCBjZWxsKTtcbiAgICByb3dzW2ldID0gbmV3IFRhYmxlUm93KGNlbGxzLCByb3cubWFyZ2luTGVmdCwgcm93Lm1hcmdpblJpZ2h0KTtcbiAgfVxuICByZXR1cm4gbmV3IFRhYmxlKHJvd3MpO1xufVxuXG4vKipcbiAqIERlbGV0ZXMgYSBjb2x1bW4gaW4gYSB0YWJsZS5cbiAqIElmIHRoZXJlIHdpbGwgYmUgbm8gY29sdW1ucyBhZnRlciB0aGUgZGVsZXRpb24sIHRoZSBjZWxscyBhcmUgZW1wdGllZCBidXQgdGhlIGNvbHVtbiB3aWxsIG5vdCBiZVxuICogcmVtb3ZlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtUYWJsZX0gdGFibGUgLSBBIGNvbXBsZXRlZCBub24tZW1wdHkgdGFibGUuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sdW1uSW5kZXggLSBBbiBpbmRleCBvZiB0aGUgY29sdW1uIHRvIGJlIGRlbGV0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEFuIG9iamVjdCBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbXBsZXRpb24uXG4gKlxuICogfCBwcm9wZXJ0eSBuYW1lICAgICAgIHwgdHlwZSAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYG1pbkRlbGltaXRlcldpZHRoYCB8IHtAbGluayBudW1iZXJ9IHwgV2lkdGggb2YgdGhlIGRlbGltaXRlci4gfFxuICpcbiAqIEByZXR1cm5zIHtUYWJsZX0gQW4gYWx0ZXJlZCB0YWJsZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlbGV0ZUNvbHVtbih0YWJsZSwgY29sdW1uSW5kZXgsIG9wdGlvbnMpIHtcbiAgY29uc3Qgcm93cyA9IHRhYmxlLmdldFJvd3MoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcm93c1tpXTtcbiAgICBsZXQgY2VsbHMgPSByb3cuZ2V0Q2VsbHMoKTtcbiAgICBpZiAoY2VsbHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGNlbGxzID0gW25ldyBUYWJsZUNlbGwoaSA9PT0gMVxuICAgICAgICA/IF9kZWxpbWl0ZXJUZXh0KEFsaWdubWVudC5OT05FLCBvcHRpb25zLm1pbkRlbGltaXRlcldpZHRoKVxuICAgICAgICA6IFwiXCJcbiAgICAgICldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNlbGxzLnNwbGljZShjb2x1bW5JbmRleCwgMSk7XG4gICAgfVxuICAgIHJvd3NbaV0gPSBuZXcgVGFibGVSb3coY2VsbHMsIHJvdy5tYXJnaW5MZWZ0LCByb3cubWFyZ2luUmlnaHQpO1xuICB9XG4gIHJldHVybiBuZXcgVGFibGUocm93cyk7XG59XG5cbi8qKlxuICogTW92ZXMgYSBjb2x1bW4gYXQgdGhlIGluZGV4IHRvIHRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7VGFibGV9IHRhYmxlIC0gQSBjb21wbGV0ZWQgbm9uLWVtcHR5IHRhYmxlLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkluZGV4IC0gSW5kZXggb2YgdGhlIGNvbHVtbiB0byBiZSBtb3ZlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0SW5kZXggLSBJbmRleCBvZiB0aGUgZGVzdGluYXRpb24uXG4gKiBAcmV0dXJucyB7VGFibGV9IEFuIGFsdGVyZWQgdGFibGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBtb3ZlQ29sdW1uKHRhYmxlLCBjb2x1bW5JbmRleCwgZGVzdEluZGV4KSB7XG4gIGlmIChjb2x1bW5JbmRleCA9PT0gZGVzdEluZGV4KSB7XG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG4gIGNvbnN0IHJvd3MgPSB0YWJsZS5nZXRSb3dzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHJvd3NbaV07XG4gICAgY29uc3QgY2VsbHMgPSByb3cuZ2V0Q2VsbHMoKTtcbiAgICBjb25zdCBjZWxsID0gY2VsbHNbY29sdW1uSW5kZXhdO1xuICAgIGNlbGxzLnNwbGljZShjb2x1bW5JbmRleCwgMSk7XG4gICAgY2VsbHMuc3BsaWNlKGRlc3RJbmRleCwgMCwgY2VsbCk7XG4gICAgcm93c1tpXSA9IG5ldyBUYWJsZVJvdyhjZWxscywgcm93Lm1hcmdpbkxlZnQsIHJvdy5tYXJnaW5SaWdodCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBUYWJsZShyb3dzKTtcbn1cblxuLyoqXG4gKiBUaGUgYEluc2VydGAgY2xhc3MgcmVwcmVzZW50cyBhbiBpbnNlcnRpb24gb2YgYSBsaW5lLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEluc2VydCB7XG4gIC8qKlxuICAgKiBDcmVhdHMgYSBuZXcgYEluc2VydGAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4LCBzdGFydHMgZnJvbSBgMGAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIC0gQSBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWQgYXQgdGhlIHJvdy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvdywgbGluZSkge1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3JvdyA9IHJvdztcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9saW5lID0gbGluZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCByb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHN0cmluZyB0byBiZSBpbnNlcnRlZC5cbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5lO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGBEZWxldGVgIGNsYXNzIHJlcHJlc2VudHMgYSBkZWxldGlvbiBvZiBhIGxpbmUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVsZXRlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgYERlbGV0ZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4LCBzdGFydHMgZnJvbSBgMGAuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb3cpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9yb3cgPSByb3c7XG4gIH1cblxuICAvKipcbiAgICogUm93IGluZGV4LCBzdGFydHMgZnJvbSBgMGAuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcm93KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3c7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgY29tbWFuZCB0byB0aGUgdGV4dCBlZGl0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7SVRleHRFZGl0b3J9IHRleHRFZGl0b3IgLSBBbiBpbnRlcmZhY2UgdG8gdGhlIHRleHQgZWRpdG9yLlxuICogQHBhcmFtIHtJbnNlcnR8RGVsZXRlfSBjb21tYW5kIC0gQSBjb21tYW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHJvd09mZnNldCAtIE9mZnNldCB0byB0aGUgcm93IGluZGV4IG9mIHRoZSBjb21tYW5kLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gX2FwcGx5Q29tbWFuZCh0ZXh0RWRpdG9yLCBjb21tYW5kLCByb3dPZmZzZXQpIHtcbiAgaWYgKGNvbW1hbmQgaW5zdGFuY2VvZiBJbnNlcnQpIHtcbiAgICB0ZXh0RWRpdG9yLmluc2VydExpbmUocm93T2Zmc2V0ICsgY29tbWFuZC5yb3csIGNvbW1hbmQubGluZSk7XG4gIH1cbiAgZWxzZSBpZiAoY29tbWFuZCBpbnN0YW5jZW9mIERlbGV0ZSkge1xuICAgIHRleHRFZGl0b3IuZGVsZXRlTGluZShyb3dPZmZzZXQgKyBjb21tYW5kLnJvdyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBjb21tYW5kXCIpO1xuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYW4gZWRpdCBzY3JpcHQgKGFycmF5IG9mIGNvbW1hbmRzKSB0byB0aGUgdGV4dCBlZGl0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7SVRleHRFZGl0b3J9IHRleHRFZGl0b3IgLSBBbiBpbnRlcmZhY2UgdG8gdGhlIHRleHQgZWRpdG9yLlxuICogQHBhcmFtIHtBcnJheTxJbnNlcnR8RGVsZXRlPn0gc2NyaXB0IC0gQW4gYXJyYXkgb2YgY29tbWFuZHMuXG4gKiBUaGUgY29tbWFuZHMgYXJlIGFwcGxpZWQgc2VxdWVudGlhbGx5IGluIHRoZSBvcmRlciBvZiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gcm93T2Zmc2V0IC0gT2Zmc2V0IHRvIHRoZSByb3cgaW5kZXggb2YgdGhlIGNvbW1hbmRzLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gYXBwbHlFZGl0U2NyaXB0KHRleHRFZGl0b3IsIHNjcmlwdCwgcm93T2Zmc2V0KSB7XG4gIGZvciAoY29uc3QgY29tbWFuZCBvZiBzY3JpcHQpIHtcbiAgICBfYXBwbHlDb21tYW5kKHRleHRFZGl0b3IsIGNvbW1hbmQsIHJvd09mZnNldCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIExpbmtlZCBsaXN0IHVzZWQgdG8gcmVtZW1iZXIgZWRpdCBzY3JpcHQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSUxpc3Qge1xuICBnZXQgY2FyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfVxuXG4gIGdldCBjZHIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gIH1cblxuICB1bnNoaWZ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBDb25zKHZhbHVlLCB0aGlzKTtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IHJlc3QgPSB0aGlzO1xuICAgIHdoaWxlICghcmVzdC5pc0VtcHR5KCkpIHtcbiAgICAgIGFyci5wdXNoKHJlc3QuY2FyKTtcbiAgICAgIHJlc3QgPSByZXN0LmNkcjtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIE5pbCBleHRlbmRzIElMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCBjYXIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgbGlzdFwiKTtcbiAgfVxuXG4gIGdldCBjZHIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgbGlzdFwiKTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb25zIGV4dGVuZHMgSUxpc3Qge1xuICBjb25zdHJ1Y3RvcihjYXIsIGNkcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fY2FyID0gY2FyO1xuICAgIHRoaXMuX2NkciA9IGNkcjtcbiAgfVxuXG4gIGdldCBjYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcjtcbiAgfVxuXG4gIGdldCBjZHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NkcjtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IG5pbCA9IG5ldyBOaWwoKTtcblxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzaG9ydGVzdCBlZGl0IHNjcmlwdCBiZXR3ZWVuIHR3byBhcnJheXMgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBmcm9tIC0gQW4gYXJyYXkgb2Ygc3RyaW5nIHRoZSBlZGl0IHN0YXJ0cyBmcm9tLlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB0byAtIEFuIGFycmF5IG9mIHN0cmluZyB0aGUgZWRpdCBnb2VzIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW1pdD0tMV0gLSBVcHBlciBsaW1pdCBvZiBlZGl0IGRpc3RhbmNlIHRvIGJlIHNlYXJjaGVkLlxuICogSWYgbmVnYXRpdmUsIHRoZXJlIGlzIG5vIGxpbWl0LlxuICogQHJldHVybnMge0FycmF5PEluc2VydHxEZWxldGU+fHVuZGVmaW5lZH0gVGhlIHNob3J0ZXN0IGVkaXQgc2NyaXB0IHRoYXQgdHVybnMgYGZyb21gIGludG8gYHRvYDtcbiAqIGB1bmRlZmluZWRgIGlmIG5vIGVkaXQgc2NyaXB0IGlzIGZvdW5kIGluIHRoZSBnaXZlbiByYW5nZS5cbiAqL1xuZnVuY3Rpb24gc2hvcnRlc3RFZGl0U2NyaXB0KGZyb20sIHRvLCBsaW1pdCA9IC0xKSB7XG4gIGNvbnN0IGZyb21MZW4gPSBmcm9tLmxlbmd0aDtcbiAgY29uc3QgdG9MZW4gPSB0by5sZW5ndGg7XG4gIGNvbnN0IG1heGQgPSBsaW1pdCA+PSAwID8gTWF0aC5taW4obGltaXQsIGZyb21MZW4gKyB0b0xlbikgOiBmcm9tTGVuICsgdG9MZW47XG4gIGNvbnN0IG1lbSA9IG5ldyBBcnJheShNYXRoLm1pbihtYXhkLCBmcm9tTGVuKSArIE1hdGgubWluKG1heGQsIHRvTGVuKSArIDEpO1xuICBjb25zdCBvZmZzZXQgPSBNYXRoLm1pbihtYXhkLCBmcm9tTGVuKTtcbiAgZm9yIChsZXQgZCA9IDA7IGQgPD0gbWF4ZDsgZCsrKSB7XG4gICAgY29uc3QgbWluayA9IGQgPD0gZnJvbUxlbiA/IC1kIDogIGQgLSAyICogZnJvbUxlbjtcbiAgICBjb25zdCBtYXhrID0gZCA8PSB0b0xlbiAgID8gIGQgOiAtZCArIDIgKiB0b0xlbjtcbiAgICBmb3IgKGxldCBrID0gbWluazsgayA8PSBtYXhrOyBrICs9IDIpIHtcbiAgICAgIGxldCBpO1xuICAgICAgbGV0IHNjcmlwdDtcbiAgICAgIGlmIChkID09PSAwKSB7XG4gICAgICAgIGkgPSAwO1xuICAgICAgICBzY3JpcHQgPSBuaWw7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrID09PSAtZCkge1xuICAgICAgICBpID0gbWVtW29mZnNldCArIGsgKyAxXS5pICsgMTtcbiAgICAgICAgc2NyaXB0ID0gbWVtW29mZnNldCArIGsgKyAxXS5zY3JpcHQudW5zaGlmdChuZXcgRGVsZXRlKGkgKyBrKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrID09PSBkKSB7XG4gICAgICAgIGkgPSBtZW1bb2Zmc2V0ICsgayAtIDFdLmk7XG4gICAgICAgIHNjcmlwdCA9IG1lbVtvZmZzZXQgKyBrIC0gMV0uc2NyaXB0LnVuc2hpZnQobmV3IEluc2VydChpICsgayAtIDEsIHRvW2kgKyBrIC0gMV0pKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCB2aSA9IG1lbVtvZmZzZXQgKyBrICsgMV0uaSArIDE7XG4gICAgICAgIGNvbnN0IGhpID0gbWVtW29mZnNldCArIGsgLSAxXS5pO1xuICAgICAgICBpZiAodmkgPiBoaSkge1xuICAgICAgICAgIGkgPSB2aTtcbiAgICAgICAgICBzY3JpcHQgPSBtZW1bb2Zmc2V0ICsgayArIDFdLnNjcmlwdC51bnNoaWZ0KG5ldyBEZWxldGUoaSArIGspKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpID0gaGk7XG4gICAgICAgICAgc2NyaXB0ID0gbWVtW29mZnNldCArIGsgLSAxXS5zY3JpcHQudW5zaGlmdChuZXcgSW5zZXJ0KGkgKyBrIC0gMSwgdG9baSArIGsgLSAxXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB3aGlsZSAoaSA8IGZyb21MZW4gJiYgaSArIGsgPCB0b0xlbiAmJiBmcm9tW2ldID09PSB0b1tpICsga10pIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGsgPT09IHRvTGVuIC0gZnJvbUxlbiAmJiBpID09PSBmcm9tTGVuKSB7XG4gICAgICAgIHJldHVybiBzY3JpcHQudG9BcnJheSgpLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIG1lbVtvZmZzZXQgKyBrXSA9IHsgaSwgc2NyaXB0IH07XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhlIGBJVGV4dEVkaXRvcmAgcmVwcmVzZW50cyBhbiBpbnRlcmZhY2UgdG8gYSB0ZXh0IGVkaXRvci5cbiAqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmNsYXNzIElUZXh0RWRpdG9yIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UG9pbnR9IEEgcG9pbnQgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgKi9cbiAgZ2V0Q3Vyc29yUG9zaXRpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiBnZXRDdXJzb3JQb3NpdGlvblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJzb3IgcG9zaXRpb24gdG8gYSBzcGVjaWZpZWQgb25lLlxuICAgKlxuICAgKiBAcGFyYW0ge1BvaW50fSBwb3MgLSBBIHBvaW50IG9iamVjdCB3aGljaCB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIHNldCB0by5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHNldEN1cnNvclBvc2l0aW9uKHBvcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogc2V0Q3Vyc29yUG9zaXRpb25cIik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIHJhbmdlLlxuICAgKiBUaGlzIG1ldGhvZCBhbHNvIGV4cGVjdHMgdGhlIGN1cnNvciBwb3NpdGlvbiB0byBiZSBtb3ZlZCBhcyB0aGUgZW5kIG9mIHRoZSBzZWxlY3Rpb24gcmFuZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmFuZ2V9IHJhbmdlIC0gQSByYW5nZSBvYmplY3QgdGhhdCBkZXNjcmliZXMgYSBzZWxlY3Rpb24gcmFuZ2UuXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzZXRTZWxlY3Rpb25SYW5nZShyYW5nZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogc2V0U2VsZWN0aW9uUmFuZ2VcIik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbGFzdCByb3cgaW5kZXggb2YgdGhlIHRleHQgZWRpdG9yLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgbGFzdCByb3cgaW5kZXguXG4gICAqL1xuICBnZXRMYXN0Um93KCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZ2V0TGFzdFJvd1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGVkaXRvciBhY2NlcHRzIGEgdGFibGUgYXQgYSByb3cgdG8gYmUgZWRpdHRlZC5cbiAgICogSXQgc2hvdWxkIHJldHVybiBgZmFsc2VgIGlmLCBmb3IgZXhhbXBsZSwgdGhlIHJvdyBpcyBpbiBhIGNvZGUgYmxvY2sgKG5vdCBNYXJrZG93bikuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBBIHJvdyBpbmRleCBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHRhYmxlIGF0IHRoZSByb3cgY2FuIGJlIGVkaXR0ZWQuXG4gICAqL1xuICBhY2NlcHRzVGFibGVFZGl0KHJvdykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogYWNjZXB0c1RhYmxlRWRpdFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGluZSBzdHJpbmcgYXQgYSByb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgLSBSb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGxpbmUgYXQgdGhlIHNwZWNpZmllZCByb3cuXG4gICAqIFRoZSBsaW5lIG11c3Qgbm90IGNvbnRhaW4gYW4gRU9MIGxpa2UgYFwiXFxuXCJgIG9yIGBcIlxcclwiYC5cbiAgICovXG4gIGdldExpbmUocm93KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkOiBnZXRMaW5lXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSBsaW5lIGF0IGEgc3BlY2lmaWVkIHJvdy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAtIFJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZSAtIEEgc3RyaW5nIHRvIGJlIGluc2VydGVkLlxuICAgKiBUaGlzIG11c3Qgbm90IGNvbnRhaW4gYW4gRU9MIGxpa2UgYFwiXFxuXCJgIG9yIGBcIlxcclwiYC5cbiAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgKi9cbiAgaW5zZXJ0TGluZShyb3csIGxpbmUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IGluc2VydExpbmVcIik7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhIGxpbmUgYXQgYSBzcGVjaWZpZWQgcm93LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IC0gUm93IGluZGV4LCBzdGFydHMgZnJvbSBgMGAuXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBkZWxldGVMaW5lKHJvdykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZDogZGVsZXRlTGluZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGxpbmVzIGluIGEgc3BlY2lmaWVkIHJhbmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBTdGFydCByb3cgaW5kZXgsIHN0YXJ0cyBmcm9tIGAwYC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFJvdyAtIEVuZCByb3cgaW5kZXguXG4gICAqIExpbmVzIGZyb20gYHN0YXJ0Um93YCB0byBgZW5kUm93IC0gMWAgaXMgcmVwbGFjZWQuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbGluZXMgLSBBbiBhcnJheSBvZiBzdHJpbmcuXG4gICAqIEVhY2ggc3RyaW5ncyBtdXN0IG5vdCBjb250YWluIGFuIEVPTCBsaWtlIGBcIlxcblwiYCBvciBgXCJcXHJcImAuXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICByZXBsYWNlTGluZXMoc3RhcnRSb3csIGVuZFJvdywgbGluZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IHJlcGxhY2VMaW5lc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCYXRjaGVzIG11bHRpcGxlIG9wZXJhdGlvbnMgYXMgYSBzaW5nbGUgdW5kby9yZWRvIHN0ZXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgc29tZSBvcGVyYXRpb25zIG9uIHRoZSB0ZXh0IGVkaXRvci5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHRyYW5zYWN0KGZ1bmMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQ6IHRyYW5zYWN0XCIpO1xuICB9XG59XG5cbi8qKlxuICogUmVhZHMgYSBwcm9wZXJ0eSBvZiBhbiBvYmplY3QgaWYgZXhpc3RzOyBvdGhlcndpc2UgdXNlcyBhIGRlZmF1bHQgdmFsdWUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gb2JqIC0gQW4gb2JqZWN0LiBJZiBhIG5vbi1vYmplY3QgdmFsdWUgaXMgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEEga2V5IChvciBwcm9wZXJ0eSBuYW1lKS5cbiAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbCAtIEEgZGVmYXVsdCB2YWx1ZSB0aGF0IGlzIHVzZWQgd2hlbiBhIHZhbHVlIGRvZXMgbm90IGV4aXN0LlxuICogQHJldHVybnMgeyp9IEEgcmVhZCB2YWx1ZSBvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gX3ZhbHVlKG9iaiwga2V5LCBkZWZhdWx0VmFsKSB7XG4gIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBvYmogIT09IG51bGwgJiYgb2JqW2tleV0gIT09IHVuZGVmaW5lZClcbiAgICA/IG9ialtrZXldXG4gICAgOiBkZWZhdWx0VmFsO1xufVxuXG4vKipcbiAqIFJlYWRzIG11bHRpcGxlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0IGlmIGV4aXN0czsgb3RoZXJ3aXNlIHVzZXMgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gb2JqIC0gQW4gb2JqZWN0LiBJZiBhIG5vbi1vYmplY3QgdmFsdWUgaXMgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkLlxuICogQHBhcmFtIHtPYmplY3R9IGtleXMgLSBBbiBvYmplY3QgdGhhdCBjb25zaXN0cyBvZiBwYWlycyBvZiBhIGtleSBhbmQgYSBkZWZhdWx0IHZhbHVlLlxuICogQHJldHVybnMge09iamVjdH0gQSBuZXcgb2JqZWN0IHRoYXQgY29udGFpbnMgcmVhZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIF92YWx1ZXMob2JqLCBrZXlzKSB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIGRlZmF1bHRWYWxdIG9mIE9iamVjdC5lbnRyaWVzKGtleXMpKSB7XG4gICAgcmVzW2tleV0gPSBfdmFsdWUob2JqLCBrZXksIGRlZmF1bHRWYWwpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogUmVhZHMgb3B0aW9ucyBmb3IgdGhlIGZvcm1hdHRlciBmcm9tIGFuIG9iamVjdC5cbiAqIFRoZSBkZWZhdWx0IHZhbHVlcyBhcmUgdXNlZCBmb3Igb3B0aW9ucyB0aGF0IGFyZSBub3Qgc3BlY2lmaWVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBbiBvYmplY3QgY29udGFpbmluZyBvcHRpb25zLlxuICogVGhlIGF2YWlsYWJsZSBvcHRpb25zIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgbGlzdGVkIGJlbG93LlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgICB8IHR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZWZhdWx0IHZhbHVlICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBsZWZ0TWFyZ2luQ2hhcnNgICAgfCB7QGxpbmsgU2V0fSZsdDt7QGxpbmsgc3RyaW5nfSZndDsgfCBBIHNldCBvZiBhZGRpdGlvbmFsIGxlZnQgbWFyZ2luIGNoYXJhY3RlcnMuICAgICAgICAgICAgIHwgYG5ldyBTZXQoKWAgICAgICAgICAgICAgIHxcbiAqIHwgYGZvcm1hdFR5cGVgICAgICAgICB8IHtAbGluayBGb3JtYXRUeXBlfSAgICAgICAgICAgICAgICB8IEZvcm1hdCB0eXBlLCBub3JtYWwgb3Igd2Vhay4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgRm9ybWF0VHlwZS5OT1JNQUxgICAgICAgfFxuICogfCBgbWluRGVsaW1pdGVyV2lkdGhgIHwge0BsaW5rIG51bWJlcn0gICAgICAgICAgICAgICAgICAgIHwgTWluaW11bSB3aWR0aCBvZiBkZWxpbWl0ZXJzLiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGAzYCAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGBkZWZhdWx0QWxpZ25tZW50YCAgfCB7QGxpbmsgRGVmYXVsdEFsaWdubWVudH0gICAgICAgICAgfCBEZWZhdWx0IGFsaWdubWVudCBvZiBjb2x1bW5zLiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYERlZmF1bHRBbGlnbm1lbnQuTEVGVGAgIHxcbiAqIHwgYGhlYWRlckFsaWdubWVudGAgICB8IHtAbGluayBIZWFkZXJBbGlnbm1lbnR9ICAgICAgICAgICB8IEFsaWdubWVudCBvZiBoZWFkZXIgY2VsbHMuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgSGVhZGVyQWxpZ25tZW50LkZPTExPV2AgfFxuICogfCBgdGV4dFdpZHRoT3B0aW9uc2AgIHwge0BsaW5rIE9iamVjdH0gICAgICAgICAgICAgICAgICAgIHwgQW4gb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgY29tcHV0aW5nIHRleHQgd2lkdGhzLiB8ICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IGBzbWFydEN1cnNvcmAgICAgICAgfCB7QGxpbmsgYm9vbGVhbn0gICAgICAgICAgICAgICAgICAgfCBFbmFibGVzIFwiU21hcnQgQ3Vyc29yXCIgZmVhdHVyZS4gICAgICAgICAgICAgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIFRoZSBhdmFpbGFibGUgb3B0aW9ucyBmb3IgYG9iai50ZXh0V2lkdGhPcHRpb25zYCBhcmUgdGhlIGZvbGxvd2luZyBvbmVzLlxuICpcbiAqIHwgcHJvcGVydHkgbmFtZSAgICAgfCB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRlZmF1bHQgdmFsdWUgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBub3JtYWxpemVgICAgICAgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgIHwgTm9ybWFsaXplcyB0ZXh0cyBiZWZvcmUgY29tcHV0aW5nIHRleHQgd2lkdGhzLiAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqIHwgYHdpZGVDaGFyc2AgICAgICAgfCB7QGxpbmsgU2V0fSZsdDt7QGxpbmsgc3RyaW5nfSZndDsgfCBBIHNldCBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgd2lkZS4gICB8IGBuZXcgU2V0KClgICAgfFxuICogfCBgbmFycm93Q2hhcnNgICAgICB8IHtAbGluayBTZXR9Jmx0O3tAbGluayBzdHJpbmd9Jmd0OyB8IEEgc2V0IG9mIGNoYXJhY3RlcnMgdGhhdCBzaG91bGQgYmUgdHJlYXRlZCBhcyBuYXJyb3cuIHwgYG5ldyBTZXQoKWAgICB8XG4gKiB8IGBhbWJpZ3VvdXNBc1dpZGVgIHwge0BsaW5rIGJvb2xlYW59ICAgICAgICAgICAgICAgICAgIHwgVHJlYXRzIEVhc3QgQXNpYW4gQW1iaWd1b3VzIGNoYXJhY3RlcnMgYXMgd2lkZS4gICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNvbXBsZXRlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIG9wdGlvbnMob2JqKSB7XG4gIGNvbnN0IHJlcyA9IF92YWx1ZXMob2JqLCB7XG4gICAgbGVmdE1hcmdpbkNoYXJzICA6IG5ldyBTZXQoKSxcbiAgICBmb3JtYXRUeXBlICAgICAgIDogRm9ybWF0VHlwZS5OT1JNQUwsXG4gICAgbWluRGVsaW1pdGVyV2lkdGg6IDMsXG4gICAgZGVmYXVsdEFsaWdubWVudCA6IERlZmF1bHRBbGlnbm1lbnQuTEVGVCxcbiAgICBoZWFkZXJBbGlnbm1lbnQgIDogSGVhZGVyQWxpZ25tZW50LkZPTExPVyxcbiAgICBzbWFydEN1cnNvciAgICAgIDogZmFsc2VcbiAgfSk7XG4gIHJlcy50ZXh0V2lkdGhPcHRpb25zID0gX3ZhbHVlcyhvYmoudGV4dFdpZHRoT3B0aW9ucywge1xuICAgIG5vcm1hbGl6ZSAgICAgIDogdHJ1ZSxcbiAgICB3aWRlQ2hhcnMgICAgICA6IG5ldyBTZXQoKSxcbiAgICBuYXJyb3dDaGFycyAgICA6IG5ldyBTZXQoKSxcbiAgICBhbWJpZ3VvdXNBc1dpZGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IHRoYXQgbWF0Y2hlcyBhIHRhYmxlIHJvdy5cbiAqXG4gKiBAcGFyYW0ge1NldDxzdHJpbmc+fSBsZWZ0TWFyZ2luQ2hhcnMgLSBBIHNldCBvZiBhZGRpdGlvbmFsIGxlZnQgbWFyZ2luIGNoYXJhY3RlcnMuXG4gKiBBIHBpcGUgYHxgLCBhIGJhY2tzbGFzaCBgXFxgLCBhbmQgYSBiYWNrcXVvdGUgd2lsbCBiZSBpZ25vcmVkLlxuICogQHJldHVybnMge1JlZ0V4cH0gQSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IHRoYXQgbWF0Y2hlcyBhIHRhYmxlIHJvdy5cbiAqL1xuZnVuY3Rpb24gX2NyZWF0ZUlzVGFibGVSb3dSZWdleChsZWZ0TWFyZ2luQ2hhcnMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke21hcmdpblJlZ2V4U3JjKGxlZnRNYXJnaW5DaGFycyl9XFxcXHxgLCBcInVcIik7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgbmV3IGZvY3VzIG9mZnNldCBmcm9tIGluZm9ybWF0aW9uIG9mIGNvbXBsZXRlZCBhbmQgZm9ybWF0dGVkIHRhYmxlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGb2N1c30gZm9jdXMgLSBBIGZvY3VzLlxuICogQHBhcmFtIHtUYWJsZX0gdGFibGUgLSBBIGNvbXBsZXRlZCBidXQgbm90IGZvcm1hdHRlZCB0YWJsZSB3aXRoIG9yaWdpbmFsIGNlbGwgY29udGVudHMuXG4gKiBAcGFyYW0ge09iamVjdH0gZm9ybWF0dGVkIC0gSW5mb3JtYXRpb24gb2YgdGhlIGZvcm1hdHRlZCB0YWJsZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92ZWQgLSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZm9jdXMgcG9zaXRpb24gaXMgbW92ZWQgYnkgYSBjb21tYW5kIG9yIG5vdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIF9jb21wdXRlTmV3T2Zmc2V0KGZvY3VzLCB0YWJsZSwgZm9ybWF0dGVkLCBtb3ZlZCkge1xuICBpZiAobW92ZWQpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRGb2N1c2VkQ2VsbCA9IGZvcm1hdHRlZC50YWJsZS5nZXRGb2N1c2VkQ2VsbChmb2N1cyk7XG4gICAgaWYgKGZvcm1hdHRlZEZvY3VzZWRDZWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmb3JtYXR0ZWRGb2N1c2VkQ2VsbC5jb21wdXRlUmF3T2Zmc2V0KDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmb2N1cy5jb2x1bW4gPCAwID8gZm9ybWF0dGVkLm1hcmdpbkxlZnQubGVuZ3RoIDogMDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm9jdXNlZENlbGwgPSB0YWJsZS5nZXRGb2N1c2VkQ2VsbChmb2N1cyk7XG4gICAgY29uc3QgZm9ybWF0dGVkRm9jdXNlZENlbGwgPSBmb3JtYXR0ZWQudGFibGUuZ2V0Rm9jdXNlZENlbGwoZm9jdXMpO1xuICAgIGlmIChmb2N1c2VkQ2VsbCAhPT0gdW5kZWZpbmVkICYmIGZvcm1hdHRlZEZvY3VzZWRDZWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRPZmZzZXQgPSBNYXRoLm1pbihcbiAgICAgICAgZm9jdXNlZENlbGwuY29tcHV0ZUNvbnRlbnRPZmZzZXQoZm9jdXMub2Zmc2V0KSxcbiAgICAgICAgZm9ybWF0dGVkRm9jdXNlZENlbGwuY29udGVudC5sZW5ndGhcbiAgICAgICk7XG4gICAgICByZXR1cm4gZm9ybWF0dGVkRm9jdXNlZENlbGwuY29tcHV0ZVJhd09mZnNldChjb250ZW50T2Zmc2V0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZm9jdXMuY29sdW1uIDwgMCA/IGZvcm1hdHRlZC5tYXJnaW5MZWZ0Lmxlbmd0aCA6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhlIGBUYWJsZUVkaXRvcmAgY2xhc3MgaXMgYXQgdGhlIGNlbnRlciBvZiB0aGUgbWFya2Rvd24tdGFibGUtZWRpdG9yLlxuICogV2hlbiBhIGNvbW1hbmQgaXMgZXhlY3V0ZWQsIGl0IHJlYWRzIGEgdGFibGUgZnJvbSB0aGUgdGV4dCBlZGl0b3IsIGRvZXMgc29tZSBvcGVyYXRpb24gb24gdGhlXG4gKiB0YWJsZSwgYW5kIHRoZW4gYXBwbHkgdGhlIHJlc3VsdCB0byB0aGUgdGV4dCBlZGl0b3IuXG4gKlxuICogVG8gdXNlIHRoaXMgY2xhc3MsIHRoZSB0ZXh0IGVkaXRvciAob3IgYW4gaW50ZXJmYWNlIHRvIGl0KSBtdXN0IGltcGxlbWVudCB7QGxpbmsgSVRleHRFZGl0b3J9LlxuICovXG5jbGFzcyBUYWJsZUVkaXRvciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHRhYmxlIGVkaXRvciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtJVGV4dEVkaXRvcn0gdGV4dEVkaXRvciAtIEEgdGV4dCBlZGl0b3IgaW50ZXJmYWNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodGV4dEVkaXRvcikge1xuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3RleHRFZGl0b3IgPSB0ZXh0RWRpdG9yO1xuICAgIC8vIHNtYXJ0IGN1cnNvclxuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuX3NjQWN0aXZlID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fc2NUYWJsZVBvcyA9IG51bGw7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5fc2NTdGFydEZvY3VzID0gbnVsbDtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLl9zY0xhc3RGb2N1cyA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzbWFydCBjdXJzb3IuXG4gICAqIENhbGwgdGhpcyBtZXRob2Qgd2hlbiB0aGUgdGFibGUgZWRpdG9yIGlzIGluYWN0aXZhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgcmVzZXRTbWFydEN1cnNvcigpIHtcbiAgICB0aGlzLl9zY0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY3Vyc29yIGlzIGluIGEgdGFibGUgcm93LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjaGVjayB3aGV0aGVyIHRoZSB0YWJsZSBlZGl0b3Igc2hvdWxkIGJlIGFjdGl2YXRlZCBvciBub3QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgY3Vyc29yIGlzIGluIGEgdGFibGUgcm93LlxuICAgKi9cbiAgY3Vyc29ySXNJblRhYmxlKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZSA9IF9jcmVhdGVJc1RhYmxlUm93UmVnZXgob3B0aW9ucy5sZWZ0TWFyZ2luQ2hhcnMpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcbiAgICByZXR1cm4gdGhpcy5fdGV4dEVkaXRvci5hY2NlcHRzVGFibGVFZGl0KHBvcy5yb3cpXG4gICAgICAmJiByZS50ZXN0KHRoaXMuX3RleHRFZGl0b3IuZ2V0TGluZShwb3Mucm93KSk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYSB0YWJsZSB1bmRlciB0aGUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9IEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0YWJsZTtcbiAgICogYHVuZGVmaW5lZGAgaWYgdGhlcmUgaXMgbm8gdGFibGUuXG4gICAqIFRoZSByZXR1cm4gb2JqZWN0IGNvbnRhaW5zIHRoZSBwcm9wZXJ0aWVzIGxpc3RlZCBpbiB0aGUgdGFibGUuXG4gICAqXG4gICAqIHwgcHJvcGVydHkgbmFtZSAgIHwgdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8IC0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAgICogfCBgcmFuZ2VgICAgICAgICAgfCB7QGxpbmsgUmFuZ2V9ICAgICAgICAgICAgICAgICAgICAgICB8IFRoZSByYW5nZSBvZiB0aGUgdGFibGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgYGxpbmVzYCAgICAgICAgIHwge0BsaW5rIEFycmF5fSZsdDt7QGxpbmsgc3RyaW5nfSZndDsgfCBBbiBhcnJheSBvZiB0aGUgbGluZXMgaW4gdGhlIHJhbmdlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8IGB0YWJsZWAgICAgICAgICB8IHtAbGluayBUYWJsZX0gICAgICAgICAgICAgICAgICAgICAgIHwgQSB0YWJsZSBvYmplY3QgcmVhZCBmcm9tIHRoZSB0ZXh0IGVkaXRvci4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCBgZm9jdXNgICAgICAgICAgfCB7QGxpbmsgRm9jdXN9ICAgICAgICAgICAgICAgICAgICAgICB8IEEgZm9jdXMgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24gaW4gdGhlIHRhYmxlLiB8XG4gICAqL1xuICBfZmluZFRhYmxlKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZSA9IF9jcmVhdGVJc1RhYmxlUm93UmVnZXgob3B0aW9ucy5sZWZ0TWFyZ2luQ2hhcnMpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcbiAgICBjb25zdCBsYXN0Um93ID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMYXN0Um93KCk7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBsZXQgc3RhcnRSb3cgPSBwb3Mucm93O1xuICAgIGxldCBlbmRSb3cgPSBwb3Mucm93O1xuICAgIC8vIGN1cnJlbnQgbGluZVxuICAgIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLl90ZXh0RWRpdG9yLmdldExpbmUocG9zLnJvdyk7XG4gICAgICBpZiAoIXRoaXMuX3RleHRFZGl0b3IuYWNjZXB0c1RhYmxlRWRpdChwb3Mucm93KSB8fCAhcmUudGVzdChsaW5lKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gICAgLy8gcHJldmlvdXMgbGluZXNcbiAgICBmb3IgKGxldCByb3cgPSBwb3Mucm93IC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5fdGV4dEVkaXRvci5nZXRMaW5lKHJvdyk7XG4gICAgICBpZiAoIXRoaXMuX3RleHRFZGl0b3IuYWNjZXB0c1RhYmxlRWRpdChyb3cpIHx8ICFyZS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGluZXMudW5zaGlmdChsaW5lKTtcbiAgICAgIHN0YXJ0Um93ID0gcm93O1xuICAgIH1cbiAgICAvLyBuZXh0IGxpbmVzXG4gICAgZm9yIChsZXQgcm93ID0gcG9zLnJvdyArIDE7IHJvdyA8PSBsYXN0Um93OyByb3crKykge1xuICAgICAgY29uc3QgbGluZSA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0TGluZShyb3cpO1xuICAgICAgaWYgKCF0aGlzLl90ZXh0RWRpdG9yLmFjY2VwdHNUYWJsZUVkaXQocm93KSB8fCAhcmUudGVzdChsaW5lKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICBlbmRSb3cgPSByb3c7XG4gICAgfVxuICAgIGNvbnN0IHJhbmdlID0gbmV3IFJhbmdlKFxuICAgICAgbmV3IFBvaW50KHN0YXJ0Um93LCAwKSxcbiAgICAgIG5ldyBQb2ludChlbmRSb3csIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aClcbiAgICApO1xuICAgIGNvbnN0IHRhYmxlID0gcmVhZFRhYmxlKGxpbmVzLCBvcHRpb25zKTtcbiAgICBjb25zdCBmb2N1cyA9IHRhYmxlLmZvY3VzT2ZQb3NpdGlvbihwb3MsIHN0YXJ0Um93KTtcbiAgICByZXR1cm4geyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGEgdGFibGUgYW5kIGRvZXMgYW4gb3BlcmF0aW9uIHdpdGggaXQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIEEgZnVuY3Rpb24gdGhhdCBkb2VzIHNvbWUgb3BlcmF0aW9uIG9uIHRhYmxlIGluZm9ybWF0aW9uIG9idGFpbmVkIGJ5XG4gICAqIHtAbGluayBUYWJsZUVkaXRvciNfZmluZFRhYmxlfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIF93aXRoVGFibGUob3B0aW9ucywgZnVuYykge1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLl9maW5kVGFibGUob3B0aW9ucyk7XG4gICAgaWYgKGluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jKGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgbGluZXMgaW4gYSBnaXZlbiByYW5nZSBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFJvdyAtIFN0YXJ0IHJvdyBpbmRleCwgc3RhcnRzIGZyb20gYDBgLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kUm93IC0gRW5kIHJvdyBpbmRleC5cbiAgICogTGluZXMgZnJvbSBgc3RhcnRSb3dgIHRvIGBlbmRSb3cgLSAxYCBhcmUgcmVwbGFjZWQuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbmV3TGluZXMgLSBOZXcgbGluZXMuXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW29sZExpbmVzPXVuZGVmaW5lZF0gLSBPbGQgbGluZXMgdG8gYmUgcmVwbGFjZWQuXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBfdXBkYXRlTGluZXMoc3RhcnRSb3csIGVuZFJvdywgbmV3TGluZXMsIG9sZExpbmVzID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGFwcGx5IHRoZSBzaG9ydGVzdCBlZGl0IHNjcmlwdFxuICAgICAgLy8gaWYgYSB0YWJsZSBpcyBlZGl0ZWQgaW4gYSBub3JtYWwgbWFubmVyLCB0aGUgZWRpdCBkaXN0YW5jZSBuZXZlciBleGNlZWRzIDNcbiAgICAgIGNvbnN0IHNlcyA9IHNob3J0ZXN0RWRpdFNjcmlwdChvbGRMaW5lcywgbmV3TGluZXMsIDMpO1xuICAgICAgaWYgKHNlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFwcGx5RWRpdFNjcmlwdCh0aGlzLl90ZXh0RWRpdG9yLCBzZXMsIHN0YXJ0Um93KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl90ZXh0RWRpdG9yLnJlcGxhY2VMaW5lcyhzdGFydFJvdywgZW5kUm93LCBuZXdMaW5lcyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGN1cnNvciBwb3NpdGlvbiB0byB0aGUgZm9jdXNlZCBjZWxsLFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBSb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqIEBwYXJhbSB7VGFibGV9IHRhYmxlIC0gQSB0YWJsZS5cbiAgICogQHBhcmFtIHtGb2N1c30gZm9jdXMgLSBBIGZvY3VzIHRvIHdoaWNoIHRoZSBjdXJzb3Igd2lsbCBiZSBtb3ZlZC5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIF9tb3ZlVG9Gb2N1cyhzdGFydFJvdywgdGFibGUsIGZvY3VzKSB7XG4gICAgY29uc3QgcG9zID0gdGFibGUucG9zaXRpb25PZkZvY3VzKGZvY3VzLCBzdGFydFJvdyk7XG4gICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90ZXh0RWRpdG9yLnNldEN1cnNvclBvc2l0aW9uKHBvcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGZvY3VzZWQgY2VsbC5cbiAgICogSWYgdGhlIGNlbGwgaGFzIG5vIGNvbnRlbnQgdG8gYmUgc2VsZWN0ZWQsIHRoZW4ganVzdCBtb3ZlcyB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRSb3cgLSBSb3cgaW5kZXggd2hlcmUgdGhlIHRhYmxlIHN0YXJ0cyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqIEBwYXJhbSB7VGFibGV9IHRhYmxlIC0gQSB0YWJsZS5cbiAgICogQHBhcmFtIHtGb2N1c30gZm9jdXMgLSBBIGZvY3VzIHRvIGJlIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgX3NlbGVjdEZvY3VzKHN0YXJ0Um93LCB0YWJsZSwgZm9jdXMpIHtcbiAgICBjb25zdCByYW5nZSA9IHRhYmxlLnNlbGVjdGlvblJhbmdlT2ZGb2N1cyhmb2N1cywgc3RhcnRSb3cpO1xuICAgIGlmIChyYW5nZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90ZXh0RWRpdG9yLnNldFNlbGVjdGlvblJhbmdlKHJhbmdlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhzdGFydFJvdywgdGFibGUsIGZvY3VzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdGFibGUgdW5kZXIgdGhlIGN1cnNvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTZWUge0BsaW5rIG9wdGlvbnN9LlxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgZm9ybWF0KG9wdGlvbnMpIHtcbiAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAvLyBjb21wbGV0ZVxuICAgICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICB9XG4gICAgICAvLyBmb3JtYXRcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChfY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIGZhbHNlKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgYW5kIGVzY2FwZXMgZnJvbSB0aGUgdGFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGVzY2FwZShvcHRpb25zKSB7XG4gICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIC8vIGZvcm1hdFxuICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0VGFibGUoY29tcGxldGVkLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgIC8vIGFwcGx5XG4gICAgICBjb25zdCBuZXdSb3cgPSByYW5nZS5lbmQucm93ICsgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCA/IDIgOiAxKTtcbiAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgIGxldCBuZXdQb3M7XG4gICAgICAgIGlmIChuZXdSb3cgPiB0aGlzLl90ZXh0RWRpdG9yLmdldExhc3RSb3coKSkge1xuICAgICAgICAgIHRoaXMuX3RleHRFZGl0b3IuaW5zZXJ0TGluZShuZXdSb3csIFwiXCIpO1xuICAgICAgICAgIG5ld1BvcyA9IG5ldyBQb2ludChuZXdSb3csIDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXiR7bWFyZ2luUmVnZXhTcmMob3B0aW9ucy5sZWZ0TWFyZ2luQ2hhcnMpfWAsIFwidVwiKTtcbiAgICAgICAgICBjb25zdCBuZXh0TGluZSA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0TGluZShuZXdSb3cpO1xuICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IHJlLmV4ZWMobmV4dExpbmUpWzBdO1xuICAgICAgICAgIG5ld1BvcyA9IG5ldyBQb2ludChuZXdSb3csIG1hcmdpbi5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RleHRFZGl0b3Iuc2V0Q3Vyc29yUG9zaXRpb24obmV3UG9zKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWx0ZXJzIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGZvY3VzZWQgY29sdW1uLlxuICAgKlxuICAgKiBAcGFyYW0ge0FsaWdubWVudH0gYWxpZ25tZW50IC0gTmV3IGFsaWdubWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTZWUge0BsaW5rIG9wdGlvbnN9LlxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgYWxpZ25Db2x1bW4oYWxpZ25tZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgLy8gY29tcGxldGVcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgfVxuICAgICAgLy8gYWx0ZXIgYWxpZ25tZW50XG4gICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgIGlmICgwIDw9IG5ld0ZvY3VzLmNvbHVtbiAmJiBuZXdGb2N1cy5jb2x1bW4gPD0gYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSkge1xuICAgICAgICBhbHRlcmVkID0gYWx0ZXJBbGlnbm1lbnQoY29tcGxldGVkLnRhYmxlLCBuZXdGb2N1cy5jb2x1bW4sIGFsaWdubWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICAvLyBmb3JtYXRcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdFRhYmxlKGFsdGVyZWQsIG9wdGlvbnMpO1xuICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBmYWxzZSkpO1xuICAgICAgLy8gYXBwbHlcbiAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgIHRoaXMuX21vdmVUb0ZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBmb2N1c2VkIGNlbGwgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBTZWUge0BsaW5rIG9wdGlvbnN9LlxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc2VsZWN0Q2VsbChvcHRpb25zKSB7XG4gICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgLy8gY29tcGxldGVcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgfVxuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShjb21wbGV0ZWQudGFibGUsIG9wdGlvbnMpO1xuICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBmYWxzZSkpO1xuICAgICAgLy8gYXBwbHlcbiAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZm9jdXMgdG8gYW5vdGhlciBjZWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93T2Zmc2V0IC0gT2Zmc2V0IGluIHJvdy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbk9mZnNldCAtIE9mZnNldCBpbiBjb2x1bW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIG1vdmVGb2N1cyhyb3dPZmZzZXQsIGNvbHVtbk9mZnNldCwgb3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0Rm9jdXMgPSBuZXdGb2N1cztcbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChyb3dPZmZzZXQgIT09IDApIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29tcGxldGVkLnRhYmxlLmdldEhlaWdodCgpO1xuICAgICAgICAvLyBza2lwIGRlbGltaXRlciByb3dcbiAgICAgICAgY29uc3Qgc2tpcCA9XG4gICAgICAgICAgICBuZXdGb2N1cy5yb3cgPCAxICYmIG5ld0ZvY3VzLnJvdyArIHJvd09mZnNldCA+PSAxID8gMVxuICAgICAgICAgIDogbmV3Rm9jdXMucm93ID4gMSAmJiBuZXdGb2N1cy5yb3cgKyByb3dPZmZzZXQgPD0gMSA/IC0xXG4gICAgICAgICAgOiAwO1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhcbiAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5yb3cgKyByb3dPZmZzZXQgKyBza2lwLCAwKSwgaGVpZ2h0IDw9IDIgPyAwIDogaGVpZ2h0IC0gMSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2x1bW5PZmZzZXQgIT09IDApIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjb21wbGV0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKTtcbiAgICAgICAgaWYgKCEobmV3Rm9jdXMuY29sdW1uIDwgMCAmJiBjb2x1bW5PZmZzZXQgPCAwKVxuICAgICAgICAgICYmICEobmV3Rm9jdXMuY29sdW1uID4gd2lkdGggLSAxICYmIGNvbHVtbk9mZnNldCA+IDApKSB7XG4gICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oXG4gICAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5jb2x1bW4gKyBjb2x1bW5PZmZzZXQsIDApLCB3aWR0aCAtIDEpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbW92ZWQgPSAhbmV3Rm9jdXMucG9zRXF1YWxzKHN0YXJ0Rm9jdXMpO1xuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShjb21wbGV0ZWQudGFibGUsIG9wdGlvbnMpO1xuICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBtb3ZlZCkpO1xuICAgICAgLy8gYXBwbHlcbiAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpLCBsaW5lcyk7XG4gICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdEZvY3VzKHJhbmdlLnN0YXJ0LnJvdywgZm9ybWF0dGVkLnRhYmxlLCBuZXdGb2N1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGZvY3VzIHRvIHRoZSBuZXh0IGNlbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIG5leHRDZWxsKG9wdGlvbnMpIHtcbiAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgLy8gcmVzZXQgc21hcnQgY3Vyc29yIGlmIG1vdmVkXG4gICAgICBjb25zdCBmb2N1c01vdmVkID0gKHRoaXMuX3NjVGFibGVQb3MgIT09IG51bGwgJiYgIXJhbmdlLnN0YXJ0LmVxdWFscyh0aGlzLl9zY1RhYmxlUG9zKSlcbiAgICAgICAgfHwgKHRoaXMuX3NjTGFzdEZvY3VzICE9PSBudWxsICYmICFmb2N1cy5wb3NFcXVhbHModGhpcy5fc2NMYXN0Rm9jdXMpKTtcbiAgICAgIGlmICh0aGlzLl9zY0FjdGl2ZSAmJiBmb2N1c01vdmVkKSB7XG4gICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgfVxuICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAvLyBjb21wbGV0ZVxuICAgICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydEZvY3VzID0gbmV3Rm9jdXM7XG4gICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPT09IDEpIHtcbiAgICAgICAgLy8gbW92ZSB0byBuZXh0IHJvd1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdygyKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc21hcnRDdXJzb3IpIHtcbiAgICAgICAgICBpZiAobmV3Rm9jdXMuY29sdW1uIDwgMCB8fCBhbHRlcmVkLmdldEhlYWRlcldpZHRoKCkgLSAxIDwgbmV3Rm9jdXMuY29sdW1uKSB7XG4gICAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbigwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4oMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5zZXJ0IGFuIGVtcHR5IHJvdyBpZiBuZWVkZWRcbiAgICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA+IGFsdGVyZWQuZ2V0SGVpZ2h0KCkgLSAxKSB7XG4gICAgICAgICAgY29uc3Qgcm93ID0gbmV3IEFycmF5KGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSkuZmlsbChuZXcgVGFibGVDZWxsKFwiXCIpKTtcbiAgICAgICAgICBhbHRlcmVkID0gaW5zZXJ0Um93KGFsdGVyZWQsIGFsdGVyZWQuZ2V0SGVpZ2h0KCksIG5ldyBUYWJsZVJvdyhyb3csIFwiXCIsIFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIGluc2VydCBhbiBlbXB0eSBjb2x1bW4gaWYgbmVlZGVkXG4gICAgICAgIGlmIChuZXdGb2N1cy5jb2x1bW4gPiBhbHRlcmVkLmdldEhlYWRlcldpZHRoKCkgLSAxKSB7XG4gICAgICAgICAgY29uc3QgY29sdW1uID0gbmV3IEFycmF5KGFsdGVyZWQuZ2V0SGVpZ2h0KCkgLSAxKS5maWxsKG5ldyBUYWJsZUNlbGwoXCJcIikpO1xuICAgICAgICAgIGFsdGVyZWQgPSBpbnNlcnRDb2x1bW4oYWx0ZXJlZCwgYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpLCBjb2x1bW4sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1vdmUgdG8gbmV4dCBjb2x1bW5cbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRDb2x1bW4obmV3Rm9jdXMuY29sdW1uICsgMSk7XG4gICAgICB9XG4gICAgICAvLyBmb3JtYXRcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdFRhYmxlKGFsdGVyZWQsIG9wdGlvbnMpO1xuICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGFsdGVyZWQsIGZvcm1hdHRlZCwgdHJ1ZSkpO1xuICAgICAgLy8gYXBwbHlcbiAgICAgIGNvbnN0IG5ld0xpbmVzID0gZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKTtcbiAgICAgIGlmIChuZXdGb2N1cy5jb2x1bW4gPiBmb3JtYXR0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKSAtIDEpIHtcbiAgICAgICAgLy8gYWRkIG1hcmdpblxuICAgICAgICBuZXdMaW5lc1tuZXdGb2N1cy5yb3ddICs9IFwiIFwiO1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldCgxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RleHRFZGl0b3IudHJhbnNhY3QoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBuZXdMaW5lcywgbGluZXMpO1xuICAgICAgICB0aGlzLl9zZWxlY3RGb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgfSk7XG4gICAgICBpZiAob3B0aW9ucy5zbWFydEN1cnNvcikge1xuICAgICAgICBpZiAoIXRoaXMuX3NjQWN0aXZlKSB7XG4gICAgICAgICAgLy8gYWN0aXZhdGUgc21hcnQgY3Vyc29yXG4gICAgICAgICAgdGhpcy5fc2NBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3NjVGFibGVQb3MgPSByYW5nZS5zdGFydDtcbiAgICAgICAgICBpZiAoc3RhcnRGb2N1cy5jb2x1bW4gPCAwIHx8IGZvcm1hdHRlZC50YWJsZS5nZXRIZWFkZXJXaWR0aCgpIC0gMSA8IHN0YXJ0Rm9jdXMuY29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLl9zY1N0YXJ0Rm9jdXMgPSBuZXcgRm9jdXMoc3RhcnRGb2N1cy5yb3csIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjU3RhcnRGb2N1cyA9IHN0YXJ0Rm9jdXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NjTGFzdEZvY3VzID0gbmV3Rm9jdXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBjZWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBwcmV2aW91c0NlbGwob3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0Rm9jdXMgPSBuZXdGb2N1cztcbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPT09IDApIHtcbiAgICAgICAgaWYgKG5ld0ZvY3VzLmNvbHVtbiA+IDApIHtcbiAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbihuZXdGb2N1cy5jb2x1bW4gLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobmV3Rm9jdXMucm93ID09PSAxKSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3IEZvY3VzKDAsIGNvbXBsZXRlZC50YWJsZS5nZXRIZWFkZXJXaWR0aCgpIC0gMSwgbmV3Rm9jdXMub2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobmV3Rm9jdXMuY29sdW1uID4gMCkge1xuICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKG5ld0ZvY3VzLmNvbHVtbiAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG5ld0ZvY3VzID0gbmV3IEZvY3VzKFxuICAgICAgICAgICAgbmV3Rm9jdXMucm93ID09PSAyID8gMCA6IG5ld0ZvY3VzLnJvdyAtIDEsXG4gICAgICAgICAgICBjb21wbGV0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKSAtIDEsXG4gICAgICAgICAgICBuZXdGb2N1cy5vZmZzZXRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBtb3ZlZCA9ICFuZXdGb2N1cy5wb3NFcXVhbHMoc3RhcnRGb2N1cyk7XG4gICAgICAvLyBmb3JtYXRcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChfY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIG1vdmVkKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0Rm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICB0aGlzLnJlc2V0U21hcnRDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZm9jdXMgdG8gdGhlIG5leHQgcm93LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBuZXh0Um93KG9wdGlvbnMpIHtcbiAgICB0aGlzLl93aXRoVGFibGUob3B0aW9ucywgKHsgcmFuZ2UsIGxpbmVzLCB0YWJsZSwgZm9jdXMgfSkgPT4ge1xuICAgICAgLy8gcmVzZXQgc21hcnQgY3Vyc29yIGlmIG1vdmVkXG4gICAgICBjb25zdCBmb2N1c01vdmVkID0gKHRoaXMuX3NjVGFibGVQb3MgIT09IG51bGwgJiYgIXJhbmdlLnN0YXJ0LmVxdWFscyh0aGlzLl9zY1RhYmxlUG9zKSlcbiAgICAgICAgfHwgKHRoaXMuX3NjTGFzdEZvY3VzICE9PSBudWxsICYmICFmb2N1cy5wb3NFcXVhbHModGhpcy5fc2NMYXN0Rm9jdXMpKTtcbiAgICAgIGlmICh0aGlzLl9zY0FjdGl2ZSAmJiBmb2N1c01vdmVkKSB7XG4gICAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgICAgfVxuICAgICAgbGV0IG5ld0ZvY3VzID0gZm9jdXM7XG4gICAgICAvLyBjb21wbGV0ZVxuICAgICAgY29uc3QgY29tcGxldGVkID0gY29tcGxldGVUYWJsZSh0YWJsZSwgb3B0aW9ucyk7XG4gICAgICBpZiAoY29tcGxldGVkLmRlbGltaXRlckluc2VydGVkICYmIG5ld0ZvY3VzLnJvdyA+IDApIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydEZvY3VzID0gbmV3Rm9jdXM7XG4gICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPT09IDApIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3coMik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5zbWFydEN1cnNvcikge1xuICAgICAgICBpZiAodGhpcy5fc2NBY3RpdmUpIHtcbiAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbih0aGlzLl9zY1N0YXJ0Rm9jdXMuY29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdGb2N1cy5jb2x1bW4gPCAwIHx8IGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEgPCBuZXdGb2N1cy5jb2x1bW4pIHtcbiAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbigwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKDApO1xuICAgICAgfVxuICAgICAgLy8gaW5zZXJ0IGVtcHR5IHJvdyBpZiBuZWVkZWRcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPiBhbHRlcmVkLmdldEhlaWdodCgpIC0gMSkge1xuICAgICAgICBjb25zdCByb3cgPSBuZXcgQXJyYXkoYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpKS5maWxsKG5ldyBUYWJsZUNlbGwoXCJcIikpO1xuICAgICAgICBhbHRlcmVkID0gaW5zZXJ0Um93KGFsdGVyZWQsIGFsdGVyZWQuZ2V0SGVpZ2h0KCksIG5ldyBUYWJsZVJvdyhyb3csIFwiXCIsIFwiXCIpKTtcbiAgICAgIH1cbiAgICAgIC8vIGZvcm1hdFxuICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0VGFibGUoYWx0ZXJlZCwgb3B0aW9ucyk7XG4gICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldE9mZnNldChfY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgYWx0ZXJlZCwgZm9ybWF0dGVkLCB0cnVlKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0Rm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG9wdGlvbnMuc21hcnRDdXJzb3IpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zY0FjdGl2ZSkge1xuICAgICAgICAgIC8vIGFjdGl2YXRlIHNtYXJ0IGN1cnNvclxuICAgICAgICAgIHRoaXMuX3NjQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9zY1RhYmxlUG9zID0gcmFuZ2Uuc3RhcnQ7XG4gICAgICAgICAgaWYgKHN0YXJ0Rm9jdXMuY29sdW1uIDwgMCB8fCBmb3JtYXR0ZWQudGFibGUuZ2V0SGVhZGVyV2lkdGgoKSAtIDEgPCBzdGFydEZvY3VzLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5fc2NTdGFydEZvY3VzID0gbmV3IEZvY3VzKHN0YXJ0Rm9jdXMucm93LCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY1N0YXJ0Rm9jdXMgPSBzdGFydEZvY3VzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zY0xhc3RGb2N1cyA9IG5ld0ZvY3VzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gZW1wdHkgcm93IGF0IHRoZSBjdXJyZW50IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBpbnNlcnRSb3cob3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPD0gMSkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdygyKTtcbiAgICAgIH1cbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKDApO1xuICAgICAgLy8gaW5zZXJ0IGFuIGVtcHR5IHJvd1xuICAgICAgY29uc3Qgcm93ID0gbmV3IEFycmF5KGNvbXBsZXRlZC50YWJsZS5nZXRIZWFkZXJXaWR0aCgpKS5maWxsKG5ldyBUYWJsZUNlbGwoXCJcIikpO1xuICAgICAgY29uc3QgYWx0ZXJlZCA9IGluc2VydFJvdyhjb21wbGV0ZWQudGFibGUsIG5ld0ZvY3VzLnJvdywgbmV3IFRhYmxlUm93KHJvdywgXCJcIiwgXCJcIikpO1xuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIHRydWUpKTtcbiAgICAgIC8vIGFwcGx5XG4gICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2V0U21hcnRDdXJzb3IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgcm93IGF0IHRoZSBjdXJyZW50IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBkZWxldGVSb3cob3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIC8vIGRlbGV0ZSBhIHJvd1xuICAgICAgbGV0IGFsdGVyZWQgPSBjb21wbGV0ZWQudGFibGU7XG4gICAgICBsZXQgbW92ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgIT09IDEpIHtcbiAgICAgICAgYWx0ZXJlZCA9IGRlbGV0ZVJvdyhhbHRlcmVkLCBuZXdGb2N1cy5yb3cpO1xuICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgIGlmIChuZXdGb2N1cy5yb3cgPiBhbHRlcmVkLmdldEhlaWdodCgpIC0gMSkge1xuICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyA9PT0gMiA/IDAgOiBuZXdGb2N1cy5yb3cgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIG1vdmVkKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0Rm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBmb2N1c2VkIHJvdyBieSB0aGUgc3BlY2lmaWVkIG9mZnNldC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIEFuIG9mZnNldCB0aGUgcm93IGlzIG1vdmVkIGJ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBtb3ZlUm93KG9mZnNldCwgb3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vdmUgcm93XG4gICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPiAxKSB7XG4gICAgICAgIGNvbnN0IGRlc3QgPSBNYXRoLm1pbihNYXRoLm1heChuZXdGb2N1cy5yb3cgKyBvZmZzZXQsIDIpLCBhbHRlcmVkLmdldEhlaWdodCgpIC0gMSk7XG4gICAgICAgIGFsdGVyZWQgPSBtb3ZlUm93KGFsdGVyZWQsIG5ld0ZvY3VzLnJvdywgZGVzdCk7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KGRlc3QpO1xuICAgICAgfVxuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIGZhbHNlKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyBhbiBlbXB0eSBjb2x1bW4gYXQgdGhlIGN1cnJlbnQgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGluc2VydENvbHVtbihvcHRpb25zKSB7XG4gICAgdGhpcy5fd2l0aFRhYmxlKG9wdGlvbnMsICh7IHJhbmdlLCBsaW5lcywgdGFibGUsIGZvY3VzIH0pID0+IHtcbiAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgLy8gY29tcGxldGVcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGNvbXBsZXRlVGFibGUodGFibGUsIG9wdGlvbnMpO1xuICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Um93KG5ld0ZvY3VzLnJvdyArIDEpO1xuICAgICAgfVxuICAgICAgLy8gbW92ZSBmb2N1c1xuICAgICAgaWYgKG5ld0ZvY3VzLnJvdyA9PT0gMSkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdygwKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdGb2N1cy5jb2x1bW4gPCAwKSB7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKDApO1xuICAgICAgfVxuICAgICAgLy8gaW5zZXJ0IGFuIGVtcHR5IGNvbHVtblxuICAgICAgY29uc3QgY29sdW1uID0gbmV3IEFycmF5KGNvbXBsZXRlZC50YWJsZS5nZXRIZWlnaHQoKSAtIDEpLmZpbGwobmV3IFRhYmxlQ2VsbChcIlwiKSk7XG4gICAgICBjb25zdCBhbHRlcmVkID0gaW5zZXJ0Q29sdW1uKGNvbXBsZXRlZC50YWJsZSwgbmV3Rm9jdXMuY29sdW1uLCBjb2x1bW4sIG9wdGlvbnMpO1xuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIHRydWUpKTtcbiAgICAgIC8vIGFwcGx5XG4gICAgICB0aGlzLl90ZXh0RWRpdG9yLnRyYW5zYWN0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgZm9ybWF0dGVkLnRhYmxlLnRvTGluZXMoKSwgbGluZXMpO1xuICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2V0U21hcnRDdXJzb3IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY29sdW1uIGF0IHRoZSBjdXJyZW50IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBkZWxldGVDb2x1bW4ob3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vdmUgZm9jdXNcbiAgICAgIGlmIChuZXdGb2N1cy5yb3cgPT09IDEpIHtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3coMCk7XG4gICAgICB9XG4gICAgICAvLyBkZWxldGUgYSBjb2x1bW5cbiAgICAgIGxldCBhbHRlcmVkID0gY29tcGxldGVkLnRhYmxlO1xuICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XG4gICAgICBpZiAoMCA8PSBuZXdGb2N1cy5jb2x1bW4gJiYgbmV3Rm9jdXMuY29sdW1uIDw9IGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEpIHtcbiAgICAgICAgYWx0ZXJlZCA9IGRlbGV0ZUNvbHVtbihjb21wbGV0ZWQudGFibGUsIG5ld0ZvY3VzLmNvbHVtbiwgb3B0aW9ucyk7XG4gICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG5ld0ZvY3VzLmNvbHVtbiA+IGFsdGVyZWQuZ2V0SGVhZGVyV2lkdGgoKSAtIDEpIHtcbiAgICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldENvbHVtbihhbHRlcmVkLmdldEhlYWRlcldpZHRoKCkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIG1vdmVkKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0Rm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9tb3ZlVG9Gb2N1cyhyYW5nZS5zdGFydC5yb3csIGZvcm1hdHRlZC50YWJsZSwgbmV3Rm9jdXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVzZXRTbWFydEN1cnNvcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBmb2N1c2VkIGNvbHVtbiBieSB0aGUgc3BlY2lmaWVkIG9mZnNldC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIEFuIG9mZnNldCB0aGUgY29sdW1uIGlzIG1vdmVkIGJ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFNlZSB7QGxpbmsgb3B0aW9uc30uXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBtb3ZlQ29sdW1uKG9mZnNldCwgb3B0aW9ucykge1xuICAgIHRoaXMuX3dpdGhUYWJsZShvcHRpb25zLCAoeyByYW5nZSwgbGluZXMsIHRhYmxlLCBmb2N1cyB9KSA9PiB7XG4gICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgIC8vIGNvbXBsZXRlXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgIGlmIChjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICBuZXdGb2N1cyA9IG5ld0ZvY3VzLnNldFJvdyhuZXdGb2N1cy5yb3cgKyAxKTtcbiAgICAgIH1cbiAgICAgIC8vIG1vdmUgY29sdW1uXG4gICAgICBsZXQgYWx0ZXJlZCA9IGNvbXBsZXRlZC50YWJsZTtcbiAgICAgIGlmICgwIDw9IG5ld0ZvY3VzLmNvbHVtbiAmJiBuZXdGb2N1cy5jb2x1bW4gPD0gYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSkge1xuICAgICAgICBjb25zdCBkZXN0ID0gTWF0aC5taW4oTWF0aC5tYXgobmV3Rm9jdXMuY29sdW1uICsgb2Zmc2V0LCAwKSwgYWx0ZXJlZC5nZXRIZWFkZXJXaWR0aCgpIC0gMSk7XG4gICAgICAgIGFsdGVyZWQgPSBtb3ZlQ29sdW1uKGFsdGVyZWQsIG5ld0ZvY3VzLmNvbHVtbiwgZGVzdCk7XG4gICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0Q29sdW1uKGRlc3QpO1xuICAgICAgfVxuICAgICAgLy8gZm9ybWF0XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXRUYWJsZShhbHRlcmVkLCBvcHRpb25zKTtcbiAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KF9jb21wdXRlTmV3T2Zmc2V0KG5ld0ZvY3VzLCBhbHRlcmVkLCBmb3JtYXR0ZWQsIGZhbHNlKSk7XG4gICAgICAvLyBhcHBseVxuICAgICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpbmVzKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2UuZW5kLnJvdyArIDEsIGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCksIGxpbmVzKTtcbiAgICAgICAgdGhpcy5fbW92ZVRvRm9jdXMocmFuZ2Uuc3RhcnQucm93LCBmb3JtYXR0ZWQudGFibGUsIG5ld0ZvY3VzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNldFNtYXJ0Q3Vyc29yKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0cyBhbGwgdGhlIHRhYmxlcyBpbiB0aGUgdGV4dCBlZGl0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gU2VlIHtAbGluayBvcHRpb25zfS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGZvcm1hdEFsbChvcHRpb25zKSB7XG4gICAgdGhpcy5fdGV4dEVkaXRvci50cmFuc2FjdCgoKSA9PiB7XG4gICAgICBjb25zdCByZSA9IF9jcmVhdGVJc1RhYmxlUm93UmVnZXgob3B0aW9ucy5sZWZ0TWFyZ2luQ2hhcnMpO1xuICAgICAgbGV0IHBvcyA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcbiAgICAgIGxldCBsaW5lcyA9IFtdO1xuICAgICAgbGV0IHN0YXJ0Um93ID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IGxhc3RSb3cgPSB0aGlzLl90ZXh0RWRpdG9yLmdldExhc3RSb3coKTtcbiAgICAgIC8vIGZpbmQgdGFibGVzXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPD0gbGFzdFJvdzsgcm93KyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IHRoaXMuX3RleHRFZGl0b3IuZ2V0TGluZShyb3cpO1xuICAgICAgICBpZiAodGhpcy5fdGV4dEVkaXRvci5hY2NlcHRzVGFibGVFZGl0KHJvdykgJiYgcmUudGVzdChsaW5lKSkge1xuICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgaWYgKHN0YXJ0Um93ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydFJvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gZ2V0IHRhYmxlIGluZm9cbiAgICAgICAgICBjb25zdCBlbmRSb3cgPSByb3cgLSAxO1xuICAgICAgICAgIGNvbnN0IHJhbmdlID0gbmV3IFJhbmdlKFxuICAgICAgICAgICAgbmV3IFBvaW50KHN0YXJ0Um93LCAwKSxcbiAgICAgICAgICAgIG5ldyBQb2ludChlbmRSb3csIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aClcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHRhYmxlID0gcmVhZFRhYmxlKGxpbmVzLCBvcHRpb25zKTtcbiAgICAgICAgICBjb25zdCBmb2N1cyA9IHRhYmxlLmZvY3VzT2ZQb3NpdGlvbihwb3MsIHN0YXJ0Um93KTtcbiAgICAgICAgICBjb25zdCBmb2N1c2VkID0gZm9jdXMgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAvLyBmb3JtYXRcbiAgICAgICAgICBsZXQgbmV3Rm9jdXMgPSBmb2N1cztcbiAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgICBpZiAoZm9jdXNlZCAmJiBjb21wbGV0ZWQuZGVsaW1pdGVySW5zZXJ0ZWQgJiYgbmV3Rm9jdXMucm93ID4gMCkge1xuICAgICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdFRhYmxlKGNvbXBsZXRlZC50YWJsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgICAgIG5ld0ZvY3VzID0gbmV3Rm9jdXMuc2V0T2Zmc2V0KFxuICAgICAgICAgICAgICBfY29tcHV0ZU5ld09mZnNldChuZXdGb2N1cywgY29tcGxldGVkLnRhYmxlLCBmb3JtYXR0ZWQsIGZhbHNlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgICBjb25zdCBuZXdMaW5lcyA9IGZvcm1hdHRlZC50YWJsZS50b0xpbmVzKCk7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlTGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93ICsgMSwgbmV3TGluZXMsIGxpbmVzKTtcbiAgICAgICAgICAvLyB1cGRhdGUgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAgICAgY29uc3QgZGlmZiA9IG5ld0xpbmVzLmxlbmd0aCAtIGxpbmVzLmxlbmd0aDtcbiAgICAgICAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgICAgcG9zID0gZm9ybWF0dGVkLnRhYmxlLnBvc2l0aW9uT2ZGb2N1cyhuZXdGb2N1cywgc3RhcnRSb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChwb3Mucm93ID4gZW5kUm93KSB7XG4gICAgICAgICAgICBwb3MgPSBuZXcgUG9pbnQocG9zLnJvdyArIGRpZmYsIHBvcy5jb2x1bW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgIGxpbmVzID0gW107XG4gICAgICAgICAgc3RhcnRSb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgbGFzdFJvdyArPSBkaWZmO1xuICAgICAgICAgIHJvdyArPSBkaWZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3RhcnRSb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBnZXQgdGFibGUgaW5mb1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBsYXN0Um93O1xuICAgICAgICBjb25zdCByYW5nZSA9IG5ldyBSYW5nZShcbiAgICAgICAgICBuZXcgUG9pbnQoc3RhcnRSb3csIDApLFxuICAgICAgICAgIG5ldyBQb2ludChlbmRSb3csIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFibGUgPSByZWFkVGFibGUobGluZXMsIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBmb2N1cyA9IHRhYmxlLmZvY3VzT2ZQb3NpdGlvbihwb3MsIHN0YXJ0Um93KTtcbiAgICAgICAgLy8gZm9ybWF0XG4gICAgICAgIGxldCBuZXdGb2N1cyA9IGZvY3VzO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBjb21wbGV0ZVRhYmxlKHRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKGNvbXBsZXRlZC5kZWxpbWl0ZXJJbnNlcnRlZCAmJiBuZXdGb2N1cy5yb3cgPiAwKSB7XG4gICAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRSb3cobmV3Rm9jdXMucm93ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0VGFibGUoY29tcGxldGVkLnRhYmxlLCBvcHRpb25zKTtcbiAgICAgICAgbmV3Rm9jdXMgPSBuZXdGb2N1cy5zZXRPZmZzZXQoXG4gICAgICAgICAgX2NvbXB1dGVOZXdPZmZzZXQobmV3Rm9jdXMsIGNvbXBsZXRlZC50YWJsZSwgZm9ybWF0dGVkLCBmYWxzZSlcbiAgICAgICAgKTtcbiAgICAgICAgLy8gYXBwbHlcbiAgICAgICAgY29uc3QgbmV3TGluZXMgPSBmb3JtYXR0ZWQudGFibGUudG9MaW5lcygpO1xuICAgICAgICB0aGlzLl91cGRhdGVMaW5lcyhyYW5nZS5zdGFydC5yb3csIHJhbmdlLmVuZC5yb3cgKyAxLCBuZXdMaW5lcywgbGluZXMpO1xuICAgICAgICBwb3MgPSBmb3JtYXR0ZWQudGFibGUucG9zaXRpb25PZkZvY3VzKG5ld0ZvY3VzLCBzdGFydFJvdyk7XG4gICAgICB9XG4gICAgICB0aGlzLl90ZXh0RWRpdG9yLnNldEN1cnNvclBvc2l0aW9uKHBvcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0cy5Qb2ludCA9IFBvaW50O1xuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZXhwb3J0cy5Gb2N1cyA9IEZvY3VzO1xuZXhwb3J0cy5BbGlnbm1lbnQgPSBBbGlnbm1lbnQ7XG5leHBvcnRzLkRlZmF1bHRBbGlnbm1lbnQgPSBEZWZhdWx0QWxpZ25tZW50O1xuZXhwb3J0cy5IZWFkZXJBbGlnbm1lbnQgPSBIZWFkZXJBbGlnbm1lbnQ7XG5leHBvcnRzLlRhYmxlQ2VsbCA9IFRhYmxlQ2VsbDtcbmV4cG9ydHMuVGFibGVSb3cgPSBUYWJsZVJvdztcbmV4cG9ydHMuVGFibGUgPSBUYWJsZTtcbmV4cG9ydHMucmVhZFRhYmxlID0gcmVhZFRhYmxlO1xuZXhwb3J0cy5Gb3JtYXRUeXBlID0gRm9ybWF0VHlwZTtcbmV4cG9ydHMuY29tcGxldGVUYWJsZSA9IGNvbXBsZXRlVGFibGU7XG5leHBvcnRzLmZvcm1hdFRhYmxlID0gZm9ybWF0VGFibGU7XG5leHBvcnRzLmFsdGVyQWxpZ25tZW50ID0gYWx0ZXJBbGlnbm1lbnQ7XG5leHBvcnRzLmluc2VydFJvdyA9IGluc2VydFJvdztcbmV4cG9ydHMuZGVsZXRlUm93ID0gZGVsZXRlUm93O1xuZXhwb3J0cy5tb3ZlUm93ID0gbW92ZVJvdztcbmV4cG9ydHMuaW5zZXJ0Q29sdW1uID0gaW5zZXJ0Q29sdW1uO1xuZXhwb3J0cy5kZWxldGVDb2x1bW4gPSBkZWxldGVDb2x1bW47XG5leHBvcnRzLm1vdmVDb2x1bW4gPSBtb3ZlQ29sdW1uO1xuZXhwb3J0cy5JbnNlcnQgPSBJbnNlcnQ7XG5leHBvcnRzLkRlbGV0ZSA9IERlbGV0ZTtcbmV4cG9ydHMuYXBwbHlFZGl0U2NyaXB0ID0gYXBwbHlFZGl0U2NyaXB0O1xuZXhwb3J0cy5zaG9ydGVzdEVkaXRTY3JpcHQgPSBzaG9ydGVzdEVkaXRTY3JpcHQ7XG5leHBvcnRzLklUZXh0RWRpdG9yID0gSVRleHRFZGl0b3I7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuZXhwb3J0cy5UYWJsZUVkaXRvciA9IFRhYmxlRWRpdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXRlLWtlcm5lbC5qcy5tYXBcbiIsImltcG9ydCB7XG4gIERlZmF1bHRBbGlnbm1lbnQsXG4gIEZvcm1hdFR5cGUsXG4gIEhlYWRlckFsaWdubWVudCxcbiAgT3B0aW9ucyxcbn0gZnJvbSAnQHN1c2lzdS9tdGUta2VybmVsJztcblxuY29uc3QgREVGQVVMVF9URVhUX1dJRFRIX09QVElPTlMgPSB7XG4gIG5vcm1hbGl6ZTogdHJ1ZSxcbiAgd2lkZUNoYXJzOiBuZXcgU2V0PHN0cmluZz4oKSxcbiAgbmFycm93Q2hhcnM6IG5ldyBTZXQ8c3RyaW5nPigpLFxuICBhbWJpZ3VvdXNBc1dpZGU6IGZhbHNlLFxufTtcblxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBsZWZ0TWFyZ2luQ2hhcnM6IG5ldyBTZXQ8c3RyaW5nPigpLFxuICBmb3JtYXRUeXBlOiBGb3JtYXRUeXBlLk5PUk1BTCxcbiAgbWluRGVsaW1pdGVyV2lkdGg6IDMsXG4gIGRlZmF1bHRBbGlnbm1lbnQ6IERlZmF1bHRBbGlnbm1lbnQuTEVGVCxcbiAgaGVhZGVyQWxpZ25tZW50OiBIZWFkZXJBbGlnbm1lbnQuRk9MTE9XLFxuICBzbWFydEN1cnNvcjogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uc1dpdGhEZWZhdWx0cyA9IChvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+KTogT3B0aW9ucyA9PiAoe1xuICAgIC4uLkRFRkFVTFRfT1BUSU9OUyxcbiAgICAuLi5vcHRpb25zLFxuICAgIHRleHRXaWR0aE9wdGlvbnM6IG9wdGlvbnMudGV4dFdpZHRoT3B0aW9uc1xuICAgICAgPyB7IC4uLkRFRkFVTFRfVEVYVF9XSURUSF9PUFRJT05TLCAuLi5vcHRpb25zLnRleHRXaWR0aE9wdGlvbnMgfVxuICAgICAgOiBERUZBVUxUX1RFWFRfV0lEVEhfT1BUSU9OUyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogT3B0aW9ucyA9IG9wdGlvbnNXaXRoRGVmYXVsdHMoe30pO1xuIiwiaW1wb3J0IHsgUG9pbnQsIFJhbmdlIH0gZnJvbSAnQHN1c2lzdS9tdGUta2VybmVsJztcbmltcG9ydCB7IE1hcmtkb3duVmlldyB9IGZyb20gJ29ic2lkaWFuJztcblxuZXhwb3J0IGNsYXNzIE9ic2lkaWFuVGV4dEVkaXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcjtcblxuICBjb25zdHJ1Y3RvcihlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKTtcbiAgY29uc3RydWN0b3IodmlldzogTWFya2Rvd25WaWV3KTtcbiAgY29uc3RydWN0b3Iob2JqOiBDb2RlTWlycm9yLkVkaXRvciB8IE1hcmtkb3duVmlldykge1xuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvciBjYWxsZWQnKTtcbiAgICBpZiAoJ3NvdXJjZU1vZGUnIGluIG9iaikge1xuICAgICAgdGhpcy5lZGl0b3IgPSBvYmouc291cmNlTW9kZS5jbUVkaXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3IgPSBvYmo7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEN1cnNvclBvc2l0aW9uID0gKCk6IFBvaW50ID0+IHtcbiAgICBjb25zb2xlLmxvZygnZ2V0Q3Vyc29yUG9zaXRpb24gd2FzIGNhbGxlZCcpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5lZGl0b3IuZ2V0Q3Vyc29yKCk7XG4gICAgcmV0dXJuIG5ldyBQb2ludChwb3NpdGlvbi5saW5lLCBwb3NpdGlvbi5jaCk7XG4gIH07XG5cbiAgcHVibGljIHNldEN1cnNvclBvc2l0aW9uID0gKHBvczogUG9pbnQpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2V0Q3Vyc29yUG9zaXRpb24gd2FzIGNhbGxlZCcpO1xuICAgIHRoaXMuZWRpdG9yLnNldEN1cnNvcih7IGxpbmU6IHBvcy5yb3csIGNoOiBwb3MuY29sdW1uIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBzZXRTZWxlY3Rpb25SYW5nZSA9IChyYW5nZTogUmFuZ2UpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2V0U2VsZWN0aW9uUmFuZ2Ugd2FzIGNhbGxlZCcpO1xuICAgIHRoaXMuZWRpdG9yLnNldFNlbGVjdGlvbihcbiAgICAgIHsgbGluZTogcmFuZ2Uuc3RhcnQucm93LCBjaDogcmFuZ2Uuc3RhcnQuY29sdW1uIH0sXG4gICAgICB7IGxpbmU6IHJhbmdlLmVuZC5yb3csIGNoOiByYW5nZS5lbmQuY29sdW1uIH0sXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0TGFzdFJvdyA9ICgpOiBudW1iZXIgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdnZXRMYXN0Um93IHdhcyBjYWxsZWQnKTtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3IubGFzdExpbmUoKTtcbiAgfTtcblxuICBwdWJsaWMgYWNjZXB0c1RhYmxlRWRpdCA9IChyb3c6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnNvbGUubG9nKGBhY2NlcHRzVGFibGVFZGl0IHdhcyBjYWxsZWQgb24gcm93ICR7cm93fWApO1xuICAgIC8vIFRPRE86IFdoYXQgZG9lcyB0aGlzIGZ1bmN0aW9uIHdhbnQ/XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcHVibGljIGdldExpbmUgPSAocm93OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBnZXRMaW5lIHdhcyBjYWxsZWQgb24gbGluZSAke3Jvd31gKTtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3IuZ2V0TGluZShyb3cpO1xuICB9O1xuXG4gIHB1YmxpYyBpbnNlcnRMaW5lID0gKHJvdzogbnVtYmVyLCBsaW5lOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaW5zZXJ0TGluZSB3YXMgY2FsbGVkIGF0IGxpbmUgJHtyb3d9YCk7XG4gICAgY29uc29sZS5sb2coYE5ldyBsaW5lOiAke2xpbmV9YCk7XG5cbiAgICBpZiAocm93ID4gdGhpcy5nZXRMYXN0Um93KCkpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnJlcGxhY2VSYW5nZSgnXFxuJyArIGxpbmUsIHsgbGluZTogcm93LCBjaDogMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3IucmVwbGFjZVJhbmdlKGxpbmUgKyAnXFxuJywgeyBsaW5lOiByb3csIGNoOiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgZGVsZXRlTGluZSA9IChyb3c6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkZWxldGVMaW5lIHdhcyBjYWxsZWQgb24gbGluZSAke3Jvd31gKTtcbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlUmFuZ2UoXG4gICAgICAnJyxcbiAgICAgIHsgbGluZTogcm93LCBjaDogMCB9LFxuICAgICAgeyBsaW5lOiByb3cgKyAxLCBjaDogMCB9LFxuICAgICk7XG4gIH07XG5cbiAgcHVibGljIHJlcGxhY2VMaW5lcyA9IChcbiAgICBzdGFydFJvdzogbnVtYmVyLFxuICAgIGVuZFJvdzogbnVtYmVyLFxuICAgIGxpbmVzOiBzdHJpbmdbXSxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlcGxhY2VMaW5lcyB3YXMgY2FsbGVkJyk7XG4gICAgY29uc29sZS5sb2coYHN0YXJ0ICR7c3RhcnRSb3d9LCBlbmQ6ICR7ZW5kUm93fWApO1xuICAgIGNvbnNvbGUubG9nKGxpbmVzKTtcblxuICAgIC8vIFRha2Ugb25lIG9mZiB0aGUgZW5kUm93IGFuZCBpbnN0ZWFkIGdvIHRvIHRoZSBlbmQgb2YgdGhhdCBsaW5lXG4gICAgY29uc3QgcmVhbEVuZFJvdyA9IGVuZFJvdyAtIDE7XG4gICAgY29uc3QgZW5kUm93Q29udGVudHMgPSB0aGlzLmVkaXRvci5nZXRMaW5lKHJlYWxFbmRSb3cpO1xuICAgIGNvbnN0IGVuZFJvd0ZpbmFsSW5kZXggPSBlbmRSb3dDb250ZW50cy5sZW5ndGg7XG5cbiAgICB0aGlzLmVkaXRvci5yZXBsYWNlUmFuZ2UoXG4gICAgICBsaW5lcyxcbiAgICAgIHsgbGluZTogc3RhcnRSb3csIGNoOiAwIH0sXG4gICAgICB7IGxpbmU6IHJlYWxFbmRSb3csIGNoOiBlbmRSb3dGaW5hbEluZGV4IH0sXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgdHJhbnNhY3QgPSAoZnVuYzogRnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygndHJhbnNhY3Qgd2FzIGNhbGxlZCcpO1xuICAgIHRoaXMuZWRpdG9yLm9wZXJhdGlvbigoKSA9PiB7XG4gICAgICBmdW5jKCk7XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0T3B0aW9ucywgb3B0aW9uc1dpdGhEZWZhdWx0cyB9IGZyb20gJy4vbXRlLW9wdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWxpZ25tZW50LFxuICBGb3JtYXRUeXBlLFxuICBPcHRpb25zLFxuICBUYWJsZUVkaXRvcixcbn0gZnJvbSAnQHN1c2lzdS9tdGUta2VybmVsJztcbmltcG9ydCB7IEFwcCwgTWFya2Rvd25WaWV3LCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBPYnNpZGlhblRleHRFZGl0b3IgfSBmcm9tICdzcmMvdGV4dC1lZGl0b3ItaW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVFZGl0b3JQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBwdWJsaWMgc2V0dGluZ3M6IFRhYmxlRWRpdG9yUGx1Z2luU2V0dGluZ3M7XG5cbiAgcHVibGljIG9uSW5pdCgpOiB2b2lkIHt9XG5cbiAgcHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zb2xlLmxvZygnbG9hZGluZyBtYXJrZG93bi10YWJsZS1lZGl0b3IgcGx1Z2luJyk7XG5cbiAgICB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnZm9ybWF0LXRhYmxlJyxcbiAgICAgIG5hbWU6ICdGb3JtYXQgdGFibGUgYXQgdGhlIGN1cnNvcicsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmluVGFibGVXcmFwcGVyKHRoaXMuZm9ybWF0VGFibGUpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ25leHQtY2VsbCcsXG4gICAgICBuYW1lOiAnTmF2aWdhdGUgdG8gTmV4dCBDZWxsJyxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogWydNb2QnXSxcbiAgICAgICAgICBrZXk6ICd0YWInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5UYWJsZVdyYXBwZXIodGhpcy5uZXh0Q2VsbCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncHJldmlvdXMtY2VsbCcsXG4gICAgICBuYW1lOiAnTmF2aWdhdGUgdG8gUHJldmlvdXMgQ2VsbCcsXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFsnTW9kJywgJ1NoaWZ0J10sXG4gICAgICAgICAga2V5OiAndGFiJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmluVGFibGVXcmFwcGVyKHRoaXMucHJldmlvdXNDZWxsKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICduZXh0LXJvdycsXG4gICAgICBuYW1lOiAnTmF2aWdhdGUgdG8gTmV4dCBSb3cnLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbJ01vZCddLFxuICAgICAgICAgIGtleTogJ2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmluVGFibGVXcmFwcGVyKHRoaXMubmV4dFJvdyk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnaW5zZXJ0LWNvbHVtbicsXG4gICAgICBuYW1lOiAnSW5zZXJ0IGNvbHVtbiBiZWZvcmUgY3VycmVudCcsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmluVGFibGVXcmFwcGVyKHRoaXMuaW5zZXJ0Q29sdW1uKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdsZWZ0LWFsaWduLWNvbHVtbicsXG4gICAgICBuYW1lOiAnTGVmdCBhbGlnbiBjb2x1bW4nLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5pblRhYmxlV3JhcHBlcih0aGlzLmxlZnRBbGlnbkNvbHVtbik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnY2VudGVyLWFsaWduLWNvbHVtbicsXG4gICAgICBuYW1lOiAnQ2VudGVyIGFsaWduIGNvbHVtbicsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmluVGFibGVXcmFwcGVyKHRoaXMuY2VudGVyQWxpZ25Db2x1bW4pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ3JpZ2h0LWFsaWduLWNvbHVtbicsXG4gICAgICBuYW1lOiAnUmlnaHQgYWxpZ24gY29sdW1uJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5UYWJsZVdyYXBwZXIodGhpcy5yaWdodEFsaWduQ29sdW1uKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IFRhYmxlRWRpdG9yU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbnVubG9hZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nIG1hcmtkb3duLXRhYmxlLWVkaXRvciBwbHVnaW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgVGFibGVFZGl0b3JQbHVnaW5TZXR0aW5ncygpO1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZWRTZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICAgIGlmIChsb2FkZWRTZXR0aW5ncykge1xuICAgICAgICBjb25zb2xlLmxvZygnRm91bmQgZXhpc3Rpbmcgc2V0dGluZ3MgZmlsZScpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm1hdFR5cGUgPSBsb2FkZWRTZXR0aW5ncy5mb3JtYXRUeXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHNldHRpbmdzIGZpbGUgZm91bmQsIHNhdmluZy4uLicpO1xuICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGluVGFibGVXcmFwcGVyID0gKFxuICAgIGZuOiAodGFibGVlZGl0b3I6IFRhYmxlRWRpdG9yKSA9PiB2b2lkLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBhY3RpdmVMZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XG4gICAgaWYgKGFjdGl2ZUxlYWYudmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykge1xuICAgICAgY29uc3Qgb3RlID0gbmV3IE9ic2lkaWFuVGV4dEVkaXRvcihhY3RpdmVMZWFmLnZpZXcpO1xuICAgICAgY29uc3QgdGUgPSBuZXcgVGFibGVFZGl0b3Iob3RlKTtcblxuICAgICAgaWYgKHRlLmN1cnNvcklzSW5UYWJsZShkZWZhdWx0T3B0aW9ucykpIHtcbiAgICAgICAgZm4odGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRDZWxsID0gKHRlOiBUYWJsZUVkaXRvcik6IHZvaWQgPT4ge1xuICAgIHRlLm5leHRDZWxsKHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcHJldmlvdXNDZWxsID0gKHRlOiBUYWJsZUVkaXRvcik6IHZvaWQgPT4ge1xuICAgIHRlLnByZXZpb3VzQ2VsbCh0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRSb3cgPSAodGU6IFRhYmxlRWRpdG9yKTogdm9pZCA9PiB7XG4gICAgdGUubmV4dFJvdyh0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFRhYmxlID0gKHRlOiBUYWJsZUVkaXRvcik6IHZvaWQgPT4ge1xuICAgIHRlLmZvcm1hdCh0aGlzLnNldHRpbmdzLmFzT3B0aW9ucygpKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGluc2VydENvbHVtbiA9ICh0ZTogVGFibGVFZGl0b3IpOiB2b2lkID0+IHtcbiAgICB0ZS5pbnNlcnRDb2x1bW4odGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsZWZ0QWxpZ25Db2x1bW4gPSAodGU6IFRhYmxlRWRpdG9yKTogdm9pZCA9PiB7XG4gICAgdGUuYWxpZ25Db2x1bW4oQWxpZ25tZW50LkxFRlQsIHRoaXMuc2V0dGluZ3MuYXNPcHRpb25zKCkpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY2VudGVyQWxpZ25Db2x1bW4gPSAodGU6IFRhYmxlRWRpdG9yKTogdm9pZCA9PiB7XG4gICAgdGUuYWxpZ25Db2x1bW4oQWxpZ25tZW50LkNFTlRFUiwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSByaWdodEFsaWduQ29sdW1uID0gKHRlOiBUYWJsZUVkaXRvcik6IHZvaWQgPT4ge1xuICAgIHRlLmFsaWduQ29sdW1uKEFsaWdubWVudC5SSUdIVCwgdGhpcy5zZXR0aW5ncy5hc09wdGlvbnMoKSk7XG4gIH07XG59XG5cbmNsYXNzIFRhYmxlRWRpdG9yUGx1Z2luU2V0dGluZ3Mge1xuICBwdWJsaWMgZm9ybWF0VHlwZTogRm9ybWF0VHlwZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnQ29uc3RydWN0aW5nIGEgbmV3IHNldHRpbmdzIG9iamVjdCcpO1xuICAgIHRoaXMuZm9ybWF0VHlwZSA9IEZvcm1hdFR5cGUuTk9STUFMO1xuICB9XG5cbiAgcHVibGljIGFzT3B0aW9ucygpOiBPcHRpb25zIHtcbiAgICByZXR1cm4gb3B0aW9uc1dpdGhEZWZhdWx0cyh7IGZvcm1hdFR5cGU6IHRoaXMuZm9ybWF0VHlwZSB9KTtcbiAgfVxufVxuXG5jbGFzcyBUYWJsZUVkaXRvclNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBUYWJsZUVkaXRvclBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUYWJsZUVkaXRvclBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1RhYmxlIFBsdWdpbiBFZGl0b3IgLSBTZXR0aW5ncycgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdQYWQgY2VsbCB3aWR0aCB1c2luZyBzcGFjZXMnKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdJZiBlbmFibGVkLCB0YWJsZSBjZWxscyB3aWxsIGhhdmUgc3BhY2VzIGFkZGVkIHRvIG1hdGNoIHRoZSB3aXRoIG9mIHRoZSAnICtcbiAgICAgICAgICAnbG9uZ2VzdCBjZWxsIGluIHRoZSBjb2x1bW4uIE9ubHkgdXNlZnVsIHdoZW4gdXNpbmcgYSBtb25vc3BhY2UgZm9udCBkdXJpbmcgZWRpdGluZy4nLFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZm9ybWF0VHlwZSA9PT0gRm9ybWF0VHlwZS5OT1JNQUwpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZm9ybWF0VHlwZSA9IHZhbHVlXG4gICAgICAgICAgICAgID8gRm9ybWF0VHlwZS5OT1JNQUxcbiAgICAgICAgICAgICAgOiBGb3JtYXRUeXBlLldFQUs7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb3JtYXRUeXBlIiwiRGVmYXVsdEFsaWdubWVudCIsIkhlYWRlckFsaWdubWVudCIsIlBvaW50IiwiTWFya2Rvd25WaWV3IiwiVGFibGVFZGl0b3IiLCJBbGlnbm1lbnQiLCJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBQ0Q7QUFDTyxJQUFJLFFBQVEsR0FBRyxXQUFXO0FBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JELFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsTUFBSztBQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxFQUFDO0FBNEJEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMs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RUFBRSxDQUFDLENBQUMsU0FBUztBQUMzQyxhQUFhO0FBQ2IsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksR0FBRztBQUNiLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNsQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDdEMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN0QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDdEMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDckMsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3RDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN2QyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdkMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN4QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUMxQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDekMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQ3pDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDMUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUMzQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNDLEVB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QUFLLFNBQVMsQ0FBQyxJQUFJO0FBQ3JCLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJO0FBQ3JCLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsRUFBRSxLQUFLLFNBQVMsQ0FBQyxLQUFLO0FBQ3RCLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsRUFBRSxLQUFLLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZCLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsRUFBRTtBQUNGLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUN2RCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDM0MsRUFBRSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkMsRUFBRSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDeEMsRUFBRSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEMsRUFBRSxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7QUFDekIsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLEdBQUc7QUFDSCxFQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixFQUFFLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNyQjtBQUNBLEVBQUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCLEVBQUUsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDM0IsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTO0FBQzVELE1BQU0sQ0FBQyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFO0FBQzNELEtBQUssQ0FBQztBQUNOLElBQUksU0FBUyxDQUFDLFVBQVU7QUFDeEIsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLFdBQVc7QUFDaEUsR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQy9DLEVBQUUsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO0FBQ2xDLElBQUksTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ25ELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDN0IsTUFBTSxZQUFZLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTO0FBQ2pFLFFBQVEsY0FBYztBQUN0QixVQUFVLFNBQVMsQ0FBQyxJQUFJO0FBQ3hCLFVBQVUsQ0FBQyxLQUFLLGNBQWMsQ0FBQyxNQUFNO0FBQ3JDLGNBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RGLGNBQWMsT0FBTyxDQUFDLGlCQUFpQjtBQUN2QyxTQUFTO0FBQ1QsT0FBTyxDQUFDO0FBQ1IsTUFBTSxZQUFZLENBQUMsVUFBVTtBQUM3QixNQUFNLGNBQWMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsV0FBVztBQUN4RSxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxPQUFPO0FBQ1AsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUTtBQUM3QixNQUFNLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sSUFBSSxTQUFTO0FBQ3RELFFBQVEsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sQ0FBQztBQUNSLE1BQU0sRUFBRTtBQUNSLE1BQU0sRUFBRTtBQUNSLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLFlBQVksS0FBSyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pFLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDN0IsTUFBTSxZQUFZLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTO0FBQ3hELFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFO0FBQ2pELE9BQU8sQ0FBQztBQUNSLE1BQU0sR0FBRyxDQUFDLFVBQVU7QUFDcEIsTUFBTSxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVc7QUFDdEQsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxPQUFPO0FBQ1QsSUFBSSxLQUFLLGNBQWMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ3pDLElBQUksaUJBQWlCLEVBQUUsWUFBWSxLQUFLLFNBQVM7QUFDakQsR0FBRyxDQUFDO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDMUMsRUFBRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osRUFBRSxLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNqQyxJQUFJLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsTUFBTSxTQUFTO0FBQ2YsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDYixNQUFNLFNBQVM7QUFDZixLQUFLO0FBQ0wsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFHLENBQUM7QUFDYixJQUFJLEtBQUssR0FBRztBQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNiLE1BQU0sTUFBTTtBQUNaLElBQUksS0FBSyxHQUFHO0FBQ1osTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sTUFBTTtBQUNaLElBQUk7QUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDYixLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7QUFDckQsRUFBRSxNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2pCLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNILEVBQUUsUUFBUSxTQUFTO0FBQ25CLEVBQUUsS0FBSyxTQUFTLENBQUMsSUFBSTtBQUNyQixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNwRCxFQUFFLEtBQUssU0FBUyxDQUFDLElBQUk7QUFDckIsSUFBSSxPQUFPLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLEVBQUUsS0FBSyxTQUFTLENBQUMsS0FBSztBQUN0QixJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFFBQVEsSUFBSTtBQUNaLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLEVBQUU7QUFDRixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDdkQsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUN0QyxFQUFFLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN4QyxFQUFFLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0QyxFQUFFLElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtBQUN6QixJQUFJLE9BQU87QUFDWCxNQUFNLEtBQUs7QUFDWCxNQUFNLFVBQVUsRUFBRSxFQUFFO0FBQ3BCLEtBQUssQ0FBQztBQUNOLEdBQUc7QUFDSCxFQUFFLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2xELEVBQUUsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQzlDLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELElBQUksT0FBTztBQUNYLE1BQU0sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztBQUM1QixNQUFNLFVBQVU7QUFDaEIsS0FBSyxDQUFDO0FBQ04sR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0MsRUFBRSxNQUFNLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsRUFBRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7QUFDbEMsSUFBSSxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0RCxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDbEQsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsSUFBSSxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQyxNQUFNLFNBQVM7QUFDZixLQUFLO0FBQ0wsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRztBQUNoQyxRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDdkIsUUFBUSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxDQUFDO0FBQ1IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxVQUFVLEdBQUcsWUFBWSxLQUFLLFNBQVM7QUFDL0MsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlELE1BQU0sVUFBVTtBQUNoQixNQUFNLE1BQU0sT0FBTyxDQUFDLGdCQUFnQjtBQUNwQyxLQUFLO0FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDM0Q7QUFDQSxFQUFFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNsQjtBQUNBLEVBQUUsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRO0FBQ3hCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JDLE1BQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVU7QUFDdkMsUUFBUSxJQUFJLENBQUMsT0FBTztBQUNwQixRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDdkIsUUFBUSxPQUFPLENBQUMsZUFBZSxLQUFLLGVBQWUsQ0FBQyxNQUFNO0FBQzFELGFBQWEsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEYsWUFBWSxPQUFPLENBQUMsZUFBZTtBQUNuQyxRQUFRLE9BQU8sQ0FBQyxnQkFBZ0I7QUFDaEMsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxVQUFVO0FBQ2QsSUFBSSxFQUFFO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO0FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDMUIsTUFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLE9BQU87QUFDUCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxFQUFFO0FBQ1IsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsWUFBWSxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekUsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDMUIsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVTtBQUN6QyxVQUFVLElBQUksQ0FBQyxPQUFPO0FBQ3RCLFVBQVUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN6QixVQUFVLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLFVBQVUsT0FBTyxDQUFDLGdCQUFnQjtBQUNsQyxTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU87QUFDUCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxFQUFFO0FBQ1IsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxPQUFPO0FBQ1QsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzFCLElBQUksVUFBVTtBQUNkLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQzFDLEVBQUUsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3hDLEVBQUUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RDLEVBQUUsSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLElBQUksT0FBTztBQUNYLE1BQU0sS0FBSztBQUNYLE1BQU0sVUFBVSxFQUFFLEVBQUU7QUFDcEIsS0FBSyxDQUFDO0FBQ04sR0FBRztBQUNILEVBQUUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDbEQsRUFBRSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7QUFDeEIsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDOUMsT0FBTyxHQUFHLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsSUFBSSxPQUFPO0FBQ1gsTUFBTSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzVCLE1BQU0sVUFBVTtBQUNoQixLQUFLLENBQUM7QUFDTixHQUFHO0FBQ0gsRUFBRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0M7QUFDQSxFQUFFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNsQjtBQUNBLEVBQUUsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRO0FBQ3hCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJO0FBQ2pDLE1BQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxLQUFLO0FBQ0wsSUFBSSxVQUFVO0FBQ2QsSUFBSSxFQUFFO0FBQ04sR0FBRyxDQUFDLENBQUM7QUFDTDtBQUNBLEVBQUUsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO0FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDMUIsTUFBTSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7QUFDdEMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JGLE9BQU87QUFDUCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxFQUFFO0FBQ1IsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsWUFBWSxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekUsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVE7QUFDMUIsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7QUFDN0IsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLE9BQU87QUFDUCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxFQUFFO0FBQ1IsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxPQUFPO0FBQ1QsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzFCLElBQUksVUFBVTtBQUNkLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDakMsRUFBRSxNQUFNLEVBQUUsUUFBUTtBQUNsQixFQUFFLElBQUksSUFBSSxNQUFNO0FBQ2hCLENBQUMsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDckMsRUFBRSxRQUFRLE9BQU8sQ0FBQyxVQUFVO0FBQzVCLEVBQUUsS0FBSyxVQUFVLENBQUMsTUFBTTtBQUN4QixJQUFJLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4QyxFQUFFLEtBQUssVUFBVSxDQUFDLElBQUk7QUFDdEIsSUFBSSxPQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxFQUFFO0FBQ0YsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGNBQWMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7QUFDaEUsRUFBRSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFO0FBQ3BFLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNILEVBQUUsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pELEVBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNwRyxFQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUYsRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtBQUN6QyxFQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDcEMsRUFBRSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDdEIsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsRUFBRSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDdEIsSUFBSSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxRQUFRO0FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdELE1BQU0sU0FBUyxDQUFDLFVBQVU7QUFDMUIsTUFBTSxTQUFTLENBQUMsV0FBVztBQUMzQixLQUFLLENBQUM7QUFDTixHQUFHO0FBQ0gsT0FBTztBQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtBQUM3QyxFQUFFLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDakUsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsRUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxFQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQzNELEVBQUUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDckMsSUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztBQUN4QixRQUFRLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2hGLFFBQVEsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkUsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQ25ELEVBQUUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDL0IsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzNCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDcEMsVUFBVSxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDbkUsVUFBVSxFQUFFO0FBQ1osT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsU0FBUztBQUNULE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRSxHQUFHO0FBQ0gsRUFBRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFO0FBQ25ELEVBQUUsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO0FBQ2pDLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNILEVBQUUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakMsSUFBSSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkUsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxNQUFNLENBQUM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3pCO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNwQjtBQUNBLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxHQUFHLEdBQUc7QUFDWixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLElBQUksR0FBRztBQUNiLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxNQUFNLENBQUM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ25CO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNwQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNaLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUN2RCxFQUFFLElBQUksT0FBTyxZQUFZLE1BQU0sRUFBRTtBQUNqQyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pFLEdBQUc7QUFDSCxPQUFPLElBQUksT0FBTyxZQUFZLE1BQU0sRUFBRTtBQUN0QyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxHQUFHO0FBQ0gsT0FBTztBQUNQLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0FBQ3hELEVBQUUsS0FBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNsRCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFLLENBQUM7QUFDWixFQUFFLElBQUksR0FBRyxHQUFHO0FBQ1osSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNaLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxHQUFHO0FBQ1osSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdkMsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ2pCLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEdBQUc7QUFDWixJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNuQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDNUIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3RCLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sR0FBRyxTQUFTLEtBQUssQ0FBQztBQUN4QixFQUFFLFdBQVcsR0FBRztBQUNoQixJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNaLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNsQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHO0FBQ1osSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxHQUFHO0FBQ1osSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDO0FBQ3pCLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDeEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNwQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHO0FBQ1osSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDckIsR0FBRztBQUNIO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRztBQUNaLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JCLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxHQUFHO0FBQ1osSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDbEQsRUFBRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlCLEVBQUUsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUMxQixFQUFFLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDL0UsRUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RSxFQUFFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsQyxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDdEQsSUFBSSxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3BELElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFDLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDWixNQUFNLElBQUksTUFBTSxDQUFDO0FBQ2pCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25CLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLFFBQVEsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNyQixPQUFPO0FBQ1AsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUN6QixRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkUsT0FBTztBQUNQLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRixPQUFPO0FBQ1AsV0FBVztBQUNYLFFBQVEsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFRLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxRQUFRLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNyQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakIsVUFBVSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxTQUFTO0FBQ1QsYUFBYTtBQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQixVQUFVLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sT0FBTyxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3BFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNmLE9BQU87QUFDUCxNQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRTtBQUNsRCxRQUFRLE9BQU8sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzFDLE9BQU87QUFDUCxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDdEMsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFdBQVcsQ0FBQztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpQkFBaUIsR0FBRztBQUN0QixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUMxRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtBQUN6QixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUMxRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxFQUFFO0FBQzNCLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQzFELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFVBQVUsR0FBRztBQUNmLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ25ELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDekQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDZixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNoRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUN4QixJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNuRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDbEIsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDbkQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUN4QyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUNyRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDakIsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDakQsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO0FBQ3RDLEVBQUUsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTO0FBQzNFLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNkLE1BQU0sVUFBVSxDQUFDO0FBQ2pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQzVCLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLEVBQUUsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDNUMsR0FBRztBQUNILEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUN0QixFQUFFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDM0IsSUFBSSxlQUFlLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDaEMsSUFBSSxVQUFVLFNBQVMsVUFBVSxDQUFDLE1BQU07QUFDeEMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ3hCLElBQUksZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSTtBQUM1QyxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsTUFBTTtBQUM3QyxJQUFJLFdBQVcsUUFBUSxLQUFLO0FBQzVCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRTtBQUN2RCxJQUFJLFNBQVMsUUFBUSxJQUFJO0FBQ3pCLElBQUksU0FBUyxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzlCLElBQUksV0FBVyxNQUFNLElBQUksR0FBRyxFQUFFO0FBQzlCLElBQUksZUFBZSxFQUFFLEtBQUs7QUFDMUIsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQixDQUFDLGVBQWUsRUFBRTtBQUNqRCxFQUFFLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDM0QsRUFBRSxJQUFJLEtBQUssRUFBRTtBQUNiLElBQUksTUFBTSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RSxJQUFJLElBQUksb0JBQW9CLEtBQUssU0FBUyxFQUFFO0FBQzVDLE1BQU0sT0FBTyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxLQUFLO0FBQ0wsU0FBUztBQUNULE1BQU0sT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEUsS0FBSztBQUNMLEdBQUc7QUFDSCxPQUFPO0FBQ1AsSUFBSSxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELElBQUksTUFBTSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RSxJQUFJLElBQUksV0FBVyxLQUFLLFNBQVMsSUFBSSxvQkFBb0IsS0FBSyxTQUFTLEVBQUU7QUFDekUsTUFBTSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRztBQUNwQyxRQUFRLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3RELFFBQVEsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE1BQU07QUFDM0MsT0FBTyxDQUFDO0FBQ1IsTUFBTSxPQUFPLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2xFLEtBQUs7QUFDTCxTQUFTO0FBQ1QsTUFBTSxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoRSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxXQUFXLENBQUM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRTtBQUMxQjtBQUNBLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDbEM7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzVCO0FBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUM5QjtBQUNBLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0IsR0FBRztBQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFO0FBQzNCLElBQUksTUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3JELElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckQsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFO0FBQ3RCLElBQUksTUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3JELElBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsRCxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFJLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDM0IsSUFBSSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ3pCO0FBQ0EsSUFBSTtBQUNKLE1BQU0sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6RSxRQUFRLE9BQU8sU0FBUyxDQUFDO0FBQ3pCLE9BQU87QUFDUCxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsS0FBSztBQUNMO0FBQ0EsSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDakQsTUFBTSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNyRSxRQUFRLE1BQU07QUFDZCxPQUFPO0FBQ1AsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNyQixLQUFLO0FBQ0w7QUFDQSxJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUN2RCxNQUFNLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JFLFFBQVEsTUFBTTtBQUNkLE9BQU87QUFDUCxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ25CLEtBQUs7QUFDTCxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSztBQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3ZELEtBQUssQ0FBQztBQUNOLElBQUksTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxJQUFJLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELElBQUksT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDNUIsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQzVCLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsU0FBUyxFQUFFO0FBQ2pFLElBQUksSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQ2hDO0FBQ0E7QUFDQSxNQUFNLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDN0IsUUFBUSxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekQsUUFBUSxPQUFPO0FBQ2YsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDdkMsSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUMzQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDdkMsSUFBSSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQzdCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsU0FBUztBQUNULE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDakUsTUFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMzRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BHO0FBQ0EsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN0RSxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQ2pFO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3REO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RDtBQUNBLE1BQU0sTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzRSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU07QUFDdEMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hHLFFBQVEsSUFBSSxNQUFNLENBQUM7QUFDbkIsUUFBUSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQ3BELFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELFVBQVUsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxTQUFTO0FBQ1QsYUFBYTtBQUNiLFVBQVUsTUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEYsVUFBVSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1RCxVQUFVLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUMsVUFBVSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM5QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtBQUNsQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUNqRSxNQUFNLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQjtBQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxNQUFNLElBQUksU0FBUyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEMsTUFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtBQUNuRixRQUFRLE9BQU8sR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RixPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNwRztBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUNqRSxNQUFNLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQjtBQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxNQUFNLElBQUksU0FBUyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEc7QUFDQSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU07QUFDdEMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hHLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7QUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDakUsTUFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMzRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTztBQUNQLE1BQU0sTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQ2xDO0FBQ0EsTUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7QUFDM0IsUUFBUSxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ25EO0FBQ0EsUUFBUSxNQUFNLElBQUk7QUFDbEIsWUFBWSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNqRSxZQUFZLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEUsWUFBWSxDQUFDLENBQUM7QUFDZCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTTtBQUNsQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM5RixTQUFTLENBQUM7QUFDVixPQUFPO0FBQ1AsTUFBTSxJQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDOUIsUUFBUSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZELFFBQVEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdEQsYUFBYSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDakUsVUFBVSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVM7QUFDdkMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM1RSxXQUFXLENBQUM7QUFDWixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sTUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BEO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BHO0FBQ0EsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRyxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hFLFNBQVM7QUFDVCxhQUFhO0FBQ2IsVUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEUsU0FBUztBQUNULE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLEtBQUssRUFBRTtBQUNqQixRQUFRLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ2hDLE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRTtBQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUNqRTtBQUNBLE1BQU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUYsWUFBWSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDL0UsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxFQUFFO0FBQ3hDLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDaEMsT0FBTztBQUNQLE1BQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDM0QsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU87QUFDUCxNQUFNLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNsQyxNQUFNLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEM7QUFDQSxNQUFNLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDOUI7QUFDQSxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ2pDLFVBQVUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDckYsWUFBWSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxXQUFXO0FBQ1gsU0FBUztBQUNULGFBQWE7QUFDYixVQUFVLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDcEQsVUFBVSxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRixVQUFVLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkYsU0FBUztBQUNULE9BQU87QUFDUCxXQUFXO0FBQ1g7QUFDQSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQzVELFVBQVUsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLFVBQVUsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyRixTQUFTO0FBQ1Q7QUFDQSxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0QsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRjtBQUNBLE1BQU0sTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNqRCxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtBQUNsRTtBQUNBLFFBQVEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDdEMsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxPQUFPO0FBQ1AsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9FLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDL0IsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUM3QjtBQUNBLFVBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDaEMsVUFBVSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDekMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDakcsWUFBWSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFdBQVc7QUFDWCxlQUFlO0FBQ2YsWUFBWSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztBQUM1QyxXQUFXO0FBQ1gsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDckMsT0FBTztBQUNQLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQ2pFLE1BQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDM0QsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU87QUFDUCxNQUFNLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNsQztBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUM5QixRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDakMsVUFBVSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdELFNBQVM7QUFDVCxPQUFPO0FBQ1AsV0FBVyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO0FBQ25DLFFBQVEsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkYsT0FBTztBQUNQLFdBQVc7QUFDWCxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDakMsVUFBVSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdELFNBQVM7QUFDVCxhQUFhO0FBQ2IsVUFBVSxRQUFRLEdBQUcsSUFBSSxLQUFLO0FBQzlCLFlBQVksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNyRCxZQUFZLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQztBQUNoRCxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQzNCLFdBQVcsQ0FBQztBQUNaLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTSxNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEQ7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEc7QUFDQSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU07QUFDdEMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hHLFFBQVEsSUFBSSxLQUFLLEVBQUU7QUFDbkIsVUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEUsU0FBUztBQUNULGFBQWE7QUFDYixVQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4RSxTQUFTO0FBQ1QsT0FBTyxDQUFDLENBQUM7QUFDVCxNQUFNLElBQUksS0FBSyxFQUFFO0FBQ2pCLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDaEMsT0FBTztBQUNQLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQ2pFO0FBQ0EsTUFBTSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM1RixZQUFZLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUMvRSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLEVBQUU7QUFDeEMsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNoQyxPQUFPO0FBQ1AsTUFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMzRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTztBQUNQLE1BQU0sTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQ2xDLE1BQU0sSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNwQztBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUM5QixRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE9BQU87QUFDUCxXQUFXO0FBQ1gsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtBQUMvQixRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUM1QixVQUFVLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkUsU0FBUztBQUNULGFBQWEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDeEYsVUFBVSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxTQUFTO0FBQ1QsT0FBTztBQUNQLFdBQVc7QUFDWCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDbEQsUUFBUSxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRixRQUFRLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckYsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRjtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsT0FBTyxDQUFDLENBQUM7QUFDVCxNQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtBQUMvQixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzdCO0FBQ0EsVUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUNoQyxVQUFVLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN6QyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNqRyxZQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakUsV0FBVztBQUNYLGVBQWU7QUFDZixZQUFZLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO0FBQzVDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUNyQyxPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDakUsTUFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMzRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO0FBQzdCLFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsT0FBTztBQUNQLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkM7QUFDQSxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RixNQUFNLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFGO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRjtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsT0FBTyxDQUFDLENBQUM7QUFDVCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzlCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQ2pFLE1BQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDM0QsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNwQyxNQUFNLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN4QixNQUFNLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDOUIsUUFBUSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDcEQsVUFBVSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RjtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLEtBQUssRUFBRTtBQUNuQixVQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4RSxTQUFTO0FBQ1QsYUFBYTtBQUNiLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hFLFNBQVM7QUFDVCxPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDOUIsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDakUsTUFBTSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMzRCxRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUM1QixRQUFRLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0YsUUFBUSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RjtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsT0FBTyxDQUFDLENBQUM7QUFDVCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzlCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQ2pFLE1BQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDM0QsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtBQUM5QixRQUFRLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE9BQU87QUFDUCxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDL0IsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEYsTUFBTSxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RjtBQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0Y7QUFDQSxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU07QUFDdEMsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hHLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM5QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRTtBQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUNqRSxNQUFNLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQjtBQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxNQUFNLElBQUksU0FBUyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDOUIsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEMsTUFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDeEIsTUFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtBQUNuRixRQUFRLE9BQU8sR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLFFBQVEsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQzVELFVBQVUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzVGO0FBQ0EsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNO0FBQ3RDLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRyxRQUFRLElBQUksS0FBSyxFQUFFO0FBQ25CLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hFLFNBQVM7QUFDVCxhQUFhO0FBQ2IsVUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEUsU0FBUztBQUNULE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM5QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztBQUNqRSxNQUFNLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQjtBQUNBLE1BQU0sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxNQUFNLElBQUksU0FBUyxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEMsTUFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtBQUNuRixRQUFRLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkcsUUFBUSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdELFFBQVEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsT0FBTztBQUNQO0FBQ0EsTUFBTSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RjtBQUNBLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUN0QyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEcsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsT0FBTyxDQUFDLENBQUM7QUFDVCxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQzlCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUNwQyxNQUFNLE1BQU0sRUFBRSxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNqRSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNyRCxNQUFNLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMvQixNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbEQ7QUFDQSxNQUFNLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDL0MsUUFBUSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JFLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixVQUFVLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUN0QyxZQUFZLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDM0IsV0FBVztBQUNYLFNBQVM7QUFDVCxhQUFhLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUN6QztBQUNBLFVBQVUsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqQyxVQUFVLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSztBQUNqQyxZQUFZLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDbEMsWUFBWSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzdELFdBQVcsQ0FBQztBQUNaLFVBQVUsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxVQUFVLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzdELFVBQVUsTUFBTSxPQUFPLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM5QztBQUNBLFVBQVUsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFVBQVUsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRCxVQUFVLElBQUksT0FBTyxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUMxRSxZQUFZLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekQsV0FBVztBQUNYLFVBQVUsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEUsVUFBVSxJQUFJLE9BQU8sRUFBRTtBQUN2QixZQUFZLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUztBQUN6QyxjQUFjLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDNUUsYUFBYSxDQUFDO0FBQ2QsV0FBVztBQUNYO0FBQ0EsVUFBVSxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JELFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pGO0FBQ0EsVUFBVSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDdEQsVUFBVSxJQUFJLE9BQU8sRUFBRTtBQUN2QixZQUFZLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEUsV0FBVztBQUNYLGVBQWUsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRTtBQUNyQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsV0FBVztBQUNYO0FBQ0EsVUFBVSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLFVBQVUsUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMvQjtBQUNBLFVBQVUsT0FBTyxJQUFJLElBQUksQ0FBQztBQUMxQixVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDdEIsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUNsQztBQUNBLFFBQVEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQy9CLFFBQVEsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLO0FBQy9CLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNoQyxVQUFVLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0QsU0FBUyxDQUFDO0FBQ1YsUUFBUSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELFFBQVEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDM0Q7QUFDQSxRQUFRLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUM3QixRQUFRLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQsUUFBUSxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtBQUM3RCxVQUFVLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsU0FBUztBQUNULFFBQVEsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEUsUUFBUSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVM7QUFDckMsVUFBVSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ3hFLFNBQVMsQ0FBQztBQUNWO0FBQ0EsUUFBUSxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25ELFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9FLFFBQVEsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsRSxPQUFPO0FBQ1AsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN0QixhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5Qix3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUM1Qyx1QkFBdUIsR0FBRyxlQUFlLENBQUM7QUFDMUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixrQkFBa0IsR0FBRyxVQUFVLENBQUM7QUFDaEMscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztBQUNsQyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDeEMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzFCLG9CQUFvQixHQUFHLFlBQVksQ0FBQztBQUNwQyxvQkFBb0IsR0FBRyxZQUFZLENBQUM7QUFDcEMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO0FBQ2hDLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUN4Qix1QkFBdUIsR0FBRyxlQUFlLENBQUM7QUFDMUMsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUM7QUFDaEQsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFDMUIsbUJBQW1CLEdBQUcsV0FBVyxDQUFDOzs7O0FDbHpGbEMsSUFBTSwwQkFBMEIsR0FBRztJQUNqQyxTQUFTLEVBQUUsSUFBSTtJQUNmLFNBQVMsRUFBRSxJQUFJLEdBQUcsRUFBVTtJQUM1QixXQUFXLEVBQUUsSUFBSSxHQUFHLEVBQVU7SUFDOUIsZUFBZSxFQUFFLEtBQUs7Q0FDdkIsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHO0lBQ3RCLGVBQWUsRUFBRSxJQUFJLEdBQUcsRUFBVTtJQUNsQyxVQUFVLEVBQUVBLG9CQUFVLENBQUMsTUFBTTtJQUM3QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGdCQUFnQixFQUFFQywwQkFBZ0IsQ0FBQyxJQUFJO0lBQ3ZDLGVBQWUsRUFBRUMseUJBQWUsQ0FBQyxNQUFNO0lBQ3ZDLFdBQVcsRUFBRSxLQUFLO0NBQ25CLENBQUM7QUFFSyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsT0FBeUIsSUFBYyx1Q0FDcEUsZUFBZSxHQUNmLE9BQU8sS0FDVixnQkFBZ0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCO2dDQUNqQywwQkFBMEIsR0FBSyxPQUFPLENBQUMsZ0JBQWdCLElBQzVELDBCQUEwQixPQUM5QixDQUFDO0FBRUUsSUFBTSxjQUFjLEdBQVksbUJBQW1CLENBQUMsRUFBRSxDQUFDOztBQzVCOUQ7SUFLRSw0QkFBWSxHQUFxQztRQUFqRCxpQkFPQztRQUVNLHNCQUFpQixHQUFHO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM1QyxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pDLE9BQU8sSUFBSUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlDLENBQUM7UUFFSyxzQkFBaUIsR0FBRyxVQUFDLEdBQVU7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzFELENBQUM7UUFFSyxzQkFBaUIsR0FBRyxVQUFDLEtBQVk7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDakQsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQzlDLENBQUM7U0FDSCxDQUFDO1FBRUssZUFBVSxHQUFHO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDL0IsQ0FBQztRQUVLLHFCQUFnQixHQUFHLFVBQUMsR0FBVztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUFzQyxHQUFLLENBQUMsQ0FBQzs7WUFFekQsT0FBTyxJQUFJLENBQUM7U0FDYixDQUFDO1FBRUssWUFBTyxHQUFHLFVBQUMsR0FBVztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUE4QixHQUFLLENBQUMsQ0FBQztZQUNqRCxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDLENBQUM7UUFFSyxlQUFVLEdBQUcsVUFBQyxHQUFXLEVBQUUsSUFBWTtZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxHQUFLLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsSUFBTSxDQUFDLENBQUM7WUFFakMsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM3RDtTQUNGLENBQUM7UUFFSyxlQUFVLEdBQUcsVUFBQyxHQUFXO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLEdBQUssQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixFQUFFLEVBQ0YsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDcEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQ3pCLENBQUM7U0FDSCxDQUFDO1FBRUssaUJBQVksR0FBRyxVQUNwQixRQUFnQixFQUNoQixNQUFjLEVBQ2QsS0FBZTtZQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsUUFBUSxlQUFVLE1BQVEsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBR25CLElBQU0sVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBTSxjQUFjLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsSUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBRS9DLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUN0QixLQUFLLEVBQ0wsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDekIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUMzQyxDQUFDO1NBQ0gsQ0FBQztRQUVLLGFBQVEsR0FBRyxVQUFDLElBQWM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNwQixJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQztTQUNKLENBQUM7UUF6RkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksWUFBWSxJQUFJLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNuQjtLQUNGO0lBb0ZILHlCQUFDO0FBQUQsQ0FBQzs7O0lDekY4QyxxQ0FBTTtJQUFyRDtRQUFBLHFFQThKQztRQTdDa0Isb0JBQWMsR0FBRyxVQUNoQyxFQUFzQztZQUV0QyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDakQsSUFBSSxVQUFVLENBQUMsSUFBSSxZQUFZQyxxQkFBWSxFQUFFO2dCQUMzQyxJQUFNLEdBQUcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEQsSUFBTSxFQUFFLEdBQUcsSUFBSUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFaEMsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUN0QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ1I7YUFDRjtTQUNGLENBQUM7UUFFZSxjQUFRLEdBQUcsVUFBQyxFQUFlO1lBQzFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDLENBQUM7UUFFZSxrQkFBWSxHQUFHLFVBQUMsRUFBZTtZQUM5QyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM1QyxDQUFDO1FBRWUsYUFBTyxHQUFHLFVBQUMsRUFBZTtZQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN2QyxDQUFDO1FBRWUsaUJBQVcsR0FBRyxVQUFDLEVBQWU7WUFDN0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDdEMsQ0FBQztRQUVlLGtCQUFZLEdBQUcsVUFBQyxFQUFlO1lBQzlDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzVDLENBQUM7UUFFZSxxQkFBZSxHQUFHLFVBQUMsRUFBZTtZQUNqRCxFQUFFLENBQUMsV0FBVyxDQUFDQyxtQkFBUyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDM0QsQ0FBQztRQUVlLHVCQUFpQixHQUFHLFVBQUMsRUFBZTtZQUNuRCxFQUFFLENBQUMsV0FBVyxDQUFDQSxtQkFBUyxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDN0QsQ0FBQztRQUVlLHNCQUFnQixHQUFHLFVBQUMsRUFBZTtZQUNsRCxFQUFFLENBQUMsV0FBVyxDQUFDQSxtQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDNUQsQ0FBQzs7S0FDSDtJQTNKUSxrQ0FBTSxHQUFiLGVBQXdCO0lBRVgsa0NBQU0sR0FBbkI7Ozs7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2dCQUVwRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2QsRUFBRSxFQUFFLGNBQWM7b0JBQ2xCLElBQUksRUFBRSw0QkFBNEI7b0JBQ2xDLFFBQVEsRUFBRTt3QkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdkM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2QsRUFBRSxFQUFFLFdBQVc7b0JBQ2YsSUFBSSxFQUFFLHVCQUF1QjtvQkFDN0IsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0QkFDbEIsR0FBRyxFQUFFLEtBQUs7eUJBQ1g7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxFQUFFLEVBQUUsZUFBZTtvQkFDbkIsSUFBSSxFQUFFLDJCQUEyQjtvQkFDakMsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7NEJBQzNCLEdBQUcsRUFBRSxLQUFLO3lCQUNYO3FCQUNGO29CQUNELFFBQVEsRUFBRTt3QkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2QsRUFBRSxFQUFFLFVBQVU7b0JBQ2QsSUFBSSxFQUFFLHNCQUFzQjtvQkFDNUIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0QkFDbEIsR0FBRyxFQUFFLE9BQU87eUJBQ2I7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNuQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxFQUFFLEVBQUUsZUFBZTtvQkFDbkIsSUFBSSxFQUFFLDhCQUE4QjtvQkFDcEMsUUFBUSxFQUFFO3dCQUNSLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUN4QztpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxFQUFFLEVBQUUsbUJBQW1CO29CQUN2QixJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixRQUFRLEVBQUU7d0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzNDO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNkLEVBQUUsRUFBRSxxQkFBcUI7b0JBQ3pCLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLFFBQVEsRUFBRTt3QkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUM3QztpQkFDRixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxFQUFFLEVBQUUsb0JBQW9CO29CQUN4QixJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixRQUFRLEVBQUU7d0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDNUM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7S0FDaEU7SUFFTSxvQ0FBUSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQ3ZEO0lBRWEsd0NBQVksR0FBMUI7Ozs7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHlCQUF5QixFQUFFLENBQUM7Z0JBQ2hELENBQUM7Ozs7b0NBQ3dCLHFCQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQTs7Z0NBQXRDLGNBQWMsR0FBRyxTQUFxQjtnQ0FDNUMsSUFBSSxjQUFjLEVBQUU7b0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQ0FDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztpQ0FDdEQ7cUNBQU07b0NBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO29DQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQ0FDOUI7Ozs7cUJBQ0YsR0FBRyxDQUFDOzs7O0tBQ047SUErQ0gsd0JBQUM7QUFBRCxDQTlKQSxDQUErQ0MsZUFBTSxHQThKcEQ7QUFFRDtJQUdFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUdQLG9CQUFVLENBQUMsTUFBTSxDQUFDO0tBQ3JDO0lBRU0sNkNBQVMsR0FBaEI7UUFDRSxPQUFPLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLElBQUE7QUFFRDtJQUFxQywwQ0FBZ0I7SUFHbkQsZ0NBQVksR0FBUSxFQUFFLE1BQXlCO1FBQS9DLFlBQ0Usa0JBQU0sR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUVuQjtRQURDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztLQUN0QjtJQUVNLHdDQUFPLEdBQWQ7UUFBQSxpQkF1QkM7UUF0QlMsSUFBQSxXQUFXLEdBQUssSUFBSSxZQUFULENBQVU7UUFDN0IsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBCLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJUSxnQkFBTyxDQUFDLFdBQVcsQ0FBQzthQUNyQixPQUFPLENBQUMsNkJBQTZCLENBQUM7YUFDdEMsT0FBTyxDQUNOLDBFQUEwRTtZQUN4RSxxRkFBcUYsQ0FDeEY7YUFDQSxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2hCLE9BQUEsTUFBTTtpQkFDSCxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLUixvQkFBVSxDQUFDLE1BQU0sQ0FBQztpQkFDL0QsUUFBUSxDQUFDLFVBQUMsS0FBSztnQkFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSztzQkFDbkNBLG9CQUFVLENBQUMsTUFBTTtzQkFDakJBLG9CQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEIsQ0FBQztTQUFBLENBQ0wsQ0FBQztLQUNMO0lBQ0gsNkJBQUM7QUFBRCxDQWhDQSxDQUFxQ1MseUJBQWdCOzs7OyJ9
