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


	// 创建优惠卷规则选择子模板交互
	var $OrderDiscount = $("#OrderDiscount li")
	$OrderDiscount.click(function(event) {
		var val = $(this).data('childview')
		var childId = $('[data-childId]')
		$.each(childId, function(i, item){
			if ($(item).attr('data-childId') == val) {
				$(item).show()
			} else {
				$(item).hide()
			}
		});
	});
	// 模板选择筛选相同产品
	$('#againProduct').change(function(event) {
		if($(this).prop("checked")){
			$(this).parent().prev().hide();
			$(this).parent().css({
				marginLeft :'20px'
			});
		}else{
			$(this).parent().prev().show();
			$(this).parent().css({
				marginLeft :'0'
			});
		}
	});

	//模板选择筛选免费的时候让后面的input消失
	$('.filter-template .filete-next li').click(function(event) {
		var val = $(this).data('hideinput')
		var inputId = $(this).parents('.filter-template').find('input[data-input]')
		$.each(inputId, function(i, item){
			if ($(item).attr('data-input') == val) {
				$(item).hide()
			} else {
				$(item).show()
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
	try {
		 $('.start_time').daterangepicker(null, function (start, end, label) {
		 });
		 
	} catch (error) {
		
	}
	try {
		$('.sent-datas').datetimepicker({
			language:  'zh-CN',
		    format: 'yyyy-mm-dd hh:ii',
		    startView : 2,
		    startDate: date,
		    autoclose: true
		})
		$('#datetimepicker').datetimepicker({
			language:  'zh-CN',
		    format: 'hh:ii',
		    startView : 0,
		    minView:0,
		    maxView:1,
		    startDate: date,
		    autoclose: true
		})
		$('#mouth_time').datetimepicker({
			language:  'zh-CN',
		    format: 'hh:ii',
		    startView : 0,
		    minView:0,
		    maxView:1,
		    startDate: date,
		    autoclose: true
		})
		$('#week_time').datetimepicker({
			language:  'zh-CN',
		    format: 'hh:ii',
		    startView : 0,
		    minView:0,
		    maxView:1,
		    startDate: date,
		    autoclose: true
		})
		$('#diytime_input .start-time').datetimepicker({
			language:  'zh-CN',
		    format: 'hh:ii',
		    startView : 0,
		    minView:0,
		    maxView:1,
		    startDate: date,
		    keyboardNavigation :true,
		    autoclose: true
		}).on('changeDate', function(ev){
			$(this).next().focus()
		});
		$('#diytime_input .end-time').datetimepicker({
			language:  'zh-CN',
		    format: 'hh:ii',
		    startView : 0,
		    minView:0,
		    maxView:1,
		    startDate: date,
		    keyboardNavigation :true,
		    autoclose: true
		})
	} catch(e) {
	}
	// 表格头部按钮排序click切换箭头
	$('.marketing-btn').click(function(event) {
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


	// 营销活动创建页面时间选择器
	try {
	    $('#datetime_start').daterangepicker({
	      singleDatePicker: true,
	       format: 'YYYY-MM-DD-HH:mm',
           timePicker : true, //是否显示小时和分钟  
	        timePickerIncrement : 5, //时间的增量，单位为分钟  
	        timePicker12Hour : false, 
	    }, function (start, end, label) {
	    });
	    $('#datetime_end').daterangepicker({
	      singleDatePicker: true,
	      format: 'YYYY-MM-DD-HH:mm',
	       timePicker : true, //是否显示小时和分钟  
	        timePickerIncrement : 5, //时间的增量，单位为分钟  
	        timePicker12Hour : false,
	    }, function (start, end, label) {
	    });

		// 复制按钮选中以后高亮
		$('.activity-pop .copy-btn').click(function(){
			$(this).toggleClass('select')
		})

	    // 生效时段选中
	    // $("input[name=setDiytime]:radio").change(function() {
	    // 	if($(this).prop("checked")){
	    // 		if($(this).attr('id')=="diyTime"){
		   //  		$('#diytime_input').show()
		   //  		return
		   //  	}
	    // 		$('#diytime_input').hide()
	    // 		$(this).parent().css({background : '#ddd'});
	    // 		$(this).parent().siblings().css({background : 'none'});
	    // 	}
	    // })
	} catch (error) {
		
	}
	

	// 无需奖励积分日期选择
	try {
		$('#fixed_times').daterangepicker({
	      singleDatePicker: true
	    }, function (start, end, label) {});
	    $('#set-times').daterangepicker({
	      singleDatePicker: true
	    }, function (start, end, label) {});

	} catch (error) {}
	var $valid_times = $('#valid_times li')
	$valid_times.click(function (event) {
		var val = $(this).data('viewid')
		var changeIds = $('div[data-changeId]')
		$.each(changeIds, function (i, item) {
			if ($(item).attr('data-changeId') == val) {
				$(item).css({display: 'inline-block'});
			} else {
				$(item).hide()
			}
		});
	});
	// 点击按钮当前单元格高亮
	$('table tr').click(function(event) {
		$(this).toggleClass('selected').siblings().removeClass('selected')
	}); 
	try {
		$('.dataTimes').daterangepicker({
	      singleDatePicker: true
	    }, function (start, end, label) {
	    });
	} catch (error) {}
	try {
		$('.changeTemplate li').click(function (event) {
			var val = $(this).data('viewid')
			var changeIds = $('[data-changeId]')
			$.each(changeIds, function (i, item) {
				if ($(item).attr('data-changeId') == val) {
					$(item).show()
				} else {
					$(item).hide()
				}
			});
		});
		$('#add_shop_group').click(function(event) {
			 $(this).before($(this).prev().clone());
		});
		$('.s-product').on('click', '.delete', function(event) {
			$(this).parent().remove();
		});


		// 创建app消息模板鼠标滑过
		$('.created-news .add-type').mousemove(function(event) {
			$('.created-news .type-all').show();
		});
		$('.created-news .type-all').mouseleave(function(event) {
			$(this).hide()
		});
		$('.discount-rule .left .shop-cards').click(function(event) {
			$(this).parents('.left').find('.shop-right').css({display: 'inline-block'})
		});
	} catch (error) {}

	function all(_this, a) {
		if (_this.checked) {
			$("input[name=" + a + "]:checkbox").each(function() { //遍历所有的name为a的 checkbox
				$(this).prop("checked", true);
			})
		} else { //反之 取消全选
			$("input[name=" + a + "]:checkbox").each(function() { //遍历所有的name为a的 checkbox  
				$(this).prop("checked", false);
			})
		}
	};

	$(".allcheck").on('click', function(e) {
		var e = window.event || e;
		var _this = e.srcElement || e.target;
		all(_this, "weekdays")
	});


	// 帮助页面交互

	$('.help-content .list .title').click(function(event) {
		$(this).parents('li').toggleClass('show').siblings('li').removeClass('show')
	});
});