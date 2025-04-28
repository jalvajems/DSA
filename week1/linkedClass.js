class Node{
    constructor (value){
        this.value=value
        this.next =null
    }
}
class linkedList{
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
        const node =new Node(value)
        if (this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        let curr=this.head
        let result=""

        while (curr) {
            result+=`${curr.value} ->`
            curr=curr.next
        }
        console.log(result+" null");
        
    }
}
const list = new linkedList()

list.prepend(4)
list.prepend(5)
list.prepend(6)

console.log(list.isEmpty());
console.log(list.getSize());

list.print()