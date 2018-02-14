<template>
  <div class="cb-item">
      <p class="cb-item__title">
          Выберите изображение
      </p>
      <p class="cb-item__text">
          для начала выберите основу, саму картину, на которую вы и гости вашего праздника будете
          наносить отпечатки пальцев с пожеланиями
      </p>
      <div class="cb-item-pics">

          <div class="cb-item-pic" v-for="picture in pictures" @click="preview.pic = picture.src; preview.picTitle = picture.title">
              <img :src="picture.src" :alt="picture.title" :title="picture.title" width="176"
                   height="220">
          </div>

      </div>
  </div>
</template>

<script>
import pictures from '../controlers/pictures'
import preview from '../controlers/preview'

export default {
  data:function () {
    return {
      pictures: pictures,
      preview: preview,
    }
  },
  methods:{

  }
}
</script>
