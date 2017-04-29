window.onload = () => {
  let fade = (element) => {
    let op = 1;  // initial opacity
    let timer = setInterval(() => {
      if (op <= 0.1){
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 100);
  }

  fade(document.getElementById('title'))
}
