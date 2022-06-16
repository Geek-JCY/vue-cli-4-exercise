<!--
 * @Author: jichengye
 * @Date: 2022-06-15 13:21:22
 * @LastEditTime: 2022-06-15 23:54:18
 * @LastEditors: jichengye
 * @Description:
 * @FilePath: /keepstudy/vue/vue-cli-4-exercise/src/views/Test.vue
 * $v$ 代码改变世界！奥利给！ $v$
-->
<template>
  <div id="chanLoginV3"></div>
</template>

<script>
import commonLogin from '@chanjet/common-login'

export default {
  name: 'Test',

  components: {},

  props: {},

  data () {
    return {}
  },

  computed: {},

  mounted () {
    const loginOption = {
      logo: '', // logo
      themeColor: '#a50144', // 主题色
      loginTitle: '', // 标题
      loginSlogan: '', // 副标题
      registerTitle: '注册畅捷通帐号', // 注册 标题
      registerSlogan: '一号直达好会计·工作圈·易代账·好生意·T+·客户管家', // 注册 loginSlogan 副标题

      loginModule: ['mobile', 'account', 'wx', 'qq'], // 显示的模块 手机、账号、微信、qq
      loginDefault: 'mobile', // 默认显示的登录模块 mobile / account

      showLoginAndReg: true, // 是否显示 注册登录模块切换
      defaultLoginOrReg: 'login', // 注册 register or 登录 login

      fixed: false, // 是否浮动？默认false
      closeIcon: false, // 配合 fixed:true使用 是否显示关闭功能
      divId: '', // 嵌入的div
      bodyBackground: '', // body背景大图
      loginSuccessCallback: () => {
        this.loginSuccessCallback()
      }
    }

    commonLogin.init(loginOption, function () {
      console.log('init')
    })
  },

  methods: {
    loginSuccessCallback () {}
  }
}
</script>

<style lang='' scoped></style>
