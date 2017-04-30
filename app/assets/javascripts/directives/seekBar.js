(function(){

    "use strict"

    angular
        .module("blocJams")
        .directive("seekBar", [
            "$document",

            function seekBar($document)
            {
                /*
                * function calculatePercent
                * @desc Calculates percent distance on seek bar where event occurred
                * @param {Object} seekBar, {Object} event
                */
                function calculatePercent (seekBarElem, event)
                {
                    var rect           = seekBarElem.getBoundingClientRect(),
                        offsetX        = event.pageX - (rect.left + document.body.scrollLeft),
                        seekBarWidth   = seekBarElem.offsetWidth,
                        offsetXPercent = offsetX / seekBarWidth;

                    offsetXPercent = Math.max(0, offsetXPercent);
                    offsetXPercent = Math.min(1, offsetXPercent);

                    return offsetXPercent;
                }


                return {
                    "templateUrl": "directives/seek_bar.html",
                    "replace": true,
                    "restrict": "E",
                    "scope": {
                        onChange: "&"
                    },

                    link: function(scope, element, attributes)
                    {
                        scope.value = 0;
                        scope.max   = 100;

                        var seekBarElem = element[0];

                        attributes.$observe("value", function observeValue(newValue)
                        {
                            scope.value = newValue;
                        });

                        attributes.$observe("max", function observeMax(newValue)
                        {
                            scope.max = newValue;
                        });

                        /*
                        * function percentString
                        * @desc Calculates % distance along seek bar where event
                        * occured and returns string for use in styles
                        * @returns {String}
                        */
                        var percentString = function()
                        {
                            var value   = scope.value,
                                max     = scope.max,
                                percent = (value / max) * 100;

                            return percent + "%";
                        };

                        /*
                        * function notifyOnChange
                        * @desc Pass changed scope.value to the onChange attribute and
                        * execute the expression declared on that attribute in the HTML
                        */
                        function notifyOnChange(newValue)
                        {
                            if (typeof scope.onChange === "function")
                            {
                                scope.onChange({"value": newValue});
                            }
                        }

                        /*
                        * function fillWidth
                        * @desc Returns a CSS width property:value string, where value
                        * is the % distance along the seek bar
                        * @returns {String} event
                        */
                        scope.fillWidth = function()
                        {
                            return {
                                "width" : percentString()
                            };
                        };

                        /*
                        * function thumbPosition
                        * @desc Returns a CSS width property:value string, where value
                        * is the % offset position along the seek bar
                        * @returns {String} event
                        */
                        scope.thumbPosition = function()
                        {
                            return {
                                "left" : percentString()
                            };
                        };

                        /*
                        * function onClickSeekBar
                        * @desc Updates seek bar value based on user's click on the bar
                        * @param {Object} event
                        */
                        scope.onClickSeekBar = function(event)
                        {
                            var percent = calculatePercent(seekBarElem, event);

                            scope.value = percent * scope.max;
                            notifyOnChange(scope.value)
                        };

                        /*
                        * function trackThumb
                        * @desc Uses $apply to constantly upadate scope.value as user drags thumb
                        * @param {Object} event
                        */
                        scope.trackThumb = function($event)
                        {
                            var $thumb = angular.element($event.target);
                            $document.on("mousemove", function dragThumb(event)
                            {
                                var percent = calculatePercent(seekBarElem, event);

                                scope.$apply (function ()
                                {
                                    scope.value = percent * scope.max;
                                    notifyOnChange(scope.value)
                                });
                            });

                            $document.on("mouseup", function clearThumbListeners()
                            {
                                $document.off("mousemove");
                                $document.off("mouseup");
                            });
                        };
                    }
                };
            }
        ]);
})();
