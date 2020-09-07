## TODO
- [x] schemaから型の生成
- [x] mongodbにデータ保存
- [x] Docker化
- [x] mongodb schemaの自動生成
- [ ] mock切り替え / .env周りの強化
- [ ] typeとかqueryのファイル分割
- [ ] taskアプリ api
  - [ ] db schemaの設計
  - [ ] schemaを書く
  - [ ] schemaから型を生成して実装
- [ ] testing
- [ ] jwtで認証
- [ ] taskアプリ admin
  - [ ] admin user
- [ ] production build
- [ ] taskアプリ client (React)
- [ ] taskアプリ client (React Native)

## Dev
```
# .env
cp .env.sample .env
direnv allow .
```
```
# container起動
docker-compose up

# mongodb client
# access mongodb://localhost:27017

# schema生成
npm schema
```
```
# production build
```
