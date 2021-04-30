const chunk4= (array, size)=>{ let res = []; 
    
    array.forEach((item, index)=>{
        let lastSubArray = res[res.length - 1]
        console.log(lastSubArray, index)

        if(!lastSubArray || lastSubArray.length === size){
            res.push([item])
        }
        else {
            lastSubArray.push(item)
        }
      
    })
    return res;
}


const anagram = ((stringA, stringB)=>{
     stringA = stringA.split('')
     stringB = stringB.split('')
    if(stringA.length !== stringB.length){
        return false;
    }
    const stringACharCount = {}
    stringA.forEach(item=>{
        const aChar = item;
        stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1

    })

    stringB.forEach(item =>{
        const bChar =item;
        if(!stringACharCount[bChar]){
            return false;
        }
        else{
            stringACharCount[bChar]--
        }

    })

    console.log(stringACharCount)
    return true;
})


const vowels = (string)=>{
   const vowelChar = 'aeiou'.split('');
   let count = 0;
   string = string.split('')

   string.forEach(item => {
       if(vowelChar.includes(item)) {
         count += 1;
       }
   })

   return count;

}

let arr = [1,2,3,4,5,6,7,8]

const binarySearch2 = (sortedArray, val)=>{
    let left = 0;
    let right = sortedArray.length -1 ;

    while(left<=right){
        const mid = Math.floor((left + right)/ 2);
        const midValue = sortedArray[mid]

        if(midValue === val){
            return sortedArray[mid]
        }
        else if(midValue < val){
            left = mid + 1
        }
        else{
            right = mid - 1
        }

        // return sortedArray[mid]
    }

    return -1 
}

const countPalindrome = (str)=>{
    let count = 0;
    // let res = [];
    let res = '';
    str = str.split('');
    console.log(str)
    str.forEach((item, index)=>{
        res += item;
        console.log(res, 'res')
        let rev = res.split('').reverse().join('')
        console.log(rev, 'rev')
        if(res === rev){
            count++
        }


    })
    console.log(res, 'see res')
    let res2 = ''
    for(let i=0; i<res.length; i++){
        res.split().shift();
       
        let iterateWord = res.split();
        iterateWord.forEach((item)=>{
            res2 += item;
        let rev = res2.split('').reverse().join('')
        console.log(rev, 'rev')
        if(res2 === rev){
            count++
        }
        })
        res2 = ''
    }
    // console.log(res)
    return count;
}

const countPalindrome = (str)=>{
    str = str.toLowerCase()
    console.log(str)
    let count = 0;
    let length = str.length
    // put back code on top
    let res = ''
    let word = str.split('');
    for(let i=0; i<length; i++){
       
       word.forEach((item)=>{
           res += item;
           let rev = res.split('').reverse().join('')
           if(res === rev){
            count++
            }
       })
       res = '';
       word.shift('');
       console.log(word)
    }
    // console.log(res)
    return count;
}

  // let res = [];
  let res = '';
  str = str.split('');
  console.log(str)
  str.forEach((item, index)=>{
      res += item;
      console.log(res, 'res')
      let rev = res.split('').reverse().join('')
      console.log(rev, 'rev')
      if(res === rev){
          count++
      }


  })