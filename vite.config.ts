import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || "3000", 10),
  },
  plugins: [react(), tsconfigPaths()],
});
