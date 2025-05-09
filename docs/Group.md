# IDroitDashboardAdminApi.Group

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) グループの識別子 | 
**name** | **String** | (必須) グループの名前。(例: プロジェクト名や企業名など) | 
**status** | **String** | (必須) グループの状態(1: アクティブ, 0: 停止中) | 
**description** | **String** | (任意) グループの作成目的や用途など任意で設定可能な説明文 | 
**users** | [**[User]**](User.md) | (任意) グループに紐付いたアカウントの配列 | [optional] 
**createdBy** | **AllOfGroupCreatedBy** | (必須) グループを作成したユーザーアカウント。 | 
**didInfos** | [**[DidInfo]**](DidInfo.md) | (任意) グループに紐付いたDID情報の配列 | [optional] 
**vcInfos** | [**[VcInfo]**](VcInfo.md) | (任意) グループに紐付いたVC情報の配列 | [optional] 
**vpInfos** | [**[VpInfo]**](VpInfo.md) | (任意) グループに紐付いたVP情報の配列 | [optional] 
**vcSchemas** | [**[VcSchema]**](VcSchema.md) | (任意) グループに紐付いたVCスキーマの配列 | [optional] 
**createdAt** | **String** | (必須) グループの作成日時 | 
**updatedAt** | **String** | (必須) グループの最終更新日時 | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `deactive` (value: `"deactive"`)

