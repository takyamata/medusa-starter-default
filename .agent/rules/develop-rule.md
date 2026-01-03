---
trigger: always_on
---

## 概要
- このプロジェクトは、バックエンドエンジンとして Medusa V2、ストアフロントとして Next.js (App Router) を使用して構築された、セルフホスト型のヘッドレスEコマースアプリケーションです。目標は、モダンで高性能なオンラインストア「My Medusa Store」を作成することです。

## 注意事項
- リポジトリの編集を行う際、可能な限りで各ファイルの先頭にそのファイルが何を行っているものなのかを自然言語で説明したコメントを残しておくこと

## 技術スタック

- コア
  - バックエンド: Medusa V2 (Node.js)
  - ストアフロント: Next.js (App Router)
  - データベース: PostgreSQL (Supabase でホスト)
  - 言語: TypeScript
  - インフラとサービス
  - スタイリング: CSS Modules,SCSS
  - バックエンドホスティング: Railway
  - ストアフロントホスティング: Vercel
  - データベースホスティング: Supabase
  - オブジェクトストレージ: Cloudinary (商品画像用)
  - 決済プロバイダー: Stripe
  - 検索: Algolia (計画中/設定中)
  - 状態管理 (ストアフロント)
  - クライアント状態: Zustand (カート、UI状態)
  - サーバー状態: TanStack Query (React Query)

- 開発ワークフロー
  - ローカル環境: Docker / Node.js
  - OS: Mac (Apple Silicon) - ユーザーの現在のOS
  - パッケージマネージャー: npm