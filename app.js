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
     
        if (positionFound === false) {
            this.items.push(item);
        }

    }

    delete(){
        if (!this.isEmpty())
            return this.items.pop();
    }

    isEmpty(){
        return this.items.length == 0;
    }

    print(){
        let queue = "";
        for (let i = 0; i < this.items.length; i++)
            queue += this.items[i].value + ", ";
        return queue; 
    }
}

// ------------------- queue 1 -----------------------
console.log("------------------- queue 1 -----------------------")
let priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());

priorityQueue.insert("one", 1);
priorityQueue.insert("three", 3);
priorityQueue.insert("four", 4);
priorityQueue.insert("six", 6);
priorityQueue.insert("two", 2);
priorityQueue.insert("five", 5);
priorityQueue.insert("seventy", 70);
priorityQueue.insert("one-hundred", 100);
priorityQueue.insert("zero", 0);

console.log(priorityQueue.print());

priorityQueue.delete();
console.log(priorityQueue.print());

priorityQueue.delete();
console.log(priorityQueue.print());

priorityQueue.delete();
console.log(priorityQueue.print());

priorityQueue.delete();
console.log(priorityQueue.print());

priorityQueue.insert("three2", 3);
console.log(priorityQueue.print());

// ------------------- queue 2 -----------------------
console.log("------------------- queue 2 -----------------------")
let priorityQueue2 = new PriorityQueue();

console.log(priorityQueue2.isEmpty());

// adding elements to the queue
priorityQueue2.insert("one", 1);
priorityQueue2.insert("one-hundred", 100);
priorityQueue2.insert("zero", 0);

console.log(priorityQueue2.print());

priorityQueue2.delete();
priorityQueue2.delete();
priorityQueue2.delete();
priorityQueue2.delete();
console.log(priorityQueue2.print());

priorityQueue2.insert("three", 3);
console.log(priorityQueue2.print());
