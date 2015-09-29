$(document).ready(function(){
	
	
		/*$('#next').bind('click',funciones.proccess)
		$('#go').bind('click',funciones.findUser);
		$('input[name=txtEmail]').bind('focus',funciones.initAll);
		correcto=true;*/

		
	//document.getElementById('templa').style.display = "none";
	//document.getElementById('templaSms').style.display = "none";
	//document.getElementById('templaFAX').style.display = "none";
	document.getElementById('between').style.display = "none";
	document.getElementById('betweenExecPTask').style.display = "none";
	document.getElementById('betweenSchePTask').style.display = "none";
	document.getElementById('betweenCompTask').style.display = "none";
	document.getElementById('regContact').style.display = "none";
	document.getElementById("menuDE").style.display = "none";
	document.getElementById("menuDE2").style.display = "none";
	document.getElementById("sContact").style.display = "none";
	//document.getElementById("sProperty").style.display = "none";
	document.getElementById("searchLisContact").style.display = "none";
	document.getElementById("out-f").style.display = "none";
	document.getElementById("out-e").style.display = "none";
	document.getElementById("comp-f").style.display = "none";
	document.getElementById("comp-t").style.display = "none";
	document.getElementById("email-tablet2").style.display = "none";
	document.getElementById("task-tablet2").style.display = "none";
	document.getElementById("emailfollow-tablet2").style.display = "none";
	document.getElementById("email-princ").style.display = "none";
	document.getElementById("task-princ").style.display = "none";
	document.getElementById("contact-princ").style.display = "none";
	document.getElementById("emailFollow-princ").style.display = "none";
	document.getElementById("schedule-princ").style.display = "none";
	document.getElementById("history-princ").style.display = "none";
	document.getElementById("header_email").style.display = "none";
	document.getElementById("header_emailO").style.display = "none";
	document.getElementById("header_task").style.display = "none";
	document.getElementById("header_taskC").style.display = "none";
	document.getElementById("header_contact").style.display = "none";
	document.getElementById("header_emailFollow").style.display = "none";
	document.getElementById("header_scheduleFollow").style.display = "none";
	document.getElementById("header_history").style.display = "none";
	
	
	
	
	$('#folldate').change(function(){
		//alert($(this).val());
		if ($(this).val()=='Between'){
			document.getElementById('between').style.display = "block";
		}else{
			document.getElementById('between').style.display = "none";
		}
	});
		
	$('#edatePTask').change(function(){
		alert($(this).val());
		if ($(this).val()=='Between'){
			document.getElementById('betweenExecPTask').style.display = "block";
		}else{
			document.getElementById('betweenExecPTask').style.display = "none";
		}
	});
		
	$('#cdateCTask').change(function(){
		alert($(this).val());
		if ($(this).val()=='Between'){
			document.getElementById('betweenCompTask').style.display = "block";
		}else{
			document.getElementById('betweenCompTask').style.display = "none";
		}
	});
		
	$('#sdatePTask').change(function(){
		alert($(this).val());
		if ($(this).val()=='Between'){
			document.getElementById('betweenSchePTask').style.display = "block";
		}else{
			document.getElementById('betweenSchePTask').style.display = "none";
		}
	});
	
	//FILTER PROPERTIES
	$("#filtro,#filtro2").on('click', function () {
		//alert('filtro');				
		getfilterProperty();		
	});
		
	//FILTER EMAIL FOLLOW
	$("#filtroemailFollow").on('click', function () {
		//alert('filtro');				
		//getfilterEmailFollow();		
	});
		
	//FILTER REMOVE PROPERTY
	$("#filtro_remove,#filtro_remove2").on('click', function () {
		//alert('remove filter CONTACTS');
		$('#menuSecunFollow').panel("close");
		removeFilterProperty();		
	});
		
	//FILTER REMOVE CONTACTS
	$("#filtro_removeCont").on('click', function () {
		//alert('remove filter CONTACTS');
		//$('#menuContacts').panel("close");
		removeFilterContact();			
	});
		
	//FILTER REMOVE EMAIL INBOX
	$("#RemovefiltroIn,#RemovefiltroI").on('click', function () {
		//alert('remove filter email inbox');
		//$('#menuEmailInbox,#menuEmailInboxO').panel("close");
		removeFilterEmailInbox();			
	});
		
	//FILTER REMOVE EMAIL OUTBOX
	$("#RemovefiltroOu,#RemovefiltroO").on('click', function () {
		//alert('remove filter email outbox');
		//$('#menuEmailOutbox,#menuEmailOutboxO').panel("close");
		removeFilterEmailOutbox();			
	});
		
	//FILTER REMOVE PENDING TASK
	$("#RemovefiltroTask").on('click', function () {
		//alert('remove filter email outbox');
		//$('#menuEmailOutbox,#menuEmailOutboxO').panel("close");
		removeFilterPendingTask();		
	});
		
	//FILTER REMOVE COMPLETED TASK
	$("#RemovefiltroTaskC").on('click', function () {
		//alert('remove filter email outbox');
		//$('#menuEmailOutbox,#menuEmailOutboxO').panel("close");
		removeFilterCompletedTask();		
	});
		
	//FILTER REMOVE EMAIL FOLLOW
	$("#filtro_removeEmailFollow").on('click', function () {
		//alert('remove filter email outbox');
		//$('#menuEmailOutbox,#menuEmailOutboxO').panel("close");
		removeFilterEmailFollow();
	});
		
	//INSERT CONTACTS
	$("#insertCont,#insertCont2").on('click', function () {
		//alert('insert');			
		insertContact();
	});
		
	//RESET CONTACTS
	$("#resetAdd,#resetAdd2").on('click', function () {
		//alert('insert');			
		resetformCont();
	});
		
	//INSERT HISTORY FOLLOW
	$("#saveHist,#saveHistory").on('click', function () {
		//alert('insert');			
		addHistory();
	});
		
	//RESET HISTORY FOLLOW
	$("#resetHist,#resetHistory").on('click', function () {
		//alert('insert');			
		resetHistory();
	});
		
	//INSERT SCHEDULE FOLLOW
	$("#saveSche,#saveSchedule").on('click', function () {
		//alert('insert');			
		var day      = document.getElementById("edate").value;
		var hour     = document.getElementById("ehour").value;
		var exectype = document.getElementById("exectype").value;
		var task     = document.getElementById("taskksc").value;
		var detail	 = document.getElementById("detailsch").value;

		saveSchedule(day,hour,exectype,task,detail)
	});
		
	//RESET HISTORY FOLLOW
	$("#resetSche").on('click', function () {
		//alert('insert');			
		resetSchedule();
	});								
		
	//CANCEL ADD SCHEDULE FOLLOW
	$("#cancelSche,#cancelEditSche").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#scheduleFollow',
		{
        allowSamePageTransition : true,
        transition              : 'none',
        showLoadMsg             : false,
        reloadPage              : false
		}
		);
	});	

	//CANCEL EDIT SCHEDULE FOLLOW
	$("#cancelEditSche").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#detailSchedule',
		{
			allowSamePageTransition : true,
             transition              : 'none',
             showLoadMsg             : false,
             reloadPage              : false
		}
		);
	});
		
	//CANCEL EDIT HISTORY FOLLOW
	$("#cancelEditHistory").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#detailHistory',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
		
	//CANCEL EMAIL COMPOSE FOLLOW
	$("#cancelComposeEF").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#emailFollow',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
		
	//CANCEL EDIT PENDING TASK
	$("#cancelEditPend").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#detailPending',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
		
	//CANCEL EDIT COMPLETED TASK
	$("#cancelEditCompleted").on('click', function () {
		//alert('insert');			
		//cancelSchedule();
		$.mobile.changePage(
		'#detailCompleted',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
	
	$("#x-following").on('click', function () {
		//alert('x-following');
		$('#menuSecunFollow').panel("close");		
	});
	$("#x-emailIn").on('click', function () {
		//alert('x-following');
		$('#menuEmailInbox').panel("close");		
	});
	
	$("#x-emailOut").on('click', function () {
		//alert('x-following');
		$('#menuEmailOutbox').panel("close");		
	});
	
	$("#x-taskPend").on('click', function () {
		//alert('x-following');
		$('#menuTask').panel("close");		
	});
	
	$("#x-taskComp").on('click', function () {
		//alert('x-following');
		$('#menuTaskCompleted').panel("close");		
	});
		
	//REFRESH HISTORY FOLLOW
	$("#refreshHist").on('click', function () {
		//alert('REFRESH');		
		//location.reload(true);			
		//$.mobile.changePage('index.html#historyFollow');
		$.mobile.changePage(
        '#historyFollow',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
		
	//REFRESH HISTORY FOLLOW
	$("#refreshSchedule").on('click', function () {
		//alert('REFRESH');		
		//location.reload(true);			
		//$.mobile.changePage('index.html#historyFollow');
		$.mobile.changePage(
        '#scheduleFollow',
		{
            allowSamePageTransition : true,
            transition              : 'none',
            showLoadMsg             : false,
            reloadPage              : false
		}
		);
	});
		
	$("#webdetailHtml,#webdetailcontactHtml#webMyaccountHtml").height($(window).height()-$("div.ui-page-active div[data-role='header']").height()-7-63);	

	$('#imageUpload').change(function(){
		$('#imagePreview').show();
		readImgUrlAndPreview(this);
		function readImgUrlAndPreview(input){
			if (input.files && input.files[0]) {
			    var reader = new FileReader();
			    reader.onload = function (e) {			            	
					$('#imagePreview').attr('src', e.target.result);
				}
			};
			reader.readAsDataURL(input.files[0]);
		}	
	});
		
	
	$('#imageUploadFax').change(function(){
		$('#imagePreviewFax').show();
		readImgUrlAndPreview(this);
		function readImgUrlAndPreview(input){
			if (input.files && input.files[0]) {
			    var reader = new FileReader();
			    reader.onload = function (e) {			            	
					$('#imagePreviewFax').attr('src', e.target.result);
				}
			};
			reader.readAsDataURL(input.files[0]);
		}	
	});
		
	
	//UPLOAD FORWARD EMAIL FOLLOW
	document.getElementById("uploadBtnForward").onchange = function () {
		document.getElementById("uploadFileForward").value = this.value;
	};
						
	//DELETE CONTACTS
	$('#deleteCont').on('click',function(){				
		//alert("delete");
		alert("You must previously select(long touch) the contacts to be eliminated.");
	});
			
	//EDIT CONTACTS
	$('#editCont').on('click',function(){				
		//alert("editc");
		alert("You must previously select(long touch) the contacts to be edited.");
	});
			
	//AGREGAR CONTACTS
	$('#addCont,#addCont2').on('click',function(){				
		//alert("addc");
		getTypeContacts();	
	});
			
	//FILTER CONTACTS
	$('#filtrocontact').on('click',function(){				
		//alert("filtro contact");
		getagenttype();
	});
		
	//FILTER EMAIL INBOX
	$('#filtromaI,#filtromaIn').on('click',function(){				
		//alert("filtro email inbox");
		gettypemail();
	});
		
	//FILTER EMAIL OutBOX
	$('#filtromaO').on('click',function(){				
		//alert("filtro email outbox");
		gettypemailOutbox();
	});
		
	//COMPOSE EMAIL INBOX
	$('#add-email-tablet').on('click',function(){				
		//alert("add-e-tablet");
		getComposeInbox();
		/*$('#email-tablet').load('html/pageAddCompose.html #formCompose-tablet"', function(){
				//HACER ALGO MAS
				alert( "Load" );
			$('#page-email').hide();
		});*/
		
		$( "#email-tablet" ).load( "html/pageAddCompose.html #container-email", function() {
			//alert( "Load" );
			$('#page-email').hide();
		});
	});
	
	//COMPOSE EMAIL OUTBOX
	$('#add-emailO-tablet').on('click',function(){				
		//alert("add-e-tablet");
		getComposeInbox();
		/*$('#email-tablet').load('html/pageAddCompose.html #formCompose-tablet"', function(){
				//HACER ALGO MAS
				alert( "Load" );
			$('#page-email').hide();
		});*/
		
		$( "#email-tablet2" ).load( "html/pageAddComposeO.html #container-emailO", function() {
			//alert( "Load" );
			$('#page-emailO').hide();
		});
	});
	
	//COMPOSE EMAIL INBOX
	$('#addEInbox,#addEOutbox').on('click',function(){				
		//alert("COMPOSE");
		getComposeInbox();
	});
		
	//GET FILTER PENDING TASK
	$('#filtroTask').on('click',function(){				
		//alert("getptask");
		getfilterPendingTask();
	});
		
	//GET FILTER COMPLETED TASK
	$('#filtroTaskC').on('click',function(){				
		//alert("getptask");
		getfilterCompletedTask();
	});

	
		
	//COMPOSE SEND EMAIL OUTBOX
	$('#sendComposeO,#insertCompO').on('click',function(){				
		//sendemailOutbox();
			var imgVal = $('#imageUploadEO').val(); 
		$("input#userid").val('3213');
						
		if(imgVal == '') { 
			//showEmpty("<span class='error' colspan='5'></span>");
			$( "#choose_file" ).addClass( "error" );
			$( "#uploaded_file" ).addClass( "error" );
		}else{
			var formData 		= new FormData($("#envioEmailEO")[0]);
				$.ajax({
					url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',
					type: 'POST',
					data: formData,
					cache: false,
					contentType: false,
					processData: false,
					enctype: 'multipart/form-data',
					beforeSend: function(){
							
					},
					success: function(data){
						console.log(data);
						console.log(data);
						alert('Email successfully');
						$.mobile.changePage('#emailHtml');
					},
					//si ha ocurrido un error
					error: function(){
							
					}
				}); // End ajax
		} //End else
	});
		
	//SEND REPLY EMAIL INBOX
	$('#sendReplyEmail').on('click',function(){				
		sendemailReply();
	});
		
	//SEND REPLY EMAIL INBOX
	$('#sendForwardEmail').on('click',function(){				
		sendemailForward();
	});
		
	//RADIO BUTTOM ASSIGNMENT CONTACT
	$('#newCont').on('click',function(){
		//alert("radionew contact");									
		document.getElementById('infoContact').style.display = "block";
		document.getElementById('regContact').style.display = "none";
		document.getElementById("newCont").checked = true;
		document.getElementById("registerCont").checked = false;		
	});

	$('#registerCont').on('click',function(){
		//alert("radio registerCont");
		//$('#2').dialog("close");
		//$('#1').dialog("open");
		document.getElementById("newCont").checked = false;
		document.getElementById("registerCont").checked = true;
		document.getElementById('infoContact').style.display = "none";
		document.getElementById('regContact').style.display = "block";
	});
		
	//BOTON FILTRAR CONTACT
	$("#searchFilterContacts").on('click', function () {
		//alert('FILTRAR');
		//filterContacts();
		$("#contacts ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoContacts(start, limit);
	});

	$('#formularioFilterContact').submit(function(){
		event.preventDefault();
		$("#formfilterContact").modal('hide');
		$('#menuContacts').panel("close");
		$("#contacts ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoContacts(start, limit);
	});
		
	//SEARCH FILTER PROPERTY WITH BOTON SEARCH
	$("#searchFilter").on('click', function () {
		//alert("search del filtro");						
		$('#menuSecunFollow').panel("close");
		$("#content ul").empty();
		$("#following-tablet ul").empty();
		//searchFilterProperty();
		var start = 0; 
		var limit = 25; 
		listadoProperty(start,limit);
	});

	
	$('#formularioFilterProperty').submit(function(){
		event.preventDefault();
		//alert('enter property');
		$("#filter").modal('hide');
		$('#menuSecunFollow').panel("close");
		$("#content ul").empty();
		$("#following-tablet ul").empty();
		//searchFilterProperty();
		var start = 0; 
		var limit = 25; 
		listadoProperty(start,limit);
	});
	
	//SEARCH FILTER EMAIL INBOX
	$("#searchFilterMailI").on('click', function () {
		alert("search del filtro mail inbox");
		//searchFilterMailInbox();
		$("#emails ul").empty();
		$("#email-tablet ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoEmailsInbox(start,limit);
	});

	$('#formularioFilterEmailInbox').submit(function(){
		event.preventDefault();
		alert('enter email');
		$("#filterEI").modal('hide');
		$('#menuEmailInbox,#menuEmailInboxO').panel("close");
		$("#emails ul").empty();
		$("#email-tablet ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoEmailsInbox(start,limit);
	});
		
	//SEARCH FILTER EMAIL OUTBOX
	$("#searchFilterMailO").on('click', function () {
		//alert("search del filtro mail OUTbox");
		//searchFilterMailOutbox();
		$("#emailsOutbox ul").empty();
		$("#email-tablet2 ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoEmailsOutbox(start,limit);
	});
		
	$('#formularioFilterEmailOutbox').submit(function(){
		event.preventDefault();
		$("#filterEO").modal('hide');
		$('#menuEmailOutbox,#menuEmailOutboxO').panel("close");
		$("#emailsOutbox ul").empty();
		$("#email-tablet2 ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoEmailsOutbox(start,limit);
	});
		
	//BOTON FILTRAR PENDING TASK
	$("#searchFilterPTask").on('click', function () {
		//alert('FILTRAR');
		//filterContacts();
		$("#pendientes ul").empty();
		$('#menuTask').panel("close");
		$("#task-tablet ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoPendings(start, limit);
	});

	$('#formularioFilterPendingTask').submit(function(){
		event.preventDefault();
		$("#filterPendingTask").modal('hide');
		$('#menuTask').panel("close");
		$("#pendientes ul").empty();
		$("#task-tablet ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoPendings(start, limit);
	});
		 
	//BOTON FILTRAR COMPLETED TASK
	$("#searchFilterCTask").on('click', function () {
		//alert('FILTRAR');
		//filterContacts();
		$("#completados ul").empty();
		$("#task-tablet2 ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoCompleted(start, limit);
	});

	$('#formularioFilterCompletedTask').submit(function(){
		event.preventDefault();
		$("#filterCompletedTask").modal('hide');
		$('#menuTaskCompleted').panel("close");
		$("#completados ul").empty();
		$("#task-tablet2 ul").empty();
		var start = 0; 
		var limit = 25; 
		listadoCompleted(start, limit);
	}); 
		 
	//BOTON FILTRAR EMAIL FOLLOW
	$("#searchFilterEmailFollow").on('click', function () {
		//alert('FILTRAR');
		//filterContacts();
		$("#correofollow ul").empty();
		var id = JSON.parse(localStorage.getItem('key'));
		var start = 0; 
		var limit = 25; 
		emailDetail(start, limit,id.parcelid);
	});

	$('#formularioFilterEmailFollow').submit(function(){
		event.preventDefault();
		$("#filterEmailFollow").modal('hide');
		$('#menuEmailFollow').panel("close");
		$("#correofollow ul").empty();
		var id = JSON.parse(localStorage.getItem('key'));
		var start = 0; 
		var limit = 25; 
		emailDetail(start, limit,id.parcelid);
	});
		 
	//$('#openSearchContact').click(function(){
	$("#openSearchContact").on('click', function () {
		$('#sContact').animate({width:'toggle'},100);
		$(this).fadeOut();
		$('#closeSearchContact').fadeIn();
	});
	
	
	//$('#closeSearchContact').click(function(){
	$("#closeSearchContact").on('click', function () {
		$('#sContact').animate({width:'toggle'},100);
		$(this).fadeOut();
		$('#openSearchContact').fadeIn();
		$( "#contacts ul" ).listview( "refresh" );
		//$( '#webGeneralHtml' ).attr( 'src', function ( i, val ) { return val; });
	});
	
	//$('#openSearchAllContact').click(function(){
	$("#openSearchAllContact").on('click', function () {
		$('#searchLisContact').animate({width:'toggle'},100);
		$(this).fadeOut();
		$('#closeSearchAllContact').fadeIn();
		$( "#listadoAllContacto ul" ).listview( "refresh" );
	});

	//$('#closeSearchAllContact').click(function(){
	$("#closeSearchAllContact").on('click', function () {
		$('#searchLisContact').animate({width:'toggle'},100);
		$(this).fadeOut();
		$('#openSearchAllContact').fadeIn();
		
		//$( '#webGeneralHtml' ).attr( 'src', function ( i, val ) { return val; });
	});
	
	$('#openSearchProperty').click(function(){
		$('#sProperty').animate({width:'toggle'},1000);
		$(this).fadeOut();
		$('#closeSearchProperty').fadeIn();
	});

	$('#closeSearchProperty').click(function(){
		$('#sProperty').animate({width:'toggle'},1000);
		$(this).fadeOut();
		$('#openSearchProperty').fadeIn();
		//$( '#webGeneralHtml' ).attr( 'src', function ( i, val ) { return val; });
	});
		
			
});


function moviendoFollowing(){
	//alert('moviendoF');
	$('#email-princ').hide();
	$('#task-princ').hide();
	$('#contact-princ').hide();
	
	$('#following-princ').show();
	$('#header_one').show();
	$('#header_email').hide();
	$('#header_emailO').hide();
	$('#header_task').hide();
	$('#header_taskC').hide();
	$('#header_contact').hide();
}
function moviendoEmail(){
	//alert('moviendoF');
	$('#following-princ').hide();
	$('#task-princ').hide();
	$('#contact-princ').hide();
	
	$('#email-princ').show();
	
	$('#header_email').show();
	$('#header_emailO').hide();
	$('#header_one').hide();
	$('#header_task').hide();
	$('#header_taskC').hide();
	$('#header_contact').hide();
}
function moviendoEmail2(){
	//alert('moviendoF');
	$('#following-princ').hide();
	$('#task-princ').hide();
	$('#contact-princ').hide();
	
	$('#email-princ').show();
	$('#header_email').show();
	$('#header_emailO').hide();
	$('#header_one').hide();
	$('#header_task').hide();
	$('#header_taskC').hide();
	$('#header_contact').hide();
}
function moviendoTask(){
	//alert('moviendoF');
	$('#email-princ').hide();
	$('#following-princ').hide();
	$('#contact-princ').hide();
	
	$('#task-princ').show();
	$('#header_task').show();
	$('#header_taskC').hide();
	$('#header_email').hide();
	$('#header_emailO').hide();
	$('#header_one').hide();
	$('#header_contact').hide();

}
function moviendoTask2(){
	//alert('moviendoF');
	$('#email-princ').hide();
	$('#following-princ').hide();
	$('#contact-princ').hide();
	
	$('#task-princ').show();
	$('#header_task').show();
	$('#header_taskC').hide();
	$('#header_email').hide();
	$('#header_emailO').hide();
	$('#header_one').hide();
	$('#header_contact').hide();
}
function moviendoContact(){
	//alert('moviendoF');
	$('#email-princ').hide();
	$('#following-princ').hide();
	$('#task-princ').hide();
	$('#contact-princ').show();
	
	$('#header_task').hide();
	$('#header_taskC').hide();
	$('#header_email').hide();
	$('#header_emailO').hide();
	$('#header_one').hide();
	$('#header_contact').show();
}

function moviendoDetail(){
	//alert('moviendodetail');
	$('#detailPro-princ').show();
	$('#emailFollow-princ').hide();
	$('#schedule-princ').hide();
	$('#history-princ').hide();
	
	$('#header_detailPro').show();
	$('#header_emailFollow').hide();
	$('#header_schedule').hide();
	$('#header_history').hide();
}

function moviendoEmailFollow(){
	//alert('moviendoemailfollow');
	$('#detailPro-princ').hide();
	$('#emailFollow-princ').show();
	$('#schedule-princ').hide();
	$('#history-princ').hide();
	
	$('#header_detailPro').hide();
	$('#header_emailFollow').show();
	$('#header_schedule').hide();
	$('#header_history').hide();
}

function moviendoSchedule(){
	//alert('moviendoSchedule');
	$('#detailPro-princ').hide();
	$('#emailFollow-princ').hide();
	$('#schedule-princ').show();
	$('#history-princ').hide();
	
	$('#header_detailPro').hide();
	$('#header_emailFollow').hide();
	$('#header_schedule').show();
	$('#header_history').hide();
}

function moviendoHistory(){
	//alert('moviendoHistory');
	$('#detailPro-princ').hide();
	$('#emailFollow-princ').hide();
	$('#schedule-princ').hide();
	$('#history-princ').show();
	
	$('#header_detailPro').hide();
	$('#header_emailFollow').hide();
	$('#header_schedule').hide();
	$('#header_history').show();
}