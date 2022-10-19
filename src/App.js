import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Sub04 from "./pages/Sub04";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

import './css/Main.scss'
import './css/Basic.scss'

const App = () => {

  const MAINSLIDE = [
    { id: 0, tit: "깔끔이청소", con: "부산 아파트입주청소 부산 양산 김해 기장 아파트입주청소 이사청소 오피스텔청소 상가청소 전문업체", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub01" },
    { id: 1, tit: "아파트입주청소", con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub02" },
    { id: 2, tit: "이사/상가청소", con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, 누적된 먼지와 세균들을\n이사하기전에 청소", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.", link: "/sub03" },
    { id: 3, tit: "사무실청소", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소 작업 입니다. 사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다.", link: "/sub04" },
  ]

  const COMPANY = {
    name: "깔끔이 청소",
    addr: "부산광역시 북구 만덕2로 14 상가동 제314호",
    tel: "051-331-3354",
    email: "jjs3354@naver.com",
    number: " 606-11-45081",
  }

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main content={MAINSLIDE} />}></Route>
        <Route path="/sub01" element={<Sub01 content={MAINSLIDE} />}></Route>
        <Route path="/sub02" element={<Sub02 content={MAINSLIDE} />}></Route>
        <Route path="/sub03" element={<Sub03 content={MAINSLIDE} />}></Route>
        <Route path="/sub04" element={<Sub04 content={MAINSLIDE} />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer content={COMPANY} />
    </Wrapper>
  );
}

export default App;
