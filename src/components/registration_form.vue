<template>
    <div class="registration">
        <form id="registrationForm">
      <div class="form-class">
        <h2>EMPLOYEE REGISTRATION</h2>
        <!-- {{redata}} -->
        <div class="labels">
          <label>First Name</label>
        </div>
        <div class="field-values">
          <input v-model="redata.firstname" />
        </div>
        <div class="labels">
          <label>Last Name</label>
        </div>
        <div class="field-values">
          <input v-model="redata.lastname" />
        </div>
        <div class="labels">
          <label>Email id</label>
        </div>
        <div class="field-values">
          <input v-model="redata.email" />
        </div>
        <div class="labels">
          <label>Password</label>
        </div>
        <div class="field-values">
          <input type="password" />
        </div>
        <div class="labels">
          <label>DOB</label>
        </div>
        <div class="field-values">
          <input type="date" v-model="redata.dob" />
        </div>
        <div class="labels">
          <label>Gender</label>
        </div>
        <div class="field-values">
          <label for="male"> <input v-model="redata.gender" type="radio" name="gender" value="male" />Male</label>
          <input v-model="redata.gender" type="radio" name="gender" value="female" /><label for="female">Female</label>
        </div>
        <div class="labels">
          <label>Country</label>
        </div>
        <div class="field-values">
          <select v-model="redata.country" @change="getStates">
            <option v-for="c in redata.countryObj" :key="c.id">{{c.country}}</option>
          </select>
        </div>
        <div class="labels">
          <label>State</label>
        </div>
        <div class="field-values">
          <select v-model="redata.state">
            <option v-for="s in redata.stateObj" :key="s">{{s}}</option>
          </select>
        </div>
        <div class="labels">
          <label>Mobile Number</label>
        </div>
        <div class="field-values">
          <input v-model="redata.mobile" type="text" name="mobile" />
        </div>
        <div class="labels">
          <label>Hobbies</label>
        </div>
        <div class="field-values">
          <input v-model="redata.hobbies" type="checkbox" value="Singing" />Singing
          <br />
          <input v-model="redata.hobbies" type="checkbox" value="Dancing" />Dancing
          <br />
          <input v-model="redata.hobbies" type="checkbox" value="Writing" />Writing
          <br />
          <input v-model="redata.hobbies" type="checkbox" value="Painting" />Painting
          <br />
        </div>
        <div class="labels">
          <label>Address</label>
        </div>
        <div class="field-values">
          <textarea v-model="redata.address" name="Address">Where is your house</textarea>
        </div>
        <div>
          <input type="button" class="reset" value="Reset" @click="resetForm" />
          <input type="button" class="submit" value="Submit" @click="submitForm" />
        </div>
      </div>
    </form>
    </div>
</template>
<script>
// import { bus } from '../main.js'
import {Countries} from "./constants.js"
export default {
    name: "Registration",
     props:{
     redata: Object
   },
  methods:{
      resetForm() {
      document.getElementById("registrationForm").reset();
      this.resetPreview();
    },
    resetPreview() {
       // alert("reset")
      this.redata.firstname = "",
        this.redata.lastname = "",
        this.redata.email = "",
        this.redata.dob = "",
        this.redata.mobile = "",
        this.redata.gender = "",
        this.redata.state = "",
        this.redata.country = "",
        this.redata.hobbies = [],
        this.redata.address = "";
    },
    submitForm() {
      document.getElementById("registrationForm").innerHTML =
        "Your data is submitted successfully..!!";
    },
    getStates() {
      var x = Countries.find(x => x.country == this.redata.country);
      this.redata.stateObj = x.states;
    }
  }
}
</script>

