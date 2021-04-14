Vue.component('counter', {
  props:['message'],
  data:function (index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    },
  template:'<p v-on:click="data(index)">{{message}}</p>'
})

var app =new Vue({
  el:"#app",
  data:{
    text:"",
    type:"",
    mess:"",
    flipped:false,
    list:[{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}]
  },
  watch:{
    text: function(){
      if(this.text.length<2){
        this.mess="Name needs to be at least 2 characters and email needs to be formatted as example@domain.xxx."
      }else{
        this.mess="Email needs to be formatted as example@domain.xxx."
      }
    },
    type: function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(this.type === re){
        this.mess="Submitted"
      }else{
        this.mess="Not Submitted"
      };
  return re.test(email);
}
  }
})