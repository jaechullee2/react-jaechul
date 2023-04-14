import React from 'react';
import KakaoLoginButton from './KakaoLoginButton';
function Login(){
return(
    <>
    <div>
        <input name='email' placeholder='이메일'></input>
    </div>
    <div>
        <input name='secret'> </input>
    </div>
    <div>
        <button type='submit'>로그인</button>
    </div>
    <KakaoLoginButton/>
    </>
)
}
export default Login;