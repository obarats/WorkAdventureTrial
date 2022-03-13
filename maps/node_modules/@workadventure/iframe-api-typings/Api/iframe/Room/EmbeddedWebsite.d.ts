import type { CreateEmbeddedWebsiteEvent } from "../../Events/EmbeddedWebsiteEvent";
export declare class EmbeddedWebsite {
    private config;
    readonly name: string;
    private _url;
    private _visible;
    private _allow;
    private _allowApi;
    private _position;
    constructor(config: CreateEmbeddedWebsiteEvent);
    set url(url: string);
    set visible(visible: boolean);
    set x(x: number);
    set y(y: number);
    set width(width: number);
    set height(height: number);
}
