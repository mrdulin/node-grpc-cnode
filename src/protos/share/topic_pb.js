/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var share_user_pb = require('../share/user_pb.js');
goog.exportSymbol('proto.share.TopicBase', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.share.TopicBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.share.TopicBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.share.TopicBase.displayName = 'proto.share.TopicBase';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.share.TopicBase.prototype.toObject = function(opt_includeInstance) {
  return proto.share.TopicBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.share.TopicBase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.share.TopicBase.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    author: (f = msg.getAuthor()) && share_user_pb.UserBase.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastReplyAt: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.share.TopicBase}
 */
proto.share.TopicBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.share.TopicBase;
  return proto.share.TopicBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.share.TopicBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.share.TopicBase}
 */
proto.share.TopicBase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new share_user_pb.UserBase;
      reader.readMessage(value,share_user_pb.UserBase.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastReplyAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.share.TopicBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.share.TopicBase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.share.TopicBase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.share.TopicBase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      share_user_pb.UserBase.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastReplyAt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.share.TopicBase.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.share.TopicBase.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional UserBase author = 2;
 * @return {?proto.share.UserBase}
 */
proto.share.TopicBase.prototype.getAuthor = function() {
  return /** @type{?proto.share.UserBase} */ (
    jspb.Message.getWrapperField(this, share_user_pb.UserBase, 2));
};


/** @param {?proto.share.UserBase|undefined} value */
proto.share.TopicBase.prototype.setAuthor = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.share.TopicBase.prototype.clearAuthor = function() {
  this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.share.TopicBase.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.share.TopicBase.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.share.TopicBase.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string last_reply_at = 4;
 * @return {string}
 */
proto.share.TopicBase.prototype.getLastReplyAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.share.TopicBase.prototype.setLastReplyAt = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.share);
