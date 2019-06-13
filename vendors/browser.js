var ieBrowserLink = 'https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads#section-1';
var chromeBrowserLink = 'https://chrome.en.softonic.com/';
var firefoxBrowserLink = 'https://www.mozilla.org/en-US/firefox/new/';
var _browserLink = 'http://10.194.67.77:8089/browser/360se10.0.1508.0.exe';
//获取当前浏览器以及版本
function getBrowserInfo(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re =/(msie|firefox|chrome|opera|trident|version).*?([\d.]+)/;
    var m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "'safari");
    Sys.ver = m[2];
    return Sys;
}
//bootstrap模态框字符串
var modalDialogStr = '<div class="modal fade" tabindex="-1" role="dialog" id="alertModal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header" style="border:none"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-title" id="modalTitle" style="font-weight:bold">请使用IE11浏览器访问本系统</div></div><div class="modal-body"><p>您当前浏览器版本过低，会影响本系统的用户体验，请更新最新ie11浏览器。可点击下载按钮进行下载。</p></div><div class="modal-footer" style="border:none"><button type="button" class="btn btn-primary" data-dismiss="modal" onclick="downLoadBrowser()">更新ie11浏览器</button></div></div></div></div>';
var alertStr = '<div class="alert alert-danger" role="alert">您当前浏览器版本过低，会影响本系统的用户体验，推荐您使用360浏览器打开本系统。<a href="#" class="alert-link">点击下载</a></div>';
var sys = getBrowserInfo();
var downLoadBrowser = function (){
    window.open(ieBrowserLink);
}
if(sys.browser === 'msie' && parseInt(sys.ver) <9){ //ie8以下不支持 jquery2.0以上版本
    if(!Array.prototype.indexOf){
        var conf = confirm('当前浏览器版本过低，请更新最新ie浏览器');
        if(conf){
            window.open(ieBrowserLink);
        }
    }
    console.log(sys.browser+sys.ver);
}else{
    $(function(){
        $('body').append(modalDialogStr);
        var sys = getBrowserInfo();
        console.log(sys.browser + "的版本是：" + sys.ver);
        switch(sys.browser){
            case 'chrome':
                if(parseInt(sys.ver) < 50 ){
                    //$('#updateBrowser').attr('href',_browserLink);
                    // $('#alertModal').modal('show');
                }
                break;
            case 'msie':
                if(parseInt(sys.ver) < 10){
                    //$('#modalTitle').text('');
                    // $('#updateBrowser').attr('href',_browserLink);
                    $('#alertModal').modal('show');
                }
                break;
            case 'trident':
                if(parseInt(sys.ver) < 7){
                //    this is IE 11+
                //     $('#modalTitle').text('');
                //     $('#updateBrowser').attr('href',_browserLink);
                    $('#alertModal').modal('show');
                }
                break;
            case 'firefox':
                if(parseInt(sys.ver) < 50){
                    // $('#alertModal').modal('show');
                }
            default:
                // $('#modalTitle').text('');
                // $('#updateBrowser').attr('href',_browserLink);
                // $('#alertModal').modal('show');
        }
    })
}