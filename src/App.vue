<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Registration :redata="edata"></Registration>
    <Preview :pedata="edata"></Preview>
    <button @click="Save()">Register</button>
    <ListComponent :ledata_list="emplist"></ListComponent>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Preview from "./components/Preview.vue";
import Registration from "./components/registration_form.vue";
import ListComponent from "./components/ListComponent";
import {Countries} from "./components/constants";
var ed= {
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    mobile: "",
    gender: "",
    state: "",
    country: "",
    hobbies: [],
    address: "",
    countryObj: Countries,
    stateObj: []
}
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Preview,
    Registration,
    ListComponent
  },
  data() {
    return {
      edata:ed,
      emplist:[]
      }
  },
  methods:{
    Save(){
        this.emplist.push({...this.edata});
        // this.emplist.push(JSON.parse(JSON.stringify(this.edata))); this will also work       
    }
  }
}
</script>

<style>
  
.form-class {
  /* background-color: #d3d3d3;  */
  margin: 30px;
  padding: 10px;
}
.preview-form-class {
  /* background-color: #d3d3d3; */
  margin: 30px;
  padding: 10px;
  float: right;
}
.empList{
  margin: 30px;
  padding: 10px;
  /* float: right; */
}
.labels {
  margin: 0 0 2px 3px;
}
.field-values {
  margin: 0 0 6px 3px;
}
.reset {
  background-color: #808080;
}
.submit {
  background-color: #0000ff;
}
.form-class {
  float: left;
}
.preview {
  float: right;
}

</style>
