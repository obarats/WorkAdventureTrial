import * as tg from "generic-type-guard";
export declare const isRectangle: tg.TypeGuard<object & {
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export declare const isEmbeddedWebsiteEvent: tg.TypeGuard<object & {
    name: string;
} & Partial<{
    url: string;
    visible: boolean;
    allowApi: boolean;
    allow: string;
    x: number;
    y: number;
    width: number;
    height: number;
}>>;
export declare const isCreateEmbeddedWebsiteEvent: tg.TypeGuard<object & {
    name: string;
    url: string;
    position: object & {
        x: any;
        y: any;
        width: any;
        height: any;
    };
} & Partial<{
    visible: boolean;
    allowApi: boolean;
    allow: string;
}>>;
/**
 * A message sent from the iFrame to the game to modify an embedded website
 */
export declare type ModifyEmbeddedWebsiteEvent = tg.GuardedType<typeof isEmbeddedWebsiteEvent>;
export declare type CreateEmbeddedWebsiteEvent = tg.GuardedType<typeof isCreateEmbeddedWebsiteEvent>;
export declare type Rectangle = tg.GuardedType<typeof isRectangle>;
