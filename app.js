//login page
function handleclick(){
let username=document.getElementById('username').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value
if((username==='rocky')&&(email==='rackman@gmail.com')&&(password==='admin'))
{
    // localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    window.location.href='index.html'
}else{
    document.getElementById('msg').innerHTML=('login failed!')
    document.getElementById('msg').style.color='red'
    document.getElementById('msg').style.textAlign='center'
}
}

//event for login  get username 
window.addEventListener('load', function(){ 
    let email = localStorage.getItem('username');
    if(email){
        document.getElementById('mess').innerHTML ="hchgfghf" +username;
    }
    
});
// this is logout function
function logout(){
    localStorage.removeItem('username');
    window.location.href ="login.html";//jump of another page 
}

//this code was jumping signup page
function createaccount(page){
    if(page==='signup'){
        document.getElementById('logi').innerHTML="<Object type=text/html data=signup.html width=100% height=100%></Object>"
    }
    else{
        console.log('page not found')
    }
}
function create(page){
 
 if(page==='login'){
    document.getElementById('hand').innerHTML="<Object type=text/html data=login.html width=100% height=100%></Object>"
}
}


//this profile hide code
function hidemenu(){
    if  (document.getElementById('hide').style.display === 'none')
    {
        (document.getElementById('hide').style.display ='flex')
        (document.getElementById('hide').style.animation='cross')
    }else{
        (document.getElementById('hide').style.display = 'none')
    }
}

// jump whole paage show in index page
function loadpage(page){
    if(page ==='dell'){
        document.getElementById('content').innerHTML="<object type=text/html data=dell.html width=100% height=100%></object>"
    }
    else if(page==='hp'){
        document.getElementById('content').innerHTML="<object type=text/html data=hp.html width=100% height=100%></object>"
    }
    else if(page==='mac'){
        document.getElementById('content').innerHTML="<object type=text/html data=mac.html width=100% height=100%></object>"
    }
    else if(page==='lenovo'){
        document.getElementById('content').innerHTML="<object type=text/html data=lenovo.html width=100% height=100%></object>"
    }
    else{
        console.log('page not found')
    }
}

//image slider
   let sliderposition=0;
   const sliders=document.querySelectorAll('.slider-item')
   const totalslider=sliders.length;
    const prev=document.querySelector("#prev")
    const next=document.querySelector("#next")
   
    prev.addEventListener("click",function(){
             prevslide()
    })

    next.addEventListener("click",function(){
        nextslide()
    })

    function updateposition(){
        sliders.forEach(slide =>{
            slide.classList.remove('active')
            slide.classList.add ('hidden')
       })
       sliders[sliderposition].classList.add('active')
    }
        
    function prevslide(){
        if(sliderposition==0){
            sliderposition=totalslider-1;
        }
        else{
        sliderposition--;
        }
        updateposition()
    }
        
    function nextslide(){
        if(sliderposition==totalslider-1){
            sliderposition=0;
        }
        else{
            sliderposition++;
        }
     
        updateposition()
    }
      //button a under button
    //   const click=document.querySelector('.clicks')
    //   sliders.forEach(slide =>{
    //   const click=document.createElement('div')
    //   click .classList.add('click');
    //   clicks.appendChild(click)
    //   });

    //   const clicks=document.querySelectorAll('.click')
    //   clicks[sliderposition].classList.add('click-active')


      ///set time
      setInterval(()=>{
        if(sliderposition==totalslider-1){
            sliderposition=0
        }
        else{
            sliderposition++;
        }
        updateposition();
      },5000)


/// practice this below code

//event listner
// const val=document
// console.log(val)

// const set=val.querySelector(".container")
// console.log(set)
// const div=set.querySelector("div")
// console.log(div)
// const a=div.querySelectorAll('a')
// console.log(a)
// const tag=div.getElementsByTagName('a')
// console.log(tag)



// tag[1].style.color="red"
// for(i=0; i<tag.length;i++){
//     tag[i].style.backgroundColor="yellow"
//     console.log(i)
// }

// const text=document
// console.log(text)
// const last=text.querySelectorAll('div')
// console.log(last)
// const less=text.querySelector('#hide')
// console.log(less)
// console.log(less.lastElementChild)
// // less.lastElementChild.remove();

// const newDiv=document.body.createElement('div')
// newDiv.textContent="hlri"
// newDiv.style.backgroundColor="red"
// newDiv.style.width="400px"
// newDiv.style.height="400px"
// body.append(newDiv)
// console.log(newDiv)

