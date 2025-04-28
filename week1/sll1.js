class Node{
    constructor (data){
        this.data=data
        this.next=null

    }
}

class sLinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.head==null
    }
    getSize(){
        return this.size

    }

    append(value){
        const node= new Node(value)
        if(!this.head){
            this.head=node
            this.size++
        }else{
            let curr=this.head 
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
            this.size++
        }
    }

    prepend(value){
        const node=new Node(value)
        node.next=this.head
        this.head=node
        this.size++
    }

    deleteVal(value){
        if(!this.head){
            return
        }
        if(this.head.data===value){
            this.head=this.head.next
            this.size--
            return
        }else{
            let curr=this.head
            while(curr.next&&curr.next.data!==value){
                curr=curr.next
            }
            curr.next=curr.next.next
            this.size--
        }
    }
    insertVal(value,index){
        const node=new Node(value)

        if(index<0){
            return 
        }
        if(index===0){
            this.prepend(value)
            return 
        }else{
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            node.next=curr.next
            curr.next=node
            this.size++
            }
        }
        insertAfter(x,value){
            if(!this.head ){
                console.log("no such element");
            }else{
                let curr=this.head
                while(curr&&curr.data!==x){
                    curr=curr.next
                }
                const node=new Node(value)
                node.next=curr.next
                curr.next=node
                this.size++

            }

        }
    insertBefore(x,value){
        if(!this.head){
            return
        }
        if(this.head.data===x){
            this.prepend(value)
            return
        }
        else{
            let curr=this.head
            while(curr.next&&curr.next.data!==x){
                curr=curr.next
            }
            const node =new Node (value)
            node.next=curr.next
            curr.next=node
            this.size++
        }
    }
    fromArray(arr){
        for(let val of arr){
            this.append(val)
        }
    }
    removedup(){
        let curr=this.head
        while(curr&&curr.next){
            if(curr.data===curr.next.data){
                curr.next=curr.next.next
            }else{
                curr=curr.next
            }
        }
    }
    printreverse(node=this.head){
        if(node===null){
            return
        }
        this.printreverse(node.next)
        
        process.stdout.write(node.data+"<=")
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

const sll=new sLinkedList()

// sll.append(18)
// sll.append(12)
// sll.append(13)
// sll.prepend(99)
// sll.deleteVal(12)
// sll.insertAfter(18,222)
// sll.insertBefore(18,333)
sll.fromArray([1,2,4,5,6,7,7])
console.log(sll.getSize())
// sll.removedup()
sll.printreverse()
// console.log(sll.isEmpty())
sll.print()