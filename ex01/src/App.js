import React from 'react';

class App extends React.Component {
    message = "안녕하세요.";

    eventListener1() {
        alert('클릭 이벤트');
    };

    //this 키워드는 App을 가리키지 않는다.
    eventListener2() {
        alert('안녕하세요. ' + this.props.name + ' ' + this.props.age + '세');
    };

    render() {
        let text = "hello";
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
            </div>
        );
    }
}

App.defaultProps = {
    age : 26
}

export default App;
