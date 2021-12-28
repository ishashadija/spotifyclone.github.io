console.log("welcome to javascript")
// Initiallize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById("masterSongName");
let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Bandeya" , filePath: "songs/1.mp3", coverPath: "images/bg.jpg"},
    {songName: "Lo safar", filePath: "songs/2.mp3", coverPath: "images/bg.jpg"},
    {songName: "Tum se", filePath: "songs/3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Bolna", filePath: "songs/4.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Dua", filePath: "songs/5.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Naina", filePath: "songs/6.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Deewani Mastani", filePath: "songs/7.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Hasi Ban gaye", filePath: "songs/8.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Lo safar", filePath: "songs/9.mp3.mp3", coverPath: "images/bg.jpg"},
    {songName: "Lo safar", filePath: "songs/10.mp3.mp3", coverPath: "images/bg.jpg"},


]

songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        // progress = (parseInt(audioElement.currentTime/audioElement.duration)*100);
        myprogressbar.value = progress;
    })  
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    // progress = (parseInt(audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    // progress = ((parseIntaudioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
