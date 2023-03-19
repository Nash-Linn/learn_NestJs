<template>
  <el-form ref="ruleFormRef" :model="forms" status-icon label-width="120px" class="demo-ruleForm">
    <el-form-item label="账号">
      <el-input v-model="forms.name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="forms.pass" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item label="验证码">
      <div>
        <el-input v-model="forms.code" />
        <img :src="codeUrl" alt="" @click="resetCode" />
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
    </el-form-item>
  </el-form>

  <hr />
  <el-button type="primary" size="default" @click="downFile">下载文件</el-button>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const codeUrl = ref<string>('api/user/code')

const resetCode = () => {
  codeUrl.value = codeUrl.value + '?' + Math.random()
}

const ruleFormRef = ref<FormInstance>()

const forms = reactive({
  name: '',
  pass: '',
  code: ''
})

const submitForm = () => {
  fetch('/api/user/create', {
    method: 'post',
    body: JSON.stringify(forms),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res ', res)
    })
}

const downFile = () => {
  useFetch('http://localhost:3000/upload/stream')
}

const useFetch = async (url: string) => {
  const res = await fetch(url).then((res) => res.arrayBuffer())
  const blob = new Blob([res])
  const u = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = u
  a.download = '图片.png'
  a.click()
}
</script>
