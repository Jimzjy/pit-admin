/* eslint-disable default-case */
import produce from "immer"
import { GET_WEEK_HISTORY, GET_ALL_HISTORY, GET_ALL_DEVICES } from './constants'

const initialState = {
  weekActivity: [],
  dayActivity: [],
  userHistory: [],
  history: [],
  devices: []
}

export default produce((draft, action) => {
  switch (action.type) {
    case GET_WEEK_HISTORY:
      draft.weekActivity = action.weekActivity
      draft.dayActivity= action.dayActivity
      draft.userHistory = action.userHistory
      return
    case GET_ALL_HISTORY: 
      draft.history = action.history
      return
    case GET_ALL_DEVICES:
      draft.devices = action.devices
  }
}, initialState)
