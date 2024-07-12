# shared-types

동일한 타입을 사용하는 Node.js 프로젝트끼리 타입 설정 공유를 위한 모듈 입니다.

여러 개의 React 프론트엔드와 Express 백엔드로 REST API를 구성해야 하는 프로젝트에서 ORM을 쓰지 않고 공통적인 타입을 한번만 지정해서 쓸 수 있는 방법을 찾아보다가 만들게 되었습니다.

## 이 프로젝트를 쓸 수 있는 곳

- frontend 프로젝트와 express 프로젝트 등 여러개의 node.js 프로젝트 끼리 구성된 사이트를 Typescript로 개발해야할 때
- 동일한 타입이 여러 개의 프로젝트에서 동일하게 쓰일 때

## 모듈 설정방법

커스텀 모듈은 `npm link` 명령어를 통해 설치 합니다.
작업 순서는 아래와 같습니다.

### 1. NPM 설치

```bash
# 설치 모듈 디렉토리에 npm 설치가 안되어 있는 경우(최초 클론 시)
npm install
```

### 2. Type 설정

`src/global.d.ts` 디렉토리에서 Type을 지정 합니다.

### 3. 커스텀 모듈 Symbolic Link 생성

```bash
# 타입 패키지 빌드
npx tsc

# 빌드된 패키지로 Symbolic Link 생성
npm link
```

커스텀 모듈에 Symbolic Link를 만들어 줍니다.

### 4. 이 모듈에서 선언한 타입을 사용할 패키지에 설치

```bash
# 커스텀 모듈을 설치할 프로젝트 디렉토리로 이동
cd {설치할 프로젝트의 디렉토리 경로}
```

```bash
# Symbolic Link 연결
npm link shared-types
```

### 5. 프로젝트에서의 호출

```ts
import "shared-types";
```

## 업데이트 방법

만약, 이미 설정을 한번 완료한 케이스로 선언한 타입을 업데이트 하신 경우 라면 설정방법의 다음 3개 항목만 다시 수행하면 됩니다.

- `2. Type 설정`
- `3. 커스텀 모듈 Symbolic Link 생성`
- `4. 이 모듈에서 선언한 타입을 사용할 패키지에 설치`
