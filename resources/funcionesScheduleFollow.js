function detailSchedule(id,parcelid){

	var type = JSON.parse(localStorage.getItem('key3'));
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	busy=true;
	
	$.ajax({
		url: 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: 'POST',
		data: { 
			'typeFollow': type.type, 
			'userid': userid,
			'idfus':id,
			'parcelid':parcelid,
			
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
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='followtype' || userkey=='odate' || userkey=='fulladdress' ||  userkey=='idfus' ||
						   userkey=='offer' || userkey=='coffer' || userkey=='task' || userkey=='typeExec' ||
						   userkey=='parcelid' || userkey=='realtorsadem' || userkey=='contract' || userkey=='pof' || 
						   userkey=='emd' || userkey=='detail' || userkey=='offerreceived' || userkey=='userid' || userkey=='name_follow'){
						   datos[userkey]=uservalue;
						   valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					var coffer = accounting.formatMoney(datos['coffer'], "$", 0);
					var offer = accounting.formatMoney(datos['offer'], "$", 0);
					
					var year = moment(datos['odate']).format('YYYY');
					
					if (year>=2015){
					var datehistory = moment(datos['odate']).format('DD MMM');
					}else if (year<2015){
					var datehistory = moment(datos['odate']).format('MM/DD/YY');
					}
					
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfuh']+'" idhist='+datos['idfus']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top: -5px;" class="col-xs-12 col-sm-6">';
							
							
														
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
							
							if (datos['contract']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}
									
							if (datos['pof']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}
									
							if (datos['emd']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}
									
							if (datos['realtorsadem']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
							
							if (datos['offerreceived']==0){
								output+='<img style="margin-right: 15px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 15px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
								
							
						
						output += '</div>';
				
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">'+datefollow+'</div>'+
							'</div>';	*/	 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-6 col-md-12">';
									
									/*output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-5">';
										output +=''+datos['fulladdress']+'';	
									output += '</div>';*/
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-3">';
										if (datos['detail']!=''){
											output +='Completed Task Detail:&nbsp;'+datos['detail']+'';
										}else{
											//output +='Completed Task Detail'+datos['detail']+'';
										}
									output += '</div>';
									
									output +='<div style="font-weight: normal;text-align: left;" class="col-md-2">';
										output +='Offer:&nbsp;'+offer+'';
									output += '</div>';
									
									output +='<div style="font-weight: normal;" class="col-md-2">';
										output +='C.Offer:&nbsp;'+coffer+'';
									output += '</div>';
									
									output +='<div class="col-md-2" style="font-weight: normal;">';
										output +='User:&nbsp;'+datos['userid']+'';
									output += '</div>';
									
									output +='<div style="font-weight:normal;text-align:right;" class="col-md-2">';
										output +=''+datehistory+'';
									output += '</div>';
																	
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					
				
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+'--'+start);
						if (obj.total!=''){
							$("#detalleschedule ul").append(output);
						}else{
							$("#detalleschedule ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detalleschedule ul").html('No true! ');
				}			
		});

}

function longSchedule(id){
	//alert('funcion long')
	//alert(id);
	if(checkid.length==0){
				var ch= checkid.push(id)				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('header_schedule').style.display = "block";
				
				var div = document.createElement("div");
				//div.style.width = "40px";
				div.style.height = "40px";
				div.style.background = "gray";
				div.style.color = "white";
				div.style.marginTop="-40px";
				div.style.textAlign = "right";
				//div.className = "logo";
				div.id = "logo";
				
				
				var div2 = document.getElementById("header_schedule"); 
				// agregamos la imagen
				div2.appendChild(div);
			   
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
					//document.getElementById('header_hist').style.display = "none";
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
							//alert(checkid[i]);
							//alert(checkid);
							//if(checkid[i] == id){ 
								//alert("encontrado"); 
								//alert(id); 
								var checkid_old=""+checkid;
								var myarray = checkid_old.split(",");
								
								//aki quiero borrar vector[i] 								
								function removeByIndex(checkid, id) {
									checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
								}
					  
								//alert("Array before removing elements: "+checkid);
								removeByIndex(checkid, i);
								
								for (var f = 0, len = myarray.length; f<len;f++){
									document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
								}
								//alert("Array after removing elements: "+checkid);
								
								document.getElementById('header_schedule').style.display = "none";
				   
								//fin aki				  
							//}
									
						}				
					}else{
					
						checkid.push(id);
								
						//alert(checkid+'else');
						document.getElementById('primero'+id).style.background = '#A9D0F5';
						
						//document.getElementById('primero'+id).style.height="30px"; 
						//document.getElementById('primero'+id).style.width="30px"; 
								
						  //aki quiero borrar vector[i]  #a7d798 
						  
						  //fin aqui
						  
					}
				};
				var src = document.getElementById("logo");
				src.appendChild(ace);
				
				//crear ancla de menu por propiedad
				var a = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				a.className ='box2 ui-btn excecute ui-first-child ui-last-child';
				a.style.marginLeft = "6px";
				a.style.marginTop = "2px";
				a.style.height = "35px";
				//a.setAttribute("href","#");
				a.onclick = function(){
					//alert('deleteP');
					deleteSchedule(checkid);
				};
				var src = document.getElementById("logo");
				src.appendChild(a);
				
				//crear ancla para delete
				var del = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				del.className ='box6 ui-btn excecute ui-first-child ui-last-child';
				del.style.marginLeft = "6px";
				del.style.marginTop = "2px";
				del.style.height = "35px";
				//del.setAttribute("href","#menuHist");
				del.onclick = function(){
					//alert('click menu');
					editSchedule(checkid);
				};
				var src = document.getElementById("logo");
				src.appendChild(del);
				
				//document.body.appendChild(div);
				
	}else{
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
					//alert("si lo encontro2");
					for(i=0;i<checkid.length;i++){ 
						if(checkid[i] == id){ 
							//alert("encontrado2"); 
							//alert(checkid[i]); 
							var checkid_old=""+checkid;
							var myarray = checkid_old.split(",");
							
							//aki quiero borrar vector[i] 
							function removeByIndex(checkid, id) {
								checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
							}
				  
							//alert("Array before removing elements: "+checkid);
							removeByIndex(checkid, i);
							
							for (var f = 0, len = myarray.length; f<len;f++){
								document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
							}
							
							//alert("Array after removing elements: "+checkid);
							
							document.getElementById('header_schedule').style.display = "none";
			   
							//fin aki				  
						}
							//alert(checkid);				
					}				
				}else{
				
					checkid.push(id)
							
					//alert(checkid+'else');
					document.getElementById('primero'+id).style.background = '#A9D0F5';
					
				}
					//alert(checkid);				
			
		}
}

function clearLocalStorageSchedule(){

	localStorage.removeItem('day');
	localStorage.removeItem('hour');
	localStorage.removeItem('exectype');
	localStorage.removeItem('task');
	localStorage.removeItem('detail');

}


function saveSchedule(day,hour,exectype,task,detail){

	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	if (vacio==true){
		var object  = { 'day' : day };
		var object2 = { 'hour' : hour };
		localStorage.setItem('day', JSON.stringify(object));
		localStorage.setItem('hour', JSON.stringify(object2));
		//remove los valores que no necesito
		exectype =localStorage.removeItem('exectype');
		task     =localStorage.removeItem('task');
		detail   =localStorage.removeItem('detail');
	}else{
		var object  = { 'day' : day };
		var object2 = { 'hour' : hour };
		var object3 = { 'exectype' : exectype };
		var object4 = { 'task' : task };
		var object5 = { 'detail' : detail };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('day', JSON.stringify(object));
		localStorage.setItem('hour', JSON.stringify(object2));
		localStorage.setItem('exectype', JSON.stringify(object3));
		localStorage.setItem('task', JSON.stringify(object4));
		localStorage.setItem('detail', JSON.stringify(object5));
	}
		
			
	if (checkid==''){
		var detalle=1;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid.length==1){
		var detalle=1;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else{
		var detalle=2;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}
	
	
	if(task==5){
		$('#btnschedule').show();
		$('#btnsend').hide();
		getTemplateEmail();
		getContactEmail(parcelid,detalle);
		$.mobile.changePage('#formEmail');
	}else if(task==1){
		$('#btnschedulesms').show();
		$('#btnsendsms').hide();
		getTemplateSMS();
		getContactSms(parcelid,detalle);
		$.mobile.changePage('#formSMS');					
	}else if(task==3){
		$('#btnschedulefax').show();
		$('#btnsendfax').hide();
		getTemplateFAX();
		getContactFax(parcelid,detalle);
		$.mobile.changePage('#formFax');
	}else if(task==7){
		$('#btnscheduledoc').show();
		$('#btnsenddoc').hide();
		gettypecontract();
		$.mobile.changePage('#formContract2');
	}else{
		//alert('sin task');
		var day = JSON.parse(localStorage.getItem('day'));
		var hour = JSON.parse(localStorage.getItem('hour'));
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var idtem = JSON.parse(localStorage.getItem('idtem'));
		saveScheduleTemplate(parcelid,day.day,hour.hour,typeFollow.typefollow,idtem.idtem);
	
	}
			
	
}

function saveScheduleTemplate(parcelid,day,hour,typeFollow,idtem){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	var ciclo ='';
	
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid==1){
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}
	
	if (ciclo=='multi'){
		var idaux=0;
		
		for(i=0;i<checkid.length;i++){
			$.ajax({
				url : 'http://reifax.com/mreifax/mysetting_tabs//myfollowup_tabs/properties_templates_task.php',  
				type: "POST",
				data: { 	
					'idtem': idtem,			
					'userid': userid,			
					'mode': 'insert-template',
					'pid': checkid[i],
					'typeFollow': typeFollow,
					'tdate': day,
					'ttime': hour
					
				},
				success: function(data, textStatus, jqXHR){
					//alert(data);
					if (data){
						send=true;
						$.mobile.changePage('#scheduleFollow');
					}
						
				},
				error: function (jqXHR, textStatus, errorThrown){
					alert('error');
				}
			});
		}
		
		if(send==true){
			alert('Schedule Follow Saved');
		}
		
	}else{
		
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs//myfollowup_tabs/properties_templates_task.php',  
			type: "POST",
			data: { 	
				'idtem': idtem,			
				'userid': userid,			
				'mode': 'insert-template',
				'pid': parcelid,
				'typeFollow': typeFollow,
				'odate': day,
				'ohour': hour
				
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					alert('Schedule Follow Saved');
					$.mobile.changePage('#scheduleFollow');	
				}
					
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert('error');
			}
		});
	
	}
	
	

}

function addSchedule(){

	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	var odate = $("input#edate").val();
	var ohour = $("input#ehour").val();
	
	$("#taskksc").prop("selected", true);
	var task 	= $("#taskksc option:selected").val();
	
	$("#exectype").prop("selected", true);
	var exectype 	= $("#exectype option:selected").val();
	
	
	var detail = $("textarea#detailsch").val();
	
	if (checkid==''){
		var detalle=1;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid.length==1){
		var detalle=1;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else{
		var detalle=2;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.pid;
	}


}

function geteditSchedule(id,parcelid){

	//alert(id);
	//alert(parcelid);
	//$("#etypeESche select").empty();			
	//$("#taskESche select").empty();			
			
	var output = "";
	var output2 = "";
	var output3 = "";
	var output4 = "";
	var output5 = "";
	var output6 = "";
	var output7 = "";
	var output8 = "";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: 'POST',
		data: { 				
		'userid': userid,
		'parcelid': parcelid,
		'idfus':id
	}}).done(function (data){					
		//alert(data);
			//alert(data);					
			var obj2 = JSON.parse(data);
				//console.debug(obj2);
			if(obj2.success) {								 
				
				//console.debug(obj2.data.userid);
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					console.debug(obj2.data);
						$.each( value, function ( userkey, uservalue) {								
							if(userkey=='sdate' || userkey=='odate' || userkey=='task' || userkey=='ohour' || 
							userkey=='min' || userkey=='typeExec' || userkey=='detail' || userkey=='complete_detail' || userkey=='status'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								console.debug(userkey);									
							}									
						});
							console.log(datos['odate']);					
							var date = moment(datos['odate']).format('MM/DD/YY');
							
							output +=''+datos['odate']+'';
							output2 +=''+datos['ohour']+'';
							output4 +=''+datos['detail']+'';
							output5 +=''+datos['complete_detail']+'';
							output6 +=''+datos['task']+'';
							output7 +=''+datos['typeExec']+'';
							output8 +=''+datos['status']+'';
						
						
				});
					
					
					//$("#taskkEditPend select").append(output6);
					//$('#taskEditPend').val(obj2.data.task).selectmenu('refresh');
					//$('#etypeEditPend').val(obj2.data.typeExec).selectmenu('refresh');
					$('#etypeESche').val(output7).selectmenu('refresh');
					$('#taskESche').val(output6).selectmenu('refresh');
							
					
					$("#statussESche").text(output8);					
					$("#edateESche").val(output);					
					$("#ehourESche").val(output2);
					$("#detailESche").val(output4);					
					$("#compdetailESche").val(output5);					
					
					
				}else{
					alert('else obj');
				}					
		
	});
	


	
}

function editSchedule(id){

	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	var odate = $("input#edateESche").val();
	var ohour = $("input#ehourESche").val();
	
	var detail = $("textarea#detailESche").val();
	var sheduledetail = $("textarea#compdetailESche").val();
	
	$("#taskESche").prop("selected", true);
	var task 	= $("#taskESche option:selected").val();
	
	$("#etypeESche").prop("selected", true);
	var typeExec = $("#etypeESche option:selected").val();
		
	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: "POST",
		data: { 	
		'idfuh':id,
		'userid': userid,		
		'type': 'update',
		'odate': odate,
		'ohour': ohour,
		'task': task,
		'typeExec': typeExec,
		'detail': detail,
		'complete': sheduledetail
			
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
			if (data){
				alert('Schedule Follow Editedddd');
				$.mobile.changePage('#detailSchedule');
			}
					
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert('error');
		}
	});

}

function deleteSchedule(id){
//alert('borrando'+id);
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url : 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: "POST",
		data: { 			
			'userid': userid,
			'type': 'delete',
			'idfus': id		
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
			if(data){
				alert('Schedule Follow deleted');
				//location.reload(true);
				$.mobile.changePage('#scheduleFollow');
			}else{
				alert('error');
			}
		},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});

}

function resetSchedule(){
	alert('reset schedule');
			
	$("input#edate").val("");
	$("input#ehour").val("");
	$("textarea#detailsch").val("");
	$("#exectype option:selected").val('2');
	
	
}

function test() {
d = document.getElementById("exectype").value;
alert(d);
if (d==1){
	document.getElementById('tasksc').style.display = "none";	
	document.getElementById('tasksc2').style.display = "block";	
}
}

function test2() {
d2 = document.getElementById("etypeESche").value;
alert(d2);
if (d2==1){
	document.getElementById('taskkESche2').style.display = "none";	
	document.getElementById('taskkESche').style.display = "block";	
}else if (d2==2){
	document.getElementById('taskkESche2').style.display = "block";	
	document.getElementById('taskkESche').style.display = "none";	
}
}



