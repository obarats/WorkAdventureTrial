import { IframeApiContribution } from "./IframeApiContribution";
export declare class WorkadventureNavigationCommands extends IframeApiContribution<WorkadventureNavigationCommands> {
    callbacks: never[];
    openTab(url: string): void;
    goToPage(url: string): void;
    goToRoom(url: string): void;
    openCoWebSite(url: string, allowApi?: boolean, allowPolicy?: string): void;
    closeCoWebSite(): void;
}
declare const _default: WorkadventureNavigationCommands;
export default _default;
