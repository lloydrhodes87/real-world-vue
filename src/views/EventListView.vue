<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted } from 'vue'
import EventService from '@/services/eventService.js'

const events = ref(null)

onMounted(async () => {
  try {
    const { data } = await EventService.getEvents()
    events.value = data
  } catch (error) {
    console.log('soething went wrong')
  }
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
