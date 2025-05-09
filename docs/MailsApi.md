# IDroitDashboardAdminApi.MailsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mailsControllerFindAll**](MailsApi.md#mailsControllerFindAll) | **GET** /api/v1/mails | 送信済みメール一覧取得
[**mailsControllerFindOne**](MailsApi.md#mailsControllerFindOne) | **GET** /api/v1/mails/{id} | 送信済みメール詳細取得
[**mailsControllerSend**](MailsApi.md#mailsControllerSend) | **POST** /api/v1/mails | 新規単一メール送信
[**mailsControllerSendBatch**](MailsApi.md#mailsControllerSendBatch) | **POST** /api/v1/mails/batch | 新規複数メールバッチ送信

<a name="mailsControllerFindAll"></a>
# **mailsControllerFindAll**
> MailsResponseDto mailsControllerFindAll(opts)

送信済みメール一覧取得

送信済みメールを一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.MailsApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2 // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
};
apiInstance.mailsControllerFindAll(opts, (error, data, response) => {
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

### Return type

[**MailsResponseDto**](MailsResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailsControllerFindOne"></a>
# **mailsControllerFindOne**
> Mail mailsControllerFindOne(id)

送信済みメール詳細取得

リクエストパラメータのidで指定された単一の送信済みメールの詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.MailsApi();
let id = "id_example"; // String | 

apiInstance.mailsControllerFindOne(id, (error, data, response) => {
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

[**Mail**](Mail.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="mailsControllerSend"></a>
# **mailsControllerSend**
> mailsControllerSend(body)

新規単一メール送信

新規単一メールを作成し、送信します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.MailsApi();
let body = new IDroitDashboardAdminApi.SendMailDto(); // SendMailDto | 

apiInstance.mailsControllerSend(body, (error, data, response) => {
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
 **body** | [**SendMailDto**](SendMailDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="mailsControllerSendBatch"></a>
# **mailsControllerSendBatch**
> mailsControllerSendBatch(body)

新規複数メールバッチ送信

新規メールを複数作成し、送信します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.MailsApi();
let body = new IDroitDashboardAdminApi.SendMailBatchDto(); // SendMailBatchDto | 

apiInstance.mailsControllerSendBatch(body, (error, data, response) => {
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
 **body** | [**SendMailBatchDto**](SendMailBatchDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

