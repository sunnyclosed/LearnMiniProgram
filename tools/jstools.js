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