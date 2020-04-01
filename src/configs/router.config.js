import router from '../router'
import store from '../store'
import { forEachMenuTree } from '@/utils/router-util'

// 路由拦截器
router.beforeEach((to, from, next) => {
  if (!store.state.isRouterInit) {
    //菜单测试数据 TODO 真实数据应该从服务端读取
    let mappings = [
      {
        name: '看板',
        path: '/dashboard',
        view: '/dashboard',
        isRouter: true,
        isKeepalive: true,
        type: 'menu',
        children: [
          {
            name: '重置',
            permissionKey: 'reset',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          },
          {
            name: '新增',
            permissionKey: 'add',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          },
          {
            name: '编辑',
            permissionKey: 'edit',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          }
          // {
          //   name: '编辑弹出框取消',
          //   permissionKey: 'cancel',
          //   path: '',
          //   view: '',
          //   isRouter: false,
          //   isKeepalive: false,
          //   type: 'button',
          //   children: []
          // }
        ]
      },
      {
        name: '外部链接',
        path: '/links',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '松鼠乐园外部1',
            path: '',
            view: '',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            linkTarget: '_self', //刷新自己
            externalLinkAddress: 'http://www.squirrelzoo.com',
            type: 'menu',
            children: []
          },
          {
            name: '松鼠乐园外部2',
            path: '',
            view: '',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.squirrelzoo.com',
            linkTarget: '_blank', //浏览器标签
            type: 'menu',
            children: []
          },
          {
            name: '松鼠乐园内部',
            path: '/squirrelzoo',
            view: '/iframe',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.squirrelzoo.com',
            linkTarget: '_tab', //页内标签
            type: 'menu',
            children: []
          },
          {
            name: '百度内部',
            path: '/baidu',
            view: '/iframe',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.baidu.com',
            linkTarget: '_tab', //页内标签
            type: 'menu',
            children: []
          }
        ]
      },
      {
        name: '用户',
        path: '/user-mgt',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '高级管理',
            path: '/adv',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'menu',
            children: [
              {
                name: '高级111',
                path: '/xxxxxx111',
                view: '/role',
                isRouter: true,
                isKeepalive: false,
                type: 'menu',
                children: []
              }
            ]
          },
          {
            name: '角色管理',
            path: '/role',
            view: '/role',
            isRouter: true,
            isKeepalive: true,
            type: 'menu',
            children: [
              {
                name: '新增',
                permissionKey: 'add',
                path: '',
                view: '',
                isRouter: false,
                isKeepalive: false,
                type: 'button',
                children: []
              },
              {
                name: '编辑弹出框取消',
                permissionKey: 'cancel',
                path: '',
                view: '',
                isRouter: false,
                isKeepalive: false,
                type: 'button',
                children: []
              }
            ]
          },
          {
            name: '菜单管理',
            path: '/menu',
            view: '/menu',
            isRouter: true,
            isKeepalive: false,
            type: 'menu',
            children: []
          },
          {
            name: '用户管理',
            path: '/user',
            view: '/user',
            isRouter: true,
            isKeepalive: false,
            type: 'menu',
            children: []
          }
        ]
      },
      {
        name: '测试管理',
        path: '', //TODO  这个路径要拼接进实际的路由 //如果父节点为空，那么久产生一个临时的
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '测试项目组',
            path: '/test/aaa',
            view: '/role',
            isRouter: true,
            isKeepalive: false,
            type: 'menu',
            children: []
          }
        ]
      },
      {
        name: '部门管理',
        path: '/department',
        view: '/department',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      },
      {
        name: 'aaaaaa',
        path: '/department1',
        view: '/department',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: []
      }
    ]

    let { routerList, menuTree, tabNameMappings } = forEachMenuTree(mappings)
    store.commit('setRouterMappings', routerList)
    store.commit('setMenuTree', menuTree)
    store.commit('setTabNameMappings', tabNameMappings)
    store.state.isRouterInit = true

    console.log(
      `%c LTAdmin %c Init Router & Menu & NavTab Success %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#20a0ff ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
    next(to)
  } else {
    if (store.state.isReload) {
      store.state.isReload = false
      //还原激活状态
      let menuId = to.meta['menuId'] || ''
      let node = store.state.tabNameMappings[menuId]
      if (node) {
        //菜单部分状态还原
        let tab = {
          menuId: menuId,
          name: node.name,
          path: node.routerPath,
          menuPath: JSON.parse(JSON.stringify(node.menuPath)),
          breadcrumb: node.breadcrumb,
          buttons: node.buttons,
          buttonsMap: node.buttonsMap
        }

        store.commit('setActiveRoute', tab)
        store.commit('setActiveMenu', tab.menuPath)
        //NavTab部分状态还原
        store.commit('pushNav', tab)
      }
    }
    next()
  }
})

router.afterEach((to, from) => {})
