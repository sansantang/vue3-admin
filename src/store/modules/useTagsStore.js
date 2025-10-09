import { defineStore } from 'pinia'
import { ref } from 'vue'

//组合式写法
export const useTagsStore = defineStore('tagsStore', () => {
  const tags = ref([
    {
      label: 'profile',
      name: 'profile',
      path: '/profile',
      meta: {
        title: 'profile',
        icon: 'el-icon-user'
      }
    }
  ])

  function selectMenuTotags(item) {
    const find = tags.value.find((tag) => tag.name === item.name)
    if (find) {
      // return find
    } else {
      tags.value.push(item)
    }
    console.log(tags.value)
  }

  function removTag(item) {
    tags.value = tags.value.filter((tag) => tag.name !== item.name)
  }

  return { tags, selectMenuTotags, removTag }
})
