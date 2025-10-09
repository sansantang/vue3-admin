<template>
  <div class="tags">
    <!-- <el-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'profile'"
      :effect="tag.name === route.name ? 'dark' : 'plain'" @click="handleGoRouter(tag)"
      @close="handleClose(tag, index)">
      {{ generateRouteTitle(tag.meta.title) }}
    </el-tag> -->

    <div class="tagItems" v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'profile'"
      :effect="tag.name === route.name ? 'dark' : 'plain'" @click="handleGoRouter(tag)"
      :class="isActive(tag) ? 'active' : ''">
      {{ generateRouteTitle(tag.meta.title) }}
      <el-icon class="el-icon-close" v-if="tag.name !== 'profile' && tag.name !== route.name"
        @click="handleClose(tag, index)">
        <Close />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">


import { useRoute } from 'vue-router';
import { useTagsStore } from '@/store/modules/useTagsStore';
import router from '@/router';
import { computed } from 'vue';
import { generateRouteTitle } from '@/utils/i18n'
import { useVarCssStore } from '@/store/modules/useVariableStore';
import { Close } from '@element-plus/icons-vue'


const tags = computed(() => useTagsStore().tags)
const route = useRoute();
const store = useTagsStore()
const varCssStore = useVarCssStore()

const isActive = function (tag) {
  return route.path === tag.path
}

function handleGoRouter(tag) {
  console.log(route.path)
  router.push(tag.path)
}

function handleClose(tag, index) {
  if (tag.name === 'profile') return
  store.removTag(tag) //更新tag
  if (tag.name !== route.name) return

  //切换当前index的前一个tag
  const preTag = tags.value[index - 1]
  store.selectMenuTotags(preTag)
  router.push(preTag.path)
}
</script>

<style scoped>
.el-tag {
  margin: 0 10px 10px 0;
  cursor: pointer;
}

.tags {
  display: flex;
  gap: 3px;

  .tagItems {
    align-items: center;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    /* color: var(--el-tag-text-color); */
    display: inline-flex;
    height: 24px;
    justify-content: center;
    line-height: 1;
    padding: 0 9px;
    vertical-align: middle;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
  }

  .active {
    background-color: v-bind(varCssStore.state.menuBg);
    color: v-bind(varCssStore.state.menuActiveText);
  }
}
</style>
