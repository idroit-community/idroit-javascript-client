# IDroitDashboardAdminApi.UsersApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersControllerCreate**](UsersApi.md#usersControllerCreate) | **POST** /api/v1/users | ユーザーアカウント作成
[**usersControllerExportKey**](UsersApi.md#usersControllerExportKey) | **POST** /api/v1/users/{id}/keys/{keyId}/mail | アカウントへの鍵のメール送信
[**usersControllerFindAll**](UsersApi.md#usersControllerFindAll) | **GET** /api/v1/users | ユーザーアカウント一覧取得
[**usersControllerFindOne**](UsersApi.md#usersControllerFindOne) | **GET** /api/v1/users/{id} | ユーザーアカウント詳細取得
[**usersControllerInvite**](UsersApi.md#usersControllerInvite) | **POST** /api/v1/users/{id}/invite | ユーザーアカウントへのアカウント有効化メール送信
[**usersControllerRegisterUserDid**](UsersApi.md#usersControllerRegisterUserDid) | **POST** /api/v1/users/{id}/dids | Get the count of clients
[**usersControllerRegistration**](UsersApi.md#usersControllerRegistration) | **POST** /api/v1/users/registration | ユーザーアカウントへのアカウント有効化、登録フロー
[**usersControllerRemove**](UsersApi.md#usersControllerRemove) | **DELETE** /api/v1/users/{id} | ユーザーアカウント停止
[**usersControllerSendDid**](UsersApi.md#usersControllerSendDid) | **POST** /api/v1/users/{id}/dids/{didInfoId}/mail | アカウントへのDIDのメール送信
[**usersControllerSendKey**](UsersApi.md#usersControllerSendKey) | **POST** /api/v1/users/{id}/keys/{didInfoId}/mail | アカウントへのDIDのメール送信
[**usersControllerSendVc**](UsersApi.md#usersControllerSendVc) | **POST** /api/v1/users/{id}/vcs/{vcInfoId}/mail | アカウントへのVCのメール送信
[**usersControllerUpdate**](UsersApi.md#usersControllerUpdate) | **PUT** /api/v1/users/{id} | ユーザーアカウント更新

<a name="usersControllerCreate"></a>
# **usersControllerCreate**
> UserResponseDto usersControllerCreate(body)

ユーザーアカウント作成

新規ユーザーアカウントを作成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let body = new IDroitDashboardAdminApi.CreateUserDto(); // CreateUserDto | 

apiInstance.usersControllerCreate(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUserDto**](CreateUserDto.md)|  | 

### Return type

[**UserResponseDto**](UserResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersControllerExportKey"></a>
# **usersControllerExportKey**
> usersControllerExportKey(id, keyId)

アカウントへの鍵のメール送信

クライアントアカウントに紐付いたDIDの鍵情報をメールで送信し、共有します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 
let keyId = "keyId_example"; // String | 

apiInstance.usersControllerExportKey(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **keyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerFindAll"></a>
# **usersControllerFindAll**
> UsersResponseDto usersControllerFindAll(opts)

ユーザーアカウント一覧取得

ユーザーアカウントを一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'name': "name_example", // String | (任意) 例: \"Jhon Doe\"
  'email': "email_example", // String | (任意) 例: \"client1@email.com\"
  'status': "status_example", // String | (任意) 例: \"active\"
  'role': "role_example", // String | (任意) 例: \"client\"
  'needActivateFlow': true // Boolean | (任意) 例: true, false
};
apiInstance.usersControllerFindAll(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1) | [optional] 
 **limit** | **Number**| (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10) | [optional] 
 **name** | **String**| (任意) 例: \&quot;Jhon Doe\&quot; | [optional] 
 **email** | **String**| (任意) 例: \&quot;client1@email.com\&quot; | [optional] 
 **status** | **String**| (任意) 例: \&quot;active\&quot; | [optional] 
 **role** | **String**| (任意) 例: \&quot;client\&quot; | [optional] 
 **needActivateFlow** | **Boolean**| (任意) 例: true, false | [optional] 

### Return type

[**UsersResponseDto**](UsersResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerFindOne"></a>
# **usersControllerFindOne**
> UserResponseDto usersControllerFindOne(id)

ユーザーアカウント詳細取得

リクエストパラメータのidで指定された単一の管理者アカウントの詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 

apiInstance.usersControllerFindOne(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**UserResponseDto**](UserResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerInvite"></a>
# **usersControllerInvite**
> usersControllerInvite(id)

ユーザーアカウントへのアカウント有効化メール送信

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 

apiInstance.usersControllerInvite(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerRegisterUserDid"></a>
# **usersControllerRegisterUserDid**
> usersControllerRegisterUserDid(body, id)

Get the count of clients

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let body = new IDroitDashboardAdminApi.GenerateDidDto(); // GenerateDidDto | 
let id = "id_example"; // String | 

apiInstance.usersControllerRegisterUserDid(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GenerateDidDto**](GenerateDidDto.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersControllerRegistration"></a>
# **usersControllerRegistration**
> usersControllerRegistration(body, token)

ユーザーアカウントへのアカウント有効化、登録フロー

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let body = new IDroitDashboardAdminApi.RegistrationProcessDto(); // RegistrationProcessDto | 
let token = "token_example"; // String | 

apiInstance.usersControllerRegistration(body, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegistrationProcessDto**](RegistrationProcessDto.md)|  | 
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersControllerRemove"></a>
# **usersControllerRemove**
> usersControllerRemove(id)

ユーザーアカウント停止

リクエストパラメータのidで指定された単一のユーザーアカウントを停止します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 

apiInstance.usersControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerSendDid"></a>
# **usersControllerSendDid**
> usersControllerSendDid(id, didInfoId)

アカウントへのDIDのメール送信

アカウントに紐付いたDIDをメールで送信し、共有します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 
let didInfoId = "didInfoId_example"; // String | 

apiInstance.usersControllerSendDid(id, didInfoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **didInfoId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerSendKey"></a>
# **usersControllerSendKey**
> usersControllerSendKey(id, didInfoId)

アカウントへのDIDのメール送信

アカウントに紐付いたDIDをメールで送信し、共有します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 
let didInfoId = "didInfoId_example"; // String | 

apiInstance.usersControllerSendKey(id, didInfoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **didInfoId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerSendVc"></a>
# **usersControllerSendVc**
> usersControllerSendVc(id, vcInfoId)

アカウントへのVCのメール送信

アカウントに紐付いたVCをメールで送信し、共有します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let id = "id_example"; // String | 
let vcInfoId = "vcInfoId_example"; // String | 

apiInstance.usersControllerSendVc(id, vcInfoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **vcInfoId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersControllerUpdate"></a>
# **usersControllerUpdate**
> UserResponseDto usersControllerUpdate(body, id)

ユーザーアカウント更新

リクエストパラメータのidで指定された単一のユーザーアカウント情報を更新します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.UsersApi();
let body = new IDroitDashboardAdminApi.CreateUserDto(); // CreateUserDto | 
let id = "id_example"; // String | 

apiInstance.usersControllerUpdate(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUserDto**](CreateUserDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**UserResponseDto**](UserResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

