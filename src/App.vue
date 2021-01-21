<template>
  <div id="app">
    {{$store.state.name}}
    {{$store.state.a.name}}
    {{$store.state.b.name}}
    <br>
    <button @click="$store.commit('changeName')">changName</button>
    <button @click="$store.commit('a/changeName')">changaName</button>
    <button @click="$store.commit('b/changeName')">changbName</button>
  </div>
</template>


<script>

export default {
  name: "App",

};
</script>

<style>

</style>
