// class stack{
//     constructor(){
//         this.q1=[]
//         this.q2=[]
//     }
//     push(val){
//         this.q1.push(val)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "the stack is full"
//             }
//             while(this.q1.length>1){
//                 this.q2.push(this.q1.shift())
//             }
//             let poped=this.q1.shift()
//             this.q=this.q1
//             this.q1=this.q2
//             this.q2=this.q

//             return poped
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "the stack is empty"
//         }
//         while(this.q1.length>1){
//             this.q2.push(this.q1.shift())
//         }
//         let top=this.q1.shift()
//         this.q2.push(top)
//         this.q=this.q1
//         this.q1=this.q2
//         this.q2=this.q
//         return top
//     }
//     isEmpty(){
//         return this.q1.length===0
//     }
//     print(){
//         console.log([...this.q1].reverse().join(" "));
        
//     }
// }
class stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    push(val){
        this.q1.push(val)
    }
    pop(){
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        let pop=this.q1.shift()
        this.q=this.q1
        this.q1=this.q2
        this.q2=this.q
        return pop
    }
    peek(){
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        let top=this.q1.shift()
        this.q2.push(top)
        this.q=this.q1
        this.q1=this.q2
        this.q2=this.q
        return top
    }
    print(){
        console.log([...this.q1].reverse().join(" =>"));
        
    }
}
const sdq=new stack()

sdq.push(12)
sdq.push(13)
sdq.push(14)
sdq.push(15)
sdq.pop()
console.log(sdq.peek())
sdq.print()