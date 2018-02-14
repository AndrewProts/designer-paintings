<template>
  <div class="cb-item">
      <p class="cb-item__title">
          Заголовок
      </p>
      <p class="cb-item__text">
          персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть специальные поля,
          которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или
          особые пожелания, добавить дату, или логотип компании, если речь идет о корпоративном
          подарке.
      </p>
      <div class="cb-item__line">
          <input id="pic-title" placeholder="Наша Свадьба" maxlength="22" type="text" v-model="header" @input="preview.header = header">
          <span>Заголовок картины</span>

      </div>
      <div class="cb-item__line">
          <input id="pic-name" placeholder="Анастасия и Константин" maxlength="36" type="text" v-model="sign" @input="preview.sign = sign">
          <span>Подпись</span>
      </div>
      <div class="cb-item__line">
          <input id="pic-date" placeholder="29 июля 2015" maxlength="26" type="text" v-model="data" @input="preview.data = data">
          <span>Дата события</span>
      </div>
      <div class="cb-item__line--btns">
  <span id="ariston" class="btn-font" :class="{'btn-font--active':preview.painter == 'Ariston'}" @click="preview.painter = 'Ariston'">
  Ariston
  </span>
          <span id="davinci" class="btn-font" :class="{'btn-font--active':preview.painter == 'DaVinci'}" @click="preview.painter = 'DaVinci'">
  DaVinci
  </span>
          <span id="brody" class="btn-font" :class="{'btn-font--active':preview.painter == 'Brody'}" @click="preview.painter = 'Brody'">
  Brody
  </span>
      </div>
  </div>
</template>

<script>
import preview from '../controlers/preview'

export default {
  data: function () {
    return {
      preview: preview,
      header:'',
      sign:'',
      data:''
    }
  }
}
</script>
