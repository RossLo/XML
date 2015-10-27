$(document).ready(function(){
	var int;
	int=setInterval(function(){getTime()},1000);
	function getTime(){
		var a_p="";
		var date=new Date();
		var curr_hour=date.getHours();
		(curr_hour<12)?a_p="am":a_p="pm";
		(curr_hour==0)?curr_hour=12:curr_hour=curr_hour;
		(curr_hour>12)?curr_hour=curr_hour-12:curr_hour=curr_hour;
		var curr_min=date.getMinutes().toString();
		var curr_sec=date.getSeconds().toString();
		var curr_hour=curr_hour.toString();
		if(curr_min.length==1){curr_min="0"+curr_min;}
		if(curr_sec.length==1){curr_sec="0"+curr_sec;}
		$('#updateTime').html(curr_hour+":"+curr_min+":"+curr_sec+" "+a_p);
	}
	function getXMLRacers () {
		$.ajax({
		url:'finisher.xml',
		cache:false,
		dataType:'xml',
		success:function(xml){
			$('#finishers_m').empty();
			$('#finishers_f').empty();
			$('#finishers_all').empty();
			$(xml).find("runner").each(function() {
					var info = '<li>Name: ' + $(this).find("fname").text() + ' ' + $(this).find("lname").text() + '. Time: ' + $(this).find("time").text() + '</li>';
					if( $(this).find("gender").text() == "m" ){
						$('#finishers_m').append( info );
					}else if ( $(this).find("gender").text() == "f" ){
						$('#finishers_f').append( info );
					}else{  }
					$('#finishers_all').append( info );
			}}
		});
	}
	$('#btnStart').click(function(){
		getXMLRacers();
	});
});