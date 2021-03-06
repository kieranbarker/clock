;(function () {

  "use strict";

  //
  // Variables
  //

  // Create the component
  const app = new Reef("#app", {
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
  function updateTime () {
    app.data.time = new Date().toLocaleString();
  }


  //
  // Inits & Event Listeners
  //

  // Initialize the app
  app.render();

  // Update the time every second
  window.setInterval(updateTime, 1000);

})();