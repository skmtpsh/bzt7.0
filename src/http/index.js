import apiList from './interface'

const install = Vue => {
  if (install.installed) {
    return false
  }
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $ajx: {
      get () {
        return apiList
      }
    }
  })
}

export default install
