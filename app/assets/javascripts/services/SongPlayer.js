"use strict";

angular
    .module("blocJams")
    .service("SongPlayer", ["$http",
        function SongPlayer($http)
        {
            var SongPlayer = {};

            /*
            * @desc Buzz object audio file
            * @type {Object}
            */
            var currentBuzzObject = null;

            /*
            * @function setSong
            * @desc Stops currently playing song and loads new audio file as currentBuzzObject
            * @param {Object} song
            */
            function setSong(song)
            {
                if (SongPlayer.currentSong && SongPlayer.currentSong.playing)
                {
                    stopSong (SongPlayer.currentSong)
                }

                currentBuzzObject = new buzz.sound (song.audioURL,
                {
                    formats: ["mp3"],
                    preload: true
                });

                currentBuzzObject.bind("timeupdate", function (event)
                {
                    // use Bean library to fire timeupdate event on SongPlayer
                    // TODO: encapsulate Bean in my own "Event Service"
                    bean.fire(SongPlayer, "timeupdate");
                });

                SongPlayer.currentSong = song;
                bean.fire(SongPlayer, "songupdate");
            }


            /*
            * @function playSong
            * @desc Starts playing song and sets its status to 'playing'
            * @param {Object} song
            */
            function playSong(song)
            {
                currentBuzzObject.play();
                song.playing = true;
            }

            /*
            * @function stopSong
            * @desc Stops playing song and sets its playing status to 'null'
            * @param {Object} song
            */
            function stopSong(song)
            {
                currentBuzzObject.stop();
                song.playing = null;
            }

            /*
            * @desc Stores album information currently being viewed
            * @type {Object}
            */
            SongPlayer.displayedAlbum = {};

            /*
            * @desc Stores album information for the currently playing song
            * @type {Object}
            */
            SongPlayer.currentAlbum = {};

            /*
            * @desc Stores the currently playing song
            * @type {Object}
            */
            SongPlayer.currentSong = {};

            /*
            * @desc Stores the index of the currently playing song
            * @type {Number}
            */
            SongPlayer.currentSongIndex = null;

            /*
            * @desc Current playback time (in seconds) of currently playing song
            * @type {Number}
            */
            SongPlayer.currentTime = null;

            /*
            * @desc Stores the current volume setting
            * @type {Number}
            */
            SongPlayer.volume = 80;

            /*
            * @desc Stores the maximum volume setting
            * @type {Number}
            */
            SongPlayer.maxVolume = 100;

            /*
            * @function play
            * @desc Plays the selected new or paused song
            * @param {Object} song
            */
            SongPlayer.play = function(song, index)
            {
                // enable PlayerBar to use this method without access to 'song' object
                song  = song  || SongPlayer.currentSong;

                if (index || index === 0)
                {
                    SongPlayer.currentSongIndex = index;
                }

                if (SongPlayer.currentSong !== song)
                {
                    setSong(song);
                    playSong(song);
                }
                else if (SongPlayer.currentSong === song)
                {
                    if (currentBuzzObject.isPaused())
                    {
                        playSong(song);
                        bean.fire(SongPlayer, "songupdate")
                    }
                };
            };

            /*
            * @function pause
            * @desc Pauses the selected playing song
            * @param {Object} song
            */
            SongPlayer.pause = function(song)
            {
                // enable PlayerBar to use this method without access to 'song' object
                song = song || SongPlayer.currentSong;

                currentBuzzObject.pause();
                song.playing = false;
                bean.fire(SongPlayer, "songupdate");
            };

            /*
            * @function next
            * @desc Sets the current song to the next song from the album list
            */
            SongPlayer.next = function()
            {
                var currentSongIndex = SongPlayer.currentSongIndex += 1;

                if (currentSongIndex > SongPlayer.currentAlbum.songs.length - 1)
                {
                    stopSong (SongPlayer.currentSong)
                }
                else
                {
                    var song = SongPlayer.currentAlbum.songs[currentSongIndex];

                    setSong(song);
                    playSong(song);
                }
            };

            /*
            * @function previous
            * @desc Sets the current song to the previous song from the album list
            */
            SongPlayer.previous = function()
            {
                var currentSongIndex = SongPlayer.currentSongIndex -= 1;

                if (currentSongIndex < 0)
                {
                    stopSong(SongPlayer.currentSong);
                }
                else
                {
                    var song = SongPlayer.currentAlbum.songs[currentSongIndex];

                    setSong(song);
                    playSong(song);
                }
            };

            /*
            * @function setCurrentTime
            * @desc Sets the current playback time of the current song
            */
            SongPlayer.setCurrentTime = function (time)
            {
                if (currentBuzzObject)
                {
                    currentBuzzObject.setTime(time);
                }
            };

            /*
            * @function getCurrentTime
            * @desc Gets the current playback time of the current song
            */
            SongPlayer.getCurrentTime = function ()
            {
                if (currentBuzzObject)
                {
                    return currentBuzzObject.getTime();
                }
            };

            /*
            * @function setVolume
            * @desc Sets the volume level
            */
            SongPlayer.setVolume = function (volume)
            {
                if (currentBuzzObject)
                {
                    currentBuzzObject.setVolume(volume);
                }
            };

            return SongPlayer;
        }
    ]);
