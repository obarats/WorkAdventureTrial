import * as tg from "generic-type-guard";
export declare const isPlaySoundEvent: tg.TypeGuard<object & {
    url: string;
    config: (object & {
        volume: any;
        loop: any;
        mute: any;
        rate: any;
        detune: any;
        seek: any;
        delay: any;
    }) | undefined;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type PlaySoundEvent = tg.GuardedType<typeof isPlaySoundEvent>;
