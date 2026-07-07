# kotohiraku-ai-hp

ことひらくAI のホームページ。Astro + Tailwind CSS の静的サイト。

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- --help
```

## Project Shape
- Astro pages は `src/pages/` に置く。
- 静的アセットは `public/` に置く。
- スタイルは Tailwind CSS v4 系。

## Site Tone
- 地域・自治会・町内会・小規模事業者にも伝わる言葉を優先する。
- AI の難しさより「何が楽になるか」「何を一緒に作れるか」を前面に出す。
- 実績や人数などの数字は、古くなり得るため必要に応じて確認する。

## Development Notes
- README は Astro 初期テンプレのままなので、実装時はコード側を確認する。
- UI 変更後は `npm run build` で確認する。
