<template>
  <div class="spinner-layout">
    <div class="lds-dual-ring" :style="`width: ${width}px;height:${height}px;`">
      <div class="lds-dual-inner-ring" :style="ringStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 80,
    },
    height: {
      type: Number,
      default: 80,
    },
    color: {
      type: String,
      default: "3eaf7c",
    },
  },
  computed: {
    ringWidth() {
      return this.width - (this.width / 100) * 20;
    },
    ringHeight() {
      return this.height - (this.height / 100) * 20;
    },
    ringMargin() {
      return (this.width / 100) * 10;
    },
    ringBorder() {
      return Math.max((this.width / 100) * 10, 2);
    },
    ringStyle() {
      const styles = [
        `width: ${this.ringWidth}px`,
        `height:${this.ringHeight}px`,
        `margin:${this.ringMargin}px`,
        `border-width:${this.ringBorder}px`,
        `border-color:#${this.color} transparent #${this.color} transparent`,
      ];
      return styles.join(";");
    },
  },
};
</script>

<style scoped lang="stylus">
.spinner-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lds-dual-ring {
  display: inline-block;
}
.lds-dual-inner-ring {
  content: " ";
  display: block;
  border-radius: 50%;
  border: 6px solid #3eaf7c;
  border-color: #3eaf7c transparent #3eaf7c transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>