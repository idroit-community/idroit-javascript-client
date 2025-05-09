# IDroitDashboardAdminApi.VpInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) VP情報の識別子 | 
**label** | **String** | (任意) VPの識別や整理などの管理するにあったてメタデータとして任意で設定可能な単語のフレーズ | [optional] 
**hash** | **String** | (必須) VPのハッシュ値。VPの保管における識別子として用いる。 | [optional] 
**description** | **String** | (任意) VCの発行目的や用途など任意で設定可能な説明文。 | [optional] 
**raw** | **String** | (必須) VPのバイナリデータ | 
**createdBy** | **AllOfVpInfoCreatedBy** | (任意) VP情報を生成したユーザーアカウント | 
**user** | **AllOfVpInfoUser** | (任意) VP情報と紐付いたアカウント | [optional] 
**vcInfos** | [**[VcInfo]**](VcInfo.md) | (任意) VPを生成する元となるVC情報 | [optional] 
**groups** | [**[Group]**](Group.md) | (任意) VP情報に紐づいたグループの配列 | [optional] 
**didInfo** | **AllOfVpInfoDidInfo** | (任意) VP生成時の署名に用いるDID情報の識別子 | [optional] 
**verifications** | [**[Verification]**](Verification.md) | (任意) VPの検証結果 | [optional] 
**createdAt** | **String** | (必須) VP情報の作成日時 | 
**updatedAt** | **String** | (必須) VP情報の更新日時 | 
