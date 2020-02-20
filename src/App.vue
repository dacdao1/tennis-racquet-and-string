<template>
<div id="App">

    <b-form-input type="text" v-model="userInput" v-on:keyup.enter="getRacquet()"placeholder="Enter racquet name"></b-form-input>
<ul>
  <li v-for="racquet in racquets" style="margin-top: 10px">{{racquet}}</li>


</ul>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userInput:'',
      result:'',
      result1: '',
      racquets: {},
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
  const arr3 = data.filter(x => x.model.toLowerCase().includes(this.userInput.toLowerCase()))
//Pure Drive 2015
//pure drive 2015

    this.racquets = arr3
    console.log(JSON.stringify(arr3))

    // this.result1 = arr1
  }).catch(err=>{console.log(err)})

      }
    }


}
</script>
