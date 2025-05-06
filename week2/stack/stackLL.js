// class Node{
//     constructor (data){
//         this.data=data,
//         this.next=null
//     }
// }

// class stack{
//     constructor(){
//         this.head=null
//     }
//     isEmpty(){
//         return this.head===null
//     }
//     push(data){
//         const node=new Node(data)
//         node.next =this.head
//         this.head=node
//     }
//     pop(){
//         if(this.isEmpty){
//             console.log("this stack is empty!!!")
//         }
//         let temp=this.head
//         this.head=this.head.next
//         temp=null
//     }
//     peak(){
//         if(this.isEmpty()){
//             console.log("the stack is empty!!!")
//         }
//         return this.head.data
//     }
//     print(){
//         let curr=this.head
//         let res=""
//         while (curr) {
//             res+=curr.data+","
//             curr=curr.next
//         }
//         console.log(res)
//     }
// }

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
    
}
class stack{
    constructor(){
        this.head=null
    }
    isEmpty(){
        return this.head==null
    }
    push(val){
        // if(this.isEmpty())
        let node=new Node(val)
        node.next=this.head
        this.head=node
    }
    pop(){
        if(this.isEmpty())return false
        // return this.head
        let temp=this.head
        this.head=this.head.next
        temp=null
    }
    peek(){
        if(this.isEmpty())return false
        return this.head.data

    }
    print(){
       let curr=this.head
       let res=''
       while(curr){
        res+=curr.data+' =>'
        curr=curr.next
       } 
       console.log(res);
       
    }
}
const sl=new stack()

console.log(sl.isEmpty())
sl.push(11)
sl.push(12)
sl.push(13)
sl.push(14)
sl.print()
console.log(sl.isEmpty())