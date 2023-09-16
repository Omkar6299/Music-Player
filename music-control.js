// console.log('hii iam omkar');
// alert('test the code');
let music = new Audio('resource/audio/song-13.mp3');
let songs = [
    {
        id: '1',
        ArtistName: 'Gadar-2',
        songName_q: `Gaddar-2<br><span class="lower-line">Mithoon, Uttam Singh</span>`,
        poster: 'resource/hindi-img-1.jpeg'
    },
    {
        id: '2',
        ArtistName: 'Alvida',
        songName_q: `  Alvida<br><span class="lower-line"> Nikhil D'Souza</span>`,
        poster: 'resource/hindi-img-2.jpeg'
    },
    {
        id: '3',
        ArtistName: 'Kho Gaye',
        songName_q: `Kho Gaye <br><span class="lower-line">Taaruk Raina</span>`,
        poster: 'resource/hindi-img-3.jpeg'
    },
    {
        id: '4',
        ArtistName: 'Pahali Dafa',
        songName_q: `Pahali Dafa<br><span class="lower-line">Atif Aslam</span>`,
        poster: 'resource/hindi-img-4.jpeg'
    },
    {
        id: '5',
        ArtistName: 'Pathan',
        songName_q: `Pathan<br><span class="lower-line">Arijit Singh, Sukriti Kakar
        </span>`,
        poster: 'resource/hindi-img-5.jpeg'
    },
    {
        id: '6',
        ArtistName: 'Meri Galati',
        songName_q: ` Meri Galati<br><span class="lower-line">Ambili Menon</span>`,
        poster: 'resource/hindi-img-6.jpeg'
    },
    {
        id: '7',
        ArtistName: 'marjawa',
        songName_q: ` Marjjawa <br><span class="lower-line">Arijit Singh</span>`,
        poster: 'resource/hindi-img-7.jpeg'
    },
    {
        id: '8',
        ArtistName: 'Bhulla Dunga',
        songName_q: ` Bhula Dunga <br><span class="lower-line">Naushad Khan</span>`,
        poster: 'resource/hindi-img-8.jpeg'
    },
    {
        id: '9',
        ArtistName: 'Kabil',
        songName_q: `Kabil <br><span class="lower-line"> Jubin Nautiyal</span>`,
        poster: 'resource/hindi-img-9.jpeg'
    },
    {
        id: '10',
        ArtistName: 'Tory Lanez ',
        songName_q: ` KLOK <br><span class="lower-line">Tory Lanez </span>`,
        poster: 'resource/eng-img-1.jpeg'
    },
    {
        id: '11',
        ArtistName: 'One Direction',
        songName_q: `Party Night<br><span class="lower-line">One Direction</span>`,
        poster: 'resource/eng-img-2.jpeg'
    },
    {
        id: '12',
        ArtistName: 'Katy party',
        songName_q: `you<br><span class="lower-line">Katy party </span>`,
        poster: 'resource/eng-img-3.jpeg'
    },
    {
        id: '13',
        ArtistName: 'Camila Cabillo',
        songName_q: `Havana <br><span class="lower-line">Camila Cabillo</span>`,
        poster: 'resource/eng-img-4.jpeg'
    },
    {
        id: '14',
        ArtistName: 'Saulja Boys',
        songName_q: `Rockstar<br><span class="lower-line">Saulja Boys</span>`,
        poster: 'resource/eng-img-5.jpeg'
    },
    {
        id: '15',
        ArtistName: 'BADSHAH',
        songName_q: `Toxic<br><span class="lower-line">BADSHAH</span>`,
        poster: 'resource/eng-img-6.jpeg'
    },
    {
        id: '16',
        ArtistName: 'Nick Caves',
        songName_q: `Red Right Hand <br><span class="lower-line">Nick Caves</span>`,
        poster: 'resource/eng-img-7.jpeg'
    },
    {
        id: '17',
        ArtistName: 'Param singh',
        songName_q: `Daru Badnam <br><span class="lower-line">Param singh</span>`,
        poster: 'resource/eng-img-8.jpeg'
    },
    {
        id: '18',
        ArtistName: 'Roar',
        songName_q: ` Roar <br><span class="lower-line">Katy Perry</span>`,
        poster: 'resource/eng-img-9.jpeg'
    },
    {
        id: '19',
        ArtistName: 'bear bear & friends',
        songName_q: `Glow Night <br><span class="lower-line">bear bear & friends</span>`,
        poster: 'resource/eng-img-10.jpeg'
    },
    {
        id: '20',
        ArtistName: 'Gurru Randhawa',
        songName_q:`Morni<br><span class="lower-line">Gurru Randhawa</span>`,
        poster: 'resource/new-release-1.jpeg'
    },
    {
        id: '21',
        ArtistName: 'Honey singh',
        songName_q: `  Blue Eyes<br><span class="lower-line"> Honey singh</span>`,
        poster: 'resource/new-release-2.jpeg'
    },
    {
        id: '22',
        ArtistName: 'Meharbaan',
        songName_q: `Meharbaan <br><span class="lower-line">Meharbaan</span>`,
        poster: 'resource/new-release-3.jpeg'
    },
    {
        id: '23',
        ArtistName: 'Harnoor',
        songName_q: `Taare<br><span class="lower-line">Harnoor</span>`,
        poster: 'resource/new-release-4.jpeg'
    }
]

Array.from(document.getElementsByClassName('song-horizontal')).forEach((elm, i) => {
    elm.getElementsByTagName('img')[0].src = songs[i].poster;
    elm.getElementsByTagName('p')[0].innerHTML = songs[i].ArtistName;
    elm.getElementsByTagName('span')[0].innerHTML = "sep 23 2025";
});
//Audio Controller
let audioPlay = document.getElementById('audio-play');
audioPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        audioPlay.classList.remove('fa-circle-play');
        audioPlay.classList.add('fa-circle-pause');
    } else {
        music.pause();
        audioPlay.classList.add('fa-circle-play');
        audioPlay.classList.remove('fa-circle-pause');
    }
})


//Audio song changer Index by uniqe id
let songId;
let audioControlPoster = document.getElementById('poster-audio-controller');
var audioControlContent = document.getElementById('audioControllerTittle');
Array.from(document.getElementsByClassName('songList')).forEach((el) => {
    el.addEventListener('click', (em) => {
        songId = em.currentTarget.id;
        //content of masterPlay
        for (let index in songs) {
            if(songId!=songs[index].id)
               continue;
            else{
                audioControlContent.innerHTML = songs[index].songName_q;
                break;
            }
          }
        //songId++;
        music.src = `resource/audio/song-${songId}.mp3`;
        music.play();
        //for hindi song
        if (songId < 10) {
            audioControlPoster.src = `resource/hindi-img-${songId}.jpeg`
        }
        //for new release song section
        else if (songId >= 20 && songId <= 23) {
            music.src = `resource/audio/new-song-${songId}.mp3`;
            audioControlPoster.src = `resource/new-release-${songId - 19}.jpeg`
            music.play();
        }
        else {
            audioControlPoster.src = `resource/eng-img-${songId - 9}.jpeg`
        }
        audioPlay.classList.remove('fa-circle-play');
        audioPlay.classList.add('fa-circle-pause');
    });
});

//time on audio controller
let curTime = document.getElementById('currentStart');
let endTime = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', () => {
    let song_cur = music.currentTime;
    let song_dur = music.duration;
    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    curTime.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(song_dur / 60);
    let sec2 = Math.floor(song_dur % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    endTime.innerText = `${min2}:${sec2}`;

    //progress bar
    let progressbar = parseInt((song_cur / song_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * (music.duration / 100)
});

//volume up and down
let vol = document.getElementById('vol');
let volBar = document.getElementById('volBar');
let volDot = document.getElementById('volDot');
vol.addEventListener('change', () => {
    let Volume = vol.value;
    volBar.style.width = `${Volume}%`;
    volDot.style.left = `${Volume}%`;
    music.volume = Volume / 100;
})
function Popup() {
    let x = document.getElementById("popup-box");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}