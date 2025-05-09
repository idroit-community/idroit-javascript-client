# IDroitDashboardAdminApi.VcInfosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vcInfosControllerAddLabel**](VcInfosApi.md#vcInfosControllerAddLabel) | **PUT** /api/v1/vc-infos/{id}/label | VC情報へのラベル追加
[**vcInfosControllerConnectUser**](VcInfosApi.md#vcInfosControllerConnectUser) | **PUT** /api/v1/vc-infos/{id} | VC情報へのクライアントアカウント紐付け
[**vcInfosControllerCreate**](VcInfosApi.md#vcInfosControllerCreate) | **POST** /api/v1/vc-infos | 新規VC発行
[**vcInfosControllerDisconnectUser**](VcInfosApi.md#vcInfosControllerDisconnectUser) | **DELETE** /api/v1/vc-infos/{id}/user | VC情報のクライアントアカウント紐付け解除
[**vcInfosControllerFindAll**](VcInfosApi.md#vcInfosControllerFindAll) | **GET** /api/v1/vc-infos | VC情報一覧取得
[**vcInfosControllerFindOne**](VcInfosApi.md#vcInfosControllerFindOne) | **GET** /api/v1/vc-infos/{id} | VC情報詳細取得
[**vcInfosControllerGenerateVp**](VcInfosApi.md#vcInfosControllerGenerateVp) | **POST** /api/v1/vc-infos/{id} | 新規VP情報生成
[**vcInfosControllerIssue**](VcInfosApi.md#vcInfosControllerIssue) | **POST** /api/v1/vc-infos/issue | 新規VC発行(スキーマなし)
[**vcInfosControllerUpload**](VcInfosApi.md#vcInfosControllerUpload) | **POST** /api/v1/vc-infos/upload | 新規VCアップロード

<a name="vcInfosControllerAddLabel"></a>
# **vcInfosControllerAddLabel**
> VcInfoResponseDto vcInfosControllerAddLabel(body, id)

VC情報へのラベル追加

リクエストパラメータのidで指定された単一のVC情報に対して、任意の管理用ラベルを追加します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let body = new IDroitDashboardAdminApi.AddLabelToVcInfoDto(); // AddLabelToVcInfoDto | 
let id = "id_example"; // String | 

apiInstance.vcInfosControllerAddLabel(body, id, (error, data, response) => {
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
 **body** | [**AddLabelToVcInfoDto**](AddLabelToVcInfoDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vcInfosControllerConnectUser"></a>
# **vcInfosControllerConnectUser**
> vcInfosControllerConnectUser(body, id)

VC情報へのクライアントアカウント紐付け

VC情報の所有者、関係者などの管理者としてクライアントアカウントを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let body = new IDroitDashboardAdminApi.UpdateVcInfoDto(); // UpdateVcInfoDto | 
let id = "id_example"; // String | 

apiInstance.vcInfosControllerConnectUser(body, id, (error, data, response) => {
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

<a name="vcInfosControllerCreate"></a>
# **vcInfosControllerCreate**
> VcInfoResponseDto vcInfosControllerCreate(body)

新規VC発行

新規VCを発行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let body = new IDroitDashboardAdminApi.CreateVcInfoDto(); // CreateVcInfoDto | 

apiInstance.vcInfosControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateVcInfoDto**](CreateVcInfoDto.md)|  | 

### Return type

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vcInfosControllerDisconnectUser"></a>
# **vcInfosControllerDisconnectUser**
> vcInfosControllerDisconnectUser(id)

VC情報のクライアントアカウント紐付け解除

VC情報に紐付いたクライアントアカウントの紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let id = "id_example"; // String | 

apiInstance.vcInfosControllerDisconnectUser(id, (error, data, response) => {
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

<a name="vcInfosControllerFindAll"></a>
# **vcInfosControllerFindAll**
> VcInfosResponseDto vcInfosControllerFindAll(opts)

VC情報一覧取得

アプリケーションが管理するVC情報を一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'label': "label_example", // String | (任意) 例: \"vc-for-project1\"
  'description': "description_example" // String | (任意) 
};
apiInstance.vcInfosControllerFindAll(opts, (error, data, response) => {
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

[**VcInfosResponseDto**](VcInfosResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vcInfosControllerFindOne"></a>
# **vcInfosControllerFindOne**
> VcInfoResponseDto vcInfosControllerFindOne(id)

VC情報詳細取得

リクエストパラメータのidで指定された単一のVC情報の詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let id = "id_example"; // String | 

apiInstance.vcInfosControllerFindOne(id, (error, data, response) => {
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

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vcInfosControllerGenerateVp"></a>
# **vcInfosControllerGenerateVp**
> VcInfoResponseDto vcInfosControllerGenerateVp(body, id)

新規VP情報生成

リクエストパラメータのidで指定されたVC情報から新規VPを発行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let body = new IDroitDashboardAdminApi.GenerateVpDto(); // GenerateVpDto | 
let id = "id_example"; // String | 

apiInstance.vcInfosControllerGenerateVp(body, id, (error, data, response) => {
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
 **body** | [**GenerateVpDto**](GenerateVpDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vcInfosControllerIssue"></a>
# **vcInfosControllerIssue**
> VcInfoResponseDto vcInfosControllerIssue(body)

新規VC発行(スキーマなし)

VCスキーマを指定せず直接新規VCを発行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let body = new IDroitDashboardAdminApi.IssueVcInfoDto(); // IssueVcInfoDto | 

apiInstance.vcInfosControllerIssue(body, (error, data, response) => {
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
 **body** | [**IssueVcInfoDto**](IssueVcInfoDto.md)|  | 

### Return type

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vcInfosControllerUpload"></a>
# **vcInfosControllerUpload**
> VcInfoResponseDto vcInfosControllerUpload(credentialObject, label, description)

新規VCアップロード

外部で発行された既存VCをアップロードし、本アプリケーションに保存します。。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcInfosApi();
let credentialObject = null; // Object | 
let label = "label_example"; // String | 
let description = "description_example"; // String | 

apiInstance.vcInfosControllerUpload(credentialObject, label, description, (error, data, response) => {
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

[**VcInfoResponseDto**](VcInfoResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

