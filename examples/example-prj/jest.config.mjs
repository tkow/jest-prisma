export default {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { diagnostics: false }],
  },
  testEnvironment: "./jest-prisma-ex-env.js",
};
