let text = document.getElementsByTagName('p');
let paragraphs = [];
for (let i = 0; i < text.length; i++) {
  paragraphs.push(text[i].innerText);
}

let body = document.getElementsByTagName('body')[0];
let all = body.getElementsByTagName('*');
for (let i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}

let background = document.createElement('div');
background.style.display = 'block';
background.style.height = '100vh';
background.style.background = 'lightcyan';
document.body.appendChild(background);

let nextButton = document.createElement('button');
nextButton.style.display = 'block';
nextButton.innerText = 'Next';
nextButton.className += 'qzpm_47';

let prevButton = document.createElement('button');
prevButton.style.display = 'block';
prevButton.innerText = 'Previous';
prevButton.className += 'qzpm_57';

let didCreatePrev = false;
let i = 0;
if (i === 0) {
  let paragraph = document.createElement('p');
  paragraph.style.display = 'block';
  paragraph.innerText = paragraphs[i];
  paragraph.style.display = 'block';
  paragraph.className += 'qzpm_37';
  background.appendChild(paragraph);
}

nextButton.onclick = () => {
  document.getElementsByClassName('qzpm_37')[i].style.display = 'none';
  if (!document.getElementsByClassName('qzpm_37')[i + 1]) {
    let paragraph = document.createElement('p');
    paragraph.style.display = 'block';
    paragraph.innerText = paragraphs[i + 1];
    paragraph.style.display = 'block';
    paragraph.className += 'qzpm_37';
    background.appendChild(paragraph);
  } else {
    document.getElementsByClassName('qzpm_37')[i + 1].style.display = 'block';
  }
  i++;
  if (i === paragraphs.length - 1) {
    nextButton.style.display = 'none';
  } else if (i === 1 && !didCreatePrev) {
    background.appendChild(prevButton);
    didCreatePrev = true;
  } else if (i === 1) {
    prevButton.style.display = 'block';
  }
};
background.appendChild(nextButton);

prevButton.onclick = () => {
  document.getElementsByClassName('qzpm_37')[i].style.display = 'none';
  document.getElementsByClassName('qzpm_37')[i - 1].style.display = 'block';
  i--;
  if (i === 0) {
    prevButton.style.display = 'none';
  } else if (i === paragraphs.length - 2) {
    nextButton.style.display = 'block';
  }
};

let quoteContainer = document.createElement('div');
quoteContainer.style.display = 'block';
quoteContainer.style.position = 'absolute';
quoteContainer.style.width = '100%';
quoteContainer.style.bottom = '0';
quoteContainer.style.background = '#A8BBD8';
background.appendChild(quoteContainer);

let quote = document.createElement('p');
quote.style.display = 'block';
quote.style.fontStyle = 'italic';
quote.style.textAlign = 'center';
quote.style.marginBottom = '30px';
quote.style.marginTop = '15px';
quote.innerText = 'Remember to stay calm and breathe.';
quoteContainer.appendChild(quote);