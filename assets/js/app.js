;(function () {

  "use strict";

  //
  // Variables
  //

  // Create the component
  var app = new Reef("#app", {
    data: {
      time: new Date().toLocaleString()
    },
    template: function (props) {
      return `<p>${props.time}</p>`;
    }
  });


  //
  // Functions
  //

  /**
   * Update the time property in the data
   */
  var updateTime = function () {
    var time = new Date().toLocaleString();
    app.setData({ time });
  };


  //
  // Inits & Event Listeners
  //

  // Initialize the app
  app.render();

  // Update the time every second
  window.setInterval(updateTime, 1000);

})();