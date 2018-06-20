<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <h2>{{ greetings }}</h2>
  </div>
</template>

<script>
import { fetchHello } from '@/api'

export default {
  name: 'HiName',
  data () {
    return {
      msg: 'Hi',
      greetings: ''
    }
  },
  methods: {
    getHi() {
      var response = fetchHello()
      return { greetings: response.data }
    }
  },
  created() {
    this.getHi()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
