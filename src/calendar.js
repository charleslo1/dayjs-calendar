export default (o, c, d) => {
  const options = Object.assign({
    formats: {
      sameDay: '[今天]',
      lastDay: '[昨天]',
      nextDay: '[明天]',
      nextWeek: 'M月D日',
      lastWeek: 'M月D日',
      sameElse: 'M月D日'
    }
  }, o)

  c.getCalendarFormat = function (mydayjs) {
    var diff = mydayjs.diff(dayjs().startOf('day'), 'days', true)
    let key = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse'
    return options.formats[key || 'sameElse']
  }

  c.prototype.calendar = function () {
    let format = c.getCalendarFormat(this)
    return this.format(format)
  }
}
