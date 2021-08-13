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

let place1 = new Place("Istanbul", "b", "c", "o")

// UI Logic
$(document).ready(function() {
  let places = new Places();
  $("#place1").text(place1.location);
  $("#stuff1").text(place1.landmarks + " " + place1.time + " " + place1.notes);
  $("#place1").click(function(){
    console.log("hi")
    $("#stuff1").toggle();
  });
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let location = ($("input#inputLocation").val());
    let landmarks = ($("input#inputLandmarks").val());
    let time = ($("input#inputTime").val());
    let notes = ($("input#inputNotes").val());
    let place = new Place(location,landmarks,time,notes);
    places.addPlace(place);
    console.log(places);
  });
});

