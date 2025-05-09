# IDroitDashboardAdminApi.VerificationResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | 検証結果の識別子 | 
**label** | **String** | 検証結果の識別や整理などの管理するにあったてメタデータとして任意で設定可能な単語のフレーズ。(例: verify-for-check) | 
**result** | **Boolean** | (必須) VC/VPの検証結果(true: 検証に成功, false: 検証に失敗) | 
**createdBy** | **AllOfVerificationResponseDtoCreatedBy** | グループを作成したユーザーアカウント | 
**vcInfo** | **AllOfVerificationResponseDtoVcInfo** | 検証を実行したVC情報の識別子 | 
**vpInfo** | **AllOfVerificationResponseDtoVpInfo** | 検証を実行したVP情報の識別子 | 
**createdAt** | **String** | 検証実行時の日時 | 
**updatedAt** | **String** | 検証結果の最終更新日 | 
