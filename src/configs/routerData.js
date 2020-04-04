const routerData = [
  {
    name: '看板',
    icon:'el-icon-house',
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
    name: 'element ui',
    icon:'el-icon-eleme',
    path: '/element',
    view: '/iframe',
    isRouter: true,
    isKeepalive: false,
    externalLink: true, //外链
    linkTarget: '_tab', //刷新自己
    externalLinkAddress: 'https://element.eleme.cn/#/zh-CN/component/changelog',
    type: 'menu',
    children: []
  },
  {
    name: '外部链接',
    icon:'el-icon-link',
    path: '/links',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '松鼠乐园外部1',
        icon:'el-icon-menu',
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
        icon:'el-icon-menu',
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
        icon:'el-icon-menu',
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
        icon:'el-icon-menu',
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
    icon:'el-icon-user',
    path: '/user-mgt',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '高级管理',
        icon:'el-icon-menu',
        path: '/adv',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '高级',
            icon:'el-icon-menu',
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
        icon:'el-icon-menu',
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
        icon:'el-icon-menu',
        path: '/menu',
        view: '/menu',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      },
      {
        name: '用户管理',
        icon:'el-icon-menu',
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
    icon:'el-icon-s-data',
    path: '',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '测试项目组',
        icon:'el-icon-menu',
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
    icon:'el-icon-box',
    path: '/department',
    view: '/department',
    isRouter: true,
    isKeepalive: false,
    type: 'menu',
    children: []
  },
  {
    name: '组件Demo',
    icon:'el-icon-cpu',
    path: '/demo',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '富文本编辑器',
        icon:'el-icon-menu',
        path: '/richeditor',
        view: '/richeditor',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      },
    ]
  }
]

export default routerData
