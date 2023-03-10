## 싱글톤 패턴과 의존성 주입

1.1.1 싱글톤 패턴

- 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴
- 하나의 클래스를 기반으로 하나의 인스턴스를 만들어 이를 기반으로 로직을 만드는데 쓰임
- 데이터 연결 모듈에 많이 사용
- 생성된 인스턴스를 다른 모듈들이 공유하며 사용

장점 

- 인스턴스 생성 비용 감소

단점

- 의존성 높아짐
- **TDD(Test Driven Development)를 할 때 걸림돌**
    - TDD시, 단위 테스트를 주로 하는데 단위 테스트는 테스트가 서로 독립적이어야 하며 어떤 순서로든 실행할 수 있어야 한다. 싱글톤 패턴은 미리 생성된 인스턴스를 기반으로 구현하는 패턴이므로 테스트 마다 ‘독립적인’ 인스턴스를 만들기 어렵다.

**의존성 주입**

싱글톤 패턴은 사용하기 쉽고, 실용적 이지만 **모듈 간의 결합을 강하게 만들 수 있다는 단점**이 있다.

- 해결 방법

의존성 주입(DI, Dependency Injection)을 통해 모듈 간의 결합을 느슨하게 만들어 해결할 수 있다.

- 의존성이란?
    - 종속성이라고도 하며, A가 B에 의존성이 있다는 것은 B의 변경 사항에 대해 A 또한 변해야된다는 것을 의미한다.

메인 모듈이 ‘직접’ 다른 하위 모듈에 대한 의존성을 주기 보다는 중간에 의존성 주입자(dependency injector)가 이 부분을 가로채 메인 모듈이 ‘간접’적으로 의존성을 주입하는 방식이다.

이를 통해 메인 모듈(상위 모듈)은 하위 모듈에 대한 의존성이 떨어지게 된다.

이를 ‘**디커플링 된다.**’라고도 한다.

의**존성 주입 장점**

- 모듈 쉽게 교체가능 한 구조
    - 테스팅 하고 쉽고, 마이그레이션하기 수월해짐
- 구현 시, 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어주기 떄문에 애플리케이션 의존성 방향 일관, 쉽게 추론, 모듈 간의 관계 조금 더 명확

**의존성 주입 단점**

- 모듈들이 더욱더 분리되므로 클래스 수가 늘어나 복잡성이 증가될 수 있으며, 약간의 런타임 페널티가 생긴다.

**************************************의존성 주입 원칙**************************************

- “상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 한다.
- 둘 다 추상화에 의존해야 하며, 이 떄 추상화는 세부 사항에 의존하지 말아야 한다.
