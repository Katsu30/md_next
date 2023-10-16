---
title: "Next.js のnext/imageがnext export(SSG)すると使えない"
date: "2023/10/15"
---

Next.js で作成しているブログで、`next/image`を使用しようとすると、エラーが出てしまう。

これは、`next/image`が画像最適化を行い、動的にエクスポートすることが原因で`output: "export"`と干渉してしまっていました。

## 見出し

### Hello World!

本文
