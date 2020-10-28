/* eslint-disable no-undef */
<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img
                        :src="column.avatar"
                        class="rounded-circle border border-light w-25 h-25 my-3"
                        alt="column.title"
                    />
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <a href="#" class="btn m-auto btn-outline-primary">进入专栏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// PropType 接受一个泛型
import { defineComponent} from "vue";
import column from "@/data/column";
export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}
export default defineComponent({
    name: "ColumnList",
    setup() {
        const columnList: ColumnProps[] = column.map(e => {
            if (!e.avatar)
                    e.avatar = require('@/assets/logo.png');
                return e;
        });
        return {
            columnList,
        };
    },
});
</script>

<style>
</style>
