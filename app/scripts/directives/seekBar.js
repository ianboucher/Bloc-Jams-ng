(function () 
{
    function seekBar ($document) 
    {
        /*
        * function calculatePercent
        * @desc Calculates percent distance on seek bar where event occurred
        * @param {Object} seekBar, {Object} event
        */
        function calculatePercent (seekBar, event)
        {
            var offsetX        = event.pageX - seekBar.offset().left;
            var seekBarWidth   = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);
            
            return offsetXPercent;
        }
        
        
        return { // putting curly brace on next line results in syntax error
            templateUrl: "/templates/directives/seek_bar.html",
            replace: true,
            restrict: "E",
            scope: { },
            link: function (scope, element, attributes)
            {
                scope.value = 0;
                scope.max   = 100;
                
                var seekBar = $(element);
                
                var percentString = function ()
                {
                    var value   = scope.value;
                    var max     = scope.max;
                    var percent = value / max * 100;
                    return percent + "%";
                };
                
                
                scope.fillWidth = function () 
                {
                    return { width: percentString() };
                };
                
                scope.thumbPosition = function ()
                {
                    return { left: percentString() }
                }
                
                /*
                * function onClickSeekBar
                * @desc Updates seek bar value based on user's click on the bar
                * @param {Object} event
                */
                scope.onClickSeekBar = function (event)
                {
                    var percent = calculatePercent(seekBar, event);
                    
                    scope.value = percent * scope.max;
                };
                 
                /*
                * function trackThumb
                * @desc Uses $apply to constantly upadate scope.value as user drags thumb
                * @param {Object} event
                */
                scope.trackThumb = function (event)
                {                     
                    $document.bind("mousemove.thumb", function (event)
                    {
                        var percent = calculatePercent(seekBar, event);
                        
                        scope.$apply(function ()
                        {
                            scope.value = percent * scope.max;
                        });
                    });
                    
                    $document.bind("mouseup.thumb", function()
                    {
                        $document.unbind("mousemove.thumb");
                        $document.unbind("mouseup.thumb");
                    });  
                };
            }
        };
    }
    
    angular
        .module("blocJams")
        .directive("seekBar", ["$document", seekBar]);
})();