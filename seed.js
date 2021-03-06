// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var restroom_list = [
  {
    location: "1696 Hayes St.",
    locationName: "Central Coffee Tea & Spices",  
    type: "Cafe",
    cleanliness: 4,
    neighborhood: "Panhandle",
    review: "good"
  }, 
  {
    location: "2175 Chestnut St.",
    locationName: "Delarosa",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Marina",
    review: "very good"
  },
  {
    location: "3913 24th St.",
    locationName: "Savor",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Noe Valley",
    review: "very good"
  },
  {
    location: "429 Castro St.",
    locationName: "Castro Theatre",  
    type: "Movie Theater",
    cleanliness: 4,
    neighborhood: "Castro District",
    review: "pretty good"
  },
  {
    location: "3349 20th St.",
    locationName: "Shotwell's",  
    type: "Bar",
    cleanliness: 3,
    neighborhood: "Mission District",
    review: "good"
  },
  {
    location: "2095 Union St.",
    locationName: "Soul Cycle",  
    type: "Gym",
    cleanliness: 3,
    neighborhood: "Marina",
    review: "good"
  },
  {
    location: "100 34th Ave.",
    locationName: "Legend of Honor",  
    type: "Museum",
    cleanliness: 5,
    neighborhood: "Presidio",
    review: "very good"
  },
  {
    location: "735 7th Ave.",
    locationName: "Safeway",  
    type: "Grocery Store",
    cleanliness: 2,
    neighborhood: "Richmond",
    review: "not good"
  },
  {
    location: "1396 La Playa St.",
    locationName: "Java Beach Cafe",  
    type: "Cafe",
    cleanliness: 3,
    neighborhood: "Sunset",
    review: "good"
  },
   {
    location: "2001 37th Ave.",
    locationName: "St. Ignatius College Prepatory",  
    type: "School",
    cleanliness: 4,
    neighborhood: "Sunset",
    review: "good"
  },
  {
    location: "225 Bush St.",
    locationName: "General Assembly",
    type: "School",
    cleanliness: 5,
    neighborhood: "Financial District",
    review: "very good"
  },
  {
    location: "100 Montgomery St.",
    locationName: "Starbucks",
    type: "Cafe",
    cleanliness: 4,
    neighborhood: "SOMA",
    review: "good"
  },
  {
    location: "601 Mission St.",
    locationName: "CVS",
    type: "Store",
    cleanliness: 3,
    neighborhood: "Mission District",
    review: "not bad"
  },
  {
    location: "598 Market St.",
    locationName: "Montgomery St. BART Station",  
    type: "Transit Station",
    cleanliness: 1,
    neighborhood: "Union Square",
    review: "very bad"
  },
  {
    location: "525 Market St.",
    locationName: "Chipotle Mexican Grill",  
    type: "Restaurant",
    cleanliness: 4,
    neighborhood: "Union Square",
    review: "good"
  },
  {
    location: "1701 Greenwich St.",
    locationName: "Fort Mason Market & Deli",  
    type: "Restaurant",
    cleanliness: 5,
    neighborhood: "Russian Hill",
    review: "very good"
  } 
];

db.Restroom.remove({}, function(err, restrooms){
  console.log('removed all restrooms')
  db.Restroom.create(restroom_list, function(err, restrooms){
    if (err){ 
      return console.log('ERROR', err); 
    }
    console.log("all restrooms:", restrooms);
    console.log("created", restrooms.length, "restrooms");
    process.exit();
  });
});

// var review_list = [
//   {
//     comment: "Wonderful site, I can finally find a restroom!"
//   },
//   {
//     comment: "Free to use, hope it doesn't involve a subscription in the future."
//   },
//   {
//     comment: "Could use a bit of polishing..."
//   },
//   {
//     comment: "I rather not use this. There could be better options out there, I haven't checked."
//   }
// ];

// Seeding Review Model

// db.Review.remove({}, function(err, reviews){
//   console.log('removed all reviews')
//   db.Review.create(review_list, function(err, reviews){
//     if (err) { 
//       return console.log('ERROR', err); 
//     }
//     console.log("all restrooms:", reviews);
//     console.log("created", reviews.length, "reviews");
//     process.exit();
//   });
// });