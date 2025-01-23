import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3030, // 设置开发服务器的端口号
    open: !true, // 自动打开浏览器
  },
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: true, // 生成 source map 文件
  },
});
