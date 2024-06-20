<template>
  <div class="skills">
    <div class="skills--header">
      {{ skillGroup }}
    </div>
    <div class="skills--group">
      <template v-for="(skill, index) in skills" v-if="skill.enabled">
        <div :key="index" class="skills--item">
          <div class="skills--item-name">
            {{ skill.display }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import SkillGroups from "@app/constants/SkillGroups";

export default {
  props: {
    skillGroup: {
      required: true,
    },
  },
  computed: {
    skills() {
      return SkillGroups[this.skillGroup];
    },
  },
};
</script>

<style lang="scss">
.skills {
  &--header {
    font-family: $font-family-header;
    font-size: 1.2em;
  }

  &--group {
    margin: 5px 0;
  }

  &--item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;

    &-name {
      flex: 0 0 auto;
    }

    &-confidence {
      flex: 0 0 50%;
      height: 10px;
      border: 1px solid $color-divider;
      border-radius: 10px;
      position: relative;
    }

    &-confidencePercent {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      background-color: $color-text-accent2;
    }
  }
}
</style>
