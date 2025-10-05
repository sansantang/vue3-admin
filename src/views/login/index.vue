<script setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/index'
import router from '@/router'
const store = useUserStore()
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

const formRef = ref(null)

const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 2, max: 20, message: '长度应为 2 到 20 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度应为 6 到 20 个字符', trigger: 'blur' },
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
        用户登录{{ store.state.name }}
      </h1>
      <el-form-item prop="username">

        <el-input type="input" placeholder="请输入账号" v-model="loginForm.username" :prefix-icon="User"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" show-password
          :prefix-icon="Lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
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
