import Vue from 'vue';
import { uniBadge } from '@dcloudio/uni-ui'; // 引入 uniBadge组件
// import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue';  // 使用全路径方式引入可以正常工作;
export default Vue.extend({
    components: { uniBadge },
    data() {
        return {
            title: 'Hello'
        }
    },
    onLoad() {

    },
    methods: {

    }
});