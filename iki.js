// iki.js — ALLXALL CORE

import { NC_CORE } from "./nc-core.js";
import { NC_MULTI } from "./nc-multi.js";

export function IKI_ALLXALL(x, y){

    const IKI = { I:"I", K:"K", I2:"I" };

    const div = (x / (y || 1));                         // /
    const mul = div * (IKI.I.length + IKI.K.length + IKI.I2.length); // *
    const sub = mul - x;                                // -
    const add = sub + y;                                // +
    const rot = add % 360;                              // axiomische Rotation

    return {
        QI: rot,
        EVO: add,
        RAW: mul,
        TMP: sub,
        CORE: IKI
    };
}

export async function IKI_BENCH(){
    const load = async n => (await fetch(`bench/${n}.bench.item`)).text();
    return {
        S1: await load("station-01"),
        S2: await load("station-02")
    };
}

export async function IKI_SYSTEM(x, y){
    const evo = IKI_ALLXALL(x, y);
    return {
        CORE: NC_CORE(evo),
        MULTI: NC_MULTI(evo),
        EVO: evo,
        BENCH: await IKI_BENCH()
    };
}
