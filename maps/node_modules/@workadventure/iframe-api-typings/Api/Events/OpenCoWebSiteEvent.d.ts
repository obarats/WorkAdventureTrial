import * as tg from "generic-type-guard";
export declare const isOpenCoWebsite: tg.TypeGuard<object & {
    url: string;
    allowApi: boolean;
    allowPolicy: string;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type OpenCoWebSiteEvent = tg.GuardedType<typeof isOpenCoWebsite>;
