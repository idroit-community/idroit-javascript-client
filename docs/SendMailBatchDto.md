# IDroitDashboardAdminApi.SendMailBatchDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | (必須) メールの件名 | 
**forEveryClient** | **Boolean** | (必須) 全てのクライアントアカウントに対して送信するか (true: 全てのクライアントアカウントに送信, false: 全てのクライアントアカウントに送信しない) | 
**forEveryUser** | **Boolean** | (必須) 全てのユーザーアカウントに対して送信するか (true: 全てのユーザーアカウントに送信, false: 全てのユーザーアカウントに送信しない) | 
**userIds** | **[String]** | (任意) メールの送信対象のユーザーアカウント識別子の配列 | [optional] 
**groupIds** | **[String]** | (任意) 送信対象のグループ識別子の配列。グループを指定した場合グループに紐付くユーザーアカウントとクライアントアカウント全てにメールが送信される | [optional] 
**content** | **String** | (必須) メールの内容 | 
