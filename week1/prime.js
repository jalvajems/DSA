function prime(n){
    if(n===1){
        return false
    }else{
        for (let i=1;i<=n;i++){
            if(n%i===0){
                return false
            }else{
                return true
            }
        }
    }
}

console.log(prime(3));
