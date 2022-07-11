# Vite Coding Project Template

通常のWEBサイト制作にViteを導入したテンプレートです。
HTML（ejsライク）・Sass・JSの使用を想定しています。

## Prettier & Lint

VSCode拡張機能で以下を入れておく。
Prettier - Code Formatter
ESLint

## 起動方法

インストール：`npm install`  
開発：`npm run dev`  
ビルド：`npm run build`  
<br>
<br>

## CSS

components/project
uiに入らない全てのパーツ

components/ui
これ以上分解できないパーツ

layout
全体のレイアウト系。ヘッダー、フッター、サイドバー、グローバルなび

pages
各ページ用

utility
ユーティリティ

## 参考文献

- [【コーダー向け】ViteでHTML（ejsライク）・Sass・JSな普通のコーディング環境を作ってみた](https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc)
- [ITCSSを採用して共同開発しやすいCSS設計をZOZOTOWNに導入した話](https://techblog.zozo.com/entry/itcss-to-zozotown)