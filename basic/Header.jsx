import './Header.css';
function Header() {
    const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요'
    const program = 'react'
    const islogin1 = false;
    return (
        <header>
        <h1 style={{backgroundColor:'yellow'}}>리엑트해보기</h1>
        <p style={{border:'5px solid #000'}}>숫자 {num1}에서 {num2}을 뺀 결과{num1 - num2}</p>
        <p style={{padding:'50px 0', color:'red'}}>{greeting}, {program} 출력결과 {greeting+program} </p>
        {{/* 힌트 : const 선언 4개 이상 활용하기 */}}
        {{/* const isLogin = false 일때 p 태그에 '로그인필요' 출력하기 , 반대로 true 면 p태그에 '로그인 성공' 출력  */}}
        <p>{islogin1  ? '로그인성공' : '로그인필요'}</p>
        </header>
        
    )
}
export default Header