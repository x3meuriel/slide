import React, {useState, useEffect} from 'react';
import '../examples/feel.css'



const Feel = ()=>{ 
     const slides = ['first Slide', 'second Slide', 'third Slide', 'fourth Slide', 'last Slide'];
     const [index, incIndex] = useState(0) 
     const [slide, setSlide] = useState(slides[index])

     const newIndex = async ()=>{
      const newIndexe= await new Promise((resolve, reject) =>{
          incIndex(prevIndex=> prevIndex + 1);
          resolve(index)
         console.log(resolve, 'here!!')
      }) 
      
      
      const newName =  await new Promise ((resolve, reject)=>{
          setSlide(slides[newIndexe])
          resolve(slide)
      }) 

      const data = await newName ;
      console.log(data, 'data')
      console.log(newIndexe, newName, 'see me')
    }

    useEffect(()=>{
       const ff = document.getElementById('feelButton');
       ff.innerHTML = `${index} of ${slide}`
       document.title = `Feel ${index}`
    }, [slide])

    
    
     return(
         <div className = 'container-fluid first'>
            <div className = 'mx-auto-1' style = {{backgroundColor: 'white', color: 'purple' }} 
                     onClick = {(event)=>{
                     setSlide(prevSlide =>  slides[index + 1])
                } }>
                <h1 className = 'name'>{slide}</h1>  
             
            </div>
            <button id ='feelButton' className = 'btn btn-default 'onClick = {()=>{newIndex()}}>
                 increment: {index}</button>

         </div>
        
     )
 }

export default Feel;

//     const nameHandler = (names) =>{
//         for(i=1; i<=2; i++){
//             setName(names[i])
//         }
        
//     }

{/* <div className = 'mx-auto' style = {{backgroundColor: 'purple', color: ' white' }} 
onClick = {(event)=>{names.map((name, index)=>{
    if(index==2){
        return setName(name)
    } 
    
})
}} > */}