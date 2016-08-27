"use strict"

angular
    .module("blocJams")
    .filter("timecode", function timecode ()
        {
            return function (timeInSeconds)
            {
                timeInSeconds = Number.parseFloat(timeInSeconds)

                var formattedTime    = null;
                var wholeSeconds     = Math.floor(timeInSeconds);
                var minutes          = Math.floor(wholeSeconds / 60);
                var remainingSeconds = (wholeSeconds% 60);

                if (Number.isNaN(timeInSeconds))
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
