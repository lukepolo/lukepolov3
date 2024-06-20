<template>
  <nav class="content--nav">
    <div class="contact">
      <div class="contact--name">Luke Policinski</div>

      <contact-information></contact-information>
    </div>
  </nav>
</template>

<script>
import ContactInformation from "@components/resume/ContactInformation";
export default {
  components: {
    ContactInformation,
  },
};
</script>

<style lang="scss">
.content {
  &--nav {
    grid-area: nav;
    background-color: $color-navigation;
    color: $color-text-inverse-primary;
    padding: 40px 30px 0;
  }
}

.contact {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &--name {
    font-family: $font-family-header;
    font-size: 4em;
    line-height: 0.9em;
    white-space: nowrap;
  }
}
</style>
