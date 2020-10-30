<template>
    <div class="container">
        <global-header :user="currentUser"></global-header>
        <ColumnList></ColumnList>
        
        <validate-form @form-submit="onFormSubmit">
            <validate-iput class="mb-4" :rules="emailRules" v-model="emaiVal" placeholder="hellow work"></validate-iput>  
            <template #submit>
                <span class="btn btn-danger">SUBMIT</span>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ColumnList from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateIput, { RulesProp } from "./components/VaildateInput.vue";
import ValidateForm from './components/ValidateForm.vue'
const currentUser: UserProps = {
    isLogin: true,
    name: "vikong",
};
export default defineComponent({
    name: "App",
    components: {
        // ColumnList,
        GlobalHeader,
        ValidateIput,
        ValidateForm
    },
    setup() {
        const emaiVal = ref('viking');
        const onFormSubmit = (res: boolean) => {
            console.log(123,res)
        }
        const emailRules: RulesProp = [
            { type: 'required', message: '电子邮箱不为空'},
            { type: 'email', message: '输入正确电子邮箱'}
        ];

        return {
            currentUser,
            emailRules,
            emaiVal,
            onFormSubmit
        };
    },
});
</script>

<style>
a {
    text-decoration: none !important;
}
</style>
