# JavaScript & Typescript

01. [JavaScript 주요 변천사](#01javascript-주요-변천사)
02. [웹앱의 구성요소](#02웹어플리케이션웹앱의-구성요소)
03. [모던 JavaScript와 개발 환경](#03모던-javascript와-개발-환경)
04. [Typescript vs. JavaScript](#04typescript-vs-javascript)

## 01.JavaScript 주요 변천사

년도|이름|특징
---|---|---
1995|LiveScript| 넷스케이프 (FireFox의 전신) 브라우저에 최초 탑재된 버전
1997|JavaScript Ecma|
2005|Ajax
2009|ECMAScript v5.0|Flash와 ActionScript의 전성기 이후의 업데이트 버전, 주도적인 버전
2015|ES2015|모던 자바스크립트의 시작

#### ECMAScript v5.0이 주도적인 버전이라고 불리는 이유
> 최신 자바스크립트를 지원하지 않는 브라우저들을 위해 최신 버전의 JS를 5.0으로 변환해주는 트랜스파일러(ex. TypeScript)를 사용하여 실제로 실행되는 자바스크립트이기 때문

> 실제로 개발에 사용되는 ES2015 이후의 버전도 중요 

## 02.웹어플리케이션(웹앱)의 구성요소

### 필수불가결한 구성요소
1. HTML: UI 생성
2. CSS: HTML 스타일링
3. JavaScript: HTML 조작

* * * 
### 실행 관점의 구성요소
#### 브라우저
웹앱을 실행시키는(런타임 환경을 제공하는) 역할을 하는 구성요소
> 그 외 Node.js 등 브라우저가 아닌 환경에서도 js 실행이 가능함
* * *
### CSR & SSR
> UI를 만들기 위해선 최종적으로 HTMl 필요
-> HTMl을 언제, 어디에서 만드느냐가 중요

#### CSR (Client Side Rendering)
- 자바스크립트가 실행되면서 필요한 UI를 js가 실행시키는 방식
- 브라우저에서 실행되는 JS의 실행결과로 UI(HTML)를 주도적으로 만드는 방법

#### SSR (Server Side Rendering)
- 웹서버에서 HTMl이 만들어져서 브라우저로 전송되는 방식

* * *
### 그래픽 시스템 (프로그래밍적 관점)
- HTML + CSS => 그래픽 시스템 표현 (도형, 그라데이션, 섀도우 등)
- 애니메이션, 2d, 3d 제공하는 canvas: 
  - 그래픽 시스템을 표현하기 위한 도화지(영역) 제공
  - js로 구현 가능

* * *
### 그 외 구성요소
- 미디어 파일
- Web Worker
- Web Assembly


## 03.모던 JavaScript와 개발 환경

### 급변한 프론트엔드 개발 환경

> 프론트엔드 개발 환경이 복잡해진 이유
-> 웹앱의 규모가 커지고 복잡해짐

JavaScript는 초기에 HTMl를 조작하기 위해 디자인된 간단한 언어이기 때문에 커진 규묘의 웹앱을 대응하기 위한 모듈(export, import)와 같은 기능은 ES2015부터 지원됨

JS는 HTML 안에 script태그 이용해서 js코드의 위치를 지정하고 script태그가 js파일을 불러들이느 역할을 하게되는데, 모듈 기능이 없이는 파일의 갯수가 늘어남에 따라 script태그도 그만큼 늘어가게 되는 문제가 발생한다. 이에 따라 js코드 안에서 다른 js 파일을 불러들이는 모듈 스펙이 지원됨

이 때, 모듈 기능을 사용하기에 어려운 현실적인 문제가 존재함

### 브라우저 호환성 문제
ES2015 이후의 새로 나온 js 버전들에는 브라우저에 따라 호환되지 않는 기능들이 존재하여 모든 브라우저 환경에 따라 테스트하고 개발하기엔 현실적인 어려움이 있음

이러한 문제를 해결하기 위해 엔지니어링이 시도됨 (브라우저에서 실행되지 않는 nodejs를 통해)

### 번들러
시작되는 js파일을 지정해서 불러오는 다른 여러개의 js파일들을 구문해석하여 하나의 js파일로 만들어줌.
(브라우저 로딩 전에)

-> HTML 내에서 번들링된 하나의 js파일만 script태그에 연결됨.

**대표적인 번들러**
***Webpack***
  - 필요없는 소스코드 제거 (주석 등)
  - 이미지 최적화 (이미지 파일의 경로 통해)
  - 코드 어글리파이 (웹에서 이해하기 어렵게끔)
  - 트랜스파일링 제공 역할 (babel..)

### 트랜스파일링
브라우저가 이해할수 있는 프로그래밍 언어는 자바스크립트 뿐이기 때문에,
개발된 프로그래밍 언어를 브라우저가 이해할 수있는 JS로 변환시켜줌.

트랜스파일러를 이용하여 최신 문법의 자바스크립트의 브라우저 호환성 제공을 위해 낮은 버전의 자바스크립트로 변환해줌.

***Typescript*** 또한 제공하는 트랜스파일러를 이용하여 원하는 자바스크립트 버전으로 변환하는 트랜스파일링 동작이 일어나기 때문에 트랜스파일러의 한 종류라고 할 수 있음.

## 04.Typescript vs. JavaScript

### TypeScript는 왜 필요한가

JavaScipt는 ES2015 이후부터는 빠르게 발전하는 중.

이제는 브라우저뿐만 아니라 데스크탑 어플리케이션과 앱을 만드는데에도 사용되고 있음.

***그럼에도 Typescript가 나온 이유는??***

> Typescipt는 JavaScript의 슈퍼셋이다

타입스크립트는 자바스크립트의 모든 기능을 기본으로 모두 제공함과 동시에 추가적인 기능을 제공함

### Type(유형) 정의

자바스크립트가 제공하지 못하는것,
=> 명시적인 유형 (데이터) 설명 기능을 제공함

```typescript
let age = 10; //10이 나이라고 유추할 수 있지만
let x = 10; // 10이 어떤 데이터인지 알지 못함 

let weight: number = 80; //값이 number유형을 가짐을 알 수 있음 => 명시적, 해석의 여지 없음

type Centimeter = number;
let height: Centimeter = 176; //number 유형 뿐만 아니라 값의 의미까지 알 수 있음 => 표현력 강화

type RainbowColor = 'red' | 'orange' | 'yellow'; 
let color: RainbowColor = 'orange';
//타입 제공 => 코드가 나타내는 표현력이 풍성해짐
```

타입스크립트가 트랜스파일러이기 때문에 가능함.

기존에도 이미 바벨이라는 트랜스파일러를 통해 상위 버전의 자바스크립트를 하위 버저의 자바스크립트로 변환하는 처리를 하고 있었기 때문에 개발자들이 거부감 없이 사용하고 있음.

