export const toDate = (dateString: string | number | Date, locale = "en") => {
  const date = new Date(dateString);

  const localeString = locale == "ar" ? "en-CA" : "en-GB";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  };

  return date.toLocaleString(localeString, options);
};
