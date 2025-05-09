# IDroitDashboardAdminApi.BadgesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**badgesControllerAddLabel**](BadgesApi.md#badgesControllerAddLabel) | **PUT** /api/v1/badges/{id}/label | Badgeへのラベル追加
[**badgesControllerCreate**](BadgesApi.md#badgesControllerCreate) | **POST** /api/v1/badges | 新規バッジ発行
[**badgesControllerDownload**](BadgesApi.md#badgesControllerDownload) | **GET** /api/v1/badges/{id}/download | バッジダウンロード
[**badgesControllerFileVerify**](BadgesApi.md#badgesControllerFileVerify) | **POST** /api/v1/badges/file | バッジファイル検証
[**badgesControllerFindAll**](BadgesApi.md#badgesControllerFindAll) | **GET** /api/v1/badges | バッジ一覧取得
[**badgesControllerFindOne**](BadgesApi.md#badgesControllerFindOne) | **GET** /api/v1/badges/{id} | バッジ詳細取得
[**badgesControllerVerify**](BadgesApi.md#badgesControllerVerify) | **PUT** /api/v1/badges/{id}/verify | バッジ検証

<a name="badgesControllerAddLabel"></a>
# **badgesControllerAddLabel**
> BadgeResponseDto badgesControllerAddLabel(body, id)

Badgeへのラベル追加

リクエストパラメータのidで指定された単一のBadgeに対して、任意の管理用ラベルを追加します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let body = new IDroitDashboardAdminApi.AddLabelToBadgeDto(); // AddLabelToBadgeDto | 
let id = "id_example"; // String | 

apiInstance.badgesControllerAddLabel(body, id, (error, data, response) => {
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
 **body** | [**AddLabelToBadgeDto**](AddLabelToBadgeDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**BadgeResponseDto**](BadgeResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="badgesControllerCreate"></a>
# **badgesControllerCreate**
> BadgeResponseDto badgesControllerCreate(body)

新規バッジ発行

新規バッジを発行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let body = new IDroitDashboardAdminApi.CreateBadgeDto(); // CreateBadgeDto | 

apiInstance.badgesControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateBadgeDto**](CreateBadgeDto.md)|  | 

### Return type

[**BadgeResponseDto**](BadgeResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="badgesControllerDownload"></a>
# **badgesControllerDownload**
> &#x27;Blob&#x27; badgesControllerDownload(id, vpInfoId)

バッジダウンロード

リクエストパラメータのidで指定された単一のバッジ画像のバイナリデータを返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let id = "id_example"; // String | 
let vpInfoId = "vpInfoId_example"; // String | 

apiInstance.badgesControllerDownload(id, vpInfoId, (error, data, response) => {
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
 **vpInfoId** | **String**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="badgesControllerFileVerify"></a>
# **badgesControllerFileVerify**
> VerifiyBadgeFileReponseDto badgesControllerFileVerify(file)

バッジファイル検証

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let file = "file_example"; // Blob | 

apiInstance.badgesControllerFileVerify(file, (error, data, response) => {
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
 **file** | **Blob**|  | 

### Return type

[**VerifiyBadgeFileReponseDto**](VerifiyBadgeFileReponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="badgesControllerFindAll"></a>
# **badgesControllerFindAll**
> BadgesResponseDto badgesControllerFindAll(opts)

バッジ一覧取得

アプリケーションが管理するバッジ情報を一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'label': "label_example", // String | (任意) 例: \"sample-badge-1\"
  'filename': "filename_example", // String | (任意) 例: \"badge-12345-12345.png\"
  'description': "description_example", // String | (任意) 
  'status': 1.2 // Number | (任意) 例: 1
};
apiInstance.badgesControllerFindAll(opts, (error, data, response) => {
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
 **label** | **String**| (任意) 例: \&quot;sample-badge-1\&quot; | [optional] 
 **filename** | **String**| (任意) 例: \&quot;badge-12345-12345.png\&quot; | [optional] 
 **description** | **String**| (任意)  | [optional] 
 **status** | **Number**| (任意) 例: 1 | [optional] 

### Return type

[**BadgesResponseDto**](BadgesResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="badgesControllerFindOne"></a>
# **badgesControllerFindOne**
> BadgeResponseDto badgesControllerFindOne(id)

バッジ詳細取得

リクエストパラメータのidで指定された単一のバッジ情報の詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let id = "id_example"; // String | 

apiInstance.badgesControllerFindOne(id, (error, data, response) => {
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

[**BadgeResponseDto**](BadgeResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="badgesControllerVerify"></a>
# **badgesControllerVerify**
> VerifiyBadgeReponseDto badgesControllerVerify(body, id)

バッジ検証

バッジのVC/VPの検証を実行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.BadgesApi();
let body = new IDroitDashboardAdminApi.VerifyBadgeDto(); // VerifyBadgeDto | 
let id = "id_example"; // String | 

apiInstance.badgesControllerVerify(body, id, (error, data, response) => {
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
 **body** | [**VerifyBadgeDto**](VerifyBadgeDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**VerifiyBadgeReponseDto**](VerifiyBadgeReponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

