const user_model = require('../db/user_model')
const jwt = require('jsonwebtoken')
const jwt_config = require('../config/jwt_config')

const login = async (ctx) => {
  const {email} = ctx.params
  
  const {password} = ctx.request.body
  console.log(email, password)
  try {
    let user = await user_model.user_select_by_email([['id', 'password', 'nikiname', 'email'], email])
    // console.log(user.password)
    if (user.length) {
      user = user[0]
      console.log(user.password)
      if (user.password === password) {
        const token_user = {email: user.email, nikiname: user.nikiname, id: user.id}
        // console.log(token_user)
        
        const token = jwt.sign(token_user, jwt_config.secret, {expiresIn: '2h'})
        ctx.body = {
          user: token_user,
          token
        }
      } else {
        ctx.throw(400, '用户名或密码错误')
      }
    } else {
      ctx.throw(400, '用户名不存在')
    }
  } catch (error) {
    ctx.throw(400, error)
  }
}

const register = async (ctx) => {
  const user =  {username, password, nikiname, email} = ctx.request.body
  const res = await user_model.user_insert(user)
}

const get_user = async (ctx) => {
  const {id} = ctx.params
  try {
    const user = await user_model.user_select_by_id(id)
    
  } catch (error) {
    
  }
}

module.exports = {
  login,
  register,
  get_user
}
