"use strict"

angular
    .module("blocJams")
    .filter("timecode", function timecode()
        {
            return function(timeInMiliseconds)
            {
                timeInMiliseconds = Number.parseFloat(timeInMiliseconds)

                var formattedTime    = null,
                    wholeSeconds     = Math.floor(timeInMiliseconds / 1000),
                    minutes          = Math.floor(wholeSeconds / 60),
                    remainingSeconds = (wholeSeconds% 60);

                if (Number.isNaN(timeInMiliseconds))
                {
                    formattedTime = "-:--";
                }
                else
                {
                    if (remainingSeconds < 10)
                    {
                        remainingSeconds = "0" + remainingSeconds
                    };

                    formattedTime = minutes + ":" + remainingSeconds;
                }

                return formattedTime;
            };
        }
    );
