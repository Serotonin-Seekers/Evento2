const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    // we can use this line of code to revert the user back to the home screen if an event has been posted.
  } else {
    console.log(response)
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
