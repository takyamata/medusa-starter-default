# 実装計画: ストアフロント構造の変更とLP作成

## ゴール
- ルート (`/`) をクリエイターのポートフォリオ風ランディングページ (LP) に変更する。
- 既存の商品一覧機能は `/store` に移動し、本格的なEC機能配下とする。

## ユーザーレビューが必要な事項
- LPのデザイン詳細（今回は仮のクリエイターページとして実装）

## 変更内容

### ディレクトリ構造の変更

#### [NEW] `storefront/src/app/store/`
- 既存の `src/app/page.tsx` の機能をここに移動します。
- Next.js の `app` ディレクトリ配下にフォルダを作ると自動的にルートになります。

#### [NEW] `storefront/src/app/page.tsx` (Root LP)
- 静的なランディングページとして新規作成。
- Medusaへのデータフェッチは行いません。
- 主な要素:
    - クリエイター名 / タイトル
    - 簡単な紹介文
    - 「Shop Now」または「Enter Store」ボタン -> `/store` へのリンク

#### [MODIFY] `storefront/src/app/page.module.scss` -> `storefront/src/app/store/page.module.scss`
- 移動に合わせてファイルをリネーム・移動します。

#### [NEW] `storefront/src/app/lp.module.scss`
- 新規LP用のスタイルシート。より自由でアーティスティックなデザイン（仮）を適用可能にします。

## 検証計画
1. **URL遷移確認**:
   - `http://localhost:3000/` にアクセスし、LPが表示されること。
   - LP内のリンクから `/store` に遷移できること。
2. **商品一覧の動作確認**:
   - `http://localhost:3000/store` で以前と同様に商品一覧が表示されること。
   - Medusaからのデータ取得が正常に行われていること。
