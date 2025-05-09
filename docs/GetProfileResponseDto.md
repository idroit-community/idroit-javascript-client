# IDroitDashboardAdminApi.GetProfileResponseDto

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | アカウントの識別子 | 
**name** | **String** | アカウントの名前 | 
**email** | **String** | アカウントのメールアドレス | 
**role** | **String** | アカウントロール(\&quot;admin\&quot;, \&quot;user\&quot;, \&quot;client\&quot;) | 
**iat** | **Number** | JWTが発行された日時 | 
**exp** | **Number** | JWTが失効する日時 | 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `admin` (value: `"admin"`)
* `user` (value: `"user"`)
* `client` (value: `"client"`)

