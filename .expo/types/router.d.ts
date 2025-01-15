/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs/find-jobs-data`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs/find-jobs-view`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/find-jobs/find-jobs-data`; params?: Router.UnknownOutputParams; } | { pathname: `/find-jobs/find-jobs-view`; params?: Router.UnknownOutputParams; } | { pathname: `/find-jobs`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/find-jobs/find-jobs-data${`?${string}` | `#${string}` | ''}` | `/find-jobs/find-jobs-view${`?${string}` | `#${string}` | ''}` | `/find-jobs${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs/find-jobs-data`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs/find-jobs-view`; params?: Router.UnknownInputParams; } | { pathname: `/find-jobs`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
