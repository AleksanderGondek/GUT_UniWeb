function Task(name, start, length) {
	var name = name;
	var start = start;
	var length = length;

	this.isRunning = function(date) {
		// Dates in JS are beyond retarded - 2014-10-1 < this is November the 1st!
    	var tmp = start.split('-');
		var startDate = new Date(tmp[0],tmp[1],tmp[2]);
		var tmp = date.split('-');
		var today = new Date(tmp[0],tmp[1],tmp[2]);
		var tmp = start.split('-');
		var endDate = new Date(tmp[0],tmp[1],tmp[2]);
		endDate.setDate(endDate.getDate() + length);

		return today < endDate; 
	};

	this.getDescription = function() {
		return start + name + length;
	};
};

function SecondTask(name, start, length){ 
	this.name = name;
	this.start = start;
	this.length = length;
};

SecondTask.prototype.isRunning = function(date) {
    	var tmp = this.start.split('-');
		var startDate = new Date(tmp[0],tmp[1],tmp[2]);
		var tmp = date.split('-');
		var today = new Date(tmp[0],tmp[1],tmp[2]);
		var tmp = this.start.split('-');
		var endDate = new Date(tmp[0],tmp[1],tmp[2]);
		endDate.setDate(endDate.getDate() + this.length);

		return today < endDate; 
	};

SecondTask.prototype.getDescription = function() {
		return this.start + this.name + this.length;
	};


function Cost(name, start, length) {
	var cost = Object.create(new SecondTask(name, start, length));
	cost.getDescription = function() {
		return cost.length + cost.name + cost.start;
	}
	return cost;
}