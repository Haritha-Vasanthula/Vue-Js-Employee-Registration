<template>
    <div class="sample">
        <p id="moon" align ="center">{{date()}}</p>
        <button @click="counter++">click</button>
        {{counter}}
        <!-- <div class="labels">
          <label>First Name</label>
        </div>
        <div class="field-values">
          <input v-model="firstname" />
        </div>
        <div class="labels">
          <label>Last Name</label> min
        </div>
        <div class="field-values">
          <input v-model="lastname" />
        </div>
        <div class="labels">
          <label>Full Name</label>
        </div>
        <div class="field-values">
          <input v-model="fullname" />
        </div> -->
    </div>
</template>
<script>
export default {
    name: "Sample",
    data(){
        return{
            firstname: "F",
            lastname: "L",
            fullname: this.firstname+this.lastname,
            counter:0
        };
    },
    methods:{
       date(){
           console.log('2/3/20'); 
           return '2/3/20'
       } 
    }
}
</script>
<style scoped>

</style>