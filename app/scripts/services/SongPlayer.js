(function ()
{
    function SongPlayer(Fixtures) // Inject Fixtures service to enable access to album info
    {
        var SongPlayer = {};
        
        /*
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
                
        /*
        * @desc Stores current album information
        * @type {Object}
        */
        var currentAlbum = Fixtures.getAlbum();

        /*
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */        
        function setSong(song)
        {
            if (currentBuzzObject)
            {
                currentBuzzObject.stop(); // not sure why I can't use stopSong function here
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, 
            {
                formats: ["mp3"],
                preload: true
            });

            SongPlayer.currentSong = song;
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
        * @function getSongIndex
        * @desc Finds the index of 'song' within the album song list
        * @param {Object} song
        * @returns {Number}
        */
        function getSongIndex(song)
        {
            return currentAlbum.songs.indexOf(song);
        }
                    
        /*
        * @desc Stores the currently playing song
        * @type {Object}
        */
        SongPlayer.currentSong = null;
        
        /*
        * @function play
        * @desc Plays the selected new or paused song
        * @param {Object} song
        */
        SongPlayer.play = function(song)
        {
            // enable PlayerBar to use this method without access to 'song' object
            song = song || SongPlayer.currentSong; 
            
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
        };
        
        
        /*
        * @function next
        * @desc Sets the current song to the next song from the album list
        * @param {Object} song
        */
        SongPlayer.next = function(song)
        {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex += 1;
            
            if (currentSongIndex > currentAlbum.songs.length - 1)
            {
                stopSong(SongPlayer.currentSong) // why can't I pass 'song' here?
            }
            else
            {
                var song = currentAlbum.songs[currentSongIndex];
                
                setSong(song);
                playSong(song);
            }
        };
        
        /*
        * @function previous
        * @desc Sets the current song to the previous song from the album list
        * @param {Object} song
        */
        SongPlayer.previous = function(song)
        {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex -= 1;
            
            if (currentSongIndex < 0)
            {
                stopSong(SongPlayer.currentSong); // why can't I pass 'song' here?
            }
            else
            {
                var song = currentAlbum.songs[currentSongIndex];
                
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module("blocJams")
        .factory("SongPlayer", SongPlayer);
})();