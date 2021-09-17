<template>
  <div class="content">
    <main-navigation></main-navigation>
    <div class="content--sidebar">
      <div class="box box-callout">
        <div class="box--header">Hello</div>
        I'm a full stack developer based in Indianapolis, Indiana. I have over
        {{ yearsOfExperience }} years of full stack development experience. I
        contribute and maintain open source repositories such as
        <a
          target="_blank"
          href="https://github.com/lukepolo/laracart?utm_source=resume"
          >LaraCart</a
        >
        and
        <a target="_blank" href="https://varie.io?utm_source=resume">VarieJS</a>
        . I also run a hobby project called
        <a target="_blank" href="https://codepier.io?utm_source=resume"
          >CodePier</a
        >.
      </div>

      <div class="box">
        <div class="box--header">Skills</div>

        <div class="skills-wrapper">
          <skill-group :skill-group="skillsGroupTypes.Languages"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.JAVASCRIPT"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.DEV_OPS"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.DATABASES"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.CSS"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.TOOLS"></skill-group>
          <skill-group :skill-group="skillsGroupTypes.PHP"></skill-group>
        </div>
      </div>

      <div class="box">
        <div class="box--header">Education</div>
        <div class="education">
          <div class="education--header">
            Purdue University - School of Engineering
          </div>
          <div class="education--subheader">West Lafayette, IN | 2014</div>
          <div class="education--item">
            Bachelor of Science, Industrial Engineering
          </div>
        </div>
      </div>
    </div>

    <div class="content--main">
      <div class="box">
        <div class="box--header">Experience</div>
        <div class="job--container">
          <template v-for="(job, index) in jobs">
            <job-details :job="job" :key="index"></job-details>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobDetails from "@components/resume/JobDetails";
import SkillGroup from "@components/resume/SkillGroup";
import { SkillGroupTypes } from "@app/constants/SkillGroups";
import Jobs from "@app/constants/Jobs";
import MainNavigation from "@views/layouts/components/MainNavigation";
import { differenceInYears } from "date-fns";
export default {
  components: {
    JobDetails,
    SkillGroup,
    MainNavigation,
  },
  computed: {
    skillsGroupTypes() {
      return SkillGroupTypes;
    },
    jobs() {
      return Jobs;
    },
    yearsOfExperience() {
      return differenceInYears(new Date(), new Date(2010, 8, 1));
    },
  },
};
</script>

<style lang="scss">
.content {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "nav nav"
    "sidebar main";
  background-color: $color-background-content;
  border-radius: 3px;
  box-shadow: 7px 15px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @include breakpoint(sm) {
    grid-template-columns: 1fr;
    grid-template-areas: "nav" "sidebar" "main";
  }

  @media print {
    box-shadow: none;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "nav nav"
      "sidebar main";
  }

  &--sidebar {
    grid-area: sidebar;
    margin: 30px 0 30px 30px;
    display: grid;
    grid-template-rows: min-content min-content 1fr;

    @include breakpoint(sm) {
      margin: 30px;
    }

    @media print {
      margin: 30px 0 30px 30px;
    }
  }

  &--main {
    grid-area: main;
    margin: 30px;

    @include breakpoint(sm) {
      margin: 0 30px 30px 30px;
    }

    @media print {
      margin: 30px;
    }
  }

  .box {
    border: 2px solid $color-divider;
    padding: 15px;
    border-radius: 3px;

    + .box {
      margin-top: 30px;
    }

    &--header {
      font-weight: bold;
      font-size: 1.5em;
      font-family: $font-family-header;
      margin-bottom: 15px;
      text-transform: uppercase;
      color: $color-text-accent;
      padding-bottom: 15px;
      position: relative;

      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: -15px;
        width: calc(50% + 15px);
        height: 2px;
        background-color: $color-divider;
      }
    }
  }
}

.job--container {
  border-left: 2px solid $color-divider;
}

.education {
  &--header {
    font-family: $font-family-header;
    font-size: 1.2em;
  }
}

.skills-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-row-gap: 10px;
}
</style>
