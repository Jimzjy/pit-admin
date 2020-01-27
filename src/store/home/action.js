import * as types from './constants'

export const updateNavName = (name) => {
  return {
    type: types.UPDATE_NAV_NAME,
    name
  }
}