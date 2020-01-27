import * as types from './constants'

export const add = (data) => {
  return {
    type: types.ADD,
    data
  }
}