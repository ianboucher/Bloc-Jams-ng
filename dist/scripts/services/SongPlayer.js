(function ()
{
    function SongPlayer()
    {
        var SongPlayer        = {};
            
        /*
        * @desc Stores the currently playing song
        * @type {Object}
        */
        var currentSong       = null;
        
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
            if (currentBuzzObject)
            {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, 
            {
                formats: ["mp3"],
                preload: true
            });

            currentSong = song;
        }
        
        /*
        * @function playSong
        * @desc Starts playing the 'song' object and sets its status to 'playing'
        * @param {Object} song
        */   
        function playSong(song)
        {
            currentBuzzObject.play();
            song.playing = true;
        }
              
        /*
        * @function play
        * @desc Plays the selected new or paused song
        * @param {Object} song
        */
        SongPlayer.play = function(song)
        {
            if (currentSong !== song)
            {
                setSong(song);
                playSong(song);
            }
            else if (currentSong === song)
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
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        return SongPlayer;
    }
    
    angular
        .module("blocJams")
        .factory("SongPlayer", SongPlayer);
})();