<template>
  <div>
    <h2>Better Implementation of a Portal</h2>
    <portal to="#target2">
      <p>Move me to the Ende of the page, NaivePortal!</p>
    </portal>
  </div>
</template>
<script>
import BetterPortal from './portals/BetterPortal'
export default {
	name: 'Better',
	components: {
		Portal: BetterPortal,
	},
}
</script>

