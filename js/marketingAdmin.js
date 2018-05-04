$(document).ready(function($) {
	// 创建优惠卷规则选择模板交互
	var $changeTemplateLi = $("#changeTemplate li")
	$changeTemplateLi.click(function(event) {
		var val = $(this).data('viewid')
		var changeIds = $('div[data-changeId]')
		$.each(changeIds, function(i, item){
			if ($(item).attr('data-changeId') == val) {
				$(item).show()
			} else {
				$(item).hide()
			}
		});
	});
	// 创建成员列表或与和的切换
	$('.add-or-select span').click(function (event) {
		$(this).addClass('selected')
		$(this).parent().find('input').val($(this).data('value'))
		$(this).siblings().removeClass('selected')
	});

	// 模拟select的交互逻辑
	var $dropdownToggle = $(".select-imitate .dropdown-toggle")
	var $setectRightBtn = $(".select-imitate .right-btn")
	var $selectItemRadio = $(".select-imitate li.select-item-radio")
	$(".select-imitate").mouseleave(function(event) {
		$(this).find('.dropdown-nav').hide()
	});
	$dropdownToggle.click(function (event) {
		$(this).parent().find('.dropdown-nav').toggle()
	});
	$setectRightBtn.click(function (event) {
		$(this).parent().find('.dropdown-nav').toggle()
	});
	$selectItemRadio.click(function (event) {
		$(this).addClass('selected')
		$(this).siblings('li').removeClass('selected')
		$(this).parents('.select-imitate').find('.dropdown-toggle').text($(this).text())
		$(this).parents('.select-imitate').find('.radio-value').val($(this).data('radiovalue'))
		$(this).parent().toggle()
	});
	
	// Dashboard 页面图标时间选择
	var date = new Date();
	if($('.start_time')[0]){
		$('.start_time').datetimepicker({
			language:  'zh-CN',
		    format: 'yyyy-mm-dd',
				minView: 2,
				startDate: date,
		    autoclose: true
		}).on('changeDate', function(ev){
			$(this).parent().find('.end_time').focus()
		});
		$('.end_time').datetimepicker({
			language:  'zh-CN',
		    format: 'yyyy-mm-dd',
				minView: 2,
				startDate: date,
				// pickerPosition:"bottom-left", 
		    autoclose: true
		}).on('changeDate', function(ev){
			console.log(ev)
		});
	}

	// 表格头部按钮排序click切换箭头
	$('.table .marketing-btn').click(function(event) {
		$(this).toggleClass('up');
	});

	// 表格翻页显示loading2s以后loding消失
	$('.page-box a').click(function(event) {
		$('#tableLoading').show()
		$(this).addClass('active').siblings('a').removeClass('active')
		setTimeout(function(){
			$('#tableLoading').hide()
		}, 2000)
	});

$(windwo).on('load', 'select', function(event) {
	$('#qb_customer select').attr({disabled: 'disabled'});
	
});

});