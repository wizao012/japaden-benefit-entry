export function SiteFooter(){
  const links=[
    ["ベネフィットプラン","https://www.japaden.jp/harmony/benefit-plan/"],
    ["運営会社","https://japaden.jp/company/"],
    ["特定商取引法に基づく表示","https://japaden.jp/legal/"],
    ["プライバシーポリシー","https://japaden.jp/privacy/"],
    ["クーリング・オフ","https://japaden.jp/coolingoff/"],
  ];
  return <footer className="siteFooter"><div className="footerInner">
    <a className="brand" href="https://www.japaden.jp/" aria-label="Japan電力"><img src="/logo_top.svg" alt="Japan電力"/></a>
    <nav className="footerNav" aria-label="フッターナビゲーション">{links.map(([label,url])=><a key={url} href={url}>{label}<span aria-hidden="true">›</span></a>)}</nav>
    <p>© Japan Electric Power Co., Ltd.</p>
  </div></footer>
}
