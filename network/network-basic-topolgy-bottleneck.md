# 네트워크 기본과 토폴로지와 병목현상

컴퓨터 등의 장치들이 통신 기술을 이용하여 구축하는 연결망을 지칭하는 용어

네트워크란?

- 노드(node)와 링크가 서로 연결되어 있거나 연결되어 있으며 리소스를 공유하는 집합

노드 

- 서버, 라우터 스위치 등 네트워크 장치

링크

- 유선 또는 무선

처리량과 지연시간

네트워크를 구축할 때는 ‘좋은’ 네트워크로 만드는 것이 중요하다.

좋은 네트워크란?

많은 처리량을 처리할 수 있으며 지연 시간이 짧고 장애 빈도가 적으며 좋은 보안을 갖춘 네트워크

처리량(Throughput)

- 링크를 통해 전달되는 단위 시간 당 데이터양
- 단위 bps(bits per second) - 초당 전송 또는 수신되는 비트 수
- 사용자들이 많아 접속할때마다 커지는 트래픽, 네트워크 장치 간의 대역폭, 네트워크 중간에 발생하는 에러, 장치의 하드웨어 스펙에 영향을 받는다.

대역폭

- 주어진 시간동안 네트워크 연결을 통해 흐를 수 있는 최대 비트 수

지연시간 ( latency ) 

- 요청이 처리되는 시간, 어떤 메시지가 두 장치 사이를 왕복하는 데 걸린 시간
- 매체 타입(무선, 유선), 패킷 크기, 라우터의 패킷 처리 시간에 영향을 받는다.

## 네트워크 토폴로지와 병목현상

네트워크 토폴로지(network topology)

- 노드와 링크가 어떻게 배치되어 있는지에 대한 방식이지 연결 형태를 의미

트리 토폴로지

- 계층형 토폴로지, 트리 형태로 배치한 네트워크 구성
- 노드의 추가, 삭제가 쉬우며 특정 노드에 트래픽이 집중될 때 하위 노드에 영향을 끼칠 수 있다.


버스 토폴로지

- 중앙 통신 회선 하나에 여러 개의 노드가 연결되어 공유하는 네트워크 구성
- 근거리 통신망(LAN)에서 사용한다.
- 설치 비용이 적고, 신뢰성이 우수하다
- 중앙 통신 회선에 노드를 추가하거나 삭제하기 쉽다.
- 스푸핑이 가능한 문제점이 있다.



- **스푸핑?**
    - LAN상에서 송신부의 패킷을 송신과 관련 없는 다른 호스트에 가지 않도록 하는 스위칭 기능을 마비시키거나 속여서 특정 노드에 해당 패킷이 오도록 처리하는 것

송신부 —> 악의적 노드 —> 수신부

스타(성형) 토폴로지

- 중앙에 있는 노드에 모두 연결된 네트워크 구성
- 노드를 추가하거나 에러를 탐지하기 쉽고, 패킷의 충돌 발생 가능성이 적다.
- 어떠한 노드에 장애가 발생해도 쉽게 에러를 발견할 수 있다.
- 장애 노드가 중앙 노드가 아닐 경우, 다른 노드에 영향을 끼치는 것이 적다.
- 중앙 노드에 장애가 발생하면 전체 네트워크를 사용할 수 없고, 설치 비용이 고가이다.


면접을 위한 CS 전공지식 노트에서 따옴

링형 토폴로지

- 각각의 노드가 양 옆의 두 노드와 연결하여 전체적으로 고리처럼 하나의 연속된 길을 통해 통신을 하는 망 구성 방식
- 데이터는 노드에서 노드로 이동하고, 각 노드는 고리 모양의 길을 통해 패킷을 처리한다.
- 노드 수가 증강되어 네트워크 상의 손실이 거의 없다.
- 충돌이 발생되는 가능성이 적고, 노드의 고장 발견을 쉽게 찾을 수 있다.
- 네트워크 구성 변경이 어렵고 회선에 장애가 발생하면 전체 네트워크에 영향을 크게 끼치는 단점이 있다.

- **패킷?**
    - 통신망을 통해 전송하기 쉽도록 자른 데이터의 전송 단위

- **병목현상이란?**
    - 병목(bottleneck) 현상은 전체 시스템의 성능이나 용량이 하나의 구성 요소로 인해 제한을 받는 현상을 말한다.
    - 예를 들어, 병의 몸통보다 병의 목 부분 내부 지름이 좁아서 물이 상대적으로 천천히 쏟아지는 것에 비유할 수 있다.
    - 서비스에서 이벤트를 열었을 때, 트래픽이 많이 생기고 그 트래픽을 잘 관리하지 못하면 병목 현상이 생겨 사용자는 웹 사이트로 들어가지 못한다!

**병목 현상을 해결하기 위해선?**

<aside>
💡 네트워크 토폴로지가 어떻게 되어 있는지 확인한다.
서버와 서버 간 그리고 게이트웨이로 이어지는 회선을 추가해서 병목 현상을 해결한다.

</aside>

- **게이트웨이란?**
    - 서로 다른 프로토콜끼리도 네트워크 통신이 가능하도록 연결해주는 기기
