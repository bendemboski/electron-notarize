export interface NotarizeCredentials {
    appleId: string;
    appleIdPassword: string;
}
export interface NotarizeAppOptions {
    appPath: string;
    appBundleId: string;
}
export interface TransporterOptions {
    ascProvider?: string;
}
export interface NotarizeResult {
    uuid: string;
}
export declare type NotarizeStartOptions = NotarizeAppOptions & NotarizeCredentials & TransporterOptions;
export declare type NotarizeWaitOptions = NotarizeResult & NotarizeCredentials;
export declare type NotarizeStapleOptions = Pick<NotarizeAppOptions, 'appPath'>;
export declare type NotarizeOptions = NotarizeStartOptions;
export declare function startNotarize(opts: NotarizeStartOptions): Promise<NotarizeResult>;
export declare function waitForNotarize(opts: NotarizeWaitOptions): Promise<void>;
export declare function stapleApp(opts: NotarizeStapleOptions): Promise<void>;
export declare function notarize({ appBundleId, appPath, appleId, appleIdPassword, ascProvider, }: NotarizeOptions): Promise<void>;
