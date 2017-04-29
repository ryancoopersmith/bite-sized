window.onload = () => {
  let hasClass = (element, cls) => {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  };

  let text = document.getElementsByTagName('p');
  let paragraphs = [];
  for (let i = 0; i < text.length; i++) {
    paragraphs.push(text[i].innerText);
  }

  let body = document.getElementsByTagName('body')[0];
  let all = body.getElementsByTagName('*');
  for (let i = 0; i < all.length; i++) {
    if (!hasClass(all[i], 'qzpm_37')) {
      all[i].style.display = 'none';
    }
  }

  let button = document.createElement('button');
  button.style.display = 'block';
  button.innerText = 'Next Paragraph';
  button.className += 'qzpm_87';
  let i = 0;
  if (i === 0) {
    let paragraph = document.createElement('p');
    paragraph.style.display = 'block';
    paragraph.innerText = paragraphs[i];
    paragraph.style.display = 'block';
    paragraph.className += 'qzpm_37';
    paragraph.style.margin
    document.body.appendChild(paragraph);
  }
  button.onclick = () => {
    if (i !== 0) {
      document.getElementsByClassName('qzpm_37')[i - 1].style.display = 'none';
    }
    i++;
    let paragraph = document.createElement('p');
    paragraph.style.display = 'block';
    paragraph.innerText = paragraphs[i];
    paragraph.style.display = 'block';
    paragraph.className += 'qzpm_37';
    paragraph.style.margin
    document.body.appendChild(paragraph);
  }
  document.body.appendChild(button);
};
