class hashDH{
    constructor(size){
        this.table=new Array(size).fill(null)
        this.size=size
    }
    hash1(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt
        }
        return total%this.size
    }
    hash2(key){
        let total=0
        let prime=7
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return prime-(total%prime)
    }
    set(key,val){
        let index=this.hash1(key)
        let step=this.hash2(key)
        let i=1
        let start=index
        while(this.table[index]!==null&&
              this.table[index][0]!==key&&
              this.table[index]!=="delete"){
            index=(index+i*step)%this.size
            i++
            if(start==index)return
        }
        this.table[index]=[key,val]
        
    }
    get(key){
        let index=this.hash1(key)
        let step=this.hash2(key)
        let i=1
        let start=index
        while(this.table[index]!=null){
            if(this.table[index]!="delete"&&this.table[index][0]==key){
                return this.table[index]
            }
            index=(index+i*step)%this.size
            i++
            if(start===index){
                return undefined
            }
        }
    }
    remove(key){
        let index=this.hash1(key)
        let step=this.hash2(key)
        let i=1
        let start=index
        while(this.table[index]!=null){
            if(this.table[index]!="delete"&&this.table[index][0]==key){
                return this.table[index]="delete"
            }
            index=(index+i*step)%this.size
            i++
            if(start===index){
                return undefined
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