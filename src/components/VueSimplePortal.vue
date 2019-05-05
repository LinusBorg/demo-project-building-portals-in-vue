<template>
    <div>
        <h2>Using <code>@linusborg/vue-simple-portal</code></h2>
        <portal>
            <p>Move me to the bottom, please!</p>
        </portal>
    </div>
</template>
<script>
import { Portal } from '@linusborg/vue-simple-portal'
export default {
    name: 'Simple',
    components: {
        Portal,
    }
}
</script>


