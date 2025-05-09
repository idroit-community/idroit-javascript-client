# IDroitDashboardAdminApi.GroupResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | グループの識別子 | 
**name** | **String** |  グループの名前 | 
**status** | **String** | グループの状態(1: アクティブ, 0: 停止中) | 
**description** | **String** | グループの作成目的や用途など任意で設定可能な説明文 | 
**users** | [**[User]**](User.md) | グループに紐付いたユーザーアカウントの配列 | 
**createdBy** | **AllOfGroupResponseDtoCreatedBy** | グループを作成したユーザーアカウント | 
**didInfos** | [**[DidInfo]**](DidInfo.md) | グループに紐付いたVC情報の配列 | 
**vcInfos** | [**[VcInfo]**](VcInfo.md) | グループに紐付いたVC情報の配列 | 
**vpInfos** | [**[VpInfo]**](VpInfo.md) | グループに紐付いたVP情報の配列 | 
**vcSchemas** | [**[VcSchema]**](VcSchema.md) | グループに紐付いたVCスキーマの配列 | 
**createdAt** | **String** | グループの作成日時 | 
**updatedAt** | **String** | グループの最終更新日時 | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `active` (value: `"active"`)
* `deactive` (value: `"deactive"`)

