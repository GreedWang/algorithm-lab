"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuickSortData = (function () {
    function QuickSortData(N, randomBound) {
        this.numbers = new Array(N);
        this.fixedPivots = new Array(N);
        for (var i = 0; i < N; i++) {
            this.numbers[i] = Math.floor(Math.random() * randomBound) + 1;
            this.fixedPivots[i] = false;
        }
        this.numbers.sort();
        var swapTime = Math.floor(0.01 * N);
        for (var i = 0; i < swapTime; i++) {
            var a = Math.floor(Math.random() * N);
            var b = Math.floor(Math.random() * N);
            this.swap(a, b);
        }
    }
    QuickSortData.prototype.N = function () {
        return this.numbers.length;
    };
    QuickSortData.prototype.get = function (index) {
        if (index < 0 || index >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        return this.numbers[index];
    };
    QuickSortData.prototype.swap = function (i, j) {
        if (i < 0 || i >= this.numbers.length || j < 0 || j >= this.numbers.length) {
            throw ReferenceError("Invalid index to access Sort Data.");
        }
        var t = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = t;
    };
    return QuickSortData;
}());
exports.QuickSortData = QuickSortData;
//# sourceMappingURL=QuickSortData.js.map