<template>
  <div class="mb-6">
    <div class="text-purple-500 flex">
      <div class="flex-grow font-bold">{{ job.title }}</div>
      <div>{{ job.start_date }} - {{ job.end_date }}</div>
    </div>
    <div>{{ job.company }}, {{ job.location }}</div>
    <template v-for="(keyPoint, index) in job.keyPoints">
      <div class="mt-1 mb-1" :key="index">
        {{ keyPoint }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      required: true,
    },
  },
};
</script>
