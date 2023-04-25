const bx = document.querySelector('#box')
bx.style.backgroundColor = 'indigo'
// alert('hello')

bx.addEventListener('click', function onClick(event) {
  const backgroundColor = bx.style.backgroundColor;
  if (backgroundColor === 'indigo') {
    bx.style.backgroundColor = 'gold';

    // 👇️ optionally change text color
    // btn.style.color = 'white';
  } else {
    bx.style.backgroundColor = 'indigo';

    // 👇️ optionally change text color
    // btn.style.color = 'blue';
  }
})