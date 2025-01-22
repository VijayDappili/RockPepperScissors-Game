let userscore=0;
let compscore=0;

const choice=document.querySelectorAll(".c");
let  msg=document.querySelector("#msg");
let yourscore=document.querySelector("#user");
let computerscore=document.querySelector("#comp");


console.dir(choice);//for checkup


choice.forEach((i)=>//foreach method to add event to each element in class "c" i.e diagrams.
{
     console.log(i);

     i.addEventListener("click",()=>
     {

        let c_id=i.getAttribute("id");//extra to show that what image is clicke dbased on id
       // console.log(" your choice is conformed",c_id);
       
       maingame(c_id);
     })
});



const compchoice=() =>{

    let arr=['rock','paper','scissors'];
   let rand= Math.floor(Math.random() * 3);
   return arr[rand];
     
}

//let p=compchoice();

//this shouldnt be here because it will take value only when we load page.
//that means it store a only one value but we want a value every single time when we click image
//so if we use this varable in maingame function when ever that function called it generates new value.
//this maingame is used in foreach method in which we added events so when ever we click image maingamefunction will called.
//so new compvalue generate when we click.




let maingame=(c_id)=>
{
    console.log("your choice is ",c_id);

    let p=compchoice();
    console.log("computer choce is ",p);



    
    if(c_id===p)
    {
       // alert("Draw");
        msg.innerText=`Draw.  Both chosen ${c_id}`;
        msg.style.backgroundColor="yellow";
    }
    else
    {
        let  youwin=true;
     if(c_id==='rock')
     { //comp= scissors or paper

        youwin=p==='paper' ? false:true;
     }
     else if(c_id==='paper')
     { //comp=rock or scissors
       youwin=p==='scissors' ?false:true;
     }
     else{
        //comp=rock or paper
        youwin=p==='rock'?false:true;
     }


     if(youwin)
     {
        console.log("you win");
        msg.innerText=`You win :you=${c_id},computer=${p} `;
        msg.style.backgroundColor="green";
        userscore++;
        yourscore.innerText=userscore;
        
        
     }
     else{
        console.log("you lose");
        msg.innerText=`You lose :you=${c_id},computer=${p}`;
        msg.style.backgroundColor="red";
        compscore++;
        computerscore.innerText=compscore;
         
        }
    }

}  


