$(document).ready(function () {
  let signupFormHandler = async (event) => {
    event.preventDefault();
  };
  $("#submit").click(async function (e) {
    e.preventDefault();
    const eventName = $("#eventNameId").val();
    const producerName = $("#producerId").val();
    const genre = $("#genreId").val();
    const location = $("#locationId").val();
    const startTime = $("#startTime").val();
    const startDate = $("#startDate").val();
    // Double check that its picking up .val here
    const endDate = $("#endDate").val();
    const eventSummary = $("#summary").val();
    const imageUrl = $("#imageId").val();
    const ticketUrl = $("#urlId").val();
    // Double check that its picking up .val here
    if (
      eventName == null ||
      producerName == null ||
      genre == null ||
      location == null ||
      startTime == null ||
      startDate == null ||
      endDate == null ||
      eventSummary == null ||
      imageUrl == null ||
      ticketUrl == null
    ) {
      alert("Enter all fields!");
    }
    const formData = {
      eventName: eventName,
      productionCompanyName: producerName,
      genre: genre,
      location: location,
      startingTime: startTime,
      startingDate: startDate,
      endDate: endDate,
      eventSummary: eventSummary,
      image: imageUrl,
      ticketUrl: ticketUrl,
    };

    console.log(formData)
    // Object is already formatted nicely so in eventRoutes.js we only have to call req.body
    let eventDataResponse = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    // fetch call goes into static
    // Customer tells the order - They complete form - give their order
    // Server takes it to the kitchen and serves it up and gives it to the customer (Client)
  });
});
