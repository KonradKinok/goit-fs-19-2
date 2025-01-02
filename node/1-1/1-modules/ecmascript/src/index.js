import { add, subtract, multiply, divide } from "./math.js";
import Logger from "./Logger.js";

Logger.log(add(40, 2));

Logger.error(subtract(44, 2));

Logger.warn(multiply(2, 1));

Logger.info(divide(3, 7));