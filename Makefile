develop:
	npx webpack serve

install:
	npm install

build:
	rm -rf dist
    NODE_ENV=production npx webpack
prettier:
	npx prettier --write src
test:
	npm test --watch

lint:
	npx eslint .

template:
	node create-component $(name)

templatePage:
	node create-page $(name)