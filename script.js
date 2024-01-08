let songIndex = 0;
let audioElement = new Audio("./1.jpg");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
  {
    songName: "let me love you",
    filePath: "./1.mp3",
    coverPath: "./1.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./2.mp3",
    coverPath: "./2.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./3.mp3",
    coverPath: "./3.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./4.mp3",
    coverPath: "./4.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./5.mp3",
    coverPath: "./5.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./6.mp3",
    coverPath: "./6.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./7.mp3",
    coverPath: "./7.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./8.mp3",
    coverPath: "./8.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./9.mp3",
    coverPath: "./9.jpg",
  },
  {
    songName: "let me love you",
    filePath: "./10.mp3",
    coverPath: "./10.jpg",
  },
];

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  }
});

//Listen to Events;
myProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar;
});
