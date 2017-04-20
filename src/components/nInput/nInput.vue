<template>
  <div v-if="type === 'input'" class="input-group">
    <span class="lamp"></span>
    <input type="text" :name="name" :placeholder="placeholder">
  </div>

<!--   <div class="input-group">
    <span class="lamp"></span>
    <ul class="flex-column">
      <li>
        <label>radio</label>
      </li>
      <li class="flex-star-wrap">
        <input type="radio" id="a1" name="radio">
        <label for="a1"> this is radio.</label>

        <input type="radio" id="a2" name="radio">
        <label for="a2"> this is radio.</label>

        <input type="radio" id="a3" name="radio">
        <label for="a3"> this is radio.</label>

        <input type="radio" id="a4" name="radio">
        <label for="a4"> this is radio.</label>
      </li>
    </ul>

  </div> -->

<!--   <div class="input-group">
    <span class="lamp"></span>
    <ul class="flex-column">
      <li>
        <label>checkbox</label>
      </li>
      <li class="flex-star-wrap">
        <input type="checkbox" id="b1" name="checkbox1">
        <label for="b1"> this is checkbox.</label>

        <input type="checkbox" id="b2" name="checkbox2">
        <label for="b2"> this is checkbox.</label>

        <input type="checkbox" id="b3" name="checkbox3">
        <label for="b3"> this is checkbox.</label>
      </li>
    </ul>

  </div> -->
</template>

<script>
  export default {
    name: 'nInput',
    props: {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      }
    }

  }
</script>