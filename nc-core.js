/* ===========================
   NC-MULTI + KlicK.me CODEC
   =========================== */

const NC_MULTI = {
    slots: {},

    // Slot erzeugen
    createSlot(id) {
        if (!this.slots[id]) {
            this.slots[id] = {
                raw: null,
                calc: null,
                op: null,
                text: "",
                meta: { version: "KlicK.me-1.0", time: Date.now() }
            };
        }
        return this.slots[id];
    },

    // Slot laden
    loadSlot(id) {
        const data = localStorage.getItem("NC_SLOT_" + id);
        if (data) {
            this.slots[id] = JSON.parse(data);
        } else {
            this.createSlot(id);
        }
        return this.slots[id];
    },

    // Slot speichern
    saveSlot(id) {
        if (!this.slots[id]) return;
        localStorage.setItem("NC_SLOT_" + id, JSON.stringify(this.slots[id]));
    },

    // Multi-Edit
    setText(id, text) {
        const slot = this.createSlot(id);
        slot.text = text;
        return slot;
    },

    // Multi-Calc (an nc-core.js gebunden)
    setCalc(id, mass, velocity) {
        const slot = this.createSlot(id);
        if (window.NC) {
            slot.raw  = window.NC.RAW[3];
            slot.calc = window.NC.NC_GHOST_SCAN(mass, velocity);
        }
        return slot;
    },

    // Multi-OP
    setOp(id, tag) {
        const slot = this.createSlot(id);
        slot.op = tag;
        return slot;
    },

    // ---------- KlicK.me ENCODER ----------
    encode(id) {
        const slot = this.slots[id];
        if (!slot) return null;
        return btoa(JSON.stringify(slot)); // base64 pack
    },

    // ---------- KlicK.me DISASSEMBLER ----------
    decode(encoded) {
        const obj = JSON.parse(atob(encoded));
        this.slots[obj.slot] = obj;
        return obj;
    }
};

// global export
window.KlicK = NC_MULTI;
