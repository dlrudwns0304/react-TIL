import Header from "../Header.jsx";
import './Test.css';
// 컴포넌트 생성 TEST(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <h1>Test 컴포넌트</h1>
        <Aside />
        </>

    )
}
// 다른컴포넌트에서 해당 test 컴포넌트 사용하도록 내보내기 설정
export default Test;

// 자식 컴포넌트
function Aside () {
    return (
        <aside>
            <input />
            <hr />
            <h1 style={{border:'1px solid #ddd'}}>서브메뉴</h1>
        </aside>
    )
}