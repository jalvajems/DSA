// class Queue{
//     constructor (){
//         this.item={}
//         this.front=0
//         this.rear=0
//     }
//     isEmpty(){
//         return this.rear-this.front===0
//     }
//     size(){
//         return this.rear-this.front
//     }
//     enqueue(val){
//         this.item[this.rear]=val
//         this.rear++

//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }
//         let item =this.item[this.front]
//         delete this.item[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "the queue is empty"
//         }
//         return this.item[this.front]
//     }
//     print(){
//         console.log(this.item)
//     }
// }
class queue{
    constructor(){
        this.q={}
        this.rear=0
        this.front=0
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    enqueue(val){
        this.q[this.rear]=val;
        this.rear++
    }
    dequeue(){
        let item=this.q[this.front]
        delete this.q[this.front]
        return item
    }
    peek(){
        return this.q[this.front]
    }
}
let q=new Queue()
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
console.log(q.dequeue())
console.log(q.peek())
q.print()
console.log(q.isEmpty())