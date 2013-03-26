/*jslint maxerr:1000 */

var _htmlTemplate = "<html><head><script type='text/javascript'> function runWorker(path,value,token){ var worker = new Worker(path); Ti.API.debug('started'); worker.postMessage({ level: value });worker.onmessage = function (event) { Ti.API.debug( 'WebWorkerMessage:'+ JSON.stringify(event) ); Ti.App.fireEvent( '__WORKER__' + token, { data: event.data } );}; worker.onerror = function(event){ Ti.API.error( 'WebWorkerError:'+ JSON.stringify(event) ); Ti.App.fireEvent( '__WORKER_ERROR__' + token, { data: event } );};}; </script>";   
    
var worker = function(){
	
	this.start = function(path,seed,callback){
		var startTime = new Date();
		var token = new Date().getTime() + '';
		var fakeUI = {
			win : Ti.UI.createWindow({
		        opacity : 0, top:0, right:1, width:0,height:0
		    }),		    
			webView : Ti.UI.createWebView({
				width:0, height:0, visible:false, focusable:false, html: _htmlTemplate,
			})
		};
		fakeUI.win.add(fakeUI.webView);
		
		var actions = {
			removeListeners :function(){
				Ti.App.removeEventListener("__WORKER__" + token,actions.onFinish);	
				Ti.App.removeEventListener("__WORKER_ERROR__"+ token,actions.onError);			
			},
			whenFinished : function(e){
				fakeUI.win.close();	
				actions.removeListeners();	
				e.elapsed = ((new Date().getTime()) - startTime.getTime());	
				callback(e);			
			},
			onError :function(e){
				var returnObject = {
					success:false,
					seed:seed,
					error: e.data
				};	
				actions.whenFinished(returnObject);		
			},
			onFinish : function(e){
				var returnObject = {
					success:true,
					seed:seed,
					result: e.data
				};
				actions.whenFinished(returnObject);
			}			
		};
		
		
		Ti.App.addEventListener("__WORKER__" + token,actions.onFinish);
		Ti.App.addEventListener("__WORKER_ERROR__"+ token,actions.onError);
		
		fakeUI.win.addEventListener('open',function(d){
			setTimeout(function()
			{
				fakeUI.webView.evalJS("runWorker('" + path + "'," + seed + ",'" + token + "')");
			},100);										
		});
		fakeUI.win.open();
						 
	};	
	
};
module.exports = worker;