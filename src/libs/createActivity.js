import { random } from './random'

/**
 * the create activity function returns an object
 * of dummy data for a new activity
 * @param {number} min the minimum number of random integer, this is optional, default are 50
 * @returns
 */
export const createActivity = (min = 500) => ({
  id: random(min),
  title: 'New Activity',
  email: 'rizki.maulana@skyshi.com'
})
