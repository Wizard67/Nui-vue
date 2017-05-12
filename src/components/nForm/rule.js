const rule = {
  email: {
    type: 'text',
    reg: /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i,
    message: '请输入正确的 email 地址'
  },
  password: {
    type: 'password',
    reg: /^\w{5,16}$/,
    message: '密码为长度 5-16 位的数字字母'
  },
  title: {
    type: 'text',
    reg: /^.{5,20}$/,
    message: '标题的长度为 5-20 位'
  },
  summary: {
    type: 'textarea',
    reg: /^.{15,100}$/,
    message: '介绍的长度为 15-100 位'
  },
  picture: {
    type: 'file',
    reg: '',
    message: ''
  }
}

export default rule