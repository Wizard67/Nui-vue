<template>
  <form>
    <slot></slot>
    <ul class="flex-end">
      <li>
        <slot name="right"></slot>
      </li>
    </ul>
  </form>
</template>

<script>
  export default {

  }
</script>