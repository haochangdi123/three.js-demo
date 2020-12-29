export const  IEVersion = () =>{
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if(isIE) {
    return 'ie'
  } else if(isEdge) {
    return 'edge';//edge
  } else if(isIE11) {
    return 11; //IE11
  }else{
    return -1;//不是ie浏览器
  }
}
