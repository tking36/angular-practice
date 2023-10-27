import { InjectionToken } from "@angular/core";
import { RouteConfig } from "./routeConfig";

// export interface RouteConfig {
//     title: string;
// }

export const RouteConfigToken = new InjectionToken<RouteConfig>('routeConfig')