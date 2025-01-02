document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var mobile = document.getElementById('mobile').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  fetch('https://script.google.com/macros/s/AKfycbxqwmS9Itq74ZMpswp2-po1ipJMpGaSPSi4itNuF1ghE25Pg_VzB6RCdWk9DIk1ebOU/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'Name': name,
      'Mobile No.': mobile,
      'Email': email,
      'Message': message
    }).toString(),
  })
  .then(response => response.text())
  .then(data => {
    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  });
});

