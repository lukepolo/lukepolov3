<template>
  <div class="contact--info">
    <div class="contact--info-item">
      <a target="_blank" href="https://github.com/lukepolo">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="contact--info-item">
      <a href="mailto:luke@lukepolo.com">luke@lukepolo.com</a>
    </div>
    <div class="contact--info-item">
      <a href="tel:260-609-1511">(260) 609-1511</a>
    </div>

    <div class="contact--info-item">
      <a href="https://lukepolo.com">lukepolo.com</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact--info {
  display: flex;
  position: relative;
  bottom: 20px;

  @include breakpoint(sm) {
    position: absolute;
    right: 30px;
    top: 15px;
    bottom: auto;
  }

  @media print {
    display: flex;
    position: relative;
    top: auto;
    bottom: 20px;
    right: auto;
  }

  a {
    text-decoration: none;
    &:visited {
      color: $color-text-inverse-secondary;
    }

    &:hover {
      color: $color-text-inverse-primary;
    }
  }

  &-item {
    position: relative;
    display: block;
    color: $color-text-inverse-secondary;
    font-family: $font-family-header;
    font-size: 1.1em;
    padding-left: 15px;
    white-space: nowrap;

    a {
      color: $color-text-inverse-secondary;
    }

    &:not(:first-child) {
      &:before {
        content: "";
        background-color: $color-text-inverse-primary;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 1px;
      }
    }

    + .contact--info-item {
      margin-left: 15px;
    }
  }
}
</style>
