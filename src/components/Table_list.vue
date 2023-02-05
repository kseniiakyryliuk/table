<template>
     <div>   
<table class="items">
<tr>
          <th>title</th>
          <th> sku</th>
</tr>

<tr class="item" 
                  v-for="item in items" 
                  v-bind:key="item.id">
    <td>{{item.title}}</td>
    <td>{{item.sku}}</td> 
  </tr>


</table>
       </div>  
</template>

<script>
export default
{
    name: 'Table_list',
  props: {
    items:{ type: Array}
  }



}

</script>
<style scoped>
table{
    margin: 30px;
}

th, td {
  border: 1px solid black;
  border-collapse: collapse;
  width: 300px;
  height: 25px;
}

</style>

