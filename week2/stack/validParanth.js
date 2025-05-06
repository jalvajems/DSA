function validParanth(str){
    let stack=[]
    for( char of str){
        let lastOpen=stack[stack.length-1]
        if(char=="("||char=="{"||char=="["){
            stack.push(char)
        }else if( char==")"&&lastOpen=="("||
                  char=="}"&&lastOpen=="{"||
                  char=="]"&&lastOpen=="["){
            stack.pop()
        }else{
           return false
        }
    }
    return stack.length===0
}

console.log(validParanth("(({}))"))