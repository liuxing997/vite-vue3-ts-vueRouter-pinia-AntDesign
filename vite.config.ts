import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
            title: getViteEnv(mode, "VITE_APP_TITLE"),
          },
        },
      }),
      AutoImport({
        dts: "src/auto-imports.d.ts",
        imports: ["vue", "vue-router"],
      }),
      Components({
        dts: "src/components.d.ts",
        deep: true,
        dirs: ["src/components"],
        extensions: ["vue", "tsx"],
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // 解析配置
    resolve: {
      // 路径别名
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      port: {{port}},
      host: true, // 监听所有地址
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            // '@primary-color': '#eb2f96', // 全局主色
          },
        },
      },
    },
    envDir: resolve(__dirname, "./env"),
  };
});
