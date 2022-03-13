import { IframeApiContribution } from "./IframeApiContribution";
import type { HasPlayerMovedEventCallback } from "../Events/HasPlayerMovedEvent";
export declare const setPlayerName: (name: string) => void;
export declare const setTags: (_tags: string[]) => void;
export declare const setUuid: (_uuid: string | undefined) => void;
export declare class WorkadventurePlayerCommands extends IframeApiContribution<WorkadventurePlayerCommands> {
    callbacks: import("./IframeApiContribution").IframeCallbackContribution<keyof import("../Events/IframeEvent").IframeResponseEventMap>[];
    onPlayerMove(callback: HasPlayerMovedEventCallback): void;
    get name(): string;
    get tags(): string[];
    get id(): string | undefined;
}
declare const _default: WorkadventurePlayerCommands;
export default _default;
