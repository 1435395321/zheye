<template>
    <form class="validate-form-container">
        <slot></slot>
        <div class="submit-area" @click.prevent="submitForm()">
            <slot name="submit">
                <button disabled="disabled" type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    emits:['form-submit'],
    setup(props,context) {
        const submitForm = () => {
            context.emit('form-submit',true);
        }
         return {
             submitForm
         }
    }
   
});
</script>

<style>
</style>