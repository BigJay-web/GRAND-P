document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic Validation
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Simulate Login Request (replace with real API call later)
  console.log('Logging in with:', email, password);
  alert('Logging in...');
  
  // Redirect the user after successful login (replace with real logic)
  window.location.href = '/dashboard'; // Example of redirection to the dashboard.
});
