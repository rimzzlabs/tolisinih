import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://todo.api.devcode.gethired.id',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * doGet function, an async await function to get data from the server
 * make sure the path is passed as a string
 * @param {string} path path to the endpoint url, eg: /todos
 * @returns {Promise<{data: Array<{ id: number title: string created_at: string }>}>}
 */
export const doGet = async (path) => {
  try {
    const response = await axios.get(path)
    return response.data
  } catch (err) {
    return {
      data: []
    }
  }
}

/**
 * a function to sent an HTTP request to post data to the server
 * @param {string} path the path to the endpoint url, eg: /todos
 * @param {{ id: number activity_group_id: string is_active: boolean created_at: string priority: "very-low" | "low" | "medium" | "high" | "very-high", title: string } | {id: string | number title: string email?: string}} data the data to be sent to the server
 * @returns {Promise<T>}
 */
export const doPost = async (path, data) => {
  try {
    const response = await axios.post(path, data)
    return response.data
  } catch (err) {
    return {
      data: []
    }
  }
}

/**
 * an async/await function that sends an HTTP request to update data to the server
 * @param {string} path the path to the endpoint url, eg: /todos
 * @param {*} data the data to be sent to the server
 * @returns {Promise<T>}
 */
export const doPatch = async (path, data) => {
  try {
    const response = await axios.patch(path, data)
    return response.data
  } catch (err) {
    return {
      data: []
    }
  }
}

/**
 * an async/await function that sends an HTTP request to delete data to the server
 * @param {string} path path to the endpoint url, eg: /todos
 * @returns {Promise<T>}
 */
export const doDelete = async (path) => {
  try {
    const response = await axios.delete(path)
    return response.data
  } catch (err) {
    return {
      data: []
    }
  }
}
