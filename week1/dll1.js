class Node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}
class dlinkedList{
    constructor (){
        this.head=null
        this.tail=null
    }
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    }
    prepend(value){
        const node=new Node(value)
        if(!this.head){
            this.head=this.tail=node
        }else{
            this.head.prev=node
            node.next=this.head
            this.head=node
        }
    }
    removeVal(value){
        let curr=this.head
        while(curr){
            if(curr.data===value){
                if(curr.next){
                    curr.next.prev=curr.prev

                }else{
                    this.tail=curr.prev
                }
                if(curr.prev){
                    curr.prev.next=curr.next

                }else{
                    this.head=curr.prev
                }
                return
            }
            curr=curr.next
        
        }
    }
    removefrom(index){
        if(index<0||index>this.size)return
        let removeNode

        if(index===0){
            removeNode=this.head
            this.head=this.head.next    
        }else{
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            removeNode=curr.next
            curr.next=curr.next.next
        }
    }
    insertAfter(x,data){

        let curr=this.head
        while(curr&&curr.data!==x){
            curr=curr.next
        }
        if(curr){
            const node=new Node(data)
            node.prev=curr.next
            curr.next=node
        }
    }

    insertBefore(x,data){
        if(!this.head){
            return
        }
        if(this.head.data===x){
            this.prepend(data)
            return
        }else{
            let curr=this.head
            while(curr&&curr.data!==x){
                curr=curr.next
            }
            const node=new Node(data)
            node.prev=curr.prev
            node.next=curr
            curr.prev.next=node
            curr.prev=node

        }
    }
reverse(){
    let curr=this.head
    let prev=null
    while(curr){
        let next =curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}
findMid(){
    let slow=this.head
    let fast=this.head
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    console.log("middle node value is=>"+slow.data)
}


    print(){
        let curr=this.head
        let result=""
        while(curr){
            result+=curr.data+"<->"
            curr=curr.next
        }
        console.log("null<->"+result+"null");
        
    }
}

let dll=new dlinkedList()

dll.append(12)
dll.append(14)
dll.append(13)
dll.append(15)
dll.prepend(43)
// dll.removeVal(13)
// dll.insertAfter(14,22)
// dll.insertBefore(12,44)
// dll.removefrom(1)
// dll.reverse()
dll.print()
dll.findMid()