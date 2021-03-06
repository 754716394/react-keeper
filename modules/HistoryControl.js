import Logger from './Logger'

/**
 * dynamicly put value to History Object
 * mainly called by RouteHistory
 * @method set
 *
 * @param {string} key
 * @param {object} value
 * @return none
 */

export const setHistory = (history)=> {
  HistoryControl.history = history
}

export const listener = (location, action)=> {
  HistoryControl.path = location.pathname
  HistoryControl.state = location.state
}

export function go(pathOrIndex, state) {
  if(HistoryControl.history.type === 'hash' && (typeof state !== 'undefined')) {
    Logger.warn('Warning: HashRouter cannot push state; it is ignored.')
    state = undefined
  }
  if(typeof pathOrIndex === 'number') {
    if(pathOrIndex === -1) {
      HistoryControl.history.goBack()
    }else if(pathOrIndex === 1) {
      HistoryControl.history.goForward()
    }else{
      HistoryControl.history.go(pathOrIndex)
    }
  }else {
    if(pathOrIndex === HistoryControl.path)
      return
    if(HistoryControl.history) {
      HistoryControl.history.push(pathOrIndex, state)
      HistoryControl.history.goForward()
    }else {
      setTimeout(()=>{
        if(HistoryControl.history) {
          HistoryControl.history.push(pathOrIndex, state)
          HistoryControl.history.goForward()
        }
      }, 0)
    }
  }
}

export function replace(path, state) {
  HistoryControl.history.replace(path, state)
}

/**
 * export History Object to outer' using
 */
const HistoryControl = {
  path: '/',
  state: null,
  go,
  replace
}

export default HistoryControl
