const { Event } = require("../models");

const eventsData = [
  {
    eventName: "Drag Queen Wednesday",
    productionCompanyName: "Butterfly Rainbow",
    genre: "Drag",
    location: "Connections Nightclub",
    startingTime: "20:00:00",
    startingDate: "2021-07-10",
    endDate: "2021-07-11",
    eventSummary:
      "Drag Queen Wednesday on a saturday night! Party like its mid week and wakeup early for brunch on sunday",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvJpaqj2edBSc_A8fpC_EJxuAjSgIQ4H44Q&usqp=CAU",
    ticketUrl: "https://www.connectionsnightclub.com/about-the-club/",
  },
  {
    eventName: "The Den of Debauchery 3",
    productionCompanyName: "Basement Burlesque Presents..",
    genre: "Burlesque",
    location: "Swan Basement",
    startingTime: "20:00:00",
    startingDate: "2021-08-06",
    endDate: "2021-08-06",
    eventSummary:
      "Lascivious people of the night, ghouls of all delights, the Den door creeks open once more.. Join our skeezy razzlerz for another evening of hedonism and sinister seduction. ",
    image:
      "https://drive.google.com/file/d/1HDV44RXmx5BkvwPkWbliqtmsGf63LeSh/view?usp=sharing",
    ticketUrl: "https://puginarug.com/",
  },
  {
    eventName: "Cece Desist present: Cece Desists Extraordinary playlist",
    productionCompanyName: "Cece Desist",
    genre: "Cabaret",
    location: "Ellington Jazz CLub",
    startingTime: "20:00:00",
    startingDate: "2021-07-28",
    endDate: "2021-07-28",
    eventSummary:
      "Cabaret darling takes the stage at the live band at The Ellington Jazz Club",
    image:
      "data:image/jpeg;base64,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",
    ticketUrl: "https://longdogechallenge.com/",
  },
  {
    eventName: "How to Beat Narcolepsy 101",
    productionCompanyName: "D.Rami",
    genre: "Seminar",
    location: "A bed near you",
    startingTime: "20:00:00",
    startingDate: "2021-07-28",
    endDate: "2021-07-28",
    eventSummary: "For people who are always napping this is for you!",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.helpguide.org%2Farticles%2Fsleep%2Fnarcolepsy.htm&psig=AOvVaw2etvnjQT8eH8kwX5yit2OQ&ust=1624309873548000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPDywP6Pp_ECFQAAAAAdAAAAABAD",
    ticketUrl: "https://alwaysjudgeabookbyitscover.com/",
  },
  {
    eventName: "How to bribe your way to success",
    productionCompanyName: "EffortIsNotAnOptionInc",
    genre: "Seminar",
    location: "SuchWoW",
    startingTime: "20:00:00",
    startingDate: "2021-07-28",
    endDate: "2021-07-28",
    eventSummary: "Succeeding the easy way",
    image:
      "https://media.gettyimages.com/videos/closeup-of-two-businesspeople-shaking-hand-and-taking-bribe-under-video-id1156468056?s=640x640",
    ticketUrl: "https://jacksonpollock.org//",
  },
  {
    eventName: "Perfecting the Espresso Martini",
    productionCompanyName: "EffortIsNotAnOptionInc",
    genre: "Seminar",
    location: "KaPow",
    startingTime: "20:00:00",
    startingDate: "2021-07-28",
    endDate: "2021-07-28",
    eventSummary: "The perfect bribe",
    image:
      "https://images.absolutdrinks.com/drink-images/Raw/Absolut/2bc2bb4c-17d6-4a3c-9df2-4d22f8553d24.jpg?imwidth=500",
    ticketUrl: "https://heeeeeeeey.com/",
  },
];

const seedEvents = () => Event.bulkCreate(eventsData);

module.exports = seedEvents;