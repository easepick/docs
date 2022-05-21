<template>
  <div>
    <input :id="id" />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
    input_styles: {
      type: Object,
      default: {},
    },
  },
  data() {
    const ver = JSON.parse(localStorage.getItem("version")) || { v: "1.1.7" };
    return {
      id: `id-${new Date().getTime()}`,
      picker: null,
      default_options: {
        css: [
          `https://cdn.jsdelivr.net/npm/@easepick/bundle@${ver.v}/dist/index.css`,
        ],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (typeof easepick !== "undefined") {
        const self = this;
        const element = document.getElementById(this.id);
        Object.assign(element.style, this.input_styles);

        const opts = {
          ...{ element: element },
          ...self.default_options,
          ...self.options,
        };

        this.picker = new easepick.create(opts);
      } else {
        setTimeout(this.init, 300);
      }
    },
  },
};
</script>

<style scoped>
.easepick-wrapper {
  min-height: 280px;
}
</style>