$(document).ready(function () {
  const eventFormHandler = $("#submit").click(async function (e) {
    e.preventDefault();
    // removing the prevent default gets the url links working but  says "please enter URL"
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
    // Dont think this is working
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

    //object keys (line 33-43) has to be exactly same as table

    // Object is already formatted nicely so in eventRoutes.js we only have to call req.body
    let eventDataResponse = await fetch("/api/events", {
      // how front end and back end speak to each other
      // kitchen located api/events
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
