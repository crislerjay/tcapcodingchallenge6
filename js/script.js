window.addEventListener("load", () => {

  function isValidEmail(email) {
    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
  }

  const form = document.querySelector('.form');
  const input = document.querySelector('#input');
  const errorMsg = document.querySelector('.errorMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    var userInput = input.value;

    if (isValidEmail(userInput)) {
      errorMsg.classList.remove('show');
      input.value = '';
      alert('tenkyu <3');
    } else {
      errorMsg.classList.add('show');
    }
  });
});