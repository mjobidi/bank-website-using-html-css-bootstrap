//marquee
const sb = document.getElementById('slide-box')
let Slider = {
    c : 0,
    int:0,
    max : sb.scrollWidth - sb.clientWidth,
    start : ()=>{
        Slider.int = setInterval(() => {
            if(Slider.c >= Slider.max + 300 - 150){ Slider.c = 0;}
            Slider.c++
            sb.scrollLeft = Slider.c
        }, 50);
    },
    stop : ()=>{
        clearInterval(Slider.int)
    }
}
sb.onmouseenter = e => {
Slider.stop()
}
sb.onmouseleave = e => {
Slider.start()
}
Slider.start()
// end of marque
// Dashboard

    const pageSwitchers = document.querySelectorAll('.pageSwitch')
    const pages = document.querySelectorAll('.page')
    pageSwitchers.forEach(element => {
        element.onclick = e => {
            for (let i = 0; i < pageSwitchers.length; i++) {
            pageSwitchers[i].classList.remove('active')
        }
        element.classList.add('active')
        let title = element.querySelector('b').innerText
        for (let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active')
            let _title = pages[i].id.split('-')[0]
            if (title.toLowerCase() == _title.toLowerCase()) {
                pages[i].classList.add('active')
            }
        }
        }
    });
    const sideBarToggler = document.querySelector('#sideBar-toggler')
    const sideBar = document.querySelector('#sideBar')
    let isSidebar = window.innerWidth < 700 ? true : false
    if(isSidebar) sideBar.classList.add('open')
    else sideBar.classList.remove('open')
    sideBarToggler.onclick = e => {
        isSidebar = !isSidebar
    if(isSidebar) sideBar.classList.add('open')
    else sideBar.classList.remove('open')
    }
 
    $(window).scroll(function () {
        if($(this).scrollTop() > 20 ){
          $('#mybtn').fadeIn('slow');
        }else{
          $('#mybtn').fadeOut('slow');
        }
        
      });
      
      $('#mybtn').click(function(){
        $('html, body').animate({scrollTop: 0 },"slow");
        return false
      });
        