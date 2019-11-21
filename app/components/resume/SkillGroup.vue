<template>
  <div class="mt-6">
    <div class="text-gray-700 uppercase">
      {{ skillGroup }}
      <div class="bg-gray-500 h-1"></div>
    </div>
    <div class="ml-2 mt-2">
      <template v-for="(skill, index) in skills" v-if="skill.enabled">
        <div :key="index" class="flex">
          <div class="w-1/3 text-gray-600">
            {{ skill.display }}
          </div>
          <div class="w-2/3">
            <div class="border border-gray-500 mt-2 mb-2 text-white rounded">
              <div
                class="bg-gray-600 h-2 rounded"
                :style="{ width: `${skill.confidenceLevel * 10}%` }"
              ></div>
            </div>
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
