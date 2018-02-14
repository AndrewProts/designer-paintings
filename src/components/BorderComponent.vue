<template>
  <div class="cb-item">
      <p class="cb-item__title">
          Рама
      </p>
      <p class="cb-item__text">
          подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто
          оставляете "пальчики", а создаете предмет декора для дома и офиса:
      </p>
      <div class="cb-item-borders">

          <div class="cb-item-border" v-for="border in borders" @click="preview.border = border.src; preview.borderTitle = border.title">
              <img :src="border.src" :alt="border.title" :title="border.title"
                   width="120" height="150">

          </div>

      </div>
  </div>
</template>

<script>
import borders from '../controlers/borders'
import preview from '../controlers/preview'

export default {
  data: function () {
    return {
      borders: borders,
      preview: preview
    }
  }
}
</script>
