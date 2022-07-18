class Item {
    value: string;
    priority: number;

    constructor(value: string, priority: number){
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue {
    //items: Array<Item>;
    items: Item[];
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

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    print():string {
        let queue = "";
        for (let i = 0; i < this.items.length; i++)
            queue += this.items[i].value + ", ";
        return queue; 
    }
}

module.exports = PriorityQueue