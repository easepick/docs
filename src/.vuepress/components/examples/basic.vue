<template>
  <div>
    <easepick :options="easepick_options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      easepick_options: {
        zIndex: 10,
      }
    };
  },
};
</script>
