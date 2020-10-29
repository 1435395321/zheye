import { ref, onMounted, onUnmounted, Ref } from 'vue';

const userClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutsid = ref(false);
    const handler = (e: MouseEvent) => {
        if (elementRef.value?.contains(e.target as HTMLElement)) {
            isClickOutsid.value = false;
        } else {
            isClickOutsid.value = true;
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler);
    });
    onUnmounted(() => {
        document.removeEventListener('click', handler);
    })
    return isClickOutsid;
}
export default userClickOutside