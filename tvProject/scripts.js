
const app = Vue.createApp({
  data() {
    return {
      powerOn: false,
      programCounter: 1,
      programs: [
        {
          id: "1",
          title: "Minion",
          url: "./trype.mp4",
        },
        {
          id: "2",
          title: "Enemy",
          url: "./enemy.mp4",
        }
      ],
    };
  },

  methods: {
    togglePower() {
      this.powerOn = !this.powerOn;
    },

    forward() {
      this.programCounter++;
      if (this.programCounter > this.programs.length) {
        this.programCounter = 1;
      }
    },

    backward() {
      this.programCounter--;
      if (this.programCounter < this.programs[0].id) {
        this.programCounter = this.programs.length;
      }
    },
  },
});

app.mount("#app");
