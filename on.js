let text = document.getElementsByTagName('p');
let paragraphs = [];
for (let i = 0; i < text.length; i++) {
  paragraphs.push(text[i].innerText);
}

let title = document.getElementsByTagName('h1')[0].innerText;

let body = document.getElementsByTagName('body')[0];
let all = body.getElementsByTagName('*');
for (let i = 0; i < all.length; i++) {
  all[i].style.display = 'none';
}

let background = document.createElement('div');
background.style.display = 'block';
background.style.position = 'absolute';
background.style.minHeight = '100%';
background.style.width = '100%';
background.style.background = 'lightcyan';
document.body.appendChild(background);

let pageCount = document.createElement('div');
pageCount.style.display = 'block';
background.appendChild(pageCount);
pageCount.style.width = '200px';
pageCount.style.position = 'absolute';
pageCount.style.top = '16%';
pageCount.style.right = '39%';

let currentPage = document.createElement('p');
currentPage.style.display = 'inline-block';
currentPage.innerText = 1;
pageCount.appendChild(currentPage);
currentPage.style.position = 'relative';
currentPage.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
currentPage.style.color = '#525252';
currentPage.style.paddingRight = '5px';

let endPage = document.createElement('p');
endPage.style.display = 'inline-block';
endPage.innerText = '/ ' + paragraphs.length;
pageCount.appendChild(endPage);
endPage.style.position = 'relative';
endPage.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
endPage.style.color = '#525252';

let header = document.createElement('h1');
header.style.display = 'block';
header.innerText = title;
background.appendChild(header);
header.style.textAlign = 'center';
header.style.color = '#525252';
header.style.marginTop = '30px';
header.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';

let nextButton = document.createElement('button');
nextButton.style.display = 'block';
nextButton.style.color = '#525252';
nextButton.style.textDecoration = 'none';
nextButton.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
nextButton.innerText = ' > ';
nextButton.className += 'qzpm_47';
nextButton.style.position = 'absolute';
nextButton.style.top = '55%';
nextButton.style.right = '2%';
nextButton.style.borderRadius = '10px';
nextButton.style.border = '2px solid';
nextButton.style.fontWeight = 'bold';
nextButton.style.fontWeight = 'bold';
nextButton.style.height = '50px';
nextButton.style.width = '50px';
nextButton.style.fontSize = '30px';
nextButton.style.background = 'lightcyan';

let prevButton = document.createElement('button');
prevButton.style.display = 'block';
prevButton.innerText = ' < ';
prevButton.style.textDecoration = 'none';
prevButton.style.color = '#525252';
prevButton.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
prevButton.className += 'qzpm_57';
prevButton.style.position = 'absolute';
prevButton.style.top = '55%';
prevButton.style.left = '1.5%';
prevButton.style.borderRadius = '10px';
prevButton.style.border = '2px solid';
prevButton.style.fontWeight = 'bold';
prevButton.style.height = '50px';
prevButton.style.width = '50px';
prevButton.style.fontSize = '30px';
prevButton.style.background = 'lightcyan';

let didCreatePrev = false;
let i = 0;
if (i === 0) {
  let paragraph = document.createElement('p');
  paragraph.style.display = 'block';
  paragraph.innerText = paragraphs[i];
  paragraph.style.display = 'block';
  paragraph.className += 'qzpm_37';
  background.appendChild(paragraph);
  paragraph.style.color = '#525252';
  paragraph.style.margin = '100px';
  paragraph.style.fontSize = '1.4em';
  paragraph.style.lineHeight = '2em';
  paragraph.style.border = 'solid';
  paragraph.style.borderRadius = '15px';
  paragraph.style.padding = '10px';
  paragraph.style.background = 'lightcyan';
  paragraph.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
}

nextButton.onclick = () => {
  currentPage.innerText ++;
  document.getElementsByClassName('qzpm_37')[i].style.display = 'none';
  if (!document.getElementsByClassName('qzpm_37')[i + 1]) {
    let paragraph = document.createElement('p');
    paragraph.style.display = 'block';
    paragraph.innerText = paragraphs[i + 1];
    paragraph.style.display = 'block';
    paragraph.className += 'qzpm_37';
    background.appendChild(paragraph);
    paragraph.style.color = '#525252';
    paragraph.style.margin = '100px';
    paragraph.style.fontSize = '1.4em';
    paragraph.style.lineHeight = '2em';
    paragraph.style.border = 'solid';
    paragraph.style.borderWidth = 'thin';
    paragraph.style.borderRadius = '30px';
    paragraph.style.padding = '30px';
    paragraph.style.background = 'lightcyan';
    paragraph.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
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
  currentPage.innerText --;
  document.getElementsByClassName('qzpm_37')[i].style.display = 'none';
  document.getElementsByClassName('qzpm_37')[i - 1].style.display = 'block';
  document.getElementsByClassName('qzpm_37')[i - 1].style.color = '#525252';
  document.getElementsByClassName('qzpm_37')[i - 1].style.margin = '100px';
  document.getElementsByClassName('qzpm_37')[i - 1].style.fontSize = '1.4em';
  document.getElementsByClassName('qzpm_37')[i - 1].style.lineHeight = '2em';
  document.getElementsByClassName('qzpm_37')[i - 1].style.border = 'solid';
  document.getElementsByClassName('qzpm_37')[i - 1].style.borderRadius = '15px';
  document.getElementsByClassName('qzpm_37')[i - 1].style.padding = '10px';
  document.getElementsByClassName('qzpm_37')[i - 1].style.background = 'lightcyan';
  document.getElementsByClassName('qzpm_37')[i - 1].style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';

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
quote.style.fontFamily = 'Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif';
