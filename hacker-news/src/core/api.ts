import { NewsFeed, NewsDetail } from "../types";

export default class Api {
  xhr: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  getRequestWithXHR<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
    this.xhr.open("GET", this.url);
    this.xhr.addEventListener("load", () => {
      cb(JSON.parse(this.xhr.response) as AjaxResponse); //JSON.parse()는 동기적으로 작동
    });
    this.xhr.send();

    // return JSON.parse(this.ajax.response) as AjaxResponse;
  }

  getRequestWithPromise<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
    fetch(this.url)
      .then((response) => response.json())
      .then(cb)
      .catch(() => {
        console.error("데이터를 불러오지 못했습니다.");
      });

    // return JSON.parse(this.ajax.response) as AjaxResponse;
  }

  async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url);
    return await response.json() as AjaxResponse;
  }
}

export class NewsFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithXHR<NewsFeed[]>(cb);
  }

  getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithPromise<NewsFeed[]>(cb);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getDataWithXHR(cb: (data: NewsDetail) => void): void {
    return this.getRequestWithXHR<NewsDetail>(cb);
  }

  getDataWithPromise(cb: (data: NewsDetail) => void): void {
    return this.getRequestWithPromise<NewsDetail>(cb);
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
  }
}
