<template>
  <div class="cb-result__bottom">
      <form action="" method="POST">
          <p class="cb-next" @click="send()">Далее</p >
          <input name="result" id="" type="text" hidden="">
      </form>
  </div>
</template>

<script>
import preview from '../controlers/preview'

export default {
  data: function () {
    return{
      preview: preview
    }
  },
  methods:{
    send: function () {
      console.log('next');
      var err='';
      if(!this.preview.pic) err+='Не выбрано изображение! ';
      if(!this.preview.border) err+='Не выбрана рамка! ';
      if(!this.preview.header) err+='Введите заголовок! ';
      if(!this.preview.sign) err+='Подпишите картину! ';
      if(!this.preview.data) err+='Введите дату! ';
      if(!this.preview.prints.length) err+='Выберите цвет отпечатка! ';
      if(err){
        alert(err)
      }else{
        $.ajax({
          url: 'server',
          type:'post',
          data: {
            pic:his.preview.pic,
            border:his.preview.boder,
            header:his.preview.header,
            sign:his.preview.sign,
            data:his.preview.data,
            prints:his.preview.prints
          },
          success: function(){
            alert('Даные успешно отправлены.');
          }
        });
      }
    }
  }
}
</script>
