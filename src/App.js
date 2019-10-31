import React from "react";
import "./App.css";
//import { FacebookShareButton } from 'react-share';  - FB Share Test
import { KaKaoTalkButton } from 'react-social-kr';
//props Error! => we should consider this



// [1948, 345, 345, 234, 234,5 34, 634]
// [true, null, null, true, true]
//

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "randomItem", {
  value: function(maxNum = 0) {
    if (maxNum === 0) return this[Math.floor(Math.random() * this.length)];
    const flag = new Array(this.length);
    let count = 0;
    while (count < maxNum) {
      const randomNum = Math.floor(Math.random() * this.length);
      if (flag[randomNum]) continue;
      flag[randomNum] = true;
      count += 1;
    }
    let result = [];
    flag.forEach((v, i) => {
      if (v) {
        result.push(this[i]);
      }
    });
    return result;
  }
});

const breads = [
  "허니오트",
  "하티",
  "파마산 오레가노",
  "화이트",
  "위트",
  "플랫브래드"
];
const menu = [
  "쉬림프",
  "스테이크 & 치즈",
  "써브웨이 멜트",
  "터키 베이컨",
  "치킨 데리야끼",
  "로티세리 바비큐 치킨",
  "로스트 치킨",
  "써브웨이 클럽",
  "터키",
  "에그마요",
  "이탈리안 비엠티",
  "미트볼",
  "햄"
];
const cheeses = ["아메리칸", "슈레드", "모짜렐라"];
const oven = ["돌려주세요", "아니요", "양파 넣고 돌려주세요"];
const veges = [
  "양상추",
  "토마토",
  "오이",
  "피망",
  "양파",
  "피클",
  "올리브",
  "할라피뇨",
  "아보카도"
];
const sauce = [
  "랜치드레싱",
  "마요네즈",
  "스위트 어니언",
  "허니 머스터드",
  "스위트 칠리",
  "핫 칠리",
  "사우스 웨스트",
  "머스타드",
  "홀스래디쉬",
  "사우전 아일랜드",
  "이탈리안 드레싱",
  "올리브 오일",
  "레드와인 식초",
  "소금",
  "후추",
  "스모크 바비큐"
];


const randomVege = () => {
  const how_many_vege = [0, 1, 2, 3].randomItem();
  const behavior = ["넣어주세요", "빼주세요"].randomItem();
  const selected_veges =
    how_many_vege === 0 ? "다" : veges.randomItem(how_many_vege);

  return selected_veges + " " + behavior;
};

const randomSauce = () => {
  const how_many_sauce = [0, 1, 2, 3].randomItem();
  if (how_many_sauce === 0)
    return ["다 넣어주세요", "넣지 말아주세요"].randomItem();
  return sauce.randomItem(how_many_sauce).join(", ");
};


function App() {
  return (
    <div className="App">
      <section className="Page">
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
        <header>시작화면</header>
        <footer
          style={{
            textAlign: "center",
            paddingBottom: "2.5rem"
          }}
        >
          <p>made by divisionCAT</p>
          <button>랜덤 빵 생성</button>
        </footer>
      </section>
      <section className="Page">
        <header>결과 및 공유</header>
        <main>
          <table className="ResultTable">
            <tbody>
              <tr>
                <td>메뉴</td>
                <td>{menu.randomItem()}</td>
              </tr>
              <tr>
                <td>빵</td>
                <td>{breads.randomItem()}</td>
              </tr>
              <tr>
                <td>치즈</td>
                <td>{cheeses.randomItem()}</td>
              </tr>
              <tr>
                <td>오븐</td>
                <td>{oven.randomItem()}</td>
              </tr>
              <tr>
                <td>야채</td>
                <td>{randomVege()}</td>
              </tr>
              <tr>
                <td>소스</td>
                <td>{randomSauce()}</td>
              </tr>
            </tbody>
          </table>
        </main>
        <footer style={{ textAlign: "center" }}>
          <KaKaoTalkButton pathname={"http://www.naver.com"}>
          <button>공유하기</button>
          </KaKaoTalkButton>
        </footer>
      </section>
    </div>
  );
}

export default App;
