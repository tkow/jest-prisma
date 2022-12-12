import type { Circus } from "@jest/types";
import type { JestEnvironmentConfig, EnvironmentContext } from "@jest/environment";
import Environment from "jest-environment-node-single-context";
export default class PrismaEnvironment extends Environment {
  private readonly delegate;
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext);
  setup(): Promise<void>;
  handleTestEvent(event: Circus.Event): Promise<void> | undefined;
  teardown(): Promise<void>;
}
