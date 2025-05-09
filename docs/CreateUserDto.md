# IDroitDashboardAdminApi.CreateUserDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | (必須) ユーザーアカウントの名前 | 
**email** | **String** | (必須) ユーザーアカウントのメールアドレス | 
**password** | **String** | (任意) ユーザーアカウントのパスワード(8文字以上20字未満)。\&quot;needActivateFlow\&quot;が\&quot;false\&quot;の場合は必須。 | [optional] 
**role** | **String** | (必須) アカウントのタイプ | 
**needActivateFlow** | **Boolean** | (任意) アカウントの有効化フローが必要か否か。デフォルト値ではfalse。(true: 必要 /false: 不要) | [optional] 
**groupIds** | **[String]** | (任意) ユーザーアカウントに紐付けるグループのIDの配列 | [optional] 
