<template>
  <tiny-pop-upload :action="action" accept="image/*" :upload-file-type="['.png', '.jpg']"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
</script>
