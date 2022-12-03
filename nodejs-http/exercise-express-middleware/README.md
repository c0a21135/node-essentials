# WebAPIの使用説明書
## app.js
### chunk認証機能
* ルートを保護するisAuthorized関数の実装
* 変数authにreq.req.headers.authorizationを持たせ、任意で設定したパスワードと比較判定をする。
* パスワードは、'hogehogepiyopiyo'の場合認証が通るようにした。
* 結果がTrueの場合はそのまま次へ進む。
* 結果がFalseの場合はstatus(401)を出し、'Not permitted'を表示する。(chunkデータの応答をしない)

## clinet.js
### chunk認証機能
* authorizationヘッダーの追加とその情報(パスワード)headersの中に追加。
* authorizationヘッダーの情報は'hogehogepiyopiyo'とした。
* クライアント実行時にauthorizationヘッダーの情報がapp.jsのisAuthorized関数に渡され、比較される。