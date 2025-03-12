// 获取画布和画笔
let oCanvas = document.querySelector('canvas');
let ctx = oCanvas.getContext('2d');

// 设置场景大小
oCanvas.width = 600;
oCanvas.height = 600;

// 创建各个变量，蛇，方向和食物
let _snake = [];
let _direction = {
    x: -1,
    y: 0
};

let _food = {};

// 初始化每次游戏的函数
let newgame = () => {
    _snake = [];
    for (let i = 0; i < 5; i++) {
        _snake.push({
            x: 10,
            y: 10
        });
    }

    _food = {
        x: parseInt(Math.random() * 20),
        y: parseInt(Math.random() * 20),
    };
};

// 绘制贪吃蛇场地的格子
let draw = () => {
    ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);
    ctx.fillStyle = 'rgba(241,242,246,0.8)';
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
            ctx.fillRect(x * 30, y * 30, 28, 28);
        }
    }

    ctx.fillStyle = 'rgba(47,53,66,0.8)';
    for (let i = 0; i < _snake.length; i++) {
        let s_body = _snake[i];
        ctx.fillRect(s_body.x * 30, s_body.y * 30, 28, 28);

        // 判断蛇头是否触碰到蛇的身体来让游戏结束
        if (s_body.x == _snake[0].x && s_body.y == _snake[0].y && i != 0) {
            alert("游戏结束！");
            newgame();
        }
    }

    ctx.fillStyle = 'rgba(53,66,250,0.8)';
    ctx.fillRect(_food.x * 30, _food.y * 30, 28, 28);
};

// 让蛇进行运动的函数
let move = () => {
    let newSnake = {};
    // 判断蛇在边界的运动逻辑
    switch (_snake[0].x + _direction.x) {
        case -1:
            newSnake.x = 19;
            break;

        case 20:
            newSnake.x = 0;
            break;

        default:
            newSnake.x = _snake[0].x + _direction.x;
    }
    switch (_snake[0].y + _direction.y) {
        case -1:
            newSnake.y = 19;
            break;

        case 20:
            newSnake.y = 0;
            break;

        default:
            newSnake.y = _snake[0].y + _direction.y;
    }
    _snake.splice(0, 0, {
        x: newSnake.x,
        y: newSnake.y
    });

    // 判断蛇是否吃到了食物
    if (_snake[0].x == _food.x && _food.y == _snake[0].y) {
        // 重新生成一个新的食物
        _food = {
            x: parseInt(Math.random() * 20),
            y: parseInt(Math.random() * 20),
        };
        // 给蛇的数组长度增加1，而不用添加内容进去
        _snake.push(_snake[_snake.length - 1]);
    }
    _snake.pop();
    draw();
};

// 通过监听键盘，根据不同的键盘案件操控来决定方向向量，进而实现蛇的运动方向
document.addEventListener('keydown', (ev) => {
    switch (ev.key) {
        case 'ArrowUp':
            if (_direction.y != 1) {
                _direction.y = -1;
                _direction.x = 0;
            }
            break;
        case 'ArrowDown':
            if (_direction.y != -1) {
                _direction.y = 1;
                _direction.x = 0;
            }
            break;
        case 'ArrowLeft':
            if (_direction.x != 1) {
                _direction.y = 0;
                _direction.x = -1;
            }
            break;
        case 'ArrowRight':
            if (_direction.x != -1) {
                _direction.y = 0;
                _direction.x = 1;
            }
    }
});

newgame();
setInterval(move, 200);

// 导航页面栏打开脚本
let cartoon = document.querySelector('.cartoon');
cartoon.addEventListener('click', () => {
    cartoon.classList.toggle('open');
});

// 纸飞机跟随鼠标定位脚本
let plane = document.getElementById('plane');
let deg = 0, ex = 0, ey = 0, vx = 0, vy = 0, count = 0;
window.addEventListener('mousemove', (e) => {
    ex = e.x - plane.offsetLeft - plane.clientWidth / 2;
    ey = e.y - plane.offsetTop - plane.clientHeight / 2;
    deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 45;
    if (ex < 0) {
        deg += 180;
    }
    count = 0;
});
function drawPlane() {
    plane.style.transform = 'rotate(' + deg + 'deg)';
    if (count < 100) {
        vx += ex / 100;
        vy += ey / 100;
    }
    plane.style.left = vx + 'px';
    plane.style.top = vy + 'px';
    count++;
}
setInterval(drawPlane, 1);

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


