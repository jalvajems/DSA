// class QusingStack{
//     constructor(){
//         this.s1=[]
//         this.s2=[]
//         }
//         enqueue(val){
//             this.s1.push(val)
//         }
//         dequeue(){
//             if(this.isEmpty()){
//                 return "the queue is empty"
//             }
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop())
//             }
//             return this.s2.pop()
//         }
//         peek(){
//             if(this.isEmpty()){
//                 return "the queue is empty"
//             }
//             while(this.s1.length>0){
//                 this.s2.push(this.s1.pop())
//             }
//             return this.s2[this.s2.length-1]
//         }
//         print(){
//             const combined=[...this.s2].reverse().concat(this.s1)
//             console.log(combined.join(" "));
            
//         }
//         isEmpty(){
//             return this.s1.length===1
//         }
//     }

class queue{
    constructor(){
        this.s1=[]
        this.s2=[]
    }
    enqueue(val){
        this.s1.push()
    }
    dequeue(){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop())
        }
        let pop=this.s2.pop()
        return pop
    }
    peek(){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop())
        }
        return this.s2[this.s2.length-1]
    }
    print(){
        let combined=[...this.s2].reverse().concat(this.s1)
        console.log(combined.join(" "));
        
    }
}
    let qs=new QusingStack()
console.log(qs.isEmpty())
    qs.enqueue(23)
    qs.enqueue(24)
    qs.enqueue(25)
    console.log(qs.dequeue());
    console.log(qs.peek());
    
    qs.print()