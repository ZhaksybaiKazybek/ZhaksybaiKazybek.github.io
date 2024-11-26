(function (window) {
    // Create the helloSpeaker object
    var helloSpeaker = {};
  
    // Attach a speak function to the object
    helloSpeaker.speak = function (name) {
      console.log("Hello " + name);
    };
  
    // Expose the helloSpeaker object to the global scope
    window.helloSpeaker = helloSpeaker;
  })(window);
  