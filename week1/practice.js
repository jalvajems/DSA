class Node{
    constructor (data){
        this.data=data
        this.next=null
    }
}

class singleLinkedList{
    constructor(){
        this.head=null
    }
    append(data){
        const node=new Node(data)
        if(!this.head){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
    }
    prepend(data){
        const node=new Node(data)
        if(!this.head){
            this.head=node
        }
        node.next=this.head
        this.head=node
    }
    fromArray(arr){
        for(let val of arr){
            this.append(val)
        }
    }
    insertValueAfter(x,data){
        let node=new Node(data)
        let curr=this.head
        while(curr&&curr.data!==x){
           curr=curr.next
        }   
        node.next=curr.next
        curr.next=node

    }
    insertBeforeVal(x,data){
        if(x===this.head.data){
            return this.prepend(data)
        }
        let node =new Node(data)
        let curr=this.head
        while(curr.next&&curr.next.data!==x){
            curr=curr.next
        }
        node.next=curr.next
        curr.next=node

    }
    removeVal(data){
        if(!this.head)return
        if(this.head.data===data){
            this.head=this.head.next
        }
        let curr=this.head
        while(curr.next&&curr.next.data!==data){
            curr=curr.next
        }
        curr.next=curr.next.next

    }
    reverse(){
        let curr=this.head
        let prev=null
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
            
        }
        this.head=prev
        
    }
    removemid(){
        let slow=this.head
        let fast=this.head
        let prev
        while(fast&&fast.next){
            fast=fast.next.next
            prev=slow
            slow=slow.next
        }
        prev.next=slow.next
    }
    print(){
        let curr=this.head
        let result=""
        while(curr){
            result+=curr.data+"=>"
            curr=curr.next
        }
        console.log(result+"null");
        
    }
}


const sll=new singleLinkedList()
// sll.print()
sll.fromArray([1,2,3,4,5])
sll.prepend(99)
sll.insertValueAfter(4,44)
sll.insertBeforeVal(4,444)
sll.insertBeforeVal(99,9)
// sll.removeVal(444)
// sll.reverse()
sll.removemid()
sll.print()