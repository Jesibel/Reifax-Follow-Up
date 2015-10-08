//ANOTHER FILE
var fields = 0;
var outanother="";
var scntDiv 	= $('#browserCompEF');



function addInputComposeEF() {

		if (fields != 10) {
			document.getElementById('browserCompEF').innerHTML += '<div class="row"><div style="padding-left: 25px;padding-top: 10px;" class="col-xs-3 col-sm-2">Attach</div><div class="row"><div id="uuploadfile1" class="col-xs-8 col-sm-10"><input type="text" id="uploadFile1" placeholder="Select a file"/></div></div></div><div class="row"><div style="margin-left: 20px;padding-left: 25px;text-align:center;" class=" col-xs-8 col-sm-10"><div style="display: inline-flex;" class="fileUpload btn btn-primary"><span>Browser</span><input type="file" class="upload" id="uploadBtnCompose1" /></div></div></div><br>';				
			fields += 1;
		}else{
			
		}
	
}

//ANOTHER FILE
var fields2 = 0;
var outanother2="";
var scntDiv2 	= $('#browserReply');
function addInputReply() {
	//alert('another');
	//alert(fields2);
		if (fields2 != 10) {
			//alert('dentro if');
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			//outanother +="<input id='uploadFile'  name='field[]' class='form-control' placeholder='Choose File' disabled='disabled' />";
			//outanother +="<div  class='fileUpload btn btn-primary'>";
			//outanother +="<span>Browser</span>";
			//outanother +="<input id='uploadBtn' name='field[]'  type='file' class='upload' /></div>";				
			//document.getElementById('browser').style.display = "block";
			document.getElementById('browserReply').innerHTML += '<div class="row"><div style="padding-left: 25px;padding-top: 10px;" class="col-xs-3 col-sm-2">Attach</div><div class="row"><div id="uuploadfile1" class="col-xs-8 col-sm-10"><input type="text" id="uploadFile1" placeholder="Select a file"/></div></div></div><div class="row"><div style="margin-left: 20px;padding-left: 25px;text-align:center;" class=" col-xs-8 col-sm-10"><div style="display: inline-flex;" class="fileUpload btn btn-primary"><span>Browser</span><input type="file" class="upload" id="uploadBtnCompose1" /></div></div></div><br>';				
			fields2 += 1;
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browserComp").append(outanother);
}

//ANOTHER FILE
var fields3 = 0;
var outanother3="";
var scntDiv3 	= $('#browserForward');
function addInputForward() {
	//alert('another');
	//alert(fields2);
		if (fields3 != 10) {
			//alert('dentro if');
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			//outanother +="<input id='uploadFile'  name='field[]' class='form-control' placeholder='Choose File' disabled='disabled' />";
			//outanother +="<div  class='fileUpload btn btn-primary'>";
			//outanother +="<span>Browser</span>";
			//outanother +="<input id='uploadBtn' name='field[]'  type='file' class='upload' /></div>";				
			//document.getElementById('browser').style.display = "block";
			document.getElementById('browserForward').innerHTML += '<div class="row"><div style="padding-left: 25px;padding-top: 10px;" class="col-xs-3 col-sm-2">Attach</div><div class="row"><div id="uuploadfile1" class="col-xs-8 col-sm-10"><input type="text" id="uploadFile1" placeholder="Select a file"/></div></div></div><div class="row"><div style="margin-left: 20px;padding-left: 25px;text-align:center;" class=" col-xs-8 col-sm-10"><div style="display: inline-flex;" class="fileUpload btn btn-primary"><span>Browser</span><input type="file" class="upload" id="uploadBtnCompose1" /></div></div></div><br>';				
			fields3 += 1;
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browserComp").append(outanother);
}

/*function getfilterEmailFollow(){
	
	var id= JSON.parse(localStorage.getItem('key'));
	//AJAX GET FILTER EMAIL FOLLOW
	alert(id.parcelid);
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followemail.php',  
		type: 'POST',
		data: { 
		'userid': 3213,
		'parcelid':id.parcelid								
	}}).done(function (data){					
		alert(data);					
		var obj2 = JSON.parse(data);
		//console.debug(obj2);
		if(obj2.success) {								 
			var output = "";
			var all="ALL";
			var SMS="SMS";
			var FAX="FAX";
			var EMAIL="EMAIL";
			
			$.each(obj2.records, function( key, value ) {
			var datos = new Array();
			var valor = new Array();
			var i=0;
			//console.debug(obj2.results);
		$.each( value, function ( userkey, uservalue) {								
				if(userkey=='task'){
					datos[userkey]=uservalue;
					valor[i++]=userkey;
					//console.debug(userkey);									
				}									
			});
			
				//console.log(datos['task']);
				//output +='<option value="'+all+'">'+all+'</option>';
				
				if (datos['task']==1){					
					output +='<option value="1">'+SMS+'</option>';	
				}else if (datos['task']==6)	{
					output +='<option value="6">'+FAX+'</option>';	
				}else if (datos['task']==7)	{
					output +='<option value="7">'+EMAIL+'</option>';	
				}			
		});
							
			$("#emailTyp select").append(output);													
		}else{
			alert('else obj');
		}					
	});
	
}*/


function getComposeEmailFollow(id){
	
	var output = "";
	var output2 = "";
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	var county = JSON.parse(localStorage.getItem('county'));
	
	if (id==''){
		
		var id = JSON.parse(localStorage.getItem('key'));
		pid=id.parcelid;
		//alert(pid);
	}else{
		var i
		//alert('cargando'+id);
		var id = JSON.parse(localStorage.getItem('key'));
		pid=id.parcelid;
		//alert(pid);
		//pid = id.join();
	}
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'ContactEmailsList'
		}
	}).done(function (data){
		//alert(data);
		
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var no="NO";
					var none="None";
					
					
					//recorremos cada email
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada email
						
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agent' || userkey=='email'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						output +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						//output2 +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						
					});			
						//$('#toEmail').val(datos['agent']).selectmenu('refresh');
						$("#toEmailEF select").append(output);
						
						$("#toForward select").append(output);
						$("#ccForward select").append(output);
						$("#bccForward select").append(output);
						
						//$("#toEmailO select").append(output2);
				}					
					
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'getTemplateEmail',
			'idtemplate':3675,
			'pid':pid,
			'county':county.county
			},
		success: function(data, textStatus, jqXHR){
			//alert(data);			
			//var obj =JSON.stringify(data);
			var obj = JSON.parse(data);
			if(obj.success==true){
				//alert('Schedule Follow deleted');
				$("#subjectEF,#subjectForward").val(obj.subject);	
				$("#detailsEF,#textForward").val(obj.body);	
			}else{
				alert('error');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
			   alert('error');
		}
	});
	
	
}

function getReplyEmailFollow(){
	
	var output = "";
	var output2 = "";
	var id= JSON.parse(localStorage.getItem('key'));
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'emailtemplates',
			'newTemplate':false
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		if(obj.success) {
			var output = "";
			var no="NO";
			var none="None";
					
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.results, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada email
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='name' || userkey=='id'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						console.log(datos['name']);
						output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';					
						
					});			
						
						$("#templateReply select").append(output);

				}					
					
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'ContactEmailsList'
		}
	}).done(function (data){
		//alert(data);
		
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var no="NO";
					var none="None";
					
					
					//recorremos cada email
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada email
						
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agent' || userkey=='email'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						output2 +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						//output2 +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						
					});			
						
						$("#toReply select").append(output2);
				}					
					
	});
	
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'getTemplateEmail',
			'idtemplate':3675,
			'pid':id.parcelid,
			'county':'BROWARD'
			},
		success: function(data, textStatus, jqXHR){
			//alert(data);			
			//var obj =JSON.stringify(data);
			var obj = JSON.parse(data);
			if(obj.success==true){
				//alert('Schedule Follow deleted');
				$("#subjectReply").val(obj.subject);	
				$("#textReply").val(obj.body);	
			}else{
				alert('error');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
			   alert('error');
		}
	});
	
}

function detailEmailFollow(id){
	//alert('detalle del contacto');
	
		
		var output = "";
		var output2 = "";
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		//AJAX DETALLE EMAIL FROM
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailDetail',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				var obj = JSON.parse(data);
				if(obj.success) {
			
				
				$.each(obj.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='to_msg' || userkey=='fromName_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='body' || userkey=='seen'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					//console.log(datos['fromName_msg']);
						output +='<div style="height: 120px;" class="row">';
							output +='<div style="margin-bottom: 80px;" class="col-sm-12">';
								output +='<div class="row">';
									output +='<div class="col-md-3">';
										output +='<font style="font-size:16px;font-weight:bold;">'+datos['subject']+'</font>';
									output += '</div>';
									
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">From:&nbsp;'+datos['fromName_msg']+'</font>&nbsp;'+datos['from_msg']+'';
									output += '</div>';
										
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">To:</font>&nbsp;'+datos['to_msg']+'';
									output += '</div>';
									
									
								output += '</div>';
							output += '</div>';
						output += '</div>';	
						
						output +='<div class="row">';
							output +='<div style="margin-bottom: 80px;" class="col-sm-12">';
								output +='<div class="row">';
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;"></font>&nbsp;'+datos['body']+'';
									output += '</div>';
								
								output += '</div>';
							output += '</div>';
						output += '</div>';	
						
				
				});
					$("#detalleEmailFollow ul").append(output);
						
				}else{
								
					$("#detalleEmailFollow ul").html('No true! ');
								 
				}
				
		});
			
}

function sendEmailFollow(id,pid){
	
	
	$("#toEmaEF").prop("selected", true);
	var to 	= $("#toEmaEF option:selected").val();
	
	var subj = $("input#subjectEF").val();
	var body = $("textarea#detailsEF").val();
	var cuerpo = $("textarea#body").val();
	var upload =$("input#uploadFileEF").val();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;

	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: "POST",
		data: { 			
			'userid': userid,
			'type': 'composeEmail',
			'mailid': id,
			'pid': pid,
			'to': to,
			'subject': subj,
			'msg': body,
			'pid': pid 			
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
			if(data){
				//alert('properties delete');
				$.mobile.changePage('#EmailFollow');
			}else{
				alert('error');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
		  alert('error');
		}
		});
}


function deleteEmailFollow(id){
	//alert('detalle del contacto');
	
		var output = "";
		
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
		//AJAX DETALLE EMAIL BODY
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'type': 'delete',
				'pids': id
				},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				
				if(data){
					//alert('Email Follow Deleted');
					bootbox.alert({
						title: 'Delete Email Follow',
						message: 'Email Follow Sucessfully Deleted'
					});
					$.mobile.changePage('#EmailFollow');
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});		
				
}


function removeFilterEmailFollow(){
//alert('removiendo filtro email follow');
	$("input#fromMail").val("");
	$("input#toMail").val("");
	$("input#from").val("");
	$("input#emailContent").val("");
	$("input#dateBetween").val("");
	$("input#dateTo").val("");
	$("#emailType option:selected").val("-1");
	
	$("#correofollow ul").empty();
	var id = JSON.parse(localStorage.getItem('key'));
	var start = 0; 
	var limit = 25; 
	emailDetail(start, limit,id.parcelid);					

}
//"<a href="javascript:viewMailDetail(1444774,3213,'494234051243',tabsFollow,0,0,0,'Follow');" >View Content.</a>"
var tabsFollow ='';
function viewMailDetail(idemail, userid, parcelid){

	//alert(idemail);
	//alert(userid);
	//alert(parcelid);
	
	$("#detalleEmailFollow ul").empty();
	
	var idseen=0;
	var object = { 'email' : idemail };
	localStorage.setItem('email', JSON.stringify(object));
	var seen = { 'seen' : idseen };
	localStorage.setItem('seen', JSON.stringify(seen));
	
	$.mobile.changePage('#detailEmailFollow');
	/*var output = "";
		var output2 = "";
		//AJAX DETALLE EMAIL FROM
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/followupMailBody.php',  
				type: 'POST',
			    data: { 
				'userid': 3213,
				'mailid': idemail,
				'pid': parcelid,
				'tabs':'tabsFollowId',
				'county':0,
				'msg_date':0,
				'typemail': 0,
				'from':'Follow'
				}
		}).done(function (data){
			alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
				$.each(obj.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='to_msg' || userkey=='fromName_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='body' || userkey=='seen'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					//console.log(datos['fromName_msg']);
						output +='<div style="height: 120px;" class="row">';
							output +='<div style="margin-bottom: 80px;" class="col-sm-12">';
								output +='<div class="row">';
									output +='<div class="col-md-3">';
										output +='<font style="font-size:16px;font-weight:bold;">'+datos['subject']+'</font>';
									output += '</div>';
									
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">From:&nbsp;'+datos['fromName_msg']+'</font>&nbsp;'+datos['from_msg']+'';
									output += '</div>';
										
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">To:</font>&nbsp;'+datos['to_msg']+'';
									output += '</div>';
									
									
								output += '</div>';
							output += '</div>';
						output += '</div>';	
						
						output +='<div class="row">';
							output +='<div style="margin-bottom: 80px;" class="col-sm-12">';
								output +='<div class="row">';
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;"></font>&nbsp;'+datos['body']+'';
									output += '</div>';
								
								output += '</div>';
							output += '</div>';
						output += '</div>';	
						
				
				});
					$("#detalleEmailFollow ul").append(output);
					$('detailEmailFollow').page();
						
				}else{
								
					$("#detalleEmailFollow ul").html('Sorry, the content has been removed');
					$('detailEmailFollow').page();
								 
				}
				
		});*/

}


