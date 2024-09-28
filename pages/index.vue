<script setup lang="ts">
import type { Player } from "~/types";

const playersList = ref<Player[]>([
  { id: 1, level: 1, name: "Dima", power: 32, sex: "male" },
  { id: 2, level: 1, name: "Polina", power: 32, sex: "female" },
  { id: 3, level: 1, name: "qweqw", power: 32, sex: "male" },
  { id: 4, level: 1, name: "dasda", power: 32, sex: "male" },
  { id: 5, level: 1, name: "asxc", power: 32, sex: "male" },
]);

const updatingPlayer = ref<Player>();

function updatePlayer(id: number) {
  updatingPlayer.value = playersList.value.find((elem) => elem.id === id);
}
</script>

<template>
  <div style="margin: 10px 3%; position: relative">
    <PlayerItem
      v-for="player in playersList"
      :player="player"
      :key="player.id"
      @update="updatePlayer"
    />
  </div>
  <div v-if="updatingPlayer" class="editingModal">
    <span> {{ updatingPlayer.name }} </span>
    <span>Сила</span>
    <h1>
      {{ updatingPlayer.power + updatingPlayer.level }}
    </h1>
    <Icon
      :name="
        updatingPlayer.sex === 'male'
          ? 'ic:baseline-male'
          : 'ic:baseline-female'
      "
    />
    <div class="flex gap-2 justify-center items-center">
      <span>
        {{ updatingPlayer.level }}
      </span>
      <Icon name="heroicons:academic-cap-solid" />
    </div>
    <div class="flex gap-2 justify-center items-center">
      <span>
        {{ updatingPlayer.power }}
      </span>
      <Icon name="ph:sword-bold" />
    </div>
  </div>
</template>
<!-- 
<style>
.editingModal {
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: absolute;
  background-color: black;
}
</style> -->
