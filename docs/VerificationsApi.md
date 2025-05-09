# IDroitDashboardAdminApi.VerificationsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**verificationsControllerCreate**](VerificationsApi.md#verificationsControllerCreate) | **POST** /api/v1/verifications | VC/VP検証
[**verificationsControllerFindAll**](VerificationsApi.md#verificationsControllerFindAll) | **GET** /api/v1/verifications | VC/VP検証結果一覧取得
[**verificationsControllerFindOne**](VerificationsApi.md#verificationsControllerFindOne) | **GET** /api/v1/verifications/{id} | VC/VP検証結果詳細取得

<a name="verificationsControllerCreate"></a>
# **verificationsControllerCreate**
> VerificationResponseDto verificationsControllerCreate(body)

VC/VP検証

VC/VPの検証を実行します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VerificationsApi();
let body = new IDroitDashboardAdminApi.VerificationDto(); // VerificationDto | 

apiInstance.verificationsControllerCreate(body, (error, data, response) => {
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
 **body** | [**VerificationDto**](VerificationDto.md)|  | 

### Return type

[**VerificationResponseDto**](VerificationResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificationsControllerFindAll"></a>
# **verificationsControllerFindAll**
> VerificationsResponseDto verificationsControllerFindAll(opts)

VC/VP検証結果一覧取得

アプリケーションが管理するVC/VP検証結果を一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VerificationsApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'label': "label_example", // String | (任意) 例: \"verification-for-project1\"
  'result': true // Boolean | (任意) 例: true
};
apiInstance.verificationsControllerFindAll(opts, (error, data, response) => {
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
 **label** | **String**| (任意) 例: \&quot;verification-for-project1\&quot; | [optional] 
 **result** | **Boolean**| (任意) 例: true | [optional] 

### Return type

[**VerificationsResponseDto**](VerificationsResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verificationsControllerFindOne"></a>
# **verificationsControllerFindOne**
> VerificationResponseDto verificationsControllerFindOne(id)

VC/VP検証結果詳細取得

リクエストパラメータのidで指定された単一のVC/VP検証結果の詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VerificationsApi();
let id = "id_example"; // String | 

apiInstance.verificationsControllerFindOne(id, (error, data, response) => {
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

[**VerificationResponseDto**](VerificationResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

