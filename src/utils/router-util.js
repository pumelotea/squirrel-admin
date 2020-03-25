
export function forEachMenuTree(menuTree) {
  let routerList = []
  let tabNameMappings = {}
  let forEachTree = (tree, pNode) => {
    for (let i = 0; i < tree.length; i++) {
      if (!pNode) {
        pNode = {
          routerPath: ''
        }
      }

      //拼接路由
      tree[i]['routerPath'] = pNode['routerPath'] + tree[i].path

      if(tree[i].routerPath){
        tabNameMappings[tree[i].routerPath] = tree[i].name
      }

      if (tree[i].isRouter === false) {
        forEachTree(tree[i].children, tree[i])
      } else {
        routerList.push(tree[i])
      }
    }
  }
  forEachTree(menuTree)
  return { routerList, menuTree ,tabNameMappings}
}
