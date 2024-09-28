<script setup lang="ts">
import type { Player } from "~/types";

defineProps<{
  player: Player;
}>();

const emit = defineEmits<{
  (e: "update", id: number): void;
}>();
</script>

<template>
  <div class="player-wrapper" @click="emit('update', player.id)">
    <div class="player-avatar">
      <span style="font-size: 1.25rem">
        {{ player.name[0] }}
      </span>
    </div>
    <div>
      <p>{{ player.name }}</p>
      <Icon
        :name="
          player.sex === 'male' ? 'ic:baseline-male' : 'ic:baseline-female'
        "
      />
    </div>
    <div class="ml-auto flex gap-3 mr-2">
      <div class="flex gap-2 justify-center items-center">
        <span>
          {{ player.level }}
        </span>
        <Icon name="heroicons:academic-cap-solid" />
      </div>
      <div class="flex gap-2 justify-center items-center">
        <span>
          {{ player.power + player.level }}
        </span>
        <Icon name="ph:sword-bold" />
      </div>
    </div>
  </div>
</template>

<style>
.player-wrapper {
  display: flex;
  border: 1px solid rgb(165, 165, 72);
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 80px;
}

.player-avatar {
  border: 1px solid gainsboro;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: 7px;
  margin-left: 7px;
}
</style>
