// const { createApp, ref } = Vue

//   createApp({
//     setup() {
//       const message = ref('Hello vue!')
//       return {
//         message
//       }
//     }
//   }).mount('#app')



// create application instance
// var appInstance = Vue.createApp({
//     data(){
//         return{
//             greet: 'hello'
//         }
//     },
//     methods:{greetMethod(){
//         alert('Hello pips')
//     }}
// }).mount('#app')



// app.js
// const button = {
//     data: {
//       isBulbOn: false
//     },
//     methods: {
//       toggleBulb() {
//         this.isBulbOn = !this.isBulbOn;
//       }
//     }
// }

//   Vue.createApp(conditionalRendering).mount('#app')

//   var appInstance = Vue.createApp({
//     data(){
//         return{
//             isBulbOn: false
//         }
//     },
//     methods:{greetMethod(){
//         alert('Hello pips')
//     }}
// }).mount('#app')




var appInstance = Vue.createApp({
  data() {
    return {bulbStatus: false};
  },
  methods: {
    toggleBulb(){
      this.bulbStatus = !this.bulbStatus;
    }
  }
}).mount('#app')

  




















