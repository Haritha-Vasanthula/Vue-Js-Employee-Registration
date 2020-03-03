<template>
  <div class="hello">
    <form id="registrationForm">
      <div class="form-class">
        <h2>EMPLOYEE REGISTRATION</h2>
        <div class="labels">
          <label>First Name</label>
        </div>
        <div class="field-values">
          <input v-model = "message" type="text" name="FirstName" />
        </div>
        <div class="labels">
          <label>Last Name</label>
        </div>
        <div class="field-values">
          <input type="text" name="LastName" />
        </div>
        <div class="labels">
          <label>Email id</label>
        </div>
        <div class="field-values">
          <input type="text" name="Email" />
        </div>
        <div class="labels">
          <label>Password</label>
        </div>
        <div class="field-values">
          <input type="password" name="Password" />
        </div>
        <div class="labels">
          <label>DOB</label>
        </div>
        <div class="field-values">
          <input type="date" name="Dob" />
        </div>
        <div class="labels">
          <label>Gender</label>
        </div>
        <div class="field-values">
          <input type="radio" name="gender" value="male" />Male
          <input type="radio" name="gender" value="female" />Female
        </div>
        <div class="labels">
          <label>Country</label>
        </div>
        <div class="field-values">
          <select name="country" value="country">
            <option name="india">India</option>
            <option name="australia">Australia</option>
            <option name="switzerland">Switzerland</option>
            <option name="korea">Korea</option>
            <option name="england">England</option>
          </select>
        </div>
        <div class="labels">
          <label>State</label>
        </div>
        <div class="field-values">
          <select name="state" value="state">
            <option>Andhra Pradesh</option>
            <option>Tamilnadu</option>
            <option>Odisha</option>
            <option>Delhi</option>
            <option>Manipur</option>
          </select>
        </div>
        <div class="labels">
          <label>Mobile Number</label>
        </div>
        <div class="field-values">
          <input type="text" name="mobile" />
        </div>
        <div class="labels">
          <label>Hobbies</label>
        </div>
        <div class="field-values">
          <input type="checkbox" name="hobbies" />Singing
          <br />
          <input type="checkbox" name="hobbies" />Dancing
          <br />
          <input type="checkbox" name="hobbies" />Writing
          <br />
          <input type="checkbox" name="hobbies" />Painting
          <br />
        </div>
        <div class="labels">
          <label>Address</label>
        </div>
        <div class="field-values">
          <textarea name="Address">Where is your house</textarea>
        </div>
        <div>
          <input class="reset" type="reset" name="reset" align="right" />
          <input class="submit" type="submit" name="submit" align="right" />
        </div>
      </div>
    </form>
    <div class="preview">
      <h2>PREVIEW</h2>
      <div class="labels">
        <label>First Name:</label>
      </div>
    </div>
  </div>
  <!-- preview -->
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-class {
  /* background-color: #d3d3d3; */
  margin: 30px;
  padding: 10px;
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
