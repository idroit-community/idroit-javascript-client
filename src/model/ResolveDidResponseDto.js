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
 * The ResolveDidResponseDto model module.
 * @module model/ResolveDidResponseDto
 * @version 0.9.2
 */
export default class ResolveDidResponseDto {
  /**
   * Constructs a new <code>ResolveDidResponseDto</code>.
   * @alias module:model/ResolveDidResponseDto
   * @class
   * @param context {Array.<String>} 
   * @param id {String} 
   * @param verificationMethod {Array.<Object>} 
   * @param assertionMethod {Array.<String>} 
   * @param authentication {Array.<String>} 
   * @param capabilityInvocation {Array.<String>} 
   * @param capabilityDelegation {Array.<String>} 
   * @param keyAgreement {Array.<String>} 
   */
  constructor(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    this.context = context;
    this.id = id;
    this.verificationMethod = verificationMethod;
    this.assertionMethod = assertionMethod;
    this.authentication = authentication;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }

  /**
   * Constructs a <code>ResolveDidResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResolveDidResponseDto} obj Optional instance to populate.
   * @return {module:model/ResolveDidResponseDto} The populated <code>ResolveDidResponseDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResolveDidResponseDto();
      if (data.hasOwnProperty('context'))
        obj.context = ApiClient.convertToType(data['context'], ['String']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('verificationMethod'))
        obj.verificationMethod = ApiClient.convertToType(data['verificationMethod'], [Object]);
      if (data.hasOwnProperty('assertionMethod'))
        obj.assertionMethod = ApiClient.convertToType(data['assertionMethod'], ['String']);
      if (data.hasOwnProperty('authentication'))
        obj.authentication = ApiClient.convertToType(data['authentication'], ['String']);
      if (data.hasOwnProperty('capabilityInvocation'))
        obj.capabilityInvocation = ApiClient.convertToType(data['capabilityInvocation'], ['String']);
      if (data.hasOwnProperty('capabilityDelegation'))
        obj.capabilityDelegation = ApiClient.convertToType(data['capabilityDelegation'], ['String']);
      if (data.hasOwnProperty('keyAgreement'))
        obj.keyAgreement = ApiClient.convertToType(data['keyAgreement'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} context
 */
ResolveDidResponseDto.prototype.context = undefined;

/**
 * @member {String} id
 */
ResolveDidResponseDto.prototype.id = undefined;

/**
 * @member {Array.<Object>} verificationMethod
 */
ResolveDidResponseDto.prototype.verificationMethod = undefined;

/**
 * @member {Array.<String>} assertionMethod
 */
ResolveDidResponseDto.prototype.assertionMethod = undefined;

/**
 * @member {Array.<String>} authentication
 */
ResolveDidResponseDto.prototype.authentication = undefined;

/**
 * @member {Array.<String>} capabilityInvocation
 */
ResolveDidResponseDto.prototype.capabilityInvocation = undefined;

/**
 * @member {Array.<String>} capabilityDelegation
 */
ResolveDidResponseDto.prototype.capabilityDelegation = undefined;

/**
 * @member {Array.<String>} keyAgreement
 */
ResolveDidResponseDto.prototype.keyAgreement = undefined;

