import { format } from 'date-fns-tz';
import { isSameDay, isSameYear } from 'date-fns';
import nb from 'date-fns/locale/nb/index.js';

const basicOptions = {
  locale: nb,
  timeZone: 'Europe/Oslo',
};

export function formatDate(
  dateFrom: Date,
  withTime: boolean = true,
  showYear = !isSameYear(dateFrom, new Date()),
) {
  const dateFormat = showYear ? 'EEEE d. MMMM yyyy' : 'EEEE d. MMMM';
  const timeFormat = withTime ? "'kl.' HH.mm" : undefined;

  return format(
    dateFrom,
    [dateFormat, timeFormat].join(' '),
    basicOptions,
  ).trim();
}

function formatDateToString(
  dateFrom: Date,
  dateTo: Date,
  withTime: boolean = true,
  showYear: boolean = false,
) {
  const showDate = !isSameDay(dateFrom, dateTo);

  const dateFormat = showYear ? 'EEEE d. MMMM yyyy' : 'EEEE d. MMMM';
  let timeFormat = withTime ? 'HH.mm' : undefined;

  // Add 'kl.' if we are showing date
  if (showDate) {
    timeFormat = `'kl.' ${timeFormat}`;
  }

  if (showDate) {
    return format(
      dateTo,
      [dateFormat, timeFormat].join(' '),
      basicOptions,
    ).trim();
  }

  return format(dateTo, timeFormat, basicOptions).trim();
}

export function formatDateRange(
  dateFrom: Date,
  dateTo: Date,
  withTime: boolean = true,
) {
  const showYearOnDateFrom = !isSameYear(dateFrom, dateTo);
  const showYearOnDateTo =
    showYearOnDateFrom || !isSameYear(dateFrom, new Date());
  const formattedDateFrom = formatDate(dateFrom, withTime, showYearOnDateFrom);
  const formattedDateTo = formatDateToString(
    dateFrom,
    dateTo,
    withTime,
    showYearOnDateTo,
  );
  return { dateFrom: formattedDateFrom, dateTo: formattedDateTo };
}
