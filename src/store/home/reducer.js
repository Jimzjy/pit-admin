/* eslint-disable default-case */
import produce from "immer"
import { UPDATE_NAV_NAME } from './constants'

const initialState = {
  navName: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case UPDATE_NAV_NAME:
      draft.navName = action.name
      return
  }
}, initialState)
