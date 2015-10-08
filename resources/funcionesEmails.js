function listadoEmailsInbox(start, limit){
	
	//var start = 0; 
    //var limit = 25; 
	
	$("#ematyI").prop("selected", true);
	var emailType 	= $("#ematyI option:selected").val();
	if (emailType==0){
		emailType=-1;
	}
	$("#attach").prop("selected", true);
	var attachment 	= $("#attach option:selected").val();
	if (attachment=="-Select-"){
		attachment=-1;
	}
	//alert(attachment);
	$("#pencontI").prop("selected", true);
	var pendingCont = $("#pencontI option:selected").val();
	if (pendingCont=="-Select-"){
		pendingCont=-1;
	}
	
	$("#penproI").prop("selected", true);
	var pendingPro 	= $("#penproI option:selected").val();
	if (pendingPro=="-Select-"){
		pendingPro=-1;
	}
	
	$("#staI").prop("selected", true);
	var status 	= $("#staI option:selected").val();
	if (status=="-Select-"){
		status=-1;
	}
	
			
	$("#emadateI").prop("selected", true);
	var emaildate = $("#emadateI option:selected").val();
			
					
	var frommail = $("input#frommailI").val();
	var from      = $("input#fromI").val();
	var mailContent = $("input#emailcontentI").val();	
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
		
		
	busy=true;
	
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			   data: { 
				'userid': userid,
				'typeEmail': 0,
				'email': frommail,
				'name': from,
				'content': mailContent,
				'etype': emailType,
				'attach': attachment,
				'pcontact': pendingCont,	
				'pproperty': pendingPro,
				'sort': 'msg_date DESC', 
				'start':start,
				'limit':limit
				}
			}).done(function (data){
				//alert(data);
				busy=false;
				loadmail=true;
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
							if(userkey=='idmail' || userkey=='userid' || userkey=='address' || userkey=='agent' || 
							   userkey=='fromName_msg' || userkey=='from_msg' || userkey=='msg_date' || userkey=='seen' || 
							   userkey=='subject' || userkey=='task' || userkey=='to_msg' || userkey=='ap' || userkey=='ac' ||
							   userkey=='attachments'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
					//var date = moment(datos['msg_date']).format('DD MMM YY');
					var year = moment(datos['msg_date']).format('YYYY');
					if (year>=2015){
					var date = moment(datos['msg_date']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['msg_date']).format('MM/DD/YY');
					}
						
						
			if(datos['seen']==0){
				output += '<li  id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" idto="'+datos['to_msg']+'" class="seenB" style="list-style: none;border-bottom: 2px solid #ccc;">';     
					output +='<div idmail="'+datos['idmail']+'" style="margin-top:5px;height:30px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
									
						if (datos['task']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
						}else if (datos['task']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
						}else if (datos['task']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
						}else if (datos['task']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
						}else if (datos['task']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
						}else if (datos['task']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
						}else if (datos['task']==1){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
						}else if (datos['task']==3){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
						}else if (datos['task']==5){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
						}else if (datos['task']==7){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
						}else if (datos['task']==9){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
						}else if (datos['task']==11){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
						}else if (datos['task']==13){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
						}else if (datos['task']==15){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
						}else if (datos['task']==17){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
						}
						
						if (datos['attachments']==1){
							output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/clipB-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
						
						if (datos['ac']==0 && datos['ap']==-1){
							//output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
						}else if (datos['ac']==0 && datos['ap']!=-1){
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az-No.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']!=-1 && datos['ap']==0){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Tiene">';
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az-No.png" no-repeat scroll 0px -40px transparent title="Assign Property">';
						}else if (datos['ac']!=0 && datos['ap']!=-1){							
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az.png" no-repeat scroll 0px -40px transparent title="Tiene">';
						}
						
					
					output += '</div>';	 
					
					//output +='<div id="info-email0" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" style="margin-bottom:15px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
					
					output +='<div id="info-email0" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" class="row">';
						output +='<div style="padding-left:5px;padding-right:5px;" class="col-sm-12">';
							output +='<div class="row">';
								
									output +='<div style="padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6 col-md-10 ">';									
										
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +=''+datos['fromName_msg']+'';											
										output += '</div>';
	
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
										
										output +='<div style="text-align:right;" class="col-md-6">';
											output +='<font style="font-size:12px;">'+date+'</font>';
										output += '</div>';
									
									
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
			}else if(datos['seen']==1){
					output += '<li  id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" class="seenN" style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div idmail="'+datos['idmail']+'" style="margin-top:5px;height:30px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
								
						if (datos['task']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
						}else if (datos['task']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
						}else if (datos['task']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
						}else if (datos['task']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
						}else if (datos['task']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
						}else if (datos['task']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
						}else if (datos['task']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
						}else if (datos['task']==3){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
						}else if (datos['task']==5){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
						}else if (datos['task']==7){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
						}else if (datos['task']==9){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
						}else if (datos['task']==11){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
						}else if (datos['task']==13){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
						}else if (datos['task']==15){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
						}else if (datos['task']==17){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
						}
						
						if (datos['attachments']==1){
							output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/clipB-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
						if (datos['ac']==0 && datos['ap']==-1){
							//output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
						}else if (datos['ac']==0 && datos['ap']!=-1){
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az-No.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']!=-1 && datos['ap']==0){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Tiene">';
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az-No.png" no-repeat scroll 0px -40px transparent title="Assign Property">';
						}else if (datos['ac']!=0 && datos['ap']!=-1 && datos['ap']!=0){							
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
							output+='<img onclick="assiProperty('+datos['ac']+','+datos['ap']+','+datos['idmail']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az.png" no-repeat scroll 0px -40px transparent title="Tiene">';
						}
						
					output += '</div>';
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';	*/	 
					
					//output +='<div id="info-email1" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" style="margin-bottom:15px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
					
					output +='<div id="info-email1" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" class="row">';
						output +='<div style="padding-left:5px;padding-right:5px;" class="col-sm-12">';
							output +='<div class="row">';
								
									output +='<div style="padding-left: 5px;" class="col-xs-12 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;style="padding-left:5px;padding-right:5px;"" class="col-md-3">';										
												output +=''+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
										
										output +='<div style="text-align:right;" class="col-md-6">';
											output +='<font style="font-size:12px;">'+date+'</font>';
										output += '</div>';
										
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
						//output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
						
							//alert(obj.total+' >='+start);
							
							console.log(obj.total)
							if (obj.total!=0){
								$("#emails ul").append(output);
							}else{
								$("#emails ul").html('No result! ');
							}
							
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#emails ul").html('No true! ');
						 
					}
					
									
						
					
				});
	
}

function assiProperty(agentid,parcelid,idemail){

	$("#toEmailHouse select").empty();
	$('#assignPropertyHouse').modal('show');
	var object = { 'agentid' : agentid };
	var object2 = { 'email' : idemail };
	var object3 = { 'parcelid' : parcelid };
	localStorage.setItem('agentid', JSON.stringify(object));
	localStorage.setItem('email', JSON.stringify(object2));
	localStorage.setItem('key', JSON.stringify(object3));
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'agentid': agentid,
			'type': 'searchPropertyAgent',
			'query': ''
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
			$.each(obj.records, function( key, value ) {
				//recorremos los valores de cada email
				var datos = new Array();
				var valor = new Array();
				var i=0;
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='address' || userkey=='parcelid'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}
				});
							
				output +='<option value="'+datos['parcelid']+'">'+datos['address']+'</option>';

						
			});			
				//$('#toEmail').val(datos['agent']).selectmenu('refresh');
				
				$("#toEmailHouse select").append(output);
					
		}					
					
	});

}

function listadoEmailsOutbox(start, limit){

	$("#ematyO").prop("selected", true);
	var emailType 	= $("#ematyO option:selected").val();
	if (emailType==0){
		emailType=-1;
	}
	$("#attachO").prop("selected", true);
	var attachment 	= $("#attachO option:selected").val();
	if (attachment=="-Select-"){
		attachment=-1;
	}
	
	$("#pencontO").prop("selected", true);
	var pendingCont = $("#pencontO option:selected").val();
	if (pendingCont=="-Select-"){
		pendingCont=-1;
	}
	
	$("#penproO").prop("selected", true);
	var pendingPro 	= $("#penproO option:selected").val();
	if (pendingPro=="-Select-"){
		pendingPro=-1;
	}
	
	$("#staO").prop("selected", true);
	var status 	= $("#staO option:selected").val();
	if (status=="-Select-"){
		status=-1;
	}
			
	$("#emadateO").prop("selected", true);
	var emaildate = $("#emadateO option:selected").val();
			
					
	var frommail = $("input#frommailO").val();
	var from      = $("input#fromO").val();
	var mailContent = $("input#emailcontentO").val();
	
	busy=true;
	//alert(mailContent);
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			   data: { 
				'userid': userid,
				'typeEmail': 1,
				'email': frommail,
				'toemail': from,
				'content': mailContent,
				'etype': emailType,
				'attach': attachment,
				'pcontact': pendingCont,	
				'pproperty': pendingPro,
				'sort': 'msg_date DESC', 
				'start':start,
				'limit':limit
				}
			}).done(function (data){
				//alert(data);
				busy=false;
				loadmailO=true;
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
							if(userkey=='idmail' || userkey=='userid' || userkey=='address' || userkey=='agent' || 
							   userkey=='fromName_msg' || userkey=='from_msg' || userkey=='msg_date' || userkey=='seen' || 
							   userkey=='subject' || userkey=='task' || userkey=='to_msg' || userkey=='ap' || userkey=='ac' ||
							   userkey=='attachments'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						
						//var date = moment(datos['msg_date']).format('DD MMM YY');
						var year = moment(datos['msg_date']).format('YYYY');
						if (year>=2015){
						var date = moment(datos['msg_date']).format('DD MMM');
						}else if (year<2015){
						var date = moment(datos['msg_date']).format('MM/DD/YY');
						}
						
						//alert(datos['attachments']);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="seenN" style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div idmail="'+datos['idmail']+'" style="margin-top:5px;height:30px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
						
						if (datos['task']==1){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
						}else if (datos['task']==3){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
						}else if (datos['task']==5){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
						}else if (datos['task']==7){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
						}else if (datos['task']==9){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
						}else if (datos['task']==11){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
						}else if (datos['task']==13){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
						}else if (datos['task']==15){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
						}else if (datos['task']==17){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
						}
								
						if (datos['attachments']==1){
							output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/clipV-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
						if (datos['ac']==0 && datos['ap']==-1){
							//output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_green-No.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']==0 && datos['ap']!=-1){
							output+='<img onclick="assiProperty2('+datos['ac']+','+datos['ap']+','+datos['idmail']+',\''+datos['address']+'\');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_green.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']!=-1 && datos['ap']==0){
							//output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/house_az.png" no-repeat scroll 0px -40px transparent title="Assign Property">';
						}else if (datos['ac']!=0 && datos['ap']!=-1){
							//output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/person-80.png" no-repeat scroll 0px -40px transparent title="Tiene">';
						}	
						
						
								
					output += '</div>';
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';	*/	 
					//output +='<div  style="margin-bottom:15px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
					
					output +='<div id="info-outbox" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';
								
								output +='<div style="padding-left: 0px;" class="col-xs-12 col-sm-6 col-md-10">';
									
									output +='<div style="font-size: 16px;" class="col-xs-12 col-md-3">';										
											output +=''+datos['to_msg']+'';											
									output += '</div>';
									
									/*output +='<div style="font-weight: bold;" class="col-md-3">';
										output +='From Mail:&nbsp;'+datos['from_msg']+'';
									output += '</div>';*/
									
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
									output += '</div>';
									
									output +='<div style="text-align:right;" class="col-md-3">';
										output +='<font style="font-size:12px;">'+date+'</font>';
									output += '</div>';
									
								
								
								output += '</div>';
								
							output += '</div>';
							//output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
						
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
						
							//alert(obj.total+' >='+start);
							if (obj.total!=0){
								$("#emailsOutbox ul").append(output);
							}else{
								$("#emailsOutbox ul").html('No result! ');
							}
							
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#emailsOutbox ul").html('No true! ');
						 
					}
					
									
						
					
				});

}

function assiProperty2(agentid,parcelid,idemail,address){

	$("#toEmailHouse select").empty();
	$('#assignPropertyHouse').modal('show');
	var object = { 'agentid' : agentid };
	var object2 = { 'email' : idemail };
	var object3 = { 'parcelid' : parcelid };
	localStorage.setItem('agentid', JSON.stringify(object));
	localStorage.setItem('email', JSON.stringify(object2));
	localStorage.setItem('key', JSON.stringify(object3));
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	//alert(address);
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'agentid': agentid,
			'type': 'searchPropertyAgent',
			'query': ''
		}
	}).done(function (data){
		//alert(data);		
		var obj = JSON.parse(data);
		//alert(obj.success);
		if(obj.success) {
			var output = "";
			var no="NO";
			var none="None";
			var y=0;							
			//recorremos cada email
			$.each(obj.records, function( key, value ) {
				//recorremos los valores de cada email
				var datos = new Array();
				var valor = new Array();
				var i=0;
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='address' || userkey=='parcelid'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}
				});
				
				if (y==0){
					output +='<option value="'+parcelid+'">'+address+'</option>';
					y++;
				}
				output +='<option value="'+datos['parcelid']+'">'+datos['address']+'</option>';

						
			});			
				//$('#toEmail').val(datos['agent']).selectmenu('refresh');
				
				$("#toEmailHouse select").append(output);
					
		}					
					
	});

}

function goBackEmail(){
	//alert('go back');
	$('#detalleCorreo ul').empty();
	$('#detalleCorreo ul').html('');
	$('#detalleEmailCab ul').html('');	
	
	$.mobile.navigate( "#emailHtml" );
	//alert(checkid);
	if (checkid!=''){
		
		pushh=true;
		//longProperties(checkid,pushh);
		var id = JSON.parse(localStorage.getItem('seen'));
		longEmailInbox(checkid,id.seen,pushh);
	}
	//var longPush=true;
	//document.getElementById('header_two').style.display = "none";	
}

function longEmailInbox(id,idseen,pushh){

	//alert(id);

	if(checkid.length==0){
	
		var ch= checkid.push(id)				
		document.getElementById('primero'+id).style.background = '#A9D0F5';
		document.getElementById('header_emailInbox').style.display = "block";
				
		var div = document.createElement("div");
		//div.style.width = "40px";
		div.style.height = "40px";
		div.style.background = "gray";
		div.style.color = "white";
		div.style.marginTop="-40px";
		div.style.textAlign = "right";
		//div.className = "logo";
		div.id = "logoEmailInbox";
			
		var div2 = document.getElementById("header_emailInbox"); 
		// agregamos la imagen
		div2.appendChild(div);
		
		$(".box").hide();	   
		$(".box2").hide();	   
		$(".box3").hide();
		$(".box4").hide();
		$(".box5").hide();
			   
		//crear ancla para Aceptar
		var ace = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
		ace.style.marginRight = "200px";
		ace.style.marginTop = "2px";
		ace.style.height = "35px";
		//ace.setAttribute("href","#menuProperty");
		ace.onclick = function(){
			//alert('aceptar');
			//document.getElementById('header_two').style.display = "none";
			//location.reload(true);
			div2.removeChild(div);
			var idaux=0;
			//alert("entre por else");
			//alert(checkid.length);
			for(i=0;i<checkid.length;i++){
				//alert("test"+id);			 
				if(checkid[i] == id){ 
					idaux = id;
				}			 
			}
			if(idaux == id){ 
				//alert("si lo encontro");
				for(i=0;i<checkid.length;i++){ 
					if(checkid[i] == id){ 
						//alert("encontrado"); 
						//alert(checkid[i]); 
						//aki quiero borrar vector[i] 
						var checkid_old=""+checkid;
						var myarray = checkid_old.split(",");
						function removeByIndex(checkid, id) {
							checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
						}
						//alert("Array before removing elements: "+checkid);
						removeByIndex(checkid, i);
							
						for (var f = 0, len = myarray.length; f<len;f++){
							document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
						}
									
						//alert("Array after removing elements: "+checkid);
									
						document.getElementById('header_emailInbox').style.display = "none";
						document.getElementById('logoEmailInbox').style.display = "none";
						div2.removeChild(div);
						//fin aki				  
					}
									//alert(checkid);				
				}	
				
			}else{
						
				checkid.push(id)
									
				//alert(checkid+'else');
				document.getElementById('primero'+id).style.background = '#A9D0F5';
							
				//document.getElementById('primero'+id).style.height="30px"; 
				//document.getElementById('primero'+id).style.width="30px"; 
									
				//aki quiero borrar vector[i]  #a7d798 
							  
				//fin aqui
							  
			}
		};
				
			var src = document.getElementById("logoEmailInbox");
			src.appendChild(ace);
				
			//crear ancla  DELETE
			var a = document.createElement("a");
			//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
			a.className ='box2 ui-btn excecute ui-first-child ui-last-child';
			a.style.marginLeft = "6px";
			a.style.marginTop = "2px";
			a.style.height = "35px";
			//a.setAttribute("href","#");
			a.onclick = function(){
				//alert('delete email inbox');
				bootbox.alert({
					title: 'Delete Email Inbox',
					message: 'Email Inbox Sucessfully Deleted'
				});
				deleteEmailInbox(checkid);
			};
			var src = document.getElementById("logoEmailInbox");
			src.appendChild(a);
				
				
			if (idseen==0){
				//crear ancla para EMAIL LEIDO 
				var read = document.createElement("a");
				var leido=1;
				var noleido=0;
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				read.className ='box5 ui-btn excecute ui-first-child ui-last-child';
				read.style.marginLeft = "6px";
				read.style.marginTop = "2px";
				read.style.height = "35px";
				read.setAttribute("href","#");
				read.onclick = function(){
					var items_marcados = $('.mail_marked');
					var items_marcados2 = $('.seenB');
						
					if (read.className=='box5 ui-btn excecute ui-first-child ui-last-child'){
						//alert('The email marked as read');
						read.className ='box4 ui-btn excecute ui-first-child ui-last-child';
							
						items_marcados.removeClass("seenB");
							
						readEmail(id,leido);
							
					}
						
					else if (read.className=='box4 ui-btn excecute ui-first-child ui-last-child'){
						//alert('The email marked as unread');
						read.className ='box5 ui-btn excecute ui-first-child ui-last-child';
						//document.getElementById('primero'+id).style.fontWeight = 'bold';
						//read.style.fontWeight = "bold";
						items_marcados.removeClass("seenN");
						items_marcados.addClass("seenB");
						unreadEmail(id,noleido);
					}
									
				};
					
				var src = document.getElementById("logoEmailInbox");
				src.appendChild(read);
				
			}
			
			else if (idseen==1){
				//crear ancla para EMAIL LEIDO 
				var read = document.createElement("a");
				var leido=1;
				var noleido=0;
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				read.className ='box4 ui-btn excecute ui-first-child ui-last-child';
				read.style.marginLeft = "6px";
				read.style.marginTop = "2px";
				read.style.height = "35px";
				read.setAttribute("href","#");
				read.onclick = function(){
					var items_marcados = $('.mail_marked');
					var items_marcados2 = $('.seenB');
						
					if (read.className=='box4 ui-btn excecute ui-first-child ui-last-child'){
						//alert('The email marked as unread');
						read.className ='box5 ui-btn excecute ui-first-child ui-last-child';
						//document.getElementById('primero'+id).style.fontWeight = 'bold';
						//read.style.fontWeight = "bold";
						items_marcados.removeClass("seenN");
						items_marcados.addClass("seenB");
						unreadEmail(id,noleido);
					}
						
					else if (read.className=='box5 ui-btn excecute ui-first-child ui-last-child'){
						//alert('The email marked as read');
						read.className ='box4 ui-btn excecute ui-first-child ui-last-child';							
						items_marcados.removeClass("seenB");							
						readEmail(id,leido);
					}
									
				};
					
				var src = document.getElementById("logoEmailInbox");
				src.appendChild(read);
				
			}
				
				
			//crear ancla para MENU
			var del = document.createElement("a");
			//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
			del.className ='box ui-btn excecute ui-first-child ui-last-child';
			del.style.marginLeft = "6px";
			del.style.marginTop = "2px";
			del.style.height = "35px";
			del.setAttribute("href","#menuEmailInboxO");
			del.onclick = function(){
				//alert('click menu');
			};
			var src = document.getElementById("logoEmailInbox");
			src.appendChild(del);
			
			document.getElementById('logoEmailInbox').style.display = "block";
			//document.body.appendChild(div);
				
	}else{
		var idaux=0;
		//alert("entre por else");
		//alert(checkid);
		//alert(checkid.length);
		if (pushh==false){
			for(i=0;i<checkid.length;i++){
				//alert("test"+id);			 
				if(checkid[i] == id){ 
					idaux = id;
				}			 
			}
		}	
		if(idaux == id){ 
			//alert("si lo encontro2");
			if (selec==true){
				for(i=0;i<checkid.length;i++){ 
					if(checkid[i] == id){ 
						//alert("encontrado2"); 
						//alert(checkid[i]); 
						//aki quiero borrar vector[i] 
						var checkid_old=""+checkid;
						var myarray = checkid_old.split(",");
						function removeByIndex(checkid, id) {
							checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
						}
					  
						//alert("Array before removing elements: "+checkid);
						removeByIndex(checkid, i);
						for (var f = 0, len = myarray.length; f<len;f++){
								document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
						}
								
						//alert("Array after removing elements: "+checkid);
								
						document.getElementById('header_emailInbox').style.display = "none";
					
						document.getElementById('logoEmailInbox').style.display = "none";
						//fin aki				  
					}
						
						//alert(checkid);				
				}
			}else{
			
								
				//document.getElementById('primero'+id).style.background = 'transparent';
				$.mobile.changePage( "#detailEmail");
		
			}
		}else{
		
			if (pushh==true){
				//alert('true none');
				document.getElementById('header_emailInbox').style.display = "none";
				document.getElementById('logoEmailInbox').style.display = "none";
				checkid=[];
				var selec=true;
			}else{		
				//alert('false block');
				var ch =checkid.push(id);				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('primero'+id).style.borderBottom = '2px solid #ccc;';
				var selec=false;
			}
							
		}
			//
			//alert(checkid);				
			
	}
	
	
}

function longEmailOutbox(id,pushh){

	
	//longEmailInbox(id);
	if(checkid.length==0){
		var ch= checkid.push(id)				
		document.getElementById('primero'+id).style.background = '#A9D0F5';
		document.getElementById('header_emailOutbox').style.display = "block";
				
		var div = document.createElement("div");
			//div.style.width = "40px";
			div.style.height = "40px";
			div.style.background = "gray";
			div.style.color = "white";
			div.style.marginTop="-40px";
			div.style.textAlign = "right";
			//div.className = "logo";
			div.id = "logoEmailOutbox";
			
			var div2 = document.getElementById("header_emailOutbox"); 
			// agregamos la imagen
			div2.appendChild(div);
			
			$(".box").hide();	   
			$(".box2").hide();	   
			$(".box3").hide();
			$(".box4").hide();
			$(".box5").hide();
			   
			//crear ancla para Aceptar
			var ace = document.createElement("a");
			//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
			ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
			ace.style.marginRight = "200px";
			ace.style.marginTop = "2px";
			ace.style.height = "35px";
			//ace.setAttribute("href","#menuProperty");
			ace.onclick = function(){
				//alert('aceptar');
				//document.getElementById('header_two').style.display = "none";
				//location.reload(true);
				div2.removeChild(div);
				var idaux=0;
				//alert("entre por else");
				//alert(checkid.length);
				for(i=0;i<checkid.length;i++){
					//alert("test"+id);			 
					if(checkid[i] == id){ 
						idaux = id;
					}			 
				}
				if(idaux == id){ 
					//alert("si lo encontro");
					for(i=0;i<checkid.length;i++){ 
						if(checkid[i] == id){ 
							//alert("encontrado"); 
							//alert(checkid[i]); 
							//aki quiero borrar vector[i] 
							
							var checkid_old=""+checkid;
							var myarray = checkid_old.split(",");
							
							
							function removeByIndex(checkid, id) {
								checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
							}
							//alert("Array before removing elements: "+checkid);
							removeByIndex(checkid, i);
							for (var f = 0, len = myarray.length; f<len;f++){
								document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
							}
									
							//alert("Array after removing elements: "+checkid);
									
							document.getElementById('header_emailOutbox').style.display = "none";
							document.getElementById('logoEmailOutbox').style.display = "none";
							//fin aki				  
						}
									//alert(checkid);				
					}				
				}else{
						
					checkid.push(id)
									
					//alert(checkid+'else');
					document.getElementById('primero'+id).style.background = '#A9D0F5';
							
					//document.getElementById('primero'+id).style.height="30px"; 
					//document.getElementById('primero'+id).style.width="30px"; 
									
					//aki quiero borrar vector[i]  #a7d798 
							  
					//fin aqui
							  
				}
			};
				var src = document.getElementById("logoEmailOutbox");
				src.appendChild(ace);
				
				//crear ancla  DELETE
				var a = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				a.className ='box2 ui-btn excecute ui-first-child ui-last-child';
				a.style.marginLeft = "6px";
				a.style.marginTop = "2px";
				a.style.height = "35px";
				//a.setAttribute("href","#");
				a.onclick = function(){
					//alert('delete email outbox');
					deleteEmailOutbox(checkid);
				};
				var src = document.getElementById("logoEmailOutbox");
				src.appendChild(a);
				
				
						
				
				//crear ancla para MENU
				var del = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				del.className ='box ui-btn excecute ui-first-child ui-last-child';
				del.style.marginLeft = "6px";
				del.style.marginTop = "2px";
				del.style.height = "35px";
				del.setAttribute("href","#menuEmailOutbox");
				del.onclick = function(){
					//alert('click menu');
				};
				var src = document.getElementById("logoEmailOutbox");
				src.appendChild(del);
				
				document.getElementById('logoEmailOutbox').style.display = "block";
				//document.body.appendChild(div);
				
	}else{
				var idaux=0;
				//alert("entre por else");
				//alert(checkid.length);
				if (pushh==false){
					for(i=0;i<checkid.length;i++){
						//alert("test"+id);			 
						if(checkid[i] == id){ 
							idaux = id;
						}			 
					}
				}
				if(idaux == id){ 
					//alert("si lo encontro");
					if (selec==true){
						for(i=0;i<checkid.length;i++){ 
							if(checkid[i] == id){ 
								//alert("encontrado"); 
								//alert(checkid[i]); 
								//aki quiero borrar vector[i] 
								
								var checkid_old=""+checkid;
								var myarray = checkid_old.split(",");
								
								function removeByIndex(checkid, id) {
									checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
								}
								//alert("Array before removing elements: "+checkid);
								removeByIndex(checkid, i);
								for (var f = 0, len = myarray.length; f<len;f++){
									document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
								}
								
								//alert("Array after removing elements: "+checkid);
								
								document.getElementById('header_emailOutbox').style.display = "none";
								document.getElementById('logoEmailOutbox').style.display = "none";
								//fin aki				  
							}
								//alert(checkid);				
						}
					}else{
						
						//document.getElementById('primero'+id).style.background = 'transparent';
						$.mobile.changePage( "#detailEmail");
					}
					
				}else{
				
					if (pushh==true){
						//alert('true none');
						document.getElementById('header_emailOutbox').style.display = "none";
						document.getElementById('logoEmailOutbox').style.display = "none";
						checkid=[];
						var selec=true;
					}else{		
						//alert('false block');
						var ch =checkid.push(id);				
						document.getElementById('primero'+id).style.background = '#A9D0F5';
						document.getElementById('primero'+id).style.borderBottom = '2px solid #ccc;';
						var selec=false;
					}
					
				}
					//alert(checkid);				
			
			}

}

function deleteEmailInbox(id){
	//alert('borrando email inbox'+id);
	console.log(id);
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	var idmail = id.join();
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'type': 'delete',
			'pids': idmail 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					//alert('email inbox delete');
					bootbox.alert({
						title: 'Delete Email Inbox',
						message: 'Email Inbox Sucessfully Deleted'
					});
					location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	}	

function readEmail(id,seen){
	//alert('marcando correo como leido'+id);
	//console.log(id);
	//console.log(seen);
	//var items_marcados2 = $('.seenB');
	//items_marcados.removeClass("seenB");
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	var idmail = id;
	var seen = seen;
	//alert(seen);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'type': 'unread',
			'read': seen,
			'pids': idmail 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					//alert('The email is mark as read');
					//location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}	

function unreadEmail(id,seen){
	//alert('marcando correo como no leido'+id);
	
	//console.log(id);
	//console.log(seen);
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	var idmail = id;
	var seen = seen;
	//alert(seen);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'type': 'unread',
			'read': seen,
			'pids': idmail 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					//alert('The email is mark as unread');
					//location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}

function gettypemail(){
	
	$("#emailtypeI select").empty();
	$("#attachmentI select").empty();
	$("#pendingcontI select").empty();
	$("#pendingproI select").empty();
	$("#statusI select").empty();
	

	var output = "";
	var output2 = "";
	var output3 = "";
	var output4 = "";
	
	var all     ="All";
	var sms     ="SMS";
	var fax     ="Fax";
	var email   ="Email";
	var voice   ="Voice Mail";
	
	var select  ="-Select-";
	var yes     ="Yes";
	var no      ="No";
	
	var cero    =0;
	var uno     =1;
	var dos     =2;
	var tres    =3;
	var cuatro  =4;
	var cinco   =5;
	var seis    =6;
	
	output +='<option value="'+cero+'">'+all+'</option>';
	output +='<option value="'+uno+'">'+sms+'</option>';
	output +='<option value="'+tres+'">'+fax+'</option>';
	output +='<option value="'+cinco+'">'+email+'</option>';
	output +='<option value="'+seis+'">'+voice+'</option>';
	
	$("#emailtypeI select").append(output);	
	
	output2 +='<option value="'+select+'">'+select+'</option>';
	output2 +='<option value="'+uno+'">'+yes+'</option>';
	output2 +='<option value="'+cero+'">'+no+'</option>';
	
	$("#attachmentI select").append(output2);	
	$("#pendingcontI select").append(output2);	
	$("#pendingproI select").append(output2);	
	$("#statusI select").append(output2);	

}

function gettypemailOutbox(){

	$("#emailtypeO select").empty();
	$("#attachmentO select").empty();
	$("#pendingcontO select").empty();
	$("#pendingproO select").empty();
	$("#statusO select").empty();

	var output = "";
	var output2 = "";
	var output3 = "";
	var output4 = "";
	
	var all     ="All";
	var sms     ="SMS";
	var fax     ="Fax";
	var email   ="Email";
	var voice   ="Voice Mail";
	
	var select  ="-Select-";
	var yes     ="Yes";
	var no      ="No";
	
	var cero    =0;
	var uno     =1;
	var dos     =2;
	var tres    =3;
	var cuatro  =4;
	var cinco   =5;
	var seis    =6;
	
	output +='<option value="'+cero+'">'+all+'</option>';
	output +='<option value="'+uno+'">'+sms+'</option>';
	output +='<option value="'+tres+'">'+fax+'</option>';
	output +='<option value="'+cinco+'">'+email+'</option>';
	output +='<option value="'+seis+'">'+voice+'</option>';
	
	$("#emailtypeO select").append(output);	
	
	output2 +='<option value="'+select+'">'+select+'</option>';
	output2 +='<option value="'+uno+'">'+yes+'</option>';
	output2 +='<option value="'+cero+'">'+no+'</option>';
	
	$("#attachmentO select").append(output2);	
	$("#pendingcontO select").append(output2);	
	$("#pendingproO select").append(output2);	
	$("#statusO select").append(output2);	

}

function searchFilterMailInbox(){
	//alert ('filtrando');
	var start = 0; 
	var limit = 25; 		
	//alert(start);
	//alert(limit);
	
	$("#ematyI").prop("selected", true);
	var emailType 	= $("#ematyI option:selected").val();
	if (emailType==0){
		emailType=-1;
	}
	$("#attach").prop("selected", true);
	var attachment 	= $("#attach option:selected").val();
	if (attachment=="-Select-"){
		attachment=-1;
	}
	//alert(attachment);
	$("#pencontI").prop("selected", true);
	var pendingCont = $("#pencontI option:selected").val();
	if (pendingCont=="-Select-"){
		pendingCont=-1;
	}
	
	$("#penproI").prop("selected", true);
	var pendingPro 	= $("#penproI option:selected").val();
	if (pendingPro=="-Select-"){
		pendingPro=-1;
	}
	
	$("#staI").prop("selected", true);
	var status 	= $("#staI option:selected").val();
	if (status=="-Select-"){
		status=-1;
	}
	
			
	$("#emadateI").prop("selected", true);
	var emaildate = $("#emadateI option:selected").val();
			
					
	var frommail = $("input#frommailI").val();
	var from      = $("input#fromI").val();
	var mailContent = $("input#emailcontentI").val();
	//var date = $("input#date").val();
	//var dateb = $("input#datebetween").val();
			
			
	//var followdate = moment(date).format('YYYY-MM-DD');
	//var datebet = moment(dateb).format('YYYY-MM-DD');
			
	//alert(followdate);
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
			
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'typeEmail': 0,
			'email': frommail,
			'name': from,
			'content': mailContent,
			'etype': emailType,
			'attach': attachment,
			'pcontact': pendingCont,	
			'pproperty': pendingPro,
			//'statusalt': altsta,
			//'ndate': folldate,
			//'followdate': followdate,
			//'followdateb': datebet,
			'sort': 'msg_date DESC',
			'start':start,
			'limit':limit
		}
	}).done(function (data){
		//alert(data);
		busy=false;
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
							if(userkey=='idmail' || userkey=='userid' || userkey=='address' || userkey=='agent' || 
							   userkey=='fromName_msg' || userkey=='from_msg' || userkey=='msg_date' || userkey=='seen' || 
							   userkey=='subject' || userkey=='task' || userkey=='to_msg' || userkey=='ap' || 
							   userkey=='attachments'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						var date = moment(datos['msg_date']).format('DD MMM YY');
					
					
						//alert(datos['attachments']);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					if(datos['seen']==0){
					output += '<li onClick="detailEmail(\''+datos['idmail']+'\');" id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="seenB" style="list-style: none;border-bottom: 2px solid #ccc;">';     
					output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';		 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';
								output +='<div style="width:15%;text-align:center;" class="col-xs-4 col-sm-6">';
									
									if (datos['subject']!=''){
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_email.png" width=30px height=30px>';
									}else {
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_sms.png" width=30px height=30px>';
									}
									
									/*if (datos['attachments']==0){
										output +='<img width="30" height="40" src="http://www.reifax.com/img/myemail/assignmentMail.png" no-repeat scroll 0px -40px transparent>';
									}else {
									}*/
									
									/*if (datos['msj']!=0){
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/go_email.png" no-repeat scroll 0px -40px transparent></td>';
									}else{
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/nada.png" no-repeat scroll 0px -40px transparent>';
									}*/
								
								
								output += '</div>';
								
							
									output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
					else if(datos['seen']==1){
					output += '<li onClick="detailEmail(\''+datos['idmail']+'\');" id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="seenN" style="list-style: none;border-bottom: 2px solid #ccc;">';     
					output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';		 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';
								output +='<div style="width:15%;text-align:center;" class="col-xs-4 col-sm-6">';
									
									if (datos['subject']!=''){
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_email.png" width=30px height=30px>';
									}else {
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_sms.png" width=30px height=30px>';
									}
									
									/*if (datos['attachments']==0){
										output +='<img width="30" height="40" src="http://www.reifax.com/img/myemail/assignmentMail.png" no-repeat scroll 0px -40px transparent>';
									}else {
									}*/
									
									/*if (datos['msj']!=0){
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/go_email.png" no-repeat scroll 0px -40px transparent></td>';
									}else{
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/nada.png" no-repeat scroll 0px -40px transparent>';
									}*/
								
								
								output += '</div>';
								
							
									output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
							
							
							//document.getElementById('emails').style.display = "none";
							if (output==''){
								busy=true;
								$("#emails ul").html('No Results!');
							}
							$("#emails ul").append(output);
							
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#emails ul").html('No true! ');
						 
					}
					
	});
				return false;
	
}

function searchFilterMailOutbox(){
	//alert ('filtrando');
	var start = 0; 
	var limit = 25; 		
	//alert(start);
	//alert(limit);
	
	$("#ematyO").prop("selected", true);
	var emailType 	= $("#ematyO option:selected").val();
	if (emailType==0){
		emailType=-1;
	}
	$("#attachO").prop("selected", true);
	var attachment 	= $("#attachO option:selected").val();
	if (attachment=="-Select-"){
		attachment=-1;
	}
	
	$("#pencontO").prop("selected", true);
	var pendingCont = $("#pencontO option:selected").val();
	if (pendingCont=="-Select-"){
		pendingCont=-1;
	}
	
	$("#penproO").prop("selected", true);
	var pendingPro 	= $("#penproO option:selected").val();
	if (pendingPro=="-Select-"){
		pendingPro=-1;
	}
	
	$("#staO").prop("selected", true);
	var status 	= $("#staO option:selected").val();
	if (status=="-Select-"){
		status=-1;
	}
			
	$("#emadateO").prop("selected", true);
	var emaildate = $("#emadateO option:selected").val();
			
					
	var frommail = $("input#frommailO").val();
	var from      = $("input#fromO").val();
	var mailContent = $("input#emailcontentO").val();
	//var date = $("input#date").val();
	//var dateb = $("input#datebetween").val();
			
			
	//var followdate = moment(date).format('YYYY-MM-DD');
	//var datebet = moment(dateb).format('YYYY-MM-DD');
			
	//alert(attachment);
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
			
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'typeEmail': 1,
			'email': frommail,
			'name': from,
			'content': mailContent,
			'etype': emailType,
			'attach': attachment,
			'pcontact': pendingCont,	
			'pproperty': pendingPro,
			//'statusalt': altsta,
			//'ndate': folldate,
			//'followdate': followdate,
			//'followdateb': datebet,
			'sort': 'msg_date DESC',
			'start':start,
			'limit':limit
		}
	}).done(function (data){
		//alert(data);
		busy=false;
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
							if(userkey=='idmail' || userkey=='userid' || userkey=='address' || userkey=='agent' || 
							   userkey=='fromName_msg' || userkey=='from_msg' || userkey=='msg_date' || userkey=='seen' || 
							   userkey=='subject' || userkey=='task' || userkey=='to_msg' || userkey=='ap' || 
							   userkey=='attachments'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						var date = moment(datos['msg_date']).format('DD MMM YY');
					
					
						//alert(datos['attachments']);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					if(datos['seen']==0){
					output += '<li onClick="detailEmail(\''+datos['idmail']+'\');" id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="seenB" style="list-style: none;border-bottom: 2px solid #ccc;">';     
					output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';		 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';
								output +='<div style="width:15%;text-align:center;" class="col-xs-4 col-sm-6">';
									
									if (datos['subject']!=''){
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_email.png" width=30px height=30px>';
									}else {
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_sms.png" width=30px height=30px>';
									}
									
									/*if (datos['attachments']==0){
										output +='<img width="30" height="40" src="http://www.reifax.com/img/myemail/assignmentMail.png" no-repeat scroll 0px -40px transparent>';
									}else {
									}*/
									
									/*if (datos['msj']!=0){
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/go_email.png" no-repeat scroll 0px -40px transparent></td>';
									}else{
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/nada.png" no-repeat scroll 0px -40px transparent>';
									}*/
								
								
								output += '</div>';
								
							
									output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['to_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
					else if(datos['seen']==1){
					output += '<li onClick="detailEmail(\''+datos['idmail']+'\');" id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' class="seenN" style="list-style: none;border-bottom: 2px solid #ccc;">';     
					output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';		 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';
								output +='<div style="width:15%;text-align:center;" class="col-xs-4 col-sm-6">';
									
									if (datos['subject']!=''){
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_email.png" width=30px height=30px>';
									}else {
									output +='<img style="padding:1px;" src="http://www.reifax.com/img/notes/reci_sms.png" width=30px height=30px>';
									}
									
									/*if (datos['attachments']==0){
										output +='<img width="30" height="40" src="http://www.reifax.com/img/myemail/assignmentMail.png" no-repeat scroll 0px -40px transparent>';
									}else {
									}*/
									
									/*if (datos['msj']!=0){
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/go_email.png" no-repeat scroll 0px -40px transparent></td>';
									}else{
										output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/nada.png" no-repeat scroll 0px -40px transparent>';
									}*/
								
								
								output += '</div>';
								
							
									output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										output +='<div class="col-md-6">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';
								
									/*output +='<div class="col-xs-9 col-sm-6 col-md-10 ">';									
										output +='<div style="font-size: 16px;" class="col-md-3">';										
												output +='<img width="20" height="20" src="http://reifax.com/FollowupReifax/img/fast-g.png" no-repeat scroll 0px -40px transparent>'+datos['fromName_msg']+'';											
										output += '</div>';
										
										/*output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='From Mail:&nbsp;'+datos['from_msg']+'';
										output += '</div>';*/
										
										/*output +='<div class="col-md-3">';
											output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
										output += '</div>';
									output += '</div>';*/
								
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
							
							
							//document.getElementById('emailsOutbox').style.display = "none";
							if (output==''){
								busy=true;
								$("#emailsOutbox ul").html('No Results!');
							}
							$("#emailsOutbox ul").append(output);
							
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#emailsOutbox ul").html('No true! ');
						 
					}
					
	});
				return false;
	
}

function removeFilterEmailInbox(){
	//alert('removiendo filtroI');
			
	$("input#frommailI").val("");
	$("input#fromI").val("");
	$("input#emailcontentI").val("");
	$("#ematyI option:selected").val("0");
	$("#attach option:selected").val("-Select-");
	$("#pencontI option:selected").val("-Select-");
	$("#penproI option:selected").val("-Select-");
	$("#staI option:selected").val("-Select-");
	
	//$("#emailFilter ul").html('');
	//document.getElementById('emails').style.display = "block";
	$("#emails ul").empty();
	$('#menuEmailInbox').panel("close");
	var start = 0; 
	var limit = 25; 	
	listadoEmailsInbox(start, limit);


}	

function removeFilterEmailOutbox(){
	//alert('removiendo filtroO');
			
	$("input#frommailO").val("");
	$("input#fromO").val("");
	$("input#emailcontentO").val("");
	$("#ematyO option:selected").val("0");
	$("#attachO option:selected").val("-Select-");
	$("#pencontO option:selected").val("-Select-");
	$("#penproO option:selected").val("-Select-");
	$("#staO option:selected").val("-Select-");
	
	//$("#emailOutboxFilter ul").html("");				
	//document.getElementById('emailsOutbox').style.display = "block";
	$("#emailsOutbox ul").empty();
	$('#menuEmailOutbox').panel("close");
	var start = 0; 
	var limit = 25; 	
	listadoEmailsOutbox(start, limit);

}	

//ANOTHER FILE
var fields = 0;
var outanother="";
var scntDiv 	= $('#browserCompose');
function addInputCompose() {
	alert('another');
	alert(fields);
		if (fields != 10) {
			alert('dentro if');
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			outanother +="<input id='uploadFile'  name='field[]' class='form-control' placeholder='Choose File' disabled='disabled' />";
			outanother +="<div  class='fileUpload btn btn-primary'>";
			outanother +="<span>Browser</span>";
			outanother +="<input id='uploadBtn' name='field[]'  type='file' class='upload' /></div>";				
			//document.getElementById('browser').style.display = "block";
			//document.getElementById('browserComp').innerHTML += "<label class='col-sm-12 control-label'>Attach</label><div class='row'><input id='uploadFileCompose'  name='field[]' class='form-control' placeholder='Select a file' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' /></div>";				
			document.getElementById('browserComp').innerHTML += '<div style="margin-bottom: 10px;" class="row"><div style="padding-left: 25px;" class="col-xs-3 col-sm-2">Attach</div><div style="margin-top:-10px;" id="uploadfile" class="col-xs-8 col-sm-10"><input id="uploadFile"  type="text" class="span4" placeholder="Select a file"/></div></div><div class="row"><div style="margin-left: 10px;padding-left: 5px;text-align: center;" class="col-xs-12 col-sm-6 col-md-10"><div class="fileUpload btn btn-primary"><span>Browser</span><input id="uploadBtnCompose"  type="file" class="upload" />	</div></div>';
			fields += 1;
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browserComp").append(outanother);
			
			
}

function addInputComposeO() {
	alert('another');
	alert(fields);
		if (fields != 10) {
			alert('dentro if');
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			//outanother +="<input id='uploadFile'  name='field[]' class='form-control' placeholder='Choose File' disabled='disabled' />";
			//outanother +="<div  class='fileUpload btn btn-primary'>";
			//outanother +="<span>Browser</span>";
			//outanother +="<input id='uploadBtn' name='field[]'  type='file' class='upload' /></div>";				
			//document.getElementById('browser').style.display = "block";
			//document.getElementById('browserComposeO').innerHTML += "<label>Attach</label><input id='uploadFileComposeO'  name='field[]' class='form-control' placeholder='Select a file' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtnO'  type='file' class='upload' /></div>";				
			document.getElementById('browserCompO').innerHTML += '<div style="margin-bottom: 10px;" class="row"><div style="padding-left: 25px;" class="col-xs-3 col-sm-2">Attach</div><div style="margin-top:-10px;" id="uploadfileO" class="col-xs-8 col-sm-10"><input id="uploadFileO"  type="text" class="span4" placeholder="Select a file"/></div></div><div class="row"><div style="margin-left: 10px;padding-left: 5px;text-align: center;" class="col-xs-12 col-sm-6 col-md-10"><div class="fileUpload btn btn-primary"><span>Browser</span><input id="uploadBtnComposeO"  type="file" class="upload" />	</div></div>';
			fields += 1;
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browser").append(outanother);
}

function getComposeInbox(){

	var output = "";
	var output2 = "";
	var output3 = "";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
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
						output2 +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						output3 +='<option value="'+datos['email']+'">'+datos['agent']+'</option>';
						
					});			
						//$('#toEmail').val(datos['agent']).selectmenu('refresh');
						$("#toEmail select").append(output);
						$("#toEmailO select").append(output2);
						$("#contreg select").append(output3);
				}					
					
	});
		
}

function getassignProperty(){

	var output = "";
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;

	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'searchProperty'
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
							if(userkey=='address' || userkey=='parcelid'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						output +='<option value="'+datos['parcelid']+'">'+datos['address']+'</option>';

						
					});			
						//$('#toEmail').val(datos['agent']).selectmenu('refresh');
						$("#toEmailO select").append(output);
					
				}					
					
	});
		
}

function comboproperty() {
	//alert('selecionando combo');
	var cproperty = document.getElementById("addressAssignPropertyHouse").value;
	alert(cproperty);
				
	var object = { 'parcelid' : cproperty };
	localStorage.setItem('key', JSON.stringify(object));
	//getComboSms(cproperty)

}

function assignProperty(agentid,idemail){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	var pid = JSON.parse(localStorage.getItem('key'));
	alert(agentid);
	alert(pid.parcelid);
	alert(idemail);
	$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'type':'assignmentProperty',
			'agentid':agentid,
			'idmail':idemail,
			'parcelid':pid.parcelid
				
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				
				if(data){
					//alert('Assignment Property successfully');
					bootbox.alert({
						title: 'Assignment Property',
						message: 'Assignment Property Sucessfully'
					});
					$.mobile.changePage('#outboxEmailHtml');
					//location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	
}

function sendemailInbox(){
	//alert('enviando'+id);
	//console.log(id);
	//var pid = id.join();
	$("#toEma").prop("selected", true);
	var to 	= $("#toEma option:selected").val();
	var subj = $("input#subjectI").val();
	var cuerpo = $("textarea#textemailInbox").val();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	//alert(to);
	//console.log(subj);
	//console.log(cuerpo);
	//alert(cuerpo);
	//alert(subj);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'type':'composeEmail',
			'to': to,
			'subject': subj,
			'msg': cuerpo 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				
				if(data){
					//alert('Email successfully');
					bootbox.alert({
						title: 'Email Inbox',
						message: 'Email Inbox Sucessfully Inserted'
					});
					$.mobile.changePage('#emailHtml');
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}	

function sendemailReply(){
	//alert('enviando'+id);

	var to 	   = $("input#toReplyEmail").val();
	var subj   = $("input#subjectReply").val();
	var cuerpo = $("textarea#composeReply").val();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	//alert(pid);
	//console.log(subj);
	//console.log(cuerpo);
	//alert(cuerpo);
	//alert(subj);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'type':'composeEmail',
			'to': to,
			'subject': subj,
			'msg': cuerpo 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				
				if(data){
					//alert('Email successfully');
					bootbox.alert({
						title: 'Email Inbox',
						message: 'Email Inbox Sucessfully Inserted'
					});
					$.mobile.changePage('#emailHtml');
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}

function sendemailForward(){
	//alert('enviando'+id);

	var to 	   = $("input#input_toforwardEmail").val();
	var subj   = $("input#subjectForwardEmail").val();
	var cuerpo = $("textarea#composeForward").val();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	//alert(pid);
	//console.log(subj);
	//console.log(cuerpo);
	//alert(cuerpo);
	//alert(subj);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'type':'composeEmail',
			'to': to,
			'subject': subj,
			'msg': cuerpo 			
			},
			success: function(data, textStatus, jqXHR){
				alert(data);
				
				if(data){
					//alert('Email successfully');
					bootbox.alert({
						title: 'Email Inbox',
						message: 'Email Inbox Sucessfully Inserted'
					});
					$.mobile.changePage('#emailHtml');
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}

function sendemailOutbox(){
	//alert('enviando'+id);
	//console.log(id);
	//var pid = id.join();
	$("#toEmaO").prop("selected", true);
	var to 	= $("#toEmaO option:selected").val();
	var subj = $("input#subjectO").val();
	var cuerpo = $("textarea#textemailOutbox").val();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	//alert(pid);
	//console.log(subj);
	//console.log(cuerpo);
	//alert(cuerpo);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'type':'composeEmail',
			'to': to,
			'subject': subj,
			'msg': cuerpo 			
			},
			success: function(data, textStatus, jqXHR){
				alert(data);
				
				if(data){
					//alert('Email successfully');
					bootbox.alert({
						title: 'Email Outbox',
						message: 'Email Inbox Sucessfully Inserted'
					});
					$.mobile.changePage('#outboxEmailHtml');
					//location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}
	

function getAssignContact(email,name){
		
		
	// La alerta mostrará 1 por pantalla
	
	//alert(email);
	//alert(name);
	var fromname=name;
	var fromemail=email;
		
	var outC="";
	var outCC="";				
	var outCCC="";				
	var outCCCC="";	
    var output	="";
    var output2	="";
	
	var agent   ="Agent";
	var buyer   ="Buyer";
	var seller  ="Seller";
	var loan    ="Loan Officer";
	var hard    ="Hard Money Lender";
	var title   ="Title Company";
	var lawyer  ="Lawyer";
	var client  ="Client";
	var broker  ="Broker";
	var general ="General Contractor";
	var other   ="Other";
	var coach   ="Coach";
	var shortsale="Short Sale Negotiator";
						
	var home="Home";
	var office="Office";
				
	var personal="Personal";
						
	var cell="Cell";
	var homefax="Home Fax";
	var officefax="Office Fax";
	var tollfree="TollFree";
	var otollfree="O.TollFree";
	var skype="Skype";
				
						
		outC +='<option value="'+agent+'">'+agent+'</option>';
		outC +='<option value="'+buyer+'">'+buyer+'</option>';
		outC +='<option value="'+seller+'">'+seller+'</option>';
		outC +='<option value="'+loan+'">'+loan+'</option>';
		outC +='<option value="'+hard+'">'+hard+'</option>';					
		outC +='<option value="'+title+'">'+title+'</option>';				
		outC +='<option value="'+lawyer+'">'+lawyer+'</option>';
		outC +='<option value="'+client+'">'+client+'</option>';
		outC +='<option value="'+broker+'">'+broker+'</option>';
		outC +='<option value="'+general+'">'+general+'</option>';
		outC +='<option value="'+other+'">'+other+'</option>';					
		outC +='<option value="'+coach+'">'+coach+'</option>';
		outC +='<option value="'+shortsale+'">'+shortsale+'</option>';
				
		outCC +='<option value="'+home+'">'+home+'</option>';
		outCC +='<option value="'+office+'">'+office+'</option>';
				
		outCCC +='<option value="'+cell+'">'+cell+'</option>';
		outCCC +='<option value="'+homefax+'">'+homefax+'</option>';
		outCCC +='<option value="'+officefax+'">'+officefax+'</option>';
		outCCC +='<option value="'+tollfree+'">'+tollfree+'</option>';					
		outCCC +='<option value="'+otollfree+'">'+otollfree+'</option>';
		outCCC +='<option value="'+skype+'">'+skype+'</option>';
			
		outCCCC +='<option value="'+personal+'">'+personal+'</option>';
		outCCCC +='<option value="'+office+'">'+office+'</option>';
				
		output +=''+fromname+'';
		output2 +=''+fromemail+'';
		
		//$("#conass").append(output);
		//$("#ema1ass").append(output);
		//$("#agenEd").val(output);
		$('#conass').val(output);
		$('#ema1ass').val(output2);
		
		$("#typeass select").append(outC);
		$("#email1ass select").append(outCC);
		$("#email2ass select").append(outCC);
		$("#phone1ass select").append(outCCC);
		$("#phone2ass select").append(outCCC);
		$("#phone3ass select").append(outCCC);
		$("#phone4ass select").append(outCCC);
		$("#phone5ass select").append(outCCC);
		$("#phone6ass select").append(outCCC);
		$("#website1ass select").append(outCCCC);
		$("#website2ass select").append(outCCCC);
		$("#address1ass select").append(outCC);
		$("#address2ass select").append(outCC);	
	}
	
function getAssignProperty(){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type':'searchPropertyAgent',
			'agentid':0
			
		}
	}).done(function (data){
		
		var obj = JSON.parse(data);
				
		if(obj.success) {
			var output = "";
				
				$.each(obj.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='parcelid' || userkey=='address'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
						}				
					});
						
						output +=''+datos['address']+'';
				
				});
					$("#toEmailO ul").append(output);
						
		}else{
						
			$("#toEmailO ul").html('No true! ');
						 
		}
		
	});

}

function detailEmails(id){
	//alert('detalle del contacto');
	
	var output2 = "";
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
		
		
		//AJAX DETALLE EMAIL BODY
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailContent',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				
				output2 +=''+data+'';
				
				$("#detalleCorreo").append(output2);
				
		});
				
				
}

function detailEmailsCab(id){
	//alert('detalle del contacto');
	
		
		var output = "";
		var output2 = "";
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		
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
						if(userkey=='to_msg' || userkey=='fromName_msg' || userkey=='from_msg' || userkey=='subject'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					//console.log(datos['fromName_msg']);
						output +='<div class="row">';
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
						
						
					//output2 +=''+datos['to_msg']+'';
						
					
				});
					
					$("#detalleEmailCab ul").append(output);
					
					//$("#toreplyEmail").val(output2);
					
						
				}else{
								
					$("#detalleEmailCab ul").html('No true! ');
								 
				}
				
		});
			
}

function detailEmailsCabO(id){
	//alert('detalle del contacto');
	
		
	var output = "";
	var output2 = "";
		
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
		
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
						if(userkey=='to_msg' || userkey=='fromName_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='msg_date' || userkey=='body'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
						
						//var date = moment(datos['msg_date']).format('DD MMM YY');
						var date = moment(datos['msg_date']).format('dddd MMMM Do YYYY, h:mm:ss a');
						
						output +='<div class="row">'+
									'<div style="color:#ccc;text-align:right;margin-bottom:10px;" class="col-xs-12 col-sm-6 col-md-12">'+date+'</div>'+
								'</div>';	
							
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
									output +='<div style="margin-bottom:15px;" class="col-md-3">';
										output +='<font style="font-size:16px;font-weight:bold;">'+datos['subject']+'</font>';
									output += '</div>';
									
									output +='<div class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">From:&nbsp;'+datos['fromName_msg']+'</font>&nbsp;'+datos['from_msg']+'';
									output += '</div>';
										
									output +='<div style="margin-bottom:15px;" class="col-md-3">';
										output +='<font style="font-size:12px;font-weight:bold;">To:</font>&nbsp;'+datos['to_msg']+'';
									output += '</div>';
								
								output += '</div>';
								
								output +='<div class="row">';
									output +='<div class="col-md-3">';
										output +='<font style="font-size:16px;font-weight:bold;">'+datos['body']+'</font>';
									output += '</div>';
																	
								output += '</div>';
							output += '</div>';
						output += '</div>';	
						
				
				});
					$("#detalleEmailCabO ul").append(output);
						
				}else{
								
					$("#detalleEmailCabO ul").html('No true! ');
								 
				}
				
		});
		
		
		//AJAX ATTACHMENT
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailAttach',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				var obj = JSON.parse(data);
				if(obj.success) {
			
				$.each(obj.attach, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='url' || userkey=='filename'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
							
						output2 +='<div class="row">';
							output2 +='<div class="col-xs12 col-sm-12">';
								output2 +='<div class="row">';
									output2 +='<div style="margin-bottom:15px;" class="col-md-3">';
									console.log(datos['url']);
										if (datos['url']!=null){
											
											output2 +='<a href="'+datos['url']+'" data-ajax="false"><font style="font-size:12px;font-weight:bold;color: #1d6aaa;">'+datos['filename']+'</font></a>';
											
										}
										else if (datos['url']==null){
											
												output2 +='<a href="http://reifax.com/MailAttach/3213/'+datos['filename']+'" data-ajax="false"><font style="font-size:12px;font-weight:bold;color: #1d6aaa;">'+datos['filename']+'</font></a>';
										
										}
									output2 += '</div>';
								
								output2 += '</div>';
							output2 += '</div>';	
						output2 += '</div>';	
				
				});
					$("#detalleEmailCabO ul").append(output2);
						
				}else{
								
					$("#detalleEmailCabO ul").html('No true! ');
								 
				}
				
		});
		
		
			
}

function getReplyInbox(id){

	var output = "";
	var output2 = "";
	var outputr = "";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'pid': 514129061180,
			'type': 'getTemplateEmail',
			'idtemplate':3675,
			'county':'BROWARD'
		}
	}).done(function (data){
		alert(data);
		
				var obj = JSON.parse(data);
				
				if(obj.success) {
					
						output +=''+obj.body+'';
						output2 +='Re: '+obj.subject+'';
								
													
							outputr = output.replace(/(<br>\s*|<br\/>\s*)/g, "\n");
							outputr2 = outputr.replace("<span>", " ");
							outputr3 = outputr2.replace("</span>", " ");
							
						console.log(outputr2);
						
						$("#textReply").val(outputr);
						$("#textReply").val(outputr2);
						$("#textReply").val(outputr3);
						
						
						$("#subjectReply").val(output2);
						
				}				
					
	});
		
}

function leerCorreos(id,leido){
	
	if(leido==0){		
		leido=1;
	}
					
	readEmail(id,leido);
	$('#readEmail').show();
	$('#unreadEmail').hide();
	
	$('#readEmailFollow').show();		
	$('#unreadEmailFollow').hide();
}

function noleidoCorreo(id,noleido){
	
	if(noleido==1){
		noleido=0;
	}
	unreadEmail(id,noleido);
	$('#readEmail').hide();
	$('#unreadEmail').show();
		
	$('#unreadEmailFollow').show();
	$('#readEmailFollow').hide();
	
}

function propertyAssing(id){
	
	var output ="";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'propertyAssing',
			'idmail': id
			
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
						if(userkey=='parcelid' || userkey=='idmail'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['parcelid']);
					output +=''+datos['parcelid']+'';
						
				
				});
				
					if (output=='null'){
						//document.getElementById("menuDE").style.display = "none";
						console.log('nulll');
						$('#menuDE2').show();
						$('#menuDE').hide();
						//document.getElementById("menuDE2").style.display = "block";										
					}else if (output!='null'){
						console.log('disitinto nulll');
						$('#menuDE').show();
						$('#menuDE2').hide();
						//document.getElementById("menuDE").style.display = "block";										
						//document.getElementById("menuDE2").style.display = "none";										
					}
					
			}	
	});
	
	
	
}

function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}

function cantidadEmail(){
	
	var k=0;
	var cn=0;
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'typeEmail': 0,
			'type':'contEmail'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//alert(obj.success);
			
			if(obj.success) {
				
				k=obj.cantEmail; 
				cn=abbrNum(k, 2);
				$( ".result" ).html(cn);			
									
			}	
	});
	
	
}



function getContenido(){
	
	var output ="";
	var output2 ="";
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 1,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.results, function( key, value ) {
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
					
					//console.log(datos['name']);
					//output +=''+datos['name']+'';
					output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
						
				
				});
				
													
					document.getElementById("templa").style.display = "block";										
					$("#temp select").append(output);
					
			}	
	});
}


function getReplyEmail(id){
	
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
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
						if(userkey=='to_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='body'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['from_msg']);
					console.log(datos['to_msg']);
					console.log(datos['subject']);
					console.log(datos['body']);
				
						
					output +=''+datos['from_msg']+'';
					output2 +=''+datos['to_msg']+'';
					output3 +=''+datos['subject']+'';
					output4 +=''+datos['body']+'';
						
					
				});
					
					
					$("#fromReplyEmail").append(output2);
					$("#toReplyEmail").val(output);
					$("#subjectReply").val(output3);
					$("#textReply").val(output4);
					
					
					
						
				}else{
								
					$("#detalleEmailCab ul").html('No true! ');
								 
				}
				
		});
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailContent',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				
				output2 +=''+data+'';
				
				$("#infoCorreo").append(output2);
				
		});
	
	
}

function forwardEmailInbox(){
	
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
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
						
						$("#input_toreplyEmail").append(output);
						
						
						//$("#toForward select").append(output);
						$("#ccForward select").append(output);
						$("#bccForward select").append(output);
						
						//$("#toEmailO select").append(output2);
				}					
					
	});
	
	
	var valor = JSON.parse(localStorage.getItem('email'));
	
	$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailContent',
				'mailid': valor.email
				}
	}).done(function (data){
				//alert(data);
				
				output2 +=''+data+'';
				
				$("#infoCorreo ul").append(output2);
				
	});
	
	$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailDetail',
				'mailid': valor.email
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
						if(userkey=='to_msg' || userkey=='from_msg' || userkey=='subject'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
						
						output3 +=''+datos['subject']+'';	
						output4 +=''+datos['to_msg']+'';	
										
				});
					
					$("#subjectForwardEmail").val(output3);
					//$("#fromForwardEmail").append(output4);
						
				}else{
								
					//$("#detalleEmailCabO ul").html('No true! ');
								 
				}
				
		});
	
}

function getReplyEmailOutbox(id){
	
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
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
						if(userkey=='to_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='body'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['from_msg']);
					console.log(datos['to_msg']);
					console.log(datos['subject']);
					console.log(datos['body']);
				
						
					output +=''+datos['from_msg']+'';
					output2 +=''+datos['to_msg']+'';
					output3 +=''+datos['subject']+'';
					output4 +=''+datos['body']+'';
						
					
				});
					
					
					//$("#fromReplyEmail").append(output);
					$("#fromReplyEmail").hide();
					$("#toReplyEmail").val(output);
					$("#subjectReply").val(output3);
					$("#textReply").val(output4);
					
					
					
						
				}else{
								
					$("#detalleEmailCab ul").html('No true! ');
								 
				}
				
		});
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailContent',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				
				output2 +=''+data+'';
				
				$("#infoCorreo").append(output2);
				
		});
	
	
}


function getReplyEmailF(id){
	
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	
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
						if(userkey=='to_msg' || userkey=='from_msg' || userkey=='subject' || userkey=='body'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['from_msg']);
					console.log(datos['to_msg']);
					console.log(datos['subject']);
					console.log(datos['body']);
				
						
					output +=''+datos['from_msg']+'';
					output2 +=''+datos['to_msg']+'';
					output3 +=''+datos['subject']+'';
					output4 +=''+datos['body']+'';
						
					
				});
					
					
					$("#fromReplyEmail").append(output);
					$("#toReplyEmail").val(output2);
					$("#subjectReply").val(output3);
					$("#textReply").val(output4);
					
					
					
						
				}else{
								
					$("#detalleEmailCab ul").html('No true! ');
								 
				}
				
		});
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
				type: 'POST',
			    data: { 
				'userid': userid,
				'typeEmail': 0,
				'type': 'getEmailContent',
				'mailid': id
				}
		}).done(function (data){
				//alert(data);
				
				output2 +=''+data+'';
				
				$("#infoCorreo").append(output2);
				
		});
	
	
}

function escapeRegExp(string) {
    return string.replace("<br>", "\n");
}