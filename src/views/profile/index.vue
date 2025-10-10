<template>
  <div class="app-container">
    <!-- 左侧区域 -->
    <div class="left-panel">
      <div class="intro">介绍（已升级 element-plus 正式版）</div>
      <el-avatar class="animated-avatar" src="https://res.lgdsunday.club/my-avatar.jpg" :size="60"></el-avatar>
      <div class="user-name">super-admin</div>
      <div class="user-role">超级管理员</div>
      <div class="project-intro">
        <h3>项目介绍</h3>
        <p>《vue3 改写 vue-element-admin，实现后台前端综合解决方案》项目演示</p>
      </div>
      <div class="project-features">
        <h3>项目功能</h3>
        <ul>
          <li>Vue3 + 全家桶 <el-tag type="success" class="tag">✔</el-tag></li>
          <li>Element-Plus <el-tag type="success" class="tag">✔</el-tag></li>
          <li>vue-element-admin <el-tag type="success" class="tag">✔</el-tag></li>
          <li>ESLint + Git Hooks <el-tag type="success" class="tag">✔</el-tag></li>
        </ul>
      </div>
    </div>
    <!-- 右侧区域 -->
    <div class="right-panel">
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane label="作者" name="author">
          <div class="author-info">
            <el-avatar src="https://example.com/author-avatar.jpg" :size="50"></el-avatar>
            <div class="author-details">
              <div>随便写写</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="功能" name="function">
          <div class="function-item">Vue3 + 全家桶</div>
          <div class="function-item">Element-Plus</div>
          <div class="function-item">vue-element-admin</div>
          <div class="function-item">ESLint + Git Hooks</div>
          <div class="function-item">
            架构设计
            <div class="architecture-desc">
              阿里前端 P7 岗被称为《技术专家》，也有人喜欢叫他们为“前端架构师”，既然被称为“架构师”，那么架构设计当然是不可缺少的一环咯
            </div>
          </div>
          <div class="function-item">权限验证（页面权限、功能权限、动态权限、权限配置）</div>
          <div class="function-item">功能引导</div>
          <div class="function-item">可配置 + 收缩侧边栏</div>
          <div class="function-item">动态主题色</div>
          <div class="function-item">Tags View</div>
          <div class="function-item">svg sprite 图标</div>
          <div class="function-item">国际化</div>
          <div class="function-item">动态换肤</div>
          <div class="function-item">页面搜索</div>
          <div class="function-item">excel 导出、导入</div>
          <div class="function-item">zip 导入</div>
          <div class="function-item">富文本 + MarkDown 编辑器</div>
          <div class="function-item">动态表格 + 拖拽表格 + 内联编辑表格</div>
          <div class="function-item">统一错误处理</div>
          <div class="function-item">发布</div>
          <div class="function-item">其他</div>
        </el-tab-pane>
        <el-tab-pane label="章节" name="chapter">
          章节相关内容
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('author');
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.left-panel {
  width: 400px;
  padding: 20px;
  border-right: 1px solid #e6e6e6;
  text-align: center;
}

.intro {
  font-size: 16px;
  margin-bottom: 20px;
}

.animated-avatar {
  position: relative;
  cursor: pointer;
}

.animated-avatar:hover::before {
  content: 'Hello 超级管理员';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.user-role {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}

.project-intro,
.project-features {
  text-align: left;
  margin-top: 30px;
}

.project-intro h3,
.project-features h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.tag {
  height: 20px;
  line-height: 20px;
  padding: 0 8px;
  font-size: 12px;
}

.right-panel {
  flex: 1;
  padding: 20px;
}

.author-info {
  display: flex;
  align-items: flex-start;
}

.author-details {
  margin-left: 10px;
}

.function-item {
  margin-bottom: 8px;
}

.architecture-desc {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
</style>
