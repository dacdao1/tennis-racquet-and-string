<template>
<div id="App">

  <b-form-input type="text" v-model="userInput" v-on:keyup.enter=" userInput.length <= 4 ? removeEverything(): getRacquet()" placeholder="Enter racquet name"></b-form-input>
  <img class="brandImage" :src="brandImage" />

  <ul>
    <li v-for="racquet in racquets" style="margin-top: 10px">{{racquet}}</li>

  </ul>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      result: '',
      result1: '',
      racquets: {},
      brandImage: " ",

    }
  },
  methods: {
    //video preview of each racquet or string through Youtube, based on user input
    //function that will retrieve strings based on user selection
    //function that will retrieve racquets based on user selection
    removeEverything() {
      this.brandImage = " "
      this.raccquets = {}
    },
    getRacquet() {




      //Filter the user input to see if they typed in any of the brand name

      //Fiter the user input to see if they typed in any of the model name


      //calling the api of racketlogger for all of the racquet and also string
      function getRacquetName() {
        return new Promise((resolve, reject) => {
          fetch("https://api.racketlogger.com/rackets/", {
            headers: {
              "User-Agent": "Awesome-Tennis-App"
            }
          }).then(response => {
            return response.json()
          }).then(data => {
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      }

      getRacquetName().then(data => {
        const arr3 = data.filter(x => x.model.toLowerCase().match(this.userInput.toLowerCase()))

        var brandName = arr3[0].brand.toLowerCase()
        switch (brandName) {
          case "babolat":
            this.brandImage = require('./assets/Babolat.jpg')
            break;
          case "head":
            this.brandImage = require('./assets/Head.jpg')
            break;
          case "prince":
            this.brandImage = require('./assets/prince.png')
            break;
          case "wilson":
            this.brandImage = require('./assets/wilson.png')
            break;
          case "yonex":
            this.brandImage = require('./assets/yonex.png')
            break;
          default:
            this.brandImage = ''
        }
        this.racquets = arr3




        // this.result1 = arr1
      }).catch(err => {
        console.log(err)
      })



      // This function goal is to return the user input into uppercase for each word

    }
  }


}
</script>
