<template>
    <div>
        <el-button
                plain
                @click="open">
            Closes automatically
        </el-button>
        <el-button
                plain
                @click="open2">
            Won't close automatically
        </el-button>
    </div>


</template>

<script>
  import { Notification } from 'element-ui'

  export default {
    methods: {
      open() {
        Notification.success({ title: 'test' })
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        })
      }
    }
  }
</script>
