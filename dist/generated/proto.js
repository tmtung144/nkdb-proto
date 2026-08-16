/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.smartboat = (function() {

    /**
     * Namespace smartboat.
     * @exports smartboat
     * @namespace
     */
    var smartboat = {};

    smartboat.sync = (function() {

        /**
         * Namespace sync.
         * @memberof smartboat
         * @namespace
         */
        var sync = {};

        sync.FishCatch = (function() {

            /**
             * Properties of a FishCatch.
             * @memberof smartboat.sync
             * @interface IFishCatch
             * @property {number|null} [fishId] FishCatch fishId
             * @property {string|null} [fishName] FishCatch fishName
             * @property {string|null} [fishCode] FishCatch fishCode
             * @property {number|null} [quantity] FishCatch quantity
             * @property {number|null} [status] FishCatch status
             */

            /**
             * Constructs a new FishCatch.
             * @memberof smartboat.sync
             * @classdesc Represents a FishCatch.
             * @implements IFishCatch
             * @constructor
             * @param {smartboat.sync.IFishCatch=} [properties] Properties to set
             */
            function FishCatch(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FishCatch fishId.
             * @member {number} fishId
             * @memberof smartboat.sync.FishCatch
             * @instance
             */
            FishCatch.prototype.fishId = 0;

            /**
             * FishCatch fishName.
             * @member {string} fishName
             * @memberof smartboat.sync.FishCatch
             * @instance
             */
            FishCatch.prototype.fishName = "";

            /**
             * FishCatch fishCode.
             * @member {string} fishCode
             * @memberof smartboat.sync.FishCatch
             * @instance
             */
            FishCatch.prototype.fishCode = "";

            /**
             * FishCatch quantity.
             * @member {number} quantity
             * @memberof smartboat.sync.FishCatch
             * @instance
             */
            FishCatch.prototype.quantity = 0;

            /**
             * FishCatch status.
             * @member {number} status
             * @memberof smartboat.sync.FishCatch
             * @instance
             */
            FishCatch.prototype.status = 0;

            /**
             * Creates a new FishCatch instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {smartboat.sync.IFishCatch=} [properties] Properties to set
             * @returns {smartboat.sync.FishCatch} FishCatch instance
             */
            FishCatch.create = function create(properties) {
                return new FishCatch(properties);
            };

            /**
             * Encodes the specified FishCatch message. Does not implicitly {@link smartboat.sync.FishCatch.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {smartboat.sync.IFishCatch} message FishCatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishCatch.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.fishId != null && Object.hasOwnProperty.call(message, "fishId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fishId);
                if (message.fishName != null && Object.hasOwnProperty.call(message, "fishName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fishName);
                if (message.fishCode != null && Object.hasOwnProperty.call(message, "fishCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.fishCode);
                if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.quantity);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified FishCatch message, length delimited. Does not implicitly {@link smartboat.sync.FishCatch.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {smartboat.sync.IFishCatch} message FishCatch message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishCatch.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FishCatch message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.FishCatch} FishCatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishCatch.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.FishCatch();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.fishId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.fishName = reader.string();
                            break;
                        }
                    case 3: {
                            message.fishCode = reader.string();
                            break;
                        }
                    case 4: {
                            message.quantity = reader.float();
                            break;
                        }
                    case 5: {
                            message.status = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FishCatch message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.FishCatch} FishCatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishCatch.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FishCatch message.
             * @function verify
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FishCatch.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.fishId != null && Object.hasOwnProperty.call(message, "fishId"))
                    if (!$util.isInteger(message.fishId))
                        return "fishId: integer expected";
                if (message.fishName != null && Object.hasOwnProperty.call(message, "fishName"))
                    if (!$util.isString(message.fishName))
                        return "fishName: string expected";
                if (message.fishCode != null && Object.hasOwnProperty.call(message, "fishCode"))
                    if (!$util.isString(message.fishCode))
                        return "fishCode: string expected";
                if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                    if (typeof message.quantity !== "number")
                        return "quantity: number expected";
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates a FishCatch message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.FishCatch} FishCatch
             */
            FishCatch.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.FishCatch)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.FishCatch: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.FishCatch();
                if (object.fishId != null)
                    message.fishId = object.fishId | 0;
                if (object.fishName != null)
                    message.fishName = String(object.fishName);
                if (object.fishCode != null)
                    message.fishCode = String(object.fishCode);
                if (object.quantity != null)
                    message.quantity = Number(object.quantity);
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };

            /**
             * Creates a plain object from a FishCatch message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {smartboat.sync.FishCatch} message FishCatch
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FishCatch.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.fishId = 0;
                    object.fishName = "";
                    object.fishCode = "";
                    object.quantity = 0;
                    object.status = 0;
                }
                if (message.fishId != null && Object.hasOwnProperty.call(message, "fishId"))
                    object.fishId = message.fishId;
                if (message.fishName != null && Object.hasOwnProperty.call(message, "fishName"))
                    object.fishName = message.fishName;
                if (message.fishCode != null && Object.hasOwnProperty.call(message, "fishCode"))
                    object.fishCode = message.fishCode;
                if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                    object.quantity = options.json && !isFinite(message.quantity) ? String(message.quantity) : message.quantity;
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this FishCatch to JSON.
             * @function toJSON
             * @memberof smartboat.sync.FishCatch
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FishCatch.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FishCatch
             * @function getTypeUrl
             * @memberof smartboat.sync.FishCatch
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FishCatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.FishCatch";
            };

            return FishCatch;
        })();

        sync.MiningHaul = (function() {

            /**
             * Properties of a MiningHaul.
             * @memberof smartboat.sync
             * @interface IMiningHaul
             * @property {number|null} [localId] MiningHaul localId
             * @property {number|null} [numericalOrder] MiningHaul numericalOrder
             * @property {number|Long|null} [startedAt] MiningHaul startedAt
             * @property {number|null} [startLat] MiningHaul startLat
             * @property {number|null} [startLng] MiningHaul startLng
             * @property {number|Long|null} [endedAt] MiningHaul endedAt
             * @property {number|null} [endLat] MiningHaul endLat
             * @property {number|null} [endLng] MiningHaul endLng
             * @property {number|null} [status] MiningHaul status
             * @property {number|null} [transferred] MiningHaul transferred
             * @property {number|null} [transferredShipId] MiningHaul transferredShipId
             * @property {Array.<smartboat.sync.IFishCatch>|null} [outputs] MiningHaul outputs
             */

            /**
             * Constructs a new MiningHaul.
             * @memberof smartboat.sync
             * @classdesc Represents a MiningHaul.
             * @implements IMiningHaul
             * @constructor
             * @param {smartboat.sync.IMiningHaul=} [properties] Properties to set
             */
            function MiningHaul(properties) {
                this.outputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MiningHaul localId.
             * @member {number} localId
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.localId = 0;

            /**
             * MiningHaul numericalOrder.
             * @member {number} numericalOrder
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.numericalOrder = 0;

            /**
             * MiningHaul startedAt.
             * @member {number|Long} startedAt
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.startedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MiningHaul startLat.
             * @member {number} startLat
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.startLat = 0;

            /**
             * MiningHaul startLng.
             * @member {number} startLng
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.startLng = 0;

            /**
             * MiningHaul endedAt.
             * @member {number|Long} endedAt
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.endedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * MiningHaul endLat.
             * @member {number} endLat
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.endLat = 0;

            /**
             * MiningHaul endLng.
             * @member {number} endLng
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.endLng = 0;

            /**
             * MiningHaul status.
             * @member {number} status
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.status = 0;

            /**
             * MiningHaul transferred.
             * @member {number} transferred
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.transferred = 0;

            /**
             * MiningHaul transferredShipId.
             * @member {number} transferredShipId
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.transferredShipId = 0;

            /**
             * MiningHaul outputs.
             * @member {Array.<smartboat.sync.IFishCatch>} outputs
             * @memberof smartboat.sync.MiningHaul
             * @instance
             */
            MiningHaul.prototype.outputs = $util.emptyArray;

            /**
             * Creates a new MiningHaul instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {smartboat.sync.IMiningHaul=} [properties] Properties to set
             * @returns {smartboat.sync.MiningHaul} MiningHaul instance
             */
            MiningHaul.create = function create(properties) {
                return new MiningHaul(properties);
            };

            /**
             * Encodes the specified MiningHaul message. Does not implicitly {@link smartboat.sync.MiningHaul.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {smartboat.sync.IMiningHaul} message MiningHaul message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MiningHaul.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.localId != null && Object.hasOwnProperty.call(message, "localId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.localId);
                if (message.numericalOrder != null && Object.hasOwnProperty.call(message, "numericalOrder"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.numericalOrder);
                if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startedAt);
                if (message.startLat != null && Object.hasOwnProperty.call(message, "startLat"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.startLat);
                if (message.startLng != null && Object.hasOwnProperty.call(message, "startLng"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.startLng);
                if (message.endedAt != null && Object.hasOwnProperty.call(message, "endedAt"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.endedAt);
                if (message.endLat != null && Object.hasOwnProperty.call(message, "endLat"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.endLat);
                if (message.endLng != null && Object.hasOwnProperty.call(message, "endLng"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.endLng);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
                if (message.transferred != null && Object.hasOwnProperty.call(message, "transferred"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.transferred);
                if (message.transferredShipId != null && Object.hasOwnProperty.call(message, "transferredShipId"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.transferredShipId);
                if (message.outputs != null && message.outputs.length)
                    for (var i = 0; i < message.outputs.length; ++i)
                        $root.smartboat.sync.FishCatch.encode(message.outputs[i], writer.uint32(/* id 12, wireType 2 =*/98).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MiningHaul message, length delimited. Does not implicitly {@link smartboat.sync.MiningHaul.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {smartboat.sync.IMiningHaul} message MiningHaul message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MiningHaul.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MiningHaul message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.MiningHaul} MiningHaul
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MiningHaul.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.MiningHaul();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.localId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.numericalOrder = reader.int32();
                            break;
                        }
                    case 3: {
                            message.startedAt = reader.int64();
                            break;
                        }
                    case 4: {
                            message.startLat = reader.double();
                            break;
                        }
                    case 5: {
                            message.startLng = reader.double();
                            break;
                        }
                    case 6: {
                            message.endedAt = reader.int64();
                            break;
                        }
                    case 7: {
                            message.endLat = reader.double();
                            break;
                        }
                    case 8: {
                            message.endLng = reader.double();
                            break;
                        }
                    case 9: {
                            message.status = reader.int32();
                            break;
                        }
                    case 10: {
                            message.transferred = reader.int32();
                            break;
                        }
                    case 11: {
                            message.transferredShipId = reader.int32();
                            break;
                        }
                    case 12: {
                            if (!(message.outputs && message.outputs.length))
                                message.outputs = [];
                            message.outputs.push($root.smartboat.sync.FishCatch.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MiningHaul message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.MiningHaul} MiningHaul
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MiningHaul.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MiningHaul message.
             * @function verify
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MiningHaul.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.localId != null && Object.hasOwnProperty.call(message, "localId"))
                    if (!$util.isInteger(message.localId))
                        return "localId: integer expected";
                if (message.numericalOrder != null && Object.hasOwnProperty.call(message, "numericalOrder"))
                    if (!$util.isInteger(message.numericalOrder))
                        return "numericalOrder: integer expected";
                if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                    if (!$util.isInteger(message.startedAt) && !(message.startedAt && $util.isInteger(message.startedAt.low) && $util.isInteger(message.startedAt.high)))
                        return "startedAt: integer|Long expected";
                if (message.startLat != null && Object.hasOwnProperty.call(message, "startLat"))
                    if (typeof message.startLat !== "number")
                        return "startLat: number expected";
                if (message.startLng != null && Object.hasOwnProperty.call(message, "startLng"))
                    if (typeof message.startLng !== "number")
                        return "startLng: number expected";
                if (message.endedAt != null && Object.hasOwnProperty.call(message, "endedAt"))
                    if (!$util.isInteger(message.endedAt) && !(message.endedAt && $util.isInteger(message.endedAt.low) && $util.isInteger(message.endedAt.high)))
                        return "endedAt: integer|Long expected";
                if (message.endLat != null && Object.hasOwnProperty.call(message, "endLat"))
                    if (typeof message.endLat !== "number")
                        return "endLat: number expected";
                if (message.endLng != null && Object.hasOwnProperty.call(message, "endLng"))
                    if (typeof message.endLng !== "number")
                        return "endLng: number expected";
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.transferred != null && Object.hasOwnProperty.call(message, "transferred"))
                    if (!$util.isInteger(message.transferred))
                        return "transferred: integer expected";
                if (message.transferredShipId != null && Object.hasOwnProperty.call(message, "transferredShipId"))
                    if (!$util.isInteger(message.transferredShipId))
                        return "transferredShipId: integer expected";
                if (message.outputs != null && Object.hasOwnProperty.call(message, "outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (var i = 0; i < message.outputs.length; ++i) {
                        var error = $root.smartboat.sync.FishCatch.verify(message.outputs[i], long + 1);
                        if (error)
                            return "outputs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MiningHaul message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.MiningHaul} MiningHaul
             */
            MiningHaul.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.MiningHaul)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.MiningHaul: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.MiningHaul();
                if (object.localId != null)
                    message.localId = object.localId | 0;
                if (object.numericalOrder != null)
                    message.numericalOrder = object.numericalOrder | 0;
                if (object.startedAt != null)
                    if ($util.Long)
                        message.startedAt = $util.Long.fromValue(object.startedAt, false);
                    else if (typeof object.startedAt === "string")
                        message.startedAt = parseInt(object.startedAt, 10);
                    else if (typeof object.startedAt === "number")
                        message.startedAt = object.startedAt;
                    else if (typeof object.startedAt === "object")
                        message.startedAt = new $util.LongBits(object.startedAt.low >>> 0, object.startedAt.high >>> 0).toNumber();
                if (object.startLat != null)
                    message.startLat = Number(object.startLat);
                if (object.startLng != null)
                    message.startLng = Number(object.startLng);
                if (object.endedAt != null)
                    if ($util.Long)
                        message.endedAt = $util.Long.fromValue(object.endedAt, false);
                    else if (typeof object.endedAt === "string")
                        message.endedAt = parseInt(object.endedAt, 10);
                    else if (typeof object.endedAt === "number")
                        message.endedAt = object.endedAt;
                    else if (typeof object.endedAt === "object")
                        message.endedAt = new $util.LongBits(object.endedAt.low >>> 0, object.endedAt.high >>> 0).toNumber();
                if (object.endLat != null)
                    message.endLat = Number(object.endLat);
                if (object.endLng != null)
                    message.endLng = Number(object.endLng);
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.transferred != null)
                    message.transferred = object.transferred | 0;
                if (object.transferredShipId != null)
                    message.transferredShipId = object.transferredShipId | 0;
                if (object.outputs) {
                    if (!Array.isArray(object.outputs))
                        throw TypeError(".smartboat.sync.MiningHaul.outputs: array expected");
                    message.outputs = [];
                    for (var i = 0; i < object.outputs.length; ++i) {
                        if (!$util.isObject(object.outputs[i]))
                            throw TypeError(".smartboat.sync.MiningHaul.outputs: object expected");
                        message.outputs[i] = $root.smartboat.sync.FishCatch.fromObject(object.outputs[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MiningHaul message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {smartboat.sync.MiningHaul} message MiningHaul
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MiningHaul.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.outputs = [];
                if (options.defaults) {
                    object.localId = 0;
                    object.numericalOrder = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.startedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.startLat = 0;
                    object.startLng = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.endedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.endedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.endLat = 0;
                    object.endLng = 0;
                    object.status = 0;
                    object.transferred = 0;
                    object.transferredShipId = 0;
                }
                if (message.localId != null && Object.hasOwnProperty.call(message, "localId"))
                    object.localId = message.localId;
                if (message.numericalOrder != null && Object.hasOwnProperty.call(message, "numericalOrder"))
                    object.numericalOrder = message.numericalOrder;
                if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.startedAt = typeof message.startedAt === "number" ? BigInt(message.startedAt) : $util.Long.fromBits(message.startedAt.low >>> 0, message.startedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.startedAt === "number")
                        object.startedAt = options.longs === String ? String(message.startedAt) : message.startedAt;
                    else
                        object.startedAt = options.longs === String ? $util.Long.prototype.toString.call(message.startedAt) : options.longs === Number ? new $util.LongBits(message.startedAt.low >>> 0, message.startedAt.high >>> 0).toNumber() : message.startedAt;
                if (message.startLat != null && Object.hasOwnProperty.call(message, "startLat"))
                    object.startLat = options.json && !isFinite(message.startLat) ? String(message.startLat) : message.startLat;
                if (message.startLng != null && Object.hasOwnProperty.call(message, "startLng"))
                    object.startLng = options.json && !isFinite(message.startLng) ? String(message.startLng) : message.startLng;
                if (message.endedAt != null && Object.hasOwnProperty.call(message, "endedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.endedAt = typeof message.endedAt === "number" ? BigInt(message.endedAt) : $util.Long.fromBits(message.endedAt.low >>> 0, message.endedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.endedAt === "number")
                        object.endedAt = options.longs === String ? String(message.endedAt) : message.endedAt;
                    else
                        object.endedAt = options.longs === String ? $util.Long.prototype.toString.call(message.endedAt) : options.longs === Number ? new $util.LongBits(message.endedAt.low >>> 0, message.endedAt.high >>> 0).toNumber() : message.endedAt;
                if (message.endLat != null && Object.hasOwnProperty.call(message, "endLat"))
                    object.endLat = options.json && !isFinite(message.endLat) ? String(message.endLat) : message.endLat;
                if (message.endLng != null && Object.hasOwnProperty.call(message, "endLng"))
                    object.endLng = options.json && !isFinite(message.endLng) ? String(message.endLng) : message.endLng;
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.transferred != null && Object.hasOwnProperty.call(message, "transferred"))
                    object.transferred = message.transferred;
                if (message.transferredShipId != null && Object.hasOwnProperty.call(message, "transferredShipId"))
                    object.transferredShipId = message.transferredShipId;
                if (message.outputs && message.outputs.length) {
                    object.outputs = [];
                    for (var j = 0; j < message.outputs.length; ++j)
                        object.outputs[j] = $root.smartboat.sync.FishCatch.toObject(message.outputs[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this MiningHaul to JSON.
             * @function toJSON
             * @memberof smartboat.sync.MiningHaul
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MiningHaul.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MiningHaul
             * @function getTypeUrl
             * @memberof smartboat.sync.MiningHaul
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MiningHaul.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.MiningHaul";
            };

            return MiningHaul;
        })();

        sync.FishingLogSync = (function() {

            /**
             * Properties of a FishingLogSync.
             * @memberof smartboat.sync
             * @interface IFishingLogSync
             * @property {number|null} [id] FishingLogSync id
             * @property {number|null} [miningShipId] FishingLogSync miningShipId
             * @property {number|Long|null} [seaTripId] FishingLogSync seaTripId
             * @property {string|null} [captainName] FishingLogSync captainName
             * @property {string|null} [captainCic] FishingLogSync captainCic
             * @property {number|Long|null} [exportedAt] FishingLogSync exportedAt
             * @property {number|Long|null} [importedAt] FishingLogSync importedAt
             * @property {string|null} [portExport] FishingLogSync portExport
             * @property {string|null} [portImport] FishingLogSync portImport
             * @property {string|null} [bookNumber] FishingLogSync bookNumber
             * @property {Array.<smartboat.sync.IMiningHaul>|null} [hauls] FishingLogSync hauls
             */

            /**
             * Constructs a new FishingLogSync.
             * @memberof smartboat.sync
             * @classdesc Represents a FishingLogSync.
             * @implements IFishingLogSync
             * @constructor
             * @param {smartboat.sync.IFishingLogSync=} [properties] Properties to set
             */
            function FishingLogSync(properties) {
                this.hauls = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FishingLogSync id.
             * @member {number} id
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.id = 0;

            /**
             * FishingLogSync miningShipId.
             * @member {number} miningShipId
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.miningShipId = 0;

            /**
             * FishingLogSync seaTripId.
             * @member {number|Long} seaTripId
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.seaTripId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishingLogSync captainName.
             * @member {string} captainName
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.captainName = "";

            /**
             * FishingLogSync captainCic.
             * @member {string} captainCic
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.captainCic = "";

            /**
             * FishingLogSync exportedAt.
             * @member {number|Long} exportedAt
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.exportedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishingLogSync importedAt.
             * @member {number|Long} importedAt
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.importedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * FishingLogSync portExport.
             * @member {string} portExport
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.portExport = "";

            /**
             * FishingLogSync portImport.
             * @member {string} portImport
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.portImport = "";

            /**
             * FishingLogSync bookNumber.
             * @member {string} bookNumber
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.bookNumber = "";

            /**
             * FishingLogSync hauls.
             * @member {Array.<smartboat.sync.IMiningHaul>} hauls
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             */
            FishingLogSync.prototype.hauls = $util.emptyArray;

            /**
             * Creates a new FishingLogSync instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {smartboat.sync.IFishingLogSync=} [properties] Properties to set
             * @returns {smartboat.sync.FishingLogSync} FishingLogSync instance
             */
            FishingLogSync.create = function create(properties) {
                return new FishingLogSync(properties);
            };

            /**
             * Encodes the specified FishingLogSync message. Does not implicitly {@link smartboat.sync.FishingLogSync.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {smartboat.sync.IFishingLogSync} message FishingLogSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishingLogSync.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.miningShipId != null && Object.hasOwnProperty.call(message, "miningShipId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.miningShipId);
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seaTripId);
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.captainName);
                if (message.captainCic != null && Object.hasOwnProperty.call(message, "captainCic"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.captainCic);
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.exportedAt);
                if (message.importedAt != null && Object.hasOwnProperty.call(message, "importedAt"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.importedAt);
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.portExport);
                if (message.portImport != null && Object.hasOwnProperty.call(message, "portImport"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.portImport);
                if (message.bookNumber != null && Object.hasOwnProperty.call(message, "bookNumber"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.bookNumber);
                if (message.hauls != null && message.hauls.length)
                    for (var i = 0; i < message.hauls.length; ++i)
                        $root.smartboat.sync.MiningHaul.encode(message.hauls[i], writer.uint32(/* id 11, wireType 2 =*/90).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FishingLogSync message, length delimited. Does not implicitly {@link smartboat.sync.FishingLogSync.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {smartboat.sync.IFishingLogSync} message FishingLogSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FishingLogSync.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a FishingLogSync message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.FishingLogSync} FishingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishingLogSync.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.FishingLogSync();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.miningShipId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.seaTripId = reader.int64();
                            break;
                        }
                    case 4: {
                            message.captainName = reader.string();
                            break;
                        }
                    case 5: {
                            message.captainCic = reader.string();
                            break;
                        }
                    case 6: {
                            message.exportedAt = reader.int64();
                            break;
                        }
                    case 7: {
                            message.importedAt = reader.int64();
                            break;
                        }
                    case 8: {
                            message.portExport = reader.string();
                            break;
                        }
                    case 9: {
                            message.portImport = reader.string();
                            break;
                        }
                    case 10: {
                            message.bookNumber = reader.string();
                            break;
                        }
                    case 11: {
                            if (!(message.hauls && message.hauls.length))
                                message.hauls = [];
                            message.hauls.push($root.smartboat.sync.MiningHaul.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FishingLogSync message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.FishingLogSync} FishingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FishingLogSync.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FishingLogSync message.
             * @function verify
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FishingLogSync.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.miningShipId != null && Object.hasOwnProperty.call(message, "miningShipId"))
                    if (!$util.isInteger(message.miningShipId))
                        return "miningShipId: integer expected";
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (!$util.isInteger(message.seaTripId) && !(message.seaTripId && $util.isInteger(message.seaTripId.low) && $util.isInteger(message.seaTripId.high)))
                        return "seaTripId: integer|Long expected";
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    if (!$util.isString(message.captainName))
                        return "captainName: string expected";
                if (message.captainCic != null && Object.hasOwnProperty.call(message, "captainCic"))
                    if (!$util.isString(message.captainCic))
                        return "captainCic: string expected";
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    if (!$util.isInteger(message.exportedAt) && !(message.exportedAt && $util.isInteger(message.exportedAt.low) && $util.isInteger(message.exportedAt.high)))
                        return "exportedAt: integer|Long expected";
                if (message.importedAt != null && Object.hasOwnProperty.call(message, "importedAt"))
                    if (!$util.isInteger(message.importedAt) && !(message.importedAt && $util.isInteger(message.importedAt.low) && $util.isInteger(message.importedAt.high)))
                        return "importedAt: integer|Long expected";
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    if (!$util.isString(message.portExport))
                        return "portExport: string expected";
                if (message.portImport != null && Object.hasOwnProperty.call(message, "portImport"))
                    if (!$util.isString(message.portImport))
                        return "portImport: string expected";
                if (message.bookNumber != null && Object.hasOwnProperty.call(message, "bookNumber"))
                    if (!$util.isString(message.bookNumber))
                        return "bookNumber: string expected";
                if (message.hauls != null && Object.hasOwnProperty.call(message, "hauls")) {
                    if (!Array.isArray(message.hauls))
                        return "hauls: array expected";
                    for (var i = 0; i < message.hauls.length; ++i) {
                        var error = $root.smartboat.sync.MiningHaul.verify(message.hauls[i], long + 1);
                        if (error)
                            return "hauls." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FishingLogSync message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.FishingLogSync} FishingLogSync
             */
            FishingLogSync.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.FishingLogSync)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.FishingLogSync: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.FishingLogSync();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.miningShipId != null)
                    message.miningShipId = object.miningShipId | 0;
                if (object.seaTripId != null)
                    if ($util.Long)
                        message.seaTripId = $util.Long.fromValue(object.seaTripId, false);
                    else if (typeof object.seaTripId === "string")
                        message.seaTripId = parseInt(object.seaTripId, 10);
                    else if (typeof object.seaTripId === "number")
                        message.seaTripId = object.seaTripId;
                    else if (typeof object.seaTripId === "object")
                        message.seaTripId = new $util.LongBits(object.seaTripId.low >>> 0, object.seaTripId.high >>> 0).toNumber();
                if (object.captainName != null)
                    message.captainName = String(object.captainName);
                if (object.captainCic != null)
                    message.captainCic = String(object.captainCic);
                if (object.exportedAt != null)
                    if ($util.Long)
                        message.exportedAt = $util.Long.fromValue(object.exportedAt, false);
                    else if (typeof object.exportedAt === "string")
                        message.exportedAt = parseInt(object.exportedAt, 10);
                    else if (typeof object.exportedAt === "number")
                        message.exportedAt = object.exportedAt;
                    else if (typeof object.exportedAt === "object")
                        message.exportedAt = new $util.LongBits(object.exportedAt.low >>> 0, object.exportedAt.high >>> 0).toNumber();
                if (object.importedAt != null)
                    if ($util.Long)
                        message.importedAt = $util.Long.fromValue(object.importedAt, false);
                    else if (typeof object.importedAt === "string")
                        message.importedAt = parseInt(object.importedAt, 10);
                    else if (typeof object.importedAt === "number")
                        message.importedAt = object.importedAt;
                    else if (typeof object.importedAt === "object")
                        message.importedAt = new $util.LongBits(object.importedAt.low >>> 0, object.importedAt.high >>> 0).toNumber();
                if (object.portExport != null)
                    message.portExport = String(object.portExport);
                if (object.portImport != null)
                    message.portImport = String(object.portImport);
                if (object.bookNumber != null)
                    message.bookNumber = String(object.bookNumber);
                if (object.hauls) {
                    if (!Array.isArray(object.hauls))
                        throw TypeError(".smartboat.sync.FishingLogSync.hauls: array expected");
                    message.hauls = [];
                    for (var i = 0; i < object.hauls.length; ++i) {
                        if (!$util.isObject(object.hauls[i]))
                            throw TypeError(".smartboat.sync.FishingLogSync.hauls: object expected");
                        message.hauls[i] = $root.smartboat.sync.MiningHaul.fromObject(object.hauls[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FishingLogSync message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {smartboat.sync.FishingLogSync} message FishingLogSync
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FishingLogSync.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.hauls = [];
                if (options.defaults) {
                    object.id = 0;
                    object.miningShipId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seaTripId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.seaTripId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.captainName = "";
                    object.captainCic = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.exportedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.exportedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.importedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.importedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.portExport = "";
                    object.portImport = "";
                    object.bookNumber = "";
                }
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.miningShipId != null && Object.hasOwnProperty.call(message, "miningShipId"))
                    object.miningShipId = message.miningShipId;
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.seaTripId = typeof message.seaTripId === "number" ? BigInt(message.seaTripId) : $util.Long.fromBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0, false).toBigInt();
                    else if (typeof message.seaTripId === "number")
                        object.seaTripId = options.longs === String ? String(message.seaTripId) : message.seaTripId;
                    else
                        object.seaTripId = options.longs === String ? $util.Long.prototype.toString.call(message.seaTripId) : options.longs === Number ? new $util.LongBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0).toNumber() : message.seaTripId;
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    object.captainName = message.captainName;
                if (message.captainCic != null && Object.hasOwnProperty.call(message, "captainCic"))
                    object.captainCic = message.captainCic;
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.exportedAt = typeof message.exportedAt === "number" ? BigInt(message.exportedAt) : $util.Long.fromBits(message.exportedAt.low >>> 0, message.exportedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.exportedAt === "number")
                        object.exportedAt = options.longs === String ? String(message.exportedAt) : message.exportedAt;
                    else
                        object.exportedAt = options.longs === String ? $util.Long.prototype.toString.call(message.exportedAt) : options.longs === Number ? new $util.LongBits(message.exportedAt.low >>> 0, message.exportedAt.high >>> 0).toNumber() : message.exportedAt;
                if (message.importedAt != null && Object.hasOwnProperty.call(message, "importedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.importedAt = typeof message.importedAt === "number" ? BigInt(message.importedAt) : $util.Long.fromBits(message.importedAt.low >>> 0, message.importedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.importedAt === "number")
                        object.importedAt = options.longs === String ? String(message.importedAt) : message.importedAt;
                    else
                        object.importedAt = options.longs === String ? $util.Long.prototype.toString.call(message.importedAt) : options.longs === Number ? new $util.LongBits(message.importedAt.low >>> 0, message.importedAt.high >>> 0).toNumber() : message.importedAt;
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    object.portExport = message.portExport;
                if (message.portImport != null && Object.hasOwnProperty.call(message, "portImport"))
                    object.portImport = message.portImport;
                if (message.bookNumber != null && Object.hasOwnProperty.call(message, "bookNumber"))
                    object.bookNumber = message.bookNumber;
                if (message.hauls && message.hauls.length) {
                    object.hauls = [];
                    for (var j = 0; j < message.hauls.length; ++j)
                        object.hauls[j] = $root.smartboat.sync.MiningHaul.toObject(message.hauls[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this FishingLogSync to JSON.
             * @function toJSON
             * @memberof smartboat.sync.FishingLogSync
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FishingLogSync.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FishingLogSync
             * @function getTypeUrl
             * @memberof smartboat.sync.FishingLogSync
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FishingLogSync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.FishingLogSync";
            };

            return FishingLogSync;
        })();

        sync.PurchasingLogSync = (function() {

            /**
             * Properties of a PurchasingLogSync.
             * @memberof smartboat.sync
             * @interface IPurchasingLogSync
             * @property {number|null} [id] PurchasingLogSync id
             * @property {number|null} [type] PurchasingLogSync type
             * @property {number|null} [purchasingShipId] PurchasingLogSync purchasingShipId
             * @property {number|null} [saleShipId] PurchasingLogSync saleShipId
             * @property {number|Long|null} [seaTripId] PurchasingLogSync seaTripId
             * @property {number|Long|null} [saleSeaTripId] PurchasingLogSync saleSeaTripId
             * @property {number|null} [status] PurchasingLogSync status
             * @property {string|null} [captainName] PurchasingLogSync captainName
             * @property {number|null} [lat] PurchasingLogSync lat
             * @property {number|null} [lng] PurchasingLogSync lng
             * @property {number|Long|null} [time] PurchasingLogSync time
             * @property {number|Long|null} [exportedAt] PurchasingLogSync exportedAt
             * @property {string|null} [portExport] PurchasingLogSync portExport
             * @property {Array.<smartboat.sync.IMiningHaul>|null} [hauls] PurchasingLogSync hauls
             */

            /**
             * Constructs a new PurchasingLogSync.
             * @memberof smartboat.sync
             * @classdesc Represents a PurchasingLogSync.
             * @implements IPurchasingLogSync
             * @constructor
             * @param {smartboat.sync.IPurchasingLogSync=} [properties] Properties to set
             */
            function PurchasingLogSync(properties) {
                this.hauls = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PurchasingLogSync id.
             * @member {number} id
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.id = 0;

            /**
             * PurchasingLogSync type.
             * @member {number} type
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.type = 0;

            /**
             * PurchasingLogSync purchasingShipId.
             * @member {number} purchasingShipId
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.purchasingShipId = 0;

            /**
             * PurchasingLogSync saleShipId.
             * @member {number} saleShipId
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.saleShipId = 0;

            /**
             * PurchasingLogSync seaTripId.
             * @member {number|Long} seaTripId
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.seaTripId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PurchasingLogSync saleSeaTripId.
             * @member {number|Long} saleSeaTripId
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.saleSeaTripId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PurchasingLogSync status.
             * @member {number} status
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.status = 0;

            /**
             * PurchasingLogSync captainName.
             * @member {string} captainName
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.captainName = "";

            /**
             * PurchasingLogSync lat.
             * @member {number} lat
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.lat = 0;

            /**
             * PurchasingLogSync lng.
             * @member {number} lng
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.lng = 0;

            /**
             * PurchasingLogSync time.
             * @member {number|Long} time
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PurchasingLogSync exportedAt.
             * @member {number|Long} exportedAt
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.exportedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * PurchasingLogSync portExport.
             * @member {string} portExport
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.portExport = "";

            /**
             * PurchasingLogSync hauls.
             * @member {Array.<smartboat.sync.IMiningHaul>} hauls
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             */
            PurchasingLogSync.prototype.hauls = $util.emptyArray;

            /**
             * Creates a new PurchasingLogSync instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {smartboat.sync.IPurchasingLogSync=} [properties] Properties to set
             * @returns {smartboat.sync.PurchasingLogSync} PurchasingLogSync instance
             */
            PurchasingLogSync.create = function create(properties) {
                return new PurchasingLogSync(properties);
            };

            /**
             * Encodes the specified PurchasingLogSync message. Does not implicitly {@link smartboat.sync.PurchasingLogSync.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {smartboat.sync.IPurchasingLogSync} message PurchasingLogSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PurchasingLogSync.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.purchasingShipId != null && Object.hasOwnProperty.call(message, "purchasingShipId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.purchasingShipId);
                if (message.saleShipId != null && Object.hasOwnProperty.call(message, "saleShipId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.saleShipId);
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.seaTripId);
                if (message.saleSeaTripId != null && Object.hasOwnProperty.call(message, "saleSeaTripId"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.saleSeaTripId);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.captainName);
                if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.lat);
                if (message.lng != null && Object.hasOwnProperty.call(message, "lng"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.lng);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int64(message.time);
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int64(message.exportedAt);
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.portExport);
                if (message.hauls != null && message.hauls.length)
                    for (var i = 0; i < message.hauls.length; ++i)
                        $root.smartboat.sync.MiningHaul.encode(message.hauls[i], writer.uint32(/* id 14, wireType 2 =*/114).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PurchasingLogSync message, length delimited. Does not implicitly {@link smartboat.sync.PurchasingLogSync.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {smartboat.sync.IPurchasingLogSync} message PurchasingLogSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PurchasingLogSync.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PurchasingLogSync message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.PurchasingLogSync} PurchasingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PurchasingLogSync.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.PurchasingLogSync();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.type = reader.int32();
                            break;
                        }
                    case 3: {
                            message.purchasingShipId = reader.int32();
                            break;
                        }
                    case 4: {
                            message.saleShipId = reader.int32();
                            break;
                        }
                    case 5: {
                            message.seaTripId = reader.int64();
                            break;
                        }
                    case 6: {
                            message.saleSeaTripId = reader.int64();
                            break;
                        }
                    case 7: {
                            message.status = reader.int32();
                            break;
                        }
                    case 8: {
                            message.captainName = reader.string();
                            break;
                        }
                    case 9: {
                            message.lat = reader.double();
                            break;
                        }
                    case 10: {
                            message.lng = reader.double();
                            break;
                        }
                    case 11: {
                            message.time = reader.int64();
                            break;
                        }
                    case 12: {
                            message.exportedAt = reader.int64();
                            break;
                        }
                    case 13: {
                            message.portExport = reader.string();
                            break;
                        }
                    case 14: {
                            if (!(message.hauls && message.hauls.length))
                                message.hauls = [];
                            message.hauls.push($root.smartboat.sync.MiningHaul.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PurchasingLogSync message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.PurchasingLogSync} PurchasingLogSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PurchasingLogSync.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PurchasingLogSync message.
             * @function verify
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PurchasingLogSync.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    if (!$util.isInteger(message.type))
                        return "type: integer expected";
                if (message.purchasingShipId != null && Object.hasOwnProperty.call(message, "purchasingShipId"))
                    if (!$util.isInteger(message.purchasingShipId))
                        return "purchasingShipId: integer expected";
                if (message.saleShipId != null && Object.hasOwnProperty.call(message, "saleShipId"))
                    if (!$util.isInteger(message.saleShipId))
                        return "saleShipId: integer expected";
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (!$util.isInteger(message.seaTripId) && !(message.seaTripId && $util.isInteger(message.seaTripId.low) && $util.isInteger(message.seaTripId.high)))
                        return "seaTripId: integer|Long expected";
                if (message.saleSeaTripId != null && Object.hasOwnProperty.call(message, "saleSeaTripId"))
                    if (!$util.isInteger(message.saleSeaTripId) && !(message.saleSeaTripId && $util.isInteger(message.saleSeaTripId.low) && $util.isInteger(message.saleSeaTripId.high)))
                        return "saleSeaTripId: integer|Long expected";
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    if (!$util.isString(message.captainName))
                        return "captainName: string expected";
                if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                    if (typeof message.lat !== "number")
                        return "lat: number expected";
                if (message.lng != null && Object.hasOwnProperty.call(message, "lng"))
                    if (typeof message.lng !== "number")
                        return "lng: number expected";
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    if (!$util.isInteger(message.exportedAt) && !(message.exportedAt && $util.isInteger(message.exportedAt.low) && $util.isInteger(message.exportedAt.high)))
                        return "exportedAt: integer|Long expected";
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    if (!$util.isString(message.portExport))
                        return "portExport: string expected";
                if (message.hauls != null && Object.hasOwnProperty.call(message, "hauls")) {
                    if (!Array.isArray(message.hauls))
                        return "hauls: array expected";
                    for (var i = 0; i < message.hauls.length; ++i) {
                        var error = $root.smartboat.sync.MiningHaul.verify(message.hauls[i], long + 1);
                        if (error)
                            return "hauls." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PurchasingLogSync message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.PurchasingLogSync} PurchasingLogSync
             */
            PurchasingLogSync.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.PurchasingLogSync)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.PurchasingLogSync: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.PurchasingLogSync();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.purchasingShipId != null)
                    message.purchasingShipId = object.purchasingShipId | 0;
                if (object.saleShipId != null)
                    message.saleShipId = object.saleShipId | 0;
                if (object.seaTripId != null)
                    if ($util.Long)
                        message.seaTripId = $util.Long.fromValue(object.seaTripId, false);
                    else if (typeof object.seaTripId === "string")
                        message.seaTripId = parseInt(object.seaTripId, 10);
                    else if (typeof object.seaTripId === "number")
                        message.seaTripId = object.seaTripId;
                    else if (typeof object.seaTripId === "object")
                        message.seaTripId = new $util.LongBits(object.seaTripId.low >>> 0, object.seaTripId.high >>> 0).toNumber();
                if (object.saleSeaTripId != null)
                    if ($util.Long)
                        message.saleSeaTripId = $util.Long.fromValue(object.saleSeaTripId, false);
                    else if (typeof object.saleSeaTripId === "string")
                        message.saleSeaTripId = parseInt(object.saleSeaTripId, 10);
                    else if (typeof object.saleSeaTripId === "number")
                        message.saleSeaTripId = object.saleSeaTripId;
                    else if (typeof object.saleSeaTripId === "object")
                        message.saleSeaTripId = new $util.LongBits(object.saleSeaTripId.low >>> 0, object.saleSeaTripId.high >>> 0).toNumber();
                if (object.status != null)
                    message.status = object.status | 0;
                if (object.captainName != null)
                    message.captainName = String(object.captainName);
                if (object.lat != null)
                    message.lat = Number(object.lat);
                if (object.lng != null)
                    message.lng = Number(object.lng);
                if (object.time != null)
                    if ($util.Long)
                        message.time = $util.Long.fromValue(object.time, false);
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
                if (object.exportedAt != null)
                    if ($util.Long)
                        message.exportedAt = $util.Long.fromValue(object.exportedAt, false);
                    else if (typeof object.exportedAt === "string")
                        message.exportedAt = parseInt(object.exportedAt, 10);
                    else if (typeof object.exportedAt === "number")
                        message.exportedAt = object.exportedAt;
                    else if (typeof object.exportedAt === "object")
                        message.exportedAt = new $util.LongBits(object.exportedAt.low >>> 0, object.exportedAt.high >>> 0).toNumber();
                if (object.portExport != null)
                    message.portExport = String(object.portExport);
                if (object.hauls) {
                    if (!Array.isArray(object.hauls))
                        throw TypeError(".smartboat.sync.PurchasingLogSync.hauls: array expected");
                    message.hauls = [];
                    for (var i = 0; i < object.hauls.length; ++i) {
                        if (!$util.isObject(object.hauls[i]))
                            throw TypeError(".smartboat.sync.PurchasingLogSync.hauls: object expected");
                        message.hauls[i] = $root.smartboat.sync.MiningHaul.fromObject(object.hauls[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PurchasingLogSync message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {smartboat.sync.PurchasingLogSync} message PurchasingLogSync
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PurchasingLogSync.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.hauls = [];
                if (options.defaults) {
                    object.id = 0;
                    object.type = 0;
                    object.purchasingShipId = 0;
                    object.saleShipId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seaTripId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.seaTripId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.saleSeaTripId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.saleSeaTripId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.status = 0;
                    object.captainName = "";
                    object.lat = 0;
                    object.lng = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.time = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.exportedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.exportedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.portExport = "";
                }
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    object.type = message.type;
                if (message.purchasingShipId != null && Object.hasOwnProperty.call(message, "purchasingShipId"))
                    object.purchasingShipId = message.purchasingShipId;
                if (message.saleShipId != null && Object.hasOwnProperty.call(message, "saleShipId"))
                    object.saleShipId = message.saleShipId;
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.seaTripId = typeof message.seaTripId === "number" ? BigInt(message.seaTripId) : $util.Long.fromBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0, false).toBigInt();
                    else if (typeof message.seaTripId === "number")
                        object.seaTripId = options.longs === String ? String(message.seaTripId) : message.seaTripId;
                    else
                        object.seaTripId = options.longs === String ? $util.Long.prototype.toString.call(message.seaTripId) : options.longs === Number ? new $util.LongBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0).toNumber() : message.seaTripId;
                if (message.saleSeaTripId != null && Object.hasOwnProperty.call(message, "saleSeaTripId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.saleSeaTripId = typeof message.saleSeaTripId === "number" ? BigInt(message.saleSeaTripId) : $util.Long.fromBits(message.saleSeaTripId.low >>> 0, message.saleSeaTripId.high >>> 0, false).toBigInt();
                    else if (typeof message.saleSeaTripId === "number")
                        object.saleSeaTripId = options.longs === String ? String(message.saleSeaTripId) : message.saleSeaTripId;
                    else
                        object.saleSeaTripId = options.longs === String ? $util.Long.prototype.toString.call(message.saleSeaTripId) : options.longs === Number ? new $util.LongBits(message.saleSeaTripId.low >>> 0, message.saleSeaTripId.high >>> 0).toNumber() : message.saleSeaTripId;
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                if (message.captainName != null && Object.hasOwnProperty.call(message, "captainName"))
                    object.captainName = message.captainName;
                if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                    object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
                if (message.lng != null && Object.hasOwnProperty.call(message, "lng"))
                    object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.time = typeof message.time === "number" ? BigInt(message.time) : $util.Long.fromBits(message.time.low >>> 0, message.time.high >>> 0, false).toBigInt();
                    else if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
                if (message.exportedAt != null && Object.hasOwnProperty.call(message, "exportedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.exportedAt = typeof message.exportedAt === "number" ? BigInt(message.exportedAt) : $util.Long.fromBits(message.exportedAt.low >>> 0, message.exportedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.exportedAt === "number")
                        object.exportedAt = options.longs === String ? String(message.exportedAt) : message.exportedAt;
                    else
                        object.exportedAt = options.longs === String ? $util.Long.prototype.toString.call(message.exportedAt) : options.longs === Number ? new $util.LongBits(message.exportedAt.low >>> 0, message.exportedAt.high >>> 0).toNumber() : message.exportedAt;
                if (message.portExport != null && Object.hasOwnProperty.call(message, "portExport"))
                    object.portExport = message.portExport;
                if (message.hauls && message.hauls.length) {
                    object.hauls = [];
                    for (var j = 0; j < message.hauls.length; ++j)
                        object.hauls[j] = $root.smartboat.sync.MiningHaul.toObject(message.hauls[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this PurchasingLogSync to JSON.
             * @function toJSON
             * @memberof smartboat.sync.PurchasingLogSync
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PurchasingLogSync.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PurchasingLogSync
             * @function getTypeUrl
             * @memberof smartboat.sync.PurchasingLogSync
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PurchasingLogSync.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.PurchasingLogSync";
            };

            return PurchasingLogSync;
        })();

        sync.SyncLogsRequest = (function() {

            /**
             * Properties of a SyncLogsRequest.
             * @memberof smartboat.sync
             * @interface ISyncLogsRequest
             * @property {number|null} [shipId] SyncLogsRequest shipId
             * @property {number|Long|null} [seaTripId] SyncLogsRequest seaTripId
             * @property {Array.<smartboat.sync.IFishingLogSync>|null} [fishingLogs] SyncLogsRequest fishingLogs
             * @property {Array.<smartboat.sync.IPurchasingLogSync>|null} [purchasingLogs] SyncLogsRequest purchasingLogs
             */

            /**
             * Constructs a new SyncLogsRequest.
             * @memberof smartboat.sync
             * @classdesc Represents a SyncLogsRequest.
             * @implements ISyncLogsRequest
             * @constructor
             * @param {smartboat.sync.ISyncLogsRequest=} [properties] Properties to set
             */
            function SyncLogsRequest(properties) {
                this.fishingLogs = [];
                this.purchasingLogs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SyncLogsRequest shipId.
             * @member {number} shipId
             * @memberof smartboat.sync.SyncLogsRequest
             * @instance
             */
            SyncLogsRequest.prototype.shipId = 0;

            /**
             * SyncLogsRequest seaTripId.
             * @member {number|Long} seaTripId
             * @memberof smartboat.sync.SyncLogsRequest
             * @instance
             */
            SyncLogsRequest.prototype.seaTripId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SyncLogsRequest fishingLogs.
             * @member {Array.<smartboat.sync.IFishingLogSync>} fishingLogs
             * @memberof smartboat.sync.SyncLogsRequest
             * @instance
             */
            SyncLogsRequest.prototype.fishingLogs = $util.emptyArray;

            /**
             * SyncLogsRequest purchasingLogs.
             * @member {Array.<smartboat.sync.IPurchasingLogSync>} purchasingLogs
             * @memberof smartboat.sync.SyncLogsRequest
             * @instance
             */
            SyncLogsRequest.prototype.purchasingLogs = $util.emptyArray;

            /**
             * Creates a new SyncLogsRequest instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {smartboat.sync.ISyncLogsRequest=} [properties] Properties to set
             * @returns {smartboat.sync.SyncLogsRequest} SyncLogsRequest instance
             */
            SyncLogsRequest.create = function create(properties) {
                return new SyncLogsRequest(properties);
            };

            /**
             * Encodes the specified SyncLogsRequest message. Does not implicitly {@link smartboat.sync.SyncLogsRequest.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {smartboat.sync.ISyncLogsRequest} message SyncLogsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncLogsRequest.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shipId);
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seaTripId);
                if (message.fishingLogs != null && message.fishingLogs.length)
                    for (var i = 0; i < message.fishingLogs.length; ++i)
                        $root.smartboat.sync.FishingLogSync.encode(message.fishingLogs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), q + 1).ldelim();
                if (message.purchasingLogs != null && message.purchasingLogs.length)
                    for (var i = 0; i < message.purchasingLogs.length; ++i)
                        $root.smartboat.sync.PurchasingLogSync.encode(message.purchasingLogs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SyncLogsRequest message, length delimited. Does not implicitly {@link smartboat.sync.SyncLogsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {smartboat.sync.ISyncLogsRequest} message SyncLogsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncLogsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SyncLogsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.SyncLogsRequest} SyncLogsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncLogsRequest.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.SyncLogsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shipId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.seaTripId = reader.int64();
                            break;
                        }
                    case 3: {
                            if (!(message.fishingLogs && message.fishingLogs.length))
                                message.fishingLogs = [];
                            message.fishingLogs.push($root.smartboat.sync.FishingLogSync.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    case 4: {
                            if (!(message.purchasingLogs && message.purchasingLogs.length))
                                message.purchasingLogs = [];
                            message.purchasingLogs.push($root.smartboat.sync.PurchasingLogSync.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SyncLogsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.SyncLogsRequest} SyncLogsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncLogsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SyncLogsRequest message.
             * @function verify
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SyncLogsRequest.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    if (!$util.isInteger(message.shipId))
                        return "shipId: integer expected";
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (!$util.isInteger(message.seaTripId) && !(message.seaTripId && $util.isInteger(message.seaTripId.low) && $util.isInteger(message.seaTripId.high)))
                        return "seaTripId: integer|Long expected";
                if (message.fishingLogs != null && Object.hasOwnProperty.call(message, "fishingLogs")) {
                    if (!Array.isArray(message.fishingLogs))
                        return "fishingLogs: array expected";
                    for (var i = 0; i < message.fishingLogs.length; ++i) {
                        var error = $root.smartboat.sync.FishingLogSync.verify(message.fishingLogs[i], long + 1);
                        if (error)
                            return "fishingLogs." + error;
                    }
                }
                if (message.purchasingLogs != null && Object.hasOwnProperty.call(message, "purchasingLogs")) {
                    if (!Array.isArray(message.purchasingLogs))
                        return "purchasingLogs: array expected";
                    for (var i = 0; i < message.purchasingLogs.length; ++i) {
                        var error = $root.smartboat.sync.PurchasingLogSync.verify(message.purchasingLogs[i], long + 1);
                        if (error)
                            return "purchasingLogs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SyncLogsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.SyncLogsRequest} SyncLogsRequest
             */
            SyncLogsRequest.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.SyncLogsRequest)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.SyncLogsRequest: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.SyncLogsRequest();
                if (object.shipId != null)
                    message.shipId = object.shipId | 0;
                if (object.seaTripId != null)
                    if ($util.Long)
                        message.seaTripId = $util.Long.fromValue(object.seaTripId, false);
                    else if (typeof object.seaTripId === "string")
                        message.seaTripId = parseInt(object.seaTripId, 10);
                    else if (typeof object.seaTripId === "number")
                        message.seaTripId = object.seaTripId;
                    else if (typeof object.seaTripId === "object")
                        message.seaTripId = new $util.LongBits(object.seaTripId.low >>> 0, object.seaTripId.high >>> 0).toNumber();
                if (object.fishingLogs) {
                    if (!Array.isArray(object.fishingLogs))
                        throw TypeError(".smartboat.sync.SyncLogsRequest.fishingLogs: array expected");
                    message.fishingLogs = [];
                    for (var i = 0; i < object.fishingLogs.length; ++i) {
                        if (!$util.isObject(object.fishingLogs[i]))
                            throw TypeError(".smartboat.sync.SyncLogsRequest.fishingLogs: object expected");
                        message.fishingLogs[i] = $root.smartboat.sync.FishingLogSync.fromObject(object.fishingLogs[i], long + 1);
                    }
                }
                if (object.purchasingLogs) {
                    if (!Array.isArray(object.purchasingLogs))
                        throw TypeError(".smartboat.sync.SyncLogsRequest.purchasingLogs: array expected");
                    message.purchasingLogs = [];
                    for (var i = 0; i < object.purchasingLogs.length; ++i) {
                        if (!$util.isObject(object.purchasingLogs[i]))
                            throw TypeError(".smartboat.sync.SyncLogsRequest.purchasingLogs: object expected");
                        message.purchasingLogs[i] = $root.smartboat.sync.PurchasingLogSync.fromObject(object.purchasingLogs[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SyncLogsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {smartboat.sync.SyncLogsRequest} message SyncLogsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SyncLogsRequest.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults) {
                    object.fishingLogs = [];
                    object.purchasingLogs = [];
                }
                if (options.defaults) {
                    object.shipId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seaTripId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.seaTripId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                }
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    object.shipId = message.shipId;
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.seaTripId = typeof message.seaTripId === "number" ? BigInt(message.seaTripId) : $util.Long.fromBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0, false).toBigInt();
                    else if (typeof message.seaTripId === "number")
                        object.seaTripId = options.longs === String ? String(message.seaTripId) : message.seaTripId;
                    else
                        object.seaTripId = options.longs === String ? $util.Long.prototype.toString.call(message.seaTripId) : options.longs === Number ? new $util.LongBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0).toNumber() : message.seaTripId;
                if (message.fishingLogs && message.fishingLogs.length) {
                    object.fishingLogs = [];
                    for (var j = 0; j < message.fishingLogs.length; ++j)
                        object.fishingLogs[j] = $root.smartboat.sync.FishingLogSync.toObject(message.fishingLogs[j], options, q + 1);
                }
                if (message.purchasingLogs && message.purchasingLogs.length) {
                    object.purchasingLogs = [];
                    for (var j = 0; j < message.purchasingLogs.length; ++j)
                        object.purchasingLogs[j] = $root.smartboat.sync.PurchasingLogSync.toObject(message.purchasingLogs[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this SyncLogsRequest to JSON.
             * @function toJSON
             * @memberof smartboat.sync.SyncLogsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SyncLogsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SyncLogsRequest
             * @function getTypeUrl
             * @memberof smartboat.sync.SyncLogsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SyncLogsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.SyncLogsRequest";
            };

            return SyncLogsRequest;
        })();

        sync.SyncLogsResponse = (function() {

            /**
             * Properties of a SyncLogsResponse.
             * @memberof smartboat.sync
             * @interface ISyncLogsResponse
             * @property {boolean|null} [success] SyncLogsResponse success
             * @property {number|null} [syncedFishingCount] SyncLogsResponse syncedFishingCount
             * @property {number|null} [syncedPurchasingCount] SyncLogsResponse syncedPurchasingCount
             * @property {number|Long|null} [serverTime] SyncLogsResponse serverTime
             * @property {string|null} [message] SyncLogsResponse message
             */

            /**
             * Constructs a new SyncLogsResponse.
             * @memberof smartboat.sync
             * @classdesc Represents a SyncLogsResponse.
             * @implements ISyncLogsResponse
             * @constructor
             * @param {smartboat.sync.ISyncLogsResponse=} [properties] Properties to set
             */
            function SyncLogsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SyncLogsResponse success.
             * @member {boolean} success
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             */
            SyncLogsResponse.prototype.success = false;

            /**
             * SyncLogsResponse syncedFishingCount.
             * @member {number} syncedFishingCount
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             */
            SyncLogsResponse.prototype.syncedFishingCount = 0;

            /**
             * SyncLogsResponse syncedPurchasingCount.
             * @member {number} syncedPurchasingCount
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             */
            SyncLogsResponse.prototype.syncedPurchasingCount = 0;

            /**
             * SyncLogsResponse serverTime.
             * @member {number|Long} serverTime
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             */
            SyncLogsResponse.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * SyncLogsResponse message.
             * @member {string} message
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             */
            SyncLogsResponse.prototype.message = "";

            /**
             * Creates a new SyncLogsResponse instance using the specified properties.
             * @function create
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {smartboat.sync.ISyncLogsResponse=} [properties] Properties to set
             * @returns {smartboat.sync.SyncLogsResponse} SyncLogsResponse instance
             */
            SyncLogsResponse.create = function create(properties) {
                return new SyncLogsResponse(properties);
            };

            /**
             * Encodes the specified SyncLogsResponse message. Does not implicitly {@link smartboat.sync.SyncLogsResponse.verify|verify} messages.
             * @function encode
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {smartboat.sync.ISyncLogsResponse} message SyncLogsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncLogsResponse.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                if (message.syncedFishingCount != null && Object.hasOwnProperty.call(message, "syncedFishingCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.syncedFishingCount);
                if (message.syncedPurchasingCount != null && Object.hasOwnProperty.call(message, "syncedPurchasingCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.syncedPurchasingCount);
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.serverTime);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified SyncLogsResponse message, length delimited. Does not implicitly {@link smartboat.sync.SyncLogsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {smartboat.sync.ISyncLogsResponse} message SyncLogsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SyncLogsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SyncLogsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.sync.SyncLogsResponse} SyncLogsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncLogsResponse.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.sync.SyncLogsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    case 2: {
                            message.syncedFishingCount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.syncedPurchasingCount = reader.int32();
                            break;
                        }
                    case 4: {
                            message.serverTime = reader.int64();
                            break;
                        }
                    case 5: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SyncLogsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.sync.SyncLogsResponse} SyncLogsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SyncLogsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SyncLogsResponse message.
             * @function verify
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SyncLogsResponse.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                if (message.syncedFishingCount != null && Object.hasOwnProperty.call(message, "syncedFishingCount"))
                    if (!$util.isInteger(message.syncedFishingCount))
                        return "syncedFishingCount: integer expected";
                if (message.syncedPurchasingCount != null && Object.hasOwnProperty.call(message, "syncedPurchasingCount"))
                    if (!$util.isInteger(message.syncedPurchasingCount))
                        return "syncedPurchasingCount: integer expected";
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                        return "serverTime: integer|Long expected";
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a SyncLogsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.sync.SyncLogsResponse} SyncLogsResponse
             */
            SyncLogsResponse.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.sync.SyncLogsResponse)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.sync.SyncLogsResponse: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.sync.SyncLogsResponse();
                if (object.success != null)
                    message.success = Boolean(object.success);
                if (object.syncedFishingCount != null)
                    message.syncedFishingCount = object.syncedFishingCount | 0;
                if (object.syncedPurchasingCount != null)
                    message.syncedPurchasingCount = object.syncedPurchasingCount | 0;
                if (object.serverTime != null)
                    if ($util.Long)
                        message.serverTime = $util.Long.fromValue(object.serverTime, false);
                    else if (typeof object.serverTime === "string")
                        message.serverTime = parseInt(object.serverTime, 10);
                    else if (typeof object.serverTime === "number")
                        message.serverTime = object.serverTime;
                    else if (typeof object.serverTime === "object")
                        message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a SyncLogsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {smartboat.sync.SyncLogsResponse} message SyncLogsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SyncLogsResponse.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.success = false;
                    object.syncedFishingCount = 0;
                    object.syncedPurchasingCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.serverTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.message = "";
                }
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    object.success = message.success;
                if (message.syncedFishingCount != null && Object.hasOwnProperty.call(message, "syncedFishingCount"))
                    object.syncedFishingCount = message.syncedFishingCount;
                if (message.syncedPurchasingCount != null && Object.hasOwnProperty.call(message, "syncedPurchasingCount"))
                    object.syncedPurchasingCount = message.syncedPurchasingCount;
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.serverTime = typeof message.serverTime === "number" ? BigInt(message.serverTime) : $util.Long.fromBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0, false).toBigInt();
                    else if (typeof message.serverTime === "number")
                        object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                    else
                        object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this SyncLogsResponse to JSON.
             * @function toJSON
             * @memberof smartboat.sync.SyncLogsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SyncLogsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SyncLogsResponse
             * @function getTypeUrl
             * @memberof smartboat.sync.SyncLogsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SyncLogsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.sync.SyncLogsResponse";
            };

            return SyncLogsResponse;
        })();

        return sync;
    })();

    smartboat.telemetry = (function() {

        /**
         * Namespace telemetry.
         * @memberof smartboat
         * @namespace
         */
        var telemetry = {};

        telemetry.GpsPoint = (function() {

            /**
             * Properties of a GpsPoint.
             * @memberof smartboat.telemetry
             * @interface IGpsPoint
             * @property {number|null} [latitude] GpsPoint latitude
             * @property {number|null} [longitude] GpsPoint longitude
             * @property {number|null} [speed] GpsPoint speed
             * @property {number|null} [heading] GpsPoint heading
             * @property {number|Long|null} [recordedAt] GpsPoint recordedAt
             * @property {number|null} [accuracy] GpsPoint accuracy
             * @property {number|null} [batteryLevel] GpsPoint batteryLevel
             * @property {number|null} [status] GpsPoint status
             */

            /**
             * Constructs a new GpsPoint.
             * @memberof smartboat.telemetry
             * @classdesc Represents a GpsPoint.
             * @implements IGpsPoint
             * @constructor
             * @param {smartboat.telemetry.IGpsPoint=} [properties] Properties to set
             */
            function GpsPoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GpsPoint latitude.
             * @member {number} latitude
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.latitude = 0;

            /**
             * GpsPoint longitude.
             * @member {number} longitude
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.longitude = 0;

            /**
             * GpsPoint speed.
             * @member {number} speed
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.speed = 0;

            /**
             * GpsPoint heading.
             * @member {number} heading
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.heading = 0;

            /**
             * GpsPoint recordedAt.
             * @member {number|Long} recordedAt
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.recordedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GpsPoint accuracy.
             * @member {number} accuracy
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.accuracy = 0;

            /**
             * GpsPoint batteryLevel.
             * @member {number} batteryLevel
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.batteryLevel = 0;

            /**
             * GpsPoint status.
             * @member {number} status
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             */
            GpsPoint.prototype.status = 0;

            /**
             * Creates a new GpsPoint instance using the specified properties.
             * @function create
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {smartboat.telemetry.IGpsPoint=} [properties] Properties to set
             * @returns {smartboat.telemetry.GpsPoint} GpsPoint instance
             */
            GpsPoint.create = function create(properties) {
                return new GpsPoint(properties);
            };

            /**
             * Encodes the specified GpsPoint message. Does not implicitly {@link smartboat.telemetry.GpsPoint.verify|verify} messages.
             * @function encode
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {smartboat.telemetry.IGpsPoint} message GpsPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsPoint.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.speed);
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.heading);
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.recordedAt);
                if (message.accuracy != null && Object.hasOwnProperty.call(message, "accuracy"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.accuracy);
                if (message.batteryLevel != null && Object.hasOwnProperty.call(message, "batteryLevel"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.batteryLevel);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified GpsPoint message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsPoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {smartboat.telemetry.IGpsPoint} message GpsPoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GpsPoint message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.telemetry.GpsPoint} GpsPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsPoint.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.telemetry.GpsPoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.latitude = reader.double();
                            break;
                        }
                    case 2: {
                            message.longitude = reader.double();
                            break;
                        }
                    case 3: {
                            message.speed = reader.float();
                            break;
                        }
                    case 4: {
                            message.heading = reader.float();
                            break;
                        }
                    case 5: {
                            message.recordedAt = reader.int64();
                            break;
                        }
                    case 6: {
                            message.accuracy = reader.float();
                            break;
                        }
                    case 7: {
                            message.batteryLevel = reader.int32();
                            break;
                        }
                    case 8: {
                            message.status = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GpsPoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.telemetry.GpsPoint} GpsPoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GpsPoint message.
             * @function verify
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GpsPoint.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    if (typeof message.speed !== "number")
                        return "speed: number expected";
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    if (typeof message.heading !== "number")
                        return "heading: number expected";
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    if (!$util.isInteger(message.recordedAt) && !(message.recordedAt && $util.isInteger(message.recordedAt.low) && $util.isInteger(message.recordedAt.high)))
                        return "recordedAt: integer|Long expected";
                if (message.accuracy != null && Object.hasOwnProperty.call(message, "accuracy"))
                    if (typeof message.accuracy !== "number")
                        return "accuracy: number expected";
                if (message.batteryLevel != null && Object.hasOwnProperty.call(message, "batteryLevel"))
                    if (!$util.isInteger(message.batteryLevel))
                        return "batteryLevel: integer expected";
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates a GpsPoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.telemetry.GpsPoint} GpsPoint
             */
            GpsPoint.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.telemetry.GpsPoint)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.telemetry.GpsPoint: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.telemetry.GpsPoint();
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                if (object.speed != null)
                    message.speed = Number(object.speed);
                if (object.heading != null)
                    message.heading = Number(object.heading);
                if (object.recordedAt != null)
                    if ($util.Long)
                        message.recordedAt = $util.Long.fromValue(object.recordedAt, false);
                    else if (typeof object.recordedAt === "string")
                        message.recordedAt = parseInt(object.recordedAt, 10);
                    else if (typeof object.recordedAt === "number")
                        message.recordedAt = object.recordedAt;
                    else if (typeof object.recordedAt === "object")
                        message.recordedAt = new $util.LongBits(object.recordedAt.low >>> 0, object.recordedAt.high >>> 0).toNumber();
                if (object.accuracy != null)
                    message.accuracy = Number(object.accuracy);
                if (object.batteryLevel != null)
                    message.batteryLevel = object.batteryLevel | 0;
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };

            /**
             * Creates a plain object from a GpsPoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {smartboat.telemetry.GpsPoint} message GpsPoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GpsPoint.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.latitude = 0;
                    object.longitude = 0;
                    object.speed = 0;
                    object.heading = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.recordedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.recordedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.accuracy = 0;
                    object.batteryLevel = 0;
                    object.status = 0;
                }
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    object.heading = options.json && !isFinite(message.heading) ? String(message.heading) : message.heading;
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.recordedAt = typeof message.recordedAt === "number" ? BigInt(message.recordedAt) : $util.Long.fromBits(message.recordedAt.low >>> 0, message.recordedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.recordedAt === "number")
                        object.recordedAt = options.longs === String ? String(message.recordedAt) : message.recordedAt;
                    else
                        object.recordedAt = options.longs === String ? $util.Long.prototype.toString.call(message.recordedAt) : options.longs === Number ? new $util.LongBits(message.recordedAt.low >>> 0, message.recordedAt.high >>> 0).toNumber() : message.recordedAt;
                if (message.accuracy != null && Object.hasOwnProperty.call(message, "accuracy"))
                    object.accuracy = options.json && !isFinite(message.accuracy) ? String(message.accuracy) : message.accuracy;
                if (message.batteryLevel != null && Object.hasOwnProperty.call(message, "batteryLevel"))
                    object.batteryLevel = message.batteryLevel;
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this GpsPoint to JSON.
             * @function toJSON
             * @memberof smartboat.telemetry.GpsPoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GpsPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GpsPoint
             * @function getTypeUrl
             * @memberof smartboat.telemetry.GpsPoint
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GpsPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.telemetry.GpsPoint";
            };

            return GpsPoint;
        })();

        telemetry.GpsBatchRequest = (function() {

            /**
             * Properties of a GpsBatchRequest.
             * @memberof smartboat.telemetry
             * @interface IGpsBatchRequest
             * @property {number|null} [shipId] GpsBatchRequest shipId
             * @property {number|Long|null} [seaTripId] GpsBatchRequest seaTripId
             * @property {Array.<smartboat.telemetry.IGpsPoint>|null} [points] GpsBatchRequest points
             * @property {string|null} [deviceId] GpsBatchRequest deviceId
             */

            /**
             * Constructs a new GpsBatchRequest.
             * @memberof smartboat.telemetry
             * @classdesc Represents a GpsBatchRequest.
             * @implements IGpsBatchRequest
             * @constructor
             * @param {smartboat.telemetry.IGpsBatchRequest=} [properties] Properties to set
             */
            function GpsBatchRequest(properties) {
                this.points = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GpsBatchRequest shipId.
             * @member {number} shipId
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @instance
             */
            GpsBatchRequest.prototype.shipId = 0;

            /**
             * GpsBatchRequest seaTripId.
             * @member {number|Long} seaTripId
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @instance
             */
            GpsBatchRequest.prototype.seaTripId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GpsBatchRequest points.
             * @member {Array.<smartboat.telemetry.IGpsPoint>} points
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @instance
             */
            GpsBatchRequest.prototype.points = $util.emptyArray;

            /**
             * GpsBatchRequest deviceId.
             * @member {string} deviceId
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @instance
             */
            GpsBatchRequest.prototype.deviceId = "";

            /**
             * Creates a new GpsBatchRequest instance using the specified properties.
             * @function create
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {smartboat.telemetry.IGpsBatchRequest=} [properties] Properties to set
             * @returns {smartboat.telemetry.GpsBatchRequest} GpsBatchRequest instance
             */
            GpsBatchRequest.create = function create(properties) {
                return new GpsBatchRequest(properties);
            };

            /**
             * Encodes the specified GpsBatchRequest message. Does not implicitly {@link smartboat.telemetry.GpsBatchRequest.verify|verify} messages.
             * @function encode
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {smartboat.telemetry.IGpsBatchRequest} message GpsBatchRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsBatchRequest.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shipId);
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seaTripId);
                if (message.points != null && message.points.length)
                    for (var i = 0; i < message.points.length; ++i)
                        $root.smartboat.telemetry.GpsPoint.encode(message.points[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), q + 1).ldelim();
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
                return writer;
            };

            /**
             * Encodes the specified GpsBatchRequest message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsBatchRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {smartboat.telemetry.IGpsBatchRequest} message GpsBatchRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsBatchRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GpsBatchRequest message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.telemetry.GpsBatchRequest} GpsBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsBatchRequest.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.telemetry.GpsBatchRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shipId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.seaTripId = reader.int64();
                            break;
                        }
                    case 3: {
                            if (!(message.points && message.points.length))
                                message.points = [];
                            message.points.push($root.smartboat.telemetry.GpsPoint.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    case 4: {
                            message.deviceId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GpsBatchRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.telemetry.GpsBatchRequest} GpsBatchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsBatchRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GpsBatchRequest message.
             * @function verify
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GpsBatchRequest.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    if (!$util.isInteger(message.shipId))
                        return "shipId: integer expected";
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (!$util.isInteger(message.seaTripId) && !(message.seaTripId && $util.isInteger(message.seaTripId.low) && $util.isInteger(message.seaTripId.high)))
                        return "seaTripId: integer|Long expected";
                if (message.points != null && Object.hasOwnProperty.call(message, "points")) {
                    if (!Array.isArray(message.points))
                        return "points: array expected";
                    for (var i = 0; i < message.points.length; ++i) {
                        var error = $root.smartboat.telemetry.GpsPoint.verify(message.points[i], long + 1);
                        if (error)
                            return "points." + error;
                    }
                }
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                return null;
            };

            /**
             * Creates a GpsBatchRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.telemetry.GpsBatchRequest} GpsBatchRequest
             */
            GpsBatchRequest.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.telemetry.GpsBatchRequest)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.telemetry.GpsBatchRequest: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.telemetry.GpsBatchRequest();
                if (object.shipId != null)
                    message.shipId = object.shipId | 0;
                if (object.seaTripId != null)
                    if ($util.Long)
                        message.seaTripId = $util.Long.fromValue(object.seaTripId, false);
                    else if (typeof object.seaTripId === "string")
                        message.seaTripId = parseInt(object.seaTripId, 10);
                    else if (typeof object.seaTripId === "number")
                        message.seaTripId = object.seaTripId;
                    else if (typeof object.seaTripId === "object")
                        message.seaTripId = new $util.LongBits(object.seaTripId.low >>> 0, object.seaTripId.high >>> 0).toNumber();
                if (object.points) {
                    if (!Array.isArray(object.points))
                        throw TypeError(".smartboat.telemetry.GpsBatchRequest.points: array expected");
                    message.points = [];
                    for (var i = 0; i < object.points.length; ++i) {
                        if (!$util.isObject(object.points[i]))
                            throw TypeError(".smartboat.telemetry.GpsBatchRequest.points: object expected");
                        message.points[i] = $root.smartboat.telemetry.GpsPoint.fromObject(object.points[i], long + 1);
                    }
                }
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                return message;
            };

            /**
             * Creates a plain object from a GpsBatchRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {smartboat.telemetry.GpsBatchRequest} message GpsBatchRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GpsBatchRequest.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.points = [];
                if (options.defaults) {
                    object.shipId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seaTripId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.seaTripId = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.deviceId = "";
                }
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    object.shipId = message.shipId;
                if (message.seaTripId != null && Object.hasOwnProperty.call(message, "seaTripId"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.seaTripId = typeof message.seaTripId === "number" ? BigInt(message.seaTripId) : $util.Long.fromBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0, false).toBigInt();
                    else if (typeof message.seaTripId === "number")
                        object.seaTripId = options.longs === String ? String(message.seaTripId) : message.seaTripId;
                    else
                        object.seaTripId = options.longs === String ? $util.Long.prototype.toString.call(message.seaTripId) : options.longs === Number ? new $util.LongBits(message.seaTripId.low >>> 0, message.seaTripId.high >>> 0).toNumber() : message.seaTripId;
                if (message.points && message.points.length) {
                    object.points = [];
                    for (var j = 0; j < message.points.length; ++j)
                        object.points[j] = $root.smartboat.telemetry.GpsPoint.toObject(message.points[j], options, q + 1);
                }
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    object.deviceId = message.deviceId;
                return object;
            };

            /**
             * Converts this GpsBatchRequest to JSON.
             * @function toJSON
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GpsBatchRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GpsBatchRequest
             * @function getTypeUrl
             * @memberof smartboat.telemetry.GpsBatchRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GpsBatchRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.telemetry.GpsBatchRequest";
            };

            return GpsBatchRequest;
        })();

        telemetry.GpsBatchResponse = (function() {

            /**
             * Properties of a GpsBatchResponse.
             * @memberof smartboat.telemetry
             * @interface IGpsBatchResponse
             * @property {boolean|null} [success] GpsBatchResponse success
             * @property {number|null} [processedCount] GpsBatchResponse processedCount
             * @property {number|Long|null} [serverTime] GpsBatchResponse serverTime
             * @property {string|null} [message] GpsBatchResponse message
             */

            /**
             * Constructs a new GpsBatchResponse.
             * @memberof smartboat.telemetry
             * @classdesc Represents a GpsBatchResponse.
             * @implements IGpsBatchResponse
             * @constructor
             * @param {smartboat.telemetry.IGpsBatchResponse=} [properties] Properties to set
             */
            function GpsBatchResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GpsBatchResponse success.
             * @member {boolean} success
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @instance
             */
            GpsBatchResponse.prototype.success = false;

            /**
             * GpsBatchResponse processedCount.
             * @member {number} processedCount
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @instance
             */
            GpsBatchResponse.prototype.processedCount = 0;

            /**
             * GpsBatchResponse serverTime.
             * @member {number|Long} serverTime
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @instance
             */
            GpsBatchResponse.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GpsBatchResponse message.
             * @member {string} message
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @instance
             */
            GpsBatchResponse.prototype.message = "";

            /**
             * Creates a new GpsBatchResponse instance using the specified properties.
             * @function create
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {smartboat.telemetry.IGpsBatchResponse=} [properties] Properties to set
             * @returns {smartboat.telemetry.GpsBatchResponse} GpsBatchResponse instance
             */
            GpsBatchResponse.create = function create(properties) {
                return new GpsBatchResponse(properties);
            };

            /**
             * Encodes the specified GpsBatchResponse message. Does not implicitly {@link smartboat.telemetry.GpsBatchResponse.verify|verify} messages.
             * @function encode
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {smartboat.telemetry.IGpsBatchResponse} message GpsBatchResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsBatchResponse.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                if (message.processedCount != null && Object.hasOwnProperty.call(message, "processedCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.processedCount);
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.serverTime);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified GpsBatchResponse message, length delimited. Does not implicitly {@link smartboat.telemetry.GpsBatchResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {smartboat.telemetry.IGpsBatchResponse} message GpsBatchResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GpsBatchResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GpsBatchResponse message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.telemetry.GpsBatchResponse} GpsBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsBatchResponse.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.telemetry.GpsBatchResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    case 2: {
                            message.processedCount = reader.int32();
                            break;
                        }
                    case 3: {
                            message.serverTime = reader.int64();
                            break;
                        }
                    case 4: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GpsBatchResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.telemetry.GpsBatchResponse} GpsBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GpsBatchResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GpsBatchResponse message.
             * @function verify
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GpsBatchResponse.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                if (message.processedCount != null && Object.hasOwnProperty.call(message, "processedCount"))
                    if (!$util.isInteger(message.processedCount))
                        return "processedCount: integer expected";
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                        return "serverTime: integer|Long expected";
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a GpsBatchResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.telemetry.GpsBatchResponse} GpsBatchResponse
             */
            GpsBatchResponse.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.telemetry.GpsBatchResponse)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.telemetry.GpsBatchResponse: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.telemetry.GpsBatchResponse();
                if (object.success != null)
                    message.success = Boolean(object.success);
                if (object.processedCount != null)
                    message.processedCount = object.processedCount | 0;
                if (object.serverTime != null)
                    if ($util.Long)
                        message.serverTime = $util.Long.fromValue(object.serverTime, false);
                    else if (typeof object.serverTime === "string")
                        message.serverTime = parseInt(object.serverTime, 10);
                    else if (typeof object.serverTime === "number")
                        message.serverTime = object.serverTime;
                    else if (typeof object.serverTime === "object")
                        message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a GpsBatchResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {smartboat.telemetry.GpsBatchResponse} message GpsBatchResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GpsBatchResponse.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.success = false;
                    object.processedCount = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.serverTime = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.message = "";
                }
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    object.success = message.success;
                if (message.processedCount != null && Object.hasOwnProperty.call(message, "processedCount"))
                    object.processedCount = message.processedCount;
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.serverTime = typeof message.serverTime === "number" ? BigInt(message.serverTime) : $util.Long.fromBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0, false).toBigInt();
                    else if (typeof message.serverTime === "number")
                        object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                    else
                        object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this GpsBatchResponse to JSON.
             * @function toJSON
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GpsBatchResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GpsBatchResponse
             * @function getTypeUrl
             * @memberof smartboat.telemetry.GpsBatchResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GpsBatchResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.telemetry.GpsBatchResponse";
            };

            return GpsBatchResponse;
        })();

        telemetry.LiveLocationUpdate = (function() {

            /**
             * Properties of a LiveLocationUpdate.
             * @memberof smartboat.telemetry
             * @interface ILiveLocationUpdate
             * @property {number|null} [shipId] LiveLocationUpdate shipId
             * @property {number|null} [cityId] LiveLocationUpdate cityId
             * @property {number|null} [latitude] LiveLocationUpdate latitude
             * @property {number|null} [longitude] LiveLocationUpdate longitude
             * @property {number|null} [speed] LiveLocationUpdate speed
             * @property {number|null} [heading] LiveLocationUpdate heading
             * @property {number|Long|null} [recordedAt] LiveLocationUpdate recordedAt
             * @property {number|null} [status] LiveLocationUpdate status
             */

            /**
             * Constructs a new LiveLocationUpdate.
             * @memberof smartboat.telemetry
             * @classdesc Represents a LiveLocationUpdate.
             * @implements ILiveLocationUpdate
             * @constructor
             * @param {smartboat.telemetry.ILiveLocationUpdate=} [properties] Properties to set
             */
            function LiveLocationUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiveLocationUpdate shipId.
             * @member {number} shipId
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.shipId = 0;

            /**
             * LiveLocationUpdate cityId.
             * @member {number} cityId
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.cityId = 0;

            /**
             * LiveLocationUpdate latitude.
             * @member {number} latitude
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.latitude = 0;

            /**
             * LiveLocationUpdate longitude.
             * @member {number} longitude
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.longitude = 0;

            /**
             * LiveLocationUpdate speed.
             * @member {number} speed
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.speed = 0;

            /**
             * LiveLocationUpdate heading.
             * @member {number} heading
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.heading = 0;

            /**
             * LiveLocationUpdate recordedAt.
             * @member {number|Long} recordedAt
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.recordedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * LiveLocationUpdate status.
             * @member {number} status
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             */
            LiveLocationUpdate.prototype.status = 0;

            /**
             * Creates a new LiveLocationUpdate instance using the specified properties.
             * @function create
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {smartboat.telemetry.ILiveLocationUpdate=} [properties] Properties to set
             * @returns {smartboat.telemetry.LiveLocationUpdate} LiveLocationUpdate instance
             */
            LiveLocationUpdate.create = function create(properties) {
                return new LiveLocationUpdate(properties);
            };

            /**
             * Encodes the specified LiveLocationUpdate message. Does not implicitly {@link smartboat.telemetry.LiveLocationUpdate.verify|verify} messages.
             * @function encode
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {smartboat.telemetry.ILiveLocationUpdate} message LiveLocationUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveLocationUpdate.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shipId);
                if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cityId);
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.longitude);
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    writer.uint32(/* id 5, wireType 5 =*/45).float(message.speed);
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.heading);
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int64(message.recordedAt);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified LiveLocationUpdate message, length delimited. Does not implicitly {@link smartboat.telemetry.LiveLocationUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {smartboat.telemetry.ILiveLocationUpdate} message LiveLocationUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveLocationUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a LiveLocationUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.telemetry.LiveLocationUpdate} LiveLocationUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveLocationUpdate.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.telemetry.LiveLocationUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.shipId = reader.int32();
                            break;
                        }
                    case 2: {
                            message.cityId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.latitude = reader.double();
                            break;
                        }
                    case 4: {
                            message.longitude = reader.double();
                            break;
                        }
                    case 5: {
                            message.speed = reader.float();
                            break;
                        }
                    case 6: {
                            message.heading = reader.float();
                            break;
                        }
                    case 7: {
                            message.recordedAt = reader.int64();
                            break;
                        }
                    case 8: {
                            message.status = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LiveLocationUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.telemetry.LiveLocationUpdate} LiveLocationUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveLocationUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LiveLocationUpdate message.
             * @function verify
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiveLocationUpdate.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    if (!$util.isInteger(message.shipId))
                        return "shipId: integer expected";
                if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                    if (!$util.isInteger(message.cityId))
                        return "cityId: integer expected";
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    if (typeof message.speed !== "number")
                        return "speed: number expected";
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    if (typeof message.heading !== "number")
                        return "heading: number expected";
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    if (!$util.isInteger(message.recordedAt) && !(message.recordedAt && $util.isInteger(message.recordedAt.low) && $util.isInteger(message.recordedAt.high)))
                        return "recordedAt: integer|Long expected";
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            /**
             * Creates a LiveLocationUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.telemetry.LiveLocationUpdate} LiveLocationUpdate
             */
            LiveLocationUpdate.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.telemetry.LiveLocationUpdate)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.telemetry.LiveLocationUpdate: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.telemetry.LiveLocationUpdate();
                if (object.shipId != null)
                    message.shipId = object.shipId | 0;
                if (object.cityId != null)
                    message.cityId = object.cityId | 0;
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                if (object.speed != null)
                    message.speed = Number(object.speed);
                if (object.heading != null)
                    message.heading = Number(object.heading);
                if (object.recordedAt != null)
                    if ($util.Long)
                        message.recordedAt = $util.Long.fromValue(object.recordedAt, false);
                    else if (typeof object.recordedAt === "string")
                        message.recordedAt = parseInt(object.recordedAt, 10);
                    else if (typeof object.recordedAt === "number")
                        message.recordedAt = object.recordedAt;
                    else if (typeof object.recordedAt === "object")
                        message.recordedAt = new $util.LongBits(object.recordedAt.low >>> 0, object.recordedAt.high >>> 0).toNumber();
                if (object.status != null)
                    message.status = object.status | 0;
                return message;
            };

            /**
             * Creates a plain object from a LiveLocationUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {smartboat.telemetry.LiveLocationUpdate} message LiveLocationUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LiveLocationUpdate.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.shipId = 0;
                    object.cityId = 0;
                    object.latitude = 0;
                    object.longitude = 0;
                    object.speed = 0;
                    object.heading = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.recordedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.recordedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.status = 0;
                }
                if (message.shipId != null && Object.hasOwnProperty.call(message, "shipId"))
                    object.shipId = message.shipId;
                if (message.cityId != null && Object.hasOwnProperty.call(message, "cityId"))
                    object.cityId = message.cityId;
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                    object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
                if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                    object.heading = options.json && !isFinite(message.heading) ? String(message.heading) : message.heading;
                if (message.recordedAt != null && Object.hasOwnProperty.call(message, "recordedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.recordedAt = typeof message.recordedAt === "number" ? BigInt(message.recordedAt) : $util.Long.fromBits(message.recordedAt.low >>> 0, message.recordedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.recordedAt === "number")
                        object.recordedAt = options.longs === String ? String(message.recordedAt) : message.recordedAt;
                    else
                        object.recordedAt = options.longs === String ? $util.Long.prototype.toString.call(message.recordedAt) : options.longs === Number ? new $util.LongBits(message.recordedAt.low >>> 0, message.recordedAt.high >>> 0).toNumber() : message.recordedAt;
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this LiveLocationUpdate to JSON.
             * @function toJSON
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LiveLocationUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LiveLocationUpdate
             * @function getTypeUrl
             * @memberof smartboat.telemetry.LiveLocationUpdate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LiveLocationUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.telemetry.LiveLocationUpdate";
            };

            return LiveLocationUpdate;
        })();

        return telemetry;
    })();

    smartboat.zone = (function() {

        /**
         * Namespace zone.
         * @memberof smartboat
         * @namespace
         */
        var zone = {};

        zone.CoordinatePoint = (function() {

            /**
             * Properties of a CoordinatePoint.
             * @memberof smartboat.zone
             * @interface ICoordinatePoint
             * @property {number|null} [latitude] CoordinatePoint latitude
             * @property {number|null} [longitude] CoordinatePoint longitude
             */

            /**
             * Constructs a new CoordinatePoint.
             * @memberof smartboat.zone
             * @classdesc Represents a CoordinatePoint.
             * @implements ICoordinatePoint
             * @constructor
             * @param {smartboat.zone.ICoordinatePoint=} [properties] Properties to set
             */
            function CoordinatePoint(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CoordinatePoint latitude.
             * @member {number} latitude
             * @memberof smartboat.zone.CoordinatePoint
             * @instance
             */
            CoordinatePoint.prototype.latitude = 0;

            /**
             * CoordinatePoint longitude.
             * @member {number} longitude
             * @memberof smartboat.zone.CoordinatePoint
             * @instance
             */
            CoordinatePoint.prototype.longitude = 0;

            /**
             * Creates a new CoordinatePoint instance using the specified properties.
             * @function create
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {smartboat.zone.ICoordinatePoint=} [properties] Properties to set
             * @returns {smartboat.zone.CoordinatePoint} CoordinatePoint instance
             */
            CoordinatePoint.create = function create(properties) {
                return new CoordinatePoint(properties);
            };

            /**
             * Encodes the specified CoordinatePoint message. Does not implicitly {@link smartboat.zone.CoordinatePoint.verify|verify} messages.
             * @function encode
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {smartboat.zone.ICoordinatePoint} message CoordinatePoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CoordinatePoint.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
                return writer;
            };

            /**
             * Encodes the specified CoordinatePoint message, length delimited. Does not implicitly {@link smartboat.zone.CoordinatePoint.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {smartboat.zone.ICoordinatePoint} message CoordinatePoint message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CoordinatePoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a CoordinatePoint message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.zone.CoordinatePoint} CoordinatePoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CoordinatePoint.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.zone.CoordinatePoint();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.latitude = reader.double();
                            break;
                        }
                    case 2: {
                            message.longitude = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CoordinatePoint message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.zone.CoordinatePoint} CoordinatePoint
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CoordinatePoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CoordinatePoint message.
             * @function verify
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CoordinatePoint.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                return null;
            };

            /**
             * Creates a CoordinatePoint message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.zone.CoordinatePoint} CoordinatePoint
             */
            CoordinatePoint.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.zone.CoordinatePoint)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.zone.CoordinatePoint: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.zone.CoordinatePoint();
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                return message;
            };

            /**
             * Creates a plain object from a CoordinatePoint message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {smartboat.zone.CoordinatePoint} message CoordinatePoint
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CoordinatePoint.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    object.latitude = 0;
                    object.longitude = 0;
                }
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                return object;
            };

            /**
             * Converts this CoordinatePoint to JSON.
             * @function toJSON
             * @memberof smartboat.zone.CoordinatePoint
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CoordinatePoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CoordinatePoint
             * @function getTypeUrl
             * @memberof smartboat.zone.CoordinatePoint
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CoordinatePoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.zone.CoordinatePoint";
            };

            return CoordinatePoint;
        })();

        zone.RestrictedZoneItem = (function() {

            /**
             * Properties of a RestrictedZoneItem.
             * @memberof smartboat.zone
             * @interface IRestrictedZoneItem
             * @property {number|null} [id] RestrictedZoneItem id
             * @property {string|null} [name] RestrictedZoneItem name
             * @property {string|null} [code] RestrictedZoneItem code
             * @property {number|null} [zoneType] RestrictedZoneItem zoneType
             * @property {number|Long|null} [validFrom] RestrictedZoneItem validFrom
             * @property {number|Long|null} [validTo] RestrictedZoneItem validTo
             * @property {string|null} [description] RestrictedZoneItem description
             * @property {Array.<smartboat.zone.ICoordinatePoint>|null} [polygon] RestrictedZoneItem polygon
             */

            /**
             * Constructs a new RestrictedZoneItem.
             * @memberof smartboat.zone
             * @classdesc Represents a RestrictedZoneItem.
             * @implements IRestrictedZoneItem
             * @constructor
             * @param {smartboat.zone.IRestrictedZoneItem=} [properties] Properties to set
             */
            function RestrictedZoneItem(properties) {
                this.polygon = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RestrictedZoneItem id.
             * @member {number} id
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.id = 0;

            /**
             * RestrictedZoneItem name.
             * @member {string} name
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.name = "";

            /**
             * RestrictedZoneItem code.
             * @member {string} code
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.code = "";

            /**
             * RestrictedZoneItem zoneType.
             * @member {number} zoneType
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.zoneType = 0;

            /**
             * RestrictedZoneItem validFrom.
             * @member {number|Long} validFrom
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.validFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RestrictedZoneItem validTo.
             * @member {number|Long} validTo
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.validTo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RestrictedZoneItem description.
             * @member {string} description
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.description = "";

            /**
             * RestrictedZoneItem polygon.
             * @member {Array.<smartboat.zone.ICoordinatePoint>} polygon
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             */
            RestrictedZoneItem.prototype.polygon = $util.emptyArray;

            /**
             * Creates a new RestrictedZoneItem instance using the specified properties.
             * @function create
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {smartboat.zone.IRestrictedZoneItem=} [properties] Properties to set
             * @returns {smartboat.zone.RestrictedZoneItem} RestrictedZoneItem instance
             */
            RestrictedZoneItem.create = function create(properties) {
                return new RestrictedZoneItem(properties);
            };

            /**
             * Encodes the specified RestrictedZoneItem message. Does not implicitly {@link smartboat.zone.RestrictedZoneItem.verify|verify} messages.
             * @function encode
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {smartboat.zone.IRestrictedZoneItem} message RestrictedZoneItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestrictedZoneItem.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.code);
                if (message.zoneType != null && Object.hasOwnProperty.call(message, "zoneType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.zoneType);
                if (message.validFrom != null && Object.hasOwnProperty.call(message, "validFrom"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.validFrom);
                if (message.validTo != null && Object.hasOwnProperty.call(message, "validTo"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int64(message.validTo);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                if (message.polygon != null && message.polygon.length)
                    for (var i = 0; i < message.polygon.length; ++i)
                        $root.smartboat.zone.CoordinatePoint.encode(message.polygon[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RestrictedZoneItem message, length delimited. Does not implicitly {@link smartboat.zone.RestrictedZoneItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {smartboat.zone.IRestrictedZoneItem} message RestrictedZoneItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestrictedZoneItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RestrictedZoneItem message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.zone.RestrictedZoneItem} RestrictedZoneItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestrictedZoneItem.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.zone.RestrictedZoneItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.code = reader.string();
                            break;
                        }
                    case 4: {
                            message.zoneType = reader.int32();
                            break;
                        }
                    case 5: {
                            message.validFrom = reader.int64();
                            break;
                        }
                    case 6: {
                            message.validTo = reader.int64();
                            break;
                        }
                    case 7: {
                            message.description = reader.string();
                            break;
                        }
                    case 8: {
                            if (!(message.polygon && message.polygon.length))
                                message.polygon = [];
                            message.polygon.push($root.smartboat.zone.CoordinatePoint.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RestrictedZoneItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.zone.RestrictedZoneItem} RestrictedZoneItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestrictedZoneItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RestrictedZoneItem message.
             * @function verify
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RestrictedZoneItem.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    if (!$util.isString(message.code))
                        return "code: string expected";
                if (message.zoneType != null && Object.hasOwnProperty.call(message, "zoneType"))
                    if (!$util.isInteger(message.zoneType))
                        return "zoneType: integer expected";
                if (message.validFrom != null && Object.hasOwnProperty.call(message, "validFrom"))
                    if (!$util.isInteger(message.validFrom) && !(message.validFrom && $util.isInteger(message.validFrom.low) && $util.isInteger(message.validFrom.high)))
                        return "validFrom: integer|Long expected";
                if (message.validTo != null && Object.hasOwnProperty.call(message, "validTo"))
                    if (!$util.isInteger(message.validTo) && !(message.validTo && $util.isInteger(message.validTo.low) && $util.isInteger(message.validTo.high)))
                        return "validTo: integer|Long expected";
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.polygon != null && Object.hasOwnProperty.call(message, "polygon")) {
                    if (!Array.isArray(message.polygon))
                        return "polygon: array expected";
                    for (var i = 0; i < message.polygon.length; ++i) {
                        var error = $root.smartboat.zone.CoordinatePoint.verify(message.polygon[i], long + 1);
                        if (error)
                            return "polygon." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RestrictedZoneItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.zone.RestrictedZoneItem} RestrictedZoneItem
             */
            RestrictedZoneItem.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.zone.RestrictedZoneItem)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.zone.RestrictedZoneItem: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.zone.RestrictedZoneItem();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.code != null)
                    message.code = String(object.code);
                if (object.zoneType != null)
                    message.zoneType = object.zoneType | 0;
                if (object.validFrom != null)
                    if ($util.Long)
                        message.validFrom = $util.Long.fromValue(object.validFrom, false);
                    else if (typeof object.validFrom === "string")
                        message.validFrom = parseInt(object.validFrom, 10);
                    else if (typeof object.validFrom === "number")
                        message.validFrom = object.validFrom;
                    else if (typeof object.validFrom === "object")
                        message.validFrom = new $util.LongBits(object.validFrom.low >>> 0, object.validFrom.high >>> 0).toNumber();
                if (object.validTo != null)
                    if ($util.Long)
                        message.validTo = $util.Long.fromValue(object.validTo, false);
                    else if (typeof object.validTo === "string")
                        message.validTo = parseInt(object.validTo, 10);
                    else if (typeof object.validTo === "number")
                        message.validTo = object.validTo;
                    else if (typeof object.validTo === "object")
                        message.validTo = new $util.LongBits(object.validTo.low >>> 0, object.validTo.high >>> 0).toNumber();
                if (object.description != null)
                    message.description = String(object.description);
                if (object.polygon) {
                    if (!Array.isArray(object.polygon))
                        throw TypeError(".smartboat.zone.RestrictedZoneItem.polygon: array expected");
                    message.polygon = [];
                    for (var i = 0; i < object.polygon.length; ++i) {
                        if (!$util.isObject(object.polygon[i]))
                            throw TypeError(".smartboat.zone.RestrictedZoneItem.polygon: object expected");
                        message.polygon[i] = $root.smartboat.zone.CoordinatePoint.fromObject(object.polygon[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RestrictedZoneItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {smartboat.zone.RestrictedZoneItem} message RestrictedZoneItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RestrictedZoneItem.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.polygon = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                    object.code = "";
                    object.zoneType = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.validFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.validFrom = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.validTo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.validTo = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                    object.description = "";
                }
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    object.id = message.id;
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    object.name = message.name;
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    object.code = message.code;
                if (message.zoneType != null && Object.hasOwnProperty.call(message, "zoneType"))
                    object.zoneType = message.zoneType;
                if (message.validFrom != null && Object.hasOwnProperty.call(message, "validFrom"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.validFrom = typeof message.validFrom === "number" ? BigInt(message.validFrom) : $util.Long.fromBits(message.validFrom.low >>> 0, message.validFrom.high >>> 0, false).toBigInt();
                    else if (typeof message.validFrom === "number")
                        object.validFrom = options.longs === String ? String(message.validFrom) : message.validFrom;
                    else
                        object.validFrom = options.longs === String ? $util.Long.prototype.toString.call(message.validFrom) : options.longs === Number ? new $util.LongBits(message.validFrom.low >>> 0, message.validFrom.high >>> 0).toNumber() : message.validFrom;
                if (message.validTo != null && Object.hasOwnProperty.call(message, "validTo"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.validTo = typeof message.validTo === "number" ? BigInt(message.validTo) : $util.Long.fromBits(message.validTo.low >>> 0, message.validTo.high >>> 0, false).toBigInt();
                    else if (typeof message.validTo === "number")
                        object.validTo = options.longs === String ? String(message.validTo) : message.validTo;
                    else
                        object.validTo = options.longs === String ? $util.Long.prototype.toString.call(message.validTo) : options.longs === Number ? new $util.LongBits(message.validTo.low >>> 0, message.validTo.high >>> 0).toNumber() : message.validTo;
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    object.description = message.description;
                if (message.polygon && message.polygon.length) {
                    object.polygon = [];
                    for (var j = 0; j < message.polygon.length; ++j)
                        object.polygon[j] = $root.smartboat.zone.CoordinatePoint.toObject(message.polygon[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this RestrictedZoneItem to JSON.
             * @function toJSON
             * @memberof smartboat.zone.RestrictedZoneItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RestrictedZoneItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RestrictedZoneItem
             * @function getTypeUrl
             * @memberof smartboat.zone.RestrictedZoneItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RestrictedZoneItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.zone.RestrictedZoneItem";
            };

            return RestrictedZoneItem;
        })();

        zone.RestrictedZonesPack = (function() {

            /**
             * Properties of a RestrictedZonesPack.
             * @memberof smartboat.zone
             * @interface IRestrictedZonesPack
             * @property {string|null} [version] RestrictedZonesPack version
             * @property {number|Long|null} [updatedAt] RestrictedZonesPack updatedAt
             * @property {Array.<smartboat.zone.IRestrictedZoneItem>|null} [zones] RestrictedZonesPack zones
             */

            /**
             * Constructs a new RestrictedZonesPack.
             * @memberof smartboat.zone
             * @classdesc Represents a RestrictedZonesPack.
             * @implements IRestrictedZonesPack
             * @constructor
             * @param {smartboat.zone.IRestrictedZonesPack=} [properties] Properties to set
             */
            function RestrictedZonesPack(properties) {
                this.zones = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RestrictedZonesPack version.
             * @member {string} version
             * @memberof smartboat.zone.RestrictedZonesPack
             * @instance
             */
            RestrictedZonesPack.prototype.version = "";

            /**
             * RestrictedZonesPack updatedAt.
             * @member {number|Long} updatedAt
             * @memberof smartboat.zone.RestrictedZonesPack
             * @instance
             */
            RestrictedZonesPack.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RestrictedZonesPack zones.
             * @member {Array.<smartboat.zone.IRestrictedZoneItem>} zones
             * @memberof smartboat.zone.RestrictedZonesPack
             * @instance
             */
            RestrictedZonesPack.prototype.zones = $util.emptyArray;

            /**
             * Creates a new RestrictedZonesPack instance using the specified properties.
             * @function create
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {smartboat.zone.IRestrictedZonesPack=} [properties] Properties to set
             * @returns {smartboat.zone.RestrictedZonesPack} RestrictedZonesPack instance
             */
            RestrictedZonesPack.create = function create(properties) {
                return new RestrictedZonesPack(properties);
            };

            /**
             * Encodes the specified RestrictedZonesPack message. Does not implicitly {@link smartboat.zone.RestrictedZonesPack.verify|verify} messages.
             * @function encode
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {smartboat.zone.IRestrictedZonesPack} message RestrictedZonesPack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestrictedZonesPack.encode = function encode(message, writer, q) {
                if (!writer)
                    writer = $Writer.create();
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.updatedAt);
                if (message.zones != null && message.zones.length)
                    for (var i = 0; i < message.zones.length; ++i)
                        $root.smartboat.zone.RestrictedZoneItem.encode(message.zones[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), q + 1).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RestrictedZonesPack message, length delimited. Does not implicitly {@link smartboat.zone.RestrictedZonesPack.verify|verify} messages.
             * @function encodeDelimited
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {smartboat.zone.IRestrictedZonesPack} message RestrictedZonesPack message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestrictedZonesPack.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RestrictedZonesPack message from the specified reader or buffer.
             * @function decode
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {smartboat.zone.RestrictedZonesPack} RestrictedZonesPack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestrictedZonesPack.decode = function decode(reader, length, error, long) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (long === undefined)
                    long = 0;
                if (long > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.smartboat.zone.RestrictedZonesPack();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.version = reader.string();
                            break;
                        }
                    case 2: {
                            message.updatedAt = reader.int64();
                            break;
                        }
                    case 3: {
                            if (!(message.zones && message.zones.length))
                                message.zones = [];
                            message.zones.push($root.smartboat.zone.RestrictedZoneItem.decode(reader, reader.uint32(), undefined, long + 1));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7, long);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RestrictedZonesPack message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {smartboat.zone.RestrictedZonesPack} RestrictedZonesPack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestrictedZonesPack.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RestrictedZonesPack message.
             * @function verify
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RestrictedZonesPack.verify = function verify(message, long) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    return "maximum nesting depth exceeded";
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                    if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                        return "updatedAt: integer|Long expected";
                if (message.zones != null && Object.hasOwnProperty.call(message, "zones")) {
                    if (!Array.isArray(message.zones))
                        return "zones: array expected";
                    for (var i = 0; i < message.zones.length; ++i) {
                        var error = $root.smartboat.zone.RestrictedZoneItem.verify(message.zones[i], long + 1);
                        if (error)
                            return "zones." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RestrictedZonesPack message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {smartboat.zone.RestrictedZonesPack} RestrictedZonesPack
             */
            RestrictedZonesPack.fromObject = function fromObject(object, long) {
                if (object instanceof $root.smartboat.zone.RestrictedZonesPack)
                    return object;
                if (!$util.isObject(object))
                    throw TypeError(".smartboat.zone.RestrictedZonesPack: object expected");
                if (long === undefined)
                    long = 0;
                if (long > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var message = new $root.smartboat.zone.RestrictedZonesPack();
                if (object.version != null)
                    message.version = String(object.version);
                if (object.updatedAt != null)
                    if ($util.Long)
                        message.updatedAt = $util.Long.fromValue(object.updatedAt, false);
                    else if (typeof object.updatedAt === "string")
                        message.updatedAt = parseInt(object.updatedAt, 10);
                    else if (typeof object.updatedAt === "number")
                        message.updatedAt = object.updatedAt;
                    else if (typeof object.updatedAt === "object")
                        message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
                if (object.zones) {
                    if (!Array.isArray(object.zones))
                        throw TypeError(".smartboat.zone.RestrictedZonesPack.zones: array expected");
                    message.zones = [];
                    for (var i = 0; i < object.zones.length; ++i) {
                        if (!$util.isObject(object.zones[i]))
                            throw TypeError(".smartboat.zone.RestrictedZonesPack.zones: object expected");
                        message.zones[i] = $root.smartboat.zone.RestrictedZoneItem.fromObject(object.zones[i], long + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RestrictedZonesPack message. Also converts values to other types if specified.
             * @function toObject
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {smartboat.zone.RestrictedZonesPack} message RestrictedZonesPack
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RestrictedZonesPack.toObject = function toObject(message, options, q) {
                if (!options)
                    options = {};
                if (q === undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.zones = [];
                if (options.defaults) {
                    object.version = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                    } else
                        object.updatedAt = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
                }
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    object.version = message.version;
                if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                    if (typeof BigInt !== "undefined" && options.longs === BigInt)
                        object.updatedAt = typeof message.updatedAt === "number" ? BigInt(message.updatedAt) : $util.Long.fromBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0, false).toBigInt();
                    else if (typeof message.updatedAt === "number")
                        object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                    else
                        object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
                if (message.zones && message.zones.length) {
                    object.zones = [];
                    for (var j = 0; j < message.zones.length; ++j)
                        object.zones[j] = $root.smartboat.zone.RestrictedZoneItem.toObject(message.zones[j], options, q + 1);
                }
                return object;
            };

            /**
             * Converts this RestrictedZonesPack to JSON.
             * @function toJSON
             * @memberof smartboat.zone.RestrictedZonesPack
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RestrictedZonesPack.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RestrictedZonesPack
             * @function getTypeUrl
             * @memberof smartboat.zone.RestrictedZonesPack
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RestrictedZonesPack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/smartboat.zone.RestrictedZonesPack";
            };

            return RestrictedZonesPack;
        })();

        return zone;
    })();

    return smartboat;
})();

module.exports = $root;
