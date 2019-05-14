<template>
  <div
    class="modal fade"
    id="largepic"
    tabindex="-1"
    role="dialog"
    aria-labelledby="largepicTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body p-0 d-flex justify-content-center">
          <div>
            <img class="w-100" :src="oneEvent.event_preview_url" alt="largepic.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    oneEvent: Object
  }
};
</script>

<style>
</style>
