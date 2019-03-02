function Vehicle() {
	this.engines = 1;
	this.beep = function beep() {
		console.log('BEEP');
	}
}

Vehicle.prototype.ignition = function ignition() {
	console.log('Turning on my engine.');
}

Vehicle.prototype.drive = function drive() {
	this.ignition();
	console.log('Steering and moving forward!');
}

let mitsu = new Vehicle();

let sentra = {
	engines: 1,
	beep: function beep() {
		console.log('BEEP');
	}
}

let tester = function() {}