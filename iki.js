export function IKI(x, y){

    // Selbstoperator
    const self = { I: "I", K: "K", I2: "I" };

    // / = teilen
    const div = (x / (y || 1));

    // * = multiplizieren
    const mul = div * (self.I.length + self.K.length + self.I2.length);

    // - = abziehen
    const sub = mul - x;

    // + = hinzufügen
    const add = sub + y;

    // axiomische Rotation
    const rot = (add % 360);

    return {
        QI: rot,
        EVO: add,
        RAW: mul,
        TMP: sub,
        CORE: self
    };
}
