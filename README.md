## TODO
- [x] schemaから型の生成
- [x] mongodbにデータ保存
- [x] Docker化
- [ ] mongodb schemaの自動生成
- [ ] mock切り替え
- [ ] taskアプリ api
- [ ] taskアプリ admin
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
