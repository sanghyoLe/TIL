# 팩토리 패턴

객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴

상속 관계에 있는 두 클래스에서 상위 클래스가 뼈대를 결정하고, 하위 클래스에서 객체 생성에 관한 구체적 내용을 결정하는 패턴이다.

- 상위 클래스와 하위 클래스가 분리되기 때문에 느슨한 결합을 가진다.
- 상위 클래스에서는 인스턴스 생성 방식에 대해 전혀 알 필요가 없기 때문에
    
    더 많은 유연성을 갖게된다.
    
- 객체 생성 로직이 따로 떼어져 있기 때문에 코드를 리팩터링하더라도 한 곳만 고칠 수 있게 되어 유지 보수성이 증가한다.

```jsx
// Javascript 커피 팩토리
class Latte {
  constructor() {
    this.name = 'latte';
  }
}

class Espresso {
  constructor() {
    this.name = 'espresso';
  }
}

class LatteFactory {
  static createCoffee() {
    return new Latte();
  }
}

class EspressoFactory {
  static createCoffee() {
    return new Espresso();
  }
}

const factoryList = { LatteFactory, EspressoFactory };

class CoffeeFactory {
  static createCoffee(type) {
      const factory = factoryList[type];
      return factory.createCoffee();
  }
}

const main = () => {
  // 라떼 주문
  const coffee = CoffeeFactory.createCoffee('LatteFactory');
  // 커피 이름
  console.log(coffee.name);
}

main();
```

- 이는 의존성 주입이라고도 볼 수 있다. CoffeeFactory에서 LatteFactory의 인스턴스를 생성하는 것이 아닌 LatteFactory에서 생성한 인스턴스를 CoffeeFactory에 주입하고 있기 때문
- 또한, CoffeeFactory를 보면 static 으로 createCoffee() 정적 메서드를 정의한 것을 알 수 있는데, 정적 메서드를 쓰면 클래스의 인스턴스 없이 호출이 가능하여 메모리를 절약할 수 있고, 개별 인스턴스에 묶이지 않으며 클래스 내의 함수를 정의할 수 있는 장점이 있다.
