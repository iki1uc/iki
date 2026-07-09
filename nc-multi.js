// NC MULTI :: iki TECH
const NC_MULTI = {
  channels: [],
  master: "iki"
};

function NC_addChannel(name){
  NC_MULTI.channels.push(name);
  return `Channel hinzugefügt: ${name}`;
}

function NC_listChannels(){
  return "NC Channels:\n" + NC_MULTI.channels.join("\n");
}
