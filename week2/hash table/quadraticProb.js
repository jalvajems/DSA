class hashQP{
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
            while(this.table[index]!==null&&this.table[index][0]!==key&&this.table[index]!=='delete'){
                index=(index+i*i)%this.size
                i++
                if(start===index) return 
            }
            this.table[index]=[key,val]
        }
        get(key){
            let index=this.hash(key)
            let i=1
            let start=index
            while(this.table[index]!==null){
                if(this.table[index][0]===key&&this.table[index]!=='delete'){
                    return this.table[index]
                }
                index=(index+i*i)%this.size
                i++
                if(start===index){
                    return undefined
                }
            }
            
        }
        remove(key){
            let index=this.hash(key)
            let i=1
            let start=index
            while(this.table[index]!==null){
                if(this.table[index][0]===key&&this.table[index]!=='delete'){
                    this.table[index]='delete'
                    return
                }
                index=(index+i*i)%this.size
                i++
                if(index===start){
                    return
                }
            }
        }
        display(){
        
            this.table.forEach((val,i)=>{
                if(val){

                    console.log(i,val);
                }
                
            })
        }
}

let hashtble=new hashQP(33)
hashtble.set("age",33)
hashtble.set("gea",32)
hashtble.set("ega",43)
hashtble.set("aeg",23)
hashtble.remove("age")
console.log(hashtble.get("ega"))
hashtble.display()
