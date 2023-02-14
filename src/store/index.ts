import { createPinia } from "pinia"; // 导入pinia
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; // 导入pinia持久化插件

// 创建pinia
const pinia = createPinia();

// 使用pinia持久化插件
pinia.use(piniaPluginPersistedstate);

// 导出pinia
export default pinia;
