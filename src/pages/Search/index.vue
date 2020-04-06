<template>
<div>

  <h2>Search</h2>
  <p>{{keyword1}}</p>
   <p>{{keyword2}}</p>
</div>
  
 
</template>
 
<script>
export default {
  name: "Search",
  props:['keyword1','keyword2']
};
</script>

<style lang="less" scoped>
</style>
