import React from 'react';
import ReactDOM from 'react-dom';
//react, readt-dom 패키지를 불러오는 설정
import App from './App';
//App.js 소스파일을 불러오는 설정이다.
//번들링된 결과 파일에 이 패키지들의 소스코드도 포함되게 된다.
//ReactDOM.render(<App />, document.getElementById('root'));
//태그를 지정할 때 CSS 실렉터 문법 사용
//id = "root" 속성을 갖는 태그 내부에 <App name = "이름"/> 확장 태그가 출력된다.
//ReactDOM.render(<App name = "배다슬"/>, document.getElementById('root'));
//클릭 이벤트 구현
ReactDOM.render(<App name="배다슬" />, document.querySelector('#root'));
