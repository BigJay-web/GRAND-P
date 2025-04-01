document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform login validation here
    if (email && password) {
      // Call your backend API to authenticate user
      alert('Logging in...');
      // Redirect user to dashboard or home page
    } else {
      alert('Please fill in all fields');
    }
  });
  