// NC CORE :: iki TECH
const NC_STATE = {
  slots: 0,
  active: false,
  master: "iki"
};

function NC_init(){
  NC_STATE.slots = 4;
  NC_STATE.active = true;
  return "NC CORE aktiv – Slots: " + NC_STATE.slots;
}

function NC_status(){
  return `NC STATUS\nActive: ${NC_STATE.active}\nSlots: ${NC_STATE.slots}\nMaster: ${NC_STATE.master}`;
}
