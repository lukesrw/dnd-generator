import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["src/**/*.test.ts"],
        globals: true,
        coverage: {
            provider: "istanbul",
            include: ["src/**/*.ts"],
            exclude: ["src/doc/**", "src/script/**"],
            all: true
        },
        reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["basic"]
    }
});
