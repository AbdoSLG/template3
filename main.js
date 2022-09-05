let btn  = document.getElementById("up")
window.onscroll = function(){
    

    if(window.scrollY>600){
        btn.style.display="block";
        
    }else if(window.scrollY<600){
        btn.style.display="none";
    }
    // console.log(this.scrollY)


}

btn.onclick=function(){
    window.scrollTo({
        top:0 , 
        behavior:"smooth"
    })
}


// **************************************************************************************
    // when reached change numbers 

let elements = document.querySelectorAll(".stats .container h1")
let section = document.querySelector(".stats")
let started  = false;





window.addEventListener("scroll", function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){

            elements.forEach((num)=>{startCount(num)})

        }
        started=true;
    }
}
)

function startCount(el){
    let goal = el.dataset.goal ;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count)
        }
    },10 / goal  )

}
// ******************************************************************************************
//                                  when reached change width
let spans = document.querySelectorAll(".skills .container2 span")
let skills = document.querySelector(".skills")


spans.forEach((el)=>{
        el.style.width=0;
        })
        window.addEventListener("scroll" , function(){
            if(window.scrollY >= skills.offsetTop -100 ){
                // console.log("hello world")
                    spans.forEach((el)=>{
                    el.style.width = el.dataset.width;
                })
    
    }
})


// ******************************************************************************************
//                                change time in 2022


let theTime=new Date("31 dec,2022 23:59:59").getTime() ;


let count=setInterval(()=>{
    // get time right now
    let timeNow=new Date().getTime() ;
    // the different between the to time
    let timeDiff = theTime-timeNow ;
    // #get time by day
    let days=Math.floor(timeDiff/(1000 * 60* 60 * 24))
    
    // #get time by hours
    let hours=Math.floor((timeDiff%(1000 * 60* 60 * 24))/(1000*60*60));
    
    // #get time by minutes
    let minutes=Math.floor((timeDiff%(1000 * 60* 60 ))/(1000*60));
    
    // #get time by seconds
    let seconds=Math.floor((timeDiff%(1000 * 60 ))/1000);
    
    document.querySelector(".late .content .flex1 .box .days").innerHTML=days  <10 ? `0${days}` :days ;    
    document.querySelector(".late .content .flex1 .box .hours").innerHTML=hours<10 ? `0${hours}` :hours ;
    document.querySelector(".late .content .flex1 .box .minutes").innerHTML=minutes<10? `0${minutes}` :minutes ;
    document.querySelector(".late .content .flex1 .box .seconds").innerHTML=seconds<10 ? `0${seconds}` :seconds ;
    
        if(timeDiff==0){
            clearInterval(count)

        }


},1000)


// ******************************************************************************************
//                                change 
