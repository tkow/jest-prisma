"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jest_prisma_core_1 = require("@quramy/jest-prisma-core");
const jest_environment_node_single_context_1 = __importDefault(require("jest-environment-node-single-context"));
class PrismaEnvironment extends jest_environment_node_single_context_1.default {
  constructor(config, context) {
    super(config, context);
    this.delegate = new jest_prisma_core_1.PrismaEnvironmentDelegate(config, context);
  }
  async setup() {
    const jestPrisma = await this.delegate.preSetup();
    await super.setup();
    this.global.jestPrisma = jestPrisma;
  }
  handleTestEvent(event) {
    return this.delegate.handleTestEvent(event);
  }
  async teardown() {
    await Promise.all([super.teardown(), this.delegate.teardown()]);
  }
}
exports.default = PrismaEnvironment;
