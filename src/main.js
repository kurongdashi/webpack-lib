import _ from "lodash";
export function add(...args) {
  return args.reduce((a, b) => a + b);
}
export function join(a, b) {
  return _.join([a, b]);
}
