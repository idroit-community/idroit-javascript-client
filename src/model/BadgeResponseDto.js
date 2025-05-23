/*
 * iDroit Dashboard Admin API
 *      これは[株式会社フォアー](https://www.fore-co.ltd/ja/)が開発するを使ったDecentralizd Identifiers / Verifiable Credentials(DID/VC)に関係する機能を簡単に利用するための REST API です。現在以下のユースケースをサポートしています。これは今後も拡張されていきます。     - DIDの生成:      - グループ管理機能       - (企業/プロジェクトのまとまり)ごとにユーザー、クライアント、証明書(VC)スキーマを紐付けて管理する。          詳細は以下を参照してください。     - [idroit dashboard admin UI](https://admin.idroit-dashboard.com)     - [idroit dashboard公式ホームページ]()     - [idroit dashboard操作マニュアル]()      以下は関連リンクです。     - [Universal Resolver](https://dev.uniresolver.io/)     - [W3C DID Core 1.0](https://www.w3.org/TR/did-core/)     - [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/)   
 *
 * OpenAPI spec version: 0.9.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The BadgeResponseDto model module.
 * @module model/BadgeResponseDto
 * @version 0.9.2
 */
export default class BadgeResponseDto {
  /**
   * Constructs a new <code>BadgeResponseDto</code>.
   * @alias module:model/BadgeResponseDto
   * @class
   * @param id {String} バッジの識別子
   * @param label {String} バッジのラベル名
   * @param filename {String} バッジのファイル名
   * @param description {String} バッジの作成目的や用途など任意で設定可能な説明文
   * @param status {Number} バッジの状態(1: 利用可, 0: 利用停止中)
   * @param vcSchema {Object} バッジに紐付いたVCスキーマの配列
   * @param vcInfo {Object} バッジに紐付いたVC情報の配列
   * @param createdAt {String} バッジの作成日時
   * @param updatedAt {String} バッジの最終更新日時
   */
  constructor(id, label, filename, description, status, vcSchema, vcInfo, createdAt, updatedAt) {
    this.id = id;
    this.label = label;
    this.filename = filename;
    this.description = description;
    this.status = status;
    this.vcSchema = vcSchema;
    this.vcInfo = vcInfo;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>BadgeResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadgeResponseDto} obj Optional instance to populate.
   * @return {module:model/BadgeResponseDto} The populated <code>BadgeResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BadgeResponseDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('vcSchema'))
        obj.vcSchema = ApiClient.convertToType(data['vcSchema'], Object);
      if (data.hasOwnProperty('vcInfo'))
        obj.vcInfo = ApiClient.convertToType(data['vcInfo'], Object);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'String');
    }
    return obj;
  }
}

/**
 * バッジの識別子
 * @member {String} id
 */
BadgeResponseDto.prototype.id = undefined;

/**
 * バッジのラベル名
 * @member {String} label
 */
BadgeResponseDto.prototype.label = undefined;

/**
 * バッジのファイル名
 * @member {String} filename
 */
BadgeResponseDto.prototype.filename = undefined;

/**
 * バッジの作成目的や用途など任意で設定可能な説明文
 * @member {String} description
 */
BadgeResponseDto.prototype.description = undefined;

/**
 * バッジの状態(1: 利用可, 0: 利用停止中)
 * @member {Number} status
 */
BadgeResponseDto.prototype.status = undefined;

/**
 * バッジに紐付いたVCスキーマの配列
 * @member {Object} vcSchema
 */
BadgeResponseDto.prototype.vcSchema = undefined;

/**
 * バッジに紐付いたVC情報の配列
 * @member {Object} vcInfo
 */
BadgeResponseDto.prototype.vcInfo = undefined;

/**
 * バッジの作成日時
 * @member {String} createdAt
 */
BadgeResponseDto.prototype.createdAt = undefined;

/**
 * バッジの最終更新日時
 * @member {String} updatedAt
 */
BadgeResponseDto.prototype.updatedAt = undefined;

