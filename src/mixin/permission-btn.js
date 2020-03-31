import { mapGetters } from 'vuex'
const permissionBtnMixin = {
  computed: {
    ...mapGetters(['activeRoute'])
  },
  methods: {
    __updatePermissionButtonsInserted(domList) {
      domList.forEach(e => {
        let pbk = e.getAttribute('permission-btn-key')
        if (this.activeRoute['buttonsMap'][pbk] == null) {
          e.style.display = 'none'
        }
      })
    },
    __dOMNodeInserted(e) {
      if (e.target.querySelectorAll) {
        let nodeList = e.target.querySelectorAll('[permission-btn-key]')
        this.__updatePermissionButtonsInserted(nodeList)
      }
    }
  },
  beforeMount() {
    document.addEventListener('DOMNodeInserted', this.__dOMNodeInserted, false)
  },
  activated() {
    document.addEventListener('DOMNodeInserted', this.__dOMNodeInserted, false)
  },
  beforeDestroy() {
    document.removeEventListener('DOMNodeInserted', this.__dOMNodeInserted)
  },
  deactivated() {
    document.removeEventListener('DOMNodeInserted', this.__dOMNodeInserted)
  }
}

export default permissionBtnMixin
