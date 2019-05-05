<template>
  <div>
        <h2>Naive Implementation of a Portal</h2>
        <portal to="#target1">
            <p>Move me to the Ende of the page, NaivePortal!</p>
        </portal>
    </div>
</template>
<script>
import NaivePortal from './portals/NaivePortal'
export default {
    name: 'Naive',
    components: {
        Portal: NaivePortal
    }
}
</script>

