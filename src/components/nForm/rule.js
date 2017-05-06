const rule = {
  email: {
    rule: /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i,
    message: '请输入正确的 email 地址'
  },
  password: {
    rule: /^\w{5,16}$/,
    message: '密码为长度 5-16 位的数字与字母'
  }
}

export default rule