export default {
  install(vue) {
    vue.prototype.$themeLoader = this
  },
  getThemeList() {
    return window.themes
  },
  getActiveTheme() {
    return localStorage.getItem('theme')
  },
  unsetActiveTheme() {
    let link = document.getElementById('_theme')
    localStorage.removeItem('theme')
    if (link) {
      link.parentNode.removeChild(link)
    }
  },
  setActiveTheme(name) {
    let link = document.getElementById('_theme')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.type = 'text/css'
      link.id = '_theme'
    }
    link.href = `./themes/${name}.css`
    document.getElementsByTagName('head')[0].appendChild(link)
    localStorage.setItem('theme', name)
  },
  loadUserSettings() {
    let themeName = localStorage.getItem('theme')
    if (themeName) {
      this.setActiveTheme(themeName)
    }
  }
}
