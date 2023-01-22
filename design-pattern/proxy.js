const handler = {
  get: function(target, name) {
    return name === 'name' ? `${target.a} ${target.b}` : target[name]
  }
}

const p = new Proxy({a: 'Sanghyo', b: 'do CS studying'}, handler);
console.log(p.name);
