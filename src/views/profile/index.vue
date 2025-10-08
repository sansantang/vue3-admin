<template>
  <div class="">个人中心 {{ $t('message.hello') }}</div>
  <el-pagination v-model:current-page="currentPage1" :page-size="100" :size="size" :disabled="disabled"
    :background="background" layout="total, prev, pager, next" :total="1000" />
</template>

<script setup>
import { ref } from 'vue'


const currentPage1 = ref(5)

const size = ref('default')
const background = ref(false)
const disabled = ref(false)

</script>

<style lang="scss" scoped></style>
