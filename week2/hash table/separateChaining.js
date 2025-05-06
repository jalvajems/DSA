class hashSC{
    constructor(size){
        this.table=new Array(size)
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
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,val]]
        }else{
            let sameKey=bucket.find((item)=>item[0]===key)
            if(sameKey){
                sameKey[1]=val
            }else{
                bucket.push([key,val])
            }
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find((item)=>item[0]==key)
            if(sameKey){
                return sameKey
            }else return undefined
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find((item)=>item[0]==key)
            if(sameKey){
                bucket.splice((bucket.indexOf(sameKey)),1)
                return
            }
        }
        return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){

                console.log(i,this.table[i]);
            }
            
        }
    }
}

let ht=new hashSC(55)
ht.set("age",1)
ht.set("gea",3)
ht.set("eag",554)
ht.set("aesg",135)
console.log(ht.get("age"))
ht.remove("gea")
ht .display()