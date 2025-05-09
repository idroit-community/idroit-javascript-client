# IDroitDashboardAdminApi.VpInfosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vpInfosControllerAddLabel**](VpInfosApi.md#vpInfosControllerAddLabel) | **PUT** /api/v1/vp-infos/{id}/label | VP情報へのラベル追加
[**vpInfosControllerConnectUser**](VpInfosApi.md#vpInfosControllerConnectUser) | **PUT** /api/v1/vp-infos/{id} | VP情報へのクライアントアカウント紐付け
[**vpInfosControllerCreate**](VpInfosApi.md#vpInfosControllerCreate) | **POST** /api/v1/vp-infos | 新規VP生成
[**vpInfosControllerDisconnectUser**](VpInfosApi.md#vpInfosControllerDisconnectUser) | **DELETE** /api/v1/vp-infos/{id}/user | VP情報のクライアントアカウント紐付け解除
[**vpInfosControllerFindAll**](VpInfosApi.md#vpInfosControllerFindAll) | **GET** /api/v1/vp-infos | VP情報一覧取得
[**vpInfosControllerFindOne**](VpInfosApi.md#vpInfosControllerFindOne) | **GET** /api/v1/vp-infos/{id} | VP情報詳細取得
[**vpInfosControllerUpload**](VpInfosApi.md#vpInfosControllerUpload) | **POST** /api/v1/vp-infos/upload | 新規VPアップロード

<a name="vpInfosControllerAddLabel"></a>
# **vpInfosControllerAddLabel**
> VpInfoResponseDto vpInfosControllerAddLabel(body, id)

VP情報へのラベル追加

リクエストパラメータのidで指定された単一のVP情報に対して、任意の管理用ラベルを追加します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let body = new IDroitDashboardAdminApi.AddLabelToVpInfoDto(); // AddLabelToVpInfoDto | 
let id = "id_example"; // String | 

apiInstance.vpInfosControllerAddLabel(body, id, (error, data, response) => {
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
 **body** | [**AddLabelToVpInfoDto**](AddLabelToVpInfoDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**VpInfoResponseDto**](VpInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vpInfosControllerConnectUser"></a>
# **vpInfosControllerConnectUser**
> vpInfosControllerConnectUser(body, id)

VP情報へのクライアントアカウント紐付け

VP情報の所有者、関係者などの管理者としてクライアントアカウントを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let body = new IDroitDashboardAdminApi.UpdateVcInfoDto(); // UpdateVcInfoDto | 
let id = "id_example"; // String | 

apiInstance.vpInfosControllerConnectUser(body, id, (error, data, response) => {
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
 **body** | [**UpdateVcInfoDto**](UpdateVcInfoDto.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="vpInfosControllerCreate"></a>
# **vpInfosControllerCreate**
> vpInfosControllerCreate(body)

新規VP生成

新規VPを生成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let body = new IDroitDashboardAdminApi.CreateVpInfoDto(); // CreateVpInfoDto | 

apiInstance.vpInfosControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateVpInfoDto**](CreateVpInfoDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="vpInfosControllerDisconnectUser"></a>
# **vpInfosControllerDisconnectUser**
> vpInfosControllerDisconnectUser(id)

VP情報のクライアントアカウント紐付け解除

VP情報に紐付いたクライアントアカウントの紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let id = "id_example"; // String | 

apiInstance.vpInfosControllerDisconnectUser(id, (error, data, response) => {
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

<a name="vpInfosControllerFindAll"></a>
# **vpInfosControllerFindAll**
> VpInfoResponseDto vpInfosControllerFindAll(opts)

VP情報一覧取得

アプリケーションが管理するVP情報を一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'label': "label_example", // String | (任意) 例: \"vc-for-project1\"
  'description': "description_example" // String | (任意) 
};
apiInstance.vpInfosControllerFindAll(opts, (error, data, response) => {
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
 **label** | **String**| (任意) 例: \&quot;vc-for-project1\&quot; | [optional] 
 **description** | **String**| (任意)  | [optional] 

### Return type

[**VpInfoResponseDto**](VpInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vpInfosControllerFindOne"></a>
# **vpInfosControllerFindOne**
> VpInfoDetailDto vpInfosControllerFindOne(id)

VP情報詳細取得

リクエストパラメータのidで指定された単一のVP情報の詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let id = "id_example"; // String | 

apiInstance.vpInfosControllerFindOne(id, (error, data, response) => {
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

[**VpInfoDetailDto**](VpInfoDetailDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vpInfosControllerUpload"></a>
# **vpInfosControllerUpload**
> VpInfoResponseDto vpInfosControllerUpload(credentialObject, label, description)

新規VPアップロード

外部で発行された既存VPをアップロードし、本アプリケーションに保存します。。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VpInfosApi();
let credentialObject = null; // Object | 
let label = "label_example"; // String | 
let description = "description_example"; // String | 

apiInstance.vpInfosControllerUpload(credentialObject, label, description, (error, data, response) => {
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
 **credentialObject** | [**Object**](.md)|  | 
 **label** | **String**|  | 
 **description** | **String**|  | 

### Return type

[**VpInfoResponseDto**](VpInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

