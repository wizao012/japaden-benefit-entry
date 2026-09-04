import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";

export const metadata:Metadata={
  title:"お申し込み受付完了｜Japan電力",
  description:"Japan電力 ベネフィットプランのお申し込みを受け付けました。担当者よりお電話でご案内します。",
};

export default function ThanksPage(){
  return <main className="done">
    <header>
      <a className="brand" href="https://www.japaden.jp/" aria-label="Japan電力"><img src="/logo_top.svg" alt="Japan電力"/></a>
      <div className="plan"><small>ハーモニーでんき</small>ベネフィットプラン</div>
    </header>
    <section className="success">
      <div className="successGlow" aria-hidden="true"><span>✦</span><div className="successIcon">✓</div><span>✦</span></div>
      <p className="en">THANK YOU</p>
      <h1>お申し込み<br/>ありがとうございます</h1>
      <p className="successLead">ベネフィットプランのお申し込みを<br className="mobileBreak"/>受け付けました。</p>
      <div className="receiptBadge"><span>受付完了</span><b>このあと担当者よりご連絡します</b></div>
      <div className="phoneNotice">
        <span className="phoneIcon" aria-hidden="true">☎</span>
        <div><p className="phoneLabel">お電話する番号</p><span className="phoneNumber">050-1783-4362</span><h2>担当者よりお電話いたします</h2><p>こちらの番号から、ご入力いただいた電話番号へご連絡します。着信がありましたら、ご対応をお願いいたします。</p></div>
      </div>
      <div className="nextArea">
        <p className="nextTitle"><span>NEXT</span>今後の流れ</p>
        <ol className="nextSteps">
          <li><i>1</i><b>受付完了</b><small>お申し込みを<br/>受け付けました</small></li>
          <li><i>2</i><b>お電話で確認</b><small>担当者が内容を<br/>確認します</small></li>
          <li><i>3</i><b>お手続き案内</b><small>今後の流れを<br/>ご案内します</small></li>
        </ol>
      </div>
      <p className="thanksNote">受付完了メールもあわせてご確認ください。</p>
      <a className="primary" href="https://www.japaden.jp/harmony/benefit-plan/">ベネフィットプランに戻る</a>
    </section>
    <SiteFooter/>
  </main>
}
