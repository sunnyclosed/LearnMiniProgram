/* 时间格式化工具 这里value是时间戳，fmt是格式，例如 'yyyy/MM/dd hh:mm'*/
export function formatDate(value, fmt) {
  // 将时间戳转成date对象
  const date = new Date(value * 1000)
  if (/(y+)/.test(fmt)) {
    // RegExp.$1 指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      let newStr = ('00' + str).substr(str.length)
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : newStr);
    }
  }
  return fmt;
}

export function getDistance(lat1, lng1, lat2, lng2) {
  /**
  * 计算两个经纬度的距离(千米)
  */
  var radLat1 = lat1 * Math.PI / 180.0;
  var radLat2 = lat2 * Math.PI / 180.0;
  var a = radLat1 - radLat2;
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}