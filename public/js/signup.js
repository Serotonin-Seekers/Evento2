$(document).ready(function () {
  $("#submit").click(async function (e) {
    e.preventDefault();
    const userName = $("#username-signup").val();
    const email = $("#email-signup").val();
    const password = $("#password-signup").val();
    // const isProducer = $("#isProducer").val();
    if (
      userName == null ||
      email == null ||
      password == null
      // isProducer == null
    ) {
      alert("Enter all fields!");
    }
    const formData = {
      username: userName,
      email: email,
      password: password,
      // is_producer: isProducer,
    };

    //object keys (line 33-43) has to be exactly same as table

    // Object is already formatted nicely so in eventRoutes.js we only have to call req.body
    let loginDataResponse = await fetch("/api/users", {
      // how front end and back end speak to each other
      // kitchen located api/users
      // this kitchen exists because of eventRoute.js file
      // i want to send form data to the kitchen
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    // fetch call goes into static
    // Customer tells the order - They complete form - give their order
    // Server takes it to the kitchen and serves it up and gives it to the customer (Client)
  });
});
