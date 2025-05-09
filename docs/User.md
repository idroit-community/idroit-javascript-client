# IDroitDashboardAdminApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | アカウントの識別子 | 
**name** | **String** | アカウントの名前 | 
**email** | **String** | アカウントのメールアドレス | 
**password** | **String** | アカウントのパスワード(8文字以上20字未満) | 
**needActivateFlow** | **Boolean** | (必須: {default: false}) アカウントの有効化フローが必要か否か(true: 必要 /false: 不要) | 
**status** | **String** | ユーザーのアカウントステータス | 
**role** | **String** | アカウントのロール(admin/user/clinet) | 
**createdBy** | **AllOfUserCreatedBy** | (任意) このアカウントを作成したユーザー | [optional] 
**didInfos** | [**[DidInfo]**](DidInfo.md) | (任意) アカウントに紐付けされたDID情報の配列 | [optional] 
**vcInfos** | [**[VcInfo]**](VcInfo.md) | (任意) アカウントに紐付けされたVC情報の配列 | [optional] 
**vpInfos** | [**[VpInfo]**](VpInfo.md) | (任意) アカウントに紐付けされたVP情報の配列 | [optional] 
**groups** | [**[Group]**](Group.md) | (任意) アカウントに紐付けされたグループの配列 | [optional] 
**userTokens** | [**[UserToken]**](UserToken.md) | (任意) ユーザーアカウントがアップロードしたファイルの配列。 | 
**createdUsers** | [**[User]**](User.md) | (任意) このユーザーによって作成されたアカウントの配列 | [optional] 
**createdVcInfos** | [**[VcInfo]**](VcInfo.md) | (任意) アカウントに紐付けされたVC情報の配列 | [optional] 
**createdVpInfos** | [**[VpInfo]**](VpInfo.md) | (任意) アカウントに紐付けされたVP情報の配列 | [optional] 
**createdGroups** | [**[Group]**](Group.md) | (任意) アカウントに作成したグループの配列 | [optional] 
**createdDidInfos** | [**[DidInfo]**](DidInfo.md) | (任意) アカウントが作成したDID情報の配列 | [optional] 
**createdVcSchemas** | [**[VcSchema]**](VcSchema.md) | (任意) ユーザーアカウントが作成したVCスキーマの配列。 | 
**createdVerifications** | [**[Verification]**](Verification.md) | (任意) ユーザーアカウントが実行した検証結果の配列。 | 
**createdMails** | [**[Mail]**](Mail.md) | (任意) Admin権限アカウントが送信したメールの配列(Adminロール以外の場合、関係のないカラム) | [optional] 
**createdFiles** | **[File]** | (任意) ユーザーアカウントがアップロードしたファイルの配列。 | 
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

