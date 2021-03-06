// 导入 并 导出所有的 默认导出的模块
export {default as login} from './acl/login' // {default: {}}
export {default as user} from './acl/user'
export {default as role} from './acl/role'
export {default as permission} from './acl/permission'
export {default as category} from './category'
export {default as clientUser} from './clientUser'
export {default as order} from './order'
// 删除的操作
// =====================
// 导入属性并暴露出去的操作
export {default as trademark} from './product/trademark'
export {default as attr} from './product/attr'
export {default as spu} from './product/spu'
export {default as sku} from './product/sku'



/* {
  login: {},
  user: {},
  role,
  permission,
  category,
  clientUser,
  order,
  trademark,
  attr,
  spu,
  sku
} */