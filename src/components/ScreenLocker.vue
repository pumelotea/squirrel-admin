<template>
  <transition enter-active-class="lock" leave-active-class="unlock">
    <div class="screen-lock-container " v-if="locked">
      <div class="filtered"></div>

      <div class="content">
        <div class="info-item">
          <el-avatar
            :size="80"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <div class="info-item nick">
          PUMELOTEA
        </div>
        <div class="info-item tip">
          您的登录状态过期
        </div>
        <div class="info-item password">
          <el-input
            v-model="password"
            type="password"
            clearable
            placeholder="登录密码"
            @keydown.enter.native="enter"
          ></el-input>
        </div>

        <div class="info-item" style="justify-content: left;">
          <el-link :underline="false" style="margin-right: 5px"
            >重新登录</el-link
          >
          <el-link :underline="false" style="margin-right: 5px"
            >忘记密码</el-link
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ScreenLocker',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      locked: false,
      password: ''
    }
  },
  watch: {
    value() {
      this.locked = this.value
      if (this.value) {
        this.lock()
      }
    }
  },
  computed: {
    app() {
      return document.getElementById('app')
    }
  },
  methods: {
    unlock() {
      this.locked = false
      this.$emit('input', this.locked)
      let app = this.app
      app.style.height = ''
      app.style.filter = ''
      app.style.position = ''
      app.style.left = ''
      app.style.right = ''
      app.style.top = ''
      app.style.bottom = ''
      app.style.pointerEvents = ''
      localStorage.setItem('lock', '0')
    },
    lock() {
      let app = this.app
      app.style.height = '100%'
      app.style.filter = 'blur(15px)'
      app.style.position = 'fixed'
      app.style.left = '0'
      app.style.right = '0'
      app.style.top = '0'
      app.style.bottom = '0'
      app.style.pointerEvents = 'none'
      localStorage.setItem('lock', '1')
    },
    enter() {
      this.unlock()
    }
  },
  mounted() {
    this.locked = this.value
    document.body.appendChild(this.$el)
    if (this.value) {
      this.lock()
    }

    //如果存在lock缓存，那么强制加锁，忽略参数
    if(localStorage.getItem('lock') === '1'){
      this.locked = true
      this.lock()
    }
  }
}
</script>

<style scoped>
.screen-lock-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
}

.lock {
  animation: lock-down 1s ease-in-out;
}

.unlock {
  animation: lock-up 1s ease-in-out;
}

.content {
  margin: auto;
  width: 240px;
}

.info-item {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.nick {
  font-weight: bold;
  font-size: 20px;
}

.tip {
  color: #a5a5a5;
  margin-top: 40px;
}

.password {
  margin-top: 20px;
}

@keyframes lock-down {
  0% {
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    /*  opacity: 1;*/
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0px, 0, 0);
  }
  90% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: none;
  }
}

@keyframes lock-up {
  0% {
    transform: translate3d(0, 0px, 0);
  }
  90% {
    transform: translate3d(0px, -3000px, 0);
  }
  100% {
    transform: none;
    opacity: 0;
  }
}
</style>
