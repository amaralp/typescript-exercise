var Item = /** @class */ (function () {
    function Item(value, priority) {
        this.value = value;
        this.priority = priority;
    }
    return Item;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = [];
    }
    PriorityQueue.prototype.insert = function (value, priority) {
        var item = new Item(value, priority);
        var positionFound = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > item.priority) {
                this.items.splice(i, 0, item);
                positionFound = true;
                break;
            }
        }
        if (positionFound === false) {
            this.items.push(item);
        }
    };
    PriorityQueue.prototype["delete"] = function () {
        if (!this.isEmpty())
            return this.items.pop();
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    PriorityQueue.prototype.print = function () {
        var queue = "";
        for (var i = 0; i < this.items.length; i++)
            queue += this.items[i].value + ", ";
        return queue;
    };
    return PriorityQueue;
}());
module.exports = PriorityQueue;
