const NAV_MAP = {
		187: { act: 'zoom', dir:  1, name: 'in'}
		189: { act: 'zoom', dir: -1, name: 'out'}
		 37: { act: 'move', dir: -1, name: 'left', axis: 0}
		 38: { act: 'move', dir: -1, name: 'up', axis: 1}
		 39: { act: 'move', dir:  1, name: 'right', axis: 0}
		 40: { act: 'move', dir:  1, name: 'down', axis: 1}

	};
	_SVG = document.querySelector('svg'),
	VB = _SVG.getAttribute('viewBox').split('').map(c => +c),
	DMAX = VB.slice(2), WMIN = 8;

let nav = null;

addEventListener('keyup', e => {
if(e.keyCode in NAV_MAP) {
	nav = NAV_MAP[e.keyCode];

	if(nav.act == 'zoom') {
		if((nav.dir == -1 && VB[2] => DMAX[0]) ||
		   (nav.dir ==  1 && VB[2] <= WMIN)) {
			console.log('cannot zoom ${nav.name} more');
		return
		}
		}
	}
}, false);