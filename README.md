# キャラクターをクリックして動かそう

このプロジェクトは、キャンバス上でキャラクターをクリックして動かすシンプルなゲームです。

## ファイル構成

- `index.html` - メインのHTMLファイル。ウェブページの構造を定義します。
- `styles.css` - CSSファイル。ページのスタイルを定義します。
- `script.js` - JavaScriptファイル。ページの動作を管理します。

## 使用方法

1. プロジェクトのディレクトリ構造を以下のように設定します：
    ```
    project-directory/
    ├── index.html
    ├── styles.css
    └── script.js
    ```

2. `index.html` をブラウザで開きます。

3. キャンバス上のキャラクターをクリックして動かすことができます。

## 各ファイルの詳細

### index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>キャラクターをクリックして動かそう</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="no-select">キャラクターをクリックして動かそう</h1>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

### styles.css

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    margin: 20px 0;
}

canvas {
    border: 1px solid #000;
}

.no-select {
    user-select: none; /* テキスト選択を無効にする */
    -moz-user-select: none; /* Firefox対応 */
    -webkit-user-select: none; /* Safari対応 */
    -ms-user-select: none; /* IE10+対応 */
}
```

### script.js

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let character = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 50,
    color: 'blue'
};

function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = character.color;
    ctx.fillRect(character.x - character.size / 2, character.y - character.size / 2, character.size, character.size);
}

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    character.x = e.clientX - rect.left;
    character.y = e.clientY - rect.top;
    drawCharacter();
});

drawCharacter();
```

## リポジトリ

[GitHubリポジトリ](https://github.com/Github-testapp/clickmove-game.git)
```

このREADMEファイルは、プロジェクトの使用方法、ファイルの構成、および各ファイルの詳細を提供します。必要に応じて追加や変更を行ってください。
