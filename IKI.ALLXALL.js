// IKI.ALLXALL.js
export function IKI_ALLXALL(x, y){

    const IKI = { I:"I", K:"K", I2:"I" };

    // /(x.y(/IKI/)d.o)
    const div = (x / (y || 1));

    // *(...)
    const mul = div * (IKI.I.length + IKI.K.length + IKI.I2.length);

    // -(...)
    const sub = mul - x;

    // +(....)
    const add = sub + y;

    // axiomische Rotation
    const rot = add % 360;

    return {
        QI: rot,       // axiomische Drehrichtung
        EVO: add,      // Evolutions-Level
        RAW: mul,      // Rohwert
        TMP: sub,      // Drift
        CORE: IKI      // Selbstoperator
    };
}
