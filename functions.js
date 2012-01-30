
//セレクト要素内の値とのチェック処理
function SelectInCheck(sele_name, value){

	var flag = false;
	$('select[name="'+ sele_name +'"]').children().each(function(){

		if($(this).text() === value) flag = true;
	});

	return flag;
}