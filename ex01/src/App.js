import React from 'react';
import PropTypes from 'prop-types';
//컴포넌트 소스코드 쪼개기
import Title2 from './Title';
import Contents2 from './Contents';
import Footer2 from './Footer';

class App extends React.Component {
    message = "안녕하세요.";
    color2 = {color : "red"}
    eventListener1() {
        alert('클릭 이벤트');
    };

    //this 키워드는 App을 가리키지 않는다.
    eventListener2() {
        alert('안녕하세요. ' + this.props.name + ' ' + this.props.age + '세');
    };

    render() {
        let text = "hello";
        //자바 스크립트 객체 대입
        let color = {color : "blue"};
        return (
            //<div>Hello World!!!</div>
            <div>
                //루트 태그가 없고 div 태그가 두개라 에러 발생
                //<div>111111</div>
                //<div>222222</div>
                //루트 태그로 묶어주면 에러 해결
                <div>111111</div>
                <div>222222</div>
                //{}안에 js expression을 구현하면 된다.
                <h1>{text}</h1>
                //날짜 출력
                <h2>{new Date().toString()}</h2>
                //멤버 변수를 출력, this를 생략 할 수 없이 반드시 붙여야 한다.
                //render 함수 밖은 멤버 변수로 인식 하지 않는다.
                <h3>{this.message}</h3>
                //
                <h1>Hello {this.props.name}</h1>
                <div>{this.props.name === undefined ? 'undefined' : 'defined'}</div>
                <div>age {this.props.age}</div>
                <div>
                    //클릭 이벤트
                    //this 생략 불가능
                    //this 키워드는 App 객체를 가리키지 않는다.
                    <button type="button" onClick={this.eventListener1}> Hello </button>
                </div>
                <div>
                    //에러 발생
                    //this 키워드는 App 객체를 가리키지 않아 에러 발생
                    <button type="button" onClick={this.eventListener2}> Hello </button>
                </div>
                <div>
                    //bind 하면 App을 가리키게 된다.
                    <button type="button" onClick={this.eventListener2.bind(this)}> Hello </button>
                </div>
                <div>
                    /*
                    //에러 발생
                    //html 문법이 아니고 jsx 문법이라 에러 발생
                    {/**style="color : blue"> Hello {this.props.name}*/}
                    <h1 style = {color}> Hello {this.props.name} </h1>
                    //멤버 변수를 사용해서 구현할 땐 this
                    <h1 style = {this.color2}> Hello {this.props.name} </h1>
                    //변수 대신 표현식을 직접 입력
                    <h1 style = {{color : "yellow"}}> Hello {this.props.name} </h1>
                </div>
                //확장 태그 중첩 사용
                //확장 태그 내부에 다른 확장 태그가 포함될 수 있다.
                <Title/>
                <Title2/>
                <Contents/>
                <Contents2/>
                <Footer/>
                <Footer2/>
            </div>
        );
    }
}

App.defaultProps = {
    age : 26
}
//Attribute 타입은 String 지정
//number : 숫자
//object : 객체
App.propTypes = {
    name : PropTypes.string
}

class Title extends React.Component {
    render() {
        return (<h1>제목</h1>)
    }
}

class Contents extends React.Component {
    render() {
        return (
            <div>
                <hr/> 내용1<br/> 내용2<br/> 내용3<br/> <hr />
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return ( <span>페이지 하단입니다</span> );
    }
}

//export default App 선언에 의해서 App 확장 태그 클래스(컴포넌트)는 public 이고
//Title, Contents, Footer는 private이다.
export default App;
