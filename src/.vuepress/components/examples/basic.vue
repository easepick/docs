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
      },
    };
  },
};
</script>
