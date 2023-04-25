const bx = document.querySelector('#box')
bx.style.backgroundColor = 'salmon'
// alert('hello')

bx.addEventListener('click', function onClick(event) {
  const backgroundColor = bx.style.backgroundColor;
  if (backgroundColor === 'salmon') {
    bx.style.backgroundColor = 'green';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    bx.style.backgroundColor = 'salmon';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
})