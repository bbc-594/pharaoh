<!--
 * @Author: your name
 * @Date: 2021-02-07 17:20:48
 * @LastEditTime: 2021-02-08 14:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/input/src/input.vue
-->
<script>
import {defineComponent } from "vue";
const Input = defineComponent({
    name: "PInput",
    setup(props, {emit}) {
        // const {} = toRef(props);
        // const value = ref("");
        const onInput = (e) => {
            const {target: {value}} = e;
            emit("update:modelValue", value);
        }
        const onChange = (e) => {
            const {target: {value}} = e;
            emit("change", value);
        }
        const onKeyDown = (e) => {
            const {keyCode, target: {value}} = e;
            if (keyCode === 13) {
                 emit("pressEnter", value);
            }
           
        }
        return {
            onInput,
            onChange,
            onKeyDown
        }
    },
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "请输入文本..."
        },
        defaultValue: String,
        disabled: {
            type: Boolean,
            default: false
        },
        maxLength: String || Number
    },
    methods: {
        renderInput() {
            return ( 
                <input
                 maxlength={this.maxLength}
                 disabled={this.disabled}
                 placeholder={this.placeholder} 
                 value={this.modelValue || this.defaultValue}
                 onKeydown={this.onKeyDown}
                 onChange={this.onChange} 
                 onInput={this.onInput}/>
            )
        }
    },
    render() {
        console.log('this.$props :>> ', this.$props);
        const {$props} = this;
        return (
        <div class="p-input">
          <input {...$props}/>
        </div>
        )
    }
})
export default Input
</script>

<style lang="less" scoped>

</style>