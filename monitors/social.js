exports.conf = {
  enabled: true,
};

// exports.destroy = async (client, msg, roles) => {
//   client.rethink.deleteFromArray("guilds", msg.guild.id, roles);
// };

const cooldowns = new Set();

exports.handleRoles = (client, msg) => {
  const autoRoles = msg.guild.configs.autoroles;
  if (!autoRoles.length || !msg.guild.me.permissions.has("MANAGE_ROLES")) return null;

  const giveRoles = [];
  // const invalidRoles = [];
  autoRoles.forEach((roleObject) => {
    const role = msg.guild.roles.get(roleObject.id);
    if (role && msg.member.points.score >= roleObject.points && !msg.member.roles.has(role.id)) giveRoles.push(role);
    // else invalidRoles.push(roleObject);
  });

  // if (invalidRoles.length) this.destroy(client, msg, invalidRoles);
  switch (giveRoles.length) {
    case 0: return null;
    case 1: return msg.member.addRole(giveRoles[0]);
    default: return msg.member.addRoles(giveRoles);
  }
};

exports.ensureFetchMember = msg => (!msg.member ? msg.guild.fetchMember(msg.author.id) : null);

exports.cooldown = (msg) => {
  if (cooldowns.has(msg.author.id)) return true;
  cooldowns.add(msg.author.id);
  setTimeout(() => cooldowns.delete(msg.author.id), 60000);
  return false;
};

exports.run = async (client, msg) => {
  if (!msg.guild || msg.author.bot) return;
  if (msg.guild.configs.ignoreChannels.includes(msg.guild.id)) return;

  if (this.cooldown(msg)) return;

  try {
    await this.ensureFetchMember(msg);
    const add = client.Social.calc(msg);
    await msg.author.profile.update({ points: msg.author.profile.points + add });
    await msg.member.points.update(msg.member.points.score + add);

    await this.handleRoles(client, msg);
  } catch (e) {
    client.emit("log", e, "error");
  }
};
