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
import Badge from './Badge';
import Group from './Group';
import VcContext from './VcContext';
import VcInfo from './VcInfo';
import VcSchemaProperty from './VcSchemaProperty';

/**
 * The VcSchema model module.
 * @module model/VcSchema
 * @version 0.9.2
 */
export default class VcSchema {
  /**
   * Constructs a new <code>VcSchema</code>.
   * @alias module:model/VcSchema
   * @class
   * @param id {String} (必須) VCスキーマの識別子
   * @param title {String} (必須) VCスキーマのタイトル
   * @param version {String} (必須) VCスキーマのバージョン
   * @param description {String} (任意) VCスキーマの説明文
   * @param createdBy {Object} (必須) VCスキーマを作成したユーザーアカウント。
   * @param createdAt {String} (必須) VCスキーマの作成日時
   * @param updatedAt {String} (必須) VCスキーマの更新日時
   */
  constructor(id, title, version, description, createdBy, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.version = version;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>VcSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VcSchema} obj Optional instance to populate.
   * @return {module:model/VcSchema} The populated <code>VcSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VcSchema();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('isBadgeSchema'))
        obj.isBadgeSchema = ApiClient.convertToType(data['isBadgeSchema'], 'String');
      if (data.hasOwnProperty('vcInfos'))
        obj.vcInfos = ApiClient.convertToType(data['vcInfos'], [VcInfo]);
      if (data.hasOwnProperty('vcContexts'))
        obj.vcContexts = ApiClient.convertToType(data['vcContexts'], [VcContext]);
      if (data.hasOwnProperty('vcSchemaProperties'))
        obj.vcSchemaProperties = ApiClient.convertToType(data['vcSchemaProperties'], [VcSchemaProperty]);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [Group]);
      if (data.hasOwnProperty('badges'))
        obj.badges = ApiClient.convertToType(data['badges'], [Badge]);
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], Object);
      if (data.hasOwnProperty('createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], Object);
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'String');
    }
    return obj;
  }
}

/**
 * (必須) VCスキーマの識別子
 * @member {String} id
 */
VcSchema.prototype.id = undefined;

/**
 * (必須) VCスキーマのタイトル
 * @member {String} title
 */
VcSchema.prototype.title = undefined;

/**
 * (必須) VCスキーマのバージョン
 * @member {String} version
 */
VcSchema.prototype.version = undefined;

/**
 * (任意) VCスキーマの説明文
 * @member {String} description
 */
VcSchema.prototype.description = undefined;

/**
 * (必須) VCスキーマがバッジのスキーマか否か
 * @member {String} isBadgeSchema
 * @default 'false'
 */
VcSchema.prototype.isBadgeSchema = 'false';

/**
 * (任意) このVCスキーマを用いて生成したVC情報の配列。
 * @member {Array.<module:model/VcInfo>} vcInfos
 */
VcSchema.prototype.vcInfos = undefined;

/**
 * (任意) VCスキーマに設定したcontext項目の配列
 * @member {Array.<module:model/VcContext>} vcContexts
 */
VcSchema.prototype.vcContexts = undefined;

/**
 * (必須) VCスキーマの項目情報の配列
 * @member {Array.<module:model/VcSchemaProperty>} vcSchemaProperties
 */
VcSchema.prototype.vcSchemaProperties = undefined;

/**
 * (任意) VCスキーマを紐付けたグループの配列
 * @member {Array.<module:model/Group>} groups
 */
VcSchema.prototype.groups = undefined;

/**
 * (任意) VCスキーマを紐付けたバッジ
 * @member {Array.<module:model/Badge>} badges
 */
VcSchema.prototype.badges = undefined;

/**
 * (任意) VCスキーマに紐付けるバッジ用の画像。`isBadgeSchema`プロパティが`true`の場合必須。
 * @member {Object} file
 */
VcSchema.prototype.file = undefined;

/**
 * (必須) VCスキーマを作成したユーザーアカウント。
 * @member {Object} createdBy
 */
VcSchema.prototype.createdBy = undefined;

/**
 * (必須) VCスキーマの作成日時
 * @member {String} createdAt
 */
VcSchema.prototype.createdAt = undefined;

/**
 * (必須) VCスキーマの更新日時
 * @member {String} updatedAt
 */
VcSchema.prototype.updatedAt = undefined;

