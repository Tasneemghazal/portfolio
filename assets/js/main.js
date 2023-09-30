
const navbar=document.querySelector('.navbar');
const headerContentSpan=document.querySelector('.header-content span');
const loading=document.querySelector('.loading');
const scrollTopBtn=document.querySelector('.scroll-to-top');
const about=document.querySelector('.about');
const navLinks=document.querySelectorAll('.nav-link');
// changing the background color of the navbar
window.addEventListener('scroll', function(){
    if(window.scrollY>headerContentSpan.offsetTop){
    navbar.style.backgroundColor ="#fff";
    }
    else{
        navbar.style.backgroundColor ="transparent";
    }
    if(window.scrollY>about.offsetTop){
        scrollTopBtn.classList.remove('opacity-0','invisible');
    }
    else{
        scrollTopBtn.classList.add('opacity-0','invisible');
    }
})

// loading screen
window.addEventListener('load', function(){
    setTimeout(function(){
        loading.classList.add('opacity-0','invisible')
        document.body.style.overflow = 'auto';
    },2000)
})
// scrolling
scrollTopBtn.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior:'smooth'
    })
})

// navlinks scrolling
for(let i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function(e){
      e.preventDefault();
      for(let j=0; j<navLinks.length; j++){
          navLinks[j].classList.remove('active');
      }
      navLinks[i].classList.add('active');
      let currentId=this.getAttribute('href');
      let targetId=document.querySelector(currentId);
      
      window.scroll({
        top:targetId.offsetTop,
        behavior:'smooth'
    })
    })
   
}
