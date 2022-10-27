<h1>1. 라이브러리와 프레임워크의 차이점</h1>
<p>프레임워크란 우리가 무언가를 만드는데 필요한 모든 것을 제공해준다.</p>
<p>웹 프레임워크는 UI뿐만이 아닌 Routing, 네트워크 통신을 위한 HTTP Clients, 많은 데이터를 관리할 수 있도록 도와주는 State management를 포함한다.</p>
<p>대표적인 웹 프레임워크로는 Angular, Android, IOS등이 있다.</p>
<p>프레임워크를 사용하면 편하다는 장점이 있지만 제공하는 모든 기능들을 숙지해야하며, 자율성이 떨어질 수 있다는 단점이 있다.</p>
</br>
<p>라이브러리란 큰 골격이나 규칙이 정해져있지 않고 조금 더 좁은 문제를 해결하기 위한 작은 Solution 단위이다.</p>
<p>리액트가 라이브러리의 한 예시이며, 다양한 문제들 속에서 UI를 만드는 것을 도와주는 라이브러리이다.</p>
<p>리액트로 만들면서 네트워크 통신이 필요하다면 Fecth 혹은 axios를 사용할 수 있고, 라우팅이 필요하다면 라우팅을 위한 라이브러리를 사용하는 자율성이 보장되는 장점이 있다.</p>

<h1>리액트의 동작 원리</h1>
<p>데이터를 나타내는 State(내부 상태)와 Props(외부로부터 전달 받은 상태), 이 두 가지 데이터를 나타내는 render가 있다.</p>
<p>State 혹은 Props가 변경될 때 마다 재랜더링을 하여 바뀐 상태를 업데이트하고, 실제 화면에는 변경된 부분만 업데이트가 된다.</p>

<h1>리액트 훅(React Hooks)</h1>
<p>함수형 컴포넌트가 등장하기 전에는 클래스형 컴포넌트를 만들었다.</p>
<p>클래스 컴포넌트는 절차형 프로그래밍에 익숙한 프론트엔드 개발자들에게 어려움을 주었고, 자바스크립트에서 발생하는 this 바인딩 이슈와 render, LifeCycle에 있는 로직들을 재사용하기 어려웠고 재활용 하려면 상속이나 Composition을 사용해야 하는 어려움도 주어서 함수형 컴포넌트가 등장했다.</p>
<p>함수형 컴포넌트는 함수로 컴포넌트를 만들 수 있고 클래스나 상속을 몰라도 함수로 정의하고, JSX를 리턴하는 것만 잘 만들면 컴포넌트를 쉽게 만들 수 있다.</p>
<p>또한 React Hooks을 이용해서 로직들을 재사용할 수 있다. React Hooks는 리액트의 State와 LifeCycle과 관련된 기능을 갈고리처럼 연결할 수 있는 함수들이다.</p>
<p>즉, React Hooks는 재사용이 가능한 함수라고 볼 수 있다. ex)useState, useRef, useMemo, useCallback 등등</p>
<p>가장 중요한 핵심은 React Hooks은 값의 재사용이 아닌 로직의 재사용이라는 것이다.</p>

<h1>JSX를 사용할 때 세 가지 유의점</h1>
<p>1. 리액트에서 JSX를 리턴할 때 꼭 하나의 태그만 리턴해야 한다.</p>
<p>2. HTML에서는 class라고 작성하지만 JSX에서는 className이라고 작성해야 한다.</p>
<p>3. HTML 형식과 매우 유사하지만 js 파일에 있으므로 자바스크립트 코드를 작성할 수 있다.</p>
<p>ex) function App() {const Name= "윤성"; return <.h1>{name}</.h1> </p>
<p>JSX를 작성할 때 <.li> 태그들이 많다면 자바스크립트 함수를 이용해서 간편하게 작성할 수 있다.</p>

![image](https://user-images.githubusercontent.com/58474431/198000860-26d1fb1e-5b70-4b96-a00c-c6cf7697e516.png)

![image](https://user-images.githubusercontent.com/58474431/198001072-d4f6cd70-0d0f-4e1b-8b19-e2234e8cad5b.png)

<h1>useState() 함수</h1>
<p>const [state, setState] = useState(value);; // const[상태, 상태를 변경하는 함수] = useState(상태의 초기 값)</p>
<p>useState()를 사용할 때 주의할점!</p>
![image](https://user-images.githubusercontent.com/58474431/198242968-8422e29c-fcdf-474d-8c74-418803c2cd2c.png)

<p>위의 코드를 바탕으로 버튼이 1번 클릭되면 number는 몇까지 증가할까?</p>
<p>setNumber(number + 1)이 5번 실행되어 0->1->2->3->4->5가 될 것이라고 생각하지만 number는 1이다.</p>
<p>그 이유는 무엇일까? 바로 클로저(Closure)때문이다.</p>
<p>클로저는 반환된 내부 함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하면서 자신이 선언되었을 때의 환경(스코프)밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다.</p>
<p>setNumber()함수가 실행되었을 때 number는 0이었으므로 setNumber(0 + 1)가 5번 반복되므로 number는 계속 1이 리턴된다.
만약 setNumber()함수가 실행될때 마다 1씩 증가하고 싶으면 어떻게 해야할까?
useState()의 함수는 state와 state를 변경하는 함수를 매개 변수로 받고 state를 변경하는 함수인 setState()함수는 S를 바로 리턴하거나 이전 상태값을 인자로 전달해주면 그 인자로 값을 업데이트 할 수 있는 콜백함수를 리턴할 수 있다.</p>

![image](https://user-images.githubusercontent.com/58474431/198245925-b128f199-87a5-46ad-abfc-334a8029cc02.png)

<p>따라서, setNumber(number + 1)처럼 S를 바로 리턴하는 것이 아닌  콜백함수를 사용하면 된다.
setNumber((prev) ⇒ prev + 1); // 이전 상태 값을 인자로 받아 1을 더해 리턴한다.</p>

![image](https://user-images.githubusercontent.com/58474431/198246183-806afc76-74f3-49ce-860f-769423b76486.png)

<p>즉, 이전 state를 기준으로 값을 변경해야하는 상황이 온다면 콜백 함수의 형태로 setStateAction을 하는 것이 안전하다.</p>
</br>
</br>
<h1>useEffect() 함수</h1>
<p>컴포넌트가 렌더링이 될 때 특정 작업을 실행할 수 있도록 도와주는 Hooks이다.</p>
<p>클래스형 컴포넌트에서는 LifeCycle이라는 생명주기 메소드를 사용할 수 있는데 useEffect()를 사용하면 함수형 컴포넌트에서도 사용할 수 있다.</p>
<p>즉, 라이프 사이클 훅(componentMount, componentWillUnMount, componentDidUpdate)등을 대체할 수 있다.</p>
<p>Mount는 컴포넌트가 처음 나타날때, UnMount는 컴포넌트가 사라질 때, Update는 특정 state, props가 바뀔 때이다.</p>
<p>useEffect(effet,[deps]</p>
<p>첫 번째 인자(effect)는 함수, 두 번째 인자는 배열(deps)가 들어간다.</p>
<p>1.컴포넌트가 Mount하는 경우</p>
<p>useEffect(()=> {console.log("렌더링이 될 때 마다 실행"},);</p>
<p>이 때 [deps]을 생략하면 컴포넌트가 렌더링이 될 때 마다 useEffect()가 실행된다.</p>
<p>만약, useEffect()함수가 state를 변경하는 함수라면 state가 변경될 때 마다 렌더링(Mount)이 일어나므로 무한 루프에 빠질 수 있다.</p>
<p>따라서 처음 렌더링이 될 때 한 번만 실행하고 싶으면 deps에 빈 배열,[]을 넣으면 된다.</p>
<p>ex) useEffect((특정 함수) => {}, [])</p>
<p>2. 컴포넌트가 Update될 때(state, props가 바뀔 때)</p>
<p>특정 값이 업데이트가 될 때만 실행하고 싶을 때 배열에 특정 값을 넣어주면 된다.</p>
<p>useEffect((특정 함수) => {console.log('name'이라는 값이 변경될 때만 실행')}, [name]);</p>
<p>이렇게 하면 특정 값이 변경되거나 설정될 때 특정 함수가 실행되는데 여기서 설정은 마운트가 될 때를 말한다.</p>
<p>따라서 업데이트가 될 때만 특정 함수를 실행시키고 싶으면 아래와 같이 작성하면 된다.</p>

![image](https://user-images.githubusercontent.com/58474431/198254458-ab248cac-878b-4905-adc6-cb2f9e87bd15.png)

<h1>3. 컴포넌트가 UnMount가 될 때(사라질 때 & Update가 되기 직전에)</h1>
<p>useEffect()는 함수를 리턴할 수 있는데 이 리턴하는 함수를 cleanUp 라고 한다.</p>
<p>UnMount가 될 때만 cleanUp 함수를 실행시키고 싶으면 deps에 빈 배열을 넣고, 특정 값이 업데이트 되기 직전에</p>
<p>cleanUp 함수를 실행시키고 싶으면 deps에 해당 값을 넣어주면 된다.</p>

![image](https://user-images.githubusercontent.com/58474431/198255593-5a0b4100-8ce2-4e97-8828-122b2b965011.png)

<h1>map()함수를 사용하여 자식 요소를 만들 때 주의할점</h1>
<p>자식 요소를 만들 때는 고유한 key 값을 넣어주어야 한다.</p>
<p>고유한 아이디를 가져야만 리액트 내부적으로 아이디를 기준으로 업데이트를 할지 안 할지, 배열에서 위치가 변경될 때도, 아이디를 기준으로 렌더링해야하기 때문이다.</p>

![image](https://user-images.githubusercontent.com/58474431/198257193-88ad1d8c-3f3b-4fa2-a23e-c132d2382e16.png)

<h1> userReducer() </h1>
<p>보통 상태를 업데이트를 할 때 useState를 사용해서 새로운 상태로 설정해주었는데, 이러한 방법말고도 다른 방법이 있다.</p>
<p>useReducer()를 사용하면 되는데 이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.</p>
<p>상태 업데이트 로직을 컴포넌트 밖에서 작성해도 되고 파일로 분리하여 불러와서 사용할수도 있다.</p>
<p>우선 reducer()함수는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.</p>

![image](https://user-images.githubusercontent.com/58474431/198269251-30b38f2a-7545-460d-b96f-bb114d71447e.png)

<p>reducer()가 반환하는 상태는 곧 컴포넌트가 갖게 될 새로운 상태가 된다.</p>
<p>이때 action은 업데이트를 위한 정보를 갖고 있고, 주로 type 값을 지닌 객체 형태로 사용한다.</p>
<p>useReducer()의 사용법</p>
<p>const [state,  dispatch] = useReducer(실행시킬 함수, 초기 값);</p>
<p>state는 상태 값이고, dispatch는 action을 발생시키는 함수이다. ex) dispatch({type:'INCREMENT'});</p>
<p>아래는 useReducer()를 사용한 하나의 예시이다.</p>

![image](https://user-images.githubusercontent.com/58474431/198270742-8b85348b-c6e9-4ac4-b896-a034ffabb019.png)

<h1>useImmer() </h1>
<p>리액트에서 객체를 업데이트를 할 때 직접 업데이트를 하면 안되고 불변성을 지켜주면서 업데이트를 해야 한다.</p>
<p>예를 들면 const object = {a : 1, b :2}; object.b = 3; 과 같이 직접 업데이트를 하는 것이 아닌</p>
<p>const nextObject = {...object, b: 3}; 처럼 spread 연산자를 통해 값을 복사해 새로운 객체를 만들어서 값을 업데이트해야 한다.</p>
<p>리액트에서 배열을 업데이트를 할 때 push, splice 등의 함수를 사용하거나 n 번째 인덱스의 값을 직접적으로 수정하면 안되고 concat, filter, map 등의 함수를 이용해야 한다. </p>

![image](https://user-images.githubusercontent.com/58474431/198281333-510c3c64-7071-4118-a846-9f5e7b1d8962.png)

<p>아래는 userImmer를 사용한 예제 코드이다.</p>

![image](https://user-images.githubusercontent.com/58474431/198276984-d53a5eff-ac59-4845-be36-01f81e994d84.png)


<h1>상태관리 라이브러리</h1>
<p>리액트에 사용하는 상태는 읽기 전용이기에 불변성을 유지해야하므로 상태의 변경이 필요하다면 기존에 있던 객체를 복사해서 복사한 객체의 요소를 업데이트를 해야한다.</p>
<p>따라서 상태 변경을 위한 라이브러리를 많이 사용하는데 대표적인 예로는 Redux, Mobx, Recoil, Immer가 있다.</p>
<p>복잡한 상태 관리를 해야한다면 라이브러리를 사용하는 것이 좋지만 일반 원시값, 객체, 중첩 객체, 배열등은 라이브러리 없이 useState()를 통해 가능하다.</p>
<p>상태를 관리하는 코드들을 재사용하고 싶거나 다른 파일에 두고 싶으면 useReducer()를 사용하면 된다.</p>
<p>또한 각각의 상태들은 컴포넌트 내부에서만 재사용이 가능했기 때문에 다수의 여러 컴포넌트가 글로벌한 상태를 공유할 수 없었기에 글로벌한 상태를 관리할 수 있는 Redux를 사용헀지만 최근에 Context API가 등장하면서 상태를 글로벌하게 공유할 수 있다.</p>

<h1>Context API</h1>
<p>컴포넌트 트리가 있고 두 개의 컴포넌트에서 상태 값을 공유해야한다면 어떻게 해야 할까?</p>
<p>각각 개별적인 컴포넌트는 useState()를 사용할 수 있지만 useState는 해당 컴포넌트에서의 값이 재사용이 될 뿐, 다른 컴포넌트에서는 재사용이 되지 않는다.</p>
<p>따라서 두 컴포넌트가 하나의 상태 값을 공유해야한다면 두 컴포넌트의 공통적인 부모 컴포넌트로 상태 값을 올려야한다.</p>
<p>그리고 상태 값을 필요로하는 자식 컴포넌트에게 props로 전달해야한다.</p>
<p>두 컴포넌트는 부모 컴포넌트에게 props로 상태 값을 전달받고 부모 컴포넌트를 포함한 세 개의 컴포너느에서 상태 값을 공유할 수 있게된다.</p>

![image](https://user-images.githubusercontent.com/58474431/198288226-a7f9dd56-537e-4e77-aa31-9dae657bc031.png)







