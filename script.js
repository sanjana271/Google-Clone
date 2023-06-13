/*for welcome */
console.log("Welcome to Spotify");

//intizalize the variables

let songIndex = 0;//0th index song will be played intially.
let audioElement = new Audio('songs/1.mp3');/*name of file */
let masterPlay = document.getElementById('masterPlay');//id of play button
let myProgressBar = document.getElementById('myProgressBar');//id of progress bar
let gif = document.getElementById('gif');//for turning on/off gif.
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


//now focus on prev next and play button
//for songs to play lets make a array
let songs = [
    //for songs to play lets make a array
    //filepath means where the song is situated.
    { songName: "Our heros joining tonight", filePath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    { songName: "Stuck in a dream", filePath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "I cant fall in love", filePath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Red skies laugh now", filePath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "You are my sunshine", filePath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Happens for a Reason", filePath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "My heart will go on", filePath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "Was doing just fine", filePath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songName: "Yes im believer", filePath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { songName: "Happiness in life", filePath: "songs/10.mp3", coverpath: "covers/10.jpg" },
]
//for covers u can also use getElementsByTagName;
//for songs u can also use getElementsByClassName;
//this uses let song container .
//for each will assign song to each class.
//i as we iterate through songs container.
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;//you will get all covers.
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;//you will get all songs
});

//now when time change we use https://www.w3schools.com/tags/av_event_timeupdate.asp#:~:text=The%20timeupdate%20event%20occurs%20when,point%20in%20the%20audio%2Fvideo)
//When the playing position of a video has changed, display the current position of the video in seconds
//i.e. time update event. DOM

/* to play song*/
/*as we are gonna change song we will use let */
//as we dont want to play it continously
//audioElement.play();


//and we want to play when someone click on play button.and it should give name of a song and music gif should start

//handle play pause click
//if someone clicked on masterplay 
//the audio is either playing or not hence the if-else condition.
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        //if audioelement is pause or time is 0 which means audio is not playing.
        //so we will make it play.
        audioElement.play();

        //as we start playing we will remove play icon and add pause icon i.e. user will see that now pause will ne change into play
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    //now we will pause audio
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Event with audioElement
//arrow function
//doing timeupdate event
audioElement.addEventListener('timeupdate', () => {
    //update Seekbar i.e. moving forward as song is listend.
    //use maths here
    //we will get how much time we listen in % so use parseInt() function

    //progress is determined by currentTime and total time of song. and use formula:
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    //so it will show how much time it is played in console i.e. timeupdate
    //now udpate progressbar as it is shows how much time  it is played.
    //dont forget to make myprogessbar value as 0.
    myProgressBar.value = progress;
})
//to move song forward or backw by slider 


myProgressBar.addEventListener('change',()=>{
    //like when prgress bar will be change audio will be there .
    //but the value is in % so we will change it into duration.
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

})

//create a function.it will make all buttons play.
//i.e. once you click one button the the others will be pause and only that button will play.
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');//remove pause
        element.classList.add('fa-play-circle');
    })
}

//for each song to play we 1st give class in i class as songItemPlay
//document as we use documents and for each as we want to iterate list
//use Array.from as we ara gonna fetch it from array.
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

//for changing the songs from a list:
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    //if click at addEventListener then
    element.addEventListener('click', (e)=>{
        //console.log(e.target); //e.target wii give you element on which you clicked.
        makeAllPlays();//create a function.it will make all buttons play.
        songIndex = parseInt(e.target.id);//id of each song start from 0. and song index intially 0 then it will update.
        e.target.classList.remove('fa-play-circle');//we remove a play button.
        e.target.classList.add('fa-pause-circle');//we add a pause button.
        audioElement.src= `songs/${songIndex+1}.mp3`;//we use `` here .
        masterSongName.innerText = songs[songIndex].songName; //to chang the current song title in dowm slider bar we will use songs array.
        audioElement.currentTime = 0;//as song changes.
        audioElement.play();//play audio
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//1st add id for previous and next
//to work prvious and next button
//this means if anyone is clicking on next button then run this function.
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){//as last song is 9th index
        songIndex=0;//by default 1st song.
    }
    else{
        songIndex +=1;//increase by one.
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; //to chang the current song title in dowm slider bar we will use songs array.
    audioElement.currentTime = 0;//as song changes time will be 0.
    audioElement.play();//play audio
    masterPlay.classList.remove('fa-play-circle');//change icons of play and pause.
    masterPlay.classList.add('fa-pause-circle');
})

//now for previous button
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){//as 1st song is at 0th indexedDB.
        songIndex=0;//by default 1st song.
    }
    else{
        songIndex -=1;//decrease by one.
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; //to chang the current song title in dowm slider bar we will use songs array.
    audioElement.currentTime = 0;//as song changes time will be 0.
    audioElement.play();//play audio
    masterPlay.classList.remove('fa-play-circle');//change icons of play and pause.
    masterPlay.classList.add('fa-pause-circle');
})




//pause the songs you are playing from a list
//play pause not working right in list when you change a song
//default song is whenever playing it is not showing in list song.
//make it responsive. & media query for song name in bottom
//next song should be played automatically
//when you try to change duration its little bit slow.
