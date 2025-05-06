// class HashLP{
//     constructor (size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,val){
//         let index=this.hash(key)
//         while(this.table[index]&&this.table[index][0]!==key){
//             index=(index+1)%this.size
//         }
//     this.table[index]=[key,val]
//     }
//     get(key){
//         let index=this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 return this.table[index]
//             }
//             index=(index+1)%this.size
//         }
//     }
//     remove(key){
//         let index=this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 this.table[index]=undefined
//                 return 
//             }
//             index=(index+1)%this.size
//         }

//     }
//     display(){
//         this.table.forEach( (val,i)=> {
//             if(val){
//                 console.log(i,val);
                
//             }
//         });
//     }
// }

// let hashTable=new HashLP(20)

// hashTable.set("name","jasim")
// hashTable.set("name","jasi")
// hashTable.set("age","3")
// hashTable.set("class","4")

// console.log(hashTable.get("name"))
// hashTable.display()

class hashLP{
    constructor (size){
        this.table=new Array(size).fill(null)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,val){
        let index=this.hash(key)
        let i=1
        let start=index
        while(this.table[index]!==null&&this.table[index][0]!==key&&this.table[index]!=="delete"){
            index=(index+i)%this.size
            i++
            if(start===index)return
        }
        this.table[index]=[key,val]
    }
    get(key){
        let index=this.hash(key)
        let i=1
        let start=index
        while(this.table[index]!==null){
            if(this.table[index][0]===key&&this.table[index]!=="delete"){
                return this.table[index]
            }
            index=(index+i)%this.size
            i++
            if(index===start)return undefined

        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let i=1
        let start=index
        while(this.table[index]!==null){
            if(this.table[index][0]===key&&this.table[index]!=="delete"){
                this.table[index]="delete"
            }
            index=(index+i)%this.size
            i++
            if(index==start)return undefined
        }
    }
    display(){
        this.table.forEach((val,i)=>{
            if(val){
                console.log(i,val)
            }
        })
        }
}

const hashTable=new hashLP(66)

hashTable.set("name","ugas")
hashTable.set("anem","ugafass")
hashTable.set("mane","ugadsgs")
hashTable.remove("name")
hashTable.display()
console.log(hashTable.get("mane"));
