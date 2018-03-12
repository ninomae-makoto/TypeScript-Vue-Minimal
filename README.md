# VueでTypeScriptを使用する時の（多分）最小構成

非日本語圏の人ならMSのサンプルのほうがいいと思うよ
https://github.com/Microsoft/TypeScript-Vue-Starter

以下の環境を想定
- Win/Mac (Linuxもいける？)
- Visual Studio Code推奨

# Usage

1. Visual Studio Code
TSLintとVeturの拡張ファイルをインストール
Veturは.vueファイルを使用しないなら不要

1. Clone Or Download
ソースを取得してくる

2. 依存関係の解決

```
npm install
```

$(npm bin)/webpack
$(npm bin)/xxxx
でnode_modules/bin にあるものが実行できる
がWindowsではできなかったような気がするのでその場合はグローバルにインストールする。

```
npm install webpack -g
```

```
npm install typescript -g
```

```
npm install tslint -g
```

3. コンパイル ＆ 実行確認
以下のコマンド

開発用
```
webpack --mode development
```

本番用
```
webpack --mode production
```

distディレクトリ以下にbuild.jsが作られる。

index.html をブラウザで開く。

お気に入りのtslint設定とかVSCodeの設定とか晒しているのであとは煮るなり焼くなり燻すなり揚げるなり

# ざっくり概要

## sfa.d.ts
ファイル名はなんでもいい
VueでTypeScriptを使用するなら必須とのこと

## webpack
index.tsから見ていって依存関係を解決していくような記述がwebpack.config,jsに記載されている。
具体的にいうとimportしているvueとかHello.vueとか。
最終的にdist/build.jsに出力されてindex.htmlで読み込んでいる。

## Hello.vue
単一ファイルコンポーネント(SFA)と言うやつらしい
index.tsでSFAを使用した方法と使用しない方法の２種類で記述しているので見比べてみるとよく分かる。
