import {Maybe} from "@namespace/types";

export const test = (obj: { number?: number }): Maybe<number> => {
    return obj?.number;
};