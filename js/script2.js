let cartoon=document.querySelector('.cartoon');
const card = document.querySelector('.card')
cartoon.addEventListener('click',() => {
    cartoon.classList.toggle('open')
    card.classList.toggle('hidden');
})

//纸飞机跟随鼠标定位脚本
let plane=document.getElementById('plane');
        let deg=0,ex=0,ey=0,vx=0,vy=0,count=0;
        window.addEventListener('mousemove',(e)=>{
            ex=e.x-plane.offsetLeft-plane.clientWidth/2;
            ey=e.y-plane.offsetTop-plane.clientHeight/2;
            deg=360*Math.atan(ey/ex)/(2*Math.PI)+45;
            if(ex<0){
                deg+=180;
            }
            count=0;
        })
        function draw(){
            plane.style.transform='rotate('+deg+'deg)';
            if(count<100){
                vx+=ex/100;
                vy+=ey/100;
            }
            plane.style.left=vx+'px';
            plane.style.top=vy+'px';
            count++;
        }
        setInterval(draw, 1);


// 深浅色模式切换JS脚本
const modeToggle = document.getElementById('modeToggle');


const body = document.body;


const savedMode = localStorage.getItem('mode');


if (!savedMode) {
  body.classList.add('day-mode');
  localStorage.setItem('mode', 'day-mode');
} else {
  body.classList.add(savedMode);
}


modeToggle.addEventListener('click', () => {
  if (body.classList.contains('day-mode')) {
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
    localStorage.setItem('mode', 'night-mode');
  } else {
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
    localStorage.setItem('mode', 'day-mode');
  }
});
