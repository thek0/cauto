/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    preset: "ts-jest/presets/default-esm",
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
}
