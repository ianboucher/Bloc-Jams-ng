(function()
{

    
    function PlayerBarCtrl(Fixtures, SongPlayer, $interval)
    {
        this.albumData  = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;

        $interval(function() 
        {
          SongPlayer.getCurrentTime();
        }, 250);
        
    }
    
    angular
        .module("blocJams")
        .controller("PlayerBarCtrl", ["Fixtures", "SongPlayer", "$interval", PlayerBarCtrl])
})();