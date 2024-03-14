function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

console.log(whisper("HELLO"));

function logShout(str) {
  console.log(shout(str));
}

function logWhisper(str) {
  console.log(whisper(str));
}

function sayHiToHeadphonedRoommate(str) {
  if (str === str.toLowerCase()) {
    return "I can't hear you!";
  } else if (str === str.toUpperCase()) {
    return "YES INDEED!";
  } else if (str === `Let's have dinner together!`) {
    return "I would love to!";
  }
}
