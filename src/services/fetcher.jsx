import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://todo.api.devcode.gethired.id',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export async function postActivity(data) {
  try {
    const res = await axios.post('/activity-groups', data)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function getActivity(path = '/') {
  try {
    const res = await axios.get(path)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function patchActivity(id, data) {
  try {
    const res = await axios.patch(`/activity-groups/${id}`, data)
    return {
      res: res.data,
      statusCode: 201,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function deleteActivity(id) {
  try {
    const res = await axios.delete(`/activity-groups/${id}`)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function postTodos(data) {
  try {
    const res = await axios.post('/todo-items', data)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function getTodos(path = '/') {
  try {
    const res = await axios.get(path)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: {},
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function patchTodos(id, data) {
  try {
    const res = await axios.patch(`/todo-items/${id}`, data)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: [],
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}

export async function deleteTodos(id) {
  try {
    const res = await axios.delete(`/todo-items/${id}`)
    return {
      res: res.data,
      statusCode: 200,
      error: false,
    }
  } catch (err) {
    return {
      res: [],
      statusCode: err.response ? err.response.status : 500,
      error: true,
    }
  }
}
