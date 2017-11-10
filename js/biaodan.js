$(document).ready(function(){
	
	var tb = $("#js_stu_tb");
	
	//添加学生
	$("#js_addstu_btn").click(function(){
		var hideTr = $("#js_hide_tby",tb).children().first();
		var newTr = hideTr.clone().show();
		$("#js_stuinfo_tby",tb).append(newTr);
	});
	
	//保存学生信息
	$(".js_stusave_btn",tb).die('click').live('click',function(){
			var tr = $(this).parent().parent();
		$("input[type='text']",tr).each(function(i,el){
			el = $(el);
			el.parent().text(el.val());
			el.remove();
		});
		$(".js_stusave_btn",tr).hide();
		$(".js_stuedit_btn",tr).show();
	});
	
	//修改学生信息
	$(".js_stuedit_btn",tb).die('click').live('click',function(){
		var tr = $(this).parent().parent();
		$("td:not('.op')",tr).each(function(i,el){
			el = $(el);
			var html = "<input value='"+el.text()+"' type='text'>";
			el.html(html);
		});
		$(".js_stuedit_btn",tr).hide();
		$(".js_stusave_btn",tr).show();
	});
	
	//删除学生信息
	$(".js_studel_btn",tb).die('click').live('click',function(){
		$(this).parent().parent().remove();
	});
	
	//根据关键字查询学生信息
	$("#js_searchstu_btn").click(function(){
		 var keyword = $("#js_keyword_text").val();
		 var tby = $("#js_stuinfo_tby",tb);
		if(!!!keyword){
			tby.children().show();
		}else{
			tby.children().hide();
			$("td:contains('"+keyword+"')",tby).each(function(i,el){
				$(el).parent().show();
			});
		}
		
		
	});
	
});