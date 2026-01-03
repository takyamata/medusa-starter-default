# 実装計画: 一括起動コマンドの追加

## ゴール
バックエンド (Docker) とフロントエンド (Next.js) を単一のコマンドで同時に起動できるようにする。

## 変更内容

### ルートディレクトリ: `package.json`

#### [MODIFY] `package.json`
- `devDependencies` に `concurrently` を追加
- `scripts` に `dev:all` を追加
    - コマンド内容: `concurrently \"npm run docker:up\" \"npm run dev --prefix storefront\" --kill-others --names \"BACKEND,FRONTEND\" --prefix-colors \"blue,magenta\"`

## 検証計画
1. ルートディレクトリで `npm install` (concurrentlyのインストール)
2. `npm run dev:all` を実行
3. バックエンドのコンテナが起動し、フロントエンドのNext.jsサーバーも起動することを確認
4. ブラウザで `localhost:3000` (フロント) と `localhost:9000` (バックエンドヘルスチェック) にアクセスして動作確認
