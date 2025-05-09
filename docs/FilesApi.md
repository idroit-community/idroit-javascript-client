# IDroitDashboardAdminApi.FilesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesControllerDownload**](FilesApi.md#filesControllerDownload) | **GET** /api/v1/files/{id}/download | ファイルダウンロード
[**filesControllerExecuteCSV**](FilesApi.md#filesControllerExecuteCSV) | **POST** /api/v1/files/{id} | CSVファイル実行
[**filesControllerFindAll**](FilesApi.md#filesControllerFindAll) | **GET** /api/v1/files | ファイル一覧取得
[**filesControllerFindOne**](FilesApi.md#filesControllerFindOne) | **GET** /api/v1/files/{id} | ファイル詳細取得
[**filesControllerRemove**](FilesApi.md#filesControllerRemove) | **DELETE** /api/v1/files/{id} | ファイル削除
[**filesControllerUploadFile**](FilesApi.md#filesControllerUploadFile) | **POST** /api/v1/files | ファイルアップロード

<a name="filesControllerDownload"></a>
# **filesControllerDownload**
> &#x27;Blob&#x27; filesControllerDownload(id)

ファイルダウンロード

リクエストパラメータのidで指定された単一のファイルのバイナリデータを返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let id = "id_example"; // String | 

apiInstance.filesControllerDownload(id, (error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="filesControllerExecuteCSV"></a>
# **filesControllerExecuteCSV**
> filesControllerExecuteCSV(body, id)

CSVファイル実行

(非推奨) ユーザー、クライアント情報を記載したCSVファイルを実行し、新規アカウントを作成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let body = new IDroitDashboardAdminApi.CreateDidDto(); // CreateDidDto | 
let id = "id_example"; // String | 

apiInstance.filesControllerExecuteCSV(body, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="filesControllerFindAll"></a>
# **filesControllerFindAll**
> FilesResponseDto filesControllerFindAll(opts)

ファイル一覧取得

ファイルを一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'filename': "filename_example", // String | (任意) 例: \"file-1732019975229-394515535.png\"
  'originalname': "originalname_example", // String | (任意) 例: \"english-badge.png\"
  'executed': true, // Boolean | (任意) 例: true
  'type': "type_example", // String | (任意) 例: \"image/png\"
  'status': 1.2 // Number | (任意) 例: 0
};
apiInstance.filesControllerFindAll(opts, (error, data, response) => {
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
 **filename** | **String**| (任意) 例: \&quot;file-1732019975229-394515535.png\&quot; | [optional] 
 **originalname** | **String**| (任意) 例: \&quot;english-badge.png\&quot; | [optional] 
 **executed** | **Boolean**| (任意) 例: true | [optional] 
 **type** | **String**| (任意) 例: \&quot;image/png\&quot; | [optional] 
 **status** | **Number**| (任意) 例: 0 | [optional] 

### Return type

[**FilesResponseDto**](FilesResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filesControllerFindOne"></a>
# **filesControllerFindOne**
> FileResponseDto filesControllerFindOne(id)

ファイル詳細取得

リクエストパラメータのidで指定された単一のファイルの詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let id = "id_example"; // String | 

apiInstance.filesControllerFindOne(id, (error, data, response) => {
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

[**FileResponseDto**](FileResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="filesControllerRemove"></a>
# **filesControllerRemove**
> filesControllerRemove(id)

ファイル削除

リクエストパラメータのidで指定された単一のファイルを削除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let id = "id_example"; // String | 

apiInstance.filesControllerRemove(id, (error, data, response) => {
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

<a name="filesControllerUploadFile"></a>
# **filesControllerUploadFile**
> FileResponseDto filesControllerUploadFile(file)

ファイルアップロード

新規ファイルアップロードを作成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.FilesApi();
let file = "file_example"; // Blob | 

apiInstance.filesControllerUploadFile(file, (error, data, response) => {
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

[**FileResponseDto**](FileResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

