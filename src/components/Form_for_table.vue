<template>
 <div class="">
 
 <button type="button" class="add" @click="showForm=true" >Add item</button>

<form v-show="showForm" @submit.prevent>
           <p>Add item</p>
 <input type="text" placeholder="Title" 
 @blur="$v.item.title.$touch()"  :class="{'red-border':$v.item.title.$error}" v-model="item.title">

 <template v-if="$v.item.title.$error">
        <p class="error" v-if="!$v.item.title.required.$response">Поле пусте, внесіть дані</p>
     <p class="error" v-if="!$v.item.title.minLength.$response">Внесіть щонайменше 5 символів </p>
</template>

 <input type="text"  placeholder="SKU"  v-model="item.sku" @blur="$v.item.sku.$touch()" >

 <template v-if="$v.item.sku.$error">     
           <p class="error" v-if="!$v.item.sku.checkAlpha.$response">Заборонено вносити буквенні символи</p>   
          <p class="error" v-if="!$v.item.sku.minLength.$response">Внесіть щонайменше 6 символів </p>
</template>


 <div class="actions">
 <button type="submit" @click="add"  class="submit" :disabled="$v.item.title.$invalid || $v.item.sku.$invalid">Add new item</button>
  <button @click="resetForm">Cancel</button>
 </div> 
<img src="../assets/cancel.png" class="del" @click="showForm=false">
</form>

</div>

</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { minLength,required} from '@vuelidate/validators'
import {checkAlpha} from '../validators_sku/checkAlpha'
export default
{    name: 'Form_for_table',
  props: {
    items: Array
  },
   
  validations: {
   item:{
      title:{
         minLength: minLength(5),
          required},
      sku:{
        required,
        minLength: minLength(6),
        checkAlpha},
    }},


data(){
return{
    $v:useVuelidate(),
showForm:false,
item:{
    title:'',
    sku:''
}
}
},
methods:{
    add(){ 
       this.item.id=Date.now();
       this.$emit('create', this.item),     
       this.item={
    title:'',
    sku:'',
}
this.showForm=false
         },
/*checkAlpha(sku){
    const probil=/ /;
    if ((!sku.match(/[a-z]/)) || (!sku.match(/[A-Z]/)) ||(probil.test(sku))) 
    return true;
    else return false;
},*/
resetForm(){
   this.item={
    title:'',
    sku:'',
}
}

}
  }
</script>

<style>

.add{
    color: white;
  border: none;
  border-radius: 10px;
  background: linear-gradient( to right, #fc9c02 , #fe3a3a);
   width: 270px;
   margin:  30px 40px ;
   height: 30px;
}
.red-border{
border-color: #fe3a3a;

}

form{
  margin: 0 20px 20px 20px;
  width: 300px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  padding: 5px;
}
p{
  font-size: 18px;
  text-align: center;
  padding: 0;
}
form input{
  margin: 0 auto;
  height: 20px;
  width: 270px;
  margin-bottom: 7px;
  cursor: pointer;
}
.actions{
display: flex;
justify-content: space-around;
}
.actions button{
  width: 100px;
  background-color: #473fda;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
}
.del{
position: absolute;
top: 1px;
right: 1px;
width: 20px;
}
.error{
    margin: 1px;
    text-align: center;
    color: red;
    font-size: 12px;
}
.submit:disabled{
background-color: #fc0266;

}
</style>
