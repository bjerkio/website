import { formatInTimeZone } from "date-fns-tz";
import { isSameDay, isSameYear } from "date-fns";
import nb from "date-fns/locale/nb/index.js";

const basicOptions = {
  locale: nb,
  timeZone: "Europe/Stockholm",
};

const timeZone = "Europe/Oslo";

export function formatDate(
  dateFrom: Date,
  withTime = true,
  showYear = !isSameYear(dateFrom, new Date()),
) {
  const dateFormat = showYear ? "EEEE d. MMMM yyyy" : "EEEE d. MMMM";
  const timeFormat = withTime ? "'kl.' HH.mm" : undefined;

  return formatInTimeZone(
    dateFrom,
    timeZone,
    [dateFormat, timeFormat].join(" "),
    basicOptions,
  ).trim();
}

function formatDateToString(
  dateFrom: Date,
  dateTo: Date,
  withTime = true,
  showYear = false,
) {
  const showDate = !isSameDay(dateFrom, dateTo);

  const dateFormat = showYear ? "EEEE d. MMMM yyyy" : "EEEE d. MMMM";
  let timeFormat = withTime ? "HH.mm" : undefined;

  // Add 'kl.' if we are showing date
  if (showDate) {
    timeFormat = `'kl.' ${timeFormat}`;
  }

  if (showDate) {
    return formatInTimeZone(
      dateTo,
      timeZone,
      [dateFormat, timeFormat].join(" "),
      basicOptions,
    ).trim();
  }

  return formatInTimeZone(dateTo, timeZone, timeFormat, basicOptions).trim();
}

export function formatDateRange(dateFrom: Date, dateTo: Date, withTime = true) {
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

export default function formatHumanDate(date: Date) {
  return new Date(date).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export interface ImageData {width: number, height: number};

export function scaleImage(image: ImageData, maxWidth: number, maxRatio: number): ImageData {
  if (image.width > maxWidth) {
    const ratio = image.width/image.height < maxRatio ? maxRatio : image.width/image.height;
    const width = maxWidth;
    const height = Math.round(width/ratio);

    return {width, height};
  } else {
    return image;  
  }
}