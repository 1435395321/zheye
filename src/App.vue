<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <ColumnList></ColumnList>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
const currentUser: UserProps = {
    isLogin: true,
    name:'vikong'
}
export default defineComponent({
    name: "App",
    components: {
        ColumnList,
        GlobalHeader
    },
    setup() {
        return {
            currentUser
        }
    }
});
</script>

<style>

 a{
    text-decoration: none!important;
}
</style>
