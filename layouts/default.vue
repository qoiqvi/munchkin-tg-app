<script setup lang="ts">
    useHead({
        script: [{src:'https://telegram.org/js/telegram-web-app.js', defer: true}],
    })
</script>

<template>
    <header>
        <h2>
            Манчкин
        </h2>
    </header>
        <ClientOnly>
            <slot>

            </slot>
        </ClientOnly>
</template>
