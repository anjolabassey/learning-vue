<template>
  <div class="hello">
    <div class="heading">
      <h1>{{ msg }}</h1>
      <form>
          First name:
          <input type="text" v-model="fname"><br>
          Last name:
          <input type="text" v-model="lname"><br>
          Maiden name:
          <input type="text" v-model="mname"><br>
          Gender:
          <select v-model="genders">
              <option v-for="g in gender" :key="g"> {{g}}</option>
          </select><br>
          Age:
          <select v-model="age">
              <option v-for="age in ages" :key="age"> {{age}}</option>
          </select><br>
          <input type="checkbox" v-model="confirm"> {{label}} <br>  
          <button type="submit" @click="submit">Save</button>

          <p>{{display}}</p>
          </form>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Fill in your details',
      fname: '',
      lname: '',
      mame: '',
      gender: ["male", "female"],
      ages: ["0-10", "11-20", "21-30"],
      confirm: null,
      label: 'I confirm that all information provided is true',
      display: ''
      
    }
  },
  methods: {
    submit() {
      let data = "The information filled is Firstname: " + this.fname +  ", Middlename:" + this.mname + ", Lastname:" + this.lname + ", Gender:" + this.genders + ", Age:" + this.age;
      this.display = data;
      localStorage.setItem('Data', this.display);
    },
    
  }
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    margin: 10px;

}
select {
    margin: 10px;
}
button {
    margin: 10px;
    padding: 5px;
    background-color: gainsboro;
}



</style>
