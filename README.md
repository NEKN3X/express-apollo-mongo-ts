## TODO
- [x] schemaから型の生成
- [x] mongodbにデータ保存
- [x] Docker化
- [x] mongodb schemaの自動生成
- [ ] mock切り替え / .env周りの強化
- [ ] typeとかqueryのファイル分割
- [ ] taskアプリ api
  - [ ] type
  - [ ] query
  - [ ] mutation
  - [ ] jwt
- [ ] taskアプリ admin
  - [ ] admin user
- [ ] testing
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
