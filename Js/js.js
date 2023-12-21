document.querySelector('.switcher_btn').onclick = ()=>{
    document.querySelector('.color_switcher').classList.toggle('active');
}


let thembuttons = document.querySelectorAll('.theme_btn');

thembuttons.forEach(color =>{
    color.addEventListener('click',() =>{
        let datacolor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color',datacolor);
    });
});