<template>
  <div class="tinymce-editor">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
      :key="id"
    >
    </editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/link'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/fullpage'
import 'tinymce/plugins/code'
import 'tinymce/plugins/charmap'
export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default:
        'lists image media table  wordcount  link code fullscreen fullpage charmap'
    },
    toolbar: {
      type: [String, Array],
      default: () => {
        return [
          'fullscreen undo redo   |  formatselect fontselect fontsizeselect | bold italic forecolor backcolor charmap  | alignleft aligncenter alignright alignjustify  |subscript  superscript|link unlink| bullist numlist outdent indent |  lists image media table   | removeformat '
        ]
      }
    }
  },
  data() {
    return {
      //初始化配置
      id: 'richeditor-1',
      init: {
        selector: '',
        language_url: '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 400,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        // menubar: 'file edit insert view format table',
        menubar: false,
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          console.log(blobInfo)
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }
      },
      myValue: this.value
    }
  },
  beforeDestroy() {
    tinymce.remove()
  },
  methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
    onClick(e) {
      this.$emit('onClick', e, tinymce)
    },
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = ''
    },
    initEditor() {
      this.id = 'richeditor-' + new Date().getTime()
      this.init.selector = '#' + this.id
      this.$nextTick(() => {
        tinymce.init(this.init)
      })
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue
    },
    myValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted() {
    if (!this.$route.meta.isKeepalive) {
      this.initEditor()
    }
  },
  activated() {
    this.initEditor()
  },
  deactivated() {
    tinymce.remove()
  }
}
</script>
<style scoped></style>
