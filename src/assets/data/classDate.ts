import {valueOf} from "../atom"
import {CLASS_DATA} from "../atom"

const G2A: CLASS_DATA = {
    className: "G2A",
};

const G2B: CLASS_DATA = {
    className: "G2B",
};

const G2C: CLASS_DATA = {
    className: "G2C",
};

const J2A: CLASS_DATA = {
    className: "J2A",
};

const J2B: CLASS_DATA = {
    className: "J2B",
};

const J2C: CLASS_DATA = {
    className: "J2C",
};
const CLASS = {
    G2A,
    G2B,
    G2C,
    J2A,
    J2B,
    J2C,
};
type CLASS = valueOf<typeof CLASS>;
export default CLASS
