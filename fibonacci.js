
function fibonacci(n){
    var g = (1 + Math.sqrt(5)) / 2;
    return Math.round((Math.pow(g,n) - Math.pow(-g,-n)) / Math.sqrt(5));
};

self.onmessage = function(event){
	var level = event.data.level;
	var n = fibonacci(level);
	postMessage(n);	
};



