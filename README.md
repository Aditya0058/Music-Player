# Music Player
![Music player screenshot](image.png)

## How to use it / Requirements 
- Head to music-player-tau-cyan.vercel.app/
- Once on homepage - > you see that '+ Add Songs' button. Yes that one. Click it
- Now you see that your file manager is poped up.
- Go to folder where your music in .mp3 format are present. Once reached select songs
- You can also select mutiple songs at  time by click once on particular song and then click on end of song list by holding shift key
- Now click 'Open' / 'Add'
- Hope you are seeing list of songs in left partition those you just selected.
- Good, you are almost there.
- Now click on the song that you have to play - You'll see the orage selector backgroud jumped on the song you clicked on, Yes thats the song is selected and it should be appearing on your right side partition of 'Now Playing'.
- Just click on 'Play' button and you'll see that songs is coming out of your speakers.
- Chill and enjoy your music with this music player. 
- And you know? that once songs reaches its end the next song automatically gets triggered and starts to play without you manually clicking on the next song play button.
- You need songs in format of .mp3 on your system to upload them in music player

## Features
- *Add songs* --> put songs from ur system
- *clear songs* ---> u can also delete the songs which were saved temporarily in ur system
- *Volume Controls*  --> U can increase, decrease and set volume level as default.
- *Music Controls* --> U can toggle, go to next, previous music
- *Live Music play-bar* --> u can also see live song duration completed amongst the total duration and also you can drag that proress bar to skip particular part or jump to particular part of ur music
- *Dark Ui* -> we have simple Dark UI
- *Auto Play* -> now as songs reaches to its end - the next song automatically triggers and start to play this gives it pure music player vibe.

## Tech Stack Used
- react -> component based UI
- CSS3 — Flexbox-based responsive layout
- HTML5 Audio API — Native browser audio playback
- Vercel — For deployment

## Why did I build this
- this was not mine idea but this was trail idea I got from YSWS so I decided to make this one cuz I was knowing that i am going to learn with this
- and btw I used react-vite first time so i learnt a lot with this project thats why it took me so long
- u can see the time I took to build this by my own here : https://hackatime.hackclub.com/@adityarajput/project/Music+Player
- If u liked my project please hit that star

**To test out this projcet just head to** : https://music-player-tau-cyan.vercel.app/

## For Developers
If you want to tweak this music player so  your welcome
- Use: git clone "https://github.com/Aditya0058/Music-Player.git"
-  Now u can see that this is react-vite based project written in javascript mostly. 
here are some things that you need to know about this project's archeticture 
1. there are some dummy songs for testing purpose in  /public
2. all main functions lies in app.jsx only and none of the funciton is there in child routes I decided to do this as this is small project. And I have just transfered funcitons to required child routes.
3. There are just 2 major components a) Library & b) NowPlaying. So it is not that much hard to figure out things.
I hope you will love this project's codebase.
Thank You 

_______________________
This project was made for submitting in YSWS 
