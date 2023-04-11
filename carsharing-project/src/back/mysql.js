const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const env = require("dotenv").config({ path: "./.env" });
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const conn = new mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
// 카카오 로그인 설정
passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_CLIENT_ID,
    clientSecret: process.env.KAKAO_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/kakao/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // 로그인 성공 처리 로직 작성
    // accessToken과 refreshToken은 각각 카카오 로그인 API로부터 발급받은 토큰입니다.
    // profile은 로그인한 사용자의 정보입니다.
  }
));

// 카카오 로그인 요청 처리
app.get('/auth/kakao', passport.authenticate('kakao'));

// 카카오 로그인 콜백 처리
app.get('/auth/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/login' // 로그인 실패 시 이동할 경로
}), function(req, res) {
  // 로그인 성공 시 처리할 로직 작성
  res.redirect('/'); // 로그인 성공 시 이동할 경로
});
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
  app.use(cors());
  
  module.exports = app;