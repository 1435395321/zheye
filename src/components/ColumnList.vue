/* eslint-disable no-undef */
<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <img
                        :src="column.avatar"
                        class="border border-light my-4"
                        alt="column.title"
                        style="width:60%;height:100px"
                    />
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <a href="#" class="btn btn-outline-primary">进入专栏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// PropType 接受一个泛型
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export default defineComponent({
    name: "ColumnList",
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true,
        },
    },
    setup(props) {
        // 计算图片为空的
        const columnList = computed(() => {
            return props.list.map(e => {
                if (!e.avatar)
                    e.avatar = require('@/assets/logo.png');
                return e;
            })
        })
        return {
            columnList,
        };
    },
});
</script>

<style>
</style>
