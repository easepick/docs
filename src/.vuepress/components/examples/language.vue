<template>
  <div>
    <ClientOnly>
      <easepick :options="easepick_options" />
    </ClientOnly>
  </div>
</template>

<script>
export default {
  data() {
    return {
      easepick_options: {
        zIndex: 10,
        lang: "sv-SE",
        plugins: ["RangePlugin"],
        RangePlugin: {
          locale: {
            one: "dag",
            other: "dagar",
          },
        },
      },
    };
  },
};
</script>
