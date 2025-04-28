class Node{
    constructor (value){
        this.value=value
        this.next =null

    }
}

class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(val){
        const node=new Node(val)
        if(this.isEmpty){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next!==null){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    print(){
        let curr=this.head
        let result=""

        if(this.isEmpty()){
            console.log("no values in the list ")
        }else{
            while(curr){
                result+=`${curr.value} =>`
                curr=curr.next
            }
            console.log(result+"null")
        }
    }
}
const list =new Linkedlist()
list.prepend(23)
list.prepend(21)
list.prepend(22)
list.prepend(24)
 
console.log(list.isEmpty());
console.log(list.getSize());

list.print()


