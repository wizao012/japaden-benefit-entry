"use client";
import { FormEvent } from "react";
import { SiteFooter } from "./components/SiteFooter";
const companies=["北海道電力","東北電力","東京電力","中部電力","北陸電力","関西電力","中国電力","四国電力","九州電力","その他"];
export default function Home(){
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();window.location.href="/thanks"}
 return <main><Header/><section className="hero"><i className="spark s1">✦</i><i className="spark s2">✦</i><p className="en">BENEFIT PLAN</p><h1>お申し込みフォーム</h1><p>必要事項をご入力ください。<br/>お申し込みはかんたん、約<b>3分</b>で完了します。</p><div className="steps"><span className="active"><i>1</i>お客様情報の入力</span><hr/><span><i>2</i>受付完了</span></div></section>
 <form className="form" onSubmit={submit}><div className="formTitle"><i>●</i><span><small>お客様情報</small><h2>ご契約者さまについて</h2></span></div>
 <Field id="name" label="お名前"><input id="name" name="name" autoComplete="name" placeholder="例）電力 太郎" required/></Field>
 <Field id="address" label="ご住所"><input id="address" name="address" autoComplete="street-address" placeholder="例）東京都千代田区〇〇 1-2-3 ジャパンハイツ101" required/></Field>
 <fieldset className="field"><legend>住居形態 <em>必須</em></legend><div className="radios">{[["house","戸建て"],["apartment","集合住宅"]].map(([v,l])=><label key={v}><input type="radio" name="housing" value={v} required/><span><i/>{l}</span></label>)}</div></fieldset>
 <Field id="email" label="メールアドレス" note="受付完了メールをお送りします。"><input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="例）taro@example.com" required/></Field>
 <Field id="tel" label="電話番号" note="ハイフンなしでご入力ください。"><input id="tel" name="tel" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9ー－―‐-]{10,14}" placeholder="例）09012345678" required/></Field>
 <Field id="company" label="現在ご利用の電力会社"><div className="select"><select id="company" name="company" defaultValue="" required><option value="" disabled>選択してください</option>{companies.map(c=><option key={c}>{c}</option>)}</select></div></Field>
 <label className="privacy"><input type="checkbox" required/><span><i/>Japan電力の<a href="https://japaden.jp/privacy/" target="_blank" rel="noreferrer">プライバシーポリシー</a>に同意する</span></label>
 <button className="primary" type="submit">入力内容を送信する <b>›</b></button><p className="secure">✓ お客様の情報はSSL暗号化通信により安全に送信されます</p></form><SiteFooter/></main>
}
function Header(){return <header><a className="brand" href="https://www.japaden.jp/" aria-label="Japan電力"><img src="/logo_top.svg" alt="Japan電力"/></a><div className="plan"><small>ハーモニーでんき</small>ベネフィットプラン</div></header>}
function Field({id,label,note,children}:{id:string,label:string,note?:string,children:React.ReactNode}){return <div className="field"><label htmlFor={id}>{label} <em>必須</em></label>{children}{note&&<small>{note}</small>}</div>}
