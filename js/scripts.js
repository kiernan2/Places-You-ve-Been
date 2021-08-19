// Business Logic
function Places() {
  this.places = {};
  this.currentId = 0;
}

function Place(location,landmarks,time,notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

Places.prototype.deletePlace = function(id) {
  if (this.Places[id] === undefined) {
    return false;
  }
  delete this.Places[id];
  return true;
}

Places.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
}

// UI Logic
let places = new Places();

function displayPlaceDetails(PlacesToDisplay) {
  let placesList = $("ul#placesList");
  let htmlForPlaceInfo = "";
  Object.keys(PlacesToDisplay.places).forEach(function(key) {
    const place = PlacesToDisplay.findPlace(key);
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + "</li>"
    console.log(place)
  });
  placesList.html(htmlForPlaceInfo);
};

function attachPlaceListeners() {
  $("ul#placesList").on("click", "li", function() {
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    places.deletePlace(this.id);
    $("#show-place").hide();
    displayPlaceDetails(places);
  });
};

function showPlace(placeId) {
  const place = places.findPlace(placeId);
  $("#show-place").show();
  $(".location").html(place.location);
  $(".landmarks").html(place.landmarks);
  $(".time").html(place.time);
  $(".notes").html(place.notes);
}

$(document).ready(function() {
  attachPlaceListeners();
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let inputtedLocation = ($("input#inputLocation").val());
    let inputtedLandmarks = ($("input#inputLandmarks").val());
    let inputtedTime = ($("input#inputTime").val());
    let inputtedNotes = ($("input#inputNotes").val());
    $("input#inputLocation").val("");
    $("input#inputLandmarks").val("");
    $("input#inputTime").val("");
    $("input#inputNotes").val("");
    let newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes);
    places.addPlace(newPlace);
    console.log(places);
    displayPlaceDetails(places);
  });
});

