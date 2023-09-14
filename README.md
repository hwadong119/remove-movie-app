## 버셀 배포
https://vanillajs-movie-app-eight.vercel.app/#/

## Reset.css
브라우저의 기본 스타일 초기화

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css">
```

## Google Fonts
Roboto, Oswald 폰트 사용
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

## package.json 파일 수정
Vercel Serverless Functions가 정상적으로 동작하기 위해 package.json 파일의 type 옵션을 요구

package.json 파일에 다음과 같이 "type": "module" 옵션을 추가
```json
{
  // ...
  "description": "",
  "type": "module",
  "scripts": {
  // ...
}
```
