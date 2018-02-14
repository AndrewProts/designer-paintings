<template>
  <div class="cb-item">
      <p class="cb-item__title">
          Цвет отпечатков
      </p>
      <p class="cb-item__text">
          наконец, подберите самые подходящие цвета красок, с помощью которых вы и оставите на
          картине свой след на память!<br>
          <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>
      </p>

      <div class="cb-item-marks">
          <div class="cb-item-mark" v-for="(print,index) in prints">
              <input :id="'mark'+index" type="checkbox">
              <label :for="'mark'+index" :title="print.title" @click="addPrint(print.title)"></label>
              <img :src="print.src" alt="print.title"  width="136" height="136">
          </div>
      </div>
  </div>
</template>

<script>
import prints from '../controlers/prints'
import preview from '../controlers/preview'

export default {
  data: function () {
    return {
      prints: prints,
      preview: preview,
    }
  },
  methods: {
    addPrint: function(print){

      for(let i in this.preview.prints){
        if(this.preview.prints[i] == print){
          this.preview.prints.splice(i,1);
          this.deletePrintColor(print);
          return;
        }
      }
      this.preview.prints.push(print);
      this.addPrintColor(print);
    },
    deletePrintColor: function(print){
      for(let i in this.preview.printColors){
        if(this.preview.printColors[i].name == print){
          this.preview.printColors.splice(i,1);
        }
      }
    },
    addPrintColor(print){
      if(print == 'BahamaBlue'){
        this.preview.printColors.push({color:'#3e67d6',name:'BahamaBlue'});
      }
      if(print == 'BambooLeaves'){
        this.preview.printColors.push({color:'#88a050',name:'BambooLeaves'});
      }
      if(print == 'CottageIvy'){
        this.preview.printColors.push({color:'#5b9a71',name:'CottageIvy'});
      }
      if(print == 'LilacPosies'){
        this.preview.printColors.push({color:'#c779b5',name:'LilacPosies'});
      }
      if(print == 'PearTart'){
        this.preview.printColors.push({color:'#dbd84d',name:'PearTart'});
      }
      if(print == 'PottersClay'){
        this.preview.printColors.push({color:'#e0a978',name:'PottersClay'});
      }
      if(print == 'RhubarbStalk'){
        this.preview.printColors.push({color:'#d4839f',name:'RhubarbStalk'});
      }
      if(print == 'Tangelo'){
        this.preview.printColors.push({color:'#f1af82',name:'Tangelo'});
      }
    }
  }
}
</script>
