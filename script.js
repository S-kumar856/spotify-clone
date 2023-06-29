console.log("Welcome to Spotify")


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Na Roja nuvey", FilePath: "songs/1.mp3", coversPath: "covers/1.jpg"},
    {songName: "my love is gone", FilePath: "songs/2.mp3", coversPath: "covers/2.jpg"},
    {songName: "muje pene doo", FilePath: "songs/3.mp3", coversPath: "covers/3.jpg"},
    {songName: "ringa ringa", FilePath: "songs/4.mp3", coversPath: "covers/4.jpg"},
    {songName: "ishq wala love", FilePath: "songs/5.mp3", coversPath: "covers/5.jpg"},
    {songName: "priyathama", FilePath: "songs/6.mp3", coversPath: "covers/6.jpg"}
]

songItems.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=song[i].coversPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
    
});

//Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})



// audioElement.play();

// listen to events

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        // console.log(e.target);
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=(`songs/${songIndex}.mp3`);
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=(`songs/${songIndex}.mp3`);
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=(`songs/${songIndex}.mp3`);
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})