var my = {
	workerMod : require('Ti.WebWorkerWrapper'),
	isAndroid : Ti.Platform.osname === 'android'
};

(function () {
    
    var win = Ti.UI.createWindow({
        backgroundColor: '#fff', title: 'Web Workers', 
        barColor:'#000',layout:'vertical',fullscreen:false
    });
      
	win.add(Ti.UI.createLabel({
		top:20, height:25, left:5, right:5,color:'#000',
		textAlign:'left',text:'Using Web Worker Sample', 
		font:{fontSize:16, fontWeight:'bold'}
	}));

	win.add(Ti.UI.createLabel({
		top:10, height:65, left:5, right:5,color:'#000',
		textAlign:'left',text:'This sample runs the Fibonacci sequence using web workers to demonstrate how to perform multi-threaded calculations in Titanium', 
		font:{fontSize:14}
	}));
	
	var worker1 = Ti.UI.createLabel({
		top:20, height:25, left:5, right:5,color:'#000',
		textAlign:'left',text:'Not yet processed - Press Button', 
		font:{fontSize:14, fontWeight:'bold'}
	});
	win.add(worker1);	

	var worker2 = Ti.UI.createLabel({
		top:20, height:25, left:5, right:5,color:'#000',
		textAlign:'left',text:'Not yet processed - Press Button', 
		font:{fontSize:14, fontWeight:'bold'}
	});
	win.add(worker2);	

	var worker3 = Ti.UI.createLabel({
		top:20, height:25, left:5, right:5,color:'#000',
		textAlign:'left',text:'Not yet processed - Press Button', 
		font:{fontSize:14, fontWeight:'bold'}
	});
	win.add(worker3);	

	var worker4 = Ti.UI.createLabel({
		top:20, height:25, left:5, right:5,color:'#000',
		textAlign:'left',text:'Not yet processed - Press Button', 
		font:{fontSize:14, fontWeight:'bold'}
	});
	win.add(worker4);	
		
	var runButton = Ti.UI.createButton({
		title:'Run Web Worker Test', top:40,
		left:10, right:10, height:50, 
	});
	win.add(runButton);
	
	var tests = {
		setProcessing : function(){
			worker1.text ="Processing...";
			worker2.text ="Processing...";
			worker3.text ="Processing...";
			worker4.text ="Processing...";
		},
		updateLabel : function(label,e){
			label.text = "Seed:" + e.seed + " result:" + e.result + " elapsed:" + e.elapsed + "ms";
		},
		worker1 : function(e){
			tests.updateLabel(worker1,e);			
		},
		worker2 : function(e){
			tests.updateLabel(worker2,e);	
		},
		worker3 : function(e){
			tests.updateLabel(worker3,e);	
		},
		worker4 : function(e){
			tests.updateLabel(worker4,e);	
		},		
	    random : function(from,to){
		    return Math.floor(Math.random()*(to-from+1)+from);
		}						
	};
	
	runButton.addEventListener('click',function(e){
		
		tests.setProcessing();
		
		var worker1 = new my.workerMod();		
		worker1.start('fibonacci.js',tests.random(1,50),tests.worker1);
		
		var worker2 = new my.workerMod();
		worker2.start('fibonacci.js',tests.random(1,50),tests.worker2);
		
		var worker3 = new my.workerMod();
		worker3.start('fibonacci.js',tests.random(1,50),tests.worker3);

		var worker4 = new my.workerMod();
		worker4.start('fibonacci.js',tests.random(1,50),tests.worker4);
								 		
	});
	
	win.addEventListener('open', function(e){
		if(my.isAndroid){
			alert('This recipe only supports iOS');
		}
	});
	
    win.open({modal:true});
        
})();    

