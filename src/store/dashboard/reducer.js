/* eslint-disable default-case */
import produce from "immer"
import { ADD } from './constants'

const initialState = {
  v: 1
}

export default produce((draft, action) => {
  switch (action.type) {
    case ADD:
      draft.v += action.data
      return
  }
}, initialState)
