<template>
  <div class="cb-result__content">
      <p class="cb-result__data">
          <span>Изображение:</span>
          <strong></strong>
          <strong>{{preview.picTitle}}</strong>
      </p>
      <p class="cb-result__data">
          <span>Рама:</span>
          <strong></strong>
          <strong>{{preview.borderTitle}}</strong>
      </p>
      <div class="cb-result__data">
          <span style="float: left">Отпечатки:</span>
          <strong v-if="!preview.printColors.length">Не выбраны</strong>
          <div v-else style="width:20px;height:20px;border-radius: 3px;margin-left: 3px;" v-for="color in preview.printColors" :style="{'background-color':color.color}">

          </div>

      </div>
      <div class="cb-result__object">
          <div class="cb-result__img">
            <img v-if="preview.pic" :src="preview.pic">
          </div>
          <div class="cb-result__border">
            <img v-if="preview.border" :src="preview.border">
          </div>
          <p class="cb-result__text__title ariston">{{preview.header}}</p>
          <p class="cb-result__text__name ariston">{{preview.sign}}</p>
          <p class="cb-result__text__date ariston">{{preview.data}}</p>
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
  }
}
</script>
