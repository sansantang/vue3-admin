<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/index'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const store = useUserStore()
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

const formRef = ref(null)
const i18n = useI18n()
const rules = reactive({
  username: [
    { required: true, message: i18n.t('msg.login.usernameRule'), trigger: 'blur' },
  ],
  password: [
    { required: true, min: 6, message: i18n.t('msg.login.passwordRule'), trigger: 'blur' },
  ],
})

const isLoading = ref(false)
function handleLogin() {
  formRef.value.validate((valid) => {
    if (valid) {
      isLoading.value = true
      store.uselogin('user/login', loginForm)
        .then((res) => {
          console.log(res)
          isLoading.value = false
          router.push('/')
        }).catch(err => {
          console.log(err)
        })
    } else {
      console.log('验证失败')
      isLoading.value = false
    }
  })
}
</script>

<template>
  <div class="body-login">
    <el-form :model="loginForm" class="login-container" ref="formRef" :rules="rules">
      <h1>
        {{ $t('msg.login.title') }}
      </h1>
      <el-form-item prop="username">

        <el-input type="input" :placeholder="$t('msg.login.usernamePlaceholder')" v-model="loginForm.username"
          :prefix-icon="User"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" :placeholder="$t('msg.login.passwordPlaceholder')" v-model="loginForm.password"
          show-password :prefix-icon="Lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">{{ $t('msg.login.loginBtn') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.body-login {
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-color: #2A3A4E;
  overflow: hidden;
}

.login-container {
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 250px auto;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }

  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
