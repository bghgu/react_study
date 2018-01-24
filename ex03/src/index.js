import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// //콜백 함수 구현
// let title1 = "hello1";
// let title2 = "hello2";
// let title3 = "hello3";
// function callback1() {
//     alert(title1);
// }
// //변수에 함수를 대입
// let callback2 = function() {alert(title2);}
// //1초 뒤에 실행
// setTimeout(callback1, 1000);
// setTimeout(callback2, 2000);
// //setTimeout 함수의 첫째 파라미터로 콜백 함수를 전달한다.
// setTimeout(function() {alert(title3);}, 3000);
// //화살표 함수
// //alert()끝에 세미콜론 : 이것은 문장
// setTimeout(() => {alert("hello4"); }, 4000);
// //alert()끝에 세미콜론이 없다 : 이것은 표현식
// //함수 본문이 표현식 한개일 경우 본문을 중괄호로 묶으면 안된다.
// setTimeout(() => alert("hello5"), 5000);

class App2 {
    title = "hello";
    testThis() {
        alert(this.title);
    }
}
//const obj = new App2();
//obj.testThis();

//메소드가 정상적으로 호출 된 경우에 그 메소드 내부에서 this는 메소드가 호출된 객체를 가리킨다.
//그런데 메소드가 콜백 함수로 등록되어 호출되는 경우에 그 메소드 내부에서 this는 메소드가 호출된 객체가 아닌 window객체를 가리키게 된다.
//그래서 undefined
//이때 this는 window
//setTimeout(obj.testThis, 1000);

//바인드 하면 된다.
//setTimeout(obj.testThis.bind(obj), 2000);

//콜백 함수를 새로 만들고 그 콜백 함수 내부에서 메소드를 호출하는 것이 편리하다.
//setTimeout(function() {obj.testThis()}, 1000);

//화살표 함수로 콜백 구현
//setTimeout(() => obj.testThis(), 1000);

//App2 객체가 생성된 뒤 생성된 App객체의 testThis() 메소드가 호출된다.
//setTimeout(() => new App2().testThis(), 1000);

//ReactDOM.render(<App />, document.getElementById('root'));

// function tick() {
//     let element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>{ new Date().toLocaleTimeString() }</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// //주어진 시간 간격으로 계속 호출
// setInterval(tick, 1000);

// //App 확장 태그를 함수로 구현함
// function App3(props) {
//     return (
//         <div>
//             <h1>{ props.title }</h1>
//             <h2>{ new Date().toLocaleTimeString() }</h2>
//         </div>
//     );
// }
//
// function tick() {
//     ReactDOM.render(<App3 title="안녕!" />, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

// //App 확장 태그를 컴포넌트 클래스로 구현함
// function App3(props) {
//     return (
//         <div>
//             <h1>{ props.title }</h1>
//             <h2>{ props.date.toLocaleTimeString() }</h2>
//         </div>
//     );
// }
//
// function tick() {
//     ReactDOM.render(<App3 title="안녕!" date={ new Date() } />, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);

//확장 태그의 애트리뷰트 값에 자바스크립트 표현식 사용
// class App3 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{ this.props.title }</h1>
//                 <h2>{ this.props.date.toLocaleTimeString() }</h2>
//             </div>
//         );
//     }
// }
//
// function tick() {
//     ReactDOM.render(<App3 title="안녕!" date={ new Date() } />, document.getElementById('root'));
// }
// setInterval(tick, 1000);

registerServiceWorker();
