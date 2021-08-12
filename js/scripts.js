// Business Logic
function place(location,landmarks,time,notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

let place1 = new place("Istanbul", "b", "c", "o")

// UI Logic
$(document).ready(function() {
  $("#place1").text(place1.location);
  $("#stuff1").text(place1.landmarks + " " + place1.time + " " + place1.notes);
  $("#place1").click(function(){
    $("#stuff1").show()
  });
});

