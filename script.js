let songIndex = 0;
let audioElement = new Audio("./1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementByClassName("songItem"));

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

songItems.forEach(element, (i) => {
  element.getElementByTagName("img")[0].src = songs[i].filePath;
});

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    console.log("playing audio");
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 0;
  }
});

//Listen to Events;
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar;
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
