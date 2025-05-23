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
 * The VcInfoResponseDto model module.
 * @module model/VcInfoResponseDto
 * @version 0.9.2
 */
export default class VcInfoResponseDto {
  /**
   * Constructs a new <code>VcInfoResponseDto</code>.
   * @alias module:model/VcInfoResponseDto
   * @class
   * @param vcInfo {Object} 本アプリケーションにおけるVCの管理情報
   * @param vcObject {Object} VCのJSONデータ
   */
  constructor(vcInfo, vcObject) {
    this.vcInfo = vcInfo;
    this.vcObject = vcObject;
  }

  /**
   * Constructs a <code>VcInfoResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VcInfoResponseDto} obj Optional instance to populate.
   * @return {module:model/VcInfoResponseDto} The populated <code>VcInfoResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VcInfoResponseDto();
      if (data.hasOwnProperty('vcInfo'))
        obj.vcInfo = ApiClient.convertToType(data['vcInfo'], Object);
      if (data.hasOwnProperty('vcObject'))
        obj.vcObject = ApiClient.convertToType(data['vcObject'], Object);
    }
    return obj;
  }
}

/**
 * 本アプリケーションにおけるVCの管理情報
 * @member {Object} vcInfo
 */
VcInfoResponseDto.prototype.vcInfo = undefined;

/**
 * VCのJSONデータ
 * @member {Object} vcObject
 */
VcInfoResponseDto.prototype.vcObject = undefined;

