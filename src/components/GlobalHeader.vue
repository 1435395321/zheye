<template>
  <div></div>
</template>

<script>
import { defineComponent } from 'vue';
export interface UserProps {
    isLogin: boolean;
    id?: number;
    name?: string;
}
export default defineComponent({
    name:'GlobalHeader',
    props: {
        user: {
            
        }
    }
})
</script>

<style>

</style>