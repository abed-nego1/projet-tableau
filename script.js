window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 52){
    header.classList.add('header_scrolled');
  }else{
    header.classList.remove('header_scrolled');
  }
  
})
