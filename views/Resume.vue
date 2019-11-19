<template>
  <div class="flex mb-4">
    <div class="w-1/3 p-6 bg-gray-400 h-screen">
      <!--  Hello Box -->
      <div>
        Hello, I'm a full stack developer based in Indaiapolis, Indiana. I have
        over 8 years of full stack develoment expirence. ..
        here
      </div>

      SKILLS
      <skill-group :skill-group="skillsGroupTypes.PHP"></skill-group>
      <skill-group :skill-group="skillsGroupTypes.JAVASCRIPT"></skill-group>
      <skill-group :skill-group="skillsGroupTypes.CSS"></skill-group>
      <skill-group :skill-group="skillsGroupTypes.DATABASES"></skill-group>
      <skill-group :skill-group="skillsGroupTypes.DEV_OPS"></skill-group>
      <skill-group :skill-group="skillsGroupTypes.TOOLS"></skill-group>

      <contact-information class="mt-6"></contact-information>
    </div>
    <div class="w-2/3 p-6 bg-gray-500 h-screen">
      <section>
        <div>Education</div>
        <h3>Purdue University</h3>
        <div>
          <div>
            <div>College of Engineering - West Lafayette, IN</div>
            <div>Bachelor of Science in Engineering May 2014</div>
          </div>
          <div>Major: Industrial Engineering</div>
        </div>
      </section>

      <template v-for="(job, index) in jobs">
        <job-details :job="job" :key="index"></job-details>
      </template>
    </div>
  </div>
</template>

<script>
import JobDetails from "@components/resume/JobDetails";
import SkillGroup from "@components/resume/SkillGroup";
import ContactInformation from "@components/resume/ContactInformation";
import { SkillGroupTypes } from "@app/constants/SkillGroups";
import Jobs from "@app/constants/Jobs";
export default {
  components: {
    JobDetails,
    SkillGroup,
    ContactInformation,
  },
  computed: {
    skillsGroupTypes() {
      return SkillGroupTypes;
    },
    jobs() {
      return Jobs;
    },
  },
};
</script>
