// this function convert date or string to specified timezone in mins (for example for Minsk it is -180)
// by default used GMT +3(-180) , Minsk timezone
// standart method toIsoString works wrong, do not use!

const getConvertedDate = (value, medcenterOffset = (-180)) => {
  const today = value ? new Date(value) : new Date();
  const timeInMs = today.getTime();
  const timezoneOffset = today.getTimezoneOffset();
  const totalOffsetMs = ((timezoneOffset + (medcenterOffset * -1)) * 60 * 1000);
  const convertedDate = new Date(timeInMs + totalOffsetMs);
  return convertedDate;
 }
