# IDroitDashboardAdminApi.UserResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ユーザーアカウントの識別子 | 
**name** | **String** | ユーザーアカウントの名前 | 
**email** | **String** | ユーザーアカウントのメールアドレス | 
**needActivateFlow** | **Boolean** | ユーザーアクティベーション(true: アクティブ /false: 停止中) | 
**status** | **String** | ユーザーのアカウントステータス(\&quot;inactive\&quot;: アクティブ未完了, \&quot;acrivating\&quot;: アクティブ作業途中, \&quot;active\&quot;: アクティブ中, \&quot;deactive\&quot;: 論理削除済) | 
**role** | **String** | ユーザーのアカウントロール(\&quot;admin\&quot;, \&quot;user\&quot;, \&quot;client\&quot;) | 
**userTokens** | [**[UserToken]**](UserToken.md) | (任意) ユーザーアカウントがアップロードしたファイルの配列。 | 
**createdBy** | **AllOfUserResponseDtoCreatedBy** | ユーザーアカウントを作成したユーザーアカウント | 
**didInfos** | [**[DidInfo]**](DidInfo.md) | ユーザーアカウントに紐付けられたDID情報の配列 | [optional] 
**vcInfos** | [**[VcInfo]**](VcInfo.md) | ユーザーアカウントに紐付けられたVC情報の配列 | [optional] 
**vpInfos** | [**[VpInfo]**](VpInfo.md) | ユーザーアカウントに紐付けられたVP情報の配列 | [optional] 
**groups** | [**[Group]**](Group.md) | ユーザーアカウントが作成したグループの配列 | [optional] 
**createdUsers** | [**[User]**](User.md) | ユーザーアカウントに紐付けされたVP情報の配列 | [optional] 
**createdVcInfos** | [**[VcInfo]**](VcInfo.md) | ユーザーが作成したVC情報の配列 | [optional] 
**createdVpInfos** | [**[VpInfo]**](VpInfo.md) | ユーザーが作成したVP情報の配列 | [optional] 
**createdGroups** | [**[Group]**](Group.md) | ユーザーアカウントが作成したグループの配列 | [optional] 
**createdDidInfos** | [**[DidInfo]**](DidInfo.md) | ユーザーが作成したDID情報の配列 | [optional] 
**createdVcSchemas** | [**[VcSchema]**](VcSchema.md) | ユーザーが作成したVCスキーマの配列 | [optional] 
**createdVerifications** | [**[Verification]**](Verification.md) | ユーザーアカウントが実行した検証結果の配列 | [optional] 
**createdMails** | [**[Mail]**](Mail.md) | Admin権限アカウントが送信したメールの配列 | [optional] 
**createdFiles** | **[File]** | ユーザーアカウントに紐付けされたファイルの配列 | [optional] 
**createdAt** | **String** | ユーザーアカウントの作成日時 | 
**updatedAt** | **String** | ユーザーアカウントの更新日時 | 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `inactive` (value: `"inactive"`)
* `activating` (value: `"activating"`)
* `active` (value: `"active"`)
* `deactive` (value: `"deactive"`)


<a name="RoleEnum"></a>
## Enum: RoleEnum

* `admin` (value: `"admin"`)
* `user` (value: `"user"`)
* `client` (value: `"client"`)

