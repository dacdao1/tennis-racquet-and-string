<template>
<div id="App">

    <b-form-input type="text" v-model="userInput" v-on:keyup.enter="getRacquet()"placeholder="Enter racquet name"></b-form-input>

  <p>{{userInput}}</p>
<p>{{result}}</p>
  <p>{{result1}}</p>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userInput:'',
      result:'',
      result1: ''
    }
  },
  methods: {
    //video preview of each racquet or string through Youtube, based on user input
    //function that will retrieve strings based on user selection
    //function that will retrieve racquets based on user selection
    getRacquet () {


// This function goal is to return the user input into uppercase for each word
  var upperCaseThis = this.userInput.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//Filter the user input to see if they typed in any of the brand name

//Fiter the user input to see if they typed in any of the model name


//calling the api of racketlogger for all of the racquet and also string
        function getRacquetName(){
          return new Promise((resolve, reject)=>{
            fetch("https://api.racketlogger.com/rackets/",{
              headers:{
                "User-Agent": "Awesome-Tennis-App"
              }
            }).then(response=>{return response.json()}).then(data=>{resolve(data)}).catch(err=>{reject(err)})
          })
        }

  getRacquetName().then(data=>{
  // const arr1 = data.filter(d=> d.brand === this.userInput)
  const arr2 = data.filter(d=> d.model === upperCaseThis)
//Pure Drive 2015
//pure drive 2015
    this.result = arr2[0].stiffness

    // this.result1 = arr1
  }).catch(err=>{console.log(err)})

      }
    }


}
</script>
