import Store from '@/store'

const permissionBtnMixin = {
  data() {
    return {
      permissionButtons____: {}
    }
  },
  methods: {
    __updatePermissionButtonsInserted(doms) {
      doms.forEach(e => {
        let pbk = e.getAttribute('permission-btn-key')
        if (this.permissionButtons____[pbk] == null) {
          e.style.display = 'none'
        }
      })
    }
  },
  beforeMount() {
    let activeRoute = Store.state.activeRoute
    activeRoute.buttons.forEach(e => {
      this.permissionButtons____[e.permissionKey] = e
    })

    document.addEventListener(
      'DOMNodeInserted',
      e => {

        if (e.target.querySelectorAll) {
          let nodeList = e.target.querySelectorAll('[permission-btn-key]')
          this.__updatePermissionButtonsInserted(nodeList)
        }
      },
      false
    )
  }
}

export default permissionBtnMixin
