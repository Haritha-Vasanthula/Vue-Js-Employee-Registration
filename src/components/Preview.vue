<template>
    <div class="Preview">
        <form id="previewForm">
      <div class="preview-form-class">
        <h2>PREVIEW</h2>
        <!-- {{pedata}} -->
        <div class="labels">
          <label>
            <b>Full Name:</b>
          </label>
          <!-- {{pedata}} -->
          {{ fullname() }}
        </div>
        <div class="labels">
          <label>
            <b>Email id:</b>
          </label>
          {{ pedata.email }}
        </div>
        <div class="labels">
          <label>
            <b>DOB:</b>
          </label>
          {{ printDate() }}
          <!-- {{pedata.dob}} -->
        </div>
        <div class="labels">
          <label>
            <b>Gender:</b>
          </label>
          {{ pedata.gender }}
        </div>

        <div class="labels">
          <label>
            <b>Country:</b>
          </label>
          {{ pedata.country }}
        </div>
        <div class="labels">
          <label>
            <b>State:</b>
          </label>
          {{ pedata.state }}
        </div>

        <div class="labels">
          <label>
            <b>Mobile Number:</b>
          </label>
          {{ pedata.mobile }}
        </div>
        <div class="labels">
          <label>
            <b>Hobbies:</b>
          </label>
          <ul v-for="hobbie in pedata.hobbies" :key="hobbie">
            <li>{{hobbie}}</li>
          </ul>
        </div>
        <div class="labels">
          <label>
            <b>Address:</b>
          </label>
          {{pedata.address}}
        </div>
      </div>
    </form>
    </div>
</template>

<script>
// import { bus } from '../main.js'
// import {Countries} from "./constants.js";
export default {
  name: "Preview",
   props:{
    pedata: Object
  },
 methods:{
    fullname() {
      return this.pedata.firstname + " " + this.pedata.lastname;
    },
    printDate() {
      this.pedata.dob = this.pedata.dob.split("-").reverse().join("-");
      return this.pedata.dob;
    }
  }
 }
</script>

