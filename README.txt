【公開方法】
このフォルダ内の index.html、thanks、assets をGitHubリポジトリ直下へアップロードしてください。

Cloudflare Pages設定
Framework preset: None
Build command: 空欄
Build output directory: 空欄（ルートを公開）
Root directory: 空欄（初期設定のまま）

GitHub Pages設定
Settings → Pages → Deploy from a branch
Branch: main
Folder: / (root)

フォームの入力内容は保存されず、送信後にサンクスページへ遷移します。

【フォーム・計測設定】
Zapier Webhook連携済み
GTMコンテナ: GTM-WSV9HWZ4
コンバージョンイベント: form_submit_cv

フォームから送信される項目
name / address / housing / email / tel / company / privacy_consent
utm_source / utm_medium / utm_campaign / utm_term / utm_content
placement / keyword / matchtype / gclid / fbclid / lpv
lp_path / referrer / submitted_at / source_url

公開後、ZapierのCatch Hookで実データを1件テスト送信し、GTM Previewでも
form_submit_cvが発火することをご確認ください。
