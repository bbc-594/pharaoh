<!--
 * @Author: your name
 * @Date: 2021-02-05 13:39:40
 * @LastEditTime: 2021-02-07 17:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pharaoh/packages/button/src/button.vue
-->

<script>
import {computed, defineComponent, ref, renderSlot, toRefs} from 'vue';
import {button_class} from "../button_props";
// import "../../../style/button.less";
const PButton = defineComponent({
    name: "PButton",
    setup(props) {
        const str = ref("按钮扭");
        const {size, shape, ghost, type, block} = toRefs(props);
        const isGhost = computed(() => {
            return ghost.value ? "ghost" : ""
        })
        const isBlock = computed(() => {
            return block.value ? "block" : ""
        })
        const classes = [button_class[isBlock.value], button_class[size.value], button_class[isGhost.value], button_class[type.value], button_class[shape.value]];
        return {
            str,
            classes,
        }
    },
    props: {
        size: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: ""
        },
        ghost: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: ""
        }
    },
    render() {
        return (
            <div class="p-button" class={this.classes}> 
               <button disabled={this.disabled}>
                 {renderSlot(this.$slots, "default")}
               </button>
            </div>
        )
    }
})
export default PButton
</script>

<style lang="less" src="../../../style/button.less" scoped>
</style>
