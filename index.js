function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  module.exports = {
    logShout,
    logWhisper
  };

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  module.exports = {
    logWhisper
  };
  
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    }

  }
  
  module.exports = {
    sayHiToHeadphonedRoommate
  };

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    }
 
  }
  
  module.exports = {
    sayHiToHeadphonedRoommate
  };

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
   
  }
  
  module.exports = {
    sayHiToHeadphonedRoommate
  };