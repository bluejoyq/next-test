# NEXT JS 연습용
## CSS-in-JS
참조 https://css-tricks.com/a-thorough-analysis-of-css-in-js/

### 장점
#### Scoped CSS 
- CSS-in-JS 라이브러리들은 *CSS modules*이라고 불리는 기술을 이용해서 고유한 CSS 클래스 이름을 생성한다.  
- 이름 충돌을 걱정할 필요가 없으며 컴포넌트 단위로 스타일링하기에 css 클래스 이름을 찾아다닐 필요가 없다.

### 단점
참고 https://dev.to/alexsergey/css-modules-vs-css-in-js-who-wins-3n25
#### hot-reload
- css를 변경하기만 하면 변경 사항이 바로 보이지만, css-in-js를 사용하면 프로젝트가 다시 컴파일 된다.
- 