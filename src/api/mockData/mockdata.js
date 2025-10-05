export default {
  data: () => ({
    id: '@id',
    name: '@name',
    age: '@integer(20,50)'
  }),
  login: () => ({
    success: true,
    code: 200,
    data: {
      token: generateGuidWithoutHyphens()
    },
    message: '登录成功'
  }),
  profile: () => ({
    success: true,
    code: 200,
    data: {
      role: [
        {
          id: '1',
          title: '超级管理员'
        }
      ],
      _id: '68e02b40cab6e042687978bf',
      id: '612710a9ec87aa543c9c3420',
      username: 'super-admin',
      title: '超级管理员',
      avatar: 'https://res.lgdsunday.club/my-avatar.jpg',
      permission: {
        menus: ['userManage', 'roleList', 'permissionList', 'articleRanking', 'articleCreate'],
        points: ['distributeRole', 'importUser', 'removeUser', 'distributePermission']
      }
    },
    message: '获取资料成功'
  })
}

function generateGuidWithoutHyphens() {
  // 生成标准的 GUID
  const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })

  // 移除连字符
  return guid
}
