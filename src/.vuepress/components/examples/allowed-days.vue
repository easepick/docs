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
        plugins: ["LockPlugin"],
        LockPlugin: {
          filter(date, picked) {
            return !self.dateArray.includes(date.format("YYYY-MM-DD"));
          },
        },
      };
    },
  },
};
</script>
