class Queue {
    constructor (){
        this.items=[]
    }
    enqueue(val){
        this.items.push(val)
    }
    dequeue(){
        if(this.items.length==0){
            return "this queue is empty"
        }
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length==0
    }
    peek(){
        if(this.isEmpty()){
            return "the stack is empty"
        }
        return this.items[0]
    }
    print(){
        console.log(this.items)
    }
}

const q=new Queue()
console.log(q.isEmpty())
q.enqueue(12)
q.enqueue(13)
q.enqueue(14)
q.enqueue(15)
// q.dequeue()
console.log(q.peek())
q.print()