<template>
  <div id="app">
    <Form_for_table @create="add"/>
  <Table_list v-bind:items="items"/>
</div>
</template>

<script>
import Table_list from './components/Table_list.vue'
import Form_for_table from './components/Form_for_table.vue'
export default {
  name: 'App',
  components: {
    Table_list,
    Form_for_table
  },
  data(){
    return{
      items:[],
    }
  },
  methods:
{
  add(item){
  this.items.push(item);
  localStorage.setItem('items',JSON.stringify(this.items));
  },

}


}
</script>

<style>
body{
    background: linear-gradient( to right, #82efd3 , #cfda89,#6df794);
    margin: 0 auto;
}
#app{
  display: flex;
  justify-content: space-around;
}
</style>
