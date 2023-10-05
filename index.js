let apniClass= document.querySelectorAll(".abc");
let currentValue,preSetValue

apniClass.forEach((element)=>{
   
     currentValue=element.innerHTML="0";
     preSetValue=element.getAttribute('data-target');
    //  let increment= preSetValue/10;
    let increment=0;

     function increase(){
        preSetValue=element.getAttribute('data-target');
        preSetValue= +preSetValue; // convert type from string to number

        currentValue=element.innerHTML;
        currentValue= +currentValue;

        if(currentValue<preSetValue)
        {
            currentValue=element.innerHTML=`${increment}`
            increment+=1;
            increment=Math.round(increment)
            setTimeout(increase,70);
        }

        else{}
     }

     increase();
    

})

 