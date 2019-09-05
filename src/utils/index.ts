export interface IDateFormateParams {
  timeStamp: number,
  splitChar?: string // 日期分隔符
}

// 时间格式化
export function dateFormate({ timeStamp, splitChar='-' }: IDateFormateParams) {
  const time: Date = new Date(timeStamp);

  const Y = time.getFullYear();
  const M = (time.getMonth() + 1 + '').padStart(2, '0');
  const D = (time.getDate() + '').padStart(2, '0');
  const h = (time.getHours() + '').padStart(2, '0');
  const m = (time.getMinutes() + '').padStart(2, '0');
  const s = (time.getSeconds() + '').padStart(2, '0');

  return `${Y}${splitChar}${M}${splitChar}${D} ${h}:${m}:${s}`;
}

export const phoneRegx = /^1(3|5|6|7|8)\d{9}$/;
