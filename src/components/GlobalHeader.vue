<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4 mt-4">
        <a href="#" class="navbar-brand" style="overflw:hidden">者也专栏</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light">登录</a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light">注册</a>
            </li>
        </ul>
        <ul v-else class="btn">
            <li class="list-inline-item">
                <dropdown :title = "`你好 ${user.name}`"></dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from './Dropdown.vue'
export interface UserProps {
    isLogin: boolean;
    id?: number;
    name?: string;
}
export default defineComponent({
    name: "GlobalHeader",
    components: {
        Dropdown
    },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            require: true,
        },
    },
});
</script>

<style>
</style>