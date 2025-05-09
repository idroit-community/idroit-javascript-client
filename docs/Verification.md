# IDroitDashboardAdminApi.Verification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | (必須) 検証結果の識別子 | 
**label** | **String** | (必須) 検証結果の識別や整理などの管理するにあったてメタデータとして任意で設定可能な単語のフレーズ。(例: verify-for-check) | 
**result** | **Boolean** | (必須) VC/VPの検証結果(true: 検証に成功, false: 検証に失敗) | 
**createdBy** | **AllOfVerificationCreatedBy** | (任意) 検証結果を作成したユーザーアカウント | 
**vcInfo** | **AllOfVerificationVcInfo** | (任意) 検証を実行したVC情報の識別子 | [optional] 
**vpInfo** | **AllOfVerificationVpInfo** | (任意) 検証を実行したVP情報の識別子 | [optional] 
**createdAt** | **String** | (必須) 検証実行時の日時 | 
**updatedAt** | **String** | (必須) 検証結果の最終更新日 | 
