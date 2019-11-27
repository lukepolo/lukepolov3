<template>
  <div class="job">
    <div class="job--header">
      <div class="job--header-title">{{ job.title }}</div>
      <div class="job--header-date">
        ({{ job.start_date }} - {{ job.end_date }})
      </div>
    </div>
    <div class="job--subheader">{{ job.company }}, {{ job.location }}</div>
    <div class="job--content">
      <template v-for="(keyPoint, index) in job.keyPoints">
        <div class="job--content-item" :key="index">
          {{ keyPoint }}
        </div>
      </template>
    </div>
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

<style lang="scss">
.job {
  position: relative;
  margin-bottom: 15px;
  padding-left: 15px;

  &--header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      font-family: $font-family-header;
      font-size: 1.2em;
    }
    &-date {
      color: $color-text-secondary;
      font-size: 0.9em;
    }

    &:after {
      content: "";
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 8px solid $color-background-content;
      background-color: $color-text-accent;
      position: absolute;
      top: -2px;
      left: -13px;
    }
  }
  &--subheader {
    color: $color-text-secondary;
    font-size: 0.9em;
    margin-top: 3px;
  }

  &--content {
    margin: 5px 0 5px 15px;
    padding-bottom: 5px;

    &-item {
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
