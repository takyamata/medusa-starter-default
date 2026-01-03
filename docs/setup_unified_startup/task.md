# タスク: 一括起動設定の追加

- [ ] ドキュメント作成
    - [ ] `implementation_plan.md` の作成
- [ ] パッケージ追加
    - [ ] ルートの `package.json` に `concurrently` をインストール (`-D`)
- [ ] スクリプト追加
    - [ ] `package.json` に `dev:all` スクリプトを追加
        - `concurrently` を使用して以下を同時実行
            - バックエンド: `npm run docker:up` (ユーザー要望によりDocker使用)
            - フロントエンド: `npm run dev --prefix storefront`
- [ ] 動作確認
    - [ ] `npm run dev:all` で両方立ち上がるか確認
