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
 * The Badge model module.
 * @module model/Badge
 * @version 0.9.2
 */
export default class Badge {
  /**
   * Constructs a new <code>Badge</code>.
   * @alias module:model/Badge
   * @class
   * @param id {String} (必須) バッジの識別子
   * @param description {String} (任意) バッジの作成目的や用途など任意で設定可能な説明文
   * @param status {Number} (必須) バッジの状態(1: アクティブ, 0: 停止中)
   * @param createdAt {String} (必須) グループの作成日時
   * @param updatedAt {String} (必須) グループの最終更新日時
   */
  constructor(id, description, status, createdAt, updatedAt) {
    this.id = id;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>Badge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Badge} obj Optional instance to populate.
   * @return {module:model/Badge} The populated <code>Badge</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Badge();
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
 * (必須) バッジの識別子
 * @member {String} id
 */
Badge.prototype.id = undefined;

/**
 * (任意) バッジのラベル名
 * @member {String} label
 */
Badge.prototype.label = undefined;

/**
 * (任意) バッジのファイル名
 * @member {String} filename
 */
Badge.prototype.filename = undefined;

/**
 * (任意) バッジの作成目的や用途など任意で設定可能な説明文
 * @member {String} description
 */
Badge.prototype.description = undefined;

/**
 * (必須) バッジの状態(1: アクティブ, 0: 停止中)
 * @member {Number} status
 */
Badge.prototype.status = undefined;

/**
 * (任意) バッジに紐付いたVCスキーマ
 * @member {Object} vcSchema
 */
Badge.prototype.vcSchema = undefined;

/**
 * (任意) バッジに紐付き、メタデータとなるVC情報
 * @member {Object} vcInfo
 */
Badge.prototype.vcInfo = undefined;

/**
 * (必須) グループの作成日時
 * @member {String} createdAt
 */
Badge.prototype.createdAt = undefined;

/**
 * (必須) グループの最終更新日時
 * @member {String} updatedAt
 */
Badge.prototype.updatedAt = undefined;

