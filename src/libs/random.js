/**
 *
 * @param {number} min minimum value of the number that will be generated, default is 1
 * @param {number} max maximum value of the number that will be generated, default is 999999
 * @returns {number}
 */
export const random = (min = 1, max = 9999) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
