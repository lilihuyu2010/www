$("#search-button").off('click').on('click',function(){
	//获取输入框内容
	var inputContent = $("#search-input").val().trim();
	//如果输入框为空
	if (inputContent == '') {
		return false;
	}
	//ajax请求接口返回请求结果
	$.ajax({
		url : 'http://api.lili.dev/v1/search/index',
		data : {'input':inputContent,'timestamp':getTimestamp()},
		type : 'post',
		dataType : 'json',
		success : function (result) {
			console.log(result);
		},
		error : function () {
			alert('出错了！');
		}
	});
});