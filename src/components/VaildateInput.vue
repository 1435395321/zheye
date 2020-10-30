<template>
    <div class="validate-input-container pad-3">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': inputRef.error }"
                :value="inputRef.val"
                @input="updateValue"
                @blur="validateInput"
                v-bind="$attrs"
            />
            <small
                id="emailHelp"
                class="form-text invalid-feedback text-muted"
                v-if="inputRef.error"
                >{{ inputRef.message }}</small
            >
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
interface RuleProp {
    type: "required" | "email";
    message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
    props: {
        rules: Array as PropType<RulesProp>,
        modeValue: String,
    },
    inheritAttrs: false,
    setup(props, context) {
        const inputRef = reactive({
            val: props.modeValue || "",
            error: false,
            message: "",
        });

        // 传入事件
        const updateValue = (e: KeyboardEvent) => {
            const targetVal = (e.target as HTMLInputElement).value;
            inputRef.val = targetVal;
            context.emit("update:modelValue", targetVal);
        };
        const validateInput = () => {
            if (props.rules) {
                const allPassed = props.rules.every((rule) => {
                    let passed = true;
                    inputRef.message = rule.message;
                    switch (rule.type) {
                        case "required":
                            passed = inputRef.val.trim() != "";
                            break;
                        case "email":
                            passed = emailReg.test(inputRef.val);
                            break;
                        default:
                            break;
                    }
                    return passed;
                });
                inputRef.error = !allPassed;
            }
        };
        return {
            inputRef,
            validateInput,
            emailReg,
            updateValue,
        };
    },
});
</script>

<style>
</style>
