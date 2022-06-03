<template>
  <div>
    <ClientOnly>
      <easepick :options="easepick_options" />
    </ClientOnly>
  </div>
</template>

<script>
import DateArrayMixin from "../../mixins/dates.js";

export default {
  mixins: [DateArrayMixin],
  computed: {
    easepick_options() {
      const self = this;

      return {
        zIndex: 10,
        css: ["/css/demo_prices.css"],
        setup(picker) {
          const randomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
          };
          const prices = {};
          self.dateArray.forEach((x) => {
            prices[x] = randomInt(50, 200);
          });
          picker.on("view", (evt) => {
            const { view, date, target } = evt.detail;
            const d = date ? date.format("YYYY-MM-DD") : null;

            if (view === "CalendarDay" && prices[d]) {
              const span =
                target.querySelector(".day-price") ||
                document.createElement("span");
              span.className = "day-price";
              span.innerHTML = `$ ${prices[d]}`;
              target.append(span);
            }
          });
        },
      };
    },
  },
};
</script>
