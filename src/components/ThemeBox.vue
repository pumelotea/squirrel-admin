<template>
  <el-popover
    placement="top-start"
    width="200"
    title="主题列表"
    trigger="click"
  >
    <i slot="reference" class="el-icon-setting"></i>

    <div style="max-height: 400px;overflow: auto">
      <el-card
        shadow="never"
        v-for="(e, index) in themes"
        :key="e.path"
        style="margin-bottom: 5px"
      >
        <div class="theme-item">
          <div
            class="primary-color-box"
            :style="`background:${e.primaryColor}`"
          ></div>
          <div style="flex: 1">
            {{ e.name }}
          </div>
          <div>
            <el-switch
              v-model="activeValues[index]"
              @change="
                e => {
                  change(index, e)
                }
              "
            />
          </div>
        </div>
      </el-card>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'ThemeBox',
  data() {
    return {
      themes: this.$themeLoader.getThemeList(),
      activeValues: []
    }
  },
  computed: {
    activeTheme() {
      return this.$themeLoader.getActiveTheme()
    }
  },
  methods: {
    getActiveStatus() {
      let index = this.themes.findIndex(e => {
        return e.path === this.activeTheme
      })
      if (index !== -1) {
        this.$set(this.activeValues, index, true)
      }
    },
    change(index, value) {
      if (!value) {
        this.$themeLoader.unsetActiveTheme()
        return
      }
      this.activeValues = this.activeValues.map((e, i) => {
        if (i !== index) {
          return false
        }
        this.$themeLoader.setActiveTheme(this.themes[index].path)
        return e
      })
    }
  },
  mounted() {
    this.getActiveStatus()
  }
}
</script>

<style scoped>
.theme-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.primary-color-box {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 5px;
}
</style>
