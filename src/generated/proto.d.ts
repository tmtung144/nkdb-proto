import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace smartboat. */
export namespace smartboat {

    /** Namespace sync. */
    namespace sync {

        /** Properties of a FishCatch. */
        interface IFishCatch {

            /** FishCatch fishId */
            fishId?: (number|null);

            /** FishCatch fishName */
            fishName?: (string|null);

            /** FishCatch fishCode */
            fishCode?: (string|null);

            /** FishCatch quantity */
            quantity?: (number|null);

            /** FishCatch status */
            status?: (number|null);
        }

        /** Represents a FishCatch. */
        class FishCatch implements IFishCatch {

            /**
             * Constructs a new FishCatch.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.IFishCatch);

            /** FishCatch fishId. */
            public fishId: number;

            /** FishCatch fishName. */
            public fishName: string;

            /** FishCatch fishCode. */
            public fishCode: string;

            /** FishCatch quantity. */
            public quantity: number;

            /** FishCatch status. */
            public status: number;

            /**
             * Creates a new FishCatch instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FishCatch instance
             */
            public static create(properties?: smartboat.sync.IFishCatch): smartboat.sync.FishCatch;

            /**
             * Encodes the specified FishCatch message. Does not implicitly {@link smartboat.sync.FishCatch.verify|verify} messages.
             * @param message FishCatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.IFishCatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FishCatch message, length delimited. Does not implicitly {@link smartboat.sync.FishCatch.verify|verify} messages.
             * @param message FishCatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.IFishCatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FishCatch message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FishCatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.FishCatch;

            /**
             * Decodes a FishCatch message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FishCatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.FishCatch;

            /**
             * Verifies a FishCatch message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FishCatch message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FishCatch
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.FishCatch;

            /**
             * Creates a plain object from a FishCatch message. Also converts values to other types if specified.
             * @param message FishCatch
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.FishCatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FishCatch to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FishCatch
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MiningHaul. */
        interface IMiningHaul {

            /** MiningHaul localId */
            localId?: (number|null);

            /** MiningHaul numericalOrder */
            numericalOrder?: (number|null);

            /** MiningHaul startedAt */
            startedAt?: (number|Long|null);

            /** MiningHaul startLat */
            startLat?: (number|null);

            /** MiningHaul startLng */
            startLng?: (number|null);

            /** MiningHaul endedAt */
            endedAt?: (number|Long|null);

            /** MiningHaul endLat */
            endLat?: (number|null);

            /** MiningHaul endLng */
            endLng?: (number|null);

            /** MiningHaul status */
            status?: (number|null);

            /** MiningHaul transferred */
            transferred?: (number|null);

            /** MiningHaul transferredShipId */
            transferredShipId?: (number|null);

            /** MiningHaul outputs */
            outputs?: (smartboat.sync.IFishCatch[]|null);
        }

        /** Represents a MiningHaul. */
        class MiningHaul implements IMiningHaul {

            /**
             * Constructs a new MiningHaul.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.IMiningHaul);

            /** MiningHaul localId. */
            public localId: number;

            /** MiningHaul numericalOrder. */
            public numericalOrder: number;

            /** MiningHaul startedAt. */
            public startedAt: (number|Long);

            /** MiningHaul startLat. */
            public startLat: number;

            /** MiningHaul startLng. */
            public startLng: number;

            /** MiningHaul endedAt. */
            public endedAt: (number|Long);

            /** MiningHaul endLat. */
            public endLat: number;

            /** MiningHaul endLng. */
            public endLng: number;

            /** MiningHaul status. */
            public status: number;

            /** MiningHaul transferred. */
            public transferred: number;

            /** MiningHaul transferredShipId. */
            public transferredShipId: number;

            /** MiningHaul outputs. */
            public outputs: smartboat.sync.IFishCatch[];

            /**
             * Creates a new MiningHaul instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MiningHaul instance
             */
            public static create(properties?: smartboat.sync.IMiningHaul): smartboat.sync.MiningHaul;

            /**
             * Encodes the specified MiningHaul message. Does not implicitly {@link smartboat.sync.MiningHaul.verify|verify} messages.
             * @param message MiningHaul message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.IMiningHaul, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MiningHaul message, length delimited. Does not implicitly {@link smartboat.sync.MiningHaul.verify|verify} messages.
             * @param message MiningHaul message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.IMiningHaul, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MiningHaul message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MiningHaul
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.MiningHaul;

            /**
             * Decodes a MiningHaul message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MiningHaul
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.MiningHaul;

            /**
             * Verifies a MiningHaul message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MiningHaul message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MiningHaul
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.MiningHaul;

            /**
             * Creates a plain object from a MiningHaul message. Also converts values to other types if specified.
             * @param message MiningHaul
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.MiningHaul, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MiningHaul to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MiningHaul
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FishingLogSync. */
        interface IFishingLogSync {

            /** FishingLogSync id */
            id?: (number|null);

            /** FishingLogSync miningShipId */
            miningShipId?: (number|null);

            /** FishingLogSync seaTripId */
            seaTripId?: (number|Long|null);

            /** FishingLogSync captainName */
            captainName?: (string|null);

            /** FishingLogSync captainCic */
            captainCic?: (string|null);

            /** FishingLogSync exportedAt */
            exportedAt?: (number|Long|null);

            /** FishingLogSync importedAt */
            importedAt?: (number|Long|null);

            /** FishingLogSync portExport */
            portExport?: (string|null);

            /** FishingLogSync portImport */
            portImport?: (string|null);

            /** FishingLogSync bookNumber */
            bookNumber?: (string|null);

            /** FishingLogSync hauls */
            hauls?: (smartboat.sync.IMiningHaul[]|null);
        }

        /** Represents a FishingLogSync. */
        class FishingLogSync implements IFishingLogSync {

            /**
             * Constructs a new FishingLogSync.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.IFishingLogSync);

            /** FishingLogSync id. */
            public id: number;

            /** FishingLogSync miningShipId. */
            public miningShipId: number;

            /** FishingLogSync seaTripId. */
            public seaTripId: (number|Long);

            /** FishingLogSync captainName. */
            public captainName: string;

            /** FishingLogSync captainCic. */
            public captainCic: string;

            /** FishingLogSync exportedAt. */
            public exportedAt: (number|Long);

            /** FishingLogSync importedAt. */
            public importedAt: (number|Long);

            /** FishingLogSync portExport. */
            public portExport: string;

            /** FishingLogSync portImport. */
            public portImport: string;

            /** FishingLogSync bookNumber. */
            public bookNumber: string;

            /** FishingLogSync hauls. */
            public hauls: smartboat.sync.IMiningHaul[];

            /**
             * Creates a new FishingLogSync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FishingLogSync instance
             */
            public static create(properties?: smartboat.sync.IFishingLogSync): smartboat.sync.FishingLogSync;

            /**
             * Encodes the specified FishingLogSync message. Does not implicitly {@link smartboat.sync.FishingLogSync.verify|verify} messages.
             * @param message FishingLogSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.IFishingLogSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FishingLogSync message, length delimited. Does not implicitly {@link smartboat.sync.FishingLogSync.verify|verify} messages.
             * @param message FishingLogSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.IFishingLogSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FishingLogSync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FishingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.FishingLogSync;

            /**
             * Decodes a FishingLogSync message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FishingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.FishingLogSync;

            /**
             * Verifies a FishingLogSync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FishingLogSync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FishingLogSync
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.FishingLogSync;

            /**
             * Creates a plain object from a FishingLogSync message. Also converts values to other types if specified.
             * @param message FishingLogSync
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.FishingLogSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FishingLogSync to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FishingLogSync
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PurchasingLogSync. */
        interface IPurchasingLogSync {

            /** PurchasingLogSync id */
            id?: (number|null);

            /** PurchasingLogSync type */
            type?: (number|null);

            /** PurchasingLogSync purchasingShipId */
            purchasingShipId?: (number|null);

            /** PurchasingLogSync saleShipId */
            saleShipId?: (number|null);

            /** PurchasingLogSync seaTripId */
            seaTripId?: (number|Long|null);

            /** PurchasingLogSync saleSeaTripId */
            saleSeaTripId?: (number|Long|null);

            /** PurchasingLogSync status */
            status?: (number|null);

            /** PurchasingLogSync captainName */
            captainName?: (string|null);

            /** PurchasingLogSync lat */
            lat?: (number|null);

            /** PurchasingLogSync lng */
            lng?: (number|null);

            /** PurchasingLogSync time */
            time?: (number|Long|null);

            /** PurchasingLogSync exportedAt */
            exportedAt?: (number|Long|null);

            /** PurchasingLogSync portExport */
            portExport?: (string|null);

            /** PurchasingLogSync hauls */
            hauls?: (smartboat.sync.IMiningHaul[]|null);
        }

        /** Represents a PurchasingLogSync. */
        class PurchasingLogSync implements IPurchasingLogSync {

            /**
             * Constructs a new PurchasingLogSync.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.IPurchasingLogSync);

            /** PurchasingLogSync id. */
            public id: number;

            /** PurchasingLogSync type. */
            public type: number;

            /** PurchasingLogSync purchasingShipId. */
            public purchasingShipId: number;

            /** PurchasingLogSync saleShipId. */
            public saleShipId: number;

            /** PurchasingLogSync seaTripId. */
            public seaTripId: (number|Long);

            /** PurchasingLogSync saleSeaTripId. */
            public saleSeaTripId: (number|Long);

            /** PurchasingLogSync status. */
            public status: number;

            /** PurchasingLogSync captainName. */
            public captainName: string;

            /** PurchasingLogSync lat. */
            public lat: number;

            /** PurchasingLogSync lng. */
            public lng: number;

            /** PurchasingLogSync time. */
            public time: (number|Long);

            /** PurchasingLogSync exportedAt. */
            public exportedAt: (number|Long);

            /** PurchasingLogSync portExport. */
            public portExport: string;

            /** PurchasingLogSync hauls. */
            public hauls: smartboat.sync.IMiningHaul[];

            /**
             * Creates a new PurchasingLogSync instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PurchasingLogSync instance
             */
            public static create(properties?: smartboat.sync.IPurchasingLogSync): smartboat.sync.PurchasingLogSync;

            /**
             * Encodes the specified PurchasingLogSync message. Does not implicitly {@link smartboat.sync.PurchasingLogSync.verify|verify} messages.
             * @param message PurchasingLogSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.IPurchasingLogSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PurchasingLogSync message, length delimited. Does not implicitly {@link smartboat.sync.PurchasingLogSync.verify|verify} messages.
             * @param message PurchasingLogSync message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.IPurchasingLogSync, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PurchasingLogSync message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PurchasingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.PurchasingLogSync;

            /**
             * Decodes a PurchasingLogSync message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PurchasingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.PurchasingLogSync;

            /**
             * Verifies a PurchasingLogSync message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PurchasingLogSync message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PurchasingLogSync
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.PurchasingLogSync;

            /**
             * Creates a plain object from a PurchasingLogSync message. Also converts values to other types if specified.
             * @param message PurchasingLogSync
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.PurchasingLogSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PurchasingLogSync to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PurchasingLogSync
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SyncLogsRequest. */
        interface ISyncLogsRequest {

            /** SyncLogsRequest shipId */
            shipId?: (number|null);

            /** SyncLogsRequest seaTripId */
            seaTripId?: (number|Long|null);

            /** SyncLogsRequest fishingLogs */
            fishingLogs?: (smartboat.sync.IFishingLogSync[]|null);

            /** SyncLogsRequest purchasingLogs */
            purchasingLogs?: (smartboat.sync.IPurchasingLogSync[]|null);
        }

        /** Represents a SyncLogsRequest. */
        class SyncLogsRequest implements ISyncLogsRequest {

            /**
             * Constructs a new SyncLogsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.ISyncLogsRequest);

            /** SyncLogsRequest shipId. */
            public shipId: number;

            /** SyncLogsRequest seaTripId. */
            public seaTripId: (number|Long);

            /** SyncLogsRequest fishingLogs. */
            public fishingLogs: smartboat.sync.IFishingLogSync[];

            /** SyncLogsRequest purchasingLogs. */
            public purchasingLogs: smartboat.sync.IPurchasingLogSync[];

            /**
             * Creates a new SyncLogsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SyncLogsRequest instance
             */
            public static create(properties?: smartboat.sync.ISyncLogsRequest): smartboat.sync.SyncLogsRequest;

            /**
             * Encodes the specified SyncLogsRequest message. Does not implicitly {@link smartboat.sync.SyncLogsRequest.verify|verify} messages.
             * @param message SyncLogsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.ISyncLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SyncLogsRequest message, length delimited. Does not implicitly {@link smartboat.sync.SyncLogsRequest.verify|verify} messages.
             * @param message SyncLogsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.ISyncLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SyncLogsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SyncLogsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.SyncLogsRequest;

            /**
             * Decodes a SyncLogsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SyncLogsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.SyncLogsRequest;

            /**
             * Verifies a SyncLogsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SyncLogsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SyncLogsRequest
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.SyncLogsRequest;

            /**
             * Creates a plain object from a SyncLogsRequest message. Also converts values to other types if specified.
             * @param message SyncLogsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.SyncLogsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SyncLogsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SyncLogsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SyncLogsResponse. */
        interface ISyncLogsResponse {

            /** SyncLogsResponse success */
            success?: (boolean|null);

            /** SyncLogsResponse syncedFishingCount */
            syncedFishingCount?: (number|null);

            /** SyncLogsResponse syncedPurchasingCount */
            syncedPurchasingCount?: (number|null);

            /** SyncLogsResponse serverTime */
            serverTime?: (number|Long|null);

            /** SyncLogsResponse message */
            message?: (string|null);
        }

        /** Represents a SyncLogsResponse. */
        class SyncLogsResponse implements ISyncLogsResponse {

            /**
             * Constructs a new SyncLogsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.sync.ISyncLogsResponse);

            /** SyncLogsResponse success. */
            public success: boolean;

            /** SyncLogsResponse syncedFishingCount. */
            public syncedFishingCount: number;

            /** SyncLogsResponse syncedPurchasingCount. */
            public syncedPurchasingCount: number;

            /** SyncLogsResponse serverTime. */
            public serverTime: (number|Long);

            /** SyncLogsResponse message. */
            public message: string;

            /**
             * Creates a new SyncLogsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SyncLogsResponse instance
             */
            public static create(properties?: smartboat.sync.ISyncLogsResponse): smartboat.sync.SyncLogsResponse;

            /**
             * Encodes the specified SyncLogsResponse message. Does not implicitly {@link smartboat.sync.SyncLogsResponse.verify|verify} messages.
             * @param message SyncLogsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.sync.ISyncLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SyncLogsResponse message, length delimited. Does not implicitly {@link smartboat.sync.SyncLogsResponse.verify|verify} messages.
             * @param message SyncLogsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.sync.ISyncLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SyncLogsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SyncLogsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.sync.SyncLogsResponse;

            /**
             * Decodes a SyncLogsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SyncLogsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.sync.SyncLogsResponse;

            /**
             * Verifies a SyncLogsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SyncLogsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SyncLogsResponse
             */
            public static fromObject(object: { [k: string]: any }): smartboat.sync.SyncLogsResponse;

            /**
             * Creates a plain object from a SyncLogsResponse message. Also converts values to other types if specified.
             * @param message SyncLogsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.sync.SyncLogsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SyncLogsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SyncLogsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace telemetry. */
    namespace telemetry {

        /** Properties of a GpsPoint. */
        interface IGpsPoint {

            /** GpsPoint latitude */
            latitude?: (number|null);

            /** GpsPoint longitude */
            longitude?: (number|null);

            /** GpsPoint speed */
            speed?: (number|null);

            /** GpsPoint heading */
            heading?: (number|null);

            /** GpsPoint recordedAt */
            recordedAt?: (number|Long|null);

            /** GpsPoint accuracy */
            accuracy?: (number|null);

            /** GpsPoint batteryLevel */
            batteryLevel?: (number|null);

            /** GpsPoint status */
            status?: (number|null);
        }

        /** Represents a GpsPoint. */
        class GpsPoint implements IGpsPoint {

            /**
             * Constructs a new GpsPoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.telemetry.IGpsPoint);

            /** GpsPoint latitude. */
            public latitude: number;

            /** GpsPoint longitude. */
            public longitude: number;

            /** GpsPoint speed. */
            public speed: number;

            /** GpsPoint heading. */
            public heading: number;

            /** GpsPoint recordedAt. */
            public recordedAt: (number|Long);

            /** GpsPoint accuracy. */
            public accuracy: number;

            /** GpsPoint batteryLevel. */
            public batteryLevel: number;

            /** GpsPoint status. */
            public status: number;

            /**
             * Creates a new GpsPoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GpsPoint instance
             */
            public static create(properties?: smartboat.telemetry.IGpsPoint): smartboat.telemetry.GpsPoint;

            /**
             * Encodes the specified GpsPoint message. Does not implicitly {@link smartboat.telemetry.GpsPoint.verify|verify} messages.
             * @param message GpsPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.telemetry.IGpsPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GpsPoint message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsPoint.verify|verify} messages.
             * @param message GpsPoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.telemetry.IGpsPoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GpsPoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GpsPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.telemetry.GpsPoint;

            /**
             * Decodes a GpsPoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GpsPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.telemetry.GpsPoint;

            /**
             * Verifies a GpsPoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GpsPoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GpsPoint
             */
            public static fromObject(object: { [k: string]: any }): smartboat.telemetry.GpsPoint;

            /**
             * Creates a plain object from a GpsPoint message. Also converts values to other types if specified.
             * @param message GpsPoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.telemetry.GpsPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GpsPoint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GpsPoint
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GpsBatchRequest. */
        interface IGpsBatchRequest {

            /** GpsBatchRequest shipId */
            shipId?: (number|null);

            /** GpsBatchRequest seaTripId */
            seaTripId?: (number|Long|null);

            /** GpsBatchRequest points */
            points?: (smartboat.telemetry.IGpsPoint[]|null);

            /** GpsBatchRequest deviceId */
            deviceId?: (string|null);
        }

        /** Represents a GpsBatchRequest. */
        class GpsBatchRequest implements IGpsBatchRequest {

            /**
             * Constructs a new GpsBatchRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.telemetry.IGpsBatchRequest);

            /** GpsBatchRequest shipId. */
            public shipId: number;

            /** GpsBatchRequest seaTripId. */
            public seaTripId: (number|Long);

            /** GpsBatchRequest points. */
            public points: smartboat.telemetry.IGpsPoint[];

            /** GpsBatchRequest deviceId. */
            public deviceId: string;

            /**
             * Creates a new GpsBatchRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GpsBatchRequest instance
             */
            public static create(properties?: smartboat.telemetry.IGpsBatchRequest): smartboat.telemetry.GpsBatchRequest;

            /**
             * Encodes the specified GpsBatchRequest message. Does not implicitly {@link smartboat.telemetry.GpsBatchRequest.verify|verify} messages.
             * @param message GpsBatchRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.telemetry.IGpsBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GpsBatchRequest message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsBatchRequest.verify|verify} messages.
             * @param message GpsBatchRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.telemetry.IGpsBatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GpsBatchRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GpsBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.telemetry.GpsBatchRequest;

            /**
             * Decodes a GpsBatchRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GpsBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.telemetry.GpsBatchRequest;

            /**
             * Verifies a GpsBatchRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GpsBatchRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GpsBatchRequest
             */
            public static fromObject(object: { [k: string]: any }): smartboat.telemetry.GpsBatchRequest;

            /**
             * Creates a plain object from a GpsBatchRequest message. Also converts values to other types if specified.
             * @param message GpsBatchRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.telemetry.GpsBatchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GpsBatchRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GpsBatchRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GpsBatchResponse. */
        interface IGpsBatchResponse {

            /** GpsBatchResponse success */
            success?: (boolean|null);

            /** GpsBatchResponse processedCount */
            processedCount?: (number|null);

            /** GpsBatchResponse serverTime */
            serverTime?: (number|Long|null);

            /** GpsBatchResponse message */
            message?: (string|null);
        }

        /** Represents a GpsBatchResponse. */
        class GpsBatchResponse implements IGpsBatchResponse {

            /**
             * Constructs a new GpsBatchResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.telemetry.IGpsBatchResponse);

            /** GpsBatchResponse success. */
            public success: boolean;

            /** GpsBatchResponse processedCount. */
            public processedCount: number;

            /** GpsBatchResponse serverTime. */
            public serverTime: (number|Long);

            /** GpsBatchResponse message. */
            public message: string;

            /**
             * Creates a new GpsBatchResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GpsBatchResponse instance
             */
            public static create(properties?: smartboat.telemetry.IGpsBatchResponse): smartboat.telemetry.GpsBatchResponse;

            /**
             * Encodes the specified GpsBatchResponse message. Does not implicitly {@link smartboat.telemetry.GpsBatchResponse.verify|verify} messages.
             * @param message GpsBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.telemetry.IGpsBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GpsBatchResponse message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsBatchResponse.verify|verify} messages.
             * @param message GpsBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.telemetry.IGpsBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GpsBatchResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GpsBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.telemetry.GpsBatchResponse;

            /**
             * Decodes a GpsBatchResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GpsBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.telemetry.GpsBatchResponse;

            /**
             * Verifies a GpsBatchResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GpsBatchResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GpsBatchResponse
             */
            public static fromObject(object: { [k: string]: any }): smartboat.telemetry.GpsBatchResponse;

            /**
             * Creates a plain object from a GpsBatchResponse message. Also converts values to other types if specified.
             * @param message GpsBatchResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.telemetry.GpsBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GpsBatchResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GpsBatchResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LiveLocationUpdate. */
        interface ILiveLocationUpdate {

            /** LiveLocationUpdate shipId */
            shipId?: (number|null);

            /** LiveLocationUpdate cityId */
            cityId?: (number|null);

            /** LiveLocationUpdate latitude */
            latitude?: (number|null);

            /** LiveLocationUpdate longitude */
            longitude?: (number|null);

            /** LiveLocationUpdate speed */
            speed?: (number|null);

            /** LiveLocationUpdate heading */
            heading?: (number|null);

            /** LiveLocationUpdate recordedAt */
            recordedAt?: (number|Long|null);

            /** LiveLocationUpdate status */
            status?: (number|null);
        }

        /** Represents a LiveLocationUpdate. */
        class LiveLocationUpdate implements ILiveLocationUpdate {

            /**
             * Constructs a new LiveLocationUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.telemetry.ILiveLocationUpdate);

            /** LiveLocationUpdate shipId. */
            public shipId: number;

            /** LiveLocationUpdate cityId. */
            public cityId: number;

            /** LiveLocationUpdate latitude. */
            public latitude: number;

            /** LiveLocationUpdate longitude. */
            public longitude: number;

            /** LiveLocationUpdate speed. */
            public speed: number;

            /** LiveLocationUpdate heading. */
            public heading: number;

            /** LiveLocationUpdate recordedAt. */
            public recordedAt: (number|Long);

            /** LiveLocationUpdate status. */
            public status: number;

            /**
             * Creates a new LiveLocationUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveLocationUpdate instance
             */
            public static create(properties?: smartboat.telemetry.ILiveLocationUpdate): smartboat.telemetry.LiveLocationUpdate;

            /**
             * Encodes the specified LiveLocationUpdate message. Does not implicitly {@link smartboat.telemetry.LiveLocationUpdate.verify|verify} messages.
             * @param message LiveLocationUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.telemetry.ILiveLocationUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LiveLocationUpdate message, length delimited. Does not implicitly {@link smartboat.telemetry.LiveLocationUpdate.verify|verify} messages.
             * @param message LiveLocationUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.telemetry.ILiveLocationUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiveLocationUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveLocationUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.telemetry.LiveLocationUpdate;

            /**
             * Decodes a LiveLocationUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveLocationUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.telemetry.LiveLocationUpdate;

            /**
             * Verifies a LiveLocationUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LiveLocationUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveLocationUpdate
             */
            public static fromObject(object: { [k: string]: any }): smartboat.telemetry.LiveLocationUpdate;

            /**
             * Creates a plain object from a LiveLocationUpdate message. Also converts values to other types if specified.
             * @param message LiveLocationUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.telemetry.LiveLocationUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LiveLocationUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LiveLocationUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace zone. */
    namespace zone {

        /** Properties of a CoordinatePoint. */
        interface ICoordinatePoint {

            /** CoordinatePoint latitude */
            latitude?: (number|null);

            /** CoordinatePoint longitude */
            longitude?: (number|null);
        }

        /** Represents a CoordinatePoint. */
        class CoordinatePoint implements ICoordinatePoint {

            /**
             * Constructs a new CoordinatePoint.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.zone.ICoordinatePoint);

            /** CoordinatePoint latitude. */
            public latitude: number;

            /** CoordinatePoint longitude. */
            public longitude: number;

            /**
             * Creates a new CoordinatePoint instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CoordinatePoint instance
             */
            public static create(properties?: smartboat.zone.ICoordinatePoint): smartboat.zone.CoordinatePoint;

            /**
             * Encodes the specified CoordinatePoint message. Does not implicitly {@link smartboat.zone.CoordinatePoint.verify|verify} messages.
             * @param message CoordinatePoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.zone.ICoordinatePoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CoordinatePoint message, length delimited. Does not implicitly {@link smartboat.zone.CoordinatePoint.verify|verify} messages.
             * @param message CoordinatePoint message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.zone.ICoordinatePoint, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CoordinatePoint message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CoordinatePoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.zone.CoordinatePoint;

            /**
             * Decodes a CoordinatePoint message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CoordinatePoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.zone.CoordinatePoint;

            /**
             * Verifies a CoordinatePoint message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CoordinatePoint message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CoordinatePoint
             */
            public static fromObject(object: { [k: string]: any }): smartboat.zone.CoordinatePoint;

            /**
             * Creates a plain object from a CoordinatePoint message. Also converts values to other types if specified.
             * @param message CoordinatePoint
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.zone.CoordinatePoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CoordinatePoint to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CoordinatePoint
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RestrictedZoneItem. */
        interface IRestrictedZoneItem {

            /** RestrictedZoneItem id */
            id?: (number|null);

            /** RestrictedZoneItem name */
            name?: (string|null);

            /** RestrictedZoneItem code */
            code?: (string|null);

            /** RestrictedZoneItem zoneType */
            zoneType?: (number|null);

            /** RestrictedZoneItem validFrom */
            validFrom?: (number|Long|null);

            /** RestrictedZoneItem validTo */
            validTo?: (number|Long|null);

            /** RestrictedZoneItem description */
            description?: (string|null);

            /** RestrictedZoneItem polygon */
            polygon?: (smartboat.zone.ICoordinatePoint[]|null);
        }

        /** Represents a RestrictedZoneItem. */
        class RestrictedZoneItem implements IRestrictedZoneItem {

            /**
             * Constructs a new RestrictedZoneItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.zone.IRestrictedZoneItem);

            /** RestrictedZoneItem id. */
            public id: number;

            /** RestrictedZoneItem name. */
            public name: string;

            /** RestrictedZoneItem code. */
            public code: string;

            /** RestrictedZoneItem zoneType. */
            public zoneType: number;

            /** RestrictedZoneItem validFrom. */
            public validFrom: (number|Long);

            /** RestrictedZoneItem validTo. */
            public validTo: (number|Long);

            /** RestrictedZoneItem description. */
            public description: string;

            /** RestrictedZoneItem polygon. */
            public polygon: smartboat.zone.ICoordinatePoint[];

            /**
             * Creates a new RestrictedZoneItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RestrictedZoneItem instance
             */
            public static create(properties?: smartboat.zone.IRestrictedZoneItem): smartboat.zone.RestrictedZoneItem;

            /**
             * Encodes the specified RestrictedZoneItem message. Does not implicitly {@link smartboat.zone.RestrictedZoneItem.verify|verify} messages.
             * @param message RestrictedZoneItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.zone.IRestrictedZoneItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RestrictedZoneItem message, length delimited. Does not implicitly {@link smartboat.zone.RestrictedZoneItem.verify|verify} messages.
             * @param message RestrictedZoneItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.zone.IRestrictedZoneItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RestrictedZoneItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RestrictedZoneItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.zone.RestrictedZoneItem;

            /**
             * Decodes a RestrictedZoneItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RestrictedZoneItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.zone.RestrictedZoneItem;

            /**
             * Verifies a RestrictedZoneItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RestrictedZoneItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RestrictedZoneItem
             */
            public static fromObject(object: { [k: string]: any }): smartboat.zone.RestrictedZoneItem;

            /**
             * Creates a plain object from a RestrictedZoneItem message. Also converts values to other types if specified.
             * @param message RestrictedZoneItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.zone.RestrictedZoneItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RestrictedZoneItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RestrictedZoneItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RestrictedZonesPack. */
        interface IRestrictedZonesPack {

            /** RestrictedZonesPack version */
            version?: (string|null);

            /** RestrictedZonesPack updatedAt */
            updatedAt?: (number|Long|null);

            /** RestrictedZonesPack zones */
            zones?: (smartboat.zone.IRestrictedZoneItem[]|null);
        }

        /** Represents a RestrictedZonesPack. */
        class RestrictedZonesPack implements IRestrictedZonesPack {

            /**
             * Constructs a new RestrictedZonesPack.
             * @param [properties] Properties to set
             */
            constructor(properties?: smartboat.zone.IRestrictedZonesPack);

            /** RestrictedZonesPack version. */
            public version: string;

            /** RestrictedZonesPack updatedAt. */
            public updatedAt: (number|Long);

            /** RestrictedZonesPack zones. */
            public zones: smartboat.zone.IRestrictedZoneItem[];

            /**
             * Creates a new RestrictedZonesPack instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RestrictedZonesPack instance
             */
            public static create(properties?: smartboat.zone.IRestrictedZonesPack): smartboat.zone.RestrictedZonesPack;

            /**
             * Encodes the specified RestrictedZonesPack message. Does not implicitly {@link smartboat.zone.RestrictedZonesPack.verify|verify} messages.
             * @param message RestrictedZonesPack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: smartboat.zone.IRestrictedZonesPack, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RestrictedZonesPack message, length delimited. Does not implicitly {@link smartboat.zone.RestrictedZonesPack.verify|verify} messages.
             * @param message RestrictedZonesPack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: smartboat.zone.IRestrictedZonesPack, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RestrictedZonesPack message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RestrictedZonesPack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): smartboat.zone.RestrictedZonesPack;

            /**
             * Decodes a RestrictedZonesPack message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RestrictedZonesPack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): smartboat.zone.RestrictedZonesPack;

            /**
             * Verifies a RestrictedZonesPack message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RestrictedZonesPack message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RestrictedZonesPack
             */
            public static fromObject(object: { [k: string]: any }): smartboat.zone.RestrictedZonesPack;

            /**
             * Creates a plain object from a RestrictedZonesPack message. Also converts values to other types if specified.
             * @param message RestrictedZonesPack
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: smartboat.zone.RestrictedZonesPack, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RestrictedZonesPack to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RestrictedZonesPack
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
