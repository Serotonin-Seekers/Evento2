$(document).ready(function(){
    let signupFormHandler = async (event) => {
        event.preventDefault();
    }
    $("#submit").click(function (e) { 
        e.preventDefault();
        let eventName = $("#eventNameId").val()
        let producerName = $("#producerId").val()
        let genre = $("#genreId").val()
        let location = $("#locationId").val()
        let startTime = $("#startTime").val()
        let startDate = $("#startDate").val()
        let endDate = $("#endDate").val()
        let eventSummary = $("#summary").val()
        let imageUrl = $("#imageId").val()
        let ticketUrl = $("#urld").val()
        if (eventName == null||producerName == null||genre == null||location == null||startTime == null||startDate == null||endDate == null|| eventSummary == null|| imageUrl == null || ticketUrl == null) {
            alert("Enter all fields!")
        }
        console.log(eventName)
    });
  });
