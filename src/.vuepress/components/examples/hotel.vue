<template>
  <div>
    <easepick :options="easepick_options" />
  </div>
</template>

<script>
import BookedMixin from "../../mixins/booked.js";

export default {
  mixins: [BookedMixin],
  data() {
    return {};
  },
  computed: {
    easepick_options() {
      const self = this;

      return {
        plugins: ["RangePlugin", "LockPlugin"],
        css: ["/css/demo_hotelcal.css"],
        autoApply: false,
        zIndex: 10,
        setup(picker) {
          const DateTime = easepick.DateTime;
          gh.bookedDates = self.bookedDates.map((d) => {
            if (d instanceof Array) {
              const start = new DateTime(d[0], "YYYY-MM-DD");
              const end = new DateTime(d[1], "YYYY-MM-DD");

              return [start, end];
            }

            return new DateTime(d, "YYYY-MM-DD");
          });
        },
        RangePlugin: {
          tooltipNumber(num) {
            return num - 1;
          },
          locale: {
            one: "night",
            other: "nights",
          },
        },
        LockPlugin: {
          minDate: new Date(),
          inseparable: true,
          filter(date, picked) {
            if (picked.length === 1) {
              const incl = date.isBefore(picked[0]) ? "[)" : "(]";
              return (
                !picked[0].isSame(date, "day") &&
                date.inArray(gh.bookedDates, incl)
              );
            }

            return date.inArray(gh.bookedDates, "[)");
          },
        },
      };
    },
  },
};
</script>
