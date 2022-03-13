import * as tg from "generic-type-guard";
export declare const isTriggerMessageHandlerEvent: tg.PartialTypeGuard<unknown, (object & {
    type: "triggerActionMessage";
    data: object & {
        message: any;
        uuid: any;
        type: any;
    };
}) | (object & {
    type: "removeActionMessage";
    data: object & {
        uuid: any;
    };
})>;
