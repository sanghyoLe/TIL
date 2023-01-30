# Reflow와 Repaint가 실행되는 시점


### Reflow
- 모든 노드에 대해서 렌더링 트리 생성과 레이아웃 과정을 다시 수행하는 과정
- DOM 엘리먼트 추가, 제거 또는 변경
- CSS 스타일 추가, 제거 또는 변경
- CSS 스타일을 직접 변경하거나, 클래스 추가함으로써 레이아웃이 변경될 수 있다.
- CSS3 애니메이션과 트랜지션, 애니메이션의 모든 프레임에서 리플로우가 발생한다.
- offsetWidth와 offsetHeight의 사용
  - offsetWidth와 offsetHeight 속성을 읽으면 초기 리플로우가 트리거되어 수치가 계산됨.
- 유저 행동, 유저 인터랙션으로 발생하는 hover 효과, 필드에 텍스트 입력, 창 크기 조정, 글꼴 크기 변경, 스타일 시트 또는 글골 전환등을 활성화하여 리플로우를 트리거 할 수 있다.

### Repaint
- 화면에 그려지기 위해서 다시 페인팅을 수행하는 단계
- 가시성이 변경되는 순간(Opacity, background-color, visibility, outline)
- Reflow 가 실행된 순간 뒤에 실행

- 레이아웃에 영향이 미치지 않는 단순한 색산 변경 같은 변경사항은 Reflow 수행 없이 바로 Repaint 만 수행된다.
- Reflow가 일어나면 반드시 Repaint가 일어난다.
