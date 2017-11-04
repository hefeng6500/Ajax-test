window.onload = function () {
	var XHR=null;  
	if (window.XMLHttpRequest) {  
	    // 非IE内核  
	    XHR = new XMLHttpRequest();  
	} else if (window.ActiveXObject) {  
	    // IE内核,这里早期IE的版本写法不同,具体可以查询下  
	    XHR = new ActiveXObject("Microsoft.XMLHTTP");  
	} else {  
	    XHR = null;  
	}  
	if(XHR){
		debugger
		if(XHR.readyState == 0){
	        	console.log('0：请求未初始化，还没有调用 open()')
	        }
	    XHR.open("GET", "data/index.json");
	    if(XHR.readyState == 1){
        	console.log('1：请求已经建立，但是还没有发送，还没有调用 send() ')
       }
	    XHR.onreadystatechange = state_Change;

	      
	} else {
		alert("Your browser does not support XMLHTTP.");
	}
	XHR.send();

	    function state_Change() {  
	        // readyState值说明  
	        // 0：请求未初始化，还没有调用 open()
	        // 1：请求已经建立，但是还没有发送，还没有调用 send()
	        // 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）
	        // 3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成
	        // 4：响应已完成；您可以获取并使用服务器的响应了
	  
	        // status值说明  
	        // 200:成功  
	        // 404:没有发现文件、查询或URl  
	        // 500:服务器产生内部错误  
	        
	        if(XHR.readyState == 2){
	        	console.log('2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）')
	        }
	        if(XHR.readyState == 3){
	        	console.log('3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成')
	        }
	        if (XHR.readyState == 4 && XHR.status == 200) {  
	            // 这里可以对返回的内容做处理  
	            // 一般会返回JSON或XML数据格式  
	            console.log(XHR.responseText);  
	            // 主动释放,JS本身也会回收的  
	            XHR = null;  
	        }
	    }
}