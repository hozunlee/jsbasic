import { splicePure } from "../utils/array-utils.js";

const a11 = splicePure([1, 2, 3, 4, 5], 1, 3); // a11 = [1, 5]
console.log("a11 :>> ", a11);
