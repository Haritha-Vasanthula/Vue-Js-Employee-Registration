<script>
// import Preview from "../components/Preview.vue";
// import Registration from "../components/registration_form";
Vue.component("Employee", {
  data: function() {
    return {
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
    };
  },
  template: ""

});

</script>