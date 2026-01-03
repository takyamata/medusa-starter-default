# タスク: ストアフロント構造の変更とLP作成

- [ ] ドキュメント作成
    - [ ] `implementation_plan.md` の作成
- [/] ページ構造の変更
    - [/] `src/app/page.tsx` (現商品一覧) を `src/app/store/page.tsx` に移動
    - [/] `src/app/page.module.scss` も合わせて移動
- [x] ルートページ (LP) の作成
    - [x] `src/app/page.tsx` を新規作成 (静的、クリエイター紹介風)
    - [x] LP用のスタイル `src/app/lp.module.scss` を作成
    - [x] LPに `/store` へのリンクボタンを配置
- [ ] 動作確認
    - [ ] `/` がLPになっていることを確認
    - [ ] `/store` で以前の商品一覧が表示されることを確認
