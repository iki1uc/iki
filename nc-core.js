/* ===========================
   NC-CORE.js
   RAW • RAWATOR • WURMLOCH • TRANS_WARB • GATE-TECH
   =========================== */

// ---------- RAW: 4 Grundzustände ----------
const RAW = {
    1: { id: "RAW-01", name: "Wahrnehmen",   kern: "sensor",   kanal: 1 },
    2: { id: "RAW-02", name: "Muster",       kern: "pattern",  kanal: 2 },
    3: { id: "RAW-03", name: "Bewegung",     kern: "vector",   kanal: 3 },
    4: { id: "RAW-04", name: "Nachhall",     kern: "echo",     kanal: 4 }
};

// ---------- TRANS_WARB: Physik-Übergänge ----------
const TRANS_WARB = {
    impulse(mass, velocity) {
        return mass * velocity; // Impuls p = m * v
    },
    damp(value) {
        return value * 0.618; // Dämpfung (goldener Faktor)
    }
};

// ---------- RAWATOR: Bindet RAW an Energiezustand ----------
const RAWATOR = {
    bind(raw) {
        return {
            id: raw.id,
            state: raw.kern,
            energy: raw.kanal * 1.0
        };
    }
};

// ---------- WURMLOCH tmp-03: RAW → Impuls → Echo → Loop ----------
const WURMLOCH_TMP3 = {
    gate(raw, mass, velocity) {
        const r = RAWATOR.bind(raw);
        const p = TRANS_WARB.impulse(mass, velocity);
        const echo = TRANS_WARB.damp(p);

        return {
            raw: r,
            impulse: p,
            echo: echo,
            loop: echo > 0.1
        };
    }
};

// ---------- BENCH LOOP TEST ----------
function NC_BENCH_LOOP_TEST(mass, velocity) {
    const res = WURMLOCH_TMP3.gate(RAW[3], mass, velocity);
    return {
        ok: res.loop,
        impulse: res.impulse,
        echo: res.echo
    };
}

// ---------- GHOST SCAN ----------
function NC_GHOST_SCAN(mass, velocity) {
    const bench = NC_BENCH_LOOP_TEST(mass, velocity);
    return {
        ghost: bench.echo > 0.05,
        signal: bench.echo,
        tag: bench.ok ? "LOOP-STABLE" : "LOOP-DECAY"
    };
}

// ---------- ROOT-GATE ----------
function NC_ROOT_GATE(rawValue){
    window.location.href = "./LOCH/IN/RAW.html?raw=" + encodeURIComponent(rawValue);
}

// ---------- EXPORT (optional) ----------
window.NC = {
    RAW,
    TRANS_WARB,
    RAWATOR,
    WURMLOCH_TMP3,
    NC_BENCH_LOOP_TEST,
    NC_GHOST_SCAN,
    NC_ROOT_GATE
};

