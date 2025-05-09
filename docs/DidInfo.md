# IDroitDashboardAdminApi.DidInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) DID情報の識別子 | 
**manageUuid** | **String** | (必須) DID情報の管理に用いるユニークな識別子 | 
**did** | **String** | (必須) DID | 
**method** | **String** | (必須) DIDメソッド | 
**label** | **String** | (任意) DIDの識別や整理などの管理するにあったてメタデータとして任意で設定可能な単語のフレーズ。(例: did-for-project1) | 
**domainName** | **String** | (任意) did:webメソッドでDIDを生成する際に必要なドメイン名。DIDによって指定されたドメインがドメインネームシステム(DNS)を通じて解決されるときのホスト名。did:webメソッド以外では必要のないカラムである。 | 
**existPrivateKey** | **Boolean** | (必須) DID情報に紐付いた秘密鍵を本アプリケーションで保管しているか否か | 
**description** | **String** | (任意) DID情報の生成目的や用途など任意で設定可能な説明文 | 
**user** | **AllOfDidInfoUser** | (任意) DID情報に紐付いたアカウントの配列 | [optional] 
**createdBy** | **AllOfDidInfoCreatedBy** | (任意) DIDを生成したユーザーアカウント | 
**vpInfos** | **AllOfDidInfoVpInfos** | (任意) 生成時に署名にDIDを用いたVP情報 | [optional] 
**groups** | [**[Group]**](Group.md) | (任意) DID情報に紐づいたグループの配列 | [optional] 
**createdAt** | **String** | (必須) DID情報の作成日時 | 
**updatedAt** | **String** | (必須) DID情報の最終更新 | 

<a name="MethodEnum"></a>
## Enum: MethodEnum

* `key` (value: `"key"`)
* `web` (value: `"web"`)
* `ethr` (value: `"ethr"`)
* `ethrarbitrumgoerli` (value: `"ethr:arbitrum:goerli"`)
* `ethrsepolia` (value: `"ethr:sepolia"`)

