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
 * The VpInfoDetailDto model module.
 * @module model/VpInfoDetailDto
 * @version 0.9.2
 */
export default class VpInfoDetailDto {
  /**
   * Constructs a new <code>VpInfoDetailDto</code>.
   * @alias module:model/VpInfoDetailDto
   * @class
   * @param vpInfo {Object} VP情報
   * @param vpObject {Object} 
   */
  constructor(vpInfo, vpObject) {
    this.vpInfo = vpInfo;
    this.vpObject = vpObject;
  }

  /**
   * Constructs a <code>VpInfoDetailDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VpInfoDetailDto} obj Optional instance to populate.
   * @return {module:model/VpInfoDetailDto} The populated <code>VpInfoDetailDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VpInfoDetailDto();
      if (data.hasOwnProperty('vpInfo'))
        obj.vpInfo = ApiClient.convertToType(data['vpInfo'], Object);
      if (data.hasOwnProperty('vpObject'))
        obj.vpObject = ApiClient.convertToType(data['vpObject'], Object);
    }
    return obj;
  }
}

/**
 * VP情報
 * @member {Object} vpInfo
 */
VpInfoDetailDto.prototype.vpInfo = undefined;

/**
 * @member {Object} vpObject
 */
VpInfoDetailDto.prototype.vpObject = undefined;

