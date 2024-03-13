document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById('title');

  // 使用定时器延迟执行移动动画
  setTimeout(function() {
    // 添加移动动画
    title.classList.add('move up') ; // 向上移动标题
  }, 1000); // 延迟1秒执行动画
});



document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('.content');
  const h1 = document.querySelector('h1');

  // 延迟一段时间后将内容和标题的透明度设置为1
  setTimeout(function() {
    content.style.opacity = '1';
    h1.style.opacity = '1';
  }, 500); // 延迟500毫秒（0.5秒）
});
