# IDroitDashboardAdminApi.VcSchemaResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | VCスキーマの識別子 | 
**title** | **String** | VCスキーマのタイトル | 
**version** | **String** | VCスキーマのバージョン | 
**description** | **String** | VCスキーマの説明文 | 
**isBadgeSchema** | **String** | VCスキーマがバッジのスキーマか否か | 
**vcInfos** | [**[VcInfo]**](VcInfo.md) |  | 
**vcContexts** | [**[VcContext]**](VcContext.md) | VCのスキーマのJSONスキーマコンテキスト | 
**vcSchemaProperties** | [**[VcSchemaProperty]**](VcSchemaProperty.md) | VCのスキーマの各項目における項目名と項目型のオブジェクトの配列 | 
**groups** | [**[Group]**](Group.md) |  | 
**badges** | [**[Badge]**](Badge.md) | VCスキーマを紐付けたバッジ | 
**file** | **AllOfVcSchemaResponseDtoFile** | VCスキーマに紐付けるバッジ用の画像。&#x60;isBadgeSchema&#x60;プロパティが&#x60;true&#x60;の場合必須。 | 
**createdBy** | **AllOfVcSchemaResponseDtoCreatedBy** | VCスキーマを作成したユーザーアカウント | 
**createdAt** | **String** | VCスキーマの作成日時 | 
**updatedAt** | **String** | VCスキーマの最終更新日時 | 
