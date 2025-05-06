// class circularQ{
//     constructor (capacity){
//         this.items=new Array(capacity)
//         this.capacity=capacity
//         this.front=-1
//         this.rear=-1
//         this.currentLength=0

//     }
//     isFull(){
//         return this.currentLength===this.capacity
//     }
//     isEmpty(){
//         return this.currentLength===0
//     }
//     enqueue(val){
//         if(!this.isFull()){
//             this.rear=(this.rear+1)%this.capacity
//             this.items[this.rear]=val
//             this.currentLength++
//             if(this.front===-1){
//                 this.front=this.rear
//             }
//         }

//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "the queue is empty!!!"
//         }
//         let item=this.items[this.front]
//         this.items[this.front]=null
//         this.front=(this.front+1)%this.capacity
//         this.currentLength--
//         return item
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "the queue is empty"
//         }
//         return this.items[this.front]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log( "the queue is empty")
//         }
//         let i=0
//         let res=""
//         for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
//             res+=this.items[i]+" "
//         }
//         res+=this.items[i]
//         console.log(res)
//     }

// }

class cqueue{
    constructor(cap){
        this.q=new Array(cap)
        this.cap=cap
        this.currlength=0
        this.rear=-1
        this.front=-1
    }
    enqueue(val){
        this.rear=(this.rear+1)%this.cap
        this.q[this.rear]=val
        this.currlength++
        if(this.front===-1){
            this.front=this.rear
        }
    }
    dequeue(){
        let del=this.q[this.front]
        this.front=(this.front+1)%this.cap
        this.currlength--
        return del
    }
    peek(){
        return this.q[this.front]
    }
    print(){
        let res=""
        for(let i=this.front;i!==this.rear;i=(i+1)%this.cap){
            res+=this.q[i]+"  "
        }
        res+=this.q[i]
        console.log(res);
        
    }
}

let cq=new circularQ(6)
console.log(cq.isEmpty())
cq.enqueue(12)
cq.enqueue(13)
cq.enqueue(14)
cq.enqueue(15)
cq.enqueue(16)
console.log(cq.dequeue())
console.log(cq.peek())
cq.print()
console.log(cq.isEmpty())
