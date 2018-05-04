


var adQueryView = {
    display_errors: true,
    operators: [
        { type: 'equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime', 'string'] },
        { type: 'not_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime', 'string'] },
        { type: 'in', nb_inputs: 1, multiple: true, apply_to: [''] },
        { type: 'not_in', nb_inputs: 1, multiple: true, apply_to: [''] },
        { type: 'less', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'less_or_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'greater', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'greater_or_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'between', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'not_between', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'begins_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_begins_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'contains', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_contains', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'ends_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_ends_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'is_empty', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_not_empty', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_null', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_not_null', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '昨天', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '今天', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本周', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上周', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本月', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上月', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '今年', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '去年', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本季度', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上季度', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '最近X天', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '最近X月', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '最近X年', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X天以前', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X月以前', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X年以前', nb_inputs: 1, multiple: false, apply_to: [''] }
    ],
    filters: [{
        id: 'tsr_productrecord.tsr_code',
        label: 'ItemCode',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
  {
      id: 'tsr_productrecord.tsr_name',
      label: 'ProductName',
      type: 'string',
      operators: ['equal', 'not_equal', 'contains']
  },
  {
      id: 'tsr_productrecord.tsr_set',
      label: 'Set',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_product',
      label: 'Product',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_category1',
      label: 'Category 1',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_category2',
      label: 'Category 2',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_protein',
      label: 'Protein',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_flavor',
      label: 'Flavor',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_size',
      label: 'Size',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_daypart',
      label: 'Daypart',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_platform',
      label: 'Platform',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_withslp',
      label: 'With SLP',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_withhmtoys',
      label: 'With HM toys',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_subproduct1',
      label: 'Sub-product1',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_subproduct2',
      label: 'Sub-product2',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_subproduct3',
      label: 'Sub-product3',
      type: 'string',
      operators: ['equal', 'not_equal']
  },
  {
      id: 'tsr_productrecord.tsr_subproduct4',
      label: 'Sub-product4',
      type: 'string',
      operators: ['equal', 'not_equal']
  }
    ]
}

var isPortal = true;
//是否可以XRM
var hadXrm = false;
var Xrm;
var OrgName = "";
$(function () {

    if (window.opener != null && window.opener.Xrm != null) {
        hadXrm = true;
        Xrm = window.opener.Xrm;
        OrgName = "/" + Xrm.Page.context.getOrgUniqueName();
    }

    InitQuery();

    InitButton();

    //根据调用页面传入的参数，初始化筛选器
    if (window.parent.ProductManage != null) {

        var param = window.parent.ProductManage;

        if (param.Rule != null && param.Name != null) {

            $("#productGroupName").val(param.Name);
            SetRule(JSON.parse(param.Rule));
        }
    }

});


//调用页面需要声明该变量,t通过该变量传参数给筛选器
//var ProductManage = {
//    Rule :"json数据",
//    Name:"列表名称"
//};
//初始化按钮可用性
function InitButton() {

    if (hadXrm == true) {
        $("#cus_btn_group .btn").removeAttr("disabled");

        var tsr_createstatus = Xrm.Page.getAttribute("tsr_createstatus").getValue();
        var listType = Xrm.Page.getAttribute("tsr_type").getValue();

        //处理中
        if (tsr_createstatus == 100000001) {

            $("#cus_btn_group .btn").attr("disabled", "true");

        }

        //导入数据按钮,移除成员按钮不支持动态
        if (listType == 100000001) { //动态

            $("#btnImportFile").attr("disabled", "true");
            $("#btnRemove").attr("disabled", "true");
        }

    }

}

//初始化查找控件
function InitQuery() {

    $('#qb_customer').queryBuilder(adQueryView);

    // Fix for Selectize
    $('#qb_customer').on('afterCreateRuleInput.queryBuilder', function (e, rule) {
        if (rule.filter.plugin == 'selectize') {
            rule.$el.find('.rule-value-container').css('min-width', '200px')
                .find('.selectize-control').removeClass('form-control');
        }
    });

    if (hadXrm == true) {
        var jsonData = Xrm.Page.getAttribute("tsr_jsondata").getValue();

        if (jsonData != null && jsonData != "") {
            SetRule(JSON.parse(jsonData));
        }
    }
    else {

        //var rules_widgets = { "condition": "AND", "rules": [{ "id": "tsr_transaction.tsr_transactionid.countv2", "field": "tsr_transaction.tsr_transactionid.countv2", "type": "string", "operator": "equal", "value": "22.3" }], "valid": true };
        //SetRule(rules_widgets);
    }

}


//获取实体OTC
function getObjectTypeCode(entityName) {

    var lookupService = new window.opener.top.RemoteCommand("LookupService", "RetrieveTypeCode");
    lookupService.SetParameter("entityName", entityName);
    var result = lookupService.Execute();
    var res;
    if (result.Success && typeof (result.ReturnValue) == "number") {
        res = result.ReturnValue;
    }
    return res;
}





//重置查询
function ResetRule() {


    $('#qb_customer').queryBuilder('reset');
}


//设置查询Json
function SetRule(rule) {

    if (rule.condition != null) {

        $('#qb_customer').queryBuilder('setRules', rule);
    }
}

//查询查询
function UseQuery(optype) {
    //optype:0|1 // 0 添加列表成员 ， 1 移除列表成员, 2,全部会员    

    var jsonData = {};
    if (optype != 2) {

        var isValidate = $('#qb_customer').queryBuilder('validate');
        if (isValidate == true) {
            jsonData = $('#qb_customer').queryBuilder('getRules');
        }
        else {

            return false;
        }
    }

    if (!$.isEmptyObject(jsonData)) {
        //alert(JSON.stringify(result, null, 2));

        //$("#testDiv").html(JSON.stringify(jsonData, null, 2));
    }

    if (hadXrm == true|| isPortal == true) {
        var curid = "{}";
        curid = curid.substr(1, curid.length - 2);//去掉{}
        var listType = 100000000;

        var postData = {

            queryJson: JSON.stringify(jsonData),
            productgroupid: curid,
            type: listType == 100000000 ? 0 : 1,//100000000静态，100000001动态
            optype: optype
        };

        $.ajax({
            url: OrgName + "../sizer/HttpHandler/ProductQuery.ashx",
            dataType: "json",//指定json 则Data 回传回来自动变成json对象, 且是大写[T]的dataType
            data: { data: JSON.stringify(postData) },
            type: "Post",
            success: function (data) {
                console.log(data);
                var dataStr = JSON.stringify(data);
                //$("#testDiv").html(data.sql);
                //Xrm.Page.getAttribute("tsr_sql").setValue(data.sql);
                //Xrm.Page.getAttribute("tsr_jsondata").setValue(JSON.stringify(jsonData, null, 2));
                //静态列表才更新为处理中
                if (listType == 100000000) {//静态

                    //Xrm.Page.getAttribute("tsr_createstatus").setValue(100000001);//处理中
                }
                else {

                    //Xrm.Page.getAttribute("tsr_createstatus").setValue(100000002);//处理完成
                }

                if (window.parent.ProductManageCallBack != null) {
                    var name = $("#productGroupName").val();
                    if (name == "") {
                        alert("名称不能为空!");
                        return false;
                    }
                    window.parent.ProductManageCallBack(data.sql, name, JSON.stringify(data),optype);
                    window.parent.CloseProductManage();
                }

                //Xrm.Page.getAttribute("tsr_membercount").setValue(0);//清空总数
                //Xrm.Page.getAttribute("tsr_precount").setValue(0);//预计总数
                //Xrm.Page.data.entity.save();

                //刷新成员列表
                //window.opener.parent.document.getElementById('WebResource_MemberList').contentWindow.location.reload(true);

                //alert("查询保存成功");

                //window.close();

            },
            error: function (ex) {

                alert("error:" + JSON.stringify(ex));
            }
        });

    }

    if (hadXrm == false) {
        $("#testDiv").show();
    }
}

//预览总数
function GetTotalCount(btn) {
    $(btn).html("正在获取。。。");
    $(btn).attr("disabled", "true");

    var jsonData = {};

    var isValidate = $('#qb_customer').queryBuilder('validate');
    if (isValidate == true) {
        jsonData = $('#qb_customer').queryBuilder('getRules');
    }

    var postData = { queryJson: JSON.stringify(jsonData) };

    if (hadXrm == true) {
        var starDate = new Date();

        $.ajax({
            url: OrgName + "../sizer/HttpHandler/GetTotalCount.ashx",
            dataType: "json",//指定json 则Data 回传回来自动变成json对象, 且是大写[T]的dataType
            data: { data: JSON.stringify(postData) },
            type: "Post",
            success: function (data) {

                alert("总数为：" + data.totalcount + "，用时：" + DateDiff("s", starDate, new Date()) + "秒");

                $(btn).removeAttr("disabled");
                $(btn).html("预览总数");
            },
            error: function (ex) {

                alert("error:" + JSON.stringify(ex));

                $(btn).removeAttr("disabled");
                $(btn).html("预览总数");
            }
        });

    }

}

function DateDiff(interval, date1, date2) {
    var long = date2.getTime() - date1.getTime(); //相差毫秒
    switch (interval.toLowerCase()) {
        case "y": return parseInt(date2.getFullYear() - date1.getFullYear());
        case "m": return parseInt((date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth()));
        case "d": return parseInt(long / 1000 / 60 / 60 / 24);
        case "w": return parseInt(long / 1000 / 60 / 60 / 24 / 7);
        case "h": return parseInt(long / 1000 / 60 / 60);
        case "n": return parseInt(long / 1000 / 60);
        case "s": return parseInt(long / 1000);
        case "l": return parseInt(long);
    }
}

//上传CSV文件，并创建导入任务
function UploadFile(btn) {

    if (hadXrm == true) {

        $(btn).attr("disabled", "true");
        $("#uploadResult").html("正在上传。。。");

        var postData = new FormData();

        var files = $("#fileUpload")[0].files;

        for (var i = 0; i < files.length; i++) {

            postData.append("ajaxTaskFile" + i, files[i]);
        };

        var curid = Xrm.Page.data.entity.getId();
        curid = curid.substr(1, curid.length - 2);//去掉{}
        postData.append("listid", curid);

        $.ajax({
            url: OrgName + "../sizer/HttpHandler/ImportListMember.ashx",
            dataType: "json",//指定json 则Data 回传回来自动变成json对象, 且是大写[T]的dataType
            data: postData,
            type: "Post",
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {

                if (data.state == "ok") {

                    $("#uploadResult").html("文件上传成功，请等待后台服务导入成员");
                    Xrm.Page.getAttribute("tsr_createstatus").setValue(100000001);//处理中
                    Xrm.Page.data.entity.save();
                    InitButton();
                    //$(btn).removeAttr("disabled");

                } else {

                    $("#uploadResult").html(data.memo);
                    $(btn).removeAttr("disabled");
                }

            },
            error: function (ex) {

                $("#uploadResult").html(ex.responseText);
                $(btn).removeAttr("disabled");
            }
        });
    }
}



