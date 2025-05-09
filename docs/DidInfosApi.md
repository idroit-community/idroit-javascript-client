# IDroitDashboardAdminApi.DidInfosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**didInfosControllerAddLabel**](DidInfosApi.md#didInfosControllerAddLabel) | **PUT** /api/v1/did-infos/{id} | DID情報へのラベル追加
[**didInfosControllerConnectUser**](DidInfosApi.md#didInfosControllerConnectUser) | **PUT** /api/v1/did-infos/{id}/user/{user_id} | DID情報へのクライアントアカウント紐付け
[**didInfosControllerCreate**](DidInfosApi.md#didInfosControllerCreate) | **POST** /api/v1/did-infos | 新規DID生成
[**didInfosControllerDisconnectUser**](DidInfosApi.md#didInfosControllerDisconnectUser) | **DELETE** /api/v1/did-infos/{id}/user | DID情報のクライアントアカウント紐付け解除
[**didInfosControllerFindAll**](DidInfosApi.md#didInfosControllerFindAll) | **GET** /api/v1/did-infos | DID情報一覧取得
[**didInfosControllerFindOne**](DidInfosApi.md#didInfosControllerFindOne) | **GET** /api/v1/did-infos/{id} | DID情報詳細取得
[**didInfosControllerRegister**](DidInfosApi.md#didInfosControllerRegister) | **POST** /api/v1/did-infos/register | 既存DID登録
[**didInfosControllerRemove**](DidInfosApi.md#didInfosControllerRemove) | **DELETE** /api/v1/did-infos/{id} | DID情報削除
[**didInfosControllerResolve**](DidInfosApi.md#didInfosControllerResolve) | **POST** /api/v1/did-infos/resolver | DID解決

<a name="didInfosControllerAddLabel"></a>
# **didInfosControllerAddLabel**
> DidInfoResponseDto didInfosControllerAddLabel(body, id)

DID情報へのラベル追加

リクエストパラメータのidで指定された単一のDID情報に対して、任意の管理用ラベルを追加します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let body = new IDroitDashboardAdminApi.AddLabelToDidInfoDto(); // AddLabelToDidInfoDto | 
let id = "id_example"; // String | 

apiInstance.didInfosControllerAddLabel(body, id, (error, data, response) => {
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
 **body** | [**AddLabelToDidInfoDto**](AddLabelToDidInfoDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**DidInfoResponseDto**](DidInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="didInfosControllerConnectUser"></a>
# **didInfosControllerConnectUser**
> DidInfoResponseDto didInfosControllerConnectUser(id, userId)

DID情報へのクライアントアカウント紐付け

DID情報の所有者、関係者などの管理者としてクライアントアカウントを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let id = "id_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.didInfosControllerConnectUser(id, userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**DidInfoResponseDto**](DidInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="didInfosControllerCreate"></a>
# **didInfosControllerCreate**
> didInfosControllerCreate(body)

新規DID生成

新規DIDを生成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let body = new IDroitDashboardAdminApi.CreateDidDto(); // CreateDidDto | 

apiInstance.didInfosControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateDidDto**](CreateDidDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="didInfosControllerDisconnectUser"></a>
# **didInfosControllerDisconnectUser**
> didInfosControllerDisconnectUser(id)

DID情報のクライアントアカウント紐付け解除

DID情報に紐付いたクライアントアカウントの紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let id = "id_example"; // String | 

apiInstance.didInfosControllerDisconnectUser(id, (error, data, response) => {
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
 - **Accept**: Not defined

<a name="didInfosControllerFindAll"></a>
# **didInfosControllerFindAll**
> DidInfosResponseDto didInfosControllerFindAll(opts)

DID情報一覧取得

アプリケーションが管理するDID情報を一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'did': "did_example", // String | (任意) 例: \"did:key:z6MkhGeGj7u5htkCYjE4PaQ8HUqjYyTmxpDb6Q1MqUpUDsN7\"
  'manageUuid': "manageUuid_example", // String | (任意) 例: \"32bad62a-4186-4d04-a26a-fcee79d5824b\"
  'label': "label_example", // String | (任意) 例: \"did-for-project1\"
  'method': "method_example", // String | (任意) 例: \"did:key
  'existPrivateKey': true, // Boolean | (任意) 例: true
  'description': "description_example", // String | (任意) 
  'domainName': "domainName_example" // String | (任意) 例: \"did:web:idroit-dashboard.com\"
};
apiInstance.didInfosControllerFindAll(opts, (error, data, response) => {
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
 **did** | **String**| (任意) 例: \&quot;did:key:z6MkhGeGj7u5htkCYjE4PaQ8HUqjYyTmxpDb6Q1MqUpUDsN7\&quot; | [optional] 
 **manageUuid** | **String**| (任意) 例: \&quot;32bad62a-4186-4d04-a26a-fcee79d5824b\&quot; | [optional] 
 **label** | **String**| (任意) 例: \&quot;did-for-project1\&quot; | [optional] 
 **method** | **String**| (任意) 例: \&quot;did:key | [optional] 
 **existPrivateKey** | **Boolean**| (任意) 例: true | [optional] 
 **description** | **String**| (任意)  | [optional] 
 **domainName** | **String**| (任意) 例: \&quot;did:web:idroit-dashboard.com\&quot; | [optional] 

### Return type

[**DidInfosResponseDto**](DidInfosResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="didInfosControllerFindOne"></a>
# **didInfosControllerFindOne**
> DidInfoResponseDto didInfosControllerFindOne(id)

DID情報詳細取得

リクエストパラメータのidで指定された単一のDID情報の詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let id = "id_example"; // String | 

apiInstance.didInfosControllerFindOne(id, (error, data, response) => {
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

[**DidInfoResponseDto**](DidInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="didInfosControllerRegister"></a>
# **didInfosControllerRegister**
> didInfosControllerRegister(body)

既存DID登録

外部で生成されたDIDを本アプリケーションに取り込みます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let body = new IDroitDashboardAdminApi.RegisterDidDto(); // RegisterDidDto | 

apiInstance.didInfosControllerRegister(body, (error, data, response) => {
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
 **body** | [**RegisterDidDto**](RegisterDidDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="didInfosControllerRemove"></a>
# **didInfosControllerRemove**
> didInfosControllerRemove(id)

DID情報削除

リクエストパラメータのidで指定された単一のDID情報を削除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let id = "id_example"; // String | 

apiInstance.didInfosControllerRemove(id, (error, data, response) => {
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
 - **Accept**: Not defined

<a name="didInfosControllerResolve"></a>
# **didInfosControllerResolve**
> ResolveDidResponseDto didInfosControllerResolve(body)

DID解決

DIDを解決した結果であるDID Documentの値を返します。このAPIでは保存などの処理を行いません。生成済みのDIDを保存したい場合、既存DID登録API(/did-infos/register)にリクエストを送信してください。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.DidInfosApi();
let body = new IDroitDashboardAdminApi.ResolveDidDto(); // ResolveDidDto | 

apiInstance.didInfosControllerResolve(body, (error, data, response) => {
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
 **body** | [**ResolveDidDto**](ResolveDidDto.md)|  | 

### Return type

[**ResolveDidResponseDto**](ResolveDidResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

