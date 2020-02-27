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


      if (this.userInput.toLowerCase().includes("babolat")) {
        var modelName = this.userInput.toLowerCase().replace("babolat ", "")
        var brandName = "Babolat"
      } else if (this.userInput.toLowerCase().includes("asics")) {
        var modelName = this.userInput.toLowerCase().replace("asics ", "")
        var brandName = "Asics"
      } else if (this.userInput.toLowerCase().includes("donnay")) {
        var modelName = this.userInput.toLowerCase().replace("donnay ", "")
        var brandName = "Donnay"
      } else if (this.userInput.toLowerCase().includes("dunlop")) {
        var modelName = this.userInput.toLowerCase().replace("dunlop ", "")
        var brandName = "Dunlop"
      } else if (this.userInput.toLowerCase().includes("fischer")) {
        var modelName = this.userInput.toLowerCase().replace("fischer ", "")
        var brandName = "Fischer"
      } else if (this.userInput.toLowerCase().includes("gamma")) {
        var modelName = this.userInput.toLowerCase().replace("gamma ", "")
        var brandName = "Gamma"
      } else if (this.userInput.toLowerCase().includes("head")) {
        var modelName = this.userInput.toLowerCase().replace("head ", "")
        var brandName = "Head"
      } else if (this.userInput.toLowerCase().includes("prince")) {
        var modelName = this.userInput.toLowerCase().replace("prince ", "")
        var brandName = "Prince"
      } else if (this.userInput.toLowerCase().includes("pro kennex")) {
        var modelName = this.userInput.toLowerCase().replace("pro kennex ", "")
        var brandName = "Pro Kennex"
      } else if (this.userInput.toLowerCase().includes("slazenger")) {
        var modelName = this.userInput.toLowerCase().replace("slazenger ", "")
        var brandName = "Slazenger"
      } else if (this.userInput.toLowerCase().includes("spalding")) {
        var modelName = this.userInput.toLowerCase().replace("spalding ", "")
        var brandName = "Spalding"
      } else if (this.userInput.toLowerCase().includes("tecnifibre")) {
        var modelName = this.userInput.toLowerCase().replace("tecnifibre ", "")
        var brandName = "Tecnifibre"
      } else if (this.userInput.toLowerCase().includes("vokl")) {
        var modelName = this.userInput.toLowerCase().replace("vokl ", "")
        var brandName = "Vokl"
      } else if (this.userInput.toLowerCase().includes("weed")) {
        var modelName = this.userInput.toLowerCase().replace("weed ", "")
        var brandName = "Weed"
      } else if (this.userInput.toLowerCase().includes("wilson")) {
        var modelName = this.userInput.toLowerCase().replace("wilson ", "")
        var brandName = "Wilson"
      } else if (this.userInput.toLowerCase().includes("yonex")) {
        var modelName = this.userInput.toLowerCase().replace("yonex ", "")
        var brandName = "Yonex"
      } else {
        console.log(this.userInput)
      }


      //Filter the user input to see if they typed in any of the brand name

      //Fiter the user input to see if they typed in any of the model name


      //calling the api of racketlogger for all of the racquet and also string
      function getRacquetName(brandName) {
        return new Promise((resolve, reject) => {
          fetch("https://racquet-stringing-52165.firebaseio.com/" + brandName + ".json", {
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

      getRacquetName(brandName).then(data => {



        const arr3 = data.filter(x => x["Racquet Name"].toLowerCase().includes(modelName.toLowerCase()))
        console.log(arr3)
        this.racquets = arr3
        //
        // var brandName = arr3[0].brand.toLowerCase()
        // switch (brandName) {
        //   case "babolat":
        //     this.brandImage = require('./assets/Babolat.jpg')
        //     break;
        //   case "head":
        //     this.brandImage = require('./assets/Head.jpg')
        //     break;
        //   case "prince":
        //     this.brandImage = require('./assets/prince.png')
        //     break;
        //   case "wilson":
        //     this.brandImage = require('./assets/wilson.png')
        //     break;
        //   case "yonex":
        //     this.brandImage = require('./assets/yonex.png')
        //     break;
        //   default:
        //     this.brandImage = ''
        // }
        // this.racquets = arr3




        // this.result1 = arr1
      }).catch(err => {
        console.log(err)
      })



      // This function goal is to return the user input into uppercase for each word

    }
  }


}
</script>
