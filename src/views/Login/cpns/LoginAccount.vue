<template>
  <el-form
    ref="ruleFormRef"
    :model="account"
    :rules="rules"
    label-width="120px"
  >
    <el-form-item prop="name">
      <el-input :prefix-icon="UserFilled"  v-model="account.name" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input :prefix-icon="Lock" v-model="account.password" />
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="submitForm(ruleFormRef)">
    登录
  </el-button>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { UserFilled, Lock } from '@element-plus/icons-vue'
const ruleFormRef = ref<FormInstance>()
const account = reactive({
  name: '',
  password: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>

</style>
