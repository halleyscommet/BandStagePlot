var h1 = document.querySelector('h1[contenteditable]');
h1.addEventListener('focus', function() {
  if (this.innerHTML === 'Type your title here...') {
    this.innerHTML = '';
  }
});
h1.addEventListener('blur', function() {
  if (this.innerHTML === '') {
    this.innerHTML = 'Type your title here...';
  }
});