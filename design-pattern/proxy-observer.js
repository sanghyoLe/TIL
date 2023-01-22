function createReactiveObject(target, callback) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback(`${prop}가 [${prev}] >> [${value}]로 변경되었습니다.`);
      }
      return true;
    }
  })
  return proxy;
}

const a = {
  "상효": "CS 공부중"
}

const b = createReactiveObject(a, console.log);
b.상효 = "CS 공부중";
b.상효 = "집 가는 중";
