import { uuid } from './common-util'

export function forEachMenuTree(menuTree) {
  let routerList = []
  let tabNameMappings = {}
  let forEachTree = (tree, pNode) => {
    for (let i = 0; i < tree.length; i++) {
      tree[i]['menuId'] = uuid()

      if (!pNode) {
        pNode = {
          routerPath: '',
          menuPath: []
        }
      }

      //拼接路由
      tree[i]['routerPath'] = pNode['routerPath'] + tree[i].path
      //预先生成菜单节点路径
      tree[i]['menuPath'] = [...pNode['menuPath'], tree[i]['menuId']]

      if (tree[i].isRouter === false) {
        forEachTree(tree[i].children, tree[i])
      } else {
        routerList.push(tree[i])
        if (tree[i].routerPath) {
          //路由路径映射路由节点
          tabNameMappings[tree[i].routerPath] = tree[i]
        }
      }
    }
  }
  forEachTree(menuTree)
  return { routerList, menuTree, tabNameMappings }
}

export function findMenuByMenuId(tree, menuId) {
  let node = null
  let forEachTree = tree => {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].menuId === menuId) {
        node = tree[i]
      }

      if (tree[i].isRouter === false) {
        forEachTree(tree[i].children, tree[i])
      }
    }
  }
  forEachTree(tree)
  return node
}
