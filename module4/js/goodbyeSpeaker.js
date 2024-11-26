(function (window) {
    // Create the goodbyeSpeaker object
    var goodbyeSpeaker = {};
  
    // Attach a speak function to the object
    goodbyeSpeaker.speak = function (name) {
      console.log("Goodbye " + name);
    };
  
    // Expose the goodbyeSpeaker object to the global scope
    window.goodbyeSpeaker = goodbyeSpeaker;
  })(window);
  