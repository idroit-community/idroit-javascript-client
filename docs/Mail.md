# IDroitDashboardAdminApi.Mail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) 送信済みメールの識別子 | 
**title** | **String** | (必須) 送信済みメールの件名 | 
**content** | **String** | (必須) 送信済みメールの内容 | 
**forEveryUser** | **Boolean** | (必須) 全てのuser権限アカウントに対して送信するか。(true: 全てのuser権限アカウントに送信, false: 全てのuser権限アカウントに送信しない) | 
**forEveryClient** | **Boolean** | (必須) 全てのclient権限アカウントに対して送信するか。(true: 全てのclient権限アカウントに送信, false: 全てのclient権限アカウントに送信しない) | 
**users** | [**[User]**](User.md) | (任意) メールの送信先となるユーザーアカウントの配列 | [optional] 
**groups** | [**[Group]**](Group.md) | (任意) メールの送信先となるグループの配列 | [optional] 
**createdBy** | [**[User]**](User.md) | (必須) メール送信操作を行ったAdmin権限アカウント | [optional] 
**createdAt** | **String** | (必須) メールの送信日時 | 
**updatedAt** | **String** | (必須) メールの送信日時 | 
