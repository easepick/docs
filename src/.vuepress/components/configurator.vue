<template>
  <div>
    </div>
</template>

<script>
  export default {
    mounted() {
      this.init();
    },
    methods: {
      init() {
        if (typeof gh !== 'undefined') {
          //gh.add_script('');
          console.log('add_script');
        } else {
          setTimeout(this.init, 300);
        }
      }
    }
  }
</script>
