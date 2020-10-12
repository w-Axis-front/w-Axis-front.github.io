function Timer() {};
Timer.prototype._getTimeRemaining = function(endTime) {
	var parseTime = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor( (parseTime/1000) % 60 ),
        minutes = Math.floor( (parseTime/1000/60) % 60 ),
        hours = Math.floor( (parseTime/(1000*60*60)) % 24 );
    return {
        'total': parseTime,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
Timer.prototype._initializeClock = function(el, endTime, selectors) {
	var hoursSpan = this._clock.querySelector(selectors[0] || '.hours'),
        minutesSpan = this._clock.querySelector(selectors[1] || '.minutes'),
        secondsSpan = this._clock.querySelector(selectors[2] || '.seconds'),
        self = this;

    function updateClock() {
        var time = self._getTimeRemaining(endTime);
        hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
        if(time.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
Timer.prototype.startTimer = function(el, deadLine, selectors) {
	if(el && deadLine) {
		this._clock = document.getElementById(el);
		this._deadLine = deadLine;
	}
	this._initializeClock(this._clock, this._deadLine, selectors);
	return this;
}

function Scrolling() {
	Timer.apply(this, arguments);
};
Scrolling.prototype = Object.create(Timer.prototype);
Scrolling.prototype.constructor = Scrolling;
Scrolling.prototype.slowScroll = function(el, scrollSpeed) {
	if(el) this.el = $(el);
	this.el.on('click', function(e){
		var _linkHref = $(this).attr('href'),
			_top,
			_topMenu = $('header > nav');
		if(_linkHref.length > 1 && _linkHref.slice(0, 1) == '#'){
			_top = $(_linkHref).offset().top;
			if(_topMenu.length > 0 && _topMenu.css('position') == 'fixed') {
				_top -= _topMenu.height();
			}
			$('body, html').animate({ scrollTop: _top }, scrollSpeed);
			e.preventDefault();
		}
		else if(_linkHref.slice(0, 1) !== '#') return;
		return false;
	});
	return this;
}

function IEStyle() {
	Scrolling.apply(this, arguments);
}
IEStyle.prototype = Object.create(Scrolling.prototype);
IEStyle.prototype.constructor = IEStyle;
IEStyle.prototype.checkBrowser = function(str, params) {
	if(str) {
		this.changeStyle(params);
	}
	//return this;
}
IEStyle.prototype.changeStyle = function(params) {
	$(params.target).each(function(){
		$(this).css(params.stylesName, params.stylesProperty);
	});
	//return this;
}
IEStyle.prototype.initChangeStyles = function(str, params) {
	this.checkBrowser(str, params);
	return this;
}

function App(){
	IEStyle.apply(this, arguments);
}
App.prototype = Object.create(IEStyle.prototype);
App.prototype.constructor = App;