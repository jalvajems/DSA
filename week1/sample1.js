//    removeFrom(index){

//     if(index < 0 || index >= this.size){
//         return null
//     }
//     let removeNode
//     if(index === 0){
//         removeNode = this.head
//         this.head = this.head.next
//     }else{
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         removeNode = prev.next
//         prev.next = removeNode.next

//     }
//     this.size --
//     return removeNode.value

//    }
//    removeValue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value === value){
//         this.head = this.head.next
//         this.size--
//         return value
//     }else{
//         let prev = this.head

//         while(prev.next && prev.next.value !== value){
//             prev = prev.next
//         }
//         if(prev.next){
//             const removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }
//         return null
//     }
//    }

//    reverse(){
//     let curr = this.head
//     let prev = null

//     while(curr){
//        let next = curr.next
//        curr.next = prev
//        prev = curr
//        curr = next
        
//     }
//     this.head = prev
//    }

//    middle(){
//    if(this.isEmpty()){
//     console.log('list is empty');
//     return
    
//    }
//    let slow = this.head
//    let fast = this.head

//    while(fast !== null && fast.next !== null ){
//     slow = slow.next
//     fast = fast.next.next
//    }
//    console.log('the middle number is ',slow.value);
// }
//    insert(value,index){
//     if(index < 0 && index>this.size){
//         return
//     }
//     if(index === 0){
//         return this.prepend(value)
//     }else{
//         const node = new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//              prev = prev.next
            
//         }
//         node.next = prev.next
//             prev.next = node
//             this.size++
// }
// }
