$(document).ready(function () {
  $("#submit").click(async function (e) {
    e.preventDefault();
    const userName = $("#username-login").val();
    // const email = $("#producerId").val();
    const password = $("#password-login").val();
    // const isProducer = $("#locationId").val();
    if (
      userName == null ||
      // email == null ||
      password == null
      // isProducer == null
    ) {
      alert("Enter all fields!");
    }

    // I believe this was the main source of the authentication issue - no
     if (userName && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
});




});
