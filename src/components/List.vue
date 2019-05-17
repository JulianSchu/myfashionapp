<template>
    <div class="container-fluid bg-light px-0 pb-3">
      <div class="container d-flex flex-wrap align-content-around p-0 py-3">
        <div class="col-12">
          <h5 class="py-0">{{typeName}}</h5>
        </div>
        <div
          class="hovercard col-12 col-md-6 d-flex flex-wrap"
          v-for="(event, index) in events"
          :key="index"
        >
          <EachEvent :oneEvent="event"/>
        </div>
      </div>
    </div>
</template>

<script>
import EachEvent from "@/components/EachEvent.vue";

export default {
    name: 'List',
    props: {
        typeName: String,
        events: Array
    },
    components: {
        EachEvent
    }
}
</script>
