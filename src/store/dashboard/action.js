import * as types from './constants'
import request from '../../service'
import { formatDate } from '../../utils'

export const getWeekHistory = (data) => {
  return {
    type: types.GET_WEEK_HISTORY,
    ...data
  }
}

export const getAllHistory = (data) => {
  return {
    type: types.GET_ALL_HISTORY,
    ...data
  }
}

export const getAllDevices = (data) => {
  return {
    type: types.GET_ALL_DEVICES,
    ...data
  }
}

export const getWeekHistoryAsync = () => {
  return (dispatch) => {
    request(`{
      history(type: "week") {
        username, userID, command, device, deviceID, time
      }
    }`).then(res => {
      const data = res.data.data.history
      const weekActivity = []
      const dayActivity = []
      const userHistory = []

      let zeroToday = new Date(new Date().toLocaleDateString()).getTime()
      let zeroWeek = new Date(zeroToday - 6 * 86400000).getTime()
      for (let i = 0; i < 12; i++) {
        dayActivity.push({ time: `${i*2+2}`, value: 0 })
      }
      for (let i = 0; i < 7; i++) {
        weekActivity.push({ time: formatDate(zeroWeek + i * 86400000, 'm-d'), value: 0 })
      }

      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const time = +data[i].time

        if (time > zeroToday) {
          dayActivity[Math.floor((time - zeroToday) / 7200000)].value++
          if (userHistory.length < 10) {
            userHistory.push({ device: item.device, command: item.command, date: formatDate(time, 'm-d-h-m')})
          }
        }
        if (time > zeroWeek) {
          weekActivity[Math.floor((time - zeroWeek) / 86400000)].value++
        }
      }
      
      dispatch(getWeekHistory({ weekActivity, dayActivity, userHistory: userHistory.reverse() }))
    })
  }
}

export const getAllDevicesAsync = () => {
  return (dispatch) => {
    request(`{
      devices {
        id,
        name,
        commands,
        links {
          to, from, toID
        }
      }
    }`).then(res => {
      const data = res.data.data.devices

      dispatch(getAllDevices({ devices: data }))
    })
  }
}

export const getAllHistoryAsync = () => {
  return (dispatch) => {
    request(`
      {
        history(type: "") {
          username, userID, command, device, deviceID, time
        }
      }
    `).then(res => {
      const data = res.data.data.history

      dispatch(getAllHistory({ history: data }))
    })
  }
}