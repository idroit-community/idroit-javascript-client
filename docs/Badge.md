# IDroitDashboardAdminApi.Badge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) バッジの識別子 | 
**label** | **String** | (任意) バッジのラベル名 | [optional] 
**filename** | **String** | (任意) バッジのファイル名 | [optional] 
**description** | **String** | (任意) バッジの作成目的や用途など任意で設定可能な説明文 | 
**status** | **Number** | (必須) バッジの状態(1: アクティブ, 0: 停止中) | 
**vcSchema** | **AllOfBadgeVcSchema** | (任意) バッジに紐付いたVCスキーマ | [optional] 
**vcInfo** | **AllOfBadgeVcInfo** | (任意) バッジに紐付き、メタデータとなるVC情報 | [optional] 
**createdAt** | **String** | (必須) グループの作成日時 | 
**updatedAt** | **String** | (必須) グループの最終更新日時 | 
