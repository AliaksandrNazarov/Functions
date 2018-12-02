const getConvertedDate = (value, medcenterOffset = (-180)) => {
  const today = value ? new Date(value) : new Date();
  const timeInMs = today.getTime();
  const timezoneOffset = today.getTimezoneOffset();
  const totalOffsetMs = ((timezoneOffset + (medcenterOffset * -1)) * 60 * 1000);
  const convertedDate = new Date(timeInMs + totalOffsetMs);
  return convertedDate;
 }
