class Item {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.items = [];
    }
    insert(value, priority){
        let item = new Item(value, priority)
        let positionFound = false;
        
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > item.priority) {
                this.items.splice(i, 0, item);
                positionFound = true;
                break;
            }
        }
     
        if (!positionFound) {
            this.items.push(item);
        }

    }

    isEmpty(){
        return this.items.length == 0;
    }

    delete(){
        if (this.isEmpty())
            return "Underflow";
            return this.items.shift();
    }
    print(){
        let queue = "";
        for (var i = 0; i < this.items.length; i++)
            queue += this.items[i].element + " ";
        return queue; 
    }
}

