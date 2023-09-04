// console.log('hii iam omkar');
// alert('test the code');
let music = new Audio('resource/audio/song-13.mp3');
let songs = [
    {
        id: '1',
        ArtistName: 'Gadar-2',
        songName_q: `<p class="upper-line ">Gaddar-2<br><span class="lower-line">Mithoon, Uttam Singh</span></p>`,
        poster: 'resource/hindi-img-1.jpeg'
    },
    {
        id: '2',
        ArtistName: 'Alvida',
        songName_q: `  <p class="upper-line ml">Alvida<br><span class="lower-line"> Nikhil D'Souza</span></p>`,
        poster: 'resource/hindi-img-2.jpeg'
    },
    {
        id: '3',
        ArtistName: 'Kho Gaye',
        songName_q: `<p class="upper-line ml">Kho Gaye <br><span class="lower-line">Taaruk Raina</span></p>`,
        poster: 'resource/hindi-img-3.jpeg'
    },
    {
        id: '4',
        ArtistName: 'Pahali Dafa',
        songName_q: `<p class="upper-line ml">Pahali Dafa<br><span class="lower-line">Atif Aslam</span></p>`,
        poster: 'resource/hindi-img-4.jpeg'
    },
    {
        id: '5',
        ArtistName: 'Pathan',
        songName_q: `<p class="upper-line ml">Pathan<br><span class="lower-line">Arijit Singh, Sukriti Kakar
        </span></p>`,
        poster: 'resource/hindi-img-5.jpeg'
    },
    {
        id: '6',
        ArtistName: 'Meri Galati',
        songName_q: ` <p class="upper-line ml">Meri Galati<br><span class="lower-line">Ambili Menon</span></p>`,
        poster: 'resource/hindi-img-6.jpeg'
    },
    {
        id: '7',
        ArtistName: 'marjawa',
        songName_q: ` <p class="upper-line ml">Marjjawa <br><span class="lower-line">Arijit Singh</span></p>`,
        poster: 'resource/hindi-img-7.jpeg'
    },
    {
        id: '8',
        ArtistName: 'Bhulla Dunga',
        songName_q: ` <p class="upper-line ml">Bhula Dunga <br><span class="lower-line">Naushad Khan</span></p>`,
        poster: 'resource/hindi-img-8.jpeg'
    },
    {
        id: '9',
        ArtistName: 'Kabil',
        songName_q: `<p class="upper-line ml">Kabil <br><span class="lower-line"> Jubin Nautiyal</span></p>`,
        poster: 'resource/hindi-img-9.jpeg'
    },
    {
        id: '10',
        ArtistName: 'Tory Lanez ',
        songName_q: ` <p class="upper-line ml">KLOK <br><span class="lower-line">Tory Lanez </span></p>`,
        poster: 'resource/eng-img-1.jpeg'
    },
    {
        id: '11',
        ArtistName: 'One Direction',
        songName_q: `<p class="upper-line ml">Party Night<br><span class="lower-line">One Direction</span></p>`,
        poster: 'resource/eng-img-2.jpeg'
    },
    {
        id: '12',
        ArtistName: 'Katy party',
        songName_q: `<p class="upper-line ml">you<br><span class="lower-line">Katy party </span></p>`,
        poster: 'resource/eng-img-3.jpeg'
    },
    {
        id: '13',
        ArtistName: 'Camila Cabillo',
        songName_q: `<p class="upper-line ml">Havana <br><span class="lower-line">Camila Cabillo</span></p>`,
        poster: 'resource/eng-img-4.jpeg'
    },
    {
        id: '14',
        ArtistName: 'Saulja Boys',
        songName_q: `<p class="upper-line ml">Rockstar<br><span class="lower-line">Saulja Boys</span></p>`,
        poster: 'resource/eng-img-5.jpeg'
    },
    {
        id: '15',
        ArtistName: 'BADSHAH',
        songName_q: `<p class="upper-line ml">Toxic<br><span class="lower-line">BADSHAH</span></p>`,
        poster: 'resource/eng-img-6.jpeg'
    },
    {
        id: '16',
        ArtistName: 'Nick Caves',
        songName_q: `<p class="upper-line ml">Red Right Hand <br><span class="lower-line">Nick Caves</span></p>`,
        poster: 'resource/eng-img-7.jpeg'
    },
    {
        id: '17',
        ArtistName: 'Param singh',
        songName_q: `<p class="upper-line ml">Daru Badnam <br><span class="lower-line">Param singh</span></p>`,
        poster: 'resource/eng-img-8.jpeg'
    },
    {
        id: '18',
        ArtistName: 'Roar',
        songName_q: ` <p class="upper-line ml">Roar <br><span class="lower-line">Katy Perry</span></p>`,
        poster: 'resource/eng-img-9.jpeg'
    },
    {
        id: '19',
        ArtistName: 'bear bear & friends',
        songName_q: `<p class="upper-line ml">Glow Night <br><span class="lower-line">bear bear & friends</span></p>`,
        poster: 'resource/eng-img-10.jpeg'
    },
    {
        id: '20',
        ArtistName: 'Gurru Randhawa',
        songName_q: `<p class="upper-line ">Morni<br><span class="lower-line">Aug 23 2024</span></p>`,
        poster: 'resource/new-release-1.jpeg'
    },
    {
        id: '21',
        ArtistName: 'Honey singh',
        songName_q: `  <p class="upper-line ml">Blue Eyes<br><span class="lower-line"> Aug 23 2021</span></p>`,
        poster: 'resource/new-release-2.jpeg'
    },
    {
        id: '22',
        ArtistName: 'Meharbaan',
        songName_q: `<p class="upper-line ml">Meharbaan <br><span class="lower-line">Aug 22 2022</span></p>`,
        poster: 'resource/new-release-3.jpeg'
    },
    {
        id: '23',
        ArtistName: 'Harnoor',
        songName_q: `<p class="upper-line ml">Taare<br><span class="lower-line">Sep 12 2023</span></p>`,
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
let songId = 0;
let audioControlPoster = document.getElementById('poster-audio-controller');
let audioControlContent = document.getElementById('audioControllerTittle');
Array.from(document.getElementsByClassName('songList')).forEach((el) => {
    el.addEventListener('click', (em) => {
        songId = em.currentTarget.id;
        songId++;
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

        // let songcontent = songs.filter(els => {
        //     return els.id == songId;
        // });
        // songcontent.forEach(elss => {
        //     let { songName_q } = elss;
        //     audioControlContent.outerHTML = songName_q;
        // });
        for (let i = 1; i <= songs.length-4; i++) {
          if(songId==songs[i].id)
            audioControlContent.outerHTML = songs[i].songName_q;
        }
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
