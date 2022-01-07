/**
 * this function format a date passed in parameter
 * to an Indonesian date format
 * @param {string} date the date that will be formatted
 * @returns {string}
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    dateStyle: 'long'
  })
}
