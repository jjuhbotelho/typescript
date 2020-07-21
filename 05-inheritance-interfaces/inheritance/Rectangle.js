"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _width, _length) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._length = _length;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this.length;
        },
        set: function (value) {
            this.length = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", width=" + this._width + ", length=" + this._length);
    };
    Rectangle.prototype.calculateArea = function () {
        return this._width * this._length;
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
