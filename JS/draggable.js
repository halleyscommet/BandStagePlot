$(function() {
  // Make the elements draggable
  $("#drums, #e-guitar, #b-guitar, #mic-stand, #mic, #g-amp, #b-amp, #p-board, #keyboard, #stage-monitor, #person")
    .click(function(event) {
      // Clone the element on double click
      var $clone = $(this).clone();

      // Make the clone draggable and resizable
      $clone.draggable()

      $clone.css("cursor", "move");
      $clone.css("position", "absolute");

      // Add the clone to the container
      $(".main").append($clone);
    });
});

$(".sidenav").droppable({
  accept: "#drums, #e-guitar, #b-guitar, #mic-stand, #mic, #g-amp, #b-amp, #p-board, #keyboard, #stage-monitor, #person",
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});