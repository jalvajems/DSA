// class stack {
//     constructor() {
//         this.queue=[]

//     }
//     isEmpty(){
//         return this.queue.length===0
//     }
//     push(val){
//         this.queue.push(val)
//         for(let i=0;i<this.queue.length-1;i++){
//             this.queue.push(this.queue.shift())
//         }
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("the stack is empty!!!")
//         }
//         return this.queue.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("the stack is empty")
//         }
//         return this.queue[0]
//     }
//     print(){
//         console.log(this.queue.join("=>"))
//     }
// }

class stack{
    constructor (){
        this.queue=[]
    }
    push(val){
        this.queue.push(val)
        for(let i=0;i<this.queue.length-1;i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    print(){
        console.log(this.queue.join(" ") );
        
    }
}
const sq=new stack()

console.log(sq.isEmpty())
sq.push(2)
sq.push(43)
sq.push(44)
sq.push(45)
sq.push(46)
console.log(sq.pop());
console.log(sq.pop());
console.log(sq.pop());
// console.log(sq.peek());

sq.print()
console.log(sq.isEmpty())