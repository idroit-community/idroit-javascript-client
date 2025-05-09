# IDroitDashboardAdminApi.FileResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) ファイルの識別子 | 
**filename** | **String** | (必須) システム内で管理される際にシステムによって名付けられるユニークなファイル名 | 
**originalname** | **String** | (必須) システム内で管理される際にシステムによって名付けられるユニークなファイル名 | 
**fileData** | **String** | (必須) システムへアップロード時の元のファイル名 | 
**fileType** | **String** | (必須) ファイル形式 | 
**type** | **String** | (必須) ファイル形式 | 
**executed** | **Boolean** | (任意) ファイルがCSVの場合、アカウントデータ生成実行に使用されたか。(true: 実行済み, false: 未使用) | 
**status** | **Number** | (必須) ファイルのステータス | 
**createdBy** | **AllOfFileResponseDtoCreatedBy** | ファイルをアップロードしたユーザーアカウント | 
**createdAt** | **String** | (必須) ファイルの作成日時 | 
**updatedAt** | **String** | (必須) グループの最終更新日時 | 
