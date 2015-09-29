function detailHistory(id, parcelid){

		//var idfuh = JSON.parse(localStorage.getItem('key4'));
		//var parcelid = JSON.parse(localStorage.getItem('key2'));
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
		var typefollow="(B,S)"
		//alert(typefollow);
		busy=true;
		$.ajax({
			url: 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
			type: 'POST',
		   data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'parcelid': parcelid,
			'idfuh':id
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
			   //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='followtype' || userkey=='odate' || userkey=='fulladdress' ||  userkey=='idfuh' ||
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
					output += '<li id="primero'+datos['idfuh']+'" idhist='+datos['idfuh']+' contr='+datos['contract']+' pof='+datos['pof']+' emd='+datos['emd']+' adde='+datos['realtorsadem']+' ofrec='+datos['offerreceived']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
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
							}else if (datos['task']==2){
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
									
									output +='<div style="font-size:18px;font-weight:bold;padding-right:0px;" class="col-md-3">';
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
							$("#detallehistorial ul").append(output);
						}else{
							$("#detallehistorial ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detallehistorial ul").html('No true! ');
				}			
		});

}

function longHistory(id){

	if(checkid.length==0){
				var ch= checkid.push(id)				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('header_hist').style.display = "block";
				
				var div = document.createElement("div");
				//div.style.width = "40px";
				div.style.height = "40px";
				div.style.background = "gray";
				div.style.color = "white";
				div.style.marginTop="-40px";
				div.style.textAlign = "right";
				//div.className = "logo";
				div.id = "logo";
				
				
				var div2 = document.getElementById("header_hist"); 
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
								
								document.getElementById('header_hist').style.display = "none";
				   
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
					deleteHist(checkid);
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
					//editHist(checkid);
					document.getElementById('pagEditHistoryHtml').style.display = "block";
				};
				var src = document.getElementById("logo");
				src.appendChild(del);
				
				//document.body.appendChild(div);
				
	}else{
				var idaux=0;
				alert("entre por else");
				//alert(checkid.length);
				for(i=0;i<checkid.length;i++){
					//alert("test"+id);			 
					if(checkid[i] == id){ 
						idaux = id;
					}			 
				}
				if(idaux == id){ 
					alert("si lo encontro2");
					for(i=0;i<checkid.length;i++){ 
						if(checkid[i] == id){ 
							alert("encontrado2"); 
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
							
							document.getElementById('header_hist').style.display = "none";
			   
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

function addHistory(){

	//var id = JSON.parse(localStorage.getItem('key'));
	//var type = JSON.parse(localStorage.getItem('key3'));
	
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
	
	var offer = $("input#offer").val();
	var coffer = $("input#coffer").val();
	
	$("#taskk").prop("selected", true);
	var task 	= $("#taskk option:selected").val();
	
	
	var detail = $("textarea#detail").val();
	
	var contract= $('#chkA').prop('checked');
	//var contract= $('input:checked[name=chk]:checked').val();
	//alert(contract);
	if(contract !== undefined){
	if(contract==true) {
		contract='on';
	}else if(contract==false){
		contract='off';
	}
	//alert(contract);
	}
	
	var pof= $("#chkA2").prop('checked');
	//alert(pof);
	if(pof !== undefined){
	if(pof==true){
		pof='on';
	}else{
		pof='off';
	}
	}
	
	var emd= $("#chkA3").prop('checked');
	if(emd !== undefined){
	if(emd==true){
		emd='on';
	}else{
		emd='off';
	}
	}
	
	var rademdums= $("#chkA4").prop('checked');
	if(rademdums !== undefined){
	if(rademdums==true){
		rademdums='on';
	}else{
		rademdums='off';
	}
	}
	
	var offerreceived= $("#chkA5").prop('checked');
	if(offerreceived !== undefined){
	if(offerreceived==true){
		offerreceived='on';
	}else{
		offerreceived='off';
	}
	}
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	console.log(userid);
	console.log(parcelid);
	
	
	$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
			type: "POST",
			data: { 	
			'userid': userid,		
			'userid_follow': userid,		
			'typeFollow': typeFollow,		
			'type': 'insert',
			'parcelid': parcelid,
			'offer': offer,
			'coffer': coffer,
			'task': task,
			'contract': contract,
			'pof': pof,
			'emd': emd,
			'rademdums': rademdums,
			'offerreceived': offerreceived,
			'detail': detail
			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					alert('History Follow Saved');
					//$.mobile.loadPage( "#historyFollow");
					$.mobile.changePage('#historyFollow');
					
				}
				
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	

}

function geteditHistory(id,parcelid){
	
	$("#taskkEH select").empty();			
	
	var output = "";
	var output2 = "";
	var output3 = "";
	var output4 = "";
	var output5 = "";
	var output6 = "";
	var output7 = "";
	var output8 = "";
	var output9 = "";
	var output10 = "";
	var output11 = "";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
		type: 'POST',
		data: { 				
		'userid': userid,
		'parcelid': parcelid,
		'idfuh':id
	}}).done(function (data){					
		//alert(data);					
			var obj2 = JSON.parse(data);
				//console.debug(obj2);
			if(obj2.success) {								 
				
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
						$.each( value, function ( userkey, uservalue) {								
							if(userkey=='offer' || userkey=='coffer'|| userkey=='task' || 
							userkey=='sheduledetail' || userkey=='detail' || userkey=='contract' || userkey=='pof' || userkey=='emd' || 
							userkey=='realtorsadem' || userkey=='offerreceived'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								console.debug(userkey);									
							}									
						});
						
							output +=''+datos['offer']+'';
							output2 +=''+datos['coffer']+'';
							
							if (datos['sheduledetail']!=null){								
								output3 +=''+datos['sheduledetail']+'';
							}
							
							
							if(datos['detail']!=null){
								output4 +=''+datos['detail']+'';	
							}
							
							
							output6 +=''+datos['task']+'';
							
							output7 +=''+datos['contract']+'';
							output8 +=''+datos['pof']+'';
							output9 +=''+datos['emd']+'';
							output10+=''+datos['realtorsadem']+'';
							output11+=''+datos['offerreceived']+'';
						
						//console.log(datos['task']);
				});
				
					console.log(output7);
					console.log(output8);
					console.log(output9);
					console.log(output10);
					console.log(output11);
					//$("#taskEH select").append(output6);
					//$('#taskEditPend').val(obj2.data.task).selectmenu('refresh');
					$('#taskEH').val(output6).selectmenu('refresh');
					

					$("#offerhist").val(output);					
					$("#cofferhist").val(output2);
					$("#textschdetailhist").val(output3);					
					$("#textcompdetailhist").val(output4);	
					
					//$("#checkbox-v-2e checkbox").append(output7);
					//$("input[type='checkbox']").val(output7).checkbox("refresh");
					//$("input[type='checkbox']").attr("checked",true).checkboxradio("refresh");
					//$('input:radio[name=checkbox-v-2a]:checked').val();
					
					if (output7==0){
						$("input[name='chk']").attr("checked",true).checkboxradio("refresh");
					}else if (output7==1){
						$("input[name='chk']").attr("checked",false).checkboxradio("refresh");						
					}

					if (output8==0){
						$("input[name='chk2']").attr("checked",true).checkboxradio("refresh");						
					}else if (output8==1){
						$("input[name='chk2']").attr("checked",false).checkboxradio("refresh");
					}
					
					if (output9==0){
						$("input[name='chk3']").attr("checked",true).checkboxradio("refresh");
						//$('#checkbox-ec-p').attr("checked","checked");
					}else if (output9==1){
						$("input[name='chk3']").prop("checked",false).checkboxradio("refresh");
					}
					
					if (output10==0){
						$("input[name='chk4']").attr("checked",true).checkboxradio("refresh");
					}else if (output10==1){
						$("input[name='chk4']").attr("checked",false).checkboxradio("refresh");						
					}
					
					if (output11==0){
						$("input[name='chk5']").attr("checked",true).checkboxradio("refresh");
					}else if (output11==1){
						$("input[name='chk5']").attr("checked",false).checkboxradio("refresh");						
					}
					
				}else{
					alert('else obj');
				}					
		
	});
	
	
}

function editHistory(id){

	//alert(id);
	
	var offer = $("input#offerhist").val();
	var coffer = $("input#cofferhist").val();
	
	var detail = $("textarea#textcompdetailhist").val();
	var sheduledetail = $("textarea#textschdetailhist").val();
	
	$("#taskEH").prop("selected", true);
	var task 	= $("#taskEH option:selected").val();
	
	
	//var contract= $("#chk").is(':checked');
	var contract= $('#chk').prop('checked');
	//var contract= $('input:checked[name=chk]:checked').val();
	//alert(contract);
	if(contract !== undefined){
	if(contract==true) {
		contract='on';
	}else if(contract==false){
		contract='off';
	}
	//alert(contract);
	}
	
	var pof= $('#chk2').prop('checked');
	//alert(pof);
	if(pof !== undefined){
	if(pof==true){
		pof='on';
	}else if(pof==false){
		pof='off';
	}
	//alert(pof);
	}
	
	
	var emd= $("#chk3").prop('checked');
	if(emd !== undefined){
	if(emd==true){
		emd='on';
	}else if(emd==false){
		emd='off';
	}
	}
	
	var rademdums= $("#chk4").prop('checked');
	if(rademdums !== undefined){
	if(rademdums==true){
		rademdums='on';
	}else if(rademdums==false){
		rademdums='off';
	}
	}
	
	
	var offerreceived= $("#chk5").prop('checked');
	if(offerreceived !== undefined){
	if(offerreceived==true){
		offerreceived='on';
	}else if(offerreceived==false){
		offerreceived='off';
	}
	}
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
		type: "POST",
		data: { 	
		'idfuh':id,
		'userid': userid,		
		'type': 'update',
		'offer': offer,
		'coffer': coffer,
		'task': task,
		'contract': contract,
		'pof': pof,
		'emd': emd,
		'rademdums': rademdums,
		'offerreceived': offerreceived,
		'detail': detail,
		'sheduledetail': sheduledetail
			
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
			if (data){
				alert('History Follow Edited');
				location.reload(true);
				//$.mobile.changePage('#detailHistory');
				$.mobile.changePage( "#historyFollow");
			}
					
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert('error');
		}
	});

}

function deleteHistory(id){

	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
	$.ajax({
		url : 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
		type: "POST",
		data: { 			
			'userid': userid,
			'type': 'delete',
			'idfuh': id 			
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
			if(data){
				alert('History Follow Deleted');
				//location.reload(true);
				$.mobile.changePage('#historyFollow');
			}else{
				alert('error');
			}
		},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});

}

function resetHistory(){
	//alert('removiendo filtro');
			
	$("input#offer").val("");
	$("input#coffer").val("");
	$("textarea#detail").val("");
	$('input:checkbox').removeAttr('checked');
}

function refreshPage() {
  $.mobile.changePage(
  "#page",
    window.location.href,
    {
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
}



function changeCheck(target)
{

	 var chk = $('#chk').get(0);
	// alert(chk.checked);
    if (!chk.checked) {
		$('#ckVc').show();
		$('#ckFc').hide();
        $('#chk').prop('checked', true);
    } else {
        $('#ckVc').hide();
		$('#ckFc').show();
        $('#chk').prop('checked', false);
    }			

}

function changeCheck2(target)
{
     var chk2 = $('#chk2').get(0);
	// alert(chk2.checked);
    if (!chk2.checked) {
		$('#ckVp').show();
		$('#ckFp').hide();
        $('#chk2').prop('checked', true);
    } else {
        $('#ckVp').hide();
		$('#ckFp').show();
        $('#chk2').prop('checked', false);
    }		
	
	
}

function changeCheck3(target)
{
     var chk3 = $('#chk3').get(0);
	// alert(chk3.checked);
    if (!chk3.checked) {
		$('#ckVe').show();
		$('#ckFe').hide();
        $('#chk3').prop('checked', true);
    } else {
        $('#ckVe').hide();
		$('#ckFe').show();
        $('#chk3').prop('checked', false);
    }		
}

function changeCheck4(target)
{
     var chk4 = $('#chk4').get(0);
	 //alert(chk4.checked);
    if (!chk4.checked) {
		$('#ckVa').show();
		$('#ckFa').hide();
        $('#chk4').prop('checked', true);
    } else {
        $('#ckVa').hide();
		$('#ckFa').show();
        $('#chk4').prop('checked', false);
    }		
}

function changeCheck5(target)
{
     var chk5 = $('#chk5').get(0);
	 //alert(chk5.checked);
    if (!chk5.checked) {
		$('#ckVo').show();
		$('#ckFo').hide();
        $('#chk5').prop('checked', true);
    } else {
        $('#ckVo').hide();
		$('#ckFo').show();
        $('#chk5').prop('checked', false);
    }		
}

function initCheck()
{

    //chk = document.getElementsByName('#chk')[0];
    //chk.style.display = 'none';
    //chk.parentNode.children[1 - (+ chk.checked)].style.display = 'none';
	//chk = target.lastElementChild;	 
    //chk.checked = !chk.checked;	
}
//initCheck();


function initCheck2()
{
    chk2 = document.getElementsByName('#chk2')[0];
    chk2.style.display = 'none';
    chk2.parentNode.children[1 - (+ chk2.checked)].style.display = 'none';
}
//initCheck2();


function initCheck3()
{
    chk3 = document.getElementsByName('#chk3')[0];
    chk3.style.display = 'none';
    chk3.parentNode.children[1 - (+ chk3.checked)].style.display = 'none';
}
//initCheck3();


function initCheck4()
{
    chk4 = document.getElementsByName('#chk4')[0];
    chk4.style.display = 'none';
    chk4.parentNode.children[1 - (+ chk4.checked)].style.display = 'none';
}
//initCheck4();


function initCheck5()
{
    chk5 = document.getElementsByName('#chk5')[0];
    chk5.style.display = 'none';
    chk5.parentNode.children[1 - (+ chk5.checked)].style.display = 'none';
}
//initCheck5();



function changeCheckA(target)
{
	

    chkA = target.lastElementChild;
    chkA.checked = !chkA.checked;
	
	//alert(chkA.checked);
	if (chkA.checked==true){
		//document.getElementById('chk').setAttribute('checked', 'unchecked');
		$('#chkA').prop('checked', true);
	}else{
		//document.getElementById('chk').setAttribute('checked', 'checked');
		$('#chkA').prop('checked', false);
	}
	//alert(+ chkA.checked);
	if(+ chkA.checked==1){
		target.children[0].style.display = '';
		target.children[1].style.display = 'none';
	}else if(+ chkA.checked==0){
		target.children[1].style.display = '';
		target.children[0].style.display = 'none';
	}
}

function changeCheckA2(target)
{
    chkA2 = target.lastElementChild;
	//alert(chk2.checked);
    chkA2.checked = !chkA2.checked;
	
	if (chkA2.checked==true){
		//document.getElementById('chk').setAttribute('checked', 'unchecked');
		$('#chkA2').prop('checked', true);
	}else{
		//document.getElementById('chk').setAttribute('checked', 'checked');
		$('#chkA2').prop('checked', false);
	}
	
   //target.children[+ chkA2.checked].style.display = '';
    //target.children[1 - (+ chkA2.checked)].style.display = 'none';
	if(+ chkA2.checked==1){
		target.children[0].style.display = '';
		target.children[1].style.display = 'none';
	}else if(+ chkA2.checked==0){
		target.children[1].style.display = '';
		target.children[0].style.display = 'none';
	}
}

function changeCheckA3(target)
{
    chkA3 = target.lastElementChild;
	//alert(chk2.checked);
    chkA3.checked = !chkA3.checked;
	
	if (chkA3.checked==true){
		//document.getElementById('chk').setAttribute('checked', 'unchecked');
		$('#chkA3').prop('checked', false);
	}else{
		//document.getElementById('chk').setAttribute('checked', 'checked');
		$('#chkA3').prop('checked', true);
	}
	
    //target.children[+ chkA3.checked].style.display = '';
    //target.children[1 - (+ chkA3.checked)].style.display = 'none';
	if(+ chkA3.checked==1){
		target.children[0].style.display = '';
		target.children[1].style.display = 'none';
	}else if(+ chkA3.checked==0){
		target.children[1].style.display = '';
		target.children[0].style.display = 'none';
	}
}

function changeCheckA4(target)
{
    chkA4 = target.lastElementChild;
	
    chkA4.checked = !chkA4.checked;
	
    if (chkA4.checked==true){
		//document.getElementById('chk').setAttribute('checked', 'unchecked');
		$('#chkA4').prop('checked', true);
	}else{
		//document.getElementById('chk').setAttribute('checked', 'checked');
		$('#chkA4').prop('checked', false);
	}
	chkA4
    //target.children[+ chkA3.checked].style.display = '';
    //target.children[1 - (+ chkA3.checked)].style.display = 'none';
	if(+ chkA4.checked==1){
		target.children[0].style.display = '';
		target.children[1].style.display = 'none';
	}else if(+ chkA4.checked==0){
		target.children[1].style.display = '';
		target.children[0].style.display = 'none';
	}
}

function changeCheckA5(target)
{
    chkA5 = target.lastElementChild;
	//alert(chk2.checked);
    chkA5.checked = !chkA5.checked;
   if (chkA5.checked==true){
		//document.getElementById('chk').setAttribute('checked', 'unchecked');
		$('#chkA5').prop('checked', true);
	}else{
		//document.getElementById('chk').setAttribute('checked', 'checked');
		$('#chkA5').prop('checked', false);
	}
	
    //target.children[+ chkA3.checked].style.display = '';
    //target.children[1 - (+ chkA3.checked)].style.display = 'none';
	if(+ chkA5.checked==1){
		target.children[0].style.display = '';
		target.children[1].style.display = 'none';
	}else if(+ chkA5.checked==0){
		target.children[1].style.display = '';
		target.children[0].style.display = 'none';
	}
}

/*function initCheckA()
{

    chkA = document.getElementsByName('#chkA')[0];
	//alert(chkA);
    chkA.style.display = 'none';
    chkA.parentNode.children[1 - (+ chkA.checked)].style.display = 'none';
}
initCheckA();


function initCheckA2()
{
    chkA2 = document.getElementsByName('#chkA2')[0];
    chkA2.style.display = 'none';
    chkA2.parentNode.children[1 - (+ chkA2.checked)].style.display = 'none';
}
initCheckA2();


function initCheckA3()
{
    chkA3 = document.getElementsByName('#chkA3')[0];
    chkA3.style.display = 'none';
    chkA3.parentNode.children[1 - (+ chkA3.checked)].style.display = 'none';
}
initCheckA3();

function initCheckA4()
{
    chkA4 = document.getElementsByName('#chkA4')[0];
    chkA4.style.display = 'none';
    chkA4.parentNode.children[1 - (+ chkA4.checked)].style.display = 'none';
}
initCheckA4();

function initCheckA5()
{
    chkA5 = document.getElementsByName('#chkA5')[0];
    chk5.style.display = 'none';
    chkA5.parentNode.children[1 - (+ chkA5.checked)].style.display = 'none';
}
initCheckA5();*/