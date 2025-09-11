import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/meu-portfolio/", // coloque o nome do repositório aqui
});
