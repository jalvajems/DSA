// function reverseStr(str){
//     if(str==="")return "";
    
//     return reverseStr(str.slice(1))+str[0];
// }
// console.log(reverseStr("jalva"))
//------------------------------------------------

// function palindrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//     return palindrome(str.slice(1,str.length-1))

// }
// console.log(palindrome("helleh"));


//------------------------------------------------

// function countVowels(str){
    //     if(str===""){
        //         return 0
        //     }
        //     let vowels="aeiouAEIOU"
//     let count=vowels.includes(str[0])?1:0
//         return count+countVowels(str.slice(1))
    
// }
// console.log(countVowels("jalva"));



//------------------------------------------------



// function removeDup(str,index=0,result=""){
//     if(index>=str.length){
//         return result
//     }
//     if(!result.includes(str[index])){
    //         result+=str[index]
    //     }
    //     return removeDup(str,index+1,result)
    // }
    // console.log(removeDup("qerqqqqqqqtqphb"));
    
    
    //------------------------------------------------
    
    // function removeLetter(str,letter,index=0,result=""){
    //     if(str.length-1<index)return result
    
    //     if(str[index]!==letter){
        //     result+=str[index]
        //     }
        //     return removeLetter(str,letter,index+1,result)
        
        //     }
        //     console.log(removeLetter("hello world","o"))
        
//------------------------------------------------
        
        // function isAnagram(str1,str2){
            //     if(str1.length===0&&str1.length===0)return true
            //     if(str1.length!==str2.length)return false
            //     str1=str1.split('').sort().join('')
            //     str2=str2.split('').sort().join('')
            //     if(str1===str2){
                //         return true
                //     }
                // }
                
                // console.log(isAnagram("gum","muge"))
//------------------------------------------------


// function isAnagram(str1,str2){
//     if(str1.length===0&&str2.length===0)return true
//     if(str1.length!==str2.length)return false
//     let curr=str1[0]
//     let indexInstr2=str2.indexOf(curr)
//     if(indexInstr2===-1)return false
//     let newstr1=str1.slice(1)
//     let newstr2=str2.slice(0,indexInstr2)+str2.slice(indexInstr2+1)
//     return isAnagram(newstr1,newstr2) 
// }
// console.log(isAnagram("mug","gum"));


//=================================================

// function reverse(str){
    //     if(str==="")return ""
    
    //     return reverse(str.slice(1))+str[0]
    // }
    // console.log(reverse("jalva"));
    
    //=================================================
    
    // function isPalindrome(s){
        //     if(s.length<=1)return true
        //     if(s[0]!==s[s.length-1])return false
        //     return isPalindrome(s.slice(1,s.length-1))
        // }
        
        // console.log(isPalindrome("iasfji"));
        
        //=================================================

        function dup(str,index=0,res=""){
            if(str.length<=index)return res
            if(!res.includes(str[index])){
                res+=str[index]
            }
            return dup(str,index+1,res)
        }
    console.log(dup("djshsjd"));
    