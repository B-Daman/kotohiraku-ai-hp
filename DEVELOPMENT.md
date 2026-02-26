# ことひらくAI ホームページ 開発ガイド

## サイトURL

- **公開URL**: https://b-daman.github.io/kotohiraku-ai-hp/
- **リポジトリ**: https://github.com/B-Daman/kotohiraku-ai-hp

## 他の端末で開発する手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/B-Daman/kotohiraku-ai-hp.git
cd kotohiraku-ai-hp
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. ローカルサーバーを起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321/kotohiraku-ai-hp/` を開く。

### 4. 編集 → 反映

ファイルを編集すると自動でブラウザに反映される（HMR）。

### 5. デプロイ

```bash
git add .
git commit -m "変更内容"
git push
```

pushすると GitHub Actions が自動でビルド → GitHub Pages にデプロイされる。
2〜3分で公開URLに反映。

## 技術スタック

| 要素 | 選択 |
|------|------|
| フレームワーク | Astro（SSG） |
| スタイリング | Tailwind CSS v4 |
| ホスティング | GitHub Pages |
| フォント | Noto Sans JP（Google Fonts） |

## ファイル構成

```
src/
├── components/    ... Header, Footer
├── data/          ... siteConfig.ts（全データ定義）
├── layouts/       ... BaseLayout.astro（共通レイアウト）
├── pages/         ... 各ページ（5ページ）
│   ├── index.astro         トップ
│   ├── services.astro      サービス紹介
│   ├── achievements.astro  実績・メディア
│   ├── profile.astro       プロフィール
│   └── contact.astro       お問い合わせ
└── styles/        ... global.css（デザイン変数）
```

## よく使うコマンド

| コマンド | 用途 |
|---------|------|
| `npm run dev` | ローカル開発サーバー起動 |
| `npm run build` | 本番ビルド（dist/に出力） |
| `npm run preview` | ビルド結果をローカルで確認 |