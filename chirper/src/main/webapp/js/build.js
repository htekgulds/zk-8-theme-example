(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
    * Created by Hasan TEKGÜL
    * on 13.12.2015.
    */
zk.afterMount(function () {
    zkbind.$('$labelCount').after('doLabelChange', function (evt) {
        jq('#labelCount').text("Count: " + evt);
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaGFzYW5cXFdlYlxcR2l0XFx6ay04LXRoZW1lLWV4YW1wbGVcXGNoaXJwZXJcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGhhc2FuXFxXZWJcXEdpdFxcemstOC10aGVtZS1leGFtcGxlXFxjaGlycGVyXFxzcmNcXG1haW5cXGphdmFzY3JpcHRcXGZha2VfNjFlNGZhMTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztNQUVNO0FBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZO0lBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxVQUFVLEdBQUcsRUFBRTtRQUMxRCxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUMzQyxDQUFDLENBQUM7Q0FDTixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gICAgKiBDcmVhdGVkIGJ5IEhhc2FuIFRFS0fDnExcclxuICAgICogb24gMTMuMTIuMjAxNS5cclxuICAgICovXHJcbnprLmFmdGVyTW91bnQoZnVuY3Rpb24gKCkge1xyXG4gICAgemtiaW5kLiQoJyRsYWJlbENvdW50JykuYWZ0ZXIoJ2RvTGFiZWxDaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAganEoJyNsYWJlbENvdW50JykudGV4dChcIkNvdW50OiBcIiArIGV2dCk7XHJcbiAgICB9KTtcclxufSk7Il19
