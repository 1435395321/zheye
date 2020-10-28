<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" @click.prevent="toggleOpen()" class="btn btn-outline-light my-2 dropdown-toggle">{{title}}</a>
        <ul class="dropdown-menu" :style="{display:'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent , ref , onMounted, onUnmounted} from 'vue';
export default defineComponent({
    name:'Dropdown',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false);
        const toggleOpen = () => {
            isOpen.value =! isOpen.value;
        }
        const dropdownRef = ref<null | HTMLElement>(null);
        // 点击外部 关闭下拉
        const handler = (e: MouseEvent) => {
            if (dropdownRef.value)
                if(!dropdownRef.value.contains(e.target as HTMLElement) && isOpen)
                    isOpen.value = false;
        }
        onMounted (() => {
            document.addEventListener('click' , handler)
        });
        onUnmounted(() => {
            document.removeEventListener('click',handler);
        })
        return {
            isOpen,
            toggleOpen,
            handler,
            dropdownRef
        }
    }
});
</script>

<style>
   
</style>